# UpdatePipelineByIdRequest

## Example Usage

```typescript
import { UpdatePipelineByIdRequest } from "cribl-control-plane/models/operations";

let value: UpdatePipelineByIdRequest = {
  id: "<id>",
  pipeline: {
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
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `id`                                        | *string*                                    | :heavy_check_mark:                          | Unique ID to PATCH                          |
| `pipeline`                                  | [models.Pipeline](../../models/pipeline.md) | :heavy_check_mark:                          | Pipeline object to be updated               |