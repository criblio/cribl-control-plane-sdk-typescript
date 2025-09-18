# DashboardElement2

## Example Usage

```typescript
import { DashboardElement2 } from "cribl-control-plane/models";

let value: DashboardElement2 = {
  description: "if greedy fooey",
  empty: true,
  group: "<value>",
  hidePanel: false,
  horizontalChart: true,
  id: "<id>",
  index: 8398.14,
  inputId: "<id>",
  search: {
    query: "<value>",
    queryId: "<id>",
    runMode: "newSearch",
    type: "saved",
  },
  title: "<value>",
  titleAction: {
    label: "<value>",
    openInNewTab: true,
    url: "https://snarling-trick.info/",
  },
  type: "input.dropdown",
  value: {
    "key": "<value>",
  },
  variant: "input",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `description`                                            | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `empty`                                                  | *boolean*                                                | :heavy_minus_sign:                                       | N/A                                                      |
| `group`                                                  | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `hidePanel`                                              | *boolean*                                                | :heavy_minus_sign:                                       | N/A                                                      |
| `horizontalChart`                                        | *boolean*                                                | :heavy_minus_sign:                                       | N/A                                                      |
| `id`                                                     | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `index`                                                  | *number*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `inputId`                                                | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `search`                                                 | *models.SearchQueryUnion*                                | :heavy_minus_sign:                                       | N/A                                                      |
| `title`                                                  | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `titleAction`                                            | [models.TitleAction](../models/titleaction.md)           | :heavy_minus_sign:                                       | N/A                                                      |
| `type`                                                   | [models.InputElementType](../models/inputelementtype.md) | :heavy_check_mark:                                       | N/A                                                      |
| `value`                                                  | Record<string, *any*>                                    | :heavy_minus_sign:                                       | N/A                                                      |
| `variant`                                                | [models.Variant2](../models/variant2.md)                 | :heavy_check_mark:                                       | N/A                                                      |