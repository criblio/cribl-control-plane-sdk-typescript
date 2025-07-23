# UpdateInputByIdRequest

## Example Usage

```typescript
import { UpdateInputByIdRequest } from "cribl-control-plane/models/operations";

let value: UpdateInputByIdRequest = {
  id: "<id>",
  input: {
    type: "win_event_logs",
    disabled: false,
    sendToRoutes: true,
    pqEnabled: false,
    logNames: [
      "<value 1>",
    ],
    readMode: "oldest",
    eventFormat: "json",
    disableNativeModule: false,
    interval: 10,
    batchSize: 500,
    maxEventBytes: 51200,
  },
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `id`                        | *string*                    | :heavy_check_mark:          | Unique ID to PATCH          |
| `input`                     | *models.Input*              | :heavy_check_mark:          | Source object to be updated |