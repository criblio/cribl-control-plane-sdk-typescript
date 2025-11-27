# FunctionUnion

## Example Usage

```typescript
import { FunctionUnion } from "cribl-control-plane/models";

let value: FunctionUnion = {
  conf: {
    searchJobId: "<id>",
    stageIds: [
      "<value 1>",
      "<value 2>",
    ],
  },
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "union",
  initTime: 2900.49,
  loadTime: 9577.82,
  modTime: 8854.5,
  name: "<value>",
  schema: {},
  uischema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  version: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `conf`                                                       | [models.UnionConfiguration](../models/unionconfiguration.md) | :heavy_check_mark:                                           | N/A                                                          |
| `filename`                                                   | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `disabled`                                                   | *boolean*                                                    | :heavy_check_mark:                                           | N/A                                                          |
| `group`                                                      | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `id`                                                         | [models.FunctionUnionId](../models/functionunionid.md)       | :heavy_check_mark:                                           | N/A                                                          |
| `initTime`                                                   | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `loadTime`                                                   | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `modTime`                                                    | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `name`                                                       | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `schema`                                                     | Record<string, *any*>                                        | :heavy_check_mark:                                           | JSON Schema Draft-06                                         |
| `uischema`                                                   | Record<string, *any*>                                        | :heavy_check_mark:                                           | N/A                                                          |
| `version`                                                    | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |