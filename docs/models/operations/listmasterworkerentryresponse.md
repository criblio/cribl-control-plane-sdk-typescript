# ListMasterWorkerEntryResponse

a list of MasterWorkerEntry objects

## Example Usage

```typescript
import { ListMasterWorkerEntryResponse } from "cribl-control-plane/models/operations";

let value: ListMasterWorkerEntryResponse = {
  count: 896108,
  items: [
    {
      deployable: false,
      disconnected: false,
      firstMsgTime: 5213.47,
      group: "<value>",
      id: "<id>",
      info: {
        architecture: "<value>",
        aws: {
          enabled: true,
          region: "<value>",
          tags: {},
          type: "<value>",
          zone: "<value>",
        },
        connIp: "<value>",
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
        freeDiskSpace: 2370.83,
        hostOs: {
          addresses: [],
          enabled: false,
          id: "<id>",
          version: "<value>",
        },
        hostname: "unpleasant-castanet.info",
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
        localTime: 4651.25,
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
          addresses: [],
        },
        platform: "<value>",
        release: "<value>",
        totalDiskSpace: 2579.09,
        totalmem: 9063.76,
      },
      lastMetrics: {},
      lastMsgTime: 9688.14,
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
      nodeUpgradeStatus: {
        active: 0,
        failed: 1,
        skipped: 1,
        state: 0,
        timestamp: 5219.98,
      },
      status: "<value>",
      type: "req",
      workerProcesses: 7677.66,
      workers: {
        count: 7875.25,
      },
    },
  ],
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `count`                                                         | *number*                                                        | :heavy_minus_sign:                                              | number of items present in the items array                      |
| `items`                                                         | [models.MasterWorkerEntry](../../models/masterworkerentry.md)[] | :heavy_minus_sign:                                              | N/A                                                             |