# CreateInputDiskWindowsMetrics

## Example Usage

```typescript
import { CreateInputDiskWindowsMetrics } from "cribl-control-plane/models/operations";

let value: CreateInputDiskWindowsMetrics = {
  mode: "basic",
  perVolume: false,
  detail: true,
  volumes: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `mode`                                                                                                                                                 | [operations.CreateInputDiskModeWindowsMetrics](../../models/operations/createinputdiskmodewindowsmetrics.md)                                           | :heavy_minus_sign:                                                                                                                                     | Select the level of details for disk metrics                                                                                                           |
| `perVolume`                                                                                                                                            | *boolean*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                     | Generate separate metrics for each volume                                                                                                              |
| `detail`                                                                                                                                               | *boolean*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                     | Generate full disk metrics                                                                                                                             |
| `volumes`                                                                                                                                              | *string*[]                                                                                                                                             | :heavy_minus_sign:                                                                                                                                     | Windows volumes to include/exclude. E.g.: C:, !E:, etc. Wildcards and ! (not) operators are supported. All volumes are included if this list is empty. |