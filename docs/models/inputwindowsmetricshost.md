# InputWindowsMetricsHost

## Example Usage

```typescript
import { InputWindowsMetricsHost } from "cribl-control-plane/models";

let value: InputWindowsMetricsHost = {
  custom: {
    system: {},
    cpu: {},
    memory: {},
    network: {
      devices: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
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

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `mode`                                                                     | [models.ModeOptionsHost](../models/modeoptionshost.md)                     | :heavy_minus_sign:                                                         | Select level of detail for host metrics                                    |
| `custom`                                                                   | [models.InputWindowsMetricsCustom](../models/inputwindowsmetricscustom.md) | :heavy_minus_sign:                                                         | N/A                                                                        |