
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.0.1
 * Query Engine version: 5dbef10bdbfb579e07d35cc85fb1518d357cb99e
 */
Prisma.prismaVersion = {
  client: "6.0.1",
  engine: "5dbef10bdbfb579e07d35cc85fb1518d357cb99e"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable',
  Snapshot: 'Snapshot'
});

exports.Prisma.TB_R_POAScalarFieldEnum = {
  SYSTEM_ID: 'SYSTEM_ID',
  POA_NO: 'POA_NO',
  GRANTOR: 'GRANTOR',
  ATTORNEY: 'ATTORNEY',
  VALID_FROM: 'VALID_FROM',
  VALID_TO: 'VALID_TO',
  REASON: 'REASON',
  CREATED_DT: 'CREATED_DT',
  CREATED_BY: 'CREATED_BY',
  UPDATED_DT: 'UPDATED_DT',
  UPDATED_BY: 'UPDATED_BY'
};

exports.Prisma.TB_M_APPLICATIONScalarFieldEnum = {
  ID: 'ID',
  NAME: 'NAME',
  TYPE: 'TYPE',
  RUNTIME: 'RUNTIME',
  DESCRIPTION: 'DESCRIPTION',
  CREATED_BY: 'CREATED_BY',
  CREATED_DATE: 'CREATED_DATE',
  CHANGED_BY: 'CHANGED_BY',
  CHANGED_DATE: 'CHANGED_DATE',
  FA_ICON: 'FA_ICON'
};

exports.Prisma.TB_M_APPLICATION_RUNTIME_PARAMScalarFieldEnum = {
  APPLICATION: 'APPLICATION',
  KEY: 'KEY',
  VALUE: 'VALUE',
  CREATED_BY: 'CREATED_BY',
  CREATED_DATE: 'CREATED_DATE',
  CHANGED_BY: 'CHANGED_BY',
  CHANGED_DATE: 'CHANGED_DATE'
};

exports.Prisma.TB_M_AUTHORIZATIONScalarFieldEnum = {
  USERNAME: 'USERNAME',
  APPLICATION: 'APPLICATION',
  ROLE: 'ROLE',
  FUNCTION: 'FUNCTION',
  FEATURE: 'FEATURE',
  QUALIFIER_KEY: 'QUALIFIER_KEY',
  QUALIFIER_VALUE: 'QUALIFIER_VALUE',
  CREATED_BY: 'CREATED_BY',
  CREATED_DATE: 'CREATED_DATE',
  CHANGED_BY: 'CHANGED_BY',
  CHANGED_DATE: 'CHANGED_DATE'
};

exports.Prisma.TB_M_COMPANYScalarFieldEnum = {
  ID: 'ID',
  NAME: 'NAME',
  DESCRIPTION: 'DESCRIPTION',
  CREATED_BY: 'CREATED_BY',
  CREATED_DATE: 'CREATED_DATE',
  CHANGED_BY: 'CHANGED_BY',
  CHANGED_DATE: 'CHANGED_DATE'
};

exports.Prisma.TB_M_FEATUREScalarFieldEnum = {
  APPLICATION: 'APPLICATION',
  ID: 'ID',
  NAME: 'NAME',
  DESCRIPTION: 'DESCRIPTION',
  CREATED_BY: 'CREATED_BY',
  CREATED_DATE: 'CREATED_DATE',
  CHANGED_BY: 'CHANGED_BY',
  CHANGED_DATE: 'CHANGED_DATE'
};

exports.Prisma.TB_M_FUNCTIONScalarFieldEnum = {
  APPLICATION: 'APPLICATION',
  ID: 'ID',
  NAME: 'NAME',
  DESCRIPTION: 'DESCRIPTION',
  CREATED_BY: 'CREATED_BY',
  CREATED_DATE: 'CREATED_DATE',
  CHANGED_BY: 'CHANGED_BY',
  CHANGED_DATE: 'CHANGED_DATE'
};

