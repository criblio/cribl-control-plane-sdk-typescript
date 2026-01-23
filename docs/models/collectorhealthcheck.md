# CollectorHealthCheck

HealthCheck collector configuration

## Example Usage

```typescript
import { CollectorHealthCheck } from "cribl-control-plane/models";

let value: CollectorHealthCheck = {
  type: "health_check",
  conf: {
    authentication: "login",
    loginUrl: "https://crooked-shoulder.name/",
    username: "Isaac_Schiller",
    password: "0RYmS35HdTLMgXY",
    loginBody: "<value>",
    tokenRespAttribute: "<value>",
    authHeaderExpr: "<value>",
    authRequestHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    discovery: {
      discoverType: "list",
      itemList: [
        "<value 1>",
      ],
    },
    collectUrl: "https://hungry-tomb.com",
    collectMethod: "get",
    collectRequestParams: "<value>",
    collectBody: "<value>",
    collectRequestHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    authenticateCollect: false,
    timeout: 9325.47,
    rejectUnauthorized: true,
    defaultBreakers: "Cribl",
    safeHeaders: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    retryRules: {
      type: "static",
      interval: "<value>",
      limit: "<value>",
      codes: "<value>",
      enableHeader: "<value>",
      multiplier: "<value>",
    },
  },
  destructive: true,
  encoding: "<value>",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `type`                                                | *"health_check"*                                      | :heavy_check_mark:                                    | Collector type                                        |
| `conf`                                                | *models.HealthCheckCollectorConf*                     | :heavy_check_mark:                                    | N/A                                                   |
| `destructive`                                         | *boolean*                                             | :heavy_minus_sign:                                    | Delete any files collected (where applicable)         |
| `encoding`                                            | *string*                                              | :heavy_minus_sign:                                    | Character encoding to use when parsing ingested data. |