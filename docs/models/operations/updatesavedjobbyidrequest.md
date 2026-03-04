# UpdateSavedJobByIdRequest

## Example Usage

```typescript
import { UpdateSavedJobByIdRequest } from "cribl-control-plane/models/operations";

let value: UpdateSavedJobByIdRequest = {
  id: "<id>",
  savedJobRequest: {
    id: "<id>",
    schedule: {
      enabled: true,
      run: {},
      tz: "UTC",
    },
    type: "<value>",
  },
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `id`                                                      | *string*                                                  | :heavy_check_mark:                                        | The <code>id</code> of the Collector to update.           |
| `savedJobRequest`                                         | [models.SavedJobRequest](../../models/savedjobrequest.md) | :heavy_check_mark:                                        | SavedJobRequest object                                    |