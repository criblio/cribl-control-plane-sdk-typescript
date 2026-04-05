# ConfigGroupCloud

## Example Usage

```typescript
import { ConfigGroupCloud } from "cribl-control-plane/models";

let value: ConfigGroupCloud = {
  provider: "aws",
  region: "<value>",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `provider`                                         | [models.CloudProvider](../models/cloudprovider.md) | :heavy_check_mark:                                 | N/A                                                |
| `region`                                           | *string*                                           | :heavy_check_mark:                                 | Cloud region where the Worker Group is deployed.   |