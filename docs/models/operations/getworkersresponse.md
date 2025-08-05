# GetWorkersResponse

a list of MasterWorkerEntry objects

## Example Usage

```typescript
import { GetWorkersResponse } from "cribl-control-plane/models/operations";

let value: GetWorkersResponse = {
  count: 298260,
  items: [
    {
      deployable: false,
      disconnected: true,
      firstMsgTime: 1171.84,
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
        cpus: 2831,
        cribl: {
          config: {
            featuresRev: "<value>",
            hbPeriodSeconds: 3120.89,
            logStreamEnv: "<value>",
            policyRev: "<value>",
            version: "<value>",
          },
          deploymentId: "<id>",
          distMode: "master",
          edgeNodes: 2993.17,
          group: "<value>",
          guid: "<id>",
          installType: "<value>",
          lookupVersions: {},
          master: {
            host: "winding-cosset.name",
            port: 4082.58,
            servername: "<value>",
            tls: true,
          },
          pid: 4514.09,
          startTime: 8913.2,
          tags: [
            "<value 1>",
            "<value 2>",
            "<value 3>",
          ],
          version: "<value>",
        },
        freeDiskSpace: 9757.86,
        hostOs: {
          addresses: [],
          enabled: false,
          id: "<id>",
          version: "<value>",
        },
        hostname: "unsung-grandpa.org",
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
        localTime: 7816.68,
        metadata: {
          aws: {
            enabled: true,
            region: "<value>",
            tags: {},
            type: "<value>",
            zone: "<value>",
          },
          hostOs: {
            addresses: [],
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
            "<value 2>",
          ],
          enabled: true,
          id: "<id>",
          version: "<value>",
        },
        platform: "<value>",
        release: "<value>",
        totalDiskSpace: 318.92,
        totalmem: 6890.64,
      },
      lastMetrics: {},
      lastMsgTime: 4260.43,
      metadata: {
        aws: {
          enabled: true,
          region: "<value>",
          tags: {},
          type: "<value>",
          zone: "<value>",
        },
        hostOs: {
          addresses: [],
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
      nodeUpgradeStatus: {
        active: 0,
        failed: 0,
        skipped: 2,
        state: 1,
        timestamp: 6750.11,
      },
      status: "<value>",
      type: "resp",
      workerProcesses: 1706.83,
      workers: {
        count: 6255.21,
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