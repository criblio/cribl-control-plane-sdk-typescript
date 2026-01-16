# HostSystemMetrics

## Example Usage

```typescript
import { HostSystemMetrics } from "cribl-control-plane/models/operations";

let value: HostSystemMetrics = {
  mode: "disabled",
  custom: {
    system: {
      mode: "all",
      processes: true,
    },
    cpu: {
      mode: "custom",
      perCpu: false,
      detail: true,
      time: false,
    },
    memory: {
      mode: "all",
      detail: false,
    },
    network: {
      mode: "custom",
      detail: false,
      protocols: false,
      devices: [
        "<value 1>",
        "<value 2>",
      ],
      perInterface: false,
    },
    disk: {
      mode: "custom",
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
        "<value 2>",
        "<value 3>",
      ],
      perDevice: true,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `mode`                                                                           | [models.ModeOptionsHost](../../models/modeoptionshost.md)                        | :heavy_minus_sign:                                                               | Select level of detail for host metrics                                          |
| `custom`                                                                         | [operations.CustomSystemMetrics](../../models/operations/customsystemmetrics.md) | :heavy_minus_sign:                                                               | N/A                                                                              |