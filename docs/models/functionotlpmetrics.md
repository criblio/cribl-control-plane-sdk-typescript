# FunctionOtlpMetrics

## Example Usage

```typescript
import { FunctionOtlpMetrics } from "cribl-control-plane/models";

let value: FunctionOtlpMetrics = {
  conf: {
    resourceAttributePrefixes: [
      "<value 1>",
    ],
  },
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "otlp_metrics",
  initTime: 1143.64,
  loadTime: 3598.47,
  modTime: 2838.68,
  name: "<value>",
  schema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  uischema: {},
  version: "<value>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `conf`                                                                 | [models.FunctionOtlpMetricsConf](../models/functionotlpmetricsconf.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `filename`                                                             | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `disabled`                                                             | *boolean*                                                              | :heavy_check_mark:                                                     | N/A                                                                    |
| `group`                                                                | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `id`                                                                   | [models.FunctionOtlpMetricsId](../models/functionotlpmetricsid.md)     | :heavy_check_mark:                                                     | N/A                                                                    |
| `initTime`                                                             | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `loadTime`                                                             | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `modTime`                                                              | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `schema`                                                               | Record<string, *any*>                                                  | :heavy_check_mark:                                                     | JSON Schema Draft-06                                                   |
| `uischema`                                                             | Record<string, *any*>                                                  | :heavy_check_mark:                                                     | N/A                                                                    |
| `version`                                                              | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |