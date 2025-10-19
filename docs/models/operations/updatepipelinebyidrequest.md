# UpdatePipelineByIdRequest

## Example Usage

```typescript
import { UpdatePipelineByIdRequest } from "cribl-control-plane/models/operations";

let value: UpdatePipelineByIdRequest = {
  id: "<id>",
  pipeline: {
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
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `id`                                           | *string*                                       | :heavy_check_mark:                             | The <code>id</code> of the Pipeline to update. |
| `pipeline`                                     | [models.Pipeline](../../models/pipeline.md)    | :heavy_check_mark:                             | Pipeline object                                |