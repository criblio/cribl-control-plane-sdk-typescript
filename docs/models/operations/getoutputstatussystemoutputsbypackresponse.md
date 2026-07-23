# GetOutputStatusSystemOutputsByPackResponse

## Example Usage

```typescript
import { GetOutputStatusSystemOutputsByPackResponse } from "cribl-control-plane/models/operations";

let value: GetOutputStatusSystemOutputsByPackResponse = {
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