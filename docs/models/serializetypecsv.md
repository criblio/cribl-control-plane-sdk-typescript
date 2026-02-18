# SerializeTypeCsv

## Example Usage

```typescript
import { SerializeTypeCsv } from "cribl-control-plane/models";

let value: SerializeTypeCsv = {
  type: "csv",
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                             | *"csv"*                                                                                                                            | :heavy_check_mark:                                                                                                                 | Data output format                                                                                                                 |
| `fields`                                                                                                                           | *string*[]                                                                                                                         | :heavy_minus_sign:                                                                                                                 | Required for CSV, ELFF, CLF, and Delimited values. All other formats support wildcard field lists. Examples: host, array*, !host * |
| `srcField`                                                                                                                         | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | Field containing object to serialize. Leave blank to serialize top-level event fields.                                             |
| `dstField`                                                                                                                         | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | Field to serialize data to                                                                                                         |