# GetProductsGroupsByProductResponse

## Example Usage

```typescript
import { GetProductsGroupsByProductResponse } from "cribl-control-plane/models/operations";

let value: GetProductsGroupsByProductResponse = {
  result: {
    items: [
      {
        estimatedIngestRate: 4096,
        id: "<id>",
      },
    ],
    count: 748974,
  },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `result`                                                            | [models.PaginatedConfigGroup](../../models/paginatedconfiggroup.md) | :heavy_check_mark:                                                  | N/A                                                                 |