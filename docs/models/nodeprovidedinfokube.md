# NodeProvidedInfoKube

## Example Usage

```typescript
import { NodeProvidedInfoKube } from "cribl-control-plane/models";

let value: NodeProvidedInfoKube = {
  enabled: true,
  namespace: "<value>",
  node: "<value>",
  pod: "<value>",
  source: "<value>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `enabled`                                                          | *boolean*                                                          | :heavy_check_mark:                                                 | N/A                                                                |
| `namespace`                                                        | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `node`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `owner`                                                            | [models.NodeProvidedInfoOwner](../models/nodeprovidedinfoowner.md) | :heavy_minus_sign:                                                 | N/A                                                                |
| `pod`                                                              | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `source`                                                           | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |