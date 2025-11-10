# ColumnMapping4

## Example Usage

```typescript
import { ColumnMapping4 } from "cribl-control-plane/models";

let value: ColumnMapping4 = {
  columnName: "<value>",
  columnType: "<value>",
  columnValueExpression: "<value>",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `columnName`                                                                | *string*                                                                    | :heavy_check_mark:                                                          | Name of the column in ClickHouse that will store field value                |
| `columnType`                                                                | *string*                                                                    | :heavy_minus_sign:                                                          | Type of the column in the ClickHouse database                               |
| `columnValueExpression`                                                     | *string*                                                                    | :heavy_check_mark:                                                          | JavaScript expression to compute value to be inserted into ClickHouse table |