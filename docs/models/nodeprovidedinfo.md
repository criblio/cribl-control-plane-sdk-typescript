# NodeProvidedInfo

## Example Usage

```typescript
import { NodeProvidedInfo } from "cribl-control-plane/models";

let value: NodeProvidedInfo = {
  architecture: "<value>",
  aws: {
    enabled: false,
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
      hbPeriodSeconds: 2537.5,
      logStreamEnv: "<value>",
      policyRev: "<value>",
      version: "<value>",
    },
    deploymentId: "<id>",
    disableSNIRouting: false,
    distMode: "search-supervisor",
    edgeNodes: 8560.35,
    group: "<value>",
    guid: "<id>",
    installType: "<value>",
    lookupVersions: {},
    master: {
      host: "cultivated-thread.net",
      port: 7220.5,
      servername: "<value>",
      tls: false,
    },
    pid: 4540.76,
    socksEnabled: false,
    startTime: 9276.6,
    tags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
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
  localTime: 813.42,
  metadata: {
    aws: {
      enabled: true,
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
      enabled: false,
      id: "<id>",
      version: "<value>",
    },
  },
  node: "<value>",
  os: {
    addresses: [
      "<value 1>",
    ],
  },
  outpost: {
    guid: "<id>",
    host: "definitive-following.info",
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