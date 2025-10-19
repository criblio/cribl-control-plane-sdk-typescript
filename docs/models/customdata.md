# CustomData

## Example Usage

```typescript
import { CustomData } from "cribl-control-plane/models";

let value: CustomData = {
  connectNulls: "<value>",
  dataFields: [
    "<value 1>",
  ],
  isPointColor: false,
  limitToTopN: 8448.24,
  lines: false,
  nameField: "<value>",
  pointColorPalette: 4824.85,
  pointColorPaletteReversed: false,
  pointScale: "<value>",
  pointScaleDataField: "<value>",
  seriesCount: 5743.71,
  splitBy: "<value>",
  stack: false,
  summarizeOthers: true,
  trellis: false,
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `connectNulls`                | *string*                      | :heavy_minus_sign:            | N/A                           |
| `dataFields`                  | *string*[]                    | :heavy_minus_sign:            | N/A                           |
| `isPointColor`                | *boolean*                     | :heavy_minus_sign:            | N/A                           |
| `limitToTopN`                 | *number*                      | :heavy_minus_sign:            | N/A                           |
| `lines`                       | *boolean*                     | :heavy_minus_sign:            | N/A                           |
| `nameField`                   | *string*                      | :heavy_minus_sign:            | N/A                           |
| `pointColorPalette`           | *number*                      | :heavy_minus_sign:            | N/A                           |
| `pointColorPaletteReversed`   | *boolean*                     | :heavy_minus_sign:            | N/A                           |
| `pointScale`                  | *models.CustomDataPointScale* | :heavy_minus_sign:            | N/A                           |
| `pointScaleDataField`         | *string*                      | :heavy_minus_sign:            | N/A                           |
| `seriesCount`                 | *number*                      | :heavy_minus_sign:            | N/A                           |
| `splitBy`                     | *string*                      | :heavy_minus_sign:            | N/A                           |
| `stack`                       | *boolean*                     | :heavy_minus_sign:            | N/A                           |
| `summarizeOthers`             | *boolean*                     | :heavy_minus_sign:            | N/A                           |
| `trellis`                     | *boolean*                     | :heavy_minus_sign:            | N/A                           |