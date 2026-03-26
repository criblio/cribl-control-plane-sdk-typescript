# DeleteSavedJobByIdRequest

## Example Usage

```typescript
import { DeleteSavedJobByIdRequest } from "cribl-control-plane/models/operations";

let value: DeleteSavedJobByIdRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | The <code>id</code> of the Collector to delete.                                |
| `criblPack`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | The <code>id</code> of the Pack that includes the Collector to delete.         |
| `groupId`                                                                      | *string*                                                                       | :heavy_minus_sign:                                                             | The <code>id</code> of the Worker Group that includes the Collector to delete. |