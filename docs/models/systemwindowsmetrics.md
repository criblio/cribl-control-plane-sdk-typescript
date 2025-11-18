# SystemWindowsMetrics

## Example Usage

```typescript
import { SystemWindowsMetrics } from "cribl-control-plane/models";

let value: SystemWindowsMetrics = {};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `mode`                                                                   | [models.SystemModeWindowsMetrics](../models/systemmodewindowsmetrics.md) | :heavy_minus_sign:                                                       | Select the level of details for system metrics                           |
| `detail`                                                                 | *boolean*                                                                | :heavy_minus_sign:                                                       | Generate metrics for all system information                              |