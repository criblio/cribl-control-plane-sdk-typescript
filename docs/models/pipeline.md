# Pipeline

## Example Usage

```typescript
import { Pipeline } from "cribl-control-plane/models";

let value: Pipeline = {
  id: "<id>",
  conf: {
    asyncFuncTimeout: 152450,
    description: "outside willfully athwart",
    streamtags: [
      "<value 1>",
    ],
    functions: [
      {
        id: "<id>",
        description: "rudely certainly clinch compromise following verbally",
        disabled: true,
        final: false,
        conf: {},
        groupId: "<id>",
      },
    ],
    groups: {
      "key": {
        name: "<value>",
        description: "boohoo mechanic rowdy whereas vice",
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