# HeartbeatMetadata

## Example Usage

```typescript
import { HeartbeatMetadata } from "cribl-control-plane/models";

let value: HeartbeatMetadata = {
  aws: {
    enabled: true,
    region: "<value>",
    tags: {},
    type: "<value>",
    zone: "<value>",
  },
  hostOs: {
    addresses: [],
    enabled: true,
    id: "<id>",
    version: "<value>",
  },
  kube: {
    enabled: false,
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
      "<value 3>",
    ],
    enabled: false,
    id: "<id>",
    version: "<value>",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `aws`                                                                  | [models.HeartbeatMetadataAws](../models/heartbeatmetadataaws.md)       | :heavy_minus_sign:                                                     | N/A                                                                    |
| `hostOs`                                                               | [models.HeartbeatMetadataHostOs](../models/heartbeatmetadatahostos.md) | :heavy_minus_sign:                                                     | N/A                                                                    |
| `kube`                                                                 | [models.HeartbeatMetadataKube](../models/heartbeatmetadatakube.md)     | :heavy_minus_sign:                                                     | N/A                                                                    |
| `os`                                                                   | [models.HeartbeatMetadataOs](../models/heartbeatmetadataos.md)         | :heavy_minus_sign:                                                     | N/A                                                                    |