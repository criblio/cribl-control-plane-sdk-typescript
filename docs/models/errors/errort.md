# ErrorT

## Example Usage

```typescript
import { ErrorT } from "cribl-control-plane/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `status`                                                                | *"error"*                                                               | :heavy_check_mark:                                                      | Always "error" for API error responses.                                 |
| `message`                                                               | *string*                                                                | :heavy_check_mark:                                                      | Human-readable message describing the error.                            |
| `details`                                                               | *any*                                                                   | :heavy_minus_sign:                                                      | Optional structured details about the error (e.g. validation failures). |