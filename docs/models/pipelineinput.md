# PipelineInput

## Example Usage

```typescript
import { PipelineInput } from "cribl-control-plane/models";

let value: PipelineInput = {
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
          "efface aw bonfire promptly carefully really versus wisely annually alienated",
        disabled: true,
      },
    },
  },
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `id`                                       | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `conf`                                     | [models.ConfInput](../models/confinput.md) | :heavy_check_mark:                         | N/A                                        |