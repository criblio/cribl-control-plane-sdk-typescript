# Pipeline

## Example Usage

```typescript
import { Pipeline } from "cribl-control-plane/models";

let value: Pipeline = {
  id: "<id>",
  conf: {},
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `id`                                             | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `conf`                                           | [models.PipelineConf](../models/pipelineconf.md) | :heavy_check_mark:                               | N/A                                              |