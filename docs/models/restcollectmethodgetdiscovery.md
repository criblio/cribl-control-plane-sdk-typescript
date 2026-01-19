# RestCollectMethodGetDiscovery

## Example Usage

```typescript
import { RestCollectMethodGetDiscovery } from "cribl-control-plane/models";

let value: RestCollectMethodGetDiscovery = {
  discoverType: "list",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `discoverType`                                                                                                             | [models.RestCollectMethodGetDiscoverType](../models/restcollectmethodgetdiscovertype.md)                                   | :heavy_check_mark:                                                                                                         | Defines how task discovery will be performed. Each entry returned by the Discover operation will result in a Collect task. |