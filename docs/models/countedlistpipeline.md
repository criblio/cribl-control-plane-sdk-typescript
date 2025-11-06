# CountedListPipeline

## Example Usage

```typescript
import { CountedListPipeline } from "cribl-control-plane/models";

let value: CountedListPipeline = {
  count: 579947,
  items: [
    {
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
            description:
              "rudely certainly clinch compromise following verbally",
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
    },
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `count`                                    | *number*                                   | :heavy_minus_sign:                         | number of items present in the items array |
| `items`                                    | [models.Pipeline](../models/pipeline.md)[] | :heavy_minus_sign:                         | N/A                                        |