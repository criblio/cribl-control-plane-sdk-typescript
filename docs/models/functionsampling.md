# FunctionSampling

## Example Usage

```typescript
import { FunctionSampling } from "cribl-control-plane/models";

let value: FunctionSampling = {
  conf: {
    rules: [
      {},
    ],
  },
  filename: "example.file",
  disabled: false,
  group: "<value>",
  id: "sampling",
  initTime: 3413.17,
  loadTime: 9830.65,
  modTime: 2657.5,
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

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `conf`                                                           | [models.FunctionSamplingConf](../models/functionsamplingconf.md) | :heavy_check_mark:                                               | N/A                                                              |
| `filename`                                                       | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `disabled`                                                       | *boolean*                                                        | :heavy_check_mark:                                               | N/A                                                              |
| `group`                                                          | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `id`                                                             | [models.FunctionSamplingId](../models/functionsamplingid.md)     | :heavy_check_mark:                                               | N/A                                                              |
| `initTime`                                                       | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `loadTime`                                                       | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `modTime`                                                        | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `name`                                                           | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `schema`                                                         | Record<string, *any*>                                            | :heavy_check_mark:                                               | JSON Schema Draft-06                                             |
| `uischema`                                                       | Record<string, *any*>                                            | :heavy_check_mark:                                               | N/A                                                              |
| `version`                                                        | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |