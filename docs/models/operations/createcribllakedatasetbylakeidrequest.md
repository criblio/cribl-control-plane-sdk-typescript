# CreateCriblLakeDatasetByLakeIdRequest

## Example Usage

```typescript
import { CreateCriblLakeDatasetByLakeIdRequest } from "cribl-control-plane/models/operations";

let value: CreateCriblLakeDatasetByLakeIdRequest = {
  lakeId: "<id>",
  criblLakeDataset: {
    id: "<id>",
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `lakeId`                                                    | *string*                                                    | :heavy_check_mark:                                          | lake id that contains the Datasets                          |
| `criblLakeDataset`                                          | [models.CriblLakeDataset](../../models/cribllakedataset.md) | :heavy_check_mark:                                          | CriblLakeDataset object                                     |