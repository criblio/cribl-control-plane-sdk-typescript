# CreateSavedJobRequest

## Example Usage

```typescript
import { CreateSavedJobRequest } from "cribl-control-plane/models/operations";

let value: CreateSavedJobRequest = {
  savedJob: {
    type: "collection",
    executor: {
      type: "<value>",
    },
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `criblPack`                                                 | *string*                                                    | :heavy_minus_sign:                                          | The <code>id</code> of the Pack to create the Collector in. |
| `savedJob`                                                  | *models.SavedJob*                                           | :heavy_check_mark:                                          | SavedJob object                                             |