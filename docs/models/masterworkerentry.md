# MasterWorkerEntry

## Example Usage

```typescript
import { MasterWorkerEntry } from "cribl-control-plane/models";

let value: MasterWorkerEntry = {
  deployable: true,
  disconnected: false,
  firstMsgTime: 7209.39,
  group: "<value>",
  id: "<id>",
  info: {
    architecture: "<value>",
    aws: {
      enabled: true,
      instanceId: "<id>",
      region: "<value>",
      tags: {},
      type: "<value>",
      zone: "<value>",
    },
    conn_ip: "<value>",
    cpus: 7967.06,
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
    freeDiskSpace: 8973.47,
    hostOs: {
      addresses: [],
      enabled: true,
      id: "<id>",
      version: "<value>",
    },
    hostname: "criminal-handle.info",
    isSaasWorker: false,
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
    localTime: 5361.11,
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
    totalDiskSpace: 1468.28,
    totalmem: 5219.98,
  },
  lastMetrics: {},
  lastMsgTime: 7161.68,
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
  nodeUpgradeStatus: {
    active: 2,
    failed: 1,
    skipped: 3,
    state: 2,
    timestamp: 5559.98,
  },
  status: "<value>",
  type: "resp",
  workerProcesses: 3638.57,
  workers: {
    count: 5261.58,
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `deployable`                                                             | *boolean*                                                                | :heavy_minus_sign:                                                       | N/A                                                                      |
| `disconnected`                                                           | *boolean*                                                                | :heavy_minus_sign:                                                       | N/A                                                                      |
| `firstMsgTime`                                                           | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `group`                                                                  | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `info`                                                                   | [models.NodeProvidedInfo](../models/nodeprovidedinfo.md)                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `lastMetrics`                                                            | [models.LastMetrics](../models/lastmetrics.md)                           | :heavy_minus_sign:                                                       | N/A                                                                      |
| `lastMsgTime`                                                            | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `metadata`                                                               | [models.HeartbeatMetadata](../models/heartbeatmetadata.md)               | :heavy_minus_sign:                                                       | N/A                                                                      |
| `nodeUpgradeStatus`                                                      | [models.NodeUpgradeStatus](../models/nodeupgradestatus.md)               | :heavy_minus_sign:                                                       | N/A                                                                      |
| `status`                                                                 | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `type`                                                                   | [models.MasterWorkerEntryType](../models/masterworkerentrytype.md)       | :heavy_minus_sign:                                                       | N/A                                                                      |
| `workerProcesses`                                                        | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `workers`                                                                | [models.MasterWorkerEntryWorkers](../models/masterworkerentryworkers.md) | :heavy_minus_sign:                                                       | N/A                                                                      |