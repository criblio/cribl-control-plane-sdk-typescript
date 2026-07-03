# KubeTypeHeartbeatMetadata

## Example Usage

```typescript
import { KubeTypeHeartbeatMetadata } from "cribl-control-plane/models";

let value: KubeTypeHeartbeatMetadata = {
  enabled: true,
  namespace: "<value>",
  node: "<value>",
  pod: "<value>",
  source: "<value>",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `enabled`                                                                                                      | *boolean*                                                                                                      | :heavy_check_mark:                                                                                             | If <code>true</code>, the Kubernetes metadata collector is enabled on the node. Otherwise, <code>false</code>. |
| `namespace`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | Kubernetes Namespace name.                                                                                     |
| `node`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | Kubernetes Node name.                                                                                          |
| `owner`                                                                                                        | [models.OwnerTypeHeartbeatMetadataKube](../models/ownertypeheartbeatmetadatakube.md)                           | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `pod`                                                                                                          | *string*                                                                                                       | :heavy_check_mark:                                                                                             | Kubernetes Pod name.                                                                                           |
| `source`                                                                                                       | *string*                                                                                                       | :heavy_check_mark:                                                                                             | Kubernetes config source.                                                                                      |