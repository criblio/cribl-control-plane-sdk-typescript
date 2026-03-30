# System.Settings.Cribl

## Overview

### Available Operations

* [list](#list) - Get Cribl system settings
* [update](#update) - Update Cribl system settings

## list

Get Cribl system settings.

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

Update Cribl system settings.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateSystemSettingsConf" method="patch" path="/system/settings/conf" example="UpdateSystemSettingsExamplesUpdateApiSettings" -->
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
      disabled: false,
      host: "0.0.0.0",
      port: 9000,
      ssl: {
        certPath: "/opt/cribl/local/cribl/auth/cribl.crt",
        disabled: false,
        passphrase: "",
        privKeyPath: "/opt/cribl/local/cribl/auth/cribl.key",
      },
    },
    backups: {
      backupPersistence: "24h",
      backupsDirectory: "$CRIBL_STATE_DIR/backups",
    },
    pii: {
      enablePiiDetection: false,
    },
    proxy: {
      useEnvVars: false,
    },
    rollback: {
      rollbackEnabled: true,
    },
    shutdown: {
      drainTimeout: 10000,
    },
    sni: {
      disableSNIRouting: false,
    },
    system: {
      intercom: true,
      upgrade: "api",
    },
    tls: {
      defaultCipherList: "DEFAULT",
      defaultEcdhCurve: "auto",
      maxVersion: "TLSv1.3",
      minVersion: "TLSv1.2",
      rejectUnauthorized: true,
    },
    upgradeGroupSettings: {
      isRolling: true,
      quantity: 100,
      retryCount: 5,
      retryDelay: 1000,
    },
    upgradeSettings: {},
    workers: {
      count: 0,
      memory: 0,
      minimum: 1,
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
      disabled: false,
      host: "0.0.0.0",
      port: 9000,
      ssl: {
        certPath: "/opt/cribl/local/cribl/auth/cribl.crt",
        disabled: false,
        passphrase: "",
        privKeyPath: "/opt/cribl/local/cribl/auth/cribl.key",
      },
    },
    backups: {
      backupPersistence: "24h",
      backupsDirectory: "$CRIBL_STATE_DIR/backups",
    },
    pii: {
      enablePiiDetection: false,
    },
    proxy: {
      useEnvVars: false,
    },
    rollback: {
      rollbackEnabled: true,
    },
    shutdown: {
      drainTimeout: 10000,
    },
    sni: {
      disableSNIRouting: false,
    },
    system: {
      intercom: true,
      upgrade: "api",
    },
    tls: {
      defaultCipherList: "DEFAULT",
      defaultEcdhCurve: "auto",
      maxVersion: "TLSv1.3",
      minVersion: "TLSv1.2",
      rejectUnauthorized: true,
    },
    upgradeGroupSettings: {
      isRolling: true,
      quantity: 100,
      retryCount: 5,
      retryDelay: 1000,
    },
    upgradeSettings: {},
    workers: {
      count: 0,
      memory: 0,
      minimum: 1,
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

**Promise\<[models.CountedSystemSettingsConf](../../models/countedsystemsettingsconf.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |