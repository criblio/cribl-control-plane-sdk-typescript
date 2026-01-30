# CreateInputSystemByPackTarget

## Example Usage

```typescript
import { CreateInputSystemByPackTarget } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackTarget = {
  protocol: "https",
  host: "parallel-license.info",
  port: 1103.32,
  path: "/Users",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `protocol`                                                                        | [models.ProtocolOptionsTargetsItems](../../models/protocoloptionstargetsitems.md) | :heavy_minus_sign:                                                                | Protocol to use when collecting metrics                                           |
| `host`                                                                            | *string*                                                                          | :heavy_check_mark:                                                                | Name of host from which to pull metrics.                                          |
| `port`                                                                            | *number*                                                                          | :heavy_minus_sign:                                                                | The port number in the metrics URL for discovered targets.                        |
| `path`                                                                            | *string*                                                                          | :heavy_minus_sign:                                                                | Path to use when collecting metrics from discovered targets                       |