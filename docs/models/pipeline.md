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
    functions: [
      {
        id: "<id>",
        description: "regarding structure but squiggly soupy equally",
        disabled: false,
        final: true,
        conf: {},
        groupId: "<id>",
      },
    ],
    groups: {
      "key": {
        name: "<value>",
        description: "dream wildly but rag boohoo fondly huff",
        disabled: false,
      },
    },
  },
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `id`                             | *string*                         | :heavy_check_mark:               | N/A                              |
| `conf`                           | [models.Conf](../models/conf.md) | :heavy_check_mark:               | N/A                              |