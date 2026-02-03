# DeletePipelinesByPackAndIdRequest

## Example Usage

```typescript
import { DeletePipelinesByPackAndIdRequest } from "cribl-control-plane/models/operations";

let value: DeletePipelinesByPackAndIdRequest = {
  id: "<id>",
  pack: "<value>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `id`                                           | *string*                                       | :heavy_check_mark:                             | The <code>id</code> of the Pipeline to delete. |
| `pack`                                         | *string*                                       | :heavy_check_mark:                             | The <code>id</code> of the Pack to delete.     |