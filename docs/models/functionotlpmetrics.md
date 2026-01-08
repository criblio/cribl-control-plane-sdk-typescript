# FunctionOtlpMetrics

## Example Usage

```typescript
import { FunctionOtlpMetrics } from "cribl-control-plane/models";

let value: FunctionOtlpMetrics = {
  __filename: "example.file",
  asyncTimeout: 2251.51,
  cribl_version: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: true,
  id: "otlp_metrics",
  loadTime: 3598.47,
  modTime: 2838.68,
  name: "<value>",
  sync: false,
  uischema: {},
  version: "<value>",
  schema: {
    resourceAttributePrefixes: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `filename`                                                                         | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `asyncTimeout`                                                                     | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `criblVersion`                                                                     | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `disabled`                                                                         | *boolean*                                                                          | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `group`                                                                            | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `handleSignals`                                                                    | *boolean*                                                                          | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `id`                                                                               | *"otlp_metrics"*                                                                   | :heavy_check_mark:                                                                 | N/A                                                                                |
| `loadTime`                                                                         | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `modTime`                                                                          | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `name`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `sync`                                                                             | *boolean*                                                                          | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `uischema`                                                                         | Record<string, *any*>                                                              | :heavy_check_mark:                                                                 | N/A                                                                                |
| `version`                                                                          | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `schema`                                                                           | [models.FunctionConfSchemaOtlpMetrics](../models/functionconfschemaotlpmetrics.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |