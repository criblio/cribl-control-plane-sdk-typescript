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
  conn_ip: "<value>",
  cpus: 5118.26,
  cribl: {
    config: {
      featuresRev: "<value>",
      hbPeriodSeconds: 6830.62,
      logStreamEnv: "<value>",
      policyRev: "<value>",
      version: "<value>",
    },
    deploymentId: "<id>",
    disableSNIRouting: true,
    distMode: "outpost",
    edgeNodes: 809.07,
    group: "<value>",
    guid: "<id>",
    installType: "<value>",
    lookupVersions: {
      "key": {},
    },
    master: {
      host: "serene-corporation.biz",
      port: 3710.27,
      servername: "<value>",
      tls: true,
    },
    pid: 2440.94,
    socksEnabled: false,
    startTime: 2048.24,
    tags: [],
    version: "<value>",
  },
  env: {
    "key": "<value>",
    "key1": "<value>",
  },
  freeDiskSpace: 6937.14,
  hostOs: {
    addresses: [
      "<value 1>",
      "<value 2>",
    ],
    enabled: false,
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
    host: "honored-massage.org",
  },
  platform: "<value>",
  release: "<value>",
  totalDiskSpace: 4145.33,
  totalmem: 5590.59,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `architecture`                                                                 | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `aws`                                                                          | [models.AwsTypeHeartbeatMetadata](../models/awstypeheartbeatmetadata.md)       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `azure`                                                                        | [models.AzureTypeHeartbeatMetadata](../models/azuretypeheartbeatmetadata.md)   | :heavy_minus_sign:                                                             | N/A                                                                            |
| `connIp`                                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `cpus`                                                                         | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `cribl`                                                                        | [models.HBCriblInfo](../models/hbcriblinfo.md)                                 | :heavy_check_mark:                                                             | N/A                                                                            |
| `env`                                                                          | Record<string, *string*>                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `freeDiskSpace`                                                                | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `hostOs`                                                                       | [models.HostOsTypeHeartbeatMetadata](../models/hostostypeheartbeatmetadata.md) | :heavy_minus_sign:                                                             | N/A                                                                            |
| `hostname`                                                                     | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `isSaasWorker`                                                                 | *boolean*                                                                      | :heavy_minus_sign:                                                             | N/A                                                                            |
| `kube`                                                                         | [models.KubeTypeHeartbeatMetadata](../models/kubetypeheartbeatmetadata.md)     | :heavy_minus_sign:                                                             | N/A                                                                            |
| `localTime`                                                                    | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `metadata`                                                                     | [models.HeartbeatMetadata](../models/heartbeatmetadata.md)                     | :heavy_minus_sign:                                                             | N/A                                                                            |
| `node`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `os`                                                                           | *models.OsUnion*                                                               | :heavy_minus_sign:                                                             | N/A                                                                            |
| `outpost`                                                                      | [models.OutpostNodeInfo](../models/outpostnodeinfo.md)                         | :heavy_minus_sign:                                                             | N/A                                                                            |
| `platform`                                                                     | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `release`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `totalDiskSpace`                                                               | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `totalmem`                                                                     | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |