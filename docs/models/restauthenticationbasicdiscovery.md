# RestAuthenticationBasicDiscovery

## Example Usage

```typescript
import { RestAuthenticationBasicDiscovery } from "cribl-control-plane/models";

let value: RestAuthenticationBasicDiscovery = {
  discoverType: "none",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `discoverType`                                                                                                             | [models.RestAuthenticationBasicDiscoverType](../models/restauthenticationbasicdiscovertype.md)                             | :heavy_check_mark:                                                                                                         | Defines how task discovery will be performed. Each entry returned by the Discover operation will result in a Collect task. |