# CreateOutputSystemByPackRequest

## Example Usage

```typescript
import { CreateOutputSystemByPackRequest } from "cribl-control-plane/models/operations";

let value: CreateOutputSystemByPackRequest = {
  pack: "<value>",
  requestBody: {
    id: "<id>",
    type: "loki",
    url: "https://scary-reach.info",
  },
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `pack`                                           | *string*                                         | :heavy_check_mark:                               | The <code>id</code> of the Pack to create.       |
| `requestBody`                                    | *operations.CreateOutputSystemByPackRequestBody* | :heavy_check_mark:                               | Output object                                    |