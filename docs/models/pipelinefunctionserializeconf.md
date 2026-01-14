# PipelineFunctionSerializeConf

## Example Usage

```typescript
import { PipelineFunctionSerializeConf } from "cribl-control-plane/models";

let value: PipelineFunctionSerializeConf = {
  type: "delim",
  delimChar: "<value>",
  quoteChar: "<value>",
  escapeChar: "<value>",
  nullValue: "<value>",
  fields: [
    "<value 1>",
    "<value 2>",
  ],
  srcField: "<value>",
  dstField: "<value>",
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                             | [models.PipelineFunctionSerializeType](../models/pipelinefunctionserializetype.md)                                                 | :heavy_check_mark:                                                                                                                 | Data output format                                                                                                                 |
| `delimChar`                                                                                                                        | *any*                                                                                                                              | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `quoteChar`                                                                                                                        | *any*                                                                                                                              | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `escapeChar`                                                                                                                       | *any*                                                                                                                              | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `nullValue`                                                                                                                        | *any*                                                                                                                              | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `fields`                                                                                                                           | *string*[]                                                                                                                         | :heavy_minus_sign:                                                                                                                 | Required for CSV, ELFF, CLF, and Delimited values. All other formats support wildcard field lists. Examples: host, array*, !host * |
| `srcField`                                                                                                                         | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | Field containing object to serialize. Leave blank to serialize top-level event fields.                                             |
| `dstField`                                                                                                                         | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | Field to serialize data to                                                                                                         |