# InputWindowsMetricsHost3

## Example Usage

```typescript
import { InputWindowsMetricsHost3 } from "cribl-control-plane/models";

let value: InputWindowsMetricsHost3 = {
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
        "<value 3>",
      ],
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `mode`                                                                       | [models.InputWindowsMetricsMode3](../models/inputwindowsmetricsmode3.md)     | :heavy_minus_sign:                                                           | Select level of detail for host metrics                                      |
| `custom`                                                                     | [models.InputWindowsMetricsCustom3](../models/inputwindowsmetricscustom3.md) | :heavy_minus_sign:                                                           | N/A                                                                          |