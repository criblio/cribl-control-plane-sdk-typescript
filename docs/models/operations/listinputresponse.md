# ListInputResponse

## Example Usage

```typescript
import { ListInputResponse } from "cribl-control-plane/models/operations";

let value: ListInputResponse = {
  result: {
    items: [
      {
        type: "open_telemetry",
        host: "elastic-tool.org",
        port: 4771.98,
      },
    ],
    count: 910239,
    offset: 190418,
    limit: 473886,
  },
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `result`                           | *operations.ListInputResponseBody* | :heavy_check_mark:                 | N/A                                |