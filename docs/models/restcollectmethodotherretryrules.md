# RestCollectMethodOtherRetryRules

## Example Usage

```typescript
import { RestCollectMethodOtherRetryRules } from "cribl-control-plane/models";

let value: RestCollectMethodOtherRetryRules = {
  interval: "<value>",
  limit: "<value>",
  multiplier: "<value>",
  maxIntervalMs: "<value>",
  codes: "<value>",
  enableHeader: "<value>",
  retryConnectTimeout: "<value>",
  retryConnectReset: "<value>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `type`                                                                                 | [models.RestCollectMethodOtherRetryType](../models/restcollectmethodotherretrytype.md) | :heavy_minus_sign:                                                                     | Algorithm to use when performing HTTP retries                                          |
| `interval`                                                                             | *any*                                                                                  | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `limit`                                                                                | *any*                                                                                  | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `multiplier`                                                                           | *any*                                                                                  | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `maxIntervalMs`                                                                        | *any*                                                                                  | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `codes`                                                                                | *any*                                                                                  | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `enableHeader`                                                                         | *any*                                                                                  | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `retryConnectTimeout`                                                                  | *any*                                                                                  | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `retryConnectReset`                                                                    | *any*                                                                                  | :heavy_minus_sign:                                                                     | N/A                                                                                    |