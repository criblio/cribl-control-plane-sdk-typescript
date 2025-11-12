# CountedPipeline

## Example Usage

```typescript
import { CountedPipeline } from "cribl-control-plane/models";

let value: CountedPipeline = {
  count: 53436,
  items: [
    {
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
            description:
              "whoever meanwhile achieve whoa barring properly excited",
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
    },
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `count`                                    | *number*                                   | :heavy_minus_sign:                         | number of items present in the items array |
| `items`                                    | [models.Pipeline](../models/pipeline.md)[] | :heavy_minus_sign:                         | N/A                                        |