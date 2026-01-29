# ItemsTypeAuthTokensExt

## Example Usage

```typescript
import { ItemsTypeAuthTokensExt } from "cribl-control-plane/models";

let value: ItemsTypeAuthTokensExt = {
  token: "<value>",
  description: "against zowie known astonishing yearly worriedly oh follower",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `token`                                                             | *string*                                                            | :heavy_check_mark:                                                  | Shared secret to be provided by any client (Authorization: <token>) |
| `description`                                                       | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `metadata`                                                          | [models.ItemsTypeMetadata](../models/itemstypemetadata.md)[]        | :heavy_minus_sign:                                                  | Fields to add to events referencing this token                      |