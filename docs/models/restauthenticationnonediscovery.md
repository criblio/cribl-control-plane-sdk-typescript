# RestAuthenticationNoneDiscovery

## Example Usage

```typescript
import { RestAuthenticationNoneDiscovery } from "cribl-control-plane/models";

let value: RestAuthenticationNoneDiscovery = {
  discoverType: "http",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `discoverType`                                                                                                             | [models.RestAuthenticationNoneDiscoverType](../models/restauthenticationnonediscovertype.md)                               | :heavy_check_mark:                                                                                                         | Defines how task discovery will be performed. Each entry returned by the Discover operation will result in a Collect task. |