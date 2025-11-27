# FunctionExternaldata

## Example Usage

```typescript
import { FunctionExternaldata } from "cribl-control-plane/models";

let value: FunctionExternaldata = {
  conf: {},
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "externaldata",
  initTime: 7766.92,
  loadTime: 8635.32,
  modTime: 3395.47,
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

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `conf`                                                                   | [models.FunctionExternaldataConf](../models/functionexternaldataconf.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `filename`                                                               | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `disabled`                                                               | *boolean*                                                                | :heavy_check_mark:                                                       | N/A                                                                      |
| `group`                                                                  | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `id`                                                                     | [models.FunctionExternaldataId](../models/functionexternaldataid.md)     | :heavy_check_mark:                                                       | N/A                                                                      |
| `initTime`                                                               | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `loadTime`                                                               | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `modTime`                                                                | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `name`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `schema`                                                                 | Record<string, *any*>                                                    | :heavy_check_mark:                                                       | JSON Schema Draft-06                                                     |
| `uischema`                                                               | Record<string, *any*>                                                    | :heavy_check_mark:                                                       | N/A                                                                      |
| `version`                                                                | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |