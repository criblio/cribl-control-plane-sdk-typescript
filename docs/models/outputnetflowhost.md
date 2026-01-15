# OutputNetflowHost

## Example Usage

```typescript
import { OutputNetflowHost } from "cribl-control-plane/models";

let value: OutputNetflowHost = {
  host: "gruesome-valentine.com",
  port: 2777.11,
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `host`                            | *string*                          | :heavy_check_mark:                | Destination host                  |
| `port`                            | *number*                          | :heavy_check_mark:                | Destination port, default is 2055 |