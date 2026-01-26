# GoogleCloudStorageCollectorConf


## Supported Types

### `models.GoogleCloudStorageAuthTypeAuto`

```typescript
const value: models.GoogleCloudStorageAuthTypeAuto = {
  authType: "auto",
  outputName: "<value>",
  bucket: "<value>",
  path: "/usr/obj",
  extractors: [
    {
      key: "<key>",
      expression: "<value>",
    },
  ],
  endpoint: "<value>",
  disableTimeFilter: true,
  recurse: true,
  maxBatchSize: 8324.8,
  parquetChunkSizeMB: 2453.03,
  parquetChunkDownloadTimeout: 8070.41,
};
```

### `models.GoogleCloudStorageAuthTypeManual`

```typescript
const value: models.GoogleCloudStorageAuthTypeManual = {
  authType: "manual",
  serviceAccountCredentials: "<value>",
  outputName: "<value>",
  bucket: "<value>",
  path: "/usr/include",
  extractors: [
    {
      key: "<key>",
      expression: "<value>",
    },
  ],
  endpoint: "<value>",
  disableTimeFilter: true,
  recurse: true,
  maxBatchSize: 9246.86,
  parquetChunkSizeMB: 6359.7,
  parquetChunkDownloadTimeout: 7241.64,
};
```

### `models.GoogleCloudStorageAuthTypeSecret`

```typescript
const value: models.GoogleCloudStorageAuthTypeSecret = {
  authType: "secret",
  textSecret: "<value>",
  outputName: "<value>",
  bucket: "<value>",
  path: "/boot",
  extractors: [
    {
      key: "<key>",
      expression: "<value>",
    },
  ],
  endpoint: "<value>",
  disableTimeFilter: true,
  recurse: false,
  maxBatchSize: 3411.84,
  parquetChunkSizeMB: 7593.48,
  parquetChunkDownloadTimeout: 6733.73,
};
```

