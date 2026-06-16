# RestApiJsonError

JSON body returned for many REST failures that use RESTEndpoint.sendError (and similar handlers).

## Example Usage

```typescript
import { RestApiJsonError } from "cribl-control-plane/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `details`                                                               | Record<string, *any*>                                                   | :heavy_minus_sign:                                                      | Optional structured details about the error (e.g. validation failures). |
| `message`                                                               | *string*                                                                | :heavy_check_mark:                                                      | Human-readable message or serialized validation details for the error.  |
| `status`                                                                | *"error"*                                                               | :heavy_check_mark:                                                      | Always <code>error</code> for API error responses.                      |