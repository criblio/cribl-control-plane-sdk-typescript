# CreateOutputSystemByPackRequest

## Example Usage

```typescript
import { CreateOutputSystemByPackRequest } from "cribl-control-plane/models/operations";

let value: CreateOutputSystemByPackRequest = {
  pack: "<value>",
  requestBody: {
    id: "<id>",
    type: "service_now",
    endpoint: "<value>",
    tokenSecret: "<value>",
    otlpVersion: "1.3.1",
    protocol: "http",
  },
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `pack`                                           | *string*                                         | :heavy_check_mark:                               | The <code>id</code> of the Pack.                 |
| `requestBody`                                    | *operations.CreateOutputSystemByPackRequestBody* | :heavy_check_mark:                               | Output object.                                   |