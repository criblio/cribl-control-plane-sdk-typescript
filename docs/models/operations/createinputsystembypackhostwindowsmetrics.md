# CreateInputSystemByPackHostWindowsMetrics

## Example Usage

```typescript
import { CreateInputSystemByPackHostWindowsMetrics } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackHostWindowsMetrics = {
  mode: "basic",
  custom: {
    system: {
      mode: "custom",
      detail: false,
    },
    cpu: {
      mode: "disabled",
      perCpu: false,
      detail: false,
      time: true,
    },
    memory: {
      mode: "custom",
      detail: false,
    },
    network: {
      mode: "basic",
      detail: false,
      protocols: false,
      devices: [
        "<value 1>",
        "<value 2>",
      ],
      perInterface: false,
    },
    disk: {
      mode: "disabled",
      perVolume: true,
      detail: false,
      volumes: [
        "<value 1>",
        "<value 2>",
      ],
    },
  },
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `mode`                                                                                                                           | [models.ModeOptionsHost](../../models/modeoptionshost.md)                                                                        | :heavy_minus_sign:                                                                                                               | Select level of detail for host metrics                                                                                          |
| `custom`                                                                                                                         | [operations.CreateInputSystemByPackCustomWindowsMetrics](../../models/operations/createinputsystembypackcustomwindowsmetrics.md) | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |