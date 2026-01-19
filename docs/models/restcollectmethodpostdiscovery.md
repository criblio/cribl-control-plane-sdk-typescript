# RestCollectMethodPostDiscovery

## Example Usage

```typescript
import { RestCollectMethodPostDiscovery } from "cribl-control-plane/models";

let value: RestCollectMethodPostDiscovery = {
  discoverType: "list",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `discoverType`                                                                                                             | [models.RestCollectMethodPostDiscoverType](../models/restcollectmethodpostdiscovertype.md)                                 | :heavy_check_mark:                                                                                                         | Defines how task discovery will be performed. Each entry returned by the Discover operation will result in a Collect task. |