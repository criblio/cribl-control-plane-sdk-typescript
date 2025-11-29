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
      upgradeSettings: {},
      workers: {
        count: 8349.69,
        enableHeapSnapshots: false,
        loadThrottlePerc: 6678.5,
        memory: 782.67,
        minimum: 638.33,
        startupMaxConns: 4564.1,
        startupThrottleTimeout: 1068.48,
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