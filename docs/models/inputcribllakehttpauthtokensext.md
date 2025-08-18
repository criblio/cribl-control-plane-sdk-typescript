# InputCriblLakeHttpAuthTokensExt

## Example Usage

```typescript
import { InputCriblLakeHttpAuthTokensExt } from "cribl-control-plane/models";

let value: InputCriblLakeHttpAuthTokensExt = {
  token: "<value>",
  description: "intently oh once profitable apud canter",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `token`                                                                                                    | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Shared secret to be provided by any client (Authorization: <token>)                                        |
| `description`                                                                                              | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `metadata`                                                                                                 | [models.InputCriblLakeHttpAuthTokensExtMetadatum](../models/inputcribllakehttpauthtokensextmetadatum.md)[] | :heavy_minus_sign:                                                                                         | Fields to add to events referencing this token                                                             |