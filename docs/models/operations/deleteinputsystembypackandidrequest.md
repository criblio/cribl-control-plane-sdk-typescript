# DeleteInputSystemByPackAndIdRequest

## Example Usage

```typescript
import { DeleteInputSystemByPackAndIdRequest } from "cribl-control-plane/models/operations";

let value: DeleteInputSystemByPackAndIdRequest = {
  id: "<id>",
  pack: "<value>",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `id`                                         | *string*                                     | :heavy_check_mark:                           | The <code>id</code> of the Source to delete. |
| `pack`                                       | *string*                                     | :heavy_check_mark:                           | The <code>id</code> of the Pack to delete.   |