# DashboardElement1

## Example Usage

```typescript
import { DashboardElement1 } from "cribl-control-plane/models";

let value: DashboardElement1 = {
  config: "<value>",
  description: "monthly seemingly own though energetic",
  empty: true,
  group: "<value>",
  hidePanel: true,
  horizontalChart: false,
  id: "<id>",
  index: 3364.2,
  search: {
    type: "empty",
  },
  title: "<value>",
  titleAction: {
    label: "<value>",
    openInNewTab: true,
    url: "https://snarling-trick.info/",
  },
  type: "list.table",
  variant: "visualization",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `config`                                       | *any*                                          | :heavy_minus_sign:                             | N/A                                            |
| `description`                                  | *string*                                       | :heavy_minus_sign:                             | N/A                                            |
| `empty`                                        | *boolean*                                      | :heavy_minus_sign:                             | N/A                                            |
| `group`                                        | *string*                                       | :heavy_minus_sign:                             | N/A                                            |
| `hidePanel`                                    | *boolean*                                      | :heavy_minus_sign:                             | N/A                                            |
| `horizontalChart`                              | *boolean*                                      | :heavy_minus_sign:                             | N/A                                            |
| `id`                                           | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `index`                                        | *number*                                       | :heavy_minus_sign:                             | N/A                                            |
| `search`                                       | *models.SearchQueryUnion*                      | :heavy_check_mark:                             | N/A                                            |
| `title`                                        | *string*                                       | :heavy_minus_sign:                             | N/A                                            |
| `titleAction`                                  | [models.TitleAction](../models/titleaction.md) | :heavy_minus_sign:                             | N/A                                            |
| `type`                                         | *models.VisualizationElementType*              | :heavy_check_mark:                             | N/A                                            |
| `variant`                                      | [models.Variant1](../models/variant1.md)       | :heavy_minus_sign:                             | N/A                                            |