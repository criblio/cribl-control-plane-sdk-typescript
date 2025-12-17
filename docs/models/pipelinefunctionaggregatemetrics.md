# PipelineFunctionAggregateMetrics

## Example Usage

```typescript
import { PipelineFunctionAggregateMetrics } from "cribl-control-plane/models";

let value: PipelineFunctionAggregateMetrics = {
  id: "aggregate_metrics",
  description: "along kindly down edge diagram meh whereas",
  disabled: false,
  final: true,
  conf: {
    prefix: "<value>",
    aggregations: [],
    groupbys: [
      "<value 1>",
    ],
    flushEventLimit: 539.99,
    flushMemLimit: "<value>",
    add: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
  },
  groupId: "<id>",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `filter`                                                                                         | *string*                                                                                         | :heavy_minus_sign:                                                                               | Filter that selects data to be fed through this Function                                         |
| `id`                                                                                             | *"aggregate_metrics"*                                                                            | :heavy_check_mark:                                                                               | Function ID                                                                                      |
| `description`                                                                                    | *string*                                                                                         | :heavy_minus_sign:                                                                               | Simple description of this step                                                                  |
| `disabled`                                                                                       | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | If true, data will not be pushed through this function                                           |
| `final`                                                                                          | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | If enabled, stops the results of this Function from being passed to the downstream Functions     |
| `conf`                                                                                           | [models.PipelineFunctionAggregateMetricsConf](../models/pipelinefunctionaggregatemetricsconf.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `groupId`                                                                                        | *string*                                                                                         | :heavy_minus_sign:                                                                               | Group ID                                                                                         |