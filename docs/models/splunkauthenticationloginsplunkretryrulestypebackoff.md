# SplunkAuthenticationLoginSplunkRetryRulesTypeBackoff

## Example Usage

```typescript
import { SplunkAuthenticationLoginSplunkRetryRulesTypeBackoff } from "cribl-control-plane/models";

let value: SplunkAuthenticationLoginSplunkRetryRulesTypeBackoff = {
  type: "backoff",
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

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `type`                                            | *"backoff"*                                       | :heavy_check_mark:                                | The algorithm to use when performing HTTP retries |
| `interval`                                        | *any*                                             | :heavy_minus_sign:                                | N/A                                               |
| `limit`                                           | *any*                                             | :heavy_minus_sign:                                | N/A                                               |
| `multiplier`                                      | *any*                                             | :heavy_minus_sign:                                | N/A                                               |
| `codes`                                           | *any*                                             | :heavy_minus_sign:                                | N/A                                               |
| `enableHeader`                                    | *any*                                             | :heavy_minus_sign:                                | N/A                                               |
| `retryConnectTimeout`                             | *any*                                             | :heavy_minus_sign:                                | N/A                                               |
| `retryConnectReset`                               | *any*                                             | :heavy_minus_sign:                                | N/A                                               |