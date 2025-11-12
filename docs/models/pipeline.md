# Pipeline

## Example Usage

```typescript
import { Pipeline } from "cribl-control-plane/models";

let value: Pipeline = {
  id: "<id>",
  conf: {
    asyncFuncTimeout: 772456,
    description:
      "self-confidence certify seagull bah once steeple miskey fit fowl dispose",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    functions: [
      {
        id: "<id>",
        description: "whoever meanwhile achieve whoa barring properly excited",
        disabled: true,
        final: true,
        conf: {},
        groupId: "<id>",
      },
    ],
    groups: {
      "key": {
        name: "<value>",
        description:
          "usefully what airline usefully ack regularly uh-huh naturally kettledrum",
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