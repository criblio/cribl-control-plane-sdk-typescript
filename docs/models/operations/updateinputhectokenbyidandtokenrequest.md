# UpdateInputHecTokenByIdAndTokenRequest

## Example Usage

```typescript
import { UpdateInputHecTokenByIdAndTokenRequest } from "cribl-control-plane/models/operations";

let value: UpdateInputHecTokenByIdAndTokenRequest = {
  id: "<id>",
  token: "<value>",
  updateHecTokenRequest: {},
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `id`                                                                  | *string*                                                              | :heavy_check_mark:                                                    | HEC Source id                                                         |
| `token`                                                               | *string*                                                              | :heavy_check_mark:                                                    | token to update                                                       |
| `updateHecTokenRequest`                                               | [models.UpdateHecTokenRequest](../../models/updatehectokenrequest.md) | :heavy_check_mark:                                                    | UpdateHecTokenRequest object                                          |