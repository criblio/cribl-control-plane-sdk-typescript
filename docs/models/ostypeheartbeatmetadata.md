# OsTypeHeartbeatMetadata

## Example Usage

```typescript
import { OsTypeHeartbeatMetadata } from "cribl-control-plane/models";

let value: OsTypeHeartbeatMetadata = {
  addresses: [],
  enabled: true,
  id: "<id>",
  version: "<value>",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `addresses`                                                                                                          | *string*[]                                                                                                           | :heavy_check_mark:                                                                                                   | Network addresses reported by the operating system.                                                                  |
| `enabled`                                                                                                            | *boolean*                                                                                                            | :heavy_check_mark:                                                                                                   | If <code>true</code>, the operating system metadata collector is enabled on the node. Otherwise, <code>false</code>. |
| `id`                                                                                                                 | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | Operating system distribution name.                                                                                  |
| `version`                                                                                                            | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | Operating system version.                                                                                            |