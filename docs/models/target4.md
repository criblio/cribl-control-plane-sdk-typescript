# Target4

## Example Usage

```typescript
import { Target4 } from "cribl-control-plane/models";

let value: Target4 = {
  host: "haunting-grandpa.net",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `protocol`                                                  | [models.Protocol4](../models/protocol4.md)                  | :heavy_minus_sign:                                          | Protocol to use when collecting metrics                     |
| `host`                                                      | *string*                                                    | :heavy_check_mark:                                          | Name of host from which to pull metrics.                    |
| `port`                                                      | *number*                                                    | :heavy_minus_sign:                                          | The port number in the metrics URL for discovered targets.  |
| `path`                                                      | *string*                                                    | :heavy_minus_sign:                                          | Path to use when collecting metrics from discovered targets |