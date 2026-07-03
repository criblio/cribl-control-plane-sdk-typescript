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

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | The <code>id</code> of the Splunk HEC Source.                                                      |
| `token`                                                                                            | *string*                                                                                           | :heavy_check_mark:                                                                                 | The HEC token value whose metadata you want to update. Must match an existing token on the Source. |
| `updateHecTokenRequest`                                                                            | [models.UpdateHecTokenRequest](../../models/updatehectokenrequest.md)                              | :heavy_check_mark:                                                                                 | UpdateHecTokenRequest object.                                                                      |