# InputWindowsMetricsHost4

## Example Usage

```typescript
import { InputWindowsMetricsHost4 } from "cribl-control-plane/models";

let value: InputWindowsMetricsHost4 = {
  custom: {
    system: {},
    cpu: {},
    memory: {},
    network: {
      devices: [
        "<value 1>",
        "<value 2>",
      ],
    },
    disk: {
      volumes: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `mode`                                                                       | [models.InputWindowsMetricsMode4](../models/inputwindowsmetricsmode4.md)     | :heavy_minus_sign:                                                           | Select level of detail for host metrics                                      |
| `custom`                                                                     | [models.InputWindowsMetricsCustom4](../models/inputwindowsmetricscustom4.md) | :heavy_minus_sign:                                                           | N/A                                                                          |