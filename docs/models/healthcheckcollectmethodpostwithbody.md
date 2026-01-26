# HealthCheckCollectMethodPostWithBody

## Example Usage

```typescript
import { HealthCheckCollectMethodPostWithBody } from "cribl-control-plane/models";

let value: HealthCheckCollectMethodPostWithBody = {
  collectMethod: "post",
  collectBody: "<value>",
  discovery: {
    discoverMethod: "post",
    discoverRequestParams: "<value>",
    discoverType: "http",
    discoverUrl: "https://fussy-underneath.com/",
    discoverBody: "<value>",
    discoverRequestHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    discoverDataField: "<value>",
  },
  collectUrl: "https://probable-version.info/",
  collectRequestParams: "<value>",
  collectRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  authenticateCollect: true,
  authentication: "login",
  timeout: 486.61,
  rejectUnauthorized: true,
  defaultBreakers: "Cribl",
  safeHeaders: [
    "<value 1>",
    "<value 2>",
  ],
  retryRules: {
    type: "none",
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
| `collectMethod`                                                                                                                                    | [models.HealthCheckCollectMethodPostWithBodyHealthCheckMethod](../models/healthcheckcollectmethodpostwithbodyhealthcheckmethod.md)                 | :heavy_check_mark:                                                                                                                                 | Health check HTTP method.                                                                                                                          |
| `collectBody`                                                                                                                                      | *any*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `discovery`                                                                                                                                        | *models.HealthCheckCollectMethodPostWithBodyDiscovery*                                                                                             | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `collectUrl`                                                                                                                                       | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | Expression to derive URL to use for the health check operation (can be a constant).                                                                |
| `collectRequestParams`                                                                                                                             | *any*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `collectRequestHeaders`                                                                                                                            | [models.HealthCheckCollectMethodPostWithBodyCollectRequestHeader](../models/healthcheckcollectmethodpostwithbodycollectrequestheader.md)[]         | :heavy_minus_sign:                                                                                                                                 | Optional health check request headers.                                                                                                             |
| `authenticateCollect`                                                                                                                              | *boolean*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                 | Enable to make auth health check call.                                                                                                             |
| `authentication`                                                                                                                                   | [models.HealthCheckCollectMethodPostWithBodyAuthentication](../models/healthcheckcollectmethodpostwithbodyauthentication.md)                       | :heavy_check_mark:                                                                                                                                 | Authentication method for Discover and Collect REST calls. You can specify API Key–based authentication by adding the appropriate Collect headers. |
| `timeout`                                                                                                                                          | *number*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | HTTP request inactivity timeout, use 0 to disable                                                                                                  |
| `rejectUnauthorized`                                                                                                                               | *boolean*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                 | Whether to reject certificates that cannot be verified against a valid CA (e.g., self-signed certificates).                                        |
| `defaultBreakers`                                                                                                                                  | [models.HiddenDefaultBreakersOptionsDatabaseCollectorConf](../models/hiddendefaultbreakersoptionsdatabasecollectorconf.md)                         | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `safeHeaders`                                                                                                                                      | *string*[]                                                                                                                                         | :heavy_minus_sign:                                                                                                                                 | List of headers that are safe to log in plain text.                                                                                                |
| `retryRules`                                                                                                                                       | *models.HealthCheckCollectMethodPostWithBodyRetryRules*                                                                                            | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |