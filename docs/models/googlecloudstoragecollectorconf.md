# GoogleCloudStorageCollectorConf


## Supported Types

### `models.GoogleCloudStorageAuthTypeAuto`

```typescript
const value: models.GoogleCloudStorageAuthTypeAuto = {
  authType: "auto",
  bucket: "<value>",
};
```

### `models.GoogleCloudStorageAuthTypeManual`

```typescript
const value: models.GoogleCloudStorageAuthTypeManual = {
  authType: "manual",
  serviceAccountCredentials: "<value>",
  bucket: "<value>",
};
```

### `models.GoogleCloudStorageAuthTypeSecret`

```typescript
const value: models.GoogleCloudStorageAuthTypeSecret = {
  authType: "secret",
  textSecret: "<value>",
  bucket: "<value>",
};
```

