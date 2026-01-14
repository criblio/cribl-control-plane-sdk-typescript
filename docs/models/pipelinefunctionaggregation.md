# PipelineFunctionAggregation

## Example Usage

```typescript
import { PipelineFunctionAggregation } from "cribl-control-plane/models";

let value: PipelineFunctionAggregation = {
  filter: "<value>",
  id: "aggregation",
  description: "well but amazing roger inasmuch harvest because",
  disabled: true,
  final: false,
  conf: {
    passthrough: false,
    preserveGroupBys: false,
    sufficientStatsOnly: false,
    metricsMode: true,
    prefix: "<value>",
    timeWindow: "<value>",
    aggregations: [
      "<value 1>",
      "<value 2>",
    ],
    groupbys: [
      "<value 1>",
    ],
    flushEventLimit: 1354.35,
    flushMemLimit: "<value>",
    cumulative: true,
    searchAggMode: "<value>",
    add: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    shouldTreatDotsAsLiterals: false,
    flushOnInputClose: false,
  },
  groupId: "<id>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `filter`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | Filter that selects data to be fed through this Function                                     |
| `id`                                                                                         | *"aggregation"*                                                                              | :heavy_check_mark:                                                                           | Function ID                                                                                  |
| `description`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | Simple description of this step                                                              |
| `disabled`                                                                                   | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | If true, data will not be pushed through this function                                       |
| `final`                                                                                      | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | If enabled, stops the results of this Function from being passed to the downstream Functions |
| `conf`                                                                                       | [models.PipelineFunctionAggregationConf](../models/pipelinefunctionaggregationconf.md)       | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `groupId`                                                                                    | *string*                                                                                     | :heavy_minus_sign:                                                                           | Group ID                                                                                     |