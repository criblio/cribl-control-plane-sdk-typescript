# FunctionAggregateMetricsAdd

## Example Usage

```typescript
import { FunctionAggregateMetricsAdd } from "cribl-control-plane/models";

let value: FunctionAggregateMetricsAdd = {
  name: "<value>",
  value: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `name`                                                       | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `value`                                                      | *string*                                                     | :heavy_check_mark:                                           | JavaScript expression to compute the value (can be constant) |