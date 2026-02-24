# Routes

## Example Usage

```typescript
import { Routes } from "cribl-control-plane/models";

let value: Routes = {
  id: "<id>",
  routes: [],
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `comments`                                                                            | [models.RouteComment](../models/routecomment.md)[]                                    | :heavy_minus_sign:                                                                    | Array of user-provided comments that describe or annotate Routes.                     |
| `groups`                                                                              | Record<string, [models.RoutesGroups](../models/routesgroups.md)>                      | :heavy_minus_sign:                                                                    | Information about the Route Groups that the Route is associated with.                 |
| `id`                                                                                  | *string*                                                                              | :heavy_check_mark:                                                                    | Unique identifier for the Routing table. The supported value is <code>default</code>. |
| `routes`                                                                              | [models.RouteConf](../models/routeconf.md)[]                                          | :heavy_check_mark:                                                                    | Array of Route configurations that define how events are processed and routed.        |