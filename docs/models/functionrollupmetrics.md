# FunctionRollupMetrics

## Example Usage

```typescript
import { FunctionRollupMetrics } from "cribl-control-plane/models";

let value: FunctionRollupMetrics = {
  filename: "example.file",
  asyncTimeout: 9783.75,
  criblVersion: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: true,
  id: "rollup_metrics",
  loadTime: 9614.97,
  modTime: 5303.67,
  name: "<value>",
  sync: true,
  uischema: {
    "key": "<value>",
    "key1": "<value>",
  },
  version: "<value>",
  schema: {
    dimensions: [
      "<value 1>",
    ],
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `filename`                                                                             | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `asyncTimeout`                                                                         | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `criblVersion`                                                                         | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `disabled`                                                                             | *boolean*                                                                              | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `group`                                                                                | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `handleSignals`                                                                        | *boolean*                                                                              | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `id`                                                                                   | *"rollup_metrics"*                                                                     | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `loadTime`                                                                             | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `modTime`                                                                              | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `name`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `sync`                                                                                 | *boolean*                                                                              | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `uischema`                                                                             | Record<string, *any*>                                                                  | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `version`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `schema`                                                                               | [models.FunctionConfSchemaRollupMetrics](../models/functionconfschemarollupmetrics.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |