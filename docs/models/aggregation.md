# Aggregation

## Example Usage

```typescript
import { Aggregation } from "cribl-control-plane/models";

let value: Aggregation = {
  agg: "<value>",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `metricType`                                                                                        | [models.FunctionAggregateMetricsMetricType](../models/functionaggregatemetricsmetrictype.md)        | :heavy_minus_sign:                                                                                  | The output metric type                                                                              |
| `agg`                                                                                               | *string*                                                                                            | :heavy_check_mark:                                                                                  | Aggregate function to perform on events. Example: sum(bytes).where(action=='REJECT').as(TotalBytes) |