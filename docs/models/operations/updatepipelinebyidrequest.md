# UpdatePipelineByIdRequest

## Example Usage

```typescript
import { UpdatePipelineByIdRequest } from "cribl-control-plane/models/operations";

let value: UpdatePipelineByIdRequest = {
  id: "<id>",
  pipeline: {
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
          description: "rudely certainly clinch compromise following verbally",
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
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `id`                                           | *string*                                       | :heavy_check_mark:                             | The <code>id</code> of the Pipeline to update. |
| `pipeline`                                     | [models.Pipeline](../../models/pipeline.md)    | :heavy_check_mark:                             | Pipeline object                                |