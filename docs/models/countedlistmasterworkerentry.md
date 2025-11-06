# CountedListMasterWorkerEntry

## Example Usage

```typescript
import { CountedListMasterWorkerEntry } from "cribl-control-plane/models";

let value: CountedListMasterWorkerEntry = {
  count: 790730,
  items: [
    {
      deployable: true,
      disconnected: true,
      firstMsgTime: 1688.01,
      group: "<value>",
      id: "<id>",
      info: {
        architecture: "<value>",
        aws: {
          enabled: false,
          instanceId: "<id>",
          region: "<value>",
          tags: {},
          type: "<value>",
          zone: "<value>",
        },
        connIp: "<value>",
        cpus: 4845.54,
        cribl: {
          config: {
            featuresRev: "<value>",
            hbPeriodSeconds: 2537.5,
            logStreamEnv: "<value>",
            policyRev: "<value>",
            version: "<value>",
          },
          deploymentId: "<id>",
          disableSNIRouting: false,
          distMode: "search-supervisor",
          edgeNodes: 8560.35,
          group: "<value>",
          guid: "<id>",
          installType: "<value>",
          lookupVersions: {},
          master: {
            host: "cultivated-thread.net",
            port: 7220.5,
            servername: "<value>",
            tls: false,
          },
          pid: 4540.76,
          socksEnabled: false,
          startTime: 9276.6,
          tags: [
            "<value 1>",
            "<value 2>",
            "<value 3>",
          ],
          version: "<value>",
        },
        env: {
          "key": "<value>",
        },
        freeDiskSpace: 7449,
        hostOs: {
          addresses: [],
          enabled: true,
          id: "<id>",
          version: "<value>",
        },
        hostname: "noted-electronics.info",
        isSaasWorker: false,
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
        localTime: 5998.23,
        metadata: {
          aws: {
            enabled: true,
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
          ],
          enabled: true,
          id: "<id>",
          version: "<value>",
        },
        outpost: {
          guid: "<id>",
          host: "definitive-following.info",
        },
        platform: "<value>",
        release: "<value>",
        totalDiskSpace: 7290.48,
        totalmem: 9089.32,
      },
      lastMetrics: {},
      lastMsgTime: 7236.07,
      metadata: {
        aws: {
          enabled: true,
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
        active: 1,
        failed: 1,
        skipped: 1,
        state: 1,
        timestamp: 4316.33,
      },
      status: "<value>",
      type: "info",
      workerProcesses: 4477.36,
      workers: {
        count: 3486.11,
      },
    },
  ],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `count`                                                      | *number*                                                     | :heavy_minus_sign:                                           | number of items present in the items array                   |
| `items`                                                      | [models.MasterWorkerEntry](../models/masterworkerentry.md)[] | :heavy_minus_sign:                                           | N/A                                                          |