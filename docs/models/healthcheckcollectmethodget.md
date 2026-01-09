# HealthCheckCollectMethodGet

## Example Usage

```typescript
import { HealthCheckCollectMethodGet } from "cribl-control-plane/models";

let value: HealthCheckCollectMethodGet = {
  collectRequestParams: "<value>",
  discovery: {},
  collectUrl: "https://impolite-council.net",
  collectBody: "<value>",
  collectRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  defaultBreakers: "Cribl",
  safeHeaders: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  retryRules: {
    interval: "<value>",
    limit: "<value>",
    multiplier: "<value>",
    codes: "<value>",
    enableHeader: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `collectMethod`                                                                                                                                    | [models.HealthCheckCollectMethodGetHealthCheckMethod](../models/healthcheckcollectmethodgethealthcheckmethod.md)                                   | :heavy_minus_sign:                                                                                                                                 | Health check HTTP method.                                                                                                                          |
| `collectRequestParams`                                                                                                                             | *any*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `discovery`                                                                                                                                        | [models.HealthCheckCollectMethodGetDiscovery](../models/healthcheckcollectmethodgetdiscovery.md)                                                   | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `collectUrl`                                                                                                                                       | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | Expression to derive URL to use for the health check operation (can be a constant).                                                                |
| `collectBody`                                                                                                                                      | *any*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `collectRequestHeaders`                                                                                                                            | [models.HealthCheckCollectMethodGetCollectRequestHeader](../models/healthcheckcollectmethodgetcollectrequestheader.md)[]                           | :heavy_minus_sign:                                                                                                                                 | Optional health check request headers.                                                                                                             |
| `authenticateCollect`                                                                                                                              | *boolean*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                 | Enable to make auth health check call.                                                                                                             |
| `authentication`                                                                                                                                   | [models.HealthCheckCollectMethodGetAuthentication](../models/healthcheckcollectmethodgetauthentication.md)                                         | :heavy_minus_sign:                                                                                                                                 | Authentication method for Discover and Collect REST calls. You can specify API Key–based authentication by adding the appropriate Collect headers. |
| `timeout`                                                                                                                                          | *number*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | HTTP request inactivity timeout, use 0 to disable                                                                                                  |
| `rejectUnauthorized`                                                                                                                               | *boolean*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                 | Whether to reject certificates that cannot be verified against a valid CA (e.g., self-signed certificates).                                        |
| `defaultBreakers`                                                                                                                                  | [models.HiddenDefaultBreakersOptionsDatabaseCollectorConf](../models/hiddendefaultbreakersoptionsdatabasecollectorconf.md)                         | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `safeHeaders`                                                                                                                                      | *string*[]                                                                                                                                         | :heavy_minus_sign:                                                                                                                                 | List of headers that are safe to log in plain text.                                                                                                |
| `retryRules`                                                                                                                                       | [models.HealthCheckCollectMethodGetRetryRules](../models/healthcheckcollectmethodgetretryrules.md)                                                 | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |