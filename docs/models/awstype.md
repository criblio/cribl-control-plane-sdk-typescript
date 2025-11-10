# AwsType

## Example Usage

```typescript
import { AwsType } from "cribl-control-plane/models";

let value: AwsType = {
  enabled: true,
  instanceId: "<id>",
  region: "<value>",
  tags: {},
  type: "<value>",
  zone: "<value>",
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `enabled`                        | *boolean*                        | :heavy_check_mark:               | N/A                              |
| `instanceId`                     | *string*                         | :heavy_check_mark:               | N/A                              |
| `region`                         | *string*                         | :heavy_check_mark:               | N/A                              |
| `tags`                           | [models.Tags](../models/tags.md) | :heavy_minus_sign:               | N/A                              |
| `type`                           | *string*                         | :heavy_check_mark:               | N/A                              |
| `zone`                           | *string*                         | :heavy_check_mark:               | N/A                              |