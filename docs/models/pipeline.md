# Pipeline

## Example Usage

```typescript
import { Pipeline } from "cribl-control-plane/models";

let value: Pipeline = {
  id: "<id>",
  conf: {
    asyncFuncTimeout: 963474,
    description: "shinny where seldom",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    groups: {
      "key": {
        name: "<value>",
        description: "regarding structure but squiggly soupy equally",
        disabled: false,
      },
    },
    functions: [
      {
        id: "<id>",
        description: "outbid dilate which eyebrow before engage",
        disabled: true,
        final: true,
        conf: {},
        groupId: "<id>",
      },
    ],
  },
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `id`                                             | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `conf`                                           | [models.PipelineConf](../models/pipelineconf.md) | :heavy_check_mark:                               | N/A                                              |