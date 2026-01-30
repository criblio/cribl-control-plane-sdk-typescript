# CreateInputHostWindowsMetrics

## Example Usage

```typescript
import { CreateInputHostWindowsMetrics } from "cribl-control-plane/models/operations";

let value: CreateInputHostWindowsMetrics = {
  mode: "disabled",
  custom: {
    system: {
      mode: "disabled",
      detail: true,
    },
    cpu: {
      mode: "basic",
      perCpu: true,
      detail: true,
      time: false,
    },
    memory: {
      mode: "all",
      detail: true,
    },
    network: {
      mode: "all",
      detail: false,
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
      ],
    },
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `mode`                                                                                                   | [models.ModeOptionsHost](../../models/modeoptionshost.md)                                                | :heavy_minus_sign:                                                                                       | Select level of detail for host metrics                                                                  |
| `custom`                                                                                                 | [operations.CreateInputCustomWindowsMetrics](../../models/operations/createinputcustomwindowsmetrics.md) | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |