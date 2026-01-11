# InputSystemMetricsHost

## Example Usage

```typescript
import { InputSystemMetricsHost } from "cribl-control-plane/models/operations";

let value: InputSystemMetricsHost = {
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
      devices: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      mountpoints: [
        "<value 1>",
      ],
      fstypes: [
        "<value 1>",
      ],
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `mode`                                                                                     | [models.ModeOptionsHost](../../models/modeoptionshost.md)                                  | :heavy_minus_sign:                                                                         | Select level of detail for host metrics                                                    |
| `custom`                                                                                   | [operations.InputSystemMetricsCustom](../../models/operations/inputsystemmetricscustom.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |