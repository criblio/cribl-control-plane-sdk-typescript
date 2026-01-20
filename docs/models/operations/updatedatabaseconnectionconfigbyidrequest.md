# UpdateDatabaseConnectionConfigByIdRequest

## Example Usage

```typescript
import { UpdateDatabaseConnectionConfigByIdRequest } from "cribl-control-plane/models/operations";

let value: UpdateDatabaseConnectionConfigByIdRequest = {
  id: "<id>",
  databaseConnectionConfig: {
    authType: "<value>",
    configObj: "<value>",
    connectionString: "<value>",
    connectionTimeout: 2937.96,
    credsSecrets: "<value>",
    databaseType: "mysql",
    description: "where ew swiftly stormy oh",
    id: "<id>",
    password: "q2dwurVAaOg4Xqt",
    requestTimeout: 4934.02,
    tags: "<value>",
    user: "Tyler_Franecki95",
  },
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `id`                                                                        | *string*                                                                    | :heavy_check_mark:                                                          | The <code>id</code> of the Database Connection to update.                   |
| `databaseConnectionConfig`                                                  | [models.DatabaseConnectionConfig](../../models/databaseconnectionconfig.md) | :heavy_check_mark:                                                          | DatabaseConnectionConfig object                                             |