# FunctionJsonUnroll

## Example Usage

```typescript
import { FunctionJsonUnroll } from "cribl-control-plane/models";

let value: FunctionJsonUnroll = {
  filename: "example.file",
  asyncTimeout: 6785.72,
  criblVersion: "<value>",
  disabled: false,
  group: "<value>",
  handleSignals: true,
  id: "json_unroll",
  loadTime: 936.94,
  modTime: 292.6,
  name: "<value>",
  sync: true,
  uischema: {},
  version: "<value>",
  schema: {
    path: "/var/tmp",
    name: "<value>",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `filename`                                                               | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `asyncTimeout`                                                           | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `criblVersion`                                                           | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `disabled`                                                               | *boolean*                                                                | :heavy_check_mark:                                                       | N/A                                                                      |
| `group`                                                                  | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `handleSignals`                                                          | *boolean*                                                                | :heavy_minus_sign:                                                       | N/A                                                                      |
| `id`                                                                     | [models.FunctionJsonUnrollId](../models/functionjsonunrollid.md)         | :heavy_check_mark:                                                       | N/A                                                                      |
| `loadTime`                                                               | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `modTime`                                                                | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `name`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `sync`                                                                   | *boolean*                                                                | :heavy_minus_sign:                                                       | N/A                                                                      |
| `uischema`                                                               | Record<string, *any*>                                                    | :heavy_check_mark:                                                       | N/A                                                                      |
| `version`                                                                | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `schema`                                                                 | [models.FunctionJsonUnrollSchema](../models/functionjsonunrollschema.md) | :heavy_minus_sign:                                                       | N/A                                                                      |