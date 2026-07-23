# GetOutputStatusResponse

## Example Usage

```typescript
import { GetOutputStatusResponse } from "cribl-control-plane/models/operations";

let value: GetOutputStatusResponse = {
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
    count: 562266,
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `result`                                                              | [models.PaginatedOutputStatus](../../models/paginatedoutputstatus.md) | :heavy_check_mark:                                                    | N/A                                                                   |