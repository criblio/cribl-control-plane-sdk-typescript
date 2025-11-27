# FunctionJsonUnroll

## Example Usage

```typescript
import { FunctionJsonUnroll } from "cribl-control-plane/models";

let value: FunctionJsonUnroll = {
  conf: {
    path: "/usr",
    name: "<value>",
  },
  filename: "example.file",
  disabled: false,
  group: "<value>",
  id: "json_unroll",
  initTime: 410,
  loadTime: 936.94,
  modTime: 292.6,
  name: "<value>",
  schema: {
    "key": "<value>",
  },
  uischema: {},
  version: "<value>",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `conf`                                                               | [models.FunctionJsonUnrollConf](../models/functionjsonunrollconf.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `filename`                                                           | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `disabled`                                                           | *boolean*                                                            | :heavy_check_mark:                                                   | N/A                                                                  |
| `group`                                                              | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `id`                                                                 | [models.FunctionJsonUnrollId](../models/functionjsonunrollid.md)     | :heavy_check_mark:                                                   | N/A                                                                  |
| `initTime`                                                           | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `loadTime`                                                           | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `modTime`                                                            | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `name`                                                               | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `schema`                                                             | Record<string, *any*>                                                | :heavy_check_mark:                                                   | JSON Schema Draft-06                                                 |
| `uischema`                                                           | Record<string, *any*>                                                | :heavy_check_mark:                                                   | N/A                                                                  |
| `version`                                                            | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |