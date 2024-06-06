import { body } from 'express-validator';
import { SSHType } from 'ssm-shared-lib/distribution/enums/ansible';
import validator from '../../middlewares/validator';

export const postCheckAnsibleConnectionValidator = [
  body('ip')
    .exists()
    .notEmpty()
    .withMessage('Ip is required in body')
    .isIP()
    .withMessage('IP is invalid'),
  body('authType')
    .exists()
    .withMessage('authType in body is required')
    .isIn([SSHType.UserPassword, SSHType.KeyBased])
    .withMessage('authType is not in enum value SSHType'),
  body('sshPort').exists().notEmpty().isNumeric().withMessage('sshPort is not a number'),
  body('unManaged').optional().isBoolean().withMessage('unManaged is not a boolean'),
  body('masterNodeUrl')
    .optional()
    .isString()
    .isURL({ protocols: ['http', 'https'], require_protocol: true, require_tld: false })
    .withMessage('Master node url is not correctly formatted'),
  body('sshKey').if(body('authType').equals(SSHType.KeyBased)).exists().notEmpty().isString(),
  body('sshUser').if(body('authType').equals(SSHType.UserPassword)).exists().notEmpty().isString(),
  body('sshPwd').if(body('authType').equals(SSHType.UserPassword)).exists().notEmpty().isString(),
  validator,
];

export const postCheckDockerConnectionValidator = [
  body('ip')
    .exists()
    .notEmpty()
    .withMessage('Ip is required in body')
    .isIP()
    .withMessage('IP is invalid'),
  body('authType')
    .exists()
    .withMessage('authType in body is required')
    .isIn([SSHType.UserPassword, SSHType.KeyBased])
    .withMessage('authType is not in enum value SSHType'),
  body('sshPort').exists().notEmpty().isNumeric().withMessage('sshPort is not a number'),
  body('sshKey').if(body('authType').equals(SSHType.KeyBased)).exists().notEmpty().isString(),
  body('sshUser').if(body('authType').equals(SSHType.UserPassword)).exists().notEmpty().isString(),
  body('sshPwd').if(body('authType').equals(SSHType.UserPassword)).exists().notEmpty().isString(),
  validator,
];