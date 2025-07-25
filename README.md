# cribl-control-plane-sdk-typescript
<!-- Start Summary [summary] -->
## Summary

Cribl API Reference: This API Reference lists available REST endpoints, along with their supported operations for accessing, creating, updating, or deleting resources. See our complementary product documentation at [docs.cribl.io](http://docs.cribl.io).
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [cribl-control-plane-sdk-typescript](#cribl-control-plane-sdk-typescript)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add cribl-control-plane
```

### PNPM

```bash
pnpm add cribl-control-plane
```

### Bun

```bash
bun add cribl-control-plane
```

### Yarn

```bash
yarn add cribl-control-plane zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.listSource();

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security schemes globally:

| Name          | Type   | Scheme       | Environment Variable             |
| ------------- | ------ | ------------ | -------------------------------- |
| `bearerAuth`  | http   | HTTP Bearer  | `CRIBLCONTROLPLANE_BEARER_AUTH`  |
| `clientOauth` | oauth2 | OAuth2 token | `CRIBLCONTROLPLANE_CLIENT_OAUTH` |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. The selected scheme will be used by default to authenticate with the API for all operations that support it. For example:
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.listSource();

  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [auth](docs/sdks/auth/README.md)

* [login](docs/sdks/auth/README.md#login) - Log in and obtain Auth token


### [destinations](docs/sdks/destinations/README.md)

* [listDestination](docs/sdks/destinations/README.md#listdestination) - Get a list of Destination objects
* [createDestination](docs/sdks/destinations/README.md#createdestination) - Create Destination
* [getDestinationById](docs/sdks/destinations/README.md#getdestinationbyid) - Get Destination by ID
* [updateDestinationById](docs/sdks/destinations/README.md#updatedestinationbyid) - Update Destination
* [deleteDestinationById](docs/sdks/destinations/README.md#deletedestinationbyid) - Delete Destination
* [deleteDestinationPqById](docs/sdks/destinations/README.md#deletedestinationpqbyid) - Clears destination persistent queue
* [getDestinationPqById](docs/sdks/destinations/README.md#getdestinationpqbyid) - Retrieves status of latest clear PQ job for a destination
* [getDestinationSamplesById](docs/sdks/destinations/README.md#getdestinationsamplesbyid) - Retrieve samples data for the specified destination. Used to get sample data for the test action.
* [createDestinationTestById](docs/sdks/destinations/README.md#createdestinationtestbyid) - Send sample data to a destination to validate configuration or test connectivity

### [health](docs/sdks/health/README.md)

* [getHealthInfo](docs/sdks/health/README.md#gethealthinfo) - Provides health info for REST server

### [pipelines](docs/sdks/pipelines/README.md)

* [listPipeline](docs/sdks/pipelines/README.md#listpipeline) - Get a list of Pipeline objects
* [createPipeline](docs/sdks/pipelines/README.md#createpipeline) - Create Pipeline
* [getPipelineById](docs/sdks/pipelines/README.md#getpipelinebyid) - Get Pipeline by ID
* [updatePipelineById](docs/sdks/pipelines/README.md#updatepipelinebyid) - Update Pipeline
* [deletePipelineById](docs/sdks/pipelines/README.md#deletepipelinebyid) - Delete Pipeline

### [routes](docs/sdks/routes/README.md)

* [listRoutes](docs/sdks/routes/README.md#listroutes) - Get a list of Routes objects
* [getRoutesById](docs/sdks/routes/README.md#getroutesbyid) - Get Routes by ID
* [updateRoutesById](docs/sdks/routes/README.md#updateroutesbyid) - Update Routes
* [createRoutesAppendById](docs/sdks/routes/README.md#createroutesappendbyid) - Appends routes to the end of the routing table

### [sources](docs/sdks/sources/README.md)

* [listSource](docs/sdks/sources/README.md#listsource) - Get a list of Source objects
* [createSource](docs/sdks/sources/README.md#createsource) - Create Source
* [getSourceById](docs/sdks/sources/README.md#getsourcebyid) - Get Source by ID
* [updateSourceById](docs/sdks/sources/README.md#updatesourcebyid) - Update Source
* [deleteSourceById](docs/sdks/sources/README.md#deletesourcebyid) - Delete Source
* [createSourceHecTokenById](docs/sdks/sources/README.md#createsourcehectokenbyid) - Add token and optional metadata to an existing HEC Source
* [updateSourceHecTokenByIdAndToken](docs/sdks/sources/README.md#updatesourcehectokenbyidandtoken) - Update token metadata on existing HEC Source

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`authLogin`](docs/sdks/auth/README.md#login) - Log in and obtain Auth token
- [`destinationsCreateDestination`](docs/sdks/destinations/README.md#createdestination) - Create Destination
- [`destinationsCreateDestinationTestById`](docs/sdks/destinations/README.md#createdestinationtestbyid) - Send sample data to a destination to validate configuration or test connectivity
- [`destinationsDeleteDestinationById`](docs/sdks/destinations/README.md#deletedestinationbyid) - Delete Destination
- [`destinationsDeleteDestinationPqById`](docs/sdks/destinations/README.md#deletedestinationpqbyid) - Clears destination persistent queue
- [`destinationsGetDestinationById`](docs/sdks/destinations/README.md#getdestinationbyid) - Get Destination by ID
- [`destinationsGetDestinationPqById`](docs/sdks/destinations/README.md#getdestinationpqbyid) - Retrieves status of latest clear PQ job for a destination
- [`destinationsGetDestinationSamplesById`](docs/sdks/destinations/README.md#getdestinationsamplesbyid) - Retrieve samples data for the specified destination. Used to get sample data for the test action.
- [`destinationsListDestination`](docs/sdks/destinations/README.md#listdestination) - Get a list of Destination objects
- [`destinationsUpdateDestinationById`](docs/sdks/destinations/README.md#updatedestinationbyid) - Update Destination
- [`healthGetHealthInfo`](docs/sdks/health/README.md#gethealthinfo) - Provides health info for REST server
- [`pipelinesCreatePipeline`](docs/sdks/pipelines/README.md#createpipeline) - Create Pipeline
- [`pipelinesDeletePipelineById`](docs/sdks/pipelines/README.md#deletepipelinebyid) - Delete Pipeline
- [`pipelinesGetPipelineById`](docs/sdks/pipelines/README.md#getpipelinebyid) - Get Pipeline by ID
- [`pipelinesListPipeline`](docs/sdks/pipelines/README.md#listpipeline) - Get a list of Pipeline objects
- [`pipelinesUpdatePipelineById`](docs/sdks/pipelines/README.md#updatepipelinebyid) - Update Pipeline
- [`routesCreateRoutesAppendById`](docs/sdks/routes/README.md#createroutesappendbyid) - Appends routes to the end of the routing table
- [`routesGetRoutesById`](docs/sdks/routes/README.md#getroutesbyid) - Get Routes by ID
- [`routesListRoutes`](docs/sdks/routes/README.md#listroutes) - Get a list of Routes objects
- [`routesUpdateRoutesById`](docs/sdks/routes/README.md#updateroutesbyid) - Update Routes
- [`sourcesCreateSource`](docs/sdks/sources/README.md#createsource) - Create Source
- [`sourcesCreateSourceHecTokenById`](docs/sdks/sources/README.md#createsourcehectokenbyid) - Add token and optional metadata to an existing HEC Source
- [`sourcesDeleteSourceById`](docs/sdks/sources/README.md#deletesourcebyid) - Delete Source
- [`sourcesGetSourceById`](docs/sdks/sources/README.md#getsourcebyid) - Get Source by ID
- [`sourcesListSource`](docs/sdks/sources/README.md#listsource) - Get a list of Source objects
- [`sourcesUpdateSourceById`](docs/sdks/sources/README.md#updatesourcebyid) - Update Source
- [`sourcesUpdateSourceHecTokenByIdAndToken`](docs/sdks/sources/README.md#updatesourcehectokenbyidandtoken) - Update token metadata on existing HEC Source

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.listSource({
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.sources.listSource();

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`CriblControlPlaneError`](./src/models/errors/criblcontrolplaneerror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { CriblControlPlane } from "cribl-control-plane";
import * as errors from "cribl-control-plane/models/errors";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  try {
    const result = await criblControlPlane.sources.listSource();

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.CriblControlPlaneError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.ErrorT) {
        console.log(error.data$.message); // string
      }
    }
  }
}

run();

```

### Error Classes
**Primary errors:**
* [`CriblControlPlaneError`](./src/models/errors/criblcontrolplaneerror.ts): The base class for HTTP error responses.
  * [`ErrorT`](./src/models/errors/errort.ts): Unexpected error. Status code `500`. *

<details><summary>Less common errors (7)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`CriblControlPlaneError`](./src/models/errors/criblcontrolplaneerror.ts)**:
* [`HealthStatusError`](./src/models/errors/healthstatuserror.ts): Healthy status. Status code `420`. Applicable to 1 of 27 methods.*
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { CriblControlPlane } from "cribl-control-plane";
import { HTTPClient } from "cribl-control-plane/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new CriblControlPlane({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { CriblControlPlane } from "cribl-control-plane";

const sdk = new CriblControlPlane({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `CRIBLCONTROLPLANE_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->
