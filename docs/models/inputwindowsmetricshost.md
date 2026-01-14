# InputWindowsMetricsHost

## Example Usage

```typescript
import { InputWindowsMetricsHost } from "cribl-control-plane/models";

let value: InputWindowsMetricsHost = {
  mode: "disabled",
  custom: {
    system: {
      mode: "all",
      detail: false,
    },
    cpu: {
      mode: "disabled",
      perCpu: false,
      detail: true,
      time: true,
    },
    memory: {
      mode: "custom",
      detail: true,
    },
    network: {
      mode: "basic",
      detail: true,
      protocols: false,
      devices: [
        "<value 1>",
      ],
      perInterface: false,
    },
    disk: {
      mode: "basic",
      perVolume: false,
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