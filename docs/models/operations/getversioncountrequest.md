# GetVersionCountRequest

## Example Usage

```typescript
import { GetVersionCountRequest } from "cribl-control-plane/models/operations";

let value: GetVersionCountRequest = {
  groupId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `groupId`                                                                   | *string*                                                                    | :heavy_minus_sign:                                                          | The <code>id</code> of the Worker Group or Edge Fleet to get the count for. |
| `id`                                                                        | *string*                                                                    | :heavy_minus_sign:                                                          | The Git commit hash to use as the starting point for the count.             |