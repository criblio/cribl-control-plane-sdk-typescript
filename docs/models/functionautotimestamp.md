# FunctionAutoTimestamp

## Example Usage

```typescript
import { FunctionAutoTimestamp } from "cribl-control-plane/models";

let value: FunctionAutoTimestamp = {
  conf: {
    spacer: "<value>",
    timestamps: [
      {
        regex: "<value>",
        strptime: "<value>",
      },
    ],
  },
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "auto_timestamp",
  initTime: 1982.4,
  loadTime: 3302.62,
  modTime: 2322.66,
  name: "<value>",
  schema: {},
  uischema: {
    "key": "<value>",
  },
  version: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `conf`                                                                     | [models.FunctionAutoTimestampConf](../models/functionautotimestampconf.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `filename`                                                                 | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `disabled`                                                                 | *boolean*                                                                  | :heavy_check_mark:                                                         | N/A                                                                        |
| `group`                                                                    | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `id`                                                                       | [models.FunctionAutoTimestampId](../models/functionautotimestampid.md)     | :heavy_check_mark:                                                         | N/A                                                                        |
| `initTime`                                                                 | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `loadTime`                                                                 | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `modTime`                                                                  | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `name`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `schema`                                                                   | Record<string, *any*>                                                      | :heavy_check_mark:                                                         | JSON Schema Draft-06                                                       |
| `uischema`                                                                 | Record<string, *any*>                                                      | :heavy_check_mark:                                                         | N/A                                                                        |
| `version`                                                                  | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |