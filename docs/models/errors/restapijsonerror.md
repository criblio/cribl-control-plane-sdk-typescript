# RestApiJsonError

JSON body returned for many REST failures that use RESTEndpoint.sendError (and similar handlers).

## Example Usage

```typescript
import { RestApiJsonError } from "cribl-control-plane/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `message`                                                              | *string*                                                               | :heavy_check_mark:                                                     | Human-readable message or serialized validation details for the error. |
| `status`                                                               | *"error"*                                                              | :heavy_check_mark:                                                     | Always <code>error</code> for API error responses.                     |