# InputSystemMetricsHost1

## Example Usage

```typescript
import { InputSystemMetricsHost1 } from "cribl-control-plane/models";

let value: InputSystemMetricsHost1 = {
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
      devices: [
        "<value 1>",
      ],
      mountpoints: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
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
| `mode`                                                                         | [models.InputSystemMetricsHostMode1](../models/inputsystemmetricshostmode1.md) | :heavy_minus_sign:                                                             | Select level of detail for host metrics                                        |
| `custom`                                                                       | [models.InputSystemMetricsCustom1](../models/inputsystemmetricscustom1.md)     | :heavy_minus_sign:                                                             | N/A                                                                            |