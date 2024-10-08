import { SettingsKeys } from 'ssm-shared-lib';
import { InternalError, NotFoundError } from '../../../middlewares/api/ApiError';
import { SuccessResponse } from '../../../middlewares/api/ApiResponse';
import { setToCache } from '../../../data/cache';
import asyncHandler from '../../../middlewares/AsyncHandler';

export const postContainerStatsSettings = asyncHandler(async (req, res) => {
  const { key } = req.params;
  const { value } = req.body;

  try {
    switch (key) {
      case SettingsKeys.GeneralSettingsKeys.CONTAINER_STATS_RETENTION_IN_DAYS:
        await setToCache(SettingsKeys.GeneralSettingsKeys.CONTAINER_STATS_RETENTION_IN_DAYS, value);
        return new SuccessResponse(`${key} successfully updated`).send(res);
      default:
        return new NotFoundError();
    }
  } catch (error: any) {
    throw new InternalError(error.message);
  }
});
