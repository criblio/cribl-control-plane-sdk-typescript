# PipelineFunctionSerdeConf

## Example Usage

```typescript
import { PipelineFunctionSerdeConf } from "cribl-control-plane/models";

let value: PipelineFunctionSerdeConf = {
  mode: "extract",
  type: "grok",
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `mode`                                                                                      | [models.OperationMode](../models/operationmode.md)                                          | :heavy_check_mark:                                                                          | Extract creates new fields. Reserialize extracts and filters fields, and then reserializes. |
| `type`                                                                                      | [models.TypeOptions](../models/typeoptions.md)                                              | :heavy_check_mark:                                                                          | Parser or formatter type to use                                                             |
| `delimChar`                                                                                 | *any*                                                                                       | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `quoteChar`                                                                                 | *any*                                                                                       | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `escapeChar`                                                                                | *any*                                                                                       | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `nullValue`                                                                                 | *any*                                                                                       | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `srcField`                                                                                  | *string*                                                                                    | :heavy_minus_sign:                                                                          | Field containing text to be parsed                                                          |
| `dstField`                                                                                  | *string*                                                                                    | :heavy_minus_sign:                                                                          | Name of the field to add fields to. Extract mode only.                                      |
| `cleanFields`                                                                               | *any*                                                                                       | :heavy_minus_sign:                                                                          | N/A                                                                                         |