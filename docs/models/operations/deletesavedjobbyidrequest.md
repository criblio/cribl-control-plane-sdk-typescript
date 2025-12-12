# DeleteSavedJobByIdRequest

## Example Usage

```typescript
import { DeleteSavedJobByIdRequest } from "cribl-control-plane/models/operations";

let value: DeleteSavedJobByIdRequest = {
  id: "<id>",
  criblPack: "<value>",
  groupId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *string*           | :heavy_check_mark: | Collector ID       |
| `criblPack`        | *string*           | :heavy_minus_sign: | Pack ID            |
| `groupId`          | *string*           | :heavy_minus_sign: | Worker group ID    |