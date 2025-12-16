# FunctionAggregateMetrics

## Example Usage

```typescript
import { FunctionAggregateMetrics } from "cribl-control-plane/models";

let value: FunctionAggregateMetrics = {
  filename: "example.file",
  asyncTimeout: 9195.61,
  criblVersion: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: true,
  id: "aggregate_metrics",
  loadTime: 8650.04,
  modTime: 9819.96,
  name: "<value>",
  sync: true,
  uischema: {
    "key": "<value>",
  },
  version: "<value>",
  schema: {
    prefix: "<value>",
    aggregations: [
      {
        agg: "<value>",
      },
    ],
    groupbys: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    flushEventLimit: 9419.26,
    flushMemLimit: "<value>",
    add: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `filename`                                                                           | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `asyncTimeout`                                                                       | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `criblVersion`                                                                       | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `disabled`                                                                           | *boolean*                                                                            | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `group`                                                                              | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `handleSignals`                                                                      | *boolean*                                                                            | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `id`                                                                                 | *"aggregate_metrics"*                                                                | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `loadTime`                                                                           | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `modTime`                                                                            | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `name`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `sync`                                                                               | *boolean*                                                                            | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `uischema`                                                                           | Record<string, *any*>                                                                | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `version`                                                                            | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `schema`                                                                             | [models.FunctionAggregateMetricsSchema](../models/functionaggregatemetricsschema.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |