# FunctionUnroll

## Example Usage

```typescript
import { FunctionUnroll } from "cribl-control-plane/models";

let value: FunctionUnroll = {
  conf: {},
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "unroll",
  initTime: 5472.87,
  loadTime: 102.03,
  modTime: 9015.71,
  name: "<value>",
  schema: {
    "key": "<value>",
  },
  uischema: {
    "key": "<value>",
  },
  version: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `conf`                                                       | [models.FunctionUnrollConf](../models/functionunrollconf.md) | :heavy_check_mark:                                           | N/A                                                          |
| `filename`                                                   | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `disabled`                                                   | *boolean*                                                    | :heavy_check_mark:                                           | N/A                                                          |
| `group`                                                      | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `id`                                                         | [models.FunctionUnrollId](../models/functionunrollid.md)     | :heavy_check_mark:                                           | N/A                                                          |
| `initTime`                                                   | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `loadTime`                                                   | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `modTime`                                                    | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `name`                                                       | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `schema`                                                     | Record<string, *any*>                                        | :heavy_check_mark:                                           | JSON Schema Draft-06                                         |
| `uischema`                                                   | Record<string, *any*>                                        | :heavy_check_mark:                                           | N/A                                                          |
| `version`                                                    | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |