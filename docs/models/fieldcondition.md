# FieldCondition

## Example Usage

```typescript
import { FieldCondition } from "cribl-control-plane/models";

let value: FieldCondition = {
  leftFieldName: "<value>",
  rightFieldName: "<value>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `leftFieldName`                                                                                | *string*                                                                                       | :heavy_check_mark:                                                                             | The field name to join on, on the left side.                                                   |
| `rightFieldName`                                                                               | *string*                                                                                       | :heavy_check_mark:                                                                             | The field name on the right side of the data, i.e. the stage results, that we are joining with |