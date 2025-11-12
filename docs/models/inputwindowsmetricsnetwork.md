# InputWindowsMetricsNetwork

## Example Usage

```typescript
import { InputWindowsMetricsNetwork } from "cribl-control-plane/models";

let value: InputWindowsMetricsNetwork = {
  devices: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `mode`                                                                                    | [models.InputWindowsMetricsNetworkMode](../models/inputwindowsmetricsnetworkmode.md)      | :heavy_minus_sign:                                                                        | Select the level of details for network metrics                                           |
| `detail`                                                                                  | *boolean*                                                                                 | :heavy_minus_sign:                                                                        | Generate full network metrics                                                             |
| `protocols`                                                                               | *boolean*                                                                                 | :heavy_minus_sign:                                                                        | Generate protocol metrics for ICMP, ICMPMsg, IP, TCP, UDP and UDPLite                     |
| `devices`                                                                                 | *string*[]                                                                                | :heavy_minus_sign:                                                                        | Network interfaces to include/exclude. All interfaces are included if this list is empty. |
| `perInterface`                                                                            | *boolean*                                                                                 | :heavy_minus_sign:                                                                        | Generate separate metrics for each interface                                              |