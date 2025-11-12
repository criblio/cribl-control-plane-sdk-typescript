# InputCloudflareHecAuthToken

## Example Usage

```typescript
import { InputCloudflareHecAuthToken } from "cribl-control-plane/models";

let value: InputCloudflareHecAuthToken = {
  tokenSecret: "<value>",
  token: "<value>",
  description: "mechanically foolish airline gee",
  allowedIndexesAtToken: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `authType`                                                                                                                               | [models.InputCloudflareHecAuthenticationMethod](../models/inputcloudflarehecauthenticationmethod.md)                                     | :heavy_minus_sign:                                                                                                                       | Select Secret to use a text secret to authenticate                                                                                       |
| `tokenSecret`                                                                                                                            | *any*                                                                                                                                    | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `token`                                                                                                                                  | *any*                                                                                                                                    | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `enabled`                                                                                                                                | *boolean*                                                                                                                                | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `description`                                                                                                                            | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `allowedIndexesAtToken`                                                                                                                  | *string*[]                                                                                                                               | :heavy_minus_sign:                                                                                                                       | Enter the values you want to allow in the HEC event index field at the token level. Supports wildcards. To skip validation, leave blank. |
| `metadata`                                                                                                                               | [models.InputCloudflareHecAuthTokenMetadatum](../models/inputcloudflarehecauthtokenmetadatum.md)[]                                       | :heavy_minus_sign:                                                                                                                       | Fields to add to events referencing this token                                                                                           |