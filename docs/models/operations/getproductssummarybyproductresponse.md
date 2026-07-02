# GetProductsSummaryByProductResponse

## Example Usage

```typescript
import { GetProductsSummaryByProductResponse } from "cribl-control-plane/models/operations";

let value: GetProductsSummaryByProductResponse = {
  result: {
    items: [
      {
        groups: {
          count: 388538,
          destinations: 754661,
          packs: 332881,
          pipelines: 427163,
          quickConnects: 948628,
          routes: 563689,
          sources: 260108,
        },
      },
    ],
    count: 753297,
    offset: 637441,
    limit: 625407,
  },
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `result`                                             | *operations.GetProductsSummaryByProductResponseBody* | :heavy_check_mark:                                   | N/A                                                  |