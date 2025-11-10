# InputSystemMetricsHost2

## Example Usage

```typescript
import { InputSystemMetricsHost2 } from "cribl-control-plane/models";

let value: InputSystemMetricsHost2 = {
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
      ],
    },
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `mode`                                                                         | [models.InputSystemMetricsHostMode2](../models/inputsystemmetricshostmode2.md) | :heavy_minus_sign:                                                             | Select level of detail for host metrics                                        |
| `custom`                                                                       | [models.InputSystemMetricsCustom2](../models/inputsystemmetricscustom2.md)     | :heavy_minus_sign:                                                             | N/A                                                                            |