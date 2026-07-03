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
    count: 562266,
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `result`                                                              | [models.PaginatedOutputStatus](../../models/paginatedoutputstatus.md) | :heavy_check_mark:                                                    | N/A                                                                   |