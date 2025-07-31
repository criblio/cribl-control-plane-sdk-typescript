# DeleteCriblLakeDatasetByLakeIdAndIdRequest

## Example Usage

```typescript
import { DeleteCriblLakeDatasetByLakeIdAndIdRequest } from "cribl-control-plane/models/operations";

let value: DeleteCriblLakeDatasetByLakeIdAndIdRequest = {
  lakeId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `lakeId`                           | *string*                           | :heavy_check_mark:                 | lake id that contains the Datasets |
| `id`                               | *string*                           | :heavy_check_mark:                 | dataset id to delete               |