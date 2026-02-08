# UpdatePipelinesByPackAndIdRequest

## Example Usage

```typescript
import { UpdatePipelinesByPackAndIdRequest } from "cribl-control-plane/models/operations";

let value: UpdatePipelinesByPackAndIdRequest = {
  id: "<id>",
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
| `id`                                                  | *string*                                              | :heavy_check_mark:                                    | The <code>id</code> of the Pipeline to update.        |
| `pack`                                                | *string*                                              | :heavy_check_mark:                                    | The <code>id</code> of the Pack to update.            |
| `pipeline`                                            | [models.PipelineInput](../../models/pipelineinput.md) | :heavy_check_mark:                                    | Pipeline object                                       |