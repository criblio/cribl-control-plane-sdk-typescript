# FunctionConfSchemaFoldkeys

## Example Usage

```typescript
import { FunctionConfSchemaFoldkeys } from "cribl-control-plane/models";

let value: FunctionConfSchemaFoldkeys = {
  deleteOriginal: false,
  separator: "<value>",
  selectionRegExp: "<value>",
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `deleteOriginal`                                                                                                                   | *boolean*                                                                                                                          | :heavy_minus_sign:                                                                                                                 | When enabled (default), only the folded keys are kept. When disabled, the original entries are retained alongside the folded keys. |
| `separator`                                                                                                                        | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | Character or string used to separate key levels to be folded. Defaults to the dot (.) character.                                   |
| `selectionRegExp`                                                                                                                  | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | Optional regular expression to select a subset of the keys to fold.                                                                |