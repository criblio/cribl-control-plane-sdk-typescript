# AggregateMetricsCumulativeFalseAggregation

## Example Usage

```typescript
import { AggregateMetricsCumulativeFalseAggregation } from "cribl-control-plane/models";

let value: AggregateMetricsCumulativeFalseAggregation = {
  metricType: "counter",
  agg: "<value>",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `metricType`                                                                                               | [models.AggregateMetricsCumulativeFalseMetricType](../models/aggregatemetricscumulativefalsemetrictype.md) | :heavy_check_mark:                                                                                         | The output metric type                                                                                     |
| `agg`                                                                                                      | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Aggregate function to perform on events. Example: sum(bytes).where(action=='REJECT').as(TotalBytes)        |