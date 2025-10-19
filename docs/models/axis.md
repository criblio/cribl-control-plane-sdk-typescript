# Axis

## Example Usage

```typescript
import { Axis } from "cribl-control-plane/models";

let value: Axis = {
  xAxis: "<value>",
  yAxis: [
    "<value 1>",
    "<value 2>",
  ],
  yAxisExcluded: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `xAxis`            | *string*           | :heavy_minus_sign: | N/A                |
| `yAxis`            | *string*[]         | :heavy_minus_sign: | N/A                |
| `yAxisExcluded`    | *string*[]         | :heavy_minus_sign: | N/A                |