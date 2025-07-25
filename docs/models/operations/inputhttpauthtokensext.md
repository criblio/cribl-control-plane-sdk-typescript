# InputHttpAuthTokensExt

## Example Usage

```typescript
import { InputHttpAuthTokensExt } from "cribl-control-plane/models/operations";

let value: InputHttpAuthTokensExt = {
  token: "<value>",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `token`                                                                                                    | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Shared secret to be provided by any client (Authorization: <token>)                                        |
| `description`                                                                                              | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `metadata`                                                                                                 | [operations.InputHttpAuthTokensExtMetadatum](../../models/operations/inputhttpauthtokensextmetadatum.md)[] | :heavy_minus_sign:                                                                                         | Fields to add to events referencing this token                                                             |