# CountedDatabaseConnectionConfig

## Example Usage

```typescript
import { CountedDatabaseConnectionConfig } from "cribl-control-plane/models";

let value: CountedDatabaseConnectionConfig = {
  count: 534524,
  items: [
    {
      authType: "<value>",
      configObj: "<value>",
      connectionString: "<value>",
      connectionTimeout: 3590,
      credsSecrets: "<value>",
      databaseType: "oracle",
      description: "devise besides beneath print hollow aboard meatloaf",
      id: "<id>",
      password: "W3GlNFYC31cn6_7",
      requestTimeout: 5565.82,
      tags: "<value>",
      user: "Alberta83",
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `count`                                                                    | *number*                                                                   | :heavy_minus_sign:                                                         | number of items present in the items array                                 |
| `items`                                                                    | [models.DatabaseConnectionConfig](../models/databaseconnectionconfig.md)[] | :heavy_minus_sign:                                                         | N/A                                                                        |