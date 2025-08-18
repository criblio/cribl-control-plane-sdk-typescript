# NodeProvidedInfo

## Example Usage

```typescript
import { NodeProvidedInfo } from "cribl-control-plane/models";

let value: NodeProvidedInfo = {
  architecture: "<value>",
  aws: {
    enabled: true,
    region: "<value>",
    tags: {},
    type: "<value>",
    zone: "<value>",
  },
  connIp: "<value>",
  cpus: 5118.26,
  cribl: {
    config: {
      featuresRev: "<value>",
      hbPeriodSeconds: 3261.24,
      logStreamEnv: "<value>",
      policyRev: "<value>",
      version: "<value>",
    },
    deploymentId: "<id>",
    distMode: "edge",
    edgeNodes: 6455.76,
    group: "<value>",
    guid: "<id>",
    installType: "<value>",
    lookupVersions: {},
    master: {
      host: "petty-entry.com",
      port: 3592.48,
      servername: "<value>",
      tls: false,
    },
    pid: 2492.02,
    startTime: 5354.01,
    tags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    version: "<value>",
  },
  freeDiskSpace: 6220.45,
  hostOs: {
    addresses: [],
    enabled: false,
    id: "<id>",
    version: "<value>",
  },
  hostname: "round-squid.org",
  isSaasWorker: true,
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
  localTime: 1451.52,
  metadata: {
    aws: {
      enabled: false,
      region: "<value>",
      tags: {},
      type: "<value>",
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
      enabled: true,
      id: "<id>",
      version: "<value>",
    },
  },
  node: "<value>",
  os: {
    addresses: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    enabled: true,
    id: "<id>",
    version: "<value>",
  },
  platform: "<value>",
  release: "<value>",
  totalDiskSpace: 5590.59,
  totalmem: 5398.99,
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `architecture`                                                       | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `aws`                                                                | [models.NodeProvidedInfoAws](../models/nodeprovidedinfoaws.md)       | :heavy_minus_sign:                                                   | N/A                                                                  |
| `connIp`                                                             | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `cpus`                                                               | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `cribl`                                                              | [models.HBCriblInfo](../models/hbcriblinfo.md)                       | :heavy_check_mark:                                                   | N/A                                                                  |
| `freeDiskSpace`                                                      | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `hostOs`                                                             | [models.NodeProvidedInfoHostOs](../models/nodeprovidedinfohostos.md) | :heavy_minus_sign:                                                   | N/A                                                                  |
| `hostname`                                                           | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `isSaasWorker`                                                       | *boolean*                                                            | :heavy_minus_sign:                                                   | N/A                                                                  |
| `kube`                                                               | [models.NodeProvidedInfoKube](../models/nodeprovidedinfokube.md)     | :heavy_minus_sign:                                                   | N/A                                                                  |
| `localTime`                                                          | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `metadata`                                                           | [models.HeartbeatMetadata](../models/heartbeatmetadata.md)           | :heavy_minus_sign:                                                   | N/A                                                                  |
| `node`                                                               | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `os`                                                                 | *models.Os*                                                          | :heavy_minus_sign:                                                   | N/A                                                                  |
| `platform`                                                           | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `release`                                                            | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `totalDiskSpace`                                                     | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `totalmem`                                                           | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |