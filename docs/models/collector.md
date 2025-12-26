# Collector

Collector config wrapper


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
    recurse: true,
    includeMetadata: true,
    includeTags: true,
    maxBatchSize: 10,
    parquetChunkSizeMB: 5,
    parquetChunkDownloadTimeout: 600,
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
    defaultBreakers: "Cribl",
    scheduling: {
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
    disableTimeFilter: false,
    recurse: true,
    maxBatchSize: 10,
    parquetChunkSizeMB: 5,
    parquetChunkDownloadTimeout: 600,
  },
};
```

### `models.CollectorHealthCheck`

```typescript
const value: models.CollectorHealthCheck = {
  type: "health_check",
  conf: {
    authentication: "login",
    loginUrl: "`https://localhost:9000/api/v1/auth/login`",
    username: "Connor_Schowalter",
    password: "lv0D0RYmS35HdTL",
    loginBody:
      "`{ \"username\": \"${username}\", \"password\": \"${password}\" }`",
    tokenRespAttribute: "<value>",
    authHeaderExpr: "`Bearer ${token}`",
    authRequestHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    discovery: {
      discoverType: "none",
    },
    collectUrl: "https://silver-morning.biz/",
    collectMethod: "get",
    collectRequestParams: "<value>",
    collectBody: "<value>",
    collectRequestHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    authenticateCollect: false,
    timeout: 30,
    rejectUnauthorized: false,
    defaultBreakers: "Cribl",
    safeHeaders: [
      "<value 1>",
    ],
    retryRules: {
      type: "backoff",
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
      discoverType: "none",
    },
    collectUrl: "https://simplistic-cardboard.biz/",
    collectMethod: "get",
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
      type: "none",
    },
    timeout: 0,
    useRoundRobinDns: false,
    disableTimeFilter: false,
    decodeUrl: true,
    rejectUnauthorized: false,
    captureHeaders: false,
    stopOnEmptyResults: false,
    safeHeaders: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    retryRules: {
      type: "backoff",
      interval: "<value>",
      limit: "<value>",
      multiplier: "<value>",
      maxIntervalMs: "<value>",
      codes: "<value>",
      enableHeader: "<value>",
      retryConnectTimeout: "<value>",
      retryConnectReset: "<value>",
    },
    scheduling: {
      stateTracking: {
        enabled: true,
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
    parquetChunkSizeMB: 5,
    parquetChunkDownloadTimeout: 600,
    region: "<value>",
    path: "/bin",
    partitioningScheme: "none",
    extractors: [
      {
        key: "<key>",
        expression: "<value>",
      },
    ],
    endpoint: "<value>",
    signatureVersion: "v4",
    enableAssumeRole: false,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 3600,
    maxBatchSize: 10,
    recurse: "<value>",
    reuseConnections: true,
    rejectUnauthorized: true,
    verifyPermissions: true,
    disableTimeFilter: false,
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
    username: "Enrico53",
    password: "a6l5mrPhEvtGkTu",
    searchHead: "https://localhost:8089",
    search: "<value>",
    earliest: "<value>",
    latest: "<value>",
    endpoint: "/services/search/v2/jobs/export",
    outputMode: "json",
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
    timeout: 0,
    useRoundRobinDns: false,
    disableTimeFilter: true,
    rejectUnauthorized: false,
    handleEscapedChars: false,
    retryRules: {
      type: "backoff",
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

