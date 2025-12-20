# CollectorSplunkRetryRules5

## Example Usage

```typescript
import { CollectorSplunkRetryRules5 } from "cribl-control-plane/models";

let value: CollectorSplunkRetryRules5 = {
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

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `type`                                                                     | [models.CollectorSplunkRetryType5](../models/collectorsplunkretrytype5.md) | :heavy_minus_sign:                                                         | Algorithm to use when performing HTTP retries                              |
| `interval`                                                                 | *any*                                                                      | :heavy_minus_sign:                                                         | N/A                                                                        |
| `limit`                                                                    | *any*                                                                      | :heavy_minus_sign:                                                         | N/A                                                                        |
| `multiplier`                                                               | *any*                                                                      | :heavy_minus_sign:                                                         | N/A                                                                        |
| `codes`                                                                    | *any*                                                                      | :heavy_minus_sign:                                                         | N/A                                                                        |
| `enableHeader`                                                             | *any*                                                                      | :heavy_minus_sign:                                                         | N/A                                                                        |
| `retryConnectTimeout`                                                      | *any*                                                                      | :heavy_minus_sign:                                                         | N/A                                                                        |
| `retryConnectReset`                                                        | *any*                                                                      | :heavy_minus_sign:                                                         | N/A                                                                        |