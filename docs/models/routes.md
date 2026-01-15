# Routes

## Example Usage

```typescript
import { Routes } from "cribl-control-plane/models";

let value: Routes = {
  id: "<id>",
  routes: [],
  groups: {
    "key": {
      name: "<value>",
      description:
        "march meanwhile potentially although trouser wearily furthermore weary whereas",
      disabled: true,
    },
  },
  comments: [
    {
      comment:
        "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    },
  ],
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                         | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | Routes ID                                                                                                                    |
| `routes`                                                                                                                     | [models.RoutesRoute](../models/routesroute.md)[]                                                                             | :heavy_check_mark:                                                                                                           | Pipeline routing rules                                                                                                       |
| `groups`                                                                                                                     | Record<string, [models.AdditionalPropertiesTypePipelineConfGroups](../models/additionalpropertiestypepipelineconfgroups.md)> | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `comments`                                                                                                                   | [models.Comment](../models/comment.md)[]                                                                                     | :heavy_minus_sign:                                                                                                           | Comments                                                                                                                     |