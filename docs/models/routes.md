# Routes

## Example Usage

```typescript
import { Routes } from "cribl-control-plane/models";

let value: Routes = {
  routes: [],
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `id`                                                 | *string*                                             | :heavy_minus_sign:                                   | Routes ID                                            |
| `routes`                                             | [models.RoutesRoute](../models/routesroute.md)[]     | :heavy_check_mark:                                   | Pipeline routing rules                               |
| `groups`                                             | Record<string, [models.Groups](../models/groups.md)> | :heavy_minus_sign:                                   | N/A                                                  |
| `comments`                                           | [models.Comment](../models/comment.md)[]             | :heavy_minus_sign:                                   | Comments                                             |