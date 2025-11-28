# CountedSystemSettingsConf

## Example Usage

```typescript
import { CountedSystemSettingsConf } from "cribl-control-plane/models";

let value: CountedSystemSettingsConf = {
  count: 163585,
  items: [
    {
      api: {
        baseUrl: "https://dreary-pendant.name/",
        disableApiCache: false,
        disabled: false,
        headers: {
          "key": "<value>",
        },
        host: "clumsy-onset.biz",
        idleSessionTTL: 6135.82,
        listenOnPort: false,
        loginRateLimit: "<value>",
        port: 6369.14,
        protocol: "<value>",
        scripts: true,
        sensitiveFields: [
          "<value 1>",
        ],
        ssl: {
          caPath: "<value>",
          certPath: "<value>",
          disabled: false,
          passphrase: "<value>",
          privKeyPath: "<value>",
        },
        ssoRateLimit: "<value>",
        workerRemoteAccess: true,
      },
      backups: {
        backupPersistence: "<value>",
        backupsDirectory: "<value>",
      },
      customLogo: {
        enabled: true,
        logoDescription: "<value>",
        logoImage: "<value>",
      },
      pii: {
        enablePiiDetection: true,
      },
      proxy: {
        useEnvVars: true,
      },
      rollback: {
        rollbackEnabled: true,
        rollbackRetries: 443.59,
        rollbackTimeout: 2742.51,
      },
      shutdown: {
        drainTimeout: 732.91,
      },
      sni: {
        disableSNIRouting: true,
      },
      sockets: {
        directory: "/usr/X11R6",
      },
      support: {
        featureFlagOverrides: [
          {
            disabled: false,
            flagId: "<id>",
          },
        ],
      },
      system: {
        intercom: true,
        upgrade: "api",
      },
      tls: {
        defaultCipherList: "<value>",
        defaultEcdhCurve: "<value>",
        maxVersion: "<value>",
        minVersion: "<value>",
        rejectUnauthorized: false,
      },
      upgradeGroupSettings: {
        isRolling: false,
        quantity: 4087.94,
        retryCount: 6166.12,
        retryDelay: 17.98,
      },
      upgradeSettings: {
        automaticUpgradeCheckPeriod: "<value>",
        disableAutomaticUpgrade: true,
        enableLegacyEdgeUpgrade: true,
        packageUrls: [
          {
            packageHashUrl: "https://utilized-equal.org",
            packageUrl: "https://raw-bidet.com",
          },
        ],
        upgradeSource: "<value>",
      },
      workers: {
        count: 4564.1,
        enableHeapSnapshots: true,
        loadThrottlePerc: 223.14,
        memory: 390.13,
        minimum: 7544.74,
        startupMaxConns: 8006.89,
        startupThrottleTimeout: 1817.1,
        v8SingleThread: false,
      },
    },
  ],
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `count`                                                        | *number*                                                       | :heavy_minus_sign:                                             | number of items present in the items array                     |
| `items`                                                        | [models.SystemSettingsConf](../models/systemsettingsconf.md)[] | :heavy_minus_sign:                                             | N/A                                                            |