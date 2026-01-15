# AzureBlobCollectorConf


## Supported Types

### `models.AzureBlobAuthTypeManual`

```typescript
const value: models.AzureBlobAuthTypeManual = {
  authType: "manual",
  connectionString: "<value>",
  outputName: "<value>",
  containerName: "<value>",
  path: "/usr/local/bin",
  extractors: [
    {
      key: "<key>",
      expression: "<value>",
    },
  ],
  recurse: false,
  includeMetadata: true,
  includeTags: false,
  maxBatchSize: 5816.74,
  parquetChunkSizeMB: 5632.14,
  parquetChunkDownloadTimeout: 6143.11,
};
```

### `models.AzureBlobAuthTypeSecret`

```typescript
const value: models.AzureBlobAuthTypeSecret = {
  authType: "secret",
  textSecret: "<value>",
  outputName: "<value>",
  containerName: "<value>",
  path: "/private/var",
  extractors: [
    {
      key: "<key>",
      expression: "<value>",
    },
  ],
  recurse: false,
  includeMetadata: true,
  includeTags: false,
  maxBatchSize: 434.23,
  parquetChunkSizeMB: 3297.83,
  parquetChunkDownloadTimeout: 1878.93,
};
```

### `models.AzureBlobAuthTypeClientSecret`

```typescript
const value: models.AzureBlobAuthTypeClientSecret = {
  authType: "clientSecret",
  storageAccountName: "<value>",
  tenantId: "<id>",
  clientId: "<id>",
  clientTextSecret: "<value>",
  endpointSuffix: "<value>",
  azureCloud: "<value>",
  outputName: "<value>",
  containerName: "<value>",
  path: "/private",
  extractors: [
    {
      key: "<key>",
      expression: "<value>",
    },
  ],
  recurse: true,
  includeMetadata: false,
  includeTags: true,
  maxBatchSize: 7129.12,
  parquetChunkSizeMB: 924.83,
  parquetChunkDownloadTimeout: 3879.64,
};
```

### `models.AzureBlobAuthTypeClientCert`

```typescript
const value: models.AzureBlobAuthTypeClientCert = {
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
  path: "/etc/periodic",
  extractors: [
    {
      key: "<key>",
      expression: "<value>",
    },
  ],
  recurse: false,
  includeMetadata: true,
  includeTags: true,
  maxBatchSize: 6646.64,
  parquetChunkSizeMB: 2653.83,
  parquetChunkDownloadTimeout: 2784.48,
};
```

