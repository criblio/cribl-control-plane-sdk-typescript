# UpdateOutputByIdRequest

## Example Usage

```typescript
import { UpdateOutputByIdRequest } from "cribl-control-plane/models/operations";

let value: UpdateOutputByIdRequest = {
  id: "<id>",
  output: {
    type: "elastic_cloud",
    url: "https://unused-duster.info/",
    index: "<value>",
  },
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `id`                                              | *string*                                          | :heavy_check_mark:                                | The <code>id</code> of the Destination to update. |
| `output`                                          | *models.Output*                                   | :heavy_check_mark:                                | Output object                                     |