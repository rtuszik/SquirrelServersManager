import { body, param } from 'express-validator';
import { SettingsKeys } from 'ssm-shared-lib';
import validator from '../../middlewares/Validator';

export const postContainerStatsSettingsValidator = [
  param('key')
    .exists()
    .notEmpty()
    .withMessage('Key param is required')
    .equals(SettingsKeys.GeneralSettingsKeys.CONTAINER_STATS_RETENTION_IN_DAYS)
    .withMessage('Unknown key'),
  body('value').exists().isNumeric().withMessage('Value must be numeric'),
  validator,
];
