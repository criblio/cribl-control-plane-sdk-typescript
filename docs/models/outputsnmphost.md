# OutputSnmpHost

## Example Usage

```typescript
import { OutputSnmpHost } from "cribl-control-plane/models";

let value: OutputSnmpHost = {
  host: "granular-transom.net",
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `host`                           | *string*                         | :heavy_check_mark:               | Destination host                 |
| `port`                           | *number*                         | :heavy_minus_sign:               | Destination port, default is 162 |