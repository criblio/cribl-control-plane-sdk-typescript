# InputWindowsMetricsHost2

## Example Usage

```typescript
import { InputWindowsMetricsHost2 } from "cribl-control-plane/models";

let value: InputWindowsMetricsHost2 = {
  custom: {
    system: {},
    cpu: {},
    memory: {},
    network: {
      devices: [
        "<value 1>",
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
| `mode`                                                                       | [models.InputWindowsMetricsMode2](../models/inputwindowsmetricsmode2.md)     | :heavy_minus_sign:                                                           | Select level of detail for host metrics                                      |
| `custom`                                                                     | [models.InputWindowsMetricsCustom2](../models/inputwindowsmetricscustom2.md) | :heavy_minus_sign:                                                           | N/A                                                                          |