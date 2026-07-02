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
          health: "Yellow",
          healthCounts: {
            Green: 403493,
            Red: 190686,
            Unknown: 878004,
            Yellow: 826410,
          },
          timestamp: 814549,
        },
      },
    ],
    count: 107473,
    offset: 549134,
    limit: 488081,
  },
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `result`                                 | *operations.GetOutputStatusResponseBody* | :heavy_check_mark:                       | N/A                                      |