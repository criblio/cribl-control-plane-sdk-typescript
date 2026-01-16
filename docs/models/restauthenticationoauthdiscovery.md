# RestAuthenticationOauthDiscovery

## Example Usage

```typescript
import { RestAuthenticationOauthDiscovery } from "cribl-control-plane/models";

let value: RestAuthenticationOauthDiscovery = {
  discoverType: "json",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `discoverType`                                                                                                             | [models.RestAuthenticationOauthDiscoverType](../models/restauthenticationoauthdiscovertype.md)                             | :heavy_check_mark:                                                                                                         | Defines how task discovery will be performed. Each entry returned by the Discover operation will result in a Collect task. |