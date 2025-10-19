# Pipeline

## Example Usage

```typescript
import { Pipeline } from "cribl-control-plane/models";

let value: Pipeline = {
  id: "<id>",
  conf: {
    asyncFuncTimeout: 930714,
    description: "independence mad spring owlishly expert yowza",
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    functions: [
      {
        id: "<id>",
        description: "poorly huzzah disinherit considering pomelo barring",
        disabled: true,
        final: true,
        conf: {},
        groupId: "<id>",
      },
    ],
    groups: {
      "key": {
        name: "<value>",
        description: "bah out great",
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