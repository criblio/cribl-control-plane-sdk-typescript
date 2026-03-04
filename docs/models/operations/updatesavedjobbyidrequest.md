# UpdateSavedJobByIdRequest

## Example Usage

```typescript
import { UpdateSavedJobByIdRequest } from "cribl-control-plane/models/operations";

let value: UpdateSavedJobByIdRequest = {
  id: "<id>",
  savedJobCreateUpdate: {
    id: "<id>",
    type: "<value>",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | The <code>id</code> of the Collector to update.                        |
| `criblPack`                                                            | *string*                                                               | :heavy_minus_sign:                                                     | The <code>id</code> of the Pack that includes the Collector to update. |
| `savedJobCreateUpdate`                                                 | [models.SavedJobCreateUpdate](../../models/savedjobcreateupdate.md)    | :heavy_check_mark:                                                     | SavedJobCreateUpdate object                                            |