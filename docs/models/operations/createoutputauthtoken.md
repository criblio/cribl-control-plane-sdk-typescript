# CreateOutputAuthToken

## Example Usage

```typescript
import { CreateOutputAuthToken } from "cribl-control-plane/models/operations";

let value: CreateOutputAuthToken = {
  authType: "manual",
  authToken: "<value>",
  textSecret: "<value>",
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `authType`                                                                                                          | [models.AuthenticationMethodOptionsAuthTokensItems](../../models/authenticationmethodoptionsauthtokensitems.md)     | :heavy_minus_sign:                                                                                                  | Select Manual to enter an auth token directly, or select Secret to use a text secret to authenticate                |
| `authToken`                                                                                                         | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | Shared secret to be provided by any client (in authToken header field). If empty, unauthorized access is permitted. |
| `textSecret`                                                                                                        | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | Select or create a stored text secret                                                                               |