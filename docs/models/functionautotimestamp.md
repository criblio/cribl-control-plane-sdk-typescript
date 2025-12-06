# FunctionAutoTimestamp

## Example Usage

```typescript
import { FunctionAutoTimestamp } from "cribl-control-plane/models";

let value: FunctionAutoTimestamp = {
  filename: "example.file",
  asyncTimeout: 3412.89,
  criblVersion: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: true,
  id: "auto_timestamp",
  loadTime: 2322.66,
  modTime: 1347.26,
  name: "<value>",
  sync: true,
  uischema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  version: "<value>",
  schema: {
    spacer: "<value>",
    timestamps: [
      {
        regex: "<value>",
        strptime: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `filename`                                                                     | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `asyncTimeout`                                                                 | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `criblVersion`                                                                 | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `disabled`                                                                     | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |
| `group`                                                                        | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `handleSignals`                                                                | *boolean*                                                                      | :heavy_minus_sign:                                                             | N/A                                                                            |
| `id`                                                                           | [models.FunctionAutoTimestampId](../models/functionautotimestampid.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `loadTime`                                                                     | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `modTime`                                                                      | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `name`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `sync`                                                                         | *boolean*                                                                      | :heavy_minus_sign:                                                             | N/A                                                                            |
| `uischema`                                                                     | Record<string, *any*>                                                          | :heavy_check_mark:                                                             | N/A                                                                            |
| `version`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `schema`                                                                       | [models.FunctionAutoTimestampSchema](../models/functionautotimestampschema.md) | :heavy_minus_sign:                                                             | N/A                                                                            |