# TableViewSettings

## Example Usage

```typescript
import { TableViewSettings } from "cribl-control-plane/models";

let value: TableViewSettings = {
  columnFilterSettings: {
    contains: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
  },
  columnFormatSettings: {
    palette: {
      "key": "<value>",
    },
    precision: {},
    prefix: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    suffix: {},
  },
  columnOrderSettings: {
    order: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
  },
  columnSortSettings: {
    sort: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
  },
  eventDetailsPanel: false,
  eventTableFields: [
    "<value 1>",
    "<value 2>",
  ],
  rowNumberColumnWidth: 6470.28,
  showColumnTotals: false,
  showColumnTotalsPinned: true,
  showRowNumbers: true,
  showRowTotals: true,
  showRowTotalsPinned: true,
  wrapCells: false,
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `columnFilterSettings`                                           | [models.ColumnFilterSettings](../models/columnfiltersettings.md) | :heavy_minus_sign:                                               | N/A                                                              |
| `columnFormatSettings`                                           | [models.ColumnFormatSettings](../models/columnformatsettings.md) | :heavy_minus_sign:                                               | N/A                                                              |
| `columnOrderSettings`                                            | [models.ColumnOrderSettings](../models/columnordersettings.md)   | :heavy_minus_sign:                                               | N/A                                                              |
| `columnSortSettings`                                             | [models.ColumnSortSettings](../models/columnsortsettings.md)     | :heavy_minus_sign:                                               | N/A                                                              |
| `eventDetailsPanel`                                              | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              |
| `eventTableFields`                                               | *string*[]                                                       | :heavy_minus_sign:                                               | N/A                                                              |
| `rowNumberColumnWidth`                                           | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `showColumnTotals`                                               | *boolean*                                                        | :heavy_check_mark:                                               | N/A                                                              |
| `showColumnTotalsPinned`                                         | *boolean*                                                        | :heavy_check_mark:                                               | N/A                                                              |
| `showRowNumbers`                                                 | *boolean*                                                        | :heavy_check_mark:                                               | N/A                                                              |
| `showRowTotals`                                                  | *boolean*                                                        | :heavy_check_mark:                                               | N/A                                                              |
| `showRowTotalsPinned`                                            | *boolean*                                                        | :heavy_check_mark:                                               | N/A                                                              |
| `wrapCells`                                                      | *boolean*                                                        | :heavy_check_mark:                                               | N/A                                                              |