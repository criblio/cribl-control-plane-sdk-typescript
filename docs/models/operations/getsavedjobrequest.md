# GetSavedJobRequest

## Example Usage

```typescript
import { GetSavedJobRequest } from "cribl-control-plane/models/operations";

let value: GetSavedJobRequest = {};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `collectorType`                                       | [models.CollectorType](../../models/collectortype.md) | :heavy_minus_sign:                                    | Filter by collector type.                             |
| `offset`                                              | *number*                                              | :heavy_minus_sign:                                    | Pagination offset                                     |
| `limit`                                               | *number*                                              | :heavy_minus_sign:                                    | Maximum number of items to return                     |