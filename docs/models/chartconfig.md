# ChartConfig

## Example Usage

```typescript
import { ChartConfig } from "cribl-control-plane/models";

let value: ChartConfig = {
  applyThreshold: true,
  axis: {
    xAxis: "<value>",
    yAxis: [
      "<value 1>",
    ],
    yAxisExcluded: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  color: "turquoise",
  colorPalette: 2045.2,
  colorPaletteReversed: true,
  colorThresholds: {
    thresholds: [],
  },
  customData: {
    connectNulls: "<value>",
    dataFields: [
      "<value 1>",
    ],
    isPointColor: false,
    limitToTopN: 8812.15,
    lines: true,
    nameField: "<value>",
    pointColorPalette: 1780.78,
    pointColorPaletteReversed: true,
    pointScale: "<value>",
    pointScaleDataField: "<value>",
    seriesCount: 6130.09,
    splitBy: "<value>",
    stack: false,
    summarizeOthers: false,
    trellis: true,
  },
  decimals: 8022.7,
  label: "<value>",
  legend: {
    position: "<value>",
    selected: {
      "key": true,
    },
    truncate: false,
  },
  mapDetails: {
    latitudeField: "<value>",
    longitudeField: "<value>",
    mapSourceID: "<id>",
    mapType: "<value>",
    nameField: "<value>",
    pointScale: 662.94,
    valueField: "<value>",
  },
  onClickAction: {
    search: "<value>",
    selectedDashboardId: "<id>",
    selectedInputId: "<id>",
    selectedLinkId: "<id>",
    selectedTimerangeInputId: "<id>",
    type: "<value>",
  },
  prefix: "<value>",
  separator: false,
  series: [
    {
      areaStyle: {
        opacity: 3027.91,
        shadowBlur: 5545.23,
        shadowColor: "<value>",
        shadowOffsetX: 6491.46,
        shadowOffsetY: 9161.61,
      },
      color: "fuchsia",
      data: [
        {},
      ],
      map: "<value>",
      name: "<value>",
      type: "single",
      yAxisField: "<value>",
    },
  ],
  seriesInfo: {
    "key": "column",
  },
  shouldApplyUserChartSettings: true,
  style: true,
  suffix: "<value>",
  type: "<value>",
  xAxis: {
    dataField: "<value>",
    inverse: false,
    labelInterval: "<value>",
    labelOrientation: 7102.58,
    name: "<value>",
    offset: 7671.67,
    position: "<value>",
    type: "<value>",
  },
  yAxis: {
    dataField: [
      "<value 1>",
      "<value 2>",
    ],
    interval: 7587.04,
    max: 8208.97,
    min: 1374.88,
    position: "<value>",
    scale: "<value>",
    splitLine: false,
    type: "<value>",
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `applyThreshold`                                           | *boolean*                                                  | :heavy_minus_sign:                                         | N/A                                                        |
| `axis`                                                     | [models.Axis](../models/axis.md)                           | :heavy_minus_sign:                                         | N/A                                                        |
| `color`                                                    | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `colorPalette`                                             | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `colorPaletteReversed`                                     | *boolean*                                                  | :heavy_minus_sign:                                         | N/A                                                        |
| `colorThresholds`                                          | [models.ColorThresholds](../models/colorthresholds.md)     | :heavy_minus_sign:                                         | N/A                                                        |
| `customData`                                               | [models.CustomData](../models/customdata.md)               | :heavy_minus_sign:                                         | N/A                                                        |
| `decimals`                                                 | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `label`                                                    | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `legend`                                                   | [models.Legend](../models/legend.md)                       | :heavy_minus_sign:                                         | N/A                                                        |
| `mapDetails`                                               | [models.MapDetails](../models/mapdetails.md)               | :heavy_minus_sign:                                         | N/A                                                        |
| `onClickAction`                                            | [models.OnClickAction](../models/onclickaction.md)         | :heavy_minus_sign:                                         | N/A                                                        |
| `prefix`                                                   | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `separator`                                                | *boolean*                                                  | :heavy_minus_sign:                                         | N/A                                                        |
| `series`                                                   | [models.ChartSeries](../models/chartseries.md)[]           | :heavy_minus_sign:                                         | N/A                                                        |
| `seriesInfo`                                               | Record<string, [models.ChartType](../models/charttype.md)> | :heavy_minus_sign:                                         | N/A                                                        |
| `shouldApplyUserChartSettings`                             | *boolean*                                                  | :heavy_minus_sign:                                         | N/A                                                        |
| `style`                                                    | *boolean*                                                  | :heavy_minus_sign:                                         | N/A                                                        |
| `suffix`                                                   | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `type`                                                     | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `xAxis`                                                    | [models.XAxis](../models/xaxis.md)                         | :heavy_minus_sign:                                         | N/A                                                        |
| `yAxis`                                                    | [models.YAxis](../models/yaxis.md)                         | :heavy_minus_sign:                                         | N/A                                                        |