# InputWindowsMetricsSystem

## Example Usage

```typescript
import { InputWindowsMetricsSystem } from "cribl-control-plane/models";

let value: InputWindowsMetricsSystem = {
  mode: "disabled",
  detail: false,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `mode`                                                                             | [models.InputWindowsMetricsSystemMode](../models/inputwindowsmetricssystemmode.md) | :heavy_minus_sign:                                                                 | Select the level of details for system metrics                                     |
| `detail`                                                                           | *boolean*                                                                          | :heavy_minus_sign:                                                                 | Generate metrics for all system information                                        |