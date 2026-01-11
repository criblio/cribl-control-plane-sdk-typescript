# InputWindowsMetricsSystem

## Example Usage

```typescript
import { InputWindowsMetricsSystem } from "cribl-control-plane/models/operations";

let value: InputWindowsMetricsSystem = {};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `mode`                                                                                               | [operations.InputWindowsMetricsSystemMode](../../models/operations/inputwindowsmetricssystemmode.md) | :heavy_minus_sign:                                                                                   | Select the level of details for system metrics                                                       |
| `detail`                                                                                             | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | Generate metrics for all system information                                                          |