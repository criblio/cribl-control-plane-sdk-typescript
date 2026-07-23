# GetCriblLakeDatasetByLakeIdResponse

## Example Usage

```typescript
import { GetCriblLakeDatasetByLakeIdResponse } from "cribl-control-plane/models/operations";

let value: GetCriblLakeDatasetByLakeIdResponse = {
  result: {
    items: [
      {
        id: "<id>",
        searchConfig: {
          metadata: {
            earliest: "-30d",
            enableAcceleration: false,
            fieldList: [
              "<value 1>",
            ],
            scanMode: "quick",
          },
        },
      },
    ],
    count: 622169,
  },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `result`                                                                      | [models.PaginatedCriblLakeDataset](../../models/paginatedcribllakedataset.md) | :heavy_check_mark:                                                            | N/A                                                                           |