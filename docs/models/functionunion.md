# FunctionUnion

## Example Usage

```typescript
import { FunctionUnion } from "cribl-control-plane/models";

let value: FunctionUnion = {
  filename: "example.file",
  asyncTimeout: 6855.47,
  criblVersion: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: true,
  id: "union",
  loadTime: 9577.82,
  modTime: 8854.5,
  name: "<value>",
  sync: true,
  uischema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  version: "<value>",
  schema: {
    searchJobId: "<id>",
    stageIds: [
      "<value 1>",
      "<value 2>",
    ],
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `filename`                                                   | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `asyncTimeout`                                               | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `criblVersion`                                               | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `disabled`                                                   | *boolean*                                                    | :heavy_minus_sign:                                           | N/A                                                          |
| `group`                                                      | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `handleSignals`                                              | *boolean*                                                    | :heavy_minus_sign:                                           | N/A                                                          |
| `id`                                                         | *"union"*                                                    | :heavy_check_mark:                                           | N/A                                                          |
| `loadTime`                                                   | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `modTime`                                                    | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `name`                                                       | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `sync`                                                       | *boolean*                                                    | :heavy_minus_sign:                                           | N/A                                                          |
| `uischema`                                                   | Record<string, *any*>                                        | :heavy_check_mark:                                           | N/A                                                          |
| `version`                                                    | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `schema`                                                     | [models.UnionConfiguration](../models/unionconfiguration.md) | :heavy_minus_sign:                                           | N/A                                                          |