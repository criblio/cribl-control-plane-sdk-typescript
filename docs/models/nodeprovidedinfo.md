# NodeProvidedInfo

## Example Usage

```typescript
import { NodeProvidedInfo } from "cribl-control-plane/models";

let value: NodeProvidedInfo = {
  architecture: "<value>",
  aws: {
    enabled: true,
    instanceId: "<id>",
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
    disableSNIRouting: false,
    distMode: "managed-edge",
    edgeNodes: 6064.13,
    group: "<value>",
    guid: "<id>",
    installType: "<value>",
    lookupVersions: {},
    master: {
      host: "frequent-bell.info",
      port: 9100.63,
      servername: "<value>",
      tls: true,
    },
    pid: 5354.01,
    socksEnabled: false,
    startTime: 2370.83,
    tags: [],
    version: "<value>",
  },
  env: {
    "key": "<value>",
    "key1": "<value>",
  },
  freeDiskSpace: 6937.14,
  hostOs: {
    addresses: [],
    enabled: true,
    id: "<id>",
    version: "<value>",
  },
  hostname: "tender-thigh.com",
  isSaasWorker: true,
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
  localTime: 813.42,
  metadata: {
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
        "<value 2>",
        "<value 3>",
      ],
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
      addresses: [],
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
  },
  outpost: {
    guid: "<id>",
    host: "bogus-populist.info",
  },
  platform: "<value>",
  release: "<value>",
  totalDiskSpace: 4145.33,
  totalmem: 5590.59,
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
| `env`                                                                | Record<string, *string*>                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `freeDiskSpace`                                                      | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `hostOs`                                                             | [models.NodeProvidedInfoHostOs](../models/nodeprovidedinfohostos.md) | :heavy_minus_sign:                                                   | N/A                                                                  |
| `hostname`                                                           | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `isSaasWorker`                                                       | *boolean*                                                            | :heavy_minus_sign:                                                   | N/A                                                                  |
| `kube`                                                               | [models.NodeProvidedInfoKube](../models/nodeprovidedinfokube.md)     | :heavy_minus_sign:                                                   | N/A                                                                  |
| `localTime`                                                          | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `metadata`                                                           | [models.HeartbeatMetadata](../models/heartbeatmetadata.md)           | :heavy_minus_sign:                                                   | N/A                                                                  |
| `node`                                                               | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `os`                                                                 | *models.Os*                                                          | :heavy_minus_sign:                                                   | N/A                                                                  |
| `outpost`                                                            | [models.OutpostNodeInfo](../models/outpostnodeinfo.md)               | :heavy_minus_sign:                                                   | N/A                                                                  |
| `platform`                                                           | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `release`                                                            | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `totalDiskSpace`                                                     | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `totalmem`                                                           | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |