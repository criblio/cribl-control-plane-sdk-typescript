# ListPipelineResponse

a list of Pipeline objects

## Example Usage

```typescript
import { ListPipelineResponse } from "cribl-control-plane/models/operations";

let value: ListPipelineResponse = {
  count: 772527,
  items: [
    {
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
    },
  ],
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `count`                                       | *number*                                      | :heavy_minus_sign:                            | number of items present in the items array    |
| `items`                                       | [models.Pipeline](../../models/pipeline.md)[] | :heavy_minus_sign:                            | N/A                                           |