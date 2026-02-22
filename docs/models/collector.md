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
    containerName: "<value>",
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
  },
};
```

### `models.CollectorFilesystem`

```typescript
const value: models.CollectorFilesystem = {
  type: "filesystem",
  conf: {
    path: "/Library",
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
    bucket: "<value>",
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
    authHeaderExpr: "<value>",
    collectUrl: "https://fantastic-sanity.info",
    collectMethod: "post_with_body",
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
    collectUrl: "https://simplistic-cardboard.biz/",
    collectMethod: "other",
  },
};
```

### `models.CollectorS3`

```typescript
const value: models.CollectorS3 = {
  type: "s3",
  conf: {
    awsAuthenticationMethod: "auto",
    bucket: "<value>",
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
    searchHead: "<value>",
    search: "<value>",
    endpoint: "<value>",
    outputMode: "json",
  },
};
```

