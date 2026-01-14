# Collector

Collector configuration


## Supported Types

### `models.CollectorAzureBlob`

```typescript
const value: models.CollectorAzureBlob = {
  type: "azure_blob",
  conf: {
    authType: "clientCert",
    storageAccountName: "<value>",
    tenantId: "<id>",
    clientId: "<id>",
    certificate: {
      certificateName: "<value>",
    },
    azureCloud: "<value>",
    endpointSuffix: "<value>",
    outputName: "<value>",
    containerName: "<value>",
    path: "/Applications",
    extractors: [
      {
        key: "<key>",
        expression: "<value>",
      },
    ],
    recurse: false,
    includeMetadata: false,
    includeTags: false,
    maxBatchSize: 2877.09,
    parquetChunkSizeMB: 3385.81,
    parquetChunkDownloadTimeout: 2527.71,
  },
};
```

### `models.CollectorCriblLake`

```typescript
const value: models.CollectorCriblLake = {
  type: "cribl_lake",
  conf: {
    dataset: "<value>",
  },
};
```

### `models.CollectorDatabase`

```typescript
const value: models.CollectorDatabase = {
  type: "database",
  conf: {
    connectionId: "<id>",
    query: "<value>",
    queryValidationEnabled: true,
    defaultBreakers: "Cribl",
    __scheduling: {
      stateTracking: {
        enabled: true,
      },
    },
  },
};
```

### `models.CollectorFilesystem`

```typescript
const value: models.CollectorFilesystem = {
  type: "filesystem",
  conf: {
    outputName: "<value>",
    path: "/Library",
    extractors: [
      {
        key: "<key>",
        expression: "<value>",
      },
    ],
    recurse: false,
    maxBatchSize: 4087.23,
  },
};
```

### `models.CollectorGoogleCloudStorage`

```typescript
const value: models.CollectorGoogleCloudStorage = {
  type: "google_cloud_storage",
  conf: {
    authType: "secret",
    textSecret: "<value>",
    outputName: "<value>",
    bucket: "<value>",
    path: "/private/tmp",
    extractors: [
      {
        key: "<key>",
        expression: "<value>",
      },
    ],
    endpoint: "<value>",
    disableTimeFilter: true,
    recurse: false,
    maxBatchSize: 60.67,
    parquetChunkSizeMB: 2920.25,
    parquetChunkDownloadTimeout: 430.44,
  },
};
```

### `models.CollectorHealthCheck`

```typescript
const value: models.CollectorHealthCheck = {
  type: "health_check",
  conf: {
    authentication: "login",
    loginUrl: "https://crooked-shoulder.name/",
    username: "Isaac_Schiller",
    password: "0RYmS35HdTLMgXY",
    loginBody: "<value>",
    tokenRespAttribute: "<value>",
    authHeaderExpr: "<value>",
    authRequestHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    discovery: {
      discoverType: "list",
    },
    collectUrl: "https://soupy-glider.org/",
    collectMethod: "get",
    collectRequestParams: "<value>",
    collectBody: "<value>",
    collectRequestHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    authenticateCollect: true,
    timeout: 9055.35,
    rejectUnauthorized: false,
    defaultBreakers: "Cribl",
    safeHeaders: [
      "<value 1>",
    ],
    retryRules: {
      type: "static",
      interval: "<value>",
      limit: "<value>",
      multiplier: "<value>",
      codes: "<value>",
      enableHeader: "<value>",
    },
  },
};
```

### `models.CollectorRest`

```typescript
const value: models.CollectorRest = {
  type: "rest",
  conf: {
    authentication: "hmac",
    hmacFunctionId: "<id>",
    discovery: {
      discoverType: "http",
    },
    collectUrl: "https://close-decision.net",
    collectMethod: "post",
    collectVerb: "<value>",
    collectRequestParams: "<value>",
    collectBody: "<value>",
    collectRequestHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    pagination: {
      type: "response_header",
    },
    timeout: 4762.75,
    useRoundRobinDns: true,
    disableTimeFilter: false,
    decodeUrl: false,
    rejectUnauthorized: true,
    captureHeaders: false,
    stopOnEmptyResults: true,
    safeHeaders: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    retryRules: {
      type: "none",
      interval: "<value>",
      limit: "<value>",
      multiplier: "<value>",
      maxIntervalMs: "<value>",
      codes: "<value>",
      enableHeader: "<value>",
      retryConnectTimeout: "<value>",
      retryConnectReset: "<value>",
    },
    __scheduling: {
      stateTracking: {
        enabled: false,
      },
    },
  },
};
```

### `models.CollectorS3`

```typescript
const value: models.CollectorS3 = {
  type: "s3",
  conf: {
    awsAuthenticationMethod: "auto",
    outputName: "<value>",
    bucket: "<value>",
    parquetChunkSizeMB: 219.36,
    parquetChunkDownloadTimeout: 4909.83,
    region: "<value>",
    path: "/private/var",
    partitioningScheme: "none",
    extractors: [
      {
        key: "<key>",
        expression: "<value>",
      },
    ],
    endpoint: "<value>",
    signatureVersion: "v4",
    enableAssumeRole: true,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 2339.05,
    maxBatchSize: 5719.01,
    recurse: "<value>",
    reuseConnections: false,
    rejectUnauthorized: true,
    verifyPermissions: false,
    disableTimeFilter: true,
  },
};
```

### `models.CollectorScript`

```typescript
const value: models.CollectorScript = {
  type: "script",
  conf: {
    discoverScript: "<value>",
    collectScript: "<value>",
    shell: "<value>",
    envVars: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
  },
};
```

### `models.CollectorSplunk`

```typescript
const value: models.CollectorSplunk = {
  type: "splunk",
  conf: {
    authentication: "basic",
    username: "Roxane84",
    password: "6l5mrPhEvtGkTuL",
    searchHead: "<value>",
    search: "<value>",
    earliest: "<value>",
    latest: "<value>",
    endpoint: "<value>",
    outputMode: "csv",
    collectRequestParams: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    collectRequestHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    timeout: 8145.29,
    useRoundRobinDns: false,
    disableTimeFilter: true,
    rejectUnauthorized: false,
    handleEscapedChars: false,
    retryRules: {
      type: "none",
      interval: "<value>",
      limit: "<value>",
      multiplier: "<value>",
      codes: "<value>",
      enableHeader: "<value>",
      retryConnectTimeout: "<value>",
      retryConnectReset: "<value>",
    },
  },
};
```

