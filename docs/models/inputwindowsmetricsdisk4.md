# InputWindowsMetricsDisk4

## Example Usage

```typescript
import { InputWindowsMetricsDisk4 } from "cribl-control-plane/models";

let value: InputWindowsMetricsDisk4 = {
  volumes: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `mode`                                                                                                                                                 | [models.InputWindowsMetricsDiskMode4](../models/inputwindowsmetricsdiskmode4.md)                                                                       | :heavy_minus_sign:                                                                                                                                     | Select the level of details for disk metrics                                                                                                           |
| `perVolume`                                                                                                                                            | *boolean*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                     | Generate separate metrics for each volume                                                                                                              |
| `detail`                                                                                                                                               | *boolean*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                     | Generate full disk metrics                                                                                                                             |
| `volumes`                                                                                                                                              | *string*[]                                                                                                                                             | :heavy_minus_sign:                                                                                                                                     | Windows volumes to include/exclude. E.g.: C:, !E:, etc. Wildcards and ! (not) operators are supported. All volumes are included if this list is empty. |