# AuthTokensExtHTTPRaw

## Example Usage

```typescript
import { AuthTokensExtHTTPRaw } from "cribl-control-plane/models/operations";

let value: AuthTokensExtHTTPRaw = {
  token: "<value>",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `token`                                                                                                | *string*                                                                                               | :heavy_check_mark:                                                                                     | Shared secret to be provided by any client (Authorization: <token>)                                    |
| `description`                                                                                          | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `metadata`                                                                                             | [operations.AuthTokensExtMetadatumHTTPRaw](../../models/operations/authtokensextmetadatumhttpraw.md)[] | :heavy_minus_sign:                                                                                     | Fields to add to events referencing this token                                                         |