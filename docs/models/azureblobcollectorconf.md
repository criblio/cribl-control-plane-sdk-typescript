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
  outputName: "<value>",
  containerName: "<value>",
  path: "/private",
  extractors: [
    {
      key: "<key>",
      expression: "<value>",
    },
  ],
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
};
```

