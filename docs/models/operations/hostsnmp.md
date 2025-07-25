# HostSnmp

## Example Usage

```typescript
import { HostSnmp } from "cribl-control-plane/models/operations";

let value: HostSnmp = {
  host: "pleased-parade.info",
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `host`                           | *string*                         | :heavy_check_mark:               | Destination host                 |
| `port`                           | *number*                         | :heavy_minus_sign:               | Destination port, default is 162 |