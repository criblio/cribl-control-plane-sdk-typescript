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
        functions: [
          {
            id: "otlp_traces",
            conf: {},
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
| `count`                                    | *number*                                   | :heavy_check_mark:                         | number of items present in the items array |
| `items`                                    | [models.Pipeline](../models/pipeline.md)[] | :heavy_check_mark:                         | List of items in this response.            |