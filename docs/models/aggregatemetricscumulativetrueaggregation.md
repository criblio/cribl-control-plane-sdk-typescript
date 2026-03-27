# AggregateMetricsCumulativeTrueAggregation

## Example Usage

```typescript
import { AggregateMetricsCumulativeTrueAggregation } from "cribl-control-plane/models";

let value: AggregateMetricsCumulativeTrueAggregation = {
  metricType: "distribution",
  agg: "<value>",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `metricType`                                                                                             | [models.AggregateMetricsCumulativeTrueMetricType](../models/aggregatemetricscumulativetruemetrictype.md) | :heavy_check_mark:                                                                                       | The output metric type                                                                                   |
| `agg`                                                                                                    | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Aggregate function to perform on events. Example: sum(bytes).where(action=='REJECT').as(TotalBytes)      |