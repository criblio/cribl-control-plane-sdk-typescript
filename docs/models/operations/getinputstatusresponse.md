# GetInputStatusResponse

## Example Usage

```typescript
import { GetInputStatusResponse } from "cribl-control-plane/models/operations";

let value: GetInputStatusResponse = {
  result: {
    items: [
      {
        id: "<id>",
        status: {
          health: "Unknown",
          healthCounts: {
            Green: 940749,
            Red: 403493,
            Unknown: 190686,
            Yellow: 878004,
          },
          timestamp: 826410,
        },
      },
    ],
    count: 814549,
  },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `result`                                                            | [models.PaginatedInputStatus](../../models/paginatedinputstatus.md) | :heavy_check_mark:                                                  | N/A                                                                 |