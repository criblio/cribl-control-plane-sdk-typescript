# HostWindowsMetrics

## Example Usage

```typescript
import { HostWindowsMetrics } from "cribl-control-plane/models/operations";

let value: HostWindowsMetrics = {
  mode: "all",
  custom: {
    system: {
      mode: "custom",
      detail: true,
    },
    cpu: {
      mode: "custom",
      perCpu: false,
      detail: true,
      time: true,
    },
    memory: {
      mode: "custom",
      detail: false,
    },
    network: {
      mode: "custom",
      detail: false,
      protocols: false,
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
      detail: true,
      volumes: [
        "<value 1>",
      ],
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `mode`                                                                             | [models.ModeOptionsHost](../../models/modeoptionshost.md)                          | :heavy_minus_sign:                                                                 | Select level of detail for host metrics                                            |
| `custom`                                                                           | [operations.CustomWindowsMetrics](../../models/operations/customwindowsmetrics.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |