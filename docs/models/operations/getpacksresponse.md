# GetPacksResponse

## Example Usage

```typescript
import { GetPacksResponse } from "cribl-control-plane/models/operations";

let value: GetPacksResponse = {
  result: {
    items: [
      {
        id: "<id>",
        source: "<value>",
        tags: {
          domain: [
            "security",
            "observability",
          ],
          technology: [
            "aws",
            "splunk",
          ],
        },
        version: "1.0.0",
      },
    ],
    count: 554356,
    offset: 93799,
    limit: 139631,
  },
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `result`                          | *operations.GetPacksResponseBody* | :heavy_check_mark:                | N/A                               |