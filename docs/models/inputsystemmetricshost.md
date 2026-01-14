# InputSystemMetricsHost

## Example Usage

```typescript
import { InputSystemMetricsHost } from "cribl-control-plane/models";

let value: InputSystemMetricsHost = {
  mode: "custom",
  custom: {
    system: {
      mode: "custom",
      processes: true,
    },
    cpu: {
      mode: "basic",
      perCpu: false,
      detail: true,
      time: false,
    },
    memory: {
      mode: "custom",
      detail: true,
    },
    network: {
      mode: "all",
      detail: true,
      protocols: false,
      devices: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      perInterface: true,
    },
    disk: {
      mode: "basic",
      detail: false,
      inodes: false,
      devices: [
        "<value 1>",
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

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `mode`                                                                   | [models.ModeOptionsHost](../models/modeoptionshost.md)                   | :heavy_minus_sign:                                                       | Select level of detail for host metrics                                  |
| `custom`                                                                 | [models.InputSystemMetricsCustom](../models/inputsystemmetricscustom.md) | :heavy_minus_sign:                                                       | N/A                                                                      |