# GetPipelinesByPackAndIdRequest

## Example Usage

```typescript
import { GetPipelinesByPackAndIdRequest } from "cribl-control-plane/models/operations";

let value: GetPipelinesByPackAndIdRequest = {
  id: "<id>",
  pack: "<value>",
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `id`                                        | *string*                                    | :heavy_check_mark:                          | The <code>id</code> of the Pipeline to get. |
| `pack`                                      | *string*                                    | :heavy_check_mark:                          | The <code>id</code> of the Pack to get.     |