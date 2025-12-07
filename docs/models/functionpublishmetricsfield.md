# FunctionPublishMetricsField

## Example Usage

```typescript
import { FunctionPublishMetricsField } from "cribl-control-plane/models";

let value: FunctionPublishMetricsField = {
  inFieldName: "<value>",
  outFieldExpr: "<value>",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `inFieldName`                                                                            | *string*                                                                                 | :heavy_check_mark:                                                                       | The name of the field in the event that contains the metric value                        |
| `outFieldExpr`                                                                           | *string*                                                                                 | :heavy_minus_sign:                                                                       | JavaScript expression to evaluate the metric field name. Defaults to Event Field Name.   |
| `metricType`                                                                             | [models.FunctionPublishMetricsMetricType](../models/functionpublishmetricsmetrictype.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |