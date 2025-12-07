# FunctionJoin

## Example Usage

```typescript
import { FunctionJoin } from "cribl-control-plane/models";

let value: FunctionJoin = {
  filename: "example.file",
  asyncTimeout: 3529.61,
  criblVersion: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: true,
  id: "join",
  loadTime: 7143.87,
  modTime: 821.81,
  name: "<value>",
  sync: false,
  uischema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  version: "<value>",
  schema: {
    kind: "<value>",
    hints: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    fieldConditions: [
      {
        leftFieldName: "<value>",
        rightFieldName: "<value>",
      },
    ],
    searchJobId: "<id>",
    stageId: "<id>",
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `filename`                                                 | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `asyncTimeout`                                             | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `criblVersion`                                             | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `disabled`                                                 | *boolean*                                                  | :heavy_check_mark:                                         | N/A                                                        |
| `group`                                                    | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `handleSignals`                                            | *boolean*                                                  | :heavy_minus_sign:                                         | N/A                                                        |
| `id`                                                       | [models.FunctionJoinId](../models/functionjoinid.md)       | :heavy_check_mark:                                         | N/A                                                        |
| `loadTime`                                                 | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `modTime`                                                  | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `name`                                                     | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `sync`                                                     | *boolean*                                                  | :heavy_minus_sign:                                         | N/A                                                        |
| `uischema`                                                 | Record<string, *any*>                                      | :heavy_check_mark:                                         | N/A                                                        |
| `version`                                                  | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `schema`                                                   | [models.JoinConfiguration](../models/joinconfiguration.md) | :heavy_minus_sign:                                         | N/A                                                        |