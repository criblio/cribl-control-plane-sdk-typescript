# RoutesInput

## Example Usage

```typescript
import { RoutesInput } from "cribl-control-plane/models";

let value: RoutesInput = {
  id: "<id>",
  routes: [
    {
      name: "<value>",
      pipeline: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `comments`                                                                                                       | [models.RouteComment](../models/routecomment.md)[]                                                               | :heavy_minus_sign:                                                                                               | Array of user-provided comments that describe or annotate Routes.                                                |
| `groups`                                                                                                         | Record<string, [models.AdditionalPropertiesTypeRoutesGroups](../models/additionalpropertiestyperoutesgroups.md)> | :heavy_minus_sign:                                                                                               | Information about the Route Groups that the Route is associated with.                                            |
| `id`                                                                                                             | *string*                                                                                                         | :heavy_check_mark:                                                                                               | Unique identifier for the Routing table. The supported value is <code>default</code>.                            |
| `routes`                                                                                                         | [models.RouteConfInput](../models/routeconfinput.md)[]                                                           | :heavy_check_mark:                                                                                               | Array of Route configurations that define how events are processed and routed.                                   |