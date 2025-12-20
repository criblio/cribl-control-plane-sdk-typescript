# CollectorRestRetryRules14

## Example Usage

```typescript
import { CollectorRestRetryRules14 } from "cribl-control-plane/models";

let value: CollectorRestRetryRules14 = {
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

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `type`                                                                   | [models.CollectorRestRetryType14](../models/collectorrestretrytype14.md) | :heavy_minus_sign:                                                       | Algorithm to use when performing HTTP retries                            |
| `interval`                                                               | *any*                                                                    | :heavy_minus_sign:                                                       | N/A                                                                      |
| `limit`                                                                  | *any*                                                                    | :heavy_minus_sign:                                                       | N/A                                                                      |
| `multiplier`                                                             | *any*                                                                    | :heavy_minus_sign:                                                       | N/A                                                                      |
| `maxIntervalMs`                                                          | *any*                                                                    | :heavy_minus_sign:                                                       | N/A                                                                      |
| `codes`                                                                  | *any*                                                                    | :heavy_minus_sign:                                                       | N/A                                                                      |
| `enableHeader`                                                           | *any*                                                                    | :heavy_minus_sign:                                                       | N/A                                                                      |
| `retryConnectTimeout`                                                    | *any*                                                                    | :heavy_minus_sign:                                                       | N/A                                                                      |
| `retryConnectReset`                                                      | *any*                                                                    | :heavy_minus_sign:                                                       | N/A                                                                      |