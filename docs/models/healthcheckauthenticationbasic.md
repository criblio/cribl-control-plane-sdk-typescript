# HealthCheckAuthenticationBasic

## Example Usage

```typescript
import { HealthCheckAuthenticationBasic } from "cribl-control-plane/models";

let value: HealthCheckAuthenticationBasic = {
  authentication: "basic",
  username: "Lyric.Grant",
  password: "j8oqJdqwGmAtefF",
  discovery: {
    discoverType: "list",
  },
  collectUrl: "https://usable-replacement.net",
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
  timeout: 7651.76,
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
| `authentication`                                                                                                                                   | *"basic"*                                                                                                                                          | :heavy_check_mark:                                                                                                                                 | Authentication method for Discover and Collect REST calls. You can specify API Key–based authentication by adding the appropriate Collect headers. |
| `username`                                                                                                                                         | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | Basic authentication username                                                                                                                      |
| `password`                                                                                                                                         | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | Basic authentication password                                                                                                                      |
| `discovery`                                                                                                                                        | [models.HealthCheckAuthenticationBasicDiscovery](../models/healthcheckauthenticationbasicdiscovery.md)                                             | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `collectUrl`                                                                                                                                       | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | Expression to derive URL to use for the health check operation (can be a constant).                                                                |
| `collectMethod`                                                                                                                                    | [models.HealthCheckAuthenticationBasicHealthCheckMethod](../models/healthcheckauthenticationbasichealthcheckmethod.md)                             | :heavy_check_mark:                                                                                                                                 | Health check HTTP method.                                                                                                                          |
| `collectRequestParams`                                                                                                                             | *any*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `collectBody`                                                                                                                                      | *any*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `collectRequestHeaders`                                                                                                                            | [models.HealthCheckAuthenticationBasicCollectRequestHeader](../models/healthcheckauthenticationbasiccollectrequestheader.md)[]                     | :heavy_minus_sign:                                                                                                                                 | Optional health check request headers.                                                                                                             |
| `authenticateCollect`                                                                                                                              | *boolean*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                 | Enable to make auth health check call.                                                                                                             |
| `timeout`                                                                                                                                          | *number*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | HTTP request inactivity timeout, use 0 to disable                                                                                                  |
| `rejectUnauthorized`                                                                                                                               | *boolean*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                 | Whether to reject certificates that cannot be verified against a valid CA (e.g., self-signed certificates).                                        |
| `defaultBreakers`                                                                                                                                  | [models.HiddenDefaultBreakersOptionsDatabaseCollectorConf](../models/hiddendefaultbreakersoptionsdatabasecollectorconf.md)                         | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `safeHeaders`                                                                                                                                      | *string*[]                                                                                                                                         | :heavy_minus_sign:                                                                                                                                 | List of headers that are safe to log in plain text.                                                                                                |
| `retryRules`                                                                                                                                       | [models.HealthCheckAuthenticationBasicRetryRules](../models/healthcheckauthenticationbasicretryrules.md)                                           | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |