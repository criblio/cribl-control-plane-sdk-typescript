# PipelineFunctionAggregateMetrics

## Example Usage

```typescript
import { PipelineFunctionAggregateMetrics } from "cribl-control-plane/models";

let value: PipelineFunctionAggregateMetrics = {
  filter: "<value>",
  id: "aggregate_metrics",
  description: "along kindly down edge diagram meh whereas",
  disabled: false,
  final: true,
  conf: {
    passthrough: true,
    preserveGroupBys: true,
    sufficientStatsOnly: true,
    prefix: "<value>",
    timeWindow: "<value>",
    aggregations: [
      {
        metricType: "timer",
        agg: "<value>",
      },
    ],
    groupbys: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    flushEventLimit: 1582.91,
    flushMemLimit: "<value>",
    cumulative: false,
    shouldTreatDotsAsLiterals: true,
    add: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    flushOnInputClose: false,
  },
  groupId: "<id>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `filter`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | Filter that selects data to be fed through this Function                                     |
| `id`                                                                                         | *"aggregate_metrics"*                                                                        | :heavy_check_mark:                                                                           | Function ID                                                                                  |
| `description`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | Simple description of this step                                                              |
| `disabled`                                                                                   | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | If true, data will not be pushed through this function                                       |
| `final`                                                                                      | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | If enabled, stops the results of this Function from being passed to the downstream Functions |
| `conf`                                                                                       | [models.FunctionConfSchemaAggregateMetrics](../models/functionconfschemaaggregatemetrics.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `groupId`                                                                                    | *string*                                                                                     | :heavy_minus_sign:                                                                           | Group ID                                                                                     |