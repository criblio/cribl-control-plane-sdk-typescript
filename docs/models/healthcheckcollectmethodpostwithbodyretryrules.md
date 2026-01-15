# HealthCheckCollectMethodPostWithBodyRetryRules

## Example Usage

```typescript
import { HealthCheckCollectMethodPostWithBodyRetryRules } from "cribl-control-plane/models";

let value: HealthCheckCollectMethodPostWithBodyRetryRules = {
  type: "static",
  interval: "<value>",
  limit: "<value>",
  multiplier: "<value>",
  codes: "<value>",
  enableHeader: "<value>",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                       | [models.RetryTypeOptionsHealthCheckCollectorConfRetryRules](../models/retrytypeoptionshealthcheckcollectorconfretryrules.md) | :heavy_check_mark:                                                                                                           | The algorithm to use when performing HTTP retries                                                                            |
| `interval`                                                                                                                   | *any*                                                                                                                        | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `limit`                                                                                                                      | *any*                                                                                                                        | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `multiplier`                                                                                                                 | *any*                                                                                                                        | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `codes`                                                                                                                      | *any*                                                                                                                        | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `enableHeader`                                                                                                               | *any*                                                                                                                        | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |