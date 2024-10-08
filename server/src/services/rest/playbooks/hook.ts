import { BadRequestError, NotFoundError } from '../../../middlewares/api/ApiError';
import { SuccessResponse } from '../../../middlewares/api/ApiResponse';
import AnsibleLog from '../../../data/database/model/AnsibleLogs';
import AnsibleLogsRepo from '../../../data/database/repository/AnsibleLogsRepo';
import AnsibleTaskRepo from '../../../data/database/repository/AnsibleTaskRepo';
import AnsibleTaskStatusRepo from '../../../data/database/repository/AnsibleTaskStatusRepo';
import asyncHandler from '../../../middlewares/AsyncHandler';

export const addTaskStatus = asyncHandler(async (req, res) => {
  if (!req.body.runner_ident || !req.body.status) {
    throw new BadRequestError('Missing task status or id');
  }
  const ident = req.body.runner_ident;
  const status = req.body.status;
  const ansibleTask = await AnsibleTaskRepo.updateStatus(ident, status);
  if (ansibleTask) {
    await AnsibleTaskStatusRepo.create({
      ident: ident,
      status: status,
    });
    new SuccessResponse('Added task status').send(res);
  } else {
    throw new NotFoundError('Task not found');
  }
});

export const addTaskEvent = asyncHandler(async (req, res) => {
  if (!req.body.runner_ident) {
    throw new BadRequestError('Missing task id');
  }
  const removeEmptyLines = (str: string) =>
    str
      .split(/\r?\n/)
      .filter((line) => line.trim() !== '')
      .join('\n');
  const ansibleLog: AnsibleLog = {
    ident: req.body.runner_ident,
    logRunnerId: req.body.uuid,
    stdout: req.body.stdout ? removeEmptyLines(req.body.stdout) : undefined,
    content: JSON.stringify(req.body),
  };
  await AnsibleLogsRepo.create(ansibleLog);
  new SuccessResponse('Added task event').send(res);
});
