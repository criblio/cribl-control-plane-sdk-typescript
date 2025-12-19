# HostNetflow

## Example Usage

```typescript
import { HostNetflow } from "cribl-control-plane/models/operations";

let value: HostNetflow = {
  host: "everlasting-tuba.name",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `host`                            | *string*                          | :heavy_check_mark:                | Destination host                  |
| `port`                            | *number*                          | :heavy_minus_sign:                | Destination port, default is 2055 |