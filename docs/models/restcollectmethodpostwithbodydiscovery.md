# RestCollectMethodPostWithBodyDiscovery

## Example Usage

```typescript
import { RestCollectMethodPostWithBodyDiscovery } from "cribl-control-plane/models";

let value: RestCollectMethodPostWithBodyDiscovery = {
  discoverType: "list",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `discoverType`                                                                                                             | [models.RestCollectMethodPostWithBodyDiscoverType](../models/restcollectmethodpostwithbodydiscovertype.md)                 | :heavy_check_mark:                                                                                                         | Defines how task discovery will be performed. Each entry returned by the Discover operation will result in a Collect task. |