# FunctionTrimTimestamp

## Example Usage

```typescript
import { FunctionTrimTimestamp } from "cribl-control-plane/models";

let value: FunctionTrimTimestamp = {
  conf: {
    field: "<value>",
  },
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "trim_timestamp",
  initTime: 3003.7,
  loadTime: 7209.06,
  modTime: 9909.57,
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

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `conf`                                                                     | [models.FunctionTrimTimestampConf](../models/functiontrimtimestampconf.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `filename`                                                                 | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `disabled`                                                                 | *boolean*                                                                  | :heavy_check_mark:                                                         | N/A                                                                        |
| `group`                                                                    | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `id`                                                                       | [models.FunctionTrimTimestampId](../models/functiontrimtimestampid.md)     | :heavy_check_mark:                                                         | N/A                                                                        |
| `initTime`                                                                 | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `loadTime`                                                                 | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `modTime`                                                                  | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `name`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `schema`                                                                   | Record<string, *any*>                                                      | :heavy_check_mark:                                                         | JSON Schema Draft-06                                                       |
| `uischema`                                                                 | Record<string, *any*>                                                      | :heavy_check_mark:                                                         | N/A                                                                        |
| `version`                                                                  | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |