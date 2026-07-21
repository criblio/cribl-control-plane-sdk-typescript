# CreateOutputSystemByPackRequest

## Example Usage

```typescript
import { CreateOutputSystemByPackRequest } from "cribl-control-plane/models/operations";

let value: CreateOutputSystemByPackRequest = {
  pack: "<value>",
  requestBody: {
    id: "<id>",
    type: "click_house",
    url: "https://unhappy-programme.net",
    database: "<value>",
    tableName: "<value>",
  },
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `pack`                                           | *string*                                         | :heavy_check_mark:                               | The <code>id</code> of the Pack.                 |
| `requestBody`                                    | *operations.CreateOutputSystemByPackRequestBody* | :heavy_check_mark:                               | Output object.                                   |