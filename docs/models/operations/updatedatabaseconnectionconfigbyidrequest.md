# UpdateDatabaseConnectionConfigByIdRequest

## Example Usage

```typescript
import { UpdateDatabaseConnectionConfigByIdRequest } from "cribl-control-plane/models/operations";

let value: UpdateDatabaseConnectionConfigByIdRequest = {
  id: "<id>",
  databaseConnectionConfig: {
    authType: "connectionString",
    configObj:
      "{\"server\":\"sqlserver.example.com\",\"database\":\"Reporting\",\"user\":\"yourUsername\",\"password\":\"yourPassword\",\"options\":{\"trustServerCertificate\":false,\"connectTimeout\":20000}}",
    connectionString:
      "mysql://yourUsername:yourPassword@mysql.example.com:3306/production?ssl=true",
    connectionTimeout: 10000,
    credsSecrets: "oracle-production-credentials",
    databaseType: "mysql",
    description: "Production MySQL database for customer data",
    id: "mysql-prod-db",
    password: "yourPassword",
    requestTimeout: 30000,
    tags: "production,mysql,customer-data",
    textSecret: "mysql-production-connection",
    user: "yourUsername",
  },
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `id`                                                                        | *string*                                                                    | :heavy_check_mark:                                                          | The <code>id</code> of the Database Connection to update.                   |
| `databaseConnectionConfig`                                                  | [models.DatabaseConnectionConfig](../../models/databaseconnectionconfig.md) | :heavy_check_mark:                                                          | DatabaseConnectionConfig object.                                            |