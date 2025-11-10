# AuthTokensExtType

## Example Usage

```typescript
import { AuthTokensExtType } from "cribl-control-plane/models";

let value: AuthTokensExtType = {
  token: "<value>",
  description: "ferociously an why angrily likely slowly thrifty",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `token`                                                                        | *string*                                                                       | :heavy_check_mark:                                                             | Shared secret to be provided by any client (Authorization: <token>)            |
| `description`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `metadata`                                                                     | [models.AuthTokensExtTypeMetadatum](../models/authtokensexttypemetadatum.md)[] | :heavy_minus_sign:                                                             | Fields to add to events referencing this token                                 |