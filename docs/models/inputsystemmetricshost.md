# InputSystemMetricsHost

## Example Usage

```typescript
import { InputSystemMetricsHost } from "cribl-control-plane/models";

let value: InputSystemMetricsHost = {
  mode: "custom",
  custom: {
    system: {
      mode: "disabled",
      processes: false,
    },
    cpu: {
      mode: "all",
      perCpu: true,
      detail: false,
      time: true,
    },
    memory: {
      mode: "disabled",
      detail: false,
    },
    network: {
      mode: "basic",
      detail: true,
      protocols: true,
      devices: [
        "<value 1>",
        "<value 2>",
      ],
      perInterface: false,
    },
    disk: {
      mode: "basic",
      detail: true,
      inodes: false,
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