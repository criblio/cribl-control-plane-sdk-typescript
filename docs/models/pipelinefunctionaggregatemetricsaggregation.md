# PipelineFunctionAggregateMetricsAggregation

## Example Usage

```typescript
import { PipelineFunctionAggregateMetricsAggregation } from "cribl-control-plane/models";

let value: PipelineFunctionAggregateMetricsAggregation = {
  metricType: "summary",
  agg: "<value>",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `metricType`                                                                                                 | [models.PipelineFunctionAggregateMetricsMetricType](../models/pipelinefunctionaggregatemetricsmetrictype.md) | :heavy_check_mark:                                                                                           | The output metric type                                                                                       |
| `agg`                                                                                                        | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Aggregate function to perform on events. Example: sum(bytes).where(action=='REJECT').as(TotalBytes)          |