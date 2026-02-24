# AzureBlobCollectorConf


## Supported Types

### `models.AzureBlobAuthTypeManual`

```typescript
const value: models.AzureBlobAuthTypeManual = {
  authType: "manual",
  connectionString: "<value>",
  containerName: "<value>",
};
```

### `models.AzureBlobAuthTypeSecret`

```typescript
const value: models.AzureBlobAuthTypeSecret = {
  authType: "secret",
  textSecret: "<value>",
  containerName: "<value>",
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
  containerName: "<value>",
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
  containerName: "<value>",
};
```

