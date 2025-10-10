# HeartbeatMetadataAws

## Example Usage

```typescript
import { HeartbeatMetadataAws } from "cribl-control-plane/models";

let value: HeartbeatMetadataAws = {
  enabled: false,
  instanceId: "<id>",
  region: "<value>",
  tags: {},
  type: "<value>",
  zone: "<value>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `enabled`                                                          | *boolean*                                                          | :heavy_check_mark:                                                 | N/A                                                                |
| `instanceId`                                                       | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `region`                                                           | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `tags`                                                             | [models.HeartbeatMetadataTags](../models/heartbeatmetadatatags.md) | :heavy_minus_sign:                                                 | N/A                                                                |
| `type`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `zone`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |