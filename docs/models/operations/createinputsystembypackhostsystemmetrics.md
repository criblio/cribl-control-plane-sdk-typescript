# CreateInputSystemByPackHostSystemMetrics

## Example Usage

```typescript
import { CreateInputSystemByPackHostSystemMetrics } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackHostSystemMetrics = {
  mode: "disabled",
  custom: {
    system: {
      mode: "disabled",
      processes: true,
    },
    cpu: {
      mode: "all",
      perCpu: false,
      detail: true,
      time: true,
    },
    memory: {
      mode: "custom",
      detail: true,
    },
    network: {
      mode: "all",
      detail: true,
      protocols: true,
      devices: [
        "<value 1>",
        "<value 2>",
      ],
      perInterface: true,
    },
    disk: {
      mode: "disabled",
      detail: true,
      inodes: false,
      devices: [
        "<value 1>",
        "<value 2>",
      ],
      mountpoints: [
        "<value 1>",
        "<value 2>",
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

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `mode`                                                                                                                         | [models.ModeOptionsHost](../../models/modeoptionshost.md)                                                                      | :heavy_minus_sign:                                                                                                             | Select level of detail for host metrics                                                                                        |
| `custom`                                                                                                                       | [operations.CreateInputSystemByPackCustomSystemMetrics](../../models/operations/createinputsystembypackcustomsystemmetrics.md) | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |