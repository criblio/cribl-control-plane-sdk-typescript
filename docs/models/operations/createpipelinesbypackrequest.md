# CreatePipelinesByPackRequest

## Example Usage

```typescript
import { CreatePipelinesByPackRequest } from "cribl-control-plane/models/operations";

let value: CreatePipelinesByPackRequest = {
  pack: "<value>",
  pipeline: {
    id: "<id>",
    conf: {},
  },
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `pack`                                                | *string*                                              | :heavy_check_mark:                                    | The <code>id</code> of the Pack to create.            |
| `pipeline`                                            | [models.PipelineInput](../../models/pipelineinput.md) | :heavy_check_mark:                                    | Pipeline object                                       |