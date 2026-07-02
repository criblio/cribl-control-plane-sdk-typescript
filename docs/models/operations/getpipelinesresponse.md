# GetPipelinesResponse

## Example Usage

```typescript
import { GetPipelinesResponse } from "cribl-control-plane/models/operations";

let value: GetPipelinesResponse = {
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
  },
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `result`                              | *operations.GetPipelinesResponseBody* | :heavy_check_mark:                    | N/A                                   |