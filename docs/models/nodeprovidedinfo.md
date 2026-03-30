# NodeProvidedInfo

## Example Usage

```typescript
import { NodeProvidedInfo } from "cribl-control-plane/models";

let value: NodeProvidedInfo = {
  architecture: "<value>",
  cpus: 5118.26,
  cribl: {
    config: {},
    distMode: "outpost",
    group: "<value>",
    guid: "<id>",
    startTime: 7161.68,
    tags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  env: {
    "key": "<value>",
    "key1": "<value>",
  },
  hostname: "round-squid.org",
  node: "<value>",
  platform: "<value>",
  release: "<value>",
  totalmem: 1568.59,
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