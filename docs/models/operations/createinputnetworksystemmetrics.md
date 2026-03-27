# CreateInputNetworkSystemMetrics

## Example Usage

```typescript
import { CreateInputNetworkSystemMetrics } from "cribl-control-plane/models/operations";

let value: CreateInputNetworkSystemMetrics = {};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `mode`                                                                                                           | [operations.CreateInputNetworkModeSystemMetrics](../../models/operations/createinputnetworkmodesystemmetrics.md) | :heavy_minus_sign:                                                                                               | Select the level of detail for network metrics                                                                   |
| `detail`                                                                                                         | *boolean*                                                                                                        | :heavy_minus_sign:                                                                                               | Generate full network metrics                                                                                    |
| `protocols`                                                                                                      | *boolean*                                                                                                        | :heavy_minus_sign:                                                                                               | Generate protocol metrics for ICMP, ICMPMsg, IP, TCP, UDP and UDPLite                                            |
| `devices`                                                                                                        | *string*[]                                                                                                       | :heavy_minus_sign:                                                                                               | Network interfaces to include/exclude. Examples: eth0, !lo. All interfaces are included if this list is empty.   |
| `perInterface`                                                                                                   | *boolean*                                                                                                        | :heavy_minus_sign:                                                                                               | Generate separate metrics for each interface                                                                     |