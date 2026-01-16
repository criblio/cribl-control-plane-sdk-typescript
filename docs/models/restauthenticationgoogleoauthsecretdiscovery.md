# RestAuthenticationGoogleOauthSecretDiscovery

## Example Usage

```typescript
import { RestAuthenticationGoogleOauthSecretDiscovery } from "cribl-control-plane/models";

let value: RestAuthenticationGoogleOauthSecretDiscovery = {
  discoverType: "json",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `discoverType`                                                                                                             | [models.RestAuthenticationGoogleOauthSecretDiscoverType](../models/restauthenticationgoogleoauthsecretdiscovertype.md)     | :heavy_check_mark:                                                                                                         | Defines how task discovery will be performed. Each entry returned by the Discover operation will result in a Collect task. |