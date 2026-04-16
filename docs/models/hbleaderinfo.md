# HBLeaderInfo

Connection parameters for the Leader node, as reported in a Worker heartbeat.

## Example Usage

```typescript
import { HBLeaderInfo } from "cribl-control-plane/models";

let value: HBLeaderInfo = {
  host: "urban-sandbar.biz",
  port: 20497,
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `host`                                                          | *string*                                                        | :heavy_check_mark:                                              | Leader hostname or IP address.                                  |
| `port`                                                          | *number*                                                        | :heavy_check_mark:                                              | Leader TCP port.                                                |
| `servername`                                                    | *string*                                                        | :heavy_minus_sign:                                              | TLS server name (SNI) for the Leader connection.                |
| `tls`                                                           | *boolean*                                                       | :heavy_minus_sign:                                              | If <code>true</code>, TLS is enabled for the Leader connection. |