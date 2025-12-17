# FunctionConfSchemaPivot

## Example Usage

```typescript
import { FunctionConfSchemaPivot } from "cribl-control-plane/models";

let value: FunctionConfSchemaPivot = {
  labelField: "<value>",
  dataFields: [
    "<value 1>",
  ],
  qualifierFields: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `labelField`                                  | *string*                                      | :heavy_minus_sign:                            | Fields to be used for the left-most column.   |
| `dataFields`                                  | *string*[]                                    | :heavy_minus_sign:                            | Fields with the cell values (i.e. aggregates) |
| `qualifierFields`                             | *string*[]                                    | :heavy_minus_sign:                            | Fields to qualify or group data fields        |