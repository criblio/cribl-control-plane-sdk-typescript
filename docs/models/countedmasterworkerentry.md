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
          tags: {
            "key": "<value>",
          },
          type: "<value>",
          zone: "<value>",
        },
        connIp: "<value>",
        cpus: 8719.43,
        cribl: {
          config: {
            featuresRev: "<value>",
            hbPeriodSeconds: 3679.01,
            logStreamEnv: "<value>",
            policyRev: "<value>",
            version: "<value>",
          },
          deploymentId: "<id>",
          disableSNIRouting: true,
          distMode: "outpost",
          edgeNodes: 674.85,
          group: "<value>",
          guid: "<id>",
          installType: "<value>",
          lookupVersions: {
            "key": {
              "key": "<value>",
              "key1": "<value>",
            },
            "key1": {
              "key": "<value>",
            },
            "key2": {
              "key": "<value>",
              "key1": "<value>",
              "key2": "<value>",
            },
          },
          master: {
            host: "boring-distinction.biz",
            port: 7248.18,
            servername: "<value>",
            tls: true,
          },
          pid: 3273.66,
          socksEnabled: true,
          startTime: 3411.24,
          tags: [],
          version: "<value>",
        },
        env: {
          "key": "<value>",
          "key1": "<value>",
          "key2": "<value>",
        },
        freeDiskSpace: 2048.24,
        hostOs: {
          addresses: [],
          enabled: true,
          id: "<id>",
          version: "<value>",
        },
        hostname: "french-ostrich.org",
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
        localTime: 1843.59,
        metadata: {
          aws: {
            enabled: false,
            instanceId: "<id>",
            region: "<value>",
            tags: {
              "key": "<value>",
              "key1": "<value>",
            },
            type: "<value>",
            zone: "<value>",
          },
          hostOs: {
            addresses: [
              "<value 1>",
              "<value 2>",
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
          enabled: false,
          id: "<id>",
          version: "<value>",
        },
        outpost: {
          guid: "<id>",
          host: "worldly-gerbil.com",
        },
        platform: "<value>",
        release: "<value>",
        totalDiskSpace: 2221.07,
        totalmem: 9967.14,
      },
      lastMetrics: {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
      lastMsgTime: 2041.42,
      metadata: {
        aws: {
          enabled: false,
          instanceId: "<id>",
          region: "<value>",
          tags: {
            "key": "<value>",
            "key1": "<value>",
          },
          type: "<value>",
          zone: "<value>",
        },
        hostOs: {
          addresses: [
            "<value 1>",
            "<value 2>",
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
        failed: 0,
        skipped: 3,
        state: 3,
        timestamp: 1569.79,
      },
      status: "<value>",
      type: "resp",
      workerProcesses: 9314.25,
      workers: {
        count: 5672.54,
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