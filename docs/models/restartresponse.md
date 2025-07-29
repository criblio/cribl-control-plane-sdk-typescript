# RestartResponse

## Example Usage

```typescript
import { RestartResponse } from "cribl-control-plane/models";

let value: RestartResponse = {
  id: "<id>",
  status: "Error",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `message`                                                          | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `status`                                                           | [models.RestartResponseStatus](../models/restartresponsestatus.md) | :heavy_check_mark:                                                 | N/A                                                                |