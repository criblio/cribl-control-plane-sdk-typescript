# InputHttpAuthTokensExt

## Example Usage

```typescript
import { InputHttpAuthTokensExt } from "cribl-control-plane/models";

let value: InputHttpAuthTokensExt = {
  token: "<value>",
  description: "deflate zowie barracks fiercely insistent",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `token`                                                                                  | *string*                                                                                 | :heavy_check_mark:                                                                       | Shared secret to be provided by any client (Authorization: <token>)                      |
| `description`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `metadata`                                                                               | [models.InputHttpAuthTokensExtMetadatum](../models/inputhttpauthtokensextmetadatum.md)[] | :heavy_minus_sign:                                                                       | Fields to add to events referencing this token                                           |