# HealthCheckCollectMethodPostWithBodyHealthCheckRetryRulesTypeBackoff

## Example Usage

```typescript
import { HealthCheckCollectMethodPostWithBodyHealthCheckRetryRulesTypeBackoff } from "cribl-control-plane/models";

let value:
  HealthCheckCollectMethodPostWithBodyHealthCheckRetryRulesTypeBackoff = {
    type: "backoff",
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