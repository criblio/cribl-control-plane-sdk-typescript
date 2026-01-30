# GetOutputSystemByPackAndIdRequest

## Example Usage

```typescript
import { GetOutputSystemByPackAndIdRequest } from "cribl-control-plane/models/operations";

let value: GetOutputSystemByPackAndIdRequest = {
  id: "<id>",
  pack: "<value>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `id`                                           | *string*                                       | :heavy_check_mark:                             | The <code>id</code> of the Destination to get. |
| `pack`                                         | *string*                                       | :heavy_check_mark:                             | The <code>id</code> of the Pack to get.        |