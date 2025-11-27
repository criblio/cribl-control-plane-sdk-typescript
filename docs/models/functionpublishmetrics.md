# FunctionPublishMetrics

## Example Usage

```typescript
import { FunctionPublishMetrics } from "cribl-control-plane/models";

let value: FunctionPublishMetrics = {
  conf: {
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
    ],
    removeDimensions: [
      "<value 1>",
    ],
  },
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "publish_metrics",
  initTime: 4815.9,
  loadTime: 729.4,
  modTime: 1117.74,
  name: "<value>",
  schema: {
    "key": "<value>",
    "key1": "<value>",
  },
  uischema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  version: "<value>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `conf`                                                                       | [models.FunctionPublishMetricsConf](../models/functionpublishmetricsconf.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `filename`                                                                   | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `disabled`                                                                   | *boolean*                                                                    | :heavy_check_mark:                                                           | N/A                                                                          |
| `group`                                                                      | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `id`                                                                         | [models.FunctionPublishMetricsId](../models/functionpublishmetricsid.md)     | :heavy_check_mark:                                                           | N/A                                                                          |
| `initTime`                                                                   | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `loadTime`                                                                   | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `modTime`                                                                    | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `schema`                                                                     | Record<string, *any*>                                                        | :heavy_check_mark:                                                           | JSON Schema Draft-06                                                         |
| `uischema`                                                                   | Record<string, *any*>                                                        | :heavy_check_mark:                                                           | N/A                                                                          |
| `version`                                                                    | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |