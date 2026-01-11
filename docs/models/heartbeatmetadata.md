# HeartbeatMetadata

## Example Usage

```typescript
import { HeartbeatMetadata } from "cribl-control-plane/models";

let value: HeartbeatMetadata = {
  aws: {
    enabled: false,
    instanceId: "<id>",
    region: "<value>",
    tags: {
      "key": "<value>",
    },
    type: "<value>",
    zone: "<value>",
  },
  azure: {
    enabled: false,
    hostname: "hidden-hundred.net",
    instanceId: "<id>",
    name: "<value>",
    region: "<value>",
    resourceGroup: "<value>",
    subscriptionId: "<id>",
    tags: {
      "key": "<value>",
    },
    type: "<value>",
    vmId: "<id>",
    zone: "<value>",
  },
  hostOs: {
    addresses: [
      "<value 1>",
      "<value 2>",
    ],
    enabled: false,
    id: "<id>",
    version: "<value>",
  },
  kube: {
    enabled: true,
    namespace: "<value>",
    node: "<value>",
    owner: {
      kind: "<value>",
      name: "<value>",
    },
    pod: "<value>",
    source: "<value>",
  },
  os: {
    addresses: [],
    enabled: false,
    id: "<id>",
    version: "<value>",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `aws`                                                                          | [models.AwsTypeHeartbeatMetadata](../models/awstypeheartbeatmetadata.md)       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `azure`                                                                        | [models.AzureTypeHeartbeatMetadata](../models/azuretypeheartbeatmetadata.md)   | :heavy_minus_sign:                                                             | N/A                                                                            |
| `hostOs`                                                                       | [models.HostOsTypeHeartbeatMetadata](../models/hostostypeheartbeatmetadata.md) | :heavy_minus_sign:                                                             | N/A                                                                            |
| `kube`                                                                         | [models.KubeTypeHeartbeatMetadata](../models/kubetypeheartbeatmetadata.md)     | :heavy_minus_sign:                                                             | N/A                                                                            |
| `os`                                                                           | [models.HostOsTypeHeartbeatMetadata](../models/hostostypeheartbeatmetadata.md) | :heavy_minus_sign:                                                             | N/A                                                                            |