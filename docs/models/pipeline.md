# Pipeline

## Example Usage

```typescript
import { Pipeline } from "cribl-control-plane/models";

let value: Pipeline = {
  id: "<id>",
  conf: {
    functions: [
      {
        id: "eventstats",
        conf: {
          aggregations: [
            "<value 1>",
            "<value 2>",
          ],
        },
      },
    ],
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `id`                                                              | *string*                                                          | :heavy_check_mark:                                                | Unique identifier for the Pipeline.                               |
| `conf`                                                            | [models.PipelineConf](../models/pipelineconf.md)                  | :heavy_check_mark:                                                | Configuration for the Pipeline, including functions and settings. |