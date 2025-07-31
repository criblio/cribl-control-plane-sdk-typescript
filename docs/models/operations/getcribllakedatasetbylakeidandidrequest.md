# GetCriblLakeDatasetByLakeIdAndIdRequest

## Example Usage

```typescript
import { GetCriblLakeDatasetByLakeIdAndIdRequest } from "cribl-control-plane/models/operations";

let value: GetCriblLakeDatasetByLakeIdAndIdRequest = {
  lakeId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `lakeId`                           | *string*                           | :heavy_check_mark:                 | lake id that contains the Datasets |
| `id`                               | *string*                           | :heavy_check_mark:                 | dataset id to get                  |