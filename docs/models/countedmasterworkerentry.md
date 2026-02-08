# CountedMasterWorkerEntry

## Example Usage

```typescript
import { CountedMasterWorkerEntry } from "cribl-control-plane/models";

let value: CountedMasterWorkerEntry = {
  count: 981854,
  items: [
    {
      connectionProtocol: "tcp",
      deployable: false,
      disconnected: false,
      firstMsgTime: 8180.31,
      group: "<value>",
      id: "<id>",
      info: {
        architecture: "<value>",
        aws: {
          enabled: true,
          instanceId: "<id>",
          region: "<value>",
          tags: {
            "key": "<value>",
            "key1": "<value>",
            "key2": "<value>",
          },
          type: "<value>",
          zone: "<value>",
        },
        azure: {
          enabled: true,
          hostname: "jittery-someplace.com",
          instanceId: "<id>",
          name: "<value>",
          region: "<value>",
          resourceGroup: "<value>",
          subscriptionId: "<id>",
          tags: {
            "key": "<value>",
            "key1": "<value>",
            "key2": "<value>",
          },
          type: "<value>",
          vmId: "<id>",
          zone: "<value>",
        },
        conn_ip: "<value>",
        cpus: 6830.62,
        cribl: {
          config: {
            featuresRev: "<value>",
            hbPeriodSeconds: 4320.82,
            logStreamEnv: "<value>",
            policyRev: "<value>",
            version: "<value>",
          },
          deploymentId: "<id>",
          disableSNIRouting: false,
          distMode: "single",
          edgeNodes: 2603.28,
          group: "<value>",
          guid: "<id>",
          installType: "<value>",
          lookupVersions: {
            "key": {
              "key": "<value>",
              "key1": "<value>",
            },
          },
          master: {
            host: "diligent-festival.info",
            port: 3411.24,
            servername: "<value>",
            tls: true,
          },
          pid: 9285.54,
          socksEnabled: true,
          startTime: 1526.71,
          tags: [
            "<value 1>",
          ],
          version: "<value>",
        },
        env: {
          "key": "<value>",
        },
        freeDiskSpace: 6285.73,
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
        hostname: "emotional-contrail.name",
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
        localTime: 268.82,
        metadata: {
          aws: {
            enabled: true,
            instanceId: "<id>",
            region: "<value>",
            tags: {
              "key": "<value>",
              "key1": "<value>",
              "key2": "<value>",
            },
            type: "<value>",
            zone: "<value>",
          },
          azure: {
            enabled: true,
            hostname: "jittery-someplace.com",
            instanceId: "<id>",
            name: "<value>",
            region: "<value>",
            resourceGroup: "<value>",
            subscriptionId: "<id>",
            tags: {
              "key": "<value>",
              "key1": "<value>",
              "key2": "<value>",
            },
            type: "<value>",
            vmId: "<id>",
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
        },
        outpost: {
          guid: "<id>",
          host: "nippy-tribe.org",
        },
        platform: "<value>",
        release: "<value>",
        totalDiskSpace: 3742.53,
        totalmem: 1410.02,
      },
      lastMetrics: {
        "key": "<value>",
      },
      lastMsgTime: 9967.14,
      metadata: {
        aws: {
          enabled: true,
          instanceId: "<id>",
          region: "<value>",
          tags: {
            "key": "<value>",
            "key1": "<value>",
            "key2": "<value>",
          },
          type: "<value>",
          zone: "<value>",
        },
        azure: {
          enabled: true,
          hostname: "jittery-someplace.com",
          instanceId: "<id>",
          name: "<value>",
          region: "<value>",
          resourceGroup: "<value>",
          subscriptionId: "<id>",
          tags: {
            "key": "<value>",
            "key1": "<value>",
            "key2": "<value>",
          },
          type: "<value>",
          vmId: "<id>",
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
        active: 2,
        failed: 0,
        skipped: 1,
        state: 0,
        timestamp: 9226.83,
      },
      status: "<value>",
      type: "resp",
      workerProcesses: 1569.79,
      workers: {
        count: 7865.45,
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