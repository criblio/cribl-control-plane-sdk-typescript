# GetPipelinesByPackResponse

## Example Usage

```typescript
import { GetPipelinesByPackResponse } from "cribl-control-plane/models/operations";

let value: GetPipelinesByPackResponse = {
  result: {
    items: [
      {
        id: "<id>",
        conf: {
          functions: [
            {
              id: "eventstats",
              conf: {
                aggregations: [
                  "<value 1>",
                  "<value 2>",
                ],
              },
            },
          ],
        },
      },
    ],
    count: 187962,
    offset: 299183,
    limit: 9377,
  },
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `result`                                    | *operations.GetPipelinesByPackResponseBody* | :heavy_check_mark:                          | N/A                                         |