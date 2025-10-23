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
          disableSNIRouting: false,
          distMode: "edge",
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
        freeDiskSpace: 6007.7,
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
        hostname: "interesting-cinder.info",
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
        localTime: 6997.29,
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
              "<value 3>",
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
          enabled: false,
          id: "<id>",
          version: "<value>",
        },
        platform: "<value>",
        release: "<value>",
        totalDiskSpace: 774.32,
        totalmem: 6947.29,
      },
      lastMetrics: {},
      lastMsgTime: 3802.11,
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
            "<value 3>",
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
        state: 3,
        timestamp: 7875.25,
      },
      status: "<value>",
      type: "resp",
      workerProcesses: 7274.85,
      workers: {
        count: 5559.98,
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