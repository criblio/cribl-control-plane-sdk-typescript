# DatabaseConnectionResponseEnvelope

## Example Usage

```typescript
import { DatabaseConnectionResponseEnvelope } from "cribl-control-plane/models";

let value: DatabaseConnectionResponseEnvelope = {
  count: 1,
  items: [
    {
      authType: "configObj",
      configObj:
        "{\"server\":\"sqlserver.example.com\",\"database\":\"Reporting\",\"user\":\"yourUsername\",\"password\":\"yourPassword\",\"options\":{\"trustServerCertificate\":false,\"connectTimeout\":20000}}",
      connectionString:
        "mysql://yourUsername:yourPassword@mysql.example.com:3306/production?ssl=true",
      connectionTimeout: 10000,
      credsSecrets: "oracle-production-credentials",
      databaseType: "oracle",
      description: "Production MySQL database for customer data",
      id: "mysql-prod-db",
      password: "yourPassword",
      requestTimeout: 30000,
      tags: "production,mysql,customer-data",
      textSecret: "mysql-production-connection",
      user: "yourUsername",
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `count`                                                                    | *number*                                                                   | :heavy_check_mark:                                                         | Number of Database Connections returned in the response envelope.          | 1                                                                          |
| `items`                                                                    | [models.DatabaseConnectionConfig](../models/databaseconnectionconfig.md)[] | :heavy_check_mark:                                                         | Database Connections returned in the response envelope.                    |                                                                            |