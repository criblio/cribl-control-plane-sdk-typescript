# SerdeTypeGrok

## Example Usage

```typescript
import { SerdeTypeGrok } from "cribl-control-plane/models";

let value: SerdeTypeGrok = {
  type: "grok",
  pattern: "<value>",
  mode: "extract",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `type`                                                                                       | *"grok"*                                                                                     | :heavy_check_mark:                                                                           | Parser or formatter type to use                                                              |
| `pattern`                                                                                    | *string*                                                                                     | :heavy_check_mark:                                                                           | Grok pattern to extract fields. Syntax supported: %{PATTERN_NAME:FIELD_NAME}                 |
| `patternList`                                                                                | [models.ItemsTypeSerdeTypeGrokPatternList](../models/itemstypeserdetypegrokpatternlist.md)[] | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `mode`                                                                                       | [models.SerdeTypeGrokOperationMode](../models/serdetypegrokoperationmode.md)                 | :heavy_check_mark:                                                                           | Extract creates new fields. Reserialize extracts and filters fields, and then reserializes.  |
| `srcField`                                                                                   | *string*                                                                                     | :heavy_minus_sign:                                                                           | Field containing text to be parsed                                                           |
| `dstField`                                                                                   | *string*                                                                                     | :heavy_minus_sign:                                                                           | Name of the field to add fields to. Extract mode only.                                       |