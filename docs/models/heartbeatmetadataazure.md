# HeartbeatMetadataAzure

## Example Usage

```typescript
import { HeartbeatMetadataAzure } from "cribl-control-plane/models";

let value: HeartbeatMetadataAzure = {
  enabled: false,
  hostname: "frozen-step.info",
  instanceId: "<id>",
  name: "<value>",
  region: "<value>",
  resourceGroup: "<value>",
  subscriptionId: "<id>",
  tags: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  type: "<value>",
  zone: "<value>",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `enabled`                | *boolean*                | :heavy_check_mark:       | N/A                      |
| `hostname`               | *string*                 | :heavy_minus_sign:       | N/A                      |
| `instanceId`             | *string*                 | :heavy_minus_sign:       | N/A                      |
| `name`                   | *string*                 | :heavy_minus_sign:       | N/A                      |
| `region`                 | *string*                 | :heavy_minus_sign:       | N/A                      |
| `resourceGroup`          | *string*                 | :heavy_minus_sign:       | N/A                      |
| `subscriptionId`         | *string*                 | :heavy_minus_sign:       | N/A                      |
| `tags`                   | Record<string, *string*> | :heavy_minus_sign:       | N/A                      |
| `type`                   | *string*                 | :heavy_minus_sign:       | N/A                      |
| `zone`                   | *string*                 | :heavy_minus_sign:       | N/A                      |