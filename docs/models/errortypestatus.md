# ErrorTypeStatus

Error information, if applicable.

## Example Usage

```typescript
import { ErrorTypeStatus } from "cribl-control-plane/models";

let value: ErrorTypeStatus = {
  message: "<value>",
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `details`                                                                                                 | Record<string, *any*>                                                                                     | :heavy_minus_sign:                                                                                        | Additional error details, which may include stack traces, request information, and other diagnostic data. |
| `message`                                                                                                 | *string*                                                                                                  | :heavy_check_mark:                                                                                        | Human-readable message that describes the error.                                                          |