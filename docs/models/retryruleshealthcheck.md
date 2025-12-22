# RetryRulesHealthCheck

## Example Usage

```typescript
import { RetryRulesHealthCheck } from "cribl-control-plane/models";

let value: RetryRulesHealthCheck = {
  interval: "<value>",
  limit: "<value>",
  multiplier: "<value>",
  codes: "<value>",
  enableHeader: "<value>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `type`                                                                       | [models.RetryTypeOptionsRetryRules](../models/retrytypeoptionsretryrules.md) | :heavy_minus_sign:                                                           | The algorithm to use when performing HTTP retries                            |
| `interval`                                                                   | *any*                                                                        | :heavy_minus_sign:                                                           | N/A                                                                          |
| `limit`                                                                      | *any*                                                                        | :heavy_minus_sign:                                                           | N/A                                                                          |
| `multiplier`                                                                 | *any*                                                                        | :heavy_minus_sign:                                                           | N/A                                                                          |
| `codes`                                                                      | *any*                                                                        | :heavy_minus_sign:                                                           | N/A                                                                          |
| `enableHeader`                                                               | *any*                                                                        | :heavy_minus_sign:                                                           | N/A                                                                          |