# InputSystemMetricsNetwork4

## Example Usage

```typescript
import { InputSystemMetricsNetwork4 } from "cribl-control-plane/models";

let value: InputSystemMetricsNetwork4 = {
  devices: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `mode`                                                                                                         | [models.InputSystemMetricsNetworkMode4](../models/inputsystemmetricsnetworkmode4.md)                           | :heavy_minus_sign:                                                                                             | Select the level of detail for network metrics                                                                 |
| `detail`                                                                                                       | *boolean*                                                                                                      | :heavy_minus_sign:                                                                                             | Generate full network metrics                                                                                  |
| `protocols`                                                                                                    | *boolean*                                                                                                      | :heavy_minus_sign:                                                                                             | Generate protocol metrics for ICMP, ICMPMsg, IP, TCP, UDP and UDPLite                                          |
| `devices`                                                                                                      | *string*[]                                                                                                     | :heavy_minus_sign:                                                                                             | Network interfaces to include/exclude. Examples: eth0, !lo. All interfaces are included if this list is empty. |
| `perInterface`                                                                                                 | *boolean*                                                                                                      | :heavy_minus_sign:                                                                                             | Generate separate metrics for each interface                                                                   |