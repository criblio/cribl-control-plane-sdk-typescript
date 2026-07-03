# GetFunctionsRequest

## Example Usage

```typescript
import { GetFunctionsRequest } from "cribl-control-plane/models/operations";

let value: GetFunctionsRequest = {};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `showHidden`                                                                                              | *boolean*                                                                                                 | :heavy_minus_sign:                                                                                        | If <code>true</code>, include hidden Functions in the response. Otherwise, hidden Functions are excluded. |
| `offset`                                                                                                  | *number*                                                                                                  | :heavy_minus_sign:                                                                                        | Pagination offset                                                                                         |
| `limit`                                                                                                   | *number*                                                                                                  | :heavy_minus_sign:                                                                                        | Maximum number of items to return                                                                         |