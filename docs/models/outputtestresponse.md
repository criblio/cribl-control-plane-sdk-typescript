# OutputTestResponse

## Example Usage

```typescript
import { OutputTestResponse } from "cribl-control-plane/models";

let value: OutputTestResponse = {
  outputId: "<id>",
  success: false,
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `details`             | Record<string, *any*> | :heavy_minus_sign:    | N/A                   |
| `error`               | *string*              | :heavy_minus_sign:    | N/A                   |
| `outputId`            | *string*              | :heavy_check_mark:    | N/A                   |
| `success`             | *boolean*             | :heavy_check_mark:    | N/A                   |
| `successDetail`       | *string*              | :heavy_minus_sign:    | N/A                   |