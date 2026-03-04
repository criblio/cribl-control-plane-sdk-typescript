# UpdateSavedJobByIdRequest

## Example Usage

```typescript
import { UpdateSavedJobByIdRequest } from "cribl-control-plane/models/operations";

let value: UpdateSavedJobByIdRequest = {
  id: "<id>",
  savedJob: {
    type: "executor",
    executor: {
      type: "<value>",
    },
  },
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `id`                                            | *string*                                        | :heavy_check_mark:                              | The <code>id</code> of the Collector to update. |
| `savedJob`                                      | *models.SavedJob*                               | :heavy_check_mark:                              | SavedJob object                                 |