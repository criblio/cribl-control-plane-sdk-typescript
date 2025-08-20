# GetSystemSettingsConfResponse

a list of SystemSettingsConf objects

## Example Usage

```typescript
import { GetSystemSettingsConfResponse } from "cribl-control-plane/models/operations";

let value: GetSystemSettingsConfResponse = {
  count: 205985,
  items: [
    {
      api: {
        baseUrl: "https://innocent-bend.org",
        disableApiCache: false,
        disabled: true,
        headers: {},
        host: "grouchy-disposer.org",
        idleSessionTTL: 979.79,
        listenOnPort: true,
        loginRateLimit: "<value>",
        port: 1410.21,
        protocol: "<value>",
        scripts: true,
        sensitiveFields: [
          "<value 1>",
          "<value 2>",
        ],
        ssl: {
          caPath: "<value>",
          certPath: "<value>",
          disabled: true,
          passphrase: "<value>",
          privKeyPath: "<value>",
        },
        ssoRateLimit: "<value>",
        workerRemoteAccess: false,
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
        enablePiiDetection: false,
      },
      proxy: {
        useEnvVars: false,
      },
      rollback: {
        rollbackEnabled: true,
        rollbackRetries: 2884.35,
        rollbackTimeout: 5847.77,
      },
      shutdown: {
        drainTimeout: 7546.2,
      },
      sni: {
        disableSNIRouting: true,
      },
      sockets: {
        directory: "/usr/libdata",
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
        isRolling: true,
        quantity: 7484.9,
        retryCount: 6229.05,
        retryDelay: 3496.92,
      },
      upgradeSettings: {
        automaticUpgradeCheckPeriod: "<value>",
        disableAutomaticUpgrade: true,
        enableLegacyEdgeUpgrade: false,
        packageUrls: [
          {
            packageHashUrl: "https://exotic-lashes.net/",
            packageUrl: "https://hard-to-find-video.org",
          },
        ],
        upgradeSource: "<value>",
      },
      workers: {
        count: 739.35,
        enableHeapSnapshots: true,
        loadThrottlePerc: 620.37,
        memory: 6544.27,
        minimum: 4741.04,
        startupMaxConns: 1031.55,
        startupThrottleTimeout: 9848.9,
        v8SingleThread: true,
      },
    },
  ],
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `count`                                                           | *number*                                                          | :heavy_minus_sign:                                                | number of items present in the items array                        |
| `items`                                                           | [models.SystemSettingsConf](../../models/systemsettingsconf.md)[] | :heavy_minus_sign:                                                | N/A                                                               |