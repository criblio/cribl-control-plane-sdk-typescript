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
    },
  ],
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `count`                                       | *number*                                      | :heavy_minus_sign:                            | number of items present in the items array    |
| `items`                                       | [models.Pipeline](../../models/pipeline.md)[] | :heavy_minus_sign:                            | N/A                                           |