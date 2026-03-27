# NodeUpgradeStatus

## Example Usage

```typescript
import { NodeUpgradeStatus } from "cribl-control-plane/models";

let value: NodeUpgradeStatus = {
  state: 3,
  timestamp: 423.4,
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `active`                                                                 | [models.NodeActiveUpgradeStatus](../models/nodeactiveupgradestatus.md)   | :heavy_minus_sign:                                                       | N/A                                                                      |
| `failed`                                                                 | [models.NodeFailedUpgradeStatus](../models/nodefailedupgradestatus.md)   | :heavy_minus_sign:                                                       | N/A                                                                      |
| `skipped`                                                                | [models.NodeSkippedUpgradeStatus](../models/nodeskippedupgradestatus.md) | :heavy_minus_sign:                                                       | N/A                                                                      |
| `state`                                                                  | [models.NodeUpgradeState](../models/nodeupgradestate.md)                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `timestamp`                                                              | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |