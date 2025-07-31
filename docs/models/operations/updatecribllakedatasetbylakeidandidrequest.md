# UpdateCriblLakeDatasetByLakeIdAndIdRequest

## Example Usage

```typescript
import { UpdateCriblLakeDatasetByLakeIdAndIdRequest } from "cribl-control-plane/models/operations";

let value: UpdateCriblLakeDatasetByLakeIdAndIdRequest = {
  lakeId: "<id>",
  id: "<id>",
  criblLakeDataset: {
    id: "<id>",
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `lakeId`                                                    | *string*                                                    | :heavy_check_mark:                                          | lake id that contains the Datasets                          |
| `id`                                                        | *string*                                                    | :heavy_check_mark:                                          | dataset id to update                                        |
| `criblLakeDataset`                                          | [models.CriblLakeDataset](../../models/cribllakedataset.md) | :heavy_check_mark:                                          | CriblLakeDataset object                                     |