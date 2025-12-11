# FunctionHandlebar

## Example Usage

```typescript
import { FunctionHandlebar } from "cribl-control-plane/models";

let value: FunctionHandlebar = {
  filename: "example.file",
  asyncTimeout: 7688.22,
  criblVersion: "<value>",
  disabled: false,
  group: "<value>",
  handleSignals: false,
  id: "handlebar",
  loadTime: 599,
  modTime: 8171.36,
  name: "<value>",
  sync: false,
  uischema: {
    "key": "<value>",
    "key1": "<value>",
  },
  version: "<value>",
  schema: {
    templates: {
      "key": {
        content: "<value>",
        description: "and what appropriate singe within although configuration",
      },
    },
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
| `id`                                                                   | *"handlebar"*                                                          | :heavy_check_mark:                                                     | N/A                                                                    |
| `loadTime`                                                             | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `modTime`                                                              | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `sync`                                                                 | *boolean*                                                              | :heavy_minus_sign:                                                     | N/A                                                                    |
| `uischema`                                                             | Record<string, *any*>                                                  | :heavy_check_mark:                                                     | N/A                                                                    |
| `version`                                                              | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `schema`                                                               | [models.FunctionHandlebarSchema](../models/functionhandlebarschema.md) | :heavy_minus_sign:                                                     | N/A                                                                    |