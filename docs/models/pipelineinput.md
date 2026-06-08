# PipelineInput

## Example Usage

```typescript
import { PipelineInput } from "cribl-control-plane/models";

let value: PipelineInput = {
  id: "<id>",
  conf: {},
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `id`                                                              | *string*                                                          | :heavy_check_mark:                                                | Unique identifier for the Pipeline.                               |
| `conf`                                                            | [models.ConfInput](../models/confinput.md)                        | :heavy_check_mark:                                                | Configuration for the Pipeline, including functions and settings. |