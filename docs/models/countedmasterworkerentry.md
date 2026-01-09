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
        azure: {
          enabled: false,
          hostname: "hidden-hundred.net",
          instanceId: "<id>",
          name: "<value>",
          region: "<value>",
          resourceGroup: "<value>",
          subscriptionId: "<id>",
          tags: {
            "key": "<value>",
          },
          type: "<value>",
          zone: "<value>",
        },
        conn_ip: "<value>",
        cpus: 6874.61,
        cribl: {
          config: {
            featuresRev: "<value>",
            hbPeriodSeconds: 6830.62,
            logStreamEnv: "<value>",
            policyRev: "<value>",
            version: "<value>",
          },
          deploymentId: "<id>",
          disableSNIRouting: true,
          distMode: "outpost",
          edgeNodes: 809.07,
          group: "<value>",
          guid: "<id>",
          installType: "<value>",
          lookupVersions: {
            "key": {},
          },
          master: {
            host: "serene-corporation.biz",
            port: 3710.27,
            servername: "<value>",
            tls: true,
          },
          pid: 2440.94,
          socksEnabled: false,
          startTime: 2048.24,
          tags: [],
          version: "<value>",
        },
        env: {
          "key": "<value>",
        },
        freeDiskSpace: 2959.09,
        hostOs: {
          addresses: [
            "<value 1>",
            "<value 2>",
          ],
          enabled: false,
          id: "<id>",
          version: "<value>",
        },
        hostname: "jumbo-decongestant.biz",
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
        localTime: 5260.28,
        metadata: {
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
          azure: {
            enabled: false,
            hostname: "hidden-hundred.net",
            instanceId: "<id>",
            name: "<value>",
            region: "<value>",
            resourceGroup: "<value>",
            subscriptionId: "<id>",
            tags: {
              "key": "<value>",
            },
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
            "<value 3>",
          ],
        },
        outpost: {
          guid: "<id>",
          host: "honored-massage.org",
        },
        platform: "<value>",
        release: "<value>",
        totalDiskSpace: 9804.66,
        totalmem: 3742.53,
      },
      lastMetrics: {
        "key": "<value>",
      },
      lastMsgTime: 2221.07,
      metadata: {
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
        azure: {
          enabled: false,
          hostname: "hidden-hundred.net",
          instanceId: "<id>",
          name: "<value>",
          region: "<value>",
          resourceGroup: "<value>",
          subscriptionId: "<id>",
          tags: {
            "key": "<value>",
          },
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
        failed: 1,
        skipped: 0,
        state: 1,
        timestamp: 1259.2,
      },
      status: "<value>",
      type: "resp",
      workerProcesses: 7813.43,
      workers: {
        count: 1569.79,
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