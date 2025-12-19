# AuthTokensExtHTTP

## Example Usage

```typescript
import { AuthTokensExtHTTP } from "cribl-control-plane/models/operations";

let value: AuthTokensExtHTTP = {
  token: "<value>",
  description: "on times colorless deeply lay once cute verbally whoa",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `token`                                                                                          | *string*                                                                                         | :heavy_check_mark:                                                                               | Shared secret to be provided by any client (Authorization: <token>)                              |
| `description`                                                                                    | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `metadata`                                                                                       | [operations.AuthTokensExtMetadatumHTTP](../../models/operations/authtokensextmetadatumhttp.md)[] | :heavy_minus_sign:                                                                               | Fields to add to events referencing this token                                                   |