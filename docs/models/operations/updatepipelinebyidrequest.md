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
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `id`                                           | *string*                                       | :heavy_check_mark:                             | The <code>id</code> of the Pipeline to update. |
| `pipeline`                                     | [models.Pipeline](../../models/pipeline.md)    | :heavy_check_mark:                             | Pipeline object                                |