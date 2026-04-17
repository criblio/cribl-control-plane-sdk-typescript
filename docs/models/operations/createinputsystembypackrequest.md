# CreateInputSystemByPackRequest

## Example Usage

```typescript
import { CreateInputSystemByPackRequest } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackRequest = {
  pack: "<value>",
  requestBody: {
    id: "<id>",
    type: "cribl_http",
    host: "concrete-orchid.info",
    port: 6994.52,
  },
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `pack`                                          | *string*                                        | :heavy_check_mark:                              | The <code>id</code> of the Pack to create.      |
| `requestBody`                                   | *operations.CreateInputSystemByPackRequestBody* | :heavy_check_mark:                              | Input object                                    |