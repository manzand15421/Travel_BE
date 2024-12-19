
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/edge.js')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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

exports.Prisma.SysdiagramsScalarFieldEnum = {
  name: 'name',
  principal_id: 'principal_id',
  diagram_id: 'diagram_id',
  version: 'version',
  definition: 'definition'
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
  sysdiagrams: 'sysdiagrams',
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
  TB_T_COUNTER: 'TB_T_COUNTER'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\muhammad.zufar\\Documents\\testing\\testingTravel\\prisma\\generated\\client-dbSC",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "C:\\Users\\muhammad.zufar\\Documents\\testing\\testingTravel\\prisma\\schema_SC.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "6.0.1",
  "engineVersion": "5dbef10bdbfb579e07d35cc85fb1518d357cb99e",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "sqlserver",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL_SC",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"./generated/client-dbSC\"\n}\n\ndatasource db {\n  provider = \"sqlserver\"\n  url      = env(\"DATABASE_URL_SC\")\n}\n\nmodel TB_R_POA {\n  SYSTEM_ID  String    @db.VarChar(50)\n  POA_NO     String    @db.VarChar(8)\n  GRANTOR    String    @db.VarChar(50)\n  ATTORNEY   String    @db.VarChar(50)\n  VALID_FROM DateTime  @db.Date\n  VALID_TO   DateTime  @db.Date\n  REASON     String    @db.VarChar(255)\n  CREATED_DT DateTime  @db.Date\n  CREATED_BY String    @db.VarChar(50)\n  UPDATED_DT DateTime? @db.Date\n  UPDATED_BY String?   @db.VarChar(50)\n\n  @@id([SYSTEM_ID, POA_NO], map: \"PK_TB_R_POA\")\n}\n\nmodel sysdiagrams {\n  name         String @db.NVarChar(128)\n  principal_id Int\n  diagram_id   Int    @id(map: \"PK__sysdiagr__C2B05B61726E399E\") @default(autoincrement())\n  version      Int?\n  definition   Bytes?\n\n  @@unique([principal_id, name], map: \"UK_principal_name\")\n}\n\nmodel TB_M_APPLICATION {\n  ID                    String                  @id(map: \"PK_TB_M_APPLICATION_1\") @db.VarChar(50)\n  NAME                  String                  @db.VarChar(50)\n  TYPE                  String                  @db.VarChar(30)\n  RUNTIME               String                  @db.VarChar(Max)\n  DESCRIPTION           String?                 @db.VarChar(200)\n  CREATED_BY            String                  @db.VarChar(70)\n  CREATED_DATE          DateTime                @db.DateTime\n  CHANGED_BY            String?                 @db.VarChar(70)\n  CHANGED_DATE          DateTime?               @db.DateTime\n  FA_ICON               String?                 @db.VarChar(50)\n  TB_M_FEATURE          TB_M_FEATURE[]\n  TB_M_FUNCTION         TB_M_FUNCTION[]\n  TB_M_ROLE             TB_M_ROLE[]\n  TB_M_USER_APPLICATION TB_M_USER_APPLICATION[]\n}\n\nmodel TB_M_APPLICATION_RUNTIME_PARAM {\n  APPLICATION  String    @db.VarChar(50)\n  KEY          String    @db.VarChar(50)\n  VALUE        String    @db.VarChar(50)\n  CREATED_BY   String    @db.VarChar(70)\n  CREATED_DATE DateTime  @db.DateTime\n  CHANGED_BY   String?   @db.VarChar(50)\n  CHANGED_DATE DateTime? @db.DateTime\n\n  @@id([APPLICATION, KEY, VALUE], map: \"PK_TB_M_APPLICATION_RUNTIME_PARAM_1\")\n}\n\nmodel TB_M_AUTHORIZATION {\n  USERNAME        String    @db.VarChar(70)\n  APPLICATION     String    @db.VarChar(50)\n  ROLE            String    @db.VarChar(50)\n  FUNCTION        String    @db.VarChar(50)\n  FEATURE         String    @db.VarChar(50)\n  QUALIFIER_KEY   String    @db.VarChar(50)\n  QUALIFIER_VALUE String    @db.VarChar(50)\n  CREATED_BY      String    @db.VarChar(70)\n  CREATED_DATE    DateTime  @db.DateTime\n  CHANGED_BY      String?   @db.VarChar(70)\n  CHANGED_DATE    DateTime? @db.DateTime\n  TB_M_USER       TB_M_USER @relation(fields: [USERNAME], references: [USERNAME], onUpdate: NoAction, map: \"FK__TB_M_AUTH__USERN__5FB337D6\")\n\n  @@id([USERNAME, APPLICATION, ROLE, FUNCTION, FEATURE, QUALIFIER_KEY, QUALIFIER_VALUE], map: \"PK_TB_M_AUTHORIZATION\")\n  @@index([FUNCTION], map: \"ix_tb_m_authorization_function\")\n  @@index([ROLE], map: \"ix_tb_m_authorization_role\")\n}\n\nmodel TB_M_COMPANY {\n  ID           String      @id(map: \"PK_TB_M_COMPANY_1\") @db.VarChar(50)\n  NAME         String      @db.VarChar(100)\n  DESCRIPTION  String?     @db.VarChar(200)\n  CREATED_BY   String      @db.VarChar(70)\n  CREATED_DATE DateTime    @db.DateTime\n  CHANGED_BY   String?     @db.VarChar(70)\n  CHANGED_DATE DateTime?   @db.DateTime\n  TB_M_USER    TB_M_USER[]\n}\n\nmodel TB_M_FEATURE {\n  APPLICATION      String           @db.VarChar(50)\n  ID               String           @db.VarChar(50)\n  NAME             String           @db.VarChar(100)\n  DESCRIPTION      String?          @db.VarChar(200)\n  CREATED_BY       String           @db.VarChar(70)\n  CREATED_DATE     DateTime         @db.DateTime\n  CHANGED_BY       String?          @db.VarChar(70)\n  CHANGED_DATE     DateTime?        @db.DateTime\n  TB_M_APPLICATION TB_M_APPLICATION @relation(fields: [APPLICATION], references: [ID], onUpdate: NoAction, map: \"FK__TB_M_FEAT__APPLI__628FA481\")\n\n  @@id([APPLICATION, ID], map: \"PK_TB_M_FEATURE\")\n}\n\nmodel TB_M_FUNCTION {\n  APPLICATION      String           @db.VarChar(50)\n  ID               String           @db.VarChar(50)\n  NAME             String           @db.VarChar(100)\n  DESCRIPTION      String?          @db.VarChar(200)\n  CREATED_BY       String           @db.VarChar(70)\n  CREATED_DATE     DateTime         @db.DateTime\n  CHANGED_BY       String?          @db.VarChar(70)\n  CHANGED_DATE     DateTime?        @db.DateTime\n  TB_M_APPLICATION TB_M_APPLICATION @relation(fields: [APPLICATION], references: [ID], onUpdate: NoAction, map: \"FK__TB_M_FUNC__APPLI__534D60F1\")\n\n  @@id([ID, APPLICATION], map: \"PK_TB_M_FUNCTION\")\n}\n\nmodel TB_M_MENU {\n  APP_ID      String    @db.VarChar(50)\n  MENU_ID     String    @db.VarChar(50)\n  MENU_PARENT String    @db.VarChar(50)\n  MENU_TEXT   String    @db.VarChar(50)\n  MENU_TIPS   String    @db.VarChar(200)\n  IS_ACTIVE   String    @db.VarChar(1)\n  VISIBILITY  String    @db.VarChar(1)\n  URL         String    @db.VarChar(50)\n  GLYPH       String    @db.VarChar(20)\n  CREATED_BY  String    @db.VarChar(20)\n  CREATED_DT  DateTime  @db.DateTime\n  CHANGED_BY  String?   @db.VarChar(20)\n  CHANGED_DT  DateTime? @db.DateTime\n  SEPARATOR   String    @db.VarChar(6)\n  TARGET      String?   @db.VarChar(50)\n\n  @@id([APP_ID, MENU_ID, MENU_PARENT], map: \"PK_TB_M_MENU_1\")\n}\n\nmodel TB_M_MENU_AUTHORIZATION {\n  APP_ID      String    @db.VarChar(50)\n  MENU_ID     String    @db.VarChar(50)\n  AUTH_TYPE   String    @db.VarChar(50)\n  ROLE_ID     String?   @db.VarChar(50)\n  FUNCTION_ID String?   @db.VarChar(50)\n  FEATURE_ID  String?   @db.VarChar(50)\n  AUTH_ID     String    @db.VarChar(50)\n  AUTH_VALUE  String?   @db.VarChar(50)\n  CREATED_BY  String    @db.VarChar(20)\n  CREATED_DT  DateTime  @db.DateTime\n  CHANGED_BY  String?   @db.VarChar(20)\n  CHANGED_DT  DateTime? @db.DateTime\n\n  @@id([APP_ID, MENU_ID, AUTH_TYPE, AUTH_ID], map: \"PK_TB_M_MENU_AUTHORIZATION\")\n}\n\nmodel TB_M_ROLE {\n  APPLICATION      String           @db.VarChar(50)\n  ID               String           @db.VarChar(50)\n  NAME             String           @db.VarChar(100)\n  DESCRIPTION      String           @db.VarChar(200)\n  SESSION_TIMEOUT  Int\n  LOCK_TIMEOUT     Int\n  CREATED_BY       String           @db.VarChar(70)\n  CREATED_DATE     DateTime         @db.DateTime\n  CHANGED_BY       String?          @db.VarChar(70)\n  CHANGED_DATE     DateTime?        @db.DateTime\n  TB_M_APPLICATION TB_M_APPLICATION @relation(fields: [APPLICATION], references: [ID], onUpdate: NoAction, map: \"FK__TB_M_ROLE__APPLI__52593CB8\")\n\n  @@id([APPLICATION, ID], map: \"PK_TB_M_ROLE_1\")\n}\n\n/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.\nmodel TB_M_ROLE_BU2021 {\n  APPLICATION     String    @db.VarChar(50)\n  ID              String    @db.VarChar(50)\n  NAME            String    @db.VarChar(100)\n  DESCRIPTION     String    @db.VarChar(200)\n  SESSION_TIMEOUT Int\n  LOCK_TIMEOUT    Int\n  CREATED_BY      String    @db.VarChar(70)\n  CREATED_DATE    DateTime  @db.DateTime\n  CHANGED_BY      String?   @db.VarChar(70)\n  CHANGED_DATE    DateTime? @db.DateTime\n\n  @@ignore\n}\n\nmodel TB_M_USER {\n  USERNAME                 String                  @id(map: \"PK_TB_M_USER_1\") @db.VarChar(70)\n  ID                       String                  @db.VarChar(50)\n  REG_NO                   String                  @db.VarChar(50)\n  COMPANY                  String?                 @db.VarChar(50)\n  PASSWORD                 String                  @db.VarChar(130)\n  PASSWORD_EXPIRATION_DATE DateTime                @db.DateTime\n  PASSWORD_RESET           Boolean\n  ACCOUNT_VALIDITY_DATE    DateTime                @db.DateTime\n  FIRST_NAME               String                  @db.VarChar(20)\n  LAST_NAME                String?                 @db.VarChar(20)\n  GENDER                   String                  @db.VarChar(10)\n  BIRTH_DATE               DateTime                @db.DateTime\n  ADDRESS                  String?                 @db.VarChar(Max)\n  IN_ACTIVE_DIRECTORY      Boolean\n  SESSION_TIMEOUT          Int\n  LOCK_TIMEOUT             Int\n  MAX_CONCURRENT_LOGIN     Int\n  CREATED_BY               String                  @db.VarChar(70)\n  CREATED_DATE             DateTime                @db.DateTime\n  CHANGED_BY               String?                 @db.VarChar(70)\n  CHANGED_DATE             DateTime?               @db.DateTime\n  TB_M_AUTHORIZATION       TB_M_AUTHORIZATION[]\n  TB_M_COMPANY             TB_M_COMPANY?           @relation(fields: [COMPANY], references: [ID], onDelete: NoAction, onUpdate: NoAction, map: \"FK__TB_M_USER__COMPA__5DCAEF64\")\n  TB_M_USER_APPLICATION    TB_M_USER_APPLICATION[]\n}\n\nmodel TB_M_USER_APPLICATION {\n  ID               BigInt           @id(map: \"PK_TB_M_USER_APPLICATION\") @default(autoincrement())\n  USERNAME         String           @db.VarChar(70)\n  APPLICATION      String           @db.VarChar(50)\n  IS_DEFAULT       Boolean\n  CREATED_BY       String           @db.VarChar(70)\n  CREATED_DATE     DateTime         @db.DateTime\n  CHANGED_BY       String?          @db.VarChar(70)\n  CHANGED_DATE     DateTime?        @db.DateTime\n  TB_M_APPLICATION TB_M_APPLICATION @relation(fields: [APPLICATION], references: [ID], onUpdate: NoAction, map: \"FK__TB_M_USER__APPLI__5165187F\")\n  TB_M_USER        TB_M_USER        @relation(fields: [USERNAME], references: [USERNAME], onUpdate: NoAction, map: \"FK__TB_M_USER__USERN__5812160E\")\n}\n\nmodel TB_M_USER_EMAIL {\n  ID           BigInt    @id(map: \"PK_TB_M_USER_EMAIL\") @default(autoincrement())\n  USERNAME     String    @db.VarChar(70)\n  EMAIL        String    @db.VarChar(255)\n  CREATED_BY   String    @db.VarChar(70)\n  CREATED_DATE DateTime  @db.DateTime\n  CHANGED_BY   String?   @db.VarChar(70)\n  CHANGED_DATE DateTime? @db.DateTime\n}\n\nmodel TB_M_USER_PHONE_NUMBER {\n  ID           BigInt    @id(map: \"PK_TB_M_USER_PHONE\") @default(autoincrement())\n  USERNAME     String    @db.VarChar(70)\n  NUMBER       String    @db.VarChar(50)\n  CATEGORY     String    @db.VarChar(20)\n  CREATED_BY   String    @db.VarChar(70)\n  CREATED_DATE DateTime  @db.DateTime\n  CHANGED_BY   String?   @db.VarChar(70)\n  CHANGED_DATE DateTime? @db.DateTime\n}\n\nmodel TB_R_ANNOUNCEMENT {\n  ID              BigInt    @id(map: \"PK__TB_R_ANN__3214EC27C7888F52\")\n  TITLE           String    @db.VarChar(200)\n  MESSAGE         String    @db.VarChar(Max)\n  IMAGE           String?   @db.VarChar(255)\n  ACTIVE_DATE     DateTime  @db.Date\n  EXPIRED_DATE    DateTime  @db.Date\n  VISIBLE_FOR     Int       @db.TinyInt\n  SEND_EMAIL      Int?      @db.TinyInt\n  EMAIL_RECIPIENT String?   @db.VarChar(Max)\n  CREATED_BY      String    @db.VarChar(64)\n  CREATED_DATE    DateTime  @db.DateTime\n  CHANGED_BY      String?   @db.VarChar(64)\n  CHANGED_DATE    DateTime? @db.DateTime\n}\n\nmodel TB_R_AUDIT_FLAG {\n  TABLE_ID     String    @id(map: \"PK_TB_R_AUDIT_FLAG\") @db.VarChar(40)\n  TABLE_NAME   String    @db.VarChar(50)\n  TABLE_ITEM   String    @db.VarChar(100)\n  CREATED_BY   String?   @db.VarChar(64)\n  CREATED_DATE DateTime? @db.DateTime\n  CHANGED_BY   String?   @db.VarChar(64)\n  CHANGED_DATE DateTime? @db.DateTime\n}\n\nmodel TB_R_AUDIT_TRAIL {\n  ID            BigInt   @id(map: \"PK_TB_R_AUDIT_TRAIL\") @default(autoincrement())\n  ACTION_TYPE   String   @db.VarChar(1)\n  TABLE_NAME    String   @db.VarChar(50)\n  TABLE_ITEM    String   @db.VarChar(100)\n  VALUE_BEFORE  String?  @db.VarChar(255)\n  VALUE_AFTER   String?  @db.VarChar(255)\n  MODIFIED_BY   String?  @db.VarChar(64)\n  MODIFIED_DATE DateTime @db.DateTime\n}\n\nmodel TB_R_SYSTEM {\n  FUNCTION_ID   String    @db.VarChar(20)\n  SYSTEM_CD     String    @db.VarChar(30)\n  SYSTEM_VALUE  String?   @db.VarChar(2000)\n  SYSTEM_REMARK String?   @db.VarChar(100)\n  CREATED_BY    String    @db.VarChar(64)\n  CREATED_DT    DateTime  @db.DateTime\n  CHANGED_BY    String?   @db.VarChar(64)\n  CHANGED_DT    DateTime? @db.DateTime\n\n  @@id([FUNCTION_ID, SYSTEM_CD], map: \"PK__TB_R_SYS__5C0F99D38907F627\")\n}\n\nmodel TB_T_COUNTER {\n  ID             String   @id(map: \"PK__TB_T_COU__3214EC27F2ED15C5\") @db.VarChar(40)\n  APPLICATION_ID String   @db.VarChar(50)\n  SCREEN_ID      String   @db.VarChar(50)\n  ACCESS_USER    String   @db.VarChar(50)\n  ACCESS_NAME    String   @db.VarChar(100)\n  ACCESS_DATE    DateTime @db.DateTime\n}\n",
  "inlineSchemaHash": "3d40fc75d36b1e4fce53b52d2d13dc2bea369a771416c7bc35c9184150510ce1",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"TB_R_POA\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"SYSTEM_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"POA_NO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"8\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GRANTOR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ATTORNEY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VALID_FROM\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VALID_TO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"REASON\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CREATED_DT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CREATED_BY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UPDATED_DT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UPDATED_BY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"SYSTEM_ID\",\"POA_NO\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"sysdiagrams\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"NVarChar\",[\"128\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"principal_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"diagram_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"version\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"definition\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"principal_id\",\"name\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"principal_id\",\"name\"]}],\"isGenerated\":false},\"TB_M_APPLICATION\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TYPE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"30\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"RUNTIME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"Max\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DESCRIPTION\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"200\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CREATED_BY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"70\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CREATED_DATE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CHANGED_BY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"70\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CHANGED_DATE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FA_ICON\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TB_M_FEATURE\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TB_M_FEATURE\",\"nativeType\":null,\"relationName\":\"TB_M_APPLICATIONToTB_M_FEATURE\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TB_M_FUNCTION\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TB_M_FUNCTION\",\"nativeType\":null,\"relationName\":\"TB_M_APPLICATIONToTB_M_FUNCTION\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TB_M_ROLE\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TB_M_ROLE\",\"nativeType\":null,\"relationName\":\"TB_M_APPLICATIONToTB_M_ROLE\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TB_M_USER_APPLICATION\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TB_M_USER_APPLICATION\",\"nativeType\":null,\"relationName\":\"TB_M_APPLICATIONToTB_M_USER_APPLICATION\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TB_M_APPLICATION_RUNTIME_PARAM\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"APPLICATION\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"KEY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VALUE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CREATED_BY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"70\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CREATED_DATE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CHANGED_BY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CHANGED_DATE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"APPLICATION\",\"KEY\",\"VALUE\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TB_M_AUTHORIZATION\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"USERNAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"70\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"APPLICATION\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ROLE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FUNCTION\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FEATURE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"QUALIFIER_KEY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"QUALIFIER_VALUE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CREATED_BY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"70\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CREATED_DATE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CHANGED_BY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"70\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CHANGED_DATE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TB_M_USER\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TB_M_USER\",\"nativeType\":null,\"relationName\":\"TB_M_AUTHORIZATIONToTB_M_USER\",\"relationFromFields\":[\"USERNAME\"],\"relationToFields\":[\"USERNAME\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"USERNAME\",\"APPLICATION\",\"ROLE\",\"FUNCTION\",\"FEATURE\",\"QUALIFIER_KEY\",\"QUALIFIER_VALUE\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TB_M_COMPANY\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DESCRIPTION\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"200\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CREATED_BY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"70\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CREATED_DATE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CHANGED_BY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"70\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CHANGED_DATE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TB_M_USER\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TB_M_USER\",\"nativeType\":null,\"relationName\":\"TB_M_COMPANYToTB_M_USER\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TB_M_FEATURE\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"APPLICATION\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DESCRIPTION\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"200\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CREATED_BY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"70\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CREATED_DATE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CHANGED_BY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"70\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CHANGED_DATE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TB_M_APPLICATION\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TB_M_APPLICATION\",\"nativeType\":null,\"relationName\":\"TB_M_APPLICATIONToTB_M_FEATURE\",\"relationFromFields\":[\"APPLICATION\"],\"relationToFields\":[\"ID\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"APPLICATION\",\"ID\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TB_M_FUNCTION\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"APPLICATION\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DESCRIPTION\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"200\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CREATED_BY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"70\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CREATED_DATE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CHANGED_BY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"70\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CHANGED_DATE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TB_M_APPLICATION\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TB_M_APPLICATION\",\"nativeType\":null,\"relationName\":\"TB_M_APPLICATIONToTB_M_FUNCTION\",\"relationFromFields\":[\"APPLICATION\"],\"relationToFields\":[\"ID\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"ID\",\"APPLICATION\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TB_M_MENU\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"APP_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MENU_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MENU_PARENT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MENU_TEXT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MENU_TIPS\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"200\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IS_ACTIVE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"1\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VISIBILITY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"1\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"URL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GLYPH\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CREATED_BY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CREATED_DT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CHANGED_BY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CHANGED_DT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SEPARATOR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"6\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TARGET\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"APP_ID\",\"MENU_ID\",\"MENU_PARENT\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TB_M_MENU_AUTHORIZATION\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"APP_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MENU_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AUTH_TYPE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ROLE_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FUNCTION_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FEATURE_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AUTH_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AUTH_VALUE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CREATED_BY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CREATED_DT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CHANGED_BY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CHANGED_DT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"APP_ID\",\"MENU_ID\",\"AUTH_TYPE\",\"AUTH_ID\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TB_M_ROLE\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"APPLICATION\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DESCRIPTION\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"200\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SESSION_TIMEOUT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LOCK_TIMEOUT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CREATED_BY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"70\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CREATED_DATE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CHANGED_BY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"70\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CHANGED_DATE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TB_M_APPLICATION\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TB_M_APPLICATION\",\"nativeType\":null,\"relationName\":\"TB_M_APPLICATIONToTB_M_ROLE\",\"relationFromFields\":[\"APPLICATION\"],\"relationToFields\":[\"ID\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"APPLICATION\",\"ID\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TB_M_USER\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"USERNAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"70\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"REG_NO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"COMPANY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PASSWORD\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"130\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PASSWORD_EXPIRATION_DATE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PASSWORD_RESET\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ACCOUNT_VALIDITY_DATE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FIRST_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LAST_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GENDER\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BIRTH_DATE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ADDRESS\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"Max\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IN_ACTIVE_DIRECTORY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SESSION_TIMEOUT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LOCK_TIMEOUT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MAX_CONCURRENT_LOGIN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CREATED_BY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"70\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CREATED_DATE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CHANGED_BY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"70\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CHANGED_DATE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TB_M_AUTHORIZATION\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TB_M_AUTHORIZATION\",\"nativeType\":null,\"relationName\":\"TB_M_AUTHORIZATIONToTB_M_USER\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TB_M_COMPANY\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TB_M_COMPANY\",\"nativeType\":null,\"relationName\":\"TB_M_COMPANYToTB_M_USER\",\"relationFromFields\":[\"COMPANY\"],\"relationToFields\":[\"ID\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TB_M_USER_APPLICATION\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TB_M_USER_APPLICATION\",\"nativeType\":null,\"relationName\":\"TB_M_USERToTB_M_USER_APPLICATION\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TB_M_USER_APPLICATION\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"USERNAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"70\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"APPLICATION\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IS_DEFAULT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CREATED_BY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"70\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CREATED_DATE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CHANGED_BY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"70\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CHANGED_DATE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TB_M_APPLICATION\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TB_M_APPLICATION\",\"nativeType\":null,\"relationName\":\"TB_M_APPLICATIONToTB_M_USER_APPLICATION\",\"relationFromFields\":[\"APPLICATION\"],\"relationToFields\":[\"ID\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TB_M_USER\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TB_M_USER\",\"nativeType\":null,\"relationName\":\"TB_M_USERToTB_M_USER_APPLICATION\",\"relationFromFields\":[\"USERNAME\"],\"relationToFields\":[\"USERNAME\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TB_M_USER_EMAIL\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"USERNAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"70\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EMAIL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CREATED_BY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"70\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CREATED_DATE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CHANGED_BY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"70\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CHANGED_DATE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TB_M_USER_PHONE_NUMBER\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"USERNAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"70\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NUMBER\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CATEGORY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CREATED_BY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"70\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CREATED_DATE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CHANGED_BY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"70\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CHANGED_DATE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TB_R_ANNOUNCEMENT\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TITLE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"200\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MESSAGE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"Max\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IMAGE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ACTIVE_DATE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EXPIRED_DATE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VISIBLE_FOR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":[\"TinyInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SEND_EMAIL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":[\"TinyInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EMAIL_RECIPIENT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"Max\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CREATED_BY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"64\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CREATED_DATE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CHANGED_BY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"64\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CHANGED_DATE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TB_R_AUDIT_FLAG\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"TABLE_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"40\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TABLE_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TABLE_ITEM\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CREATED_BY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"64\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CREATED_DATE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CHANGED_BY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"64\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CHANGED_DATE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TB_R_AUDIT_TRAIL\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ACTION_TYPE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"1\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TABLE_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TABLE_ITEM\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VALUE_BEFORE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VALUE_AFTER\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MODIFIED_BY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"64\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MODIFIED_DATE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TB_R_SYSTEM\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"FUNCTION_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SYSTEM_CD\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"30\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SYSTEM_VALUE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"2000\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SYSTEM_REMARK\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CREATED_BY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"64\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CREATED_DT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CHANGED_BY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"64\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CHANGED_DT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"FUNCTION_ID\",\"SYSTEM_CD\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TB_T_COUNTER\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"40\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"APPLICATION_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SCREEN_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ACCESS_USER\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ACCESS_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ACCESS_DATE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL_SC: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL_SC'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL_SC || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

