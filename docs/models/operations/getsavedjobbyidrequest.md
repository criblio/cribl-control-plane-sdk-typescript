# GetSavedJobByIdRequest

## Example Usage

```typescript
import { GetSavedJobByIdRequest } from "cribl-control-plane/models/operations";

let value: GetSavedJobByIdRequest = {
  id: "<id>",
  criblPack: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *string*           | :heavy_check_mark: | Collector ID       |
| `criblPack`        | *string*           | :heavy_minus_sign: | Pack ID            |