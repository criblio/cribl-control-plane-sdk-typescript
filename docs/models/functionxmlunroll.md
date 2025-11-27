# FunctionXmlUnroll

## Example Usage

```typescript
import { FunctionXmlUnroll } from "cribl-control-plane/models";

let value: FunctionXmlUnroll = {
  conf: {
    unroll: "<value>",
    inherit: "<value>",
  },
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "xml_unroll",
  initTime: 6048.36,
  loadTime: 9165.86,
  modTime: 5577.38,
  name: "<value>",
  schema: {},
  uischema: {},
  version: "<value>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `conf`                                                             | [models.FunctionXmlUnrollConf](../models/functionxmlunrollconf.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `filename`                                                         | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `disabled`                                                         | *boolean*                                                          | :heavy_check_mark:                                                 | N/A                                                                |
| `group`                                                            | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `id`                                                               | [models.FunctionXmlUnrollId](../models/functionxmlunrollid.md)     | :heavy_check_mark:                                                 | N/A                                                                |
| `initTime`                                                         | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `loadTime`                                                         | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `modTime`                                                          | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `name`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `schema`                                                           | Record<string, *any*>                                              | :heavy_check_mark:                                                 | JSON Schema Draft-06                                               |
| `uischema`                                                         | Record<string, *any*>                                              | :heavy_check_mark:                                                 | N/A                                                                |
| `version`                                                          | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |