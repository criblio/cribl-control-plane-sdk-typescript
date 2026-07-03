# HostOsTypeHeartbeatMetadata

## Example Usage

```typescript
import { HostOsTypeHeartbeatMetadata } from "cribl-control-plane/models";

let value: HostOsTypeHeartbeatMetadata = {
  addresses: [
    "<value 1>",
  ],
  enabled: true,
  id: "<id>",
  version: "<value>",
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `addresses`                                                                                                               | *string*[]                                                                                                                | :heavy_check_mark:                                                                                                        | Network addresses reported by the host operating system.                                                                  |
| `enabled`                                                                                                                 | *boolean*                                                                                                                 | :heavy_check_mark:                                                                                                        | If <code>true</code>, the host operating system metadata collector is enabled on the node. Otherwise, <code>false</code>. |
| `id`                                                                                                                      | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | Host operating system distribution name.                                                                                  |
| `version`                                                                                                                 | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | Host operating system version.                                                                                            |