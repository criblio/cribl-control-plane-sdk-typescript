# NodeProvidedInfo

## Example Usage

```typescript
import { NodeProvidedInfo } from "cribl-control-plane/models";

let value: NodeProvidedInfo = {
  architecture: "<value>",
  cpus: 5118.26,
  cribl: {
    config: {},
    distMode: "managed-edge",
    group: "<value>",
    guid: "<id>",
    startTime: 7161.68,
    tags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  freeDiskSpace: 6220.45,
  hostname: "round-squid.org",
  node: "<value>",
  platform: "<value>",
  release: "<value>",
  totalDiskSpace: 1568.59,
  totalmem: 1451.52,
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