exports.Prisma.TB_M_MENUScalarFieldEnum = {
  APP_ID: 'APP_ID',
  MENU_ID: 'MENU_ID',
  MENU_PARENT: 'MENU_PARENT',
  MENU_TEXT: 'MENU_TEXT',
  MENU_TIPS: 'MENU_TIPS',
  IS_ACTIVE: 'IS_ACTIVE',
  VISIBILITY: 'VISIBILITY',
  URL: 'URL',
  GLYPH: 'GLYPH',
  CREATED_BY: 'CREATED_BY',
  CREATED_DT: 'CREATED_DT',
  CHANGED_BY: 'CHANGED_BY',
  CHANGED_DT: 'CHANGED_DT',
  SEPARATOR: 'SEPARATOR',
  TARGET: 'TARGET'
};

exports.Prisma.TB_M_MENU_AUTHORIZATIONScalarFieldEnum = {
  APP_ID: 'APP_ID',
  MENU_ID: 'MENU_ID',
  AUTH_TYPE: 'AUTH_TYPE',
  ROLE_ID: 'ROLE_ID',
  FUNCTION_ID: 'FUNCTION_ID',
  FEATURE_ID: 'FEATURE_ID',
  AUTH_ID: 'AUTH_ID',
  AUTH_VALUE: 'AUTH_VALUE',
  CREATED_BY: 'CREATED_BY',
  CREATED_DT: 'CREATED_DT',
  CHANGED_BY: 'CHANGED_BY',
  CHANGED_DT: 'CHANGED_DT'
};

exports.Prisma.TB_M_ROLEScalarFieldEnum = {
  APPLICATION: 'APPLICATION',
  ID: 'ID',
  NAME: 'NAME',
  DESCRIPTION: 'DESCRIPTION',
  SESSION_TIMEOUT: 'SESSION_TIMEOUT',
  LOCK_TIMEOUT: 'LOCK_TIMEOUT',
  CREATED_BY: 'CREATED_BY',
  CREATED_DATE: 'CREATED_DATE',
  CHANGED_BY: 'CHANGED_BY',
  CHANGED_DATE: 'CHANGED_DATE'
};

exports.Prisma.TB_M_USERScalarFieldEnum = {
  USERNAME: 'USERNAME',
  ID: 'ID',
  REG_NO: 'REG_NO',
  COMPANY: 'COMPANY',
  PASSWORD: 'PASSWORD',
  PASSWORD_EXPIRATION_DATE: 'PASSWORD_EXPIRATION_DATE',
  PASSWORD_RESET: 'PASSWORD_RESET',
  ACCOUNT_VALIDITY_DATE: 'ACCOUNT_VALIDITY_DATE',
  FIRST_NAME: 'FIRST_NAME',
  LAST_NAME: 'LAST_NAME',
  GENDER: 'GENDER',
  BIRTH_DATE: 'BIRTH_DATE',
  ADDRESS: 'ADDRESS',
  IN_ACTIVE_DIRECTORY: 'IN_ACTIVE_DIRECTORY',
  SESSION_TIMEOUT: 'SESSION_TIMEOUT',
  LOCK_TIMEOUT: 'LOCK_TIMEOUT',
  MAX_CONCURRENT_LOGIN: 'MAX_CONCURRENT_LOGIN',
  CREATED_BY: 'CREATED_BY',
  CREATED_DATE: 'CREATED_DATE',
  CHANGED_BY: 'CHANGED_BY',
  CHANGED_DATE: 'CHANGED_DATE'
};

exports.Prisma.TB_M_USER_APPLICATIONScalarFieldEnum = {
  ID: 'ID',
  USERNAME: 'USERNAME',
  APPLICATION: 'APPLICATION',
  IS_DEFAULT: 'IS_DEFAULT',
  CREATED_BY: 'CREATED_BY',
  CREATED_DATE: 'CREATED_DATE',
  CHANGED_BY: 'CHANGED_BY',
  CHANGED_DATE: 'CHANGED_DATE'
};

