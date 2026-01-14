# InputSystemMetricsHost

## Example Usage

```typescript
import { InputSystemMetricsHost } from "cribl-control-plane/models/operations";

let value: InputSystemMetricsHost = {
  mode: "custom",
  custom: {
    system: {
      mode: "all",
      processes: true,
    },
    cpu: {
      mode: "custom",
      perCpu: true,
      detail: false,
      time: false,
    },
    memory: {
      mode: "all",
      detail: false,
    },
    network: {
      mode: "disabled",
      detail: false,
      protocols: false,
      devices: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      perInterface: false,
    },
    disk: {
      mode: "basic",
      detail: false,
      inodes: true,
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
        "<value 2>",
      ],
      perDevice: true,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `mode`                                                                                     | [models.ModeOptionsHost](../../models/modeoptionshost.md)                                  | :heavy_minus_sign:                                                                         | Select level of detail for host metrics                                                    |
| `custom`                                                                                   | [operations.InputSystemMetricsCustom](../../models/operations/inputsystemmetricscustom.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |