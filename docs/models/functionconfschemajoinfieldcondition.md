# FunctionConfSchemaJoinFieldCondition

## Example Usage

```typescript
import { FunctionConfSchemaJoinFieldCondition } from "cribl-control-plane/models";

let value: FunctionConfSchemaJoinFieldCondition = {
  leftFieldName: "<value>",
  rightFieldName: "<value>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `leftFieldName`                                                                                | *string*                                                                                       | :heavy_check_mark:                                                                             | The field name to join on, on the left side.                                                   |
| `rightFieldName`                                                                               | *string*                                                                                       | :heavy_check_mark:                                                                             | The field name on the right side of the data, i.e. the stage results, that we are joining with |