# UpdateDatabaseConnectionConfigByIdRequest

## Example Usage

```typescript
import { UpdateDatabaseConnectionConfigByIdRequest } from "cribl-control-plane/models/operations";

let value: UpdateDatabaseConnectionConfigByIdRequest = {
  id: "<id>",
  databaseConnectionConfig: {
    authType: "<value>",
    databaseType: "oracle",
    description: "beret geez hungry watery",
    id: "<id>",
  },
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `id`                                                                        | *string*                                                                    | :heavy_check_mark:                                                          | The <code>id</code> of the Database Connection to update.                   |
| `databaseConnectionConfig`                                                  | [models.DatabaseConnectionConfig](../../models/databaseconnectionconfig.md) | :heavy_check_mark:                                                          | DatabaseConnectionConfig object                                             |