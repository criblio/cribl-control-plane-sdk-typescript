# FunctionConfSchemaAggregateMetricsAggregation

## Example Usage

```typescript
import { FunctionConfSchemaAggregateMetricsAggregation } from "cribl-control-plane/models";

let value: FunctionConfSchemaAggregateMetricsAggregation = {
  agg: "<value>",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `metricType`                                                                                                     | [models.FunctionConfSchemaAggregateMetricsMetricType](../models/functionconfschemaaggregatemetricsmetrictype.md) | :heavy_minus_sign:                                                                                               | The output metric type                                                                                           |
| `agg`                                                                                                            | *string*                                                                                                         | :heavy_check_mark:                                                                                               | Aggregate function to perform on events. Example: sum(bytes).where(action=='REJECT').as(TotalBytes)              |