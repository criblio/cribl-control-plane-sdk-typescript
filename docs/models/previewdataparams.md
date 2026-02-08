# PreviewDataParams

## Example Usage

```typescript
import { PreviewDataParams } from "cribl-control-plane/models";

let value: PreviewDataParams = {
  mode: "pipe",
  pipelineId: "<id>",
  sampleId: "<id>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `cpuProfile`                                                       | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |
| `dropped`                                                          | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |
| `enhanceMetricsOutput`                                             | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |
| `events`                                                           | Record<string, *any*>[]                                            | :heavy_minus_sign:                                                 | N/A                                                                |
| `inputId`                                                          | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `level`                                                            | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `memory`                                                           | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `mode`                                                             | [models.PreviewDataParamsMode](../models/previewdataparamsmode.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `pipelineId`                                                       | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `sampleId`                                                         | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `samplePipelineId`                                                 | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `timeout`                                                          | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |