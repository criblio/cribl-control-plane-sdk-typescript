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
    },
    collectUrl: "https://soupy-glider.org/",
    collectMethod: "get",
    collectRequestParams: "<value>",
    collectBody: "<value>",
    collectRequestHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    authenticateCollect: true,
    timeout: 9055.35,
    rejectUnauthorized: false,
    defaultBreakers: "Cribl",
    safeHeaders: [
      "<value 1>",
    ],
    retryRules: {
      type: "static",
      interval: "<value>",
      limit: "<value>",
      multiplier: "<value>",
      codes: "<value>",
      enableHeader: "<value>",
    },
  },
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `type`                            | *"health_check"*                  | :heavy_check_mark:                | Collector type                    |
| `conf`                            | *models.HealthCheckCollectorConf* | :heavy_check_mark:                | N/A                               |