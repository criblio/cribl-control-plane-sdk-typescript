# HostSystemMetrics

## Example Usage

```typescript
import { HostSystemMetrics } from "cribl-control-plane/models/operations";

let value: HostSystemMetrics = {
  custom: {
    system: {},
    cpu: {},
    memory: {},
    network: {
      devices: [
        "<value 1>",
        "<value 2>",
      ],
    },
    disk: {
      devices: [
        "<value 1>",
      ],
      mountpoints: [
        "<value 1>",
        "<value 2>",
      ],
      fstypes: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `mode`                                                                           | [models.ModeOptionsHost](../../models/modeoptionshost.md)                        | :heavy_minus_sign:                                                               | Select level of detail for host metrics                                          |
| `custom`                                                                         | [operations.CustomSystemMetrics](../../models/operations/customsystemmetrics.md) | :heavy_minus_sign:                                                               | N/A                                                                              |