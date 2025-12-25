# RestAuthenticationOauthSecretDiscovery

## Example Usage

```typescript
import { RestAuthenticationOauthSecretDiscovery } from "cribl-control-plane/models";

let value: RestAuthenticationOauthSecretDiscovery = {};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `discoverType`                                                                                                             | [models.RestAuthenticationOauthSecretDiscoverType](../models/restauthenticationoauthsecretdiscovertype.md)                 | :heavy_minus_sign:                                                                                                         | Defines how task discovery will be performed. Each entry returned by the Discover operation will result in a Collect task. |