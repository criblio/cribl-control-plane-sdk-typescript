# CreateInputSystemByPackSystemWindowsMetrics

## Example Usage

```typescript
import { CreateInputSystemByPackSystemWindowsMetrics } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackSystemWindowsMetrics = {
  mode: "basic",
  detail: false,
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `mode`                                                                                                                                   | [operations.CreateInputSystemByPackSystemModeWindowsMetrics](../../models/operations/createinputsystembypacksystemmodewindowsmetrics.md) | :heavy_minus_sign:                                                                                                                       | Select the level of details for system metrics                                                                                           |
| `detail`                                                                                                                                 | *boolean*                                                                                                                                | :heavy_minus_sign:                                                                                                                       | Generate metrics for all system information                                                                                              |