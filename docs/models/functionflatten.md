# FunctionFlatten

## Example Usage

```typescript
import { FunctionFlatten } from "cribl-control-plane/models";

let value: FunctionFlatten = {
  conf: {
    fields: [
      "<value 1>",
      "<value 2>",
    ],
  },
  filename: "example.file",
  disabled: false,
  group: "<value>",
  id: "flatten",
  initTime: 8291.43,
  loadTime: 5805.1,
  modTime: 750.5,
  name: "<value>",
  schema: {
    "key": "<value>",
  },
  uischema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  version: "<value>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `conf`                                                         | [models.FunctionFlattenConf](../models/functionflattenconf.md) | :heavy_check_mark:                                             | N/A                                                            |
| `filename`                                                     | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `disabled`                                                     | *boolean*                                                      | :heavy_check_mark:                                             | N/A                                                            |
| `group`                                                        | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `id`                                                           | [models.FunctionFlattenId](../models/functionflattenid.md)     | :heavy_check_mark:                                             | N/A                                                            |
| `initTime`                                                     | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `loadTime`                                                     | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `modTime`                                                      | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `name`                                                         | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `schema`                                                       | Record<string, *any*>                                          | :heavy_check_mark:                                             | JSON Schema Draft-06                                           |
| `uischema`                                                     | Record<string, *any*>                                          | :heavy_check_mark:                                             | N/A                                                            |
| `version`                                                      | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |