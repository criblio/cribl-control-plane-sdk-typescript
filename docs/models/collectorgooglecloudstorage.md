# CollectorGoogleCloudStorage


## Supported Types

### `models.CollectorGoogleCloudStorageGoogleCloudStorage1`

```typescript
const value: models.CollectorGoogleCloudStorageGoogleCloudStorage1 = {
  type: "google_cloud_storage",
  outputName: "<value>",
  bucket: "<value>",
  path: "/etc/periodic",
  extractors: [
    {
      key: "<key>",
      expression: "<value>",
    },
  ],
  endpoint: "<value>",
  serviceAccountCredentials: "<value>",
  textSecret: "<value>",
};
```

### `models.CollectorGoogleCloudStorageGoogleCloudStorage2`

```typescript
const value: models.CollectorGoogleCloudStorageGoogleCloudStorage2 = {
  serviceAccountCredentials: "<value>",
  type: "google_cloud_storage",
  outputName: "<value>",
  bucket: "<value>",
  path: "/var/spool",
  extractors: [
    {
      key: "<key>",
      expression: "<value>",
    },
  ],
  endpoint: "<value>",
  textSecret: "<value>",
};
```

### `models.CollectorGoogleCloudStorageGoogleCloudStorage3`

```typescript
const value: models.CollectorGoogleCloudStorageGoogleCloudStorage3 = {
  textSecret: "<value>",
  type: "google_cloud_storage",
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
  serviceAccountCredentials: "<value>",
};
```

