# SplunkAuthenticationTokenRetryRules

## Example Usage

```typescript
import { SplunkAuthenticationTokenRetryRules } from "cribl-control-plane/models";

let value: SplunkAuthenticationTokenRetryRules = {
  interval: "<value>",
  limit: "<value>",
  multiplier: "<value>",
  codes: "<value>",
  enableHeader: "<value>",
  retryConnectTimeout: "<value>",
  retryConnectReset: "<value>",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                       | [models.RetryTypeOptionsHealthCheckCollectorConfRetryRules](../models/retrytypeoptionshealthcheckcollectorconfretryrules.md) | :heavy_minus_sign:                                                                                                           | The algorithm to use when performing HTTP retries                                                                            |
| `interval`                                                                                                                   | *any*                                                                                                                        | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `limit`                                                                                                                      | *any*                                                                                                                        | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `multiplier`                                                                                                                 | *any*                                                                                                                        | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `codes`                                                                                                                      | *any*                                                                                                                        | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `enableHeader`                                                                                                               | *any*                                                                                                                        | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `retryConnectTimeout`                                                                                                        | *any*                                                                                                                        | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `retryConnectReset`                                                                                                          | *any*                                                                                                                        | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |