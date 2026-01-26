# FunctionConfSchemaPublishMetricsField

## Example Usage

```typescript
import { FunctionConfSchemaPublishMetricsField } from "cribl-control-plane/models";

let value: FunctionConfSchemaPublishMetricsField = {
  inFieldName: "<value>",
  outFieldExpr: "<value>",
  metricType: "timer",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `inFieldName`                                                                                                | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The name of the field in the event that contains the metric value                                            |
| `outFieldExpr`                                                                                               | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | JavaScript expression to evaluate the metric field name. Defaults to Event Field Name.                       |
| `metricType`                                                                                                 | [models.FunctionConfSchemaPublishMetricsMetricType](../models/functionconfschemapublishmetricsmetrictype.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |