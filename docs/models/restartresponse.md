# RestartResponse

Result of a restart request for a Worker or Edge Node.

## Example Usage

```typescript
import { RestartResponse } from "cribl-control-plane/models";

let value: RestartResponse = {
  id: "<id>",
  status: "Error",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `id`                                                                                         | *string*                                                                                     | :heavy_check_mark:                                                                           | Unique identifier for the Worker or Edge Node (GUID).                                        |
| `message`                                                                                    | *string*                                                                                     | :heavy_minus_sign:                                                                           | Error message if the restart request failed for this Node.                                   |
| `status`                                                                                     | [models.RestartResponseStatus](../models/restartresponsestatus.md)                           | :heavy_check_mark:                                                                           | Result of the restart request for this Node (<code>Restarting</code> or <code>Error</code>). |