# UpdateSavedJobByIdRequest

## Example Usage

```typescript
import { UpdateSavedJobByIdRequest } from "cribl-control-plane/models/operations";

let value: UpdateSavedJobByIdRequest = {
  id: "<id>",
  savedJob: {
    type: "collection",
    savedQueryId: "<id>",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | The <code>id</code> of the Collector to update.                        |
| `criblPack`                                                            | *string*                                                               | :heavy_minus_sign:                                                     | The <code>id</code> of the Pack that includes the Collector to update. |
| `savedJob`                                                             | *models.SavedJob*                                                      | :heavy_check_mark:                                                     | SavedJob object                                                        |