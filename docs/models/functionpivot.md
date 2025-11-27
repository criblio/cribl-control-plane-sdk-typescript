# FunctionPivot

## Example Usage

```typescript
import { FunctionPivot } from "cribl-control-plane/models";

let value: FunctionPivot = {
  conf: {
    labelField: "<value>",
    dataFields: [
      "<value 1>",
    ],
    qualifierFields: [
      "<value 1>",
      "<value 2>",
    ],
  },
  filename: "example.file",
  disabled: false,
  group: "<value>",
  id: "pivot",
  initTime: 3520.47,
  loadTime: 4909.49,
  modTime: 545.45,
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
| `conf`                                                                   | [models.SimplePivotConfiguration](../models/simplepivotconfiguration.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `filename`                                                               | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `disabled`                                                               | *boolean*                                                                | :heavy_check_mark:                                                       | N/A                                                                      |
| `group`                                                                  | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `id`                                                                     | [models.FunctionPivotId](../models/functionpivotid.md)                   | :heavy_check_mark:                                                       | N/A                                                                      |
| `initTime`                                                               | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `loadTime`                                                               | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `modTime`                                                                | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `name`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `schema`                                                                 | Record<string, *any*>                                                    | :heavy_check_mark:                                                       | JSON Schema Draft-06                                                     |
| `uischema`                                                               | Record<string, *any*>                                                    | :heavy_check_mark:                                                       | N/A                                                                      |
| `version`                                                                | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |