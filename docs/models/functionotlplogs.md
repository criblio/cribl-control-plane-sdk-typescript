# FunctionOtlpLogs

## Example Usage

```typescript
import { FunctionOtlpLogs } from "cribl-control-plane/models";

let value: FunctionOtlpLogs = {
  conf: {},
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "otlp_logs",
  initTime: 6137.12,
  loadTime: 6994.92,
  modTime: 7102.91,
  name: "<value>",
  schema: {
    "key": "<value>",
    "key1": "<value>",
  },
  uischema: {},
  version: "<value>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `conf`                                                           | [models.FunctionOtlpLogsConf](../models/functionotlplogsconf.md) | :heavy_check_mark:                                               | N/A                                                              |
| `filename`                                                       | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `disabled`                                                       | *boolean*                                                        | :heavy_check_mark:                                               | N/A                                                              |
| `group`                                                          | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `id`                                                             | [models.FunctionOtlpLogsId](../models/functionotlplogsid.md)     | :heavy_check_mark:                                               | N/A                                                              |
| `initTime`                                                       | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `loadTime`                                                       | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `modTime`                                                        | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `name`                                                           | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `schema`                                                         | Record<string, *any*>                                            | :heavy_check_mark:                                               | JSON Schema Draft-06                                             |
| `uischema`                                                       | Record<string, *any*>                                            | :heavy_check_mark:                                               | N/A                                                              |
| `version`                                                        | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |