# InputAzureBlob


## Supported Types

### `operations.InputAzureBlobSendToRoutesTrueConstraint`

```typescript
const value: operations.InputAzureBlobSendToRoutesTrueConstraint = {
  sendToRoutes: false,
  id: "<id>",
  type: "azure_blob",
  disabled: true,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: true,
  streamtags: [
    "<value 1>",
    "<value 2>",
  ],
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  pq: {
    mode: "smart",
    maxBufferSize: 1717.96,
    commitFrequency: 1412.18,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/opt/include",
    compress: "none",
    pqControls: {},
  },
  queueName: "<value>",
  fileFilter: "<value>",
  visibilityTimeout: 7280.64,
  numReceivers: 8020.39,
  maxMessages: 6505.39,
  servicePeriodSecs: 1735.92,
  skipOnError: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
  ],
  staleChannelFlushMs: 9371.28,
  parquetChunkSizeMB: 1022.46,
  parquetChunkDownloadTimeout: 4838.96,
  authType: "secret",
  description: "coin frilly zowie wobbly cruelly unto repossess bah bran",
  connectionString: "<value>",
  textSecret: "<value>",
  storageAccountName: "<value>",
  tenantId: "<id>",
  clientId: "<id>",
  azureCloud: "<value>",
  endpointSuffix: "<value>",
  clientTextSecret: "<value>",
  certificate: {
    certificateName: "<value>",
  },
};
```

### `operations.InputAzureBlobSendToRoutesFalseWithConnectionsConstraint`

```typescript
const value:
  operations.InputAzureBlobSendToRoutesFalseWithConnectionsConstraint = {
    sendToRoutes: false,
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    id: "<id>",
    type: "azure_blob",
    disabled: false,
    pipeline: "<value>",
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    pq: {
      mode: "smart",
      maxBufferSize: 1717.96,
      commitFrequency: 1412.18,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/include",
      compress: "none",
      pqControls: {},
    },
    queueName: "<value>",
    fileFilter: "<value>",
    visibilityTimeout: 6967.29,
    numReceivers: 372.26,
    maxMessages: 8624,
    servicePeriodSecs: 4809.55,
    skipOnError: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    breakerRulesets: [
      "<value 1>",
      "<value 2>",
    ],
    staleChannelFlushMs: 1562.53,
    parquetChunkSizeMB: 9456.51,
    parquetChunkDownloadTimeout: 6877.71,
    authType: "clientCert",
    description: "until retract knowledgeably boohoo",
    connectionString: "<value>",
    textSecret: "<value>",
    storageAccountName: "<value>",
    tenantId: "<id>",
    clientId: "<id>",
    azureCloud: "<value>",
    endpointSuffix: "<value>",
    clientTextSecret: "<value>",
    certificate: {
      certificateName: "<value>",
    },
  };
```

### `operations.InputAzureBlobPqEnabledFalseConstraint`

```typescript
const value: operations.InputAzureBlobPqEnabledFalseConstraint = {
  pqEnabled: true,
  id: "<id>",
  type: "azure_blob",
  disabled: true,
  pipeline: "<value>",
  sendToRoutes: true,
  environment: "<value>",
  streamtags: [
    "<value 1>",
  ],
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  pq: {
    mode: "smart",
    maxBufferSize: 1717.96,
    commitFrequency: 1412.18,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/opt/include",
    compress: "none",
    pqControls: {},
  },
  queueName: "<value>",
  fileFilter: "<value>",
  visibilityTimeout: 2205.73,
  numReceivers: 3966.49,
  maxMessages: 289.44,
  servicePeriodSecs: 7191.31,
  skipOnError: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
  ],
  staleChannelFlushMs: 1613.84,
  parquetChunkSizeMB: 777.47,
  parquetChunkDownloadTimeout: 9802.16,
  authType: "manual",
  description:
    "burgeon questionably outside descendant huzzah sticky behest junior outrun wonderfully",
  connectionString: "<value>",
  textSecret: "<value>",
  storageAccountName: "<value>",
  tenantId: "<id>",
  clientId: "<id>",
  azureCloud: "<value>",
  endpointSuffix: "<value>",
  clientTextSecret: "<value>",
  certificate: {
    certificateName: "<value>",
  },
};
```

### `operations.InputAzureBlobPqEnabledTrueWithPqConstraint`

```typescript
const value: operations.InputAzureBlobPqEnabledTrueWithPqConstraint = {
  pqEnabled: true,
  pq: {
    mode: "smart",
    maxBufferSize: 1717.96,
    commitFrequency: 1412.18,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/opt/include",
    compress: "none",
    pqControls: {},
  },
  id: "<id>",
  type: "azure_blob",
  disabled: true,
  pipeline: "<value>",
  sendToRoutes: true,
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  queueName: "<value>",
  fileFilter: "<value>",
  visibilityTimeout: 5359.8,
  numReceivers: 2209.53,
  maxMessages: 8181.16,
  servicePeriodSecs: 9003.8,
  skipOnError: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  staleChannelFlushMs: 5330.43,
  parquetChunkSizeMB: 648.17,
  parquetChunkDownloadTimeout: 7733.57,
  authType: "clientSecret",
  description: "duh colorfully except",
  connectionString: "<value>",
  textSecret: "<value>",
  storageAccountName: "<value>",
  tenantId: "<id>",
  clientId: "<id>",
  azureCloud: "<value>",
  endpointSuffix: "<value>",
  clientTextSecret: "<value>",
  certificate: {
    certificateName: "<value>",
  },
};
```

