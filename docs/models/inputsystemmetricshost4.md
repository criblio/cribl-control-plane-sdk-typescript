# InputSystemMetricsHost4

## Example Usage

```typescript
import { InputSystemMetricsHost4 } from "cribl-control-plane/models";

let value: InputSystemMetricsHost4 = {
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

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `mode`                                                                         | [models.InputSystemMetricsHostMode4](../models/inputsystemmetricshostmode4.md) | :heavy_minus_sign:                                                             | Select level of detail for host metrics                                        |
| `custom`                                                                       | [models.InputSystemMetricsCustom4](../models/inputsystemmetricscustom4.md)     | :heavy_minus_sign:                                                             | N/A                                                                            |