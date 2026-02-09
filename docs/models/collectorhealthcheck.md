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
    authHeaderExpr: "<value>",
    collectUrl: "https://fantastic-sanity.info",
    collectMethod: "post_with_body",
  },
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `type`                                                | *"health_check"*                                      | :heavy_check_mark:                                    | Collector type                                        |
| `conf`                                                | *models.HealthCheckCollectorConf*                     | :heavy_check_mark:                                    | N/A                                                   |
| `destructive`                                         | *boolean*                                             | :heavy_minus_sign:                                    | Delete any files collected (where applicable)         |
| `encoding`                                            | *string*                                              | :heavy_minus_sign:                                    | Character encoding to use when parsing ingested data. |