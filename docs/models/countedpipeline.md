# CountedPipeline

## Example Usage

```typescript
import { CountedPipeline } from "cribl-control-plane/models";

let value: CountedPipeline = {
  items: [
    {
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
    },
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `count`                                    | *number*                                   | :heavy_minus_sign:                         | number of items present in the items array |
| `items`                                    | [models.Pipeline](../models/pipeline.md)[] | :heavy_minus_sign:                         | List of items in this response.            |