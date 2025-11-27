# FunctionTee

## Example Usage

```typescript
import { FunctionTee } from "cribl-control-plane/models";

let value: FunctionTee = {
  conf: {
    command: "<value>",
    args: [
      "<value 1>",
      "<value 2>",
    ],
    env: {
      "key": "<value>",
    },
  },
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "tee",
  initTime: 7605.35,
  loadTime: 4994.36,
  modTime: 547.47,
  name: "<value>",
  schema: {
    "key": "<value>",
  },
  uischema: {
    "key": "<value>",
    "key1": "<value>",
  },
  version: "<value>",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `conf`                                                 | [models.FunctionTeeConf](../models/functionteeconf.md) | :heavy_check_mark:                                     | N/A                                                    |
| `filename`                                             | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `disabled`                                             | *boolean*                                              | :heavy_check_mark:                                     | N/A                                                    |
| `group`                                                | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `id`                                                   | [models.FunctionTeeId](../models/functionteeid.md)     | :heavy_check_mark:                                     | N/A                                                    |
| `initTime`                                             | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `loadTime`                                             | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `modTime`                                              | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `name`                                                 | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `schema`                                               | Record<string, *any*>                                  | :heavy_check_mark:                                     | JSON Schema Draft-06                                   |
| `uischema`                                             | Record<string, *any*>                                  | :heavy_check_mark:                                     | N/A                                                    |
| `version`                                              | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |