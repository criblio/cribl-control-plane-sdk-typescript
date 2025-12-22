# PipelineFunctionAggregationAdd

## Example Usage

```typescript
import { PipelineFunctionAggregationAdd } from "cribl-control-plane/models";

let value: PipelineFunctionAggregationAdd = {
  name: "<value>",
  value: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `name`                                                       | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `value`                                                      | *string*                                                     | :heavy_check_mark:                                           | JavaScript expression to compute the value (can be constant) |