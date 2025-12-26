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
};
```

