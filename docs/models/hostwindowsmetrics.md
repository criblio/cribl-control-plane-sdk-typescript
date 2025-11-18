# HostWindowsMetrics

## Example Usage

```typescript
import { HostWindowsMetrics } from "cribl-control-plane/models";

let value: HostWindowsMetrics = {
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
      volumes: [
        "<value 1>",
        "<value 2>",
      ],
    },
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `mode`                                                               | [models.HostModeWindowsMetrics](../models/hostmodewindowsmetrics.md) | :heavy_minus_sign:                                                   | Select level of detail for host metrics                              |
| `custom`                                                             | [models.CustomWindowsMetrics](../models/customwindowsmetrics.md)     | :heavy_minus_sign:                                                   | N/A                                                                  |