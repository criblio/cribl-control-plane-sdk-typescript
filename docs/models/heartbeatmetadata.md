# HeartbeatMetadata

## Example Usage

```typescript
import { HeartbeatMetadata } from "cribl-control-plane/models";

let value: HeartbeatMetadata = {
  aws: {
    enabled: false,
    instanceId: "<id>",
    region: "<value>",
    tags: {},
    type: "<value>",
    zone: "<value>",
  },
  hostOs: {
    addresses: [
      "<value 1>",
    ],
    enabled: true,
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
    addresses: [
      "<value 1>",
      "<value 2>",
    ],
    enabled: false,
    id: "<id>",
    version: "<value>",
  },
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `aws`                                        | [models.AwsType](../models/awstype.md)       | :heavy_minus_sign:                           | N/A                                          |
| `hostOs`                                     | [models.HostOsType](../models/hostostype.md) | :heavy_minus_sign:                           | N/A                                          |
| `kube`                                       | [models.KubeType](../models/kubetype.md)     | :heavy_minus_sign:                           | N/A                                          |
| `os`                                         | [models.HostOsType](../models/hostostype.md) | :heavy_minus_sign:                           | N/A                                          |