# FunctionPublishMetrics

## Example Usage

```typescript
import { FunctionPublishMetrics } from "cribl-control-plane/models";

let value: FunctionPublishMetrics = {
  filename: "example.file",
  asyncTimeout: 7718.35,
  criblVersion: "<value>",
  disabled: false,
  group: "<value>",
  handleSignals: true,
  id: "publish_metrics",
  loadTime: 3710.5,
  modTime: 4815.9,
  name: "<value>",
  sync: true,
  uischema: {},
  version: "<value>",
  schema: {
    fields: [
      {
        inFieldName: "<value>",
        outFieldExpr: "<value>",
      },
    ],
    dimensions: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    removeMetrics: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    removeDimensions: [
      "<value 1>",
    ],
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `filename`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `asyncTimeout`                                                                   | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `criblVersion`                                                                   | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `disabled`                                                                       | *boolean*                                                                        | :heavy_minus_sign:                                                               | N/A                                                                              |
| `group`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `handleSignals`                                                                  | *boolean*                                                                        | :heavy_minus_sign:                                                               | N/A                                                                              |
| `id`                                                                             | *"publish_metrics"*                                                              | :heavy_check_mark:                                                               | N/A                                                                              |
| `loadTime`                                                                       | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `modTime`                                                                        | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `name`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `sync`                                                                           | *boolean*                                                                        | :heavy_minus_sign:                                                               | N/A                                                                              |
| `uischema`                                                                       | Record<string, *any*>                                                            | :heavy_check_mark:                                                               | N/A                                                                              |
| `version`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `schema`                                                                         | [models.FunctionPublishMetricsSchema](../models/functionpublishmetricsschema.md) | :heavy_minus_sign:                                                               | N/A                                                                              |