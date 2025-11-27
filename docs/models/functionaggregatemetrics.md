# FunctionAggregateMetrics

## Example Usage

```typescript
import { FunctionAggregateMetrics } from "cribl-control-plane/models";

let value: FunctionAggregateMetrics = {
  conf: {
    prefix: "<value>",
    aggregations: [
      {
        agg: "<value>",
      },
    ],
    groupbys: [
      "<value 1>",
    ],
    flushEventLimit: 4413.95,
    flushMemLimit: "<value>",
    add: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
  },
  filename: "example.file",
  disabled: false,
  group: "<value>",
  id: "aggregate_metrics",
  initTime: 9819.96,
  loadTime: 500.14,
  modTime: 4439.43,
  name: "<value>",
  schema: {
    "key": "<value>",
    "key1": "<value>",
  },
  uischema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  version: "<value>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `conf`                                                                           | [models.FunctionAggregateMetricsConf](../models/functionaggregatemetricsconf.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `filename`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `disabled`                                                                       | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |
| `group`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `id`                                                                             | [models.FunctionAggregateMetricsId](../models/functionaggregatemetricsid.md)     | :heavy_check_mark:                                                               | N/A                                                                              |
| `initTime`                                                                       | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `loadTime`                                                                       | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `modTime`                                                                        | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `name`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `schema`                                                                         | Record<string, *any*>                                                            | :heavy_check_mark:                                                               | JSON Schema Draft-06                                                             |
| `uischema`                                                                       | Record<string, *any*>                                                            | :heavy_check_mark:                                                               | N/A                                                                              |
| `version`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |