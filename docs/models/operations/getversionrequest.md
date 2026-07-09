# GetVersionRequest

## Example Usage

```typescript
import { GetVersionRequest } from "cribl-control-plane/models/operations";

let value: GetVersionRequest = {};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `count`                                                                                                                                            | *number*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | Maximum number of commits to read from the commit history. When provided, <code>offset</code> and <code>limit</code> are applied to that read set. |
| `offset`                                                                                                                                           | *number*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | Pagination offset                                                                                                                                  |
| `limit`                                                                                                                                            | *number*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | Maximum number of items to return                                                                                                                  |