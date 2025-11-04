# UpdatePipelineByIdResponse

a list of Pipeline objects

## Example Usage

```typescript
import { UpdatePipelineByIdResponse } from "cribl-control-plane/models/operations";

let value: UpdatePipelineByIdResponse = {
  count: 385,
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
    },
  ],
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `count`                                       | *number*                                      | :heavy_minus_sign:                            | number of items present in the items array    |
| `items`                                       | [models.Pipeline](../../models/pipeline.md)[] | :heavy_minus_sign:                            | N/A                                           |