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
          healthCounts: {},
          timestamp: 940749,
        },
      },
    ],
    count: 403493,
  },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `result`                                                            | [models.PaginatedInputStatus](../../models/paginatedinputstatus.md) | :heavy_check_mark:                                                  | N/A                                                                 |