# Sources

## Overview

Actions related to Sources

### Available Operations

* [list](#list) - List all Sources
* [create](#create) - Create a Source
* [get](#get) - Get a Source
* [update](#update) - Update a Source
* [delete](#delete) - Delete a Source

## list

Get a list of all Sources.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listInput" method="get" path="/system/inputs" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.list();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesList } from "cribl-control-plane/funcs/sourcesList.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesList(criblControlPlane);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesList failed:", res.error);
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

**Promise\<[models.CountedInput](../../models/countedinput.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |

## create

Create a new Source.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createInput" method="post" path="/system/inputs" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.create({
    sendToRoutes: true,
    id: "appscope-source",
    type: "appscope",
    disabled: false,
    pipeline: "<value>",
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    ipWhitelistRegex: "/.*/",
    maxActiveCxn: 1000,
    socketIdleTimeout: 0,
    socketEndingMaxWait: 30,
    socketMaxLifespan: 0,
    enableProxyHeader: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    breakerRulesets: [
      "<value 1>",
    ],
    staleChannelFlushMs: 10000,
    enableUnixPath: false,
    filter: {
      allow: [
        {
          procname: "<value>",
          arg: "<value>",
          config: "<value>",
        },
      ],
      transportURL: "https://drab-scrap.info/",
    },
    persistence: {
      enable: false,
      timeWindow: "10m",
      maxDataSize: "1GB",
      maxDataTime: "24h",
      compress: "gzip",
      destPath: "$CRIBL_HOME/state/appscope",
    },
    authType: "manual",
    description: "if deserted boohoo red chops excepting know stay bah",
    host: "0.0.0.0",
    port: 9109,
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "/.*/",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1",
    },
    unixSocketPath: "$CRIBL_HOME/state/appscope.sock",
    unixSocketPerms: "<value>",
    authToken: "",
    textSecret: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesCreate } from "cribl-control-plane/funcs/sourcesCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesCreate(criblControlPlane, {
    sendToRoutes: true,
    id: "appscope-source",
    type: "appscope",
    disabled: false,
    pipeline: "<value>",
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    pq: {
      mode: "always",
      maxBufferSize: 1000,
      commitFrequency: 42,
      maxFileSize: "1 MB",
      maxSize: "5GB",
      path: "$CRIBL_HOME/state/queues",
      compress: "none",
      pqControls: {},
    },
    ipWhitelistRegex: "/.*/",
    maxActiveCxn: 1000,
    socketIdleTimeout: 0,
    socketEndingMaxWait: 30,
    socketMaxLifespan: 0,
    enableProxyHeader: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    breakerRulesets: [
      "<value 1>",
    ],
    staleChannelFlushMs: 10000,
    enableUnixPath: false,
    filter: {
      allow: [
        {
          procname: "<value>",
          arg: "<value>",
          config: "<value>",
        },
      ],
      transportURL: "https://drab-scrap.info/",
    },
    persistence: {
      enable: false,
      timeWindow: "10m",
      maxDataSize: "1GB",
      maxDataTime: "24h",
      compress: "gzip",
      destPath: "$CRIBL_HOME/state/appscope",
    },
    authType: "manual",
    description: "if deserted boohoo red chops excepting know stay bah",
    host: "0.0.0.0",
    port: 9109,
    tls: {
      disabled: true,
      requestCert: false,
      rejectUnauthorized: true,
      commonNameRegex: "/.*/",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1",
    },
    unixSocketPath: "$CRIBL_HOME/state/appscope.sock",
    unixSocketPerms: "<value>",
    authToken: "",
    textSecret: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateInputRequest](../../models/operations/createinputrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CountedInput](../../models/countedinput.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |

## get

Get the specified Source.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getInputById" method="get" path="/system/inputs/{id}" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.get({
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesGet } from "cribl-control-plane/funcs/sourcesGet.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesGet(criblControlPlane, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetInputByIdRequest](../../models/operations/getinputbyidrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CountedInput](../../models/countedinput.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |

## update

Update the specified Source.</br></br>Provide a complete representation of the Source that you want to update in the request body. This endpoint does not support partial updates. Cribl removes any omitted fields when updating the Source.</br></br>Confirm that the configuration in your request body is correct before sending the request. If the configuration is incorrect, the updated Source might not function as expected.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateInputById" method="patch" path="/system/inputs/{id}" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.update({
    id: "<id>",
    input: {
      sendToRoutes: true,
      id: "appscope-source",
      type: "appscope",
      disabled: false,
      pipeline: "<value>",
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      ipWhitelistRegex: "/.*/",
      maxActiveCxn: 1000,
      socketIdleTimeout: 0,
      socketEndingMaxWait: 30,
      socketMaxLifespan: 0,
      enableProxyHeader: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      breakerRulesets: [
        "<value 1>",
      ],
      staleChannelFlushMs: 10000,
      enableUnixPath: false,
      filter: {
        allow: [
          {
            procname: "<value>",
            arg: "<value>",
            config: "<value>",
          },
        ],
        transportURL: "https://youthful-hammock.net/",
      },
      persistence: {
        enable: false,
        timeWindow: "10m",
        maxDataSize: "1GB",
        maxDataTime: "24h",
        compress: "gzip",
        destPath: "$CRIBL_HOME/state/appscope",
      },
      authType: "manual",
      description: "beyond hidden supposing ghost fictionalize disarm geez",
      host: "0.0.0.0",
      port: 9109,
      tls: {
        disabled: true,
        requestCert: false,
        rejectUnauthorized: true,
        commonNameRegex: "/.*/",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      unixSocketPath: "$CRIBL_HOME/state/appscope.sock",
      unixSocketPerms: "<value>",
      authToken: "",
      textSecret: "<value>",
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
import { sourcesUpdate } from "cribl-control-plane/funcs/sourcesUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesUpdate(criblControlPlane, {
    id: "<id>",
    input: {
      sendToRoutes: true,
      id: "appscope-source",
      type: "appscope",
      disabled: false,
      pipeline: "<value>",
      environment: "<value>",
      pqEnabled: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      connections: [
        {
          pipeline: "<value>",
          output: "<value>",
        },
      ],
      pq: {
        mode: "always",
        maxBufferSize: 1000,
        commitFrequency: 42,
        maxFileSize: "1 MB",
        maxSize: "5GB",
        path: "$CRIBL_HOME/state/queues",
        compress: "none",
        pqControls: {},
      },
      ipWhitelistRegex: "/.*/",
      maxActiveCxn: 1000,
      socketIdleTimeout: 0,
      socketEndingMaxWait: 30,
      socketMaxLifespan: 0,
      enableProxyHeader: false,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      breakerRulesets: [
        "<value 1>",
      ],
      staleChannelFlushMs: 10000,
      enableUnixPath: false,
      filter: {
        allow: [
          {
            procname: "<value>",
            arg: "<value>",
            config: "<value>",
          },
        ],
        transportURL: "https://youthful-hammock.net/",
      },
      persistence: {
        enable: false,
        timeWindow: "10m",
        maxDataSize: "1GB",
        maxDataTime: "24h",
        compress: "gzip",
        destPath: "$CRIBL_HOME/state/appscope",
      },
      authType: "manual",
      description: "beyond hidden supposing ghost fictionalize disarm geez",
      host: "0.0.0.0",
      port: 9109,
      tls: {
        disabled: true,
        requestCert: false,
        rejectUnauthorized: true,
        commonNameRegex: "/.*/",
        certificateName: "<value>",
        privKeyPath: "<value>",
        passphrase: "<value>",
        certPath: "<value>",
        caPath: "<value>",
        minVersion: "TLSv1.1",
        maxVersion: "TLSv1.2",
      },
      unixSocketPath: "$CRIBL_HOME/state/appscope.sock",
      unixSocketPerms: "<value>",
      authToken: "",
      textSecret: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateInputByIdRequest](../../models/operations/updateinputbyidrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CountedInput](../../models/countedinput.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |

## delete

Delete the specified Source.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteInputById" method="delete" path="/system/inputs/{id}" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.delete({
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { sourcesDelete } from "cribl-control-plane/funcs/sourcesDelete.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sourcesDelete(criblControlPlane, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sourcesDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteInputByIdRequest](../../models/operations/deleteinputbyidrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CountedInput](../../models/countedinput.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |