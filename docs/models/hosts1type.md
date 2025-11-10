# Hosts1Type

## Example Usage

```typescript
import { Hosts1Type } from "cribl-control-plane/models";

let value: Hosts1Type = {
  host: "courageous-government.biz",
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `host`                           | *string*                         | :heavy_check_mark:               | Destination host                 |
| `port`                           | *number*                         | :heavy_minus_sign:               | Destination port, default is 162 |