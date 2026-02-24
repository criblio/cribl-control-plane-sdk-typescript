# SimplePivotConfiguration

## Example Usage

```typescript
import { SimplePivotConfiguration } from "cribl-control-plane/models";

let value: SimplePivotConfiguration = {
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
| `labelField`                                  | *string*                                      | :heavy_check_mark:                            | Fields to be used for the left-most column.   |
| `dataFields`                                  | *string*[]                                    | :heavy_check_mark:                            | Fields with the cell values (i.e. aggregates) |
| `qualifierFields`                             | *string*[]                                    | :heavy_check_mark:                            | Fields to qualify or group data fields        |