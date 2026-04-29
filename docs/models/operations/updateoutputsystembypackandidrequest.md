# UpdateOutputSystemByPackAndIdRequest

## Example Usage

```typescript
import { UpdateOutputSystemByPackAndIdRequest } from "cribl-control-plane/models/operations";

let value: UpdateOutputSystemByPackAndIdRequest = {
  id: "<id>",
  pack: "<value>",
  output: {
    type: "wavefront",
    domain: "dirty-hamburger.info",
  },
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `id`                                              | *string*                                          | :heavy_check_mark:                                | The <code>id</code> of the Destination to update. |
| `pack`                                            | *string*                                          | :heavy_check_mark:                                | The <code>id</code> of the Pack.                  |
| `output`                                          | *models.Output*                                   | :heavy_check_mark:                                | Output object                                     |