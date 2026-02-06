# CreatePipelinesByPackRequest

## Example Usage

```typescript
import { CreatePipelinesByPackRequest } from "cribl-control-plane/models/operations";

let value: CreatePipelinesByPackRequest = {
  pack: "<value>",
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
              "<value 2>",
              "<value 3>",
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
          description: "far-flung like instead zowie pertain concrete shovel",
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
| `pack`                                                | *string*                                              | :heavy_check_mark:                                    | The <code>id</code> of the Pack to create.            |
| `pipeline`                                            | [models.PipelineInput](../../models/pipelineinput.md) | :heavy_check_mark:                                    | Pipeline object                                       |