# InputWindowsMetricsHost

## Example Usage

```typescript
import { InputWindowsMetricsHost } from "cribl-control-plane/models";

let value: InputWindowsMetricsHost = {
  mode: "disabled",
  custom: {
    system: {
      mode: "basic",
      detail: true,
    },
    cpu: {
      mode: "custom",
      perCpu: false,
      detail: false,
      time: true,
    },
    memory: {
      mode: "all",
      detail: false,
    },
    network: {
      mode: "all",
      detail: true,
      protocols: true,
      devices: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      perInterface: true,
    },
    disk: {
      mode: "custom",
      perVolume: true,
      detail: false,
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

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `mode`                                                                     | [models.ModeOptionsHost](../models/modeoptionshost.md)                     | :heavy_minus_sign:                                                         | Select level of detail for host metrics                                    |
| `custom`                                                                   | [models.InputWindowsMetricsCustom](../models/inputwindowsmetricscustom.md) | :heavy_minus_sign:                                                         | N/A                                                                        |