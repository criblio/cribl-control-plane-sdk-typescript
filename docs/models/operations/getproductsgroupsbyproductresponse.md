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
    count: 703911,
    offset: 782350,
    limit: 9379,
  },
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `result`                                            | *operations.GetProductsGroupsByProductResponseBody* | :heavy_check_mark:                                  | N/A                                                 |