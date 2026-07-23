# GetPipelinesByPackRequest

## Example Usage

```typescript
import { GetPipelinesByPackRequest } from "cribl-control-plane/models/operations";

let value: GetPipelinesByPackRequest = {
  pack: "<value>",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `offset`                          | *number*                          | :heavy_minus_sign:                | Pagination offset                 |
| `limit`                           | *number*                          | :heavy_minus_sign:                | Maximum number of items to return |
| `pack`                            | *string*                          | :heavy_check_mark:                | The <code>id</code> of the Pack.  |