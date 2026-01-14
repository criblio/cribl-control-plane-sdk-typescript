# InputWindowsMetricsHost

## Example Usage

```typescript
import { InputWindowsMetricsHost } from "cribl-control-plane/models/operations";

let value: InputWindowsMetricsHost = {
  mode: "disabled",
  custom: {
    system: {
      mode: "disabled",
      detail: false,
    },
    cpu: {
      mode: "disabled",
      perCpu: false,
      detail: false,
      time: false,
    },
    memory: {
      mode: "disabled",
      detail: false,
    },
    network: {
      mode: "disabled",
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
      perVolume: false,
      detail: false,
      volumes: [
        "<value 1>",
      ],
    },
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `mode`                                                                                       | [models.ModeOptionsHost](../../models/modeoptionshost.md)                                    | :heavy_minus_sign:                                                                           | Select level of detail for host metrics                                                      |
| `custom`                                                                                     | [operations.InputWindowsMetricsCustom](../../models/operations/inputwindowsmetricscustom.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |