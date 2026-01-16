# GetSavedJobRequest

## Example Usage

```typescript
import { GetSavedJobRequest } from "cribl-control-plane/models/operations";

let value: GetSavedJobRequest = {
  collectorType: "<value>",
  criblPack: "<value>",
  groupId: "<id>",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `collectorType`          | *string*                 | :heavy_minus_sign:       | Filter by collector type |
| `criblPack`              | *string*                 | :heavy_minus_sign:       | Pack ID                  |
| `groupId`                | *string*                 | :heavy_minus_sign:       | Worker group ID          |