# CreateInputHostSystemMetrics

## Example Usage

```typescript
import { CreateInputHostSystemMetrics } from "cribl-control-plane/models/operations";

let value: CreateInputHostSystemMetrics = {
  mode: "all",
  custom: {
    system: {
      mode: "custom",
      processes: true,
    },
    cpu: {
      mode: "custom",
      perCpu: false,
      detail: false,
      time: true,
    },
    memory: {
      mode: "basic",
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
      mode: "basic",
      detail: false,
      inodes: true,
      devices: [
        "<value 1>",
        "<value 2>",
      ],
      mountpoints: [
        "<value 1>",
      ],
      fstypes: [
        "<value 1>",
        "<value 2>",
      ],
      perDevice: false,
    },
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `mode`                                                                                                 | [models.ModeOptionsHost](../../models/modeoptionshost.md)                                              | :heavy_minus_sign:                                                                                     | Select level of detail for host metrics                                                                |
| `custom`                                                                                               | [operations.CreateInputCustomSystemMetrics](../../models/operations/createinputcustomsystemmetrics.md) | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |