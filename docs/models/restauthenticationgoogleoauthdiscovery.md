# RestAuthenticationGoogleOauthDiscovery

## Example Usage

```typescript
import { RestAuthenticationGoogleOauthDiscovery } from "cribl-control-plane/models";

let value: RestAuthenticationGoogleOauthDiscovery = {
  discoverType: "list",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `discoverType`                                                                                                             | [models.RestAuthenticationGoogleOauthDiscoverType](../models/restauthenticationgoogleoauthdiscovertype.md)                 | :heavy_check_mark:                                                                                                         | Defines how task discovery will be performed. Each entry returned by the Discover operation will result in a Collect task. |