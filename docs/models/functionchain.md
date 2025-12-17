# FunctionChain

## Example Usage

```typescript
import { FunctionChain } from "cribl-control-plane/models";

let value: FunctionChain = {
  filename: "example.file",
  asyncTimeout: 7137.72,
  criblVersion: "<value>",
  disabled: false,
  group: "<value>",
  handleSignals: true,
  id: "chain",
  loadTime: 5516.27,
  modTime: 8422.73,
  name: "<value>",
  sync: false,
  uischema: {
    "key": "<value>",
  },
  version: "<value>",
  schema: {
    processor: "<value>",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `filename`                                                             | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `asyncTimeout`                                                         | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `criblVersion`                                                         | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `disabled`                                                             | *boolean*                                                              | :heavy_minus_sign:                                                     | N/A                                                                    |
| `group`                                                                | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `handleSignals`                                                        | *boolean*                                                              | :heavy_minus_sign:                                                     | N/A                                                                    |
| `id`                                                                   | *"chain"*                                                              | :heavy_check_mark:                                                     | N/A                                                                    |
| `loadTime`                                                             | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `modTime`                                                              | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `sync`                                                                 | *boolean*                                                              | :heavy_minus_sign:                                                     | N/A                                                                    |
| `uischema`                                                             | Record<string, *any*>                                                  | :heavy_check_mark:                                                     | N/A                                                                    |
| `version`                                                              | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `schema`                                                               | [models.FunctionConfSchemaChain](../models/functionconfschemachain.md) | :heavy_minus_sign:                                                     | N/A                                                                    |