# ChartSeries

## Example Usage

```typescript
import { ChartSeries } from "cribl-control-plane/models";

let value: ChartSeries = {
  areaStyle: {
    opacity: 3027.91,
    shadowBlur: 5545.23,
    shadowColor: "<value>",
    shadowOffsetX: 6491.46,
    shadowOffsetY: 9161.61,
  },
  color: "purple",
  data: [
    {},
  ],
  map: "<value>",
  name: "<value>",
  type: "events",
  yAxisField: "<value>",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `areaStyle`                                            | [models.AreaStyleOption](../models/areastyleoption.md) | :heavy_minus_sign:                                     | N/A                                                    |
| `color`                                                | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `data`                                                 | [models.ChartData](../models/chartdata.md)[]           | :heavy_minus_sign:                                     | N/A                                                    |
| `map`                                                  | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `name`                                                 | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `type`                                                 | [models.ChartType](../models/charttype.md)             | :heavy_minus_sign:                                     | N/A                                                    |
| `yAxisField`                                           | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |