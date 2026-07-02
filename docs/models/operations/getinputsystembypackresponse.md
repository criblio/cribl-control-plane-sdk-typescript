# GetInputSystemByPackResponse

## Example Usage

```typescript
import { GetInputSystemByPackResponse } from "cribl-control-plane/models/operations";

let value: GetInputSystemByPackResponse = {
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

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `result`                                      | *operations.GetInputSystemByPackResponseBody* | :heavy_check_mark:                            | N/A                                           |