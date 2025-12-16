# CollectorConf

Collector configuration


## Supported Types

### `models.CollectorAzureBlob`

```typescript
const value: models.CollectorAzureBlob = {
  type: "azure_blob",
  outputName: "<value>",
  containerName: "<value>",
  path: "/var",
  extractors: [
    {
      key: "<key>",
      expression: "<value>",
    },
  ],
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
  scheduling: {
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
  type: "google_cloud_storage",
  outputName: "<value>",
  bucket: "<value>",
  path: "/var/tmp",
  extractors: [
    {
      key: "<key>",
      expression: "<value>",
    },
  ],
  endpoint: "<value>",
};
```

### `models.CollectorHealthCheck`

```typescript
const value: models.CollectorHealthCheck = {
  discovery: {},
  collectUrl: "https://downright-circumference.net",
  collectRequestParams: "<value>",
  collectBody: "<value>",
  collectRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  defaultBreakers: "Cribl",
  safeHeaders: [
    "<value 1>",
    "<value 2>",
  ],
  retryRules: {
    interval: "<value>",
    limit: "<value>",
    multiplier: "<value>",
    codes: "<value>",
    enableHeader: "<value>",
  },
  type: "health_check",
};
```

### `models.CollectorRest`

```typescript
const value: models.CollectorRest = {
  type: "rest",
  discovery: {},
  collectUrl: "https://easy-republican.com",
  collectVerb: "<value>",
  collectRequestParams: "<value>",
  collectBody: "<value>",
  collectRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  pagination: {},
  safeHeaders: [
    "<value 1>",
  ],
  retryRules: {
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
      enabled: false,
    },
  },
};
```

### `models.CollectorS3`

```typescript
const value: models.CollectorS3 = {
  type: "s3",
  outputName: "<value>",
  bucket: "<value>",
  region: "<value>",
  path: "/boot",
  extractors: [
    {
      key: "<key>",
      expression: "<value>",
    },
  ],
  endpoint: "<value>",
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  recurse: "<value>",
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
  type: "splunk",
  search: "<value>",
  earliest: "<value>",
  latest: "<value>",
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
  retryRules: {
    interval: "<value>",
    limit: "<value>",
    multiplier: "<value>",
    codes: "<value>",
    enableHeader: "<value>",
    retryConnectTimeout: "<value>",
    retryConnectReset: "<value>",
  },
};
```

