# ColumnMappingLocalSearchStorage

## Example Usage

```typescript
import { ColumnMappingLocalSearchStorage } from "cribl-control-plane/models";

let value: ColumnMappingLocalSearchStorage = {
  columnName: "<value>",
  columnValueExpression: "<value>",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `columnName`                                                         | *string*                                                             | :heavy_check_mark:                                                   | Name of the column that will store field value                       |
| `columnType`                                                         | *string*                                                             | :heavy_minus_sign:                                                   | Type of the column in the database                                   |
| `columnValueExpression`                                              | *string*                                                             | :heavy_check_mark:                                                   | JavaScript expression to compute value to be inserted into the table |