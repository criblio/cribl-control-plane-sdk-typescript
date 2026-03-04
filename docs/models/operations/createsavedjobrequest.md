# CreateSavedJobRequest

## Example Usage

```typescript
import { CreateSavedJobRequest } from "cribl-control-plane/models/operations";

let value: CreateSavedJobRequest = {
  savedJobCreateUpdate: {
    id: "<id>",
    type: "<value>",
  },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `criblPack`                                                         | *string*                                                            | :heavy_minus_sign:                                                  | The <code>id</code> of the Pack to create the Collector in.         |
| `savedJobCreateUpdate`                                              | [models.SavedJobCreateUpdate](../../models/savedjobcreateupdate.md) | :heavy_check_mark:                                                  | SavedJobCreateUpdate object                                         |