exports.Prisma.TB_M_USER_EMAILScalarFieldEnum = {
  ID: 'ID',
  USERNAME: 'USERNAME',
  EMAIL: 'EMAIL',
  CREATED_BY: 'CREATED_BY',
  CREATED_DATE: 'CREATED_DATE',
  CHANGED_BY: 'CHANGED_BY',
  CHANGED_DATE: 'CHANGED_DATE'
};

exports.Prisma.TB_M_USER_PHONE_NUMBERScalarFieldEnum = {
  ID: 'ID',
  USERNAME: 'USERNAME',
  NUMBER: 'NUMBER',
  CATEGORY: 'CATEGORY',
  CREATED_BY: 'CREATED_BY',
  CREATED_DATE: 'CREATED_DATE',
  CHANGED_BY: 'CHANGED_BY',
  CHANGED_DATE: 'CHANGED_DATE'
};

exports.Prisma.TB_R_ANNOUNCEMENTScalarFieldEnum = {
  ID: 'ID',
  TITLE: 'TITLE',
  MESSAGE: 'MESSAGE',
  IMAGE: 'IMAGE',
  ACTIVE_DATE: 'ACTIVE_DATE',
  EXPIRED_DATE: 'EXPIRED_DATE',
  VISIBLE_FOR: 'VISIBLE_FOR',
  SEND_EMAIL: 'SEND_EMAIL',
  EMAIL_RECIPIENT: 'EMAIL_RECIPIENT',
  CREATED_BY: 'CREATED_BY',
  CREATED_DATE: 'CREATED_DATE',
  CHANGED_BY: 'CHANGED_BY',
  CHANGED_DATE: 'CHANGED_DATE'
};

exports.Prisma.TB_R_AUDIT_FLAGScalarFieldEnum = {
  TABLE_ID: 'TABLE_ID',
  TABLE_NAME: 'TABLE_NAME',
  TABLE_ITEM: 'TABLE_ITEM',
  CREATED_BY: 'CREATED_BY',
  CREATED_DATE: 'CREATED_DATE',
  CHANGED_BY: 'CHANGED_BY',
  CHANGED_DATE: 'CHANGED_DATE'
};

exports.Prisma.TB_R_AUDIT_TRAILScalarFieldEnum = {
  ID: 'ID',
  ACTION_TYPE: 'ACTION_TYPE',
  TABLE_NAME: 'TABLE_NAME',
  TABLE_ITEM: 'TABLE_ITEM',
  VALUE_BEFORE: 'VALUE_BEFORE',
  VALUE_AFTER: 'VALUE_AFTER',
  MODIFIED_BY: 'MODIFIED_BY',
  MODIFIED_DATE: 'MODIFIED_DATE'
};

exports.Prisma.TB_R_SYSTEMScalarFieldEnum = {
  FUNCTION_ID: 'FUNCTION_ID',
  SYSTEM_CD: 'SYSTEM_CD',
  SYSTEM_VALUE: 'SYSTEM_VALUE',
  SYSTEM_REMARK: 'SYSTEM_REMARK',
  CREATED_BY: 'CREATED_BY',
  CREATED_DT: 'CREATED_DT',
  CHANGED_BY: 'CHANGED_BY',
  CHANGED_DT: 'CHANGED_DT'
};

exports.Prisma.TB_T_COUNTERScalarFieldEnum = {
  ID: 'ID',
  APPLICATION_ID: 'APPLICATION_ID',
  SCREEN_ID: 'SCREEN_ID',
  ACCESS_USER: 'ACCESS_USER',
  ACCESS_NAME: 'ACCESS_NAME',
  ACCESS_DATE: 'ACCESS_DATE'
};

exports.Prisma.TB_M_EMP_POA_LEVELScalarFieldEnum = {
  SYSTEM_ID: 'SYSTEM_ID',
  LEVEL_SEQ: 'LEVEL_SEQ',
  GRANTOR_LEVEL_ID: 'GRANTOR_LEVEL_ID',
  ATTORNEY_LEVEL_ID: 'ATTORNEY_LEVEL_ID',
  CREATED_BY: 'CREATED_BY',
  CREATED_DT: 'CREATED_DT',
  UPDATED_BY: 'UPDATED_BY',
  UPDATED_DT: 'UPDATED_DT'
};

exports.Prisma.TB_M_EMP_POSITIONScalarFieldEnum = {
  POSITION_LEVEL: 'POSITION_LEVEL',
  POSITION_ABBR: 'POSITION_ABBR',
  POSITION_DESC: 'POSITION_DESC',
  LEVEL_ID: 'LEVEL_ID',
  CREATED_BY: 'CREATED_BY',
  CREATED_DT: 'CREATED_DT',
  UPDATED_BY: 'UPDATED_BY',
  UPDATED_DT: 'UPDATED_DT'
};

exports.Prisma.TB_M_ON_BEHALFScalarFieldEnum = {
  SYSTEM_ID: 'SYSTEM_ID',
  SEQ: 'SEQ',
  NOREG: 'NOREG',
  NOREG_ON_BEHALF: 'NOREG_ON_BEHALF',
  CREATED_BY: 'CREATED_BY',
  CREATED_DT: 'CREATED_DT',
  UPDATED_BY: 'UPDATED_BY',
  UPDATED_DT: 'UPDATED_DT'
};

exports.Prisma.TB_M_PROFILE_MAINScalarFieldEnum = {
  NOREG: 'NOREG',
  TITLE: 'TITLE',
  NAME: 'NAME',
  GENDER: 'GENDER',
  DATE_OF_BIRTH: 'DATE_OF_BIRTH',
  PLACE_OF_BIRTH: 'PLACE_OF_BIRTH',
  COUNTRY_OF_BIRTH: 'COUNTRY_OF_BIRTH',
  PROVINCE_OF_BIRTH: 'PROVINCE_OF_BIRTH',
  NATIONALITY: 'NATIONALITY',
  BLOOD_TYPE: 'BLOOD_TYPE',
  RELIGION: 'RELIGION',
  MARITAL_STATUS: 'MARITAL_STATUS',
  MARITAL_DATE: 'MARITAL_DATE',
  BPK_STATUS: 'BPK_STATUS',
  VALID_FROM: 'VALID_FROM',
  VALID_TO: 'VALID_TO',
  APPROVAL_STATUS: 'APPROVAL_STATUS',
  DATA_STATUS: 'DATA_STATUS'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  TB_R_POA: 'TB_R_POA',
  TB_M_APPLICATION: 'TB_M_APPLICATION',
  TB_M_APPLICATION_RUNTIME_PARAM: 'TB_M_APPLICATION_RUNTIME_PARAM',
  TB_M_AUTHORIZATION: 'TB_M_AUTHORIZATION',
  TB_M_COMPANY: 'TB_M_COMPANY',
  TB_M_FEATURE: 'TB_M_FEATURE',
  TB_M_FUNCTION: 'TB_M_FUNCTION',
  TB_M_MENU: 'TB_M_MENU',
  TB_M_MENU_AUTHORIZATION: 'TB_M_MENU_AUTHORIZATION',
  TB_M_ROLE: 'TB_M_ROLE',
  TB_M_USER: 'TB_M_USER',
  TB_M_USER_APPLICATION: 'TB_M_USER_APPLICATION',
  TB_M_USER_EMAIL: 'TB_M_USER_EMAIL',
  TB_M_USER_PHONE_NUMBER: 'TB_M_USER_PHONE_NUMBER',
  TB_R_ANNOUNCEMENT: 'TB_R_ANNOUNCEMENT',
  TB_R_AUDIT_FLAG: 'TB_R_AUDIT_FLAG',
  TB_R_AUDIT_TRAIL: 'TB_R_AUDIT_TRAIL',
  TB_R_SYSTEM: 'TB_R_SYSTEM',
  TB_T_COUNTER: 'TB_T_COUNTER',
  TB_M_EMP_POA_LEVEL: 'TB_M_EMP_POA_LEVEL',
  TB_M_EMP_POSITION: 'TB_M_EMP_POSITION',
  TB_M_ON_BEHALF: 'TB_M_ON_BEHALF',
  TB_M_PROFILE_MAIN: 'TB_M_PROFILE_MAIN'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
