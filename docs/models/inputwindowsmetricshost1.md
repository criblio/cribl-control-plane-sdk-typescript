# InputWindowsMetricsHost1

## Example Usage

```typescript
import { InputWindowsMetricsHost1 } from "cribl-control-plane/models";

let value: InputWindowsMetricsHost1 = {
  custom: {
    system: {},
    cpu: {},
    memory: {},
    network: {
      devices: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
    },
    disk: {
      volumes: [
        "<value 1>",
        "<value 2>",
      ],
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `mode`                                                                       | [models.InputWindowsMetricsMode1](../models/inputwindowsmetricsmode1.md)     | :heavy_minus_sign:                                                           | Select level of detail for host metrics                                      |
| `custom`                                                                     | [models.InputWindowsMetricsCustom1](../models/inputwindowsmetricscustom1.md) | :heavy_minus_sign:                                                           | N/A                                                                          |