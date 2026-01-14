# RestAuthenticationHmacDiscovery

## Example Usage

```typescript
import { RestAuthenticationHmacDiscovery } from "cribl-control-plane/models";

let value: RestAuthenticationHmacDiscovery = {
  discoverType: "http",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `discoverType`                                                                                                             | [models.RestAuthenticationHmacDiscoverType](../models/restauthenticationhmacdiscovertype.md)                               | :heavy_check_mark:                                                                                                         | Defines how task discovery will be performed. Each entry returned by the Discover operation will result in a Collect task. |