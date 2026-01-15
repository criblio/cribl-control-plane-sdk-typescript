# HealthCheckAuthenticationBasicSecret

## Example Usage

```typescript
import { HealthCheckAuthenticationBasicSecret } from "cribl-control-plane/models";

let value: HealthCheckAuthenticationBasicSecret = {
  authentication: "basicSecret",
  credentialsSecret: "<value>",
  discovery: {
    discoverType: "http",
  },
  collectUrl: "https://stale-deck.org/",
  collectMethod: "post",
  collectRequestParams: "<value>",
  collectBody: "<value>",
  collectRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  authenticateCollect: false,
  timeout: 172.59,
  rejectUnauthorized: true,
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
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `authentication`                                                                                                                                   | *"basicSecret"*                                                                                                                                    | :heavy_check_mark:                                                                                                                                 | Authentication method for Discover and Collect REST calls. You can specify API Key–based authentication by adding the appropriate Collect headers. |
| `credentialsSecret`                                                                                                                                | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | Select or create a stored secret that references your credentials                                                                                  |
| `discovery`                                                                                                                                        | [models.HealthCheckAuthenticationBasicSecretDiscovery](../models/healthcheckauthenticationbasicsecretdiscovery.md)                                 | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `collectUrl`                                                                                                                                       | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | Expression to derive URL to use for the health check operation (can be a constant).                                                                |
| `collectMethod`                                                                                                                                    | [models.HealthCheckAuthenticationBasicSecretHealthCheckMethod](../models/healthcheckauthenticationbasicsecrethealthcheckmethod.md)                 | :heavy_check_mark:                                                                                                                                 | Health check HTTP method.                                                                                                                          |
| `collectRequestParams`                                                                                                                             | *any*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `collectBody`                                                                                                                                      | *any*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `collectRequestHeaders`                                                                                                                            | [models.HealthCheckAuthenticationBasicSecretCollectRequestHeader](../models/healthcheckauthenticationbasicsecretcollectrequestheader.md)[]         | :heavy_minus_sign:                                                                                                                                 | Optional health check request headers.                                                                                                             |
| `authenticateCollect`                                                                                                                              | *boolean*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                 | Enable to make auth health check call.                                                                                                             |
| `timeout`                                                                                                                                          | *number*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | HTTP request inactivity timeout, use 0 to disable                                                                                                  |
| `rejectUnauthorized`                                                                                                                               | *boolean*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                 | Whether to reject certificates that cannot be verified against a valid CA (e.g., self-signed certificates).                                        |
| `defaultBreakers`                                                                                                                                  | [models.HiddenDefaultBreakersOptionsDatabaseCollectorConf](../models/hiddendefaultbreakersoptionsdatabasecollectorconf.md)                         | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `safeHeaders`                                                                                                                                      | *string*[]                                                                                                                                         | :heavy_minus_sign:                                                                                                                                 | List of headers that are safe to log in plain text.                                                                                                |
| `retryRules`                                                                                                                                       | [models.HealthCheckAuthenticationBasicSecretRetryRules](../models/healthcheckauthenticationbasicsecretretryrules.md)                               | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |