# FunctionEvalConf

## Example Usage

```typescript
import { FunctionEvalConf } from "cribl-control-plane/models";

let value: FunctionEvalConf = {
  add: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  keep: [
    "<value 1>",
    "<value 2>",
  ],
  remove: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                                                                                                                                              | Type                                                                                                                                                                               | Required                                                                                                                                                                           | Description                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `add`                                                                                                                                                                              | [models.FunctionEvalAdd](../models/functionevaladd.md)[]                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                 | Set of key-value pairs to evaluate and add/set                                                                                                                                     |
| `keep`                                                                                                                                                                             | *string*[]                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                 | List of fields to keep. Supports * wildcards. Takes precedence over 'Remove fields'.                                                                                               |
| `remove`                                                                                                                                                                           | *string*[]                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                 | List of fields to remove. Supports * wildcards. Fields that match 'Keep fields' will not be removed. Enclose field names containing special characters in single or double quotes. |