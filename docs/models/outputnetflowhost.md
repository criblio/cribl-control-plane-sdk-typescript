# OutputNetflowHost

## Example Usage

```typescript
import { OutputNetflowHost } from "cribl-control-plane/models";

let value: OutputNetflowHost = {
  host: "gruesome-valentine.com",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `host`                            | *string*                          | :heavy_check_mark:                | Destination host                  |
| `port`                            | *number*                          | :heavy_minus_sign:                | Destination port, default is 2055 |