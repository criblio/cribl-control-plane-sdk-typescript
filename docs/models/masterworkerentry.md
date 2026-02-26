# MasterWorkerEntry

## Example Usage

```typescript
import { MasterWorkerEntry } from "cribl-control-plane/models";

let value: MasterWorkerEntry = {
  firstMsgTime: 1939.82,
  group: "<value>",
  id: "<id>",
  info: {
    architecture: "<value>",
    cpus: 9819.35,
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
    },
    hostname: "messy-litter.com",
    node: "<value>",
    platform: "<value>",
    release: "<value>",
    totalmem: 6281.42,
  },
  lastMsgTime: 845.06,
  workerProcesses: 6128.94,
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `connectionProtocol`                                                     | [models.ConnectionProtocol](../models/connectionprotocol.md)             | :heavy_minus_sign:                                                       | N/A                                                                      |
| `deployable`                                                             | *boolean*                                                                | :heavy_minus_sign:                                                       | N/A                                                                      |
| `disconnected`                                                           | *boolean*                                                                | :heavy_minus_sign:                                                       | N/A                                                                      |
| `firstMsgTime`                                                           | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `group`                                                                  | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `info`                                                                   | [models.NodeProvidedInfo](../models/nodeprovidedinfo.md)                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `lastMetrics`                                                            | Record<string, *any*>                                                    | :heavy_minus_sign:                                                       | N/A                                                                      |
| `lastMsgTime`                                                            | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `metadata`                                                               | [models.HeartbeatMetadata](../models/heartbeatmetadata.md)               | :heavy_minus_sign:                                                       | N/A                                                                      |
| `nodeUpgradeStatus`                                                      | [models.NodeUpgradeStatus](../models/nodeupgradestatus.md)               | :heavy_minus_sign:                                                       | N/A                                                                      |
| `status`                                                                 | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `type`                                                                   | [models.MasterWorkerEntryType](../models/masterworkerentrytype.md)       | :heavy_minus_sign:                                                       | N/A                                                                      |
| `workerProcesses`                                                        | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `workers`                                                                | [models.MasterWorkerEntryWorkers](../models/masterworkerentryworkers.md) | :heavy_minus_sign:                                                       | N/A                                                                      |