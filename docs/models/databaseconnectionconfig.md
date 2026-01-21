# DatabaseConnectionConfig

## Example Usage

```typescript
import { DatabaseConnectionConfig } from "cribl-control-plane/models";

let value: DatabaseConnectionConfig = {
  authType: "<value>",
  configObj: "<value>",
  connectionString: "<value>",
  connectionTimeout: 9814.17,
  credsSecrets: "<value>",
  databaseType: "sqlserver",
  description:
    "cutover juvenile elevation graffiti deceivingly impassioned knowledgeable gadzooks tabulate",
  id: "<id>",
  password: "lLxCNPoLQ49plJI",
  requestTimeout: 1099.25,
  tags: "<value>",
  user: "Consuelo.Fritsch",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `authType`                                                           | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `configObj`                                                          | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `connectionString`                                                   | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `connectionTimeout`                                                  | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `credsSecrets`                                                       | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `databaseType`                                                       | [models.DatabaseConnectionType](../models/databaseconnectiontype.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `description`                                                        | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `id`                                                                 | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `password`                                                           | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `requestTimeout`                                                     | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `tags`                                                               | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `user`                                                               | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |