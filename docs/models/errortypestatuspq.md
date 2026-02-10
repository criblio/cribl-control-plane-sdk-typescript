# ErrorTypeStatusPq

Error information for the persistent queue, if applicable.

## Example Usage

```typescript
import { ErrorTypeStatusPq } from "cribl-control-plane/models";

let value: ErrorTypeStatusPq = {
  message: "<value>",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `details`                                                         | Record<string, *any*>                                             | :heavy_minus_sign:                                                | Additional details for the persistent queue error.                |
| `message`                                                         | *string*                                                          | :heavy_check_mark:                                                | Human-readable message that describes the persistent queue error. |