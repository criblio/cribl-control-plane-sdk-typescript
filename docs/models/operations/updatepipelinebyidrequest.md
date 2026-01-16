# UpdatePipelineByIdRequest

## Example Usage

```typescript
import { UpdatePipelineByIdRequest } from "cribl-control-plane/models/operations";

let value: UpdatePipelineByIdRequest = {
  id: "<id>",
  pipeline: {
    id: "<id>",
    conf: {
      asyncFuncTimeout: 603520,
      output: "<value>",
      description: "republican subsidy marketplace uh-huh",
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      functions: [
        {
          filter: "<value>",
          id: "tee",
          description: "per decision truthfully abnormally woot zealous limply",
          disabled: false,
          final: false,
          conf: {
            command: "<value>",
            args: [
              "<value 1>",
            ],
            restartOnExit: true,
            env: {
              "key": "<value>",
              "key1": "<value>",
            },
          },
          groupId: "<id>",
        },
      ],
      groups: {
        "key": {
          name: "<value>",
          description:
            "march meanwhile potentially although trouser wearily furthermore weary whereas",
          disabled: true,
        },
      },
    },
  },
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `id`                                                  | *string*                                              | :heavy_check_mark:                                    | The <code>id</code> of the Pipeline to update.        |
| `pipeline`                                            | [models.PipelineInput](../../models/pipelineinput.md) | :heavy_check_mark:                                    | Pipeline object                                       |