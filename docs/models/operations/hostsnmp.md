# HostSnmp

## Example Usage

```typescript
import { HostSnmp } from "cribl-control-plane/models/operations";

let value: HostSnmp = {
  host: "pleased-parade.info",
  port: 1424.36,
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `host`                           | *string*                         | :heavy_check_mark:               | Destination host                 |
| `port`                           | *number*                         | :heavy_check_mark:               | Destination port, default is 162 |