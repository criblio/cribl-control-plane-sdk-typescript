# KubeType

## Example Usage

```typescript
import { KubeType } from "cribl-control-plane/models";

let value: KubeType = {
  enabled: true,
  namespace: "<value>",
  node: "<value>",
  owner: {
    kind: "<value>",
    name: "<value>",
  },
  pod: "<value>",
  source: "<value>",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `enabled`                          | *boolean*                          | :heavy_check_mark:                 | N/A                                |
| `namespace`                        | *string*                           | :heavy_check_mark:                 | N/A                                |
| `node`                             | *string*                           | :heavy_check_mark:                 | N/A                                |
| `owner`                            | [models.Owner](../models/owner.md) | :heavy_minus_sign:                 | N/A                                |
| `pod`                              | *string*                           | :heavy_check_mark:                 | N/A                                |
| `source`                           | *string*                           | :heavy_check_mark:                 | N/A                                |