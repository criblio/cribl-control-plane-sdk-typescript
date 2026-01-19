# PipelineFunctionRollupMetrics

## Example Usage

```typescript
import { PipelineFunctionRollupMetrics } from "cribl-control-plane/models";

let value: PipelineFunctionRollupMetrics = {
  filter: "<value>",
  id: "rollup_metrics",
  description: "secrecy by whoa reapply",
  disabled: false,
  final: false,
  conf: {
    dimensions: [
      "<value 1>",
    ],
    timeWindow: "<value>",
    gaugeRollup: "max",
  },
  groupId: "<id>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `filter`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | Filter that selects data to be fed through this Function                                     |
| `id`                                                                                         | *"rollup_metrics"*                                                                           | :heavy_check_mark:                                                                           | Function ID                                                                                  |
| `description`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | Simple description of this step                                                              |
| `disabled`                                                                                   | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | If true, data will not be pushed through this function                                       |
| `final`                                                                                      | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | If enabled, stops the results of this Function from being passed to the downstream Functions |
| `conf`                                                                                       | [models.FunctionConfSchemaRollupMetrics](../models/functionconfschemarollupmetrics.md)       | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `groupId`                                                                                    | *string*                                                                                     | :heavy_minus_sign:                                                                           | Group ID                                                                                     |