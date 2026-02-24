# CreateInputSystemByPackRequest

## Example Usage

```typescript
import { CreateInputSystemByPackRequest } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackRequest = {
  pack: "<value>",
  requestBody: {
    id: "<id>",
    type: "kinesis",
    streamName: "<value>",
    region: "<value>",
  },
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `pack`                                          | *string*                                        | :heavy_check_mark:                              | The <code>id</code> of the Pack to create.      |
| `requestBody`                                   | *operations.CreateInputSystemByPackRequestBody* | :heavy_check_mark:                              | Input object                                    |