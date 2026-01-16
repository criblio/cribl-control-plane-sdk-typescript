# HealthCheckCollectMethodPost

## Example Usage

```typescript
import { HealthCheckCollectMethodPost } from "cribl-control-plane/models";

let value: HealthCheckCollectMethodPost = {
  collectMethod: "post_with_body",
  collectRequestParams: "<value>",
  discovery: {
    discoverType: "http",
  },
  collectUrl: "https://greedy-cod.net/",
  collectBody: "<value>",
  collectRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  authenticateCollect: true,
  authentication: "basicSecret",
  timeout: 2449.94,
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
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `collectMethod`                                                                                                                                    | [models.HealthCheckCollectMethodPostHealthCheckMethod](../models/healthcheckcollectmethodposthealthcheckmethod.md)                                 | :heavy_check_mark:                                                                                                                                 | Health check HTTP method.                                                                                                                          |
| `collectRequestParams`                                                                                                                             | *any*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `discovery`                                                                                                                                        | [models.HealthCheckCollectMethodPostDiscovery](../models/healthcheckcollectmethodpostdiscovery.md)                                                 | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `collectUrl`                                                                                                                                       | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | Expression to derive URL to use for the health check operation (can be a constant).                                                                |
| `collectBody`                                                                                                                                      | *any*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `collectRequestHeaders`                                                                                                                            | [models.HealthCheckCollectMethodPostCollectRequestHeader](../models/healthcheckcollectmethodpostcollectrequestheader.md)[]                         | :heavy_minus_sign:                                                                                                                                 | Optional health check request headers.                                                                                                             |
| `authenticateCollect`                                                                                                                              | *boolean*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                 | Enable to make auth health check call.                                                                                                             |
| `authentication`                                                                                                                                   | [models.HealthCheckCollectMethodPostAuthentication](../models/healthcheckcollectmethodpostauthentication.md)                                       | :heavy_check_mark:                                                                                                                                 | Authentication method for Discover and Collect REST calls. You can specify API Key–based authentication by adding the appropriate Collect headers. |
| `timeout`                                                                                                                                          | *number*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | HTTP request inactivity timeout, use 0 to disable                                                                                                  |
| `rejectUnauthorized`                                                                                                                               | *boolean*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                 | Whether to reject certificates that cannot be verified against a valid CA (e.g., self-signed certificates).                                        |
| `defaultBreakers`                                                                                                                                  | [models.HiddenDefaultBreakersOptionsDatabaseCollectorConf](../models/hiddendefaultbreakersoptionsdatabasecollectorconf.md)                         | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `safeHeaders`                                                                                                                                      | *string*[]                                                                                                                                         | :heavy_minus_sign:                                                                                                                                 | List of headers that are safe to log in plain text.                                                                                                |
| `retryRules`                                                                                                                                       | [models.HealthCheckCollectMethodPostRetryRules](../models/healthcheckcollectmethodpostretryrules.md)                                               | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |