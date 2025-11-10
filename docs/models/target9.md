# Target9

## Example Usage

```typescript
import { Target9 } from "cribl-control-plane/models";

let value: Target9 = {
  host: "awesome-outlaw.org",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `protocol`                                                  | [models.Protocol9](../models/protocol9.md)                  | :heavy_minus_sign:                                          | Protocol to use when collecting metrics                     |
| `host`                                                      | *string*                                                    | :heavy_check_mark:                                          | Name of host from which to pull metrics.                    |
| `port`                                                      | *number*                                                    | :heavy_minus_sign:                                          | The port number in the metrics URL for discovered targets.  |
| `path`                                                      | *string*                                                    | :heavy_minus_sign:                                          | Path to use when collecting metrics from discovered targets |