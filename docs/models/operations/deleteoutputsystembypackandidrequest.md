# DeleteOutputSystemByPackAndIdRequest

## Example Usage

```typescript
import { DeleteOutputSystemByPackAndIdRequest } from "cribl-control-plane/models/operations";

let value: DeleteOutputSystemByPackAndIdRequest = {
  id: "<id>",
  pack: "<value>",
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `id`                                              | *string*                                          | :heavy_check_mark:                                | The <code>id</code> of the Destination to delete. |
| `pack`                                            | *string*                                          | :heavy_check_mark:                                | The <code>id</code> of the Pack to delete.        |