# InputWindowsMetricsNetwork2

## Example Usage

```typescript
import { InputWindowsMetricsNetwork2 } from "cribl-control-plane/models";

let value: InputWindowsMetricsNetwork2 = {
  devices: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `mode`                                                                                    | [models.InputWindowsMetricsNetworkMode2](../models/inputwindowsmetricsnetworkmode2.md)    | :heavy_minus_sign:                                                                        | Select the level of details for network metrics                                           |
| `detail`                                                                                  | *boolean*                                                                                 | :heavy_minus_sign:                                                                        | Generate full network metrics                                                             |
| `protocols`                                                                               | *boolean*                                                                                 | :heavy_minus_sign:                                                                        | Generate protocol metrics for ICMP, ICMPMsg, IP, TCP, UDP and UDPLite                     |
| `devices`                                                                                 | *string*[]                                                                                | :heavy_minus_sign:                                                                        | Network interfaces to include/exclude. All interfaces are included if this list is empty. |
| `perInterface`                                                                            | *boolean*                                                                                 | :heavy_minus_sign:                                                                        | Generate separate metrics for each interface                                              |