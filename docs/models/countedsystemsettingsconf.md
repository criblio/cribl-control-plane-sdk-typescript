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
        rollbackRetries: 3163.15,
        rollbackTimeout: 6964.89,
      },
      shutdown: {
        drainTimeout: 8496.74,
      },
      sni: {
        disableSNIRouting: false,
      },
      sockets: {
        directory: "/usr/libdata",
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
        rejectUnauthorized: true,
      },
      upgradeGroupSettings: {
        isRolling: false,
        quantity: 9214.76,
        retryCount: 2981.83,
        retryDelay: 8349.69,
      },
      upgradeSettings: {
        automaticUpgradeCheckPeriod: "<value>",
        disableAutomaticUpgrade: false,
        enableLegacyEdgeUpgrade: false,
        packageUrls: [
          {
            packageHashUrl: "https://best-import.com/",
            packageUrl: "https://appropriate-responsibility.net/",
          },
        ],
        upgradeSource: "<value>",
      },
      workers: {
        count: 1817.1,
        enableHeapSnapshots: false,
        loadThrottlePerc: 4246.78,
        memory: 4433.58,
        minimum: 2178.79,
        startupMaxConns: 3611.13,
        startupThrottleTimeout: 2818.79,
        v8SingleThread: true,
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