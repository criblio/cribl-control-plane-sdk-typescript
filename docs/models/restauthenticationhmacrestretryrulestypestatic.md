# RestAuthenticationHmacRestRetryRulesTypeStatic

## Example Usage

```typescript
import { RestAuthenticationHmacRestRetryRulesTypeStatic } from "cribl-control-plane/models";

let value: RestAuthenticationHmacRestRetryRulesTypeStatic = {
  type: "static",
  interval: "<value>",
  limit: "<value>",
  codes: "<value>",
  enableHeader: "<value>",
  retryConnectTimeout: "<value>",
  retryConnectReset: "<value>",
  multiplier: "<value>",
  maxIntervalMs: "<value>",
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `type`                                            | *"static"*                                        | :heavy_check_mark:                                | The algorithm to use when performing HTTP retries |
| `interval`                                        | *any*                                             | :heavy_minus_sign:                                | N/A                                               |
| `limit`                                           | *any*                                             | :heavy_minus_sign:                                | N/A                                               |
| `codes`                                           | *any*                                             | :heavy_minus_sign:                                | N/A                                               |
| `enableHeader`                                    | *any*                                             | :heavy_minus_sign:                                | N/A                                               |
| `retryConnectTimeout`                             | *any*                                             | :heavy_minus_sign:                                | N/A                                               |
| `retryConnectReset`                               | *any*                                             | :heavy_minus_sign:                                | N/A                                               |
| `multiplier`                                      | *any*                                             | :heavy_minus_sign:                                | N/A                                               |
| `maxIntervalMs`                                   | *any*                                             | :heavy_minus_sign:                                | N/A                                               |