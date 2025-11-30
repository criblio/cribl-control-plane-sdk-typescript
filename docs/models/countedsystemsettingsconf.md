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
        rollbackEnabled: false,
        rollbackRetries: 8496.74,
        rollbackTimeout: 3039.97,
      },
      shutdown: {},
      sni: {},
      sockets: {
        directory: "/tmp",
      },
      support: {
        featureFlagOverrides: [
          {
            disabled: true,
            flagId: "<id>",
          },
        ],
      },
      system: {
        intercom: false,
        upgrade: "false",
      },
      tls: {
        defaultCipherList: "<value>",
        defaultEcdhCurve: "<value>",
        maxVersion: "<value>",
        minVersion: "<value>",
        rejectUnauthorized: true,
      },
      upgradeGroupSettings: {},
      upgradeSettings: {
        automaticUpgradeCheckPeriod: "<value>",
        disableAutomaticUpgrade: false,
        enableLegacyEdgeUpgrade: true,
        packageUrls: [
          {
            packageHashUrl: "https://torn-pigpen.com",
            packageUrl: "https://lasting-bump.com/",
          },
        ],
        upgradeSource: "<value>",
      },
      workers: {
        count: 7544.74,
        enableHeapSnapshots: false,
        loadThrottlePerc: 1817.1,
        memory: 9569.52,
        minimum: 4246.78,
        startupMaxConns: 4433.58,
        startupThrottleTimeout: 2178.79,
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