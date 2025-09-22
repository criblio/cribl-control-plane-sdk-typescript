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
          instanceId: "<id>",
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
          startTime: 8148.45,
          tags: [],
          version: "<value>",
        },
        freeDiskSpace: 1669.24,
        hostOs: {
          addresses: [
            "<value 1>",
            "<value 2>",
          ],
          enabled: false,
          id: "<id>",
          version: "<value>",
        },
        hostname: "colorful-horde.com",
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
        localTime: 7937.45,
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
          ],
          enabled: false,
          id: "<id>",
          version: "<value>",
        },
        platform: "<value>",
        release: "<value>",
        totalDiskSpace: 9688.14,
        totalmem: 774.32,
      },
      lastMetrics: {},
      lastMsgTime: 6947.29,
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
          addresses: [],
          enabled: false,
          id: "<id>",
          version: "<value>",
        },
      },
      nodeUpgradeStatus: {
        active: 1,
        failed: 0,
        skipped: 2,
        state: 1,
        timestamp: 7677.66,
      },
      status: "<value>",
      type: "resp",
      workerProcesses: 9675.39,
      workers: {
        count: 7274.85,
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