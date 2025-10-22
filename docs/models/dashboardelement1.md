# DashboardElement1

## Example Usage

```typescript
import { DashboardElement1 } from "cribl-control-plane/models";

let value: DashboardElement1 = {
  config: {
    "key": "<value>",
  },
  description:
    "wherever oh sinful relieve hastily unkempt since yowza although although",
  empty: true,
  group: "<value>",
  hidePanel: true,
  horizontalChart: false,
  id: "<id>",
  index: 6056.13,
  layout: {
    h: 7723.39,
    w: 5289.56,
    x: 8808.52,
    y: 558.53,
  },
  search: {
    earliest: "<value>",
    expectedOutputType: "instant",
    latest: 533.45,
    parentSearchId: "<id>",
    query: "<value>",
    sampleRate: 7888.59,
    timezone: "Antarctica/Troll",
    type: "inline",
  },
  title: "<value>",
  titleAction: {
    label: "<value>",
    openInNewTab: true,
    url: "https://pertinent-flood.name",
  },
  type: "list.table",
  variant: "visualization",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `config`                                               | Record<string, *any*>                                  | :heavy_minus_sign:                                     | N/A                                                    |
| `description`                                          | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `empty`                                                | *boolean*                                              | :heavy_minus_sign:                                     | N/A                                                    |
| `group`                                                | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `hidePanel`                                            | *boolean*                                              | :heavy_minus_sign:                                     | N/A                                                    |
| `horizontalChart`                                      | *boolean*                                              | :heavy_minus_sign:                                     | N/A                                                    |
| `id`                                                   | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `index`                                                | *number*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `layout`                                               | [models.DashboardLayout](../models/dashboardlayout.md) | :heavy_check_mark:                                     | N/A                                                    |
| `search`                                               | *models.SearchQueryUnion*                              | :heavy_check_mark:                                     | N/A                                                    |
| `title`                                                | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `titleAction`                                          | [models.TitleAction](../models/titleaction.md)         | :heavy_minus_sign:                                     | N/A                                                    |
| `type`                                                 | *models.VisualizationElementType*                      | :heavy_check_mark:                                     | N/A                                                    |
| `variant`                                              | [models.Variant1](../models/variant1.md)               | :heavy_minus_sign:                                     | N/A                                                    |