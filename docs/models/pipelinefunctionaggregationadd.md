# PipelineFunctionAggregationAdd

## Example Usage

```typescript
import { PipelineFunctionAggregationAdd } from "cribl-control-plane/models";

let value: PipelineFunctionAggregationAdd = {
  value: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `name`                                                       | *string*                                                     | :heavy_minus_sign:                                           | Name of the field to set or add to the event.                |
| `value`                                                      | *string*                                                     | :heavy_check_mark:                                           | JavaScript expression to compute the value (can be constant) |