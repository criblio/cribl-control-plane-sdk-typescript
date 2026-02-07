# Packs.Sources.HecTokens

## Overview

### Available Operations

* [create](#create) - Add an HEC token and optional metadata to a Splunk HEC Source within a Pack
* [update](#update) - Update metadata for an HEC token for a Splunk HEC Source within a Pack

## create

Add an HEC token and optional metadata to the specified Splunk HEC Source within the specified Pack.

### Example Usage: HecTokenExamplesHecToken

<!-- UsageSnippet language="typescript" operationID="createInputSystemHecTokenByPackAndId" method="post" path="/p/{pack}/system/inputs/{id}/hectoken" example="HecTokenExamplesHecToken" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.hecTokens.create({
    id: "<id>",
    pack: "<value>",
    addHecTokenRequest: {
      allowedIndexesAtToken: [
        "<value 1>",
      ],
      description: "SUV velvety without",
      enabled: true,
      metadata: [
        {
          name: "fieldX",
          value: "valueX",
        },
      ],
      token: "12345678901",
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
import { packsSourcesHecTokensCreate } from "cribl-control-plane/funcs/packsSourcesHecTokensCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesHecTokensCreate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
    addHecTokenRequest: {
      allowedIndexesAtToken: [
        "<value 1>",
      ],
      description: "SUV velvety without",
      enabled: true,
      metadata: [
        {
          name: "fieldX",
          value: "valueX",
        },
      ],
      token: "12345678901",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesHecTokensCreate failed:", res.error);
  }
}

run();
```
### Example Usage: HecTokenExamplesHecTokenWithIndexAccess

<!-- UsageSnippet language="typescript" operationID="createInputSystemHecTokenByPackAndId" method="post" path="/p/{pack}/system/inputs/{id}/hectoken" example="HecTokenExamplesHecTokenWithIndexAccess" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.hecTokens.create({
    id: "<id>",
    pack: "<value>",
    addHecTokenRequest: {
      allowedIndexesAtToken: [
        "myIndex6",
      ],
      description: "extremely till outside healthily sensitize even gosh royal",
      enabled: true,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      token: "12345678901",
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
import { packsSourcesHecTokensCreate } from "cribl-control-plane/funcs/packsSourcesHecTokensCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesHecTokensCreate(criblControlPlane, {
    id: "<id>",
    pack: "<value>",
    addHecTokenRequest: {
      allowedIndexesAtToken: [
        "myIndex6",
      ],
      description: "extremely till outside healthily sensitize even gosh royal",
      enabled: true,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      token: "12345678901",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesHecTokensCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateInputSystemHecTokenByPackAndIdRequest](../../models/operations/createinputsystemhectokenbypackandidrequest.md)                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CountedInputSplunkHec](../../models/countedinputsplunkhec.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |

## update

Update the metadata for the specified HEC token for the specified Splunk HEC Source within the specified Pack.

### Example Usage: HecTokenExamplesHecToken

<!-- UsageSnippet language="typescript" operationID="updateInputSystemHecTokenByPackAndIdAndToken" method="patch" path="/p/{pack}/system/inputs/{id}/hectoken/{token}" example="HecTokenExamplesHecToken" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.hecTokens.update({
    id: "<id>",
    token: "<value>",
    pack: "<value>",
    updateHecTokenRequest: {
      allowedIndexesAtToken: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      description: "straw critical famously dream after delightfully",
      enabled: true,
      metadata: [
        {
          name: "fieldX",
          value: "valueX",
        },
      ],
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
import { packsSourcesHecTokensUpdate } from "cribl-control-plane/funcs/packsSourcesHecTokensUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesHecTokensUpdate(criblControlPlane, {
    id: "<id>",
    token: "<value>",
    pack: "<value>",
    updateHecTokenRequest: {
      allowedIndexesAtToken: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      description: "straw critical famously dream after delightfully",
      enabled: true,
      metadata: [
        {
          name: "fieldX",
          value: "valueX",
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesHecTokensUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: HecTokenExamplesHecTokenWithIndexAccess

<!-- UsageSnippet language="typescript" operationID="updateInputSystemHecTokenByPackAndIdAndToken" method="patch" path="/p/{pack}/system/inputs/{id}/hectoken/{token}" example="HecTokenExamplesHecTokenWithIndexAccess" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.packs.sources.hecTokens.update({
    id: "<id>",
    token: "<value>",
    pack: "<value>",
    updateHecTokenRequest: {
      allowedIndexesAtToken: [
        "myIndex6",
      ],
      description: "geez capitalise curiously enfold jubilantly",
      enabled: true,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
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
import { packsSourcesHecTokensUpdate } from "cribl-control-plane/funcs/packsSourcesHecTokensUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await packsSourcesHecTokensUpdate(criblControlPlane, {
    id: "<id>",
    token: "<value>",
    pack: "<value>",
    updateHecTokenRequest: {
      allowedIndexesAtToken: [
        "myIndex6",
      ],
      description: "geez capitalise curiously enfold jubilantly",
      enabled: true,
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("packsSourcesHecTokensUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateInputSystemHecTokenByPackAndIdAndTokenRequest](../../models/operations/updateinputsystemhectokenbypackandidandtokenrequest.md)                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CountedInputSplunkHec](../../models/countedinputsplunkhec.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |