# UpdateInputSystemHecTokenByPackAndIdAndTokenRequest

## Example Usage

```typescript
import { UpdateInputSystemHecTokenByPackAndIdAndTokenRequest } from "cribl-control-plane/models/operations";

let value: UpdateInputSystemHecTokenByPackAndIdAndTokenRequest = {
  id: "<id>",
  token: "<value>",
  pack: "<value>",
  updateHecTokenRequest: {},
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `id`                                                                  | *string*                                                              | :heavy_check_mark:                                                    | The <code>id</code> of the Splunk HEC Source.                         |
| `token`                                                               | *string*                                                              | :heavy_check_mark:                                                    | The <code>id</code> of the HEC token to update.                       |
| `pack`                                                                | *string*                                                              | :heavy_check_mark:                                                    | The <code>id</code> of the Pack to update.                            |
| `updateHecTokenRequest`                                               | [models.UpdateHecTokenRequest](../../models/updatehectokenrequest.md) | :heavy_check_mark:                                                    | UpdateHecTokenRequest object                                          |