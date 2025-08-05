# NodeUpgradeStatus

## Example Usage

```typescript
import { NodeUpgradeStatus } from "cribl-control-plane/models";

let value: NodeUpgradeStatus = {
  active: 2,
  failed: 0,
  skipped: 1,
  state: 1,
  timestamp: 5255.11,
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