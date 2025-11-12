# UpdatePipelineByIdRequest

## Example Usage

```typescript
import { UpdatePipelineByIdRequest } from "cribl-control-plane/models/operations";

let value: UpdatePipelineByIdRequest = {
  id: "<id>",
  pipeline: {
    id: "<id>",
    conf: {
      asyncFuncTimeout: 772456,
      description:
        "self-confidence certify seagull bah once steeple miskey fit fowl dispose",
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      functions: [
        {
          id: "<id>",
          description:
            "whoever meanwhile achieve whoa barring properly excited",
          disabled: true,
          final: true,
          conf: {},
          groupId: "<id>",
        },
      ],
      groups: {
        "key": {
          name: "<value>",
          description:
            "usefully what airline usefully ack regularly uh-huh naturally kettledrum",
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