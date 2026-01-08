# CollectorConf

Collector configuration


## Supported Types

### `models.CollectorAzureBlob`

```typescript
const value: models.CollectorAzureBlob = {
  authType: "manual",
  connectionString: "<value>",
  type: "azure_blob",
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
  textSecret: "<value>",
  storageAccountName: "<value>",
  tenantId: "<id>",
  clientId: "<id>",
  clientTextSecret: "<value>",
  endpointSuffix: "<value>",
  azureCloud: "<value>",
  certificate: {
    certificateName: "<value>",
  },
};
```

### `models.CollectorCriblLake`

```typescript
const value: models.CollectorCriblLake = {
  type: "cribl_lake",
  dataset: "<value>",
};
```

### `models.CollectorDatabase`

```typescript
const value: models.CollectorDatabase = {
  type: "database",
  connectionId: "<id>",
  query: "<value>",
  defaultBreakers: "Cribl",
  __scheduling: {
    stateTracking: {
      enabled: true,
    },
  },
};
```

### `models.CollectorFilesystem`

```typescript
const value: models.CollectorFilesystem = {
  type: "filesystem",
  outputName: "<value>",
  path: "/Library",
  extractors: [
    {
      key: "<key>",
      expression: "<value>",
    },
  ],
};
```

### `models.CollectorGoogleCloudStorage`

```typescript
const value: models.CollectorGoogleCloudStorage = {
  authType: "manual",
  type: "google_cloud_storage",
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
  serviceAccountCredentials: "<value>",
  textSecret: "<value>",
};
```

### `models.CollectorHealthCheck`

```typescript
const value: models.CollectorHealthCheck = {
  collectMethod: "get",
  collectRequestParams: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  discovery: {
    discoverType: "none",
  },
  collectUrl: "https://crooked-shoulder.name/",
  collectBody: "`{ }`",
  collectRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  authenticateCollect: false,
  authentication: "none",
  timeout: 30,
  rejectUnauthorized: false,
  defaultBreakers: "Cribl",
  safeHeaders: [
    "<value 1>",
    "<value 2>",
  ],
  retryRules: {
    type: "backoff",
    interval: "<value>",
    limit: "<value>",
    multiplier: "<value>",
    codes: "<value>",
    enableHeader: "<value>",
  },
  username: "Louisa.Turcotte",
  password: "0RYmS35HdTLMgXY",
  credentialsSecret: "<value>",
  loginUrl: "",
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
  clientSecretParamName: "client_secret",
  clientSecretParamValue: "<value>",
  authRequestParams: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  textSecret: "<value>",
  type: "health_check",
};
```

### `models.CollectorRest`

```typescript
const value: models.CollectorRest = {
  collectMethod: "get",
  collectRequestParams: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  type: "rest",
  discovery: {
    discoverType: "none",
  },
  collectUrl: "https://close-decision.net",
  collectVerb: "<value>",
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
  authentication: "none",
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
  __scheduling: {
    stateTracking: {
      enabled: true,
    },
  },
  username: "Jarvis_Renner",
  password: "ObmmR1tG_KRVLtd",
  credentialsSecret: "<value>",
  loginUrl: "",
  loginBody:
    "`{ \"username\": \"${username}\", \"password\": \"${password}\" }`",
  getAuthTokenFromHeader: false,
  authHeaderKey: "Authorization",
  authHeaderExpr: "`Bearer ${token}`",
  authRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  tokenRespAttribute: "<value>",
  clientSecretParamName: "client_secret",
  clientSecretParamValue: "<value>",
  authRequestParams: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  textSecret: "<value>",
  scopes: [],
  serviceAccountCredentials: "<value>",
  subject: "<value>",
  hmacFunctionId: "<id>",
};
```

### `models.CollectorS3`

```typescript
const value: models.CollectorS3 = {
  partitioningScheme: "none",
  type: "s3",
  outputName: "<value>",
  bucket: "<value>",
  parquetChunkSizeMB: 5,
  parquetChunkDownloadTimeout: 600,
  region: "<value>",
  path: "/bin",
  extractors: [
    {
      key: "<key>",
      expression: "<value>",
    },
  ],
  awsAuthenticationMethod: "auto",
  endpoint: "<value>",
  signatureVersion: "v4",
  enableAssumeRole: false,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 3600,
  maxBatchSize: 10,
  recurse: true,
  reuseConnections: true,
  rejectUnauthorized: true,
  verifyPermissions: true,
  disableTimeFilter: false,
  awsApiKey: "<value>",
  awsSecretKey: "<value>",
  awsSecret: "<value>",
};
```

### `models.CollectorScript`

```typescript
const value: models.CollectorScript = {
  type: "script",
  discoverScript: "<value>",
  collectScript: "<value>",
  envVars: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
};
```

### `models.CollectorSplunk`

```typescript
const value: models.CollectorSplunk = {
  authentication: "basic",
  type: "splunk",
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
  username: "Enrico53",
  password: "a6l5mrPhEvtGkTu",
  credentialsSecret: "<value>",
  token: "<value>",
  tokenSecret: "<value>",
  loginUrl: "`https://localhost:9000/api/v1/auth/login`",
  loginBody:
    "`{ \"username\": \"${username}\", \"password\": \"${password}\" }`",
  tokenRespAttribute: "token",
  authHeaderExpr: "`Bearer ${token}`",
};
```

