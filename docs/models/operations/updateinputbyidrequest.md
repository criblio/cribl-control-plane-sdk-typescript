# UpdateInputByIdRequest

## Example Usage

```typescript
import { UpdateInputByIdRequest } from "cribl-control-plane/models/operations";

let value: UpdateInputByIdRequest = {
  id: "<id>",
  input: {
    id: "<id>",
    type: "datagen",
    disabled: false,
    pipeline: "<value>",
    sendToRoutes: true,
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
    },
    samples: [],
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "to furthermore meh charm ack why fortunate complete",
  },
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `id`                        | *string*                    | :heavy_check_mark:          | Unique ID to PATCH          |
| `input`                     | *models.Input*              | :heavy_check_mark:          | Source object to be updated |