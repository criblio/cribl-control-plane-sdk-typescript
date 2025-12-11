# FunctionPublishMetricsSchema

## Example Usage

```typescript
import { FunctionPublishMetricsSchema } from "cribl-control-plane/models";

let value: FunctionPublishMetricsSchema = {
  fields: [
    {
      inFieldName: "<value>",
      outFieldExpr: "<value>",
    },
  ],
  dimensions: [
    "<value 1>",
  ],
  removeMetrics: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  removeDimensions: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                                                                                                                                                                                             | Type                                                                                                                                                                                                                                              | Required                                                                                                                                                                                                                                          | Description                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `fields`                                                                                                                                                                                                                                          | [models.FunctionPublishMetricsField](../models/functionpublishmetricsfield.md)[]                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                | List of metrics from event to extract and format. Formatted metrics can be used by a destination to pass metrics to a metrics aggregation platform.                                                                                               |
| `overwrite`                                                                                                                                                                                                                                       | *boolean*                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                | Overwrite previous metric specs. Leave disabled to append.                                                                                                                                                                                        |
| `dimensions`                                                                                                                                                                                                                                      | *string*[]                                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                | Optional list of dimensions to include in events. Wildcards supported. If you don't specify metrics, values will be appended to every metric found in the event. When you add a new metric, dimensions will be present only in those new metrics. |
| `removeMetrics`                                                                                                                                                                                                                                   | *string*[]                                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                | Optional list of metric field names to look for when removing metrics. When a metric's field name matches an element in this list, the metric will be removed from the event.                                                                     |
| `removeDimensions`                                                                                                                                                                                                                                | *string*[]                                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                | Optional list of dimensions to remove from every metric found in the event. Wildcards supported.                                                                                                                                                  |