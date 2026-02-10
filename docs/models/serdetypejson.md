# SerdeTypeJson

## Example Usage

```typescript
import { SerdeTypeJson } from "cribl-control-plane/models";

let value: SerdeTypeJson = {
  type: "json",
  mode: "reserialize",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                           | *"json"*                                                                                                         | :heavy_check_mark:                                                                                               | Parser or formatter type to use                                                                                  |
| `keep`                                                                                                           | *string*[]                                                                                                       | :heavy_minus_sign:                                                                                               | List of fields to keep. Supports wildcards (*). Takes precedence over 'Fields to remove'.                        |
| `remove`                                                                                                         | *string*[]                                                                                                       | :heavy_minus_sign:                                                                                               | List of fields to remove. Supports wildcards (*). Cannot remove fields that match 'Fields to keep'.              |
| `fieldFilterExpr`                                                                                                | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | Expression evaluated against {index, name, value} context. Return truthy to keep a field, or falsy to remove it. |
| `mode`                                                                                                           | [models.SerdeTypeJsonOperationMode](../models/serdetypejsonoperationmode.md)                                     | :heavy_check_mark:                                                                                               | Extract creates new fields. Reserialize extracts and filters fields, and then reserializes.                      |
| `srcField`                                                                                                       | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | Field containing text to be parsed                                                                               |
| `dstField`                                                                                                       | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | Name of the field to add fields to. Extract mode only.                                                           |