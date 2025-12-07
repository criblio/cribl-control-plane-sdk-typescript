# FunctionPivot

## Example Usage

```typescript
import { FunctionPivot } from "cribl-control-plane/models";

let value: FunctionPivot = {
  filename: "example.file",
  asyncTimeout: 3354.7,
  criblVersion: "<value>",
  disabled: false,
  group: "<value>",
  handleSignals: false,
  id: "pivot",
  loadTime: 3520.47,
  modTime: 4909.49,
  name: "<value>",
  sync: true,
  uischema: {
    "key": "<value>",
  },
  version: "<value>",
  schema: {
    labelField: "<value>",
    dataFields: [
      "<value 1>",
      "<value 2>",
    ],
    qualifierFields: [
      "<value 1>",
    ],
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
| `id`                                                                     | [models.FunctionPivotId](../models/functionpivotid.md)                   | :heavy_check_mark:                                                       | N/A                                                                      |
| `loadTime`                                                               | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `modTime`                                                                | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `name`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `sync`                                                                   | *boolean*                                                                | :heavy_minus_sign:                                                       | N/A                                                                      |
| `uischema`                                                               | Record<string, *any*>                                                    | :heavy_check_mark:                                                       | N/A                                                                      |
| `version`                                                                | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `schema`                                                                 | [models.SimplePivotConfiguration](../models/simplepivotconfiguration.md) | :heavy_minus_sign:                                                       | N/A                                                                      |