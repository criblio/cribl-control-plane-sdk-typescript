# SystemWindowsMetrics

## Example Usage

```typescript
import { SystemWindowsMetrics } from "cribl-control-plane/models/operations";

let value: SystemWindowsMetrics = {
  mode: "disabled",
  detail: false,
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `mode`                                                                                     | [operations.SystemModeWindowsMetrics](../../models/operations/systemmodewindowsmetrics.md) | :heavy_minus_sign:                                                                         | Select the level of details for system metrics                                             |
| `detail`                                                                                   | *boolean*                                                                                  | :heavy_minus_sign:                                                                         | Generate metrics for all system information                                                |