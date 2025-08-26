# GetVersionFilesRequest

## Example Usage

```typescript
import { GetVersionFilesRequest } from "cribl-control-plane/models/operations";

let value: GetVersionFilesRequest = {
  groupId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `groupId`                                                                               | *string*                                                                                | :heavy_minus_sign:                                                                      | The <code>id</code> of the Worker Group or Edge Fleet to get file names and status for. |
| `id`                                                                                    | *string*                                                                                | :heavy_minus_sign:                                                                      | The Git commit hash to use as the starting point for the request.                       |