# FunctionOtlpTraces

## Example Usage

```typescript
import { FunctionOtlpTraces } from "cribl-control-plane/models";

let value: FunctionOtlpTraces = {
  conf: {},
  filename: "example.file",
  disabled: false,
  group: "<value>",
  id: "otlp_traces",
  initTime: 5868.43,
  loadTime: 5015.1,
  modTime: 8099.62,
  name: "<value>",
  schema: {},
  uischema: {},
  version: "<value>",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `conf`                                                               | [models.FunctionOtlpTracesConf](../models/functionotlptracesconf.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `filename`                                                           | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `disabled`                                                           | *boolean*                                                            | :heavy_check_mark:                                                   | N/A                                                                  |
| `group`                                                              | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `id`                                                                 | [models.FunctionOtlpTracesId](../models/functionotlptracesid.md)     | :heavy_check_mark:                                                   | N/A                                                                  |
| `initTime`                                                           | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `loadTime`                                                           | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `modTime`                                                            | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `name`                                                               | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `schema`                                                             | Record<string, *any*>                                                | :heavy_check_mark:                                                   | JSON Schema Draft-06                                                 |
| `uischema`                                                           | Record<string, *any*>                                                | :heavy_check_mark:                                                   | N/A                                                                  |
| `version`                                                            | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |