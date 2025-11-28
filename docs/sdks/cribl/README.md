# Cribl
(*system.settings.cribl*)

## Overview

### Available Operations

* [list](#list) - Get Cribl system settings
* [update](#update) - Update Cribl system settings

## list

Get Cribl system settings

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getSystemSettingsConf" method="get" path="/system/settings/conf" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.system.settings.cribl.list();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { systemSettingsCriblList } from "cribl-control-plane/funcs/systemSettingsCriblList.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await systemSettingsCriblList(criblControlPlane);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("systemSettingsCriblList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CountedSystemSettingsConf](../../models/countedsystemsettingsconf.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |

## update

Update Cribl system settings

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateSystemSettingsConf" method="patch" path="/system/settings/conf" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.system.settings.cribl.update({
    api: {
      baseUrl: "https://both-draw.com/",
      disableApiCache: true,
      disabled: false,
      headers: {

      },
      host: "meaty-spring.biz",
      idleSessionTTL: 89.27,
      listenOnPort: true,
      loginRateLimit: "<value>",
      port: 2424.38,
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
      workerRemoteAccess: true,
    },
    backups: {
      backupPersistence: "<value>",
      backupsDirectory: "<value>",
    },
    customLogo: {
      enabled: false,
      logoDescription: "<value>",
      logoImage: "<value>",
    },
    pii: {
      enablePiiDetection: false,
    },
    proxy: {
      useEnvVars: true,
    },
    rollback: {
      rollbackEnabled: false,
      rollbackRetries: 3174.73,
      rollbackTimeout: 1506.54,
    },
    shutdown: {
      drainTimeout: 3723.75,
    },
    sni: {
      disableSNIRouting: false,
    },
    sockets: {
      directory: "/usr/ports",
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
      quantity: 7915.07,
      retryCount: 4414.66,
      retryDelay: 4374.4,
    },
    upgradeSettings: {
      automaticUpgradeCheckPeriod: "<value>",
      disableAutomaticUpgrade: false,
      enableLegacyEdgeUpgrade: false,
      packageUrls: [
        {
          packageHashUrl: "https://thrifty-teammate.net/",
          packageUrl: "https://skeletal-dwell.info/",
        },
      ],
      upgradeSource: "<value>",
    },
    workers: {
      count: 2124.14,
      enableHeapSnapshots: true,
      loadThrottlePerc: 2538.71,
      memory: 20.53,
      minimum: 6157.83,
      startupMaxConns: 4731.29,
      startupThrottleTimeout: 1613.48,
      v8SingleThread: true,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { systemSettingsCriblUpdate } from "cribl-control-plane/funcs/systemSettingsCriblUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await systemSettingsCriblUpdate(criblControlPlane, {
    api: {
      baseUrl: "https://both-draw.com/",
      disableApiCache: true,
      disabled: false,
      headers: {
  
      },
      host: "meaty-spring.biz",
      idleSessionTTL: 89.27,
      listenOnPort: true,
      loginRateLimit: "<value>",
      port: 2424.38,
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
      workerRemoteAccess: true,
    },
    backups: {
      backupPersistence: "<value>",
      backupsDirectory: "<value>",
    },
    customLogo: {
      enabled: false,
      logoDescription: "<value>",
      logoImage: "<value>",
    },
    pii: {
      enablePiiDetection: false,
    },
    proxy: {
      useEnvVars: true,
    },
    rollback: {
      rollbackEnabled: false,
      rollbackRetries: 3174.73,
      rollbackTimeout: 1506.54,
    },
    shutdown: {
      drainTimeout: 3723.75,
    },
    sni: {
      disableSNIRouting: false,
    },
    sockets: {
      directory: "/usr/ports",
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
      quantity: 7915.07,
      retryCount: 4414.66,
      retryDelay: 4374.4,
    },
    upgradeSettings: {
      automaticUpgradeCheckPeriod: "<value>",
      disableAutomaticUpgrade: false,
      enableLegacyEdgeUpgrade: false,
      packageUrls: [
        {
          packageHashUrl: "https://thrifty-teammate.net/",
          packageUrl: "https://skeletal-dwell.info/",
        },
      ],
      upgradeSource: "<value>",
    },
    workers: {
      count: 2124.14,
      enableHeapSnapshots: true,
      loadThrottlePerc: 2538.71,
      memory: 20.53,
      minimum: 6157.83,
      startupMaxConns: 4731.29,
      startupThrottleTimeout: 1613.48,
      v8SingleThread: true,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("systemSettingsCriblUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.SystemSettingsConf](../../models/systemsettingsconf.md)                                                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CountedSystemSettings](../../models/countedsystemsettings.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |