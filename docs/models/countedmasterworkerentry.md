# CountedMasterWorkerEntry

## Example Usage

```typescript
import { CountedMasterWorkerEntry } from "cribl-control-plane/models";

let value: CountedMasterWorkerEntry = {
  count: 981854,
  items: [
    {
      deployable: true,
      disconnected: false,
      firstMsgTime: 7764.97,
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
        cpus: 2011.18,
        cribl: {
          config: {
            featuresRev: "<value>",
            hbPeriodSeconds: 8719.43,
            logStreamEnv: "<value>",
            policyRev: "<value>",
            version: "<value>",
          },
          deploymentId: "<id>",
          disableSNIRouting: true,
          distMode: "master",
          edgeNodes: 8294.01,
          group: "<value>",
          guid: "<id>",
          installType: "<value>",
          lookupVersions: {},
          master: {
            host: "bitter-poetry.net",
            port: 4320.82,
            servername: "<value>",
            tls: false,
          },
          pid: 809.07,
          socksEnabled: true,
          startTime: 1948.63,
          tags: [
            "<value 1>",
            "<value 2>",
          ],
          version: "<value>",
        },
        env: {},
        freeDiskSpace: 3273.66,
        hostOs: {
          addresses: [
            "<value 1>",
          ],
          enabled: true,
          id: "<id>",
          version: "<value>",
        },
        hostname: "exhausted-trash.biz",
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
        localTime: 2959.09,
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
            "<value 2>",
          ],
          enabled: true,
          id: "<id>",
          version: "<value>",
        },
        outpost: {
          guid: "<id>",
          host: "striking-skyscraper.org",
        },
        platform: "<value>",
        release: "<value>",
        totalDiskSpace: 3720.9,
        totalmem: 5566.44,
      },
      lastMetrics: {},
      lastMsgTime: 9327.59,
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
          addresses: [],
          enabled: false,
          id: "<id>",
          version: "<value>",
        },
      },
      nodeUpgradeStatus: {
        active: 2,
        failed: 0,
        skipped: 0,
        state: 0,
        timestamp: 9967.14,
      },
      status: "<value>",
      type: "resp",
      workerProcesses: 2041.42,
      workers: {
        count: 3649.27,
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