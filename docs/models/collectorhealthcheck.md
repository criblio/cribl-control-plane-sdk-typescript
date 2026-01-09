# CollectorHealthCheck

HealthCheck collector configuration

## Example Usage

```typescript
import { CollectorHealthCheck } from "cribl-control-plane/models";

let value: CollectorHealthCheck = {
  type: "health_check",
  conf: {
    authentication: "login",
    loginUrl: "`https://localhost:9000/api/v1/auth/login`",
    username: "Connor_Schowalter",
    password: "lv0D0RYmS35HdTL",
    loginBody:
      "`{ \"username\": \"${username}\", \"password\": \"${password}\" }`",
    tokenRespAttribute: "<value>",
    authHeaderExpr: "`Bearer ${token}`",
    authRequestHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    discovery: {
      discoverType: "none",
    },
    collectUrl: "https://silver-morning.biz/",
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
    timeout: 30,
    rejectUnauthorized: false,
    defaultBreakers: "Cribl",
    safeHeaders: [
      "<value 1>",
    ],
    retryRules: {
      type: "backoff",
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