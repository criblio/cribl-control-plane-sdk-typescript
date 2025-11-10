# InputSystemMetricsHost3

## Example Usage

```typescript
import { InputSystemMetricsHost3 } from "cribl-control-plane/models";

let value: InputSystemMetricsHost3 = {
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
      ],
    },
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `mode`                                                                         | [models.InputSystemMetricsHostMode3](../models/inputsystemmetricshostmode3.md) | :heavy_minus_sign:                                                             | Select level of detail for host metrics                                        |
| `custom`                                                                       | [models.InputSystemMetricsCustom3](../models/inputsystemmetricscustom3.md)     | :heavy_minus_sign:                                                             | N/A                                                                            |