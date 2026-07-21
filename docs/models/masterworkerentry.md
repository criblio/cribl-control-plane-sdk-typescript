# MasterWorkerEntry

Worker or Edge Node entry returned by Distributed Management worker and outpost endpoints.

## Example Usage

```typescript
import { MasterWorkerEntry } from "cribl-control-plane/models";

let value: MasterWorkerEntry = {
  firstMsgTime: 193982,
  group: "<value>",
  id: "<id>",
  info: {
    architecture: "x64",
    cpus: 576212,
    cribl: {
      config: {},
      distMode: "worker",
      group: "<value>",
      guid: "<id>",
      startTime: 136388,
    },
    env: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    hostname: "shameless-skyline.org",
    node: "<value>",
    platform: "linux",
    release: "<value>",
    totalmem: 774740,
  },
  lastMsgTime: 981935,
  workerProcesses: 720939,
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `connectionProtocol`                                                                                 | [models.ConnectionProtocol](../models/connectionprotocol.md)                                         | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `deployable`                                                                                         | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | If <code>true</code>, the node can receive configuration deployments. Otherwise, <code>false</code>. |
| `disconnected`                                                                                       | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | If <code>true</code>, the node is disconnected from the Leader. Otherwise, <code>false</code>.       |
| `firstMsgTime`                                                                                       | *number*                                                                                             | :heavy_check_mark:                                                                                   | Timestamp (in Unix time) when the Leader first received a message from the node.                     |
| `group`                                                                                              | *string*                                                                                             | :heavy_check_mark:                                                                                   | The <code>id</code> of the Worker Group, Edge Fleet, or Outpost Group that contains the node.        |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | Unique identifier for the node.                                                                      |
| `info`                                                                                               | [models.NodeProvidedInfo](../models/nodeprovidedinfo.md)                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `lastMetrics`                                                                                        | Record<string, *any*>                                                                                | :heavy_minus_sign:                                                                                   | Latest total, input, and destination metrics cached for UI display.                                  |
| `lastMsgTime`                                                                                        | *number*                                                                                             | :heavy_check_mark:                                                                                   | Timestamp (in Unix time) when the Leader last received a message from the node.                      |
| `metadata`                                                                                           | [models.HeartbeatMetadata](../models/heartbeatmetadata.md)                                           | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `nodeUpgradeStatus`                                                                                  | [models.NodeUpgradeStatus](../models/nodeupgradestatus.md)                                           | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `offlineDurationMs`                                                                                  | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Maximum configured ephemeral offline duration, in milliseconds (base + jitter cap).                  |
| `provisioningTokenId`                                                                                | *string*                                                                                             | :heavy_minus_sign:                                                                                   | The <code>id</code> of the provisioning token used to authenticate the node, if used.                |
| `status`                                                                                             | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Health status reported for the node.                                                                 |
| `type`                                                                                               | [models.MasterWorkerEntryType](../models/masterworkerentrytype.md)                                   | :heavy_minus_sign:                                                                                   | RPC message type reported by the node.                                                               |
| `workerProcesses`                                                                                    | *number*                                                                                             | :heavy_check_mark:                                                                                   | Number of Worker Processes running on the node.                                                      |
| `workers`                                                                                            | [models.MasterWorkerProcesses](../models/masterworkerprocesses.md)                                   | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |