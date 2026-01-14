# InputS3Inventory


## Supported Types

### `models.InputS3InventorySendToRoutesTrueConstraint`

```typescript
const value: models.InputS3InventorySendToRoutesTrueConstraint = {
  sendToRoutes: false,
  id: "<id>",
  type: "s3_inventory",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: true,
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
  awsAccountId: "<id>",
  awsAuthenticationMethod: "<value>",
  awsSecretKey: "<value>",
  region: "<value>",
  endpoint: "<value>",
  signatureVersion: "v4",
  reuseConnections: false,
  rejectUnauthorized: true,
  breakerRulesets: [
    "<value 1>",
  ],
  staleChannelFlushMs: 5186.38,
  maxMessages: 7550.51,
  visibilityTimeout: 1316.24,
  numReceivers: 3803.15,
  socketTimeout: 6936.1,
  skipOnError: false,
  includeSqsMetadata: true,
  enableAssumeRole: true,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 1195.87,
  enableSQSAssumeRole: true,
  preprocess: {
    disabled: false,
    command: "<value>",
    args: [
      "<value 1>",
    ],
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  parquetChunkSizeMB: 7254.41,
  parquetChunkDownloadTimeout: 4292.1,
  checkpointing: {
    enabled: true,
    retries: 4599.59,
  },
  pollTimeout: 8159.02,
  checksumSuffix: "<value>",
  maxManifestSizeKB: 769266,
  validateInventoryFiles: true,
  description:
    "keel preheat consequently but vicinity overconfidently alongside when hm sit",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  tagAfterProcessing: "true",
  processedTagKey: "<value>",
  processedTagValue: "<value>",
};
```

### `models.InputS3InventorySendToRoutesFalseWithConnectionsConstraint`

```typescript
const value: models.InputS3InventorySendToRoutesFalseWithConnectionsConstraint =
  {
    sendToRoutes: false,
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    id: "<id>",
    type: "s3_inventory",
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
    awsAccountId: "<id>",
    awsAuthenticationMethod: "<value>",
    awsSecretKey: "<value>",
    region: "<value>",
    endpoint: "<value>",
    signatureVersion: "v4",
    reuseConnections: false,
    rejectUnauthorized: true,
    breakerRulesets: [
      "<value 1>",
      "<value 2>",
    ],
    staleChannelFlushMs: 3696.54,
    maxMessages: 9892.45,
    visibilityTimeout: 120.62,
    numReceivers: 9226.55,
    socketTimeout: 9063.46,
    skipOnError: true,
    includeSqsMetadata: false,
    enableAssumeRole: false,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 4479.28,
    enableSQSAssumeRole: true,
    preprocess: {
      disabled: false,
      command: "<value>",
      args: [
        "<value 1>",
      ],
    },
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    parquetChunkSizeMB: 1808.32,
    parquetChunkDownloadTimeout: 1896.04,
    checkpointing: {
      enabled: true,
      retries: 4599.59,
    },
    pollTimeout: 5026.01,
    checksumSuffix: "<value>",
    maxManifestSizeKB: 768081,
    validateInventoryFiles: false,
    description:
      "wherever outfit when indeed joyfully opposite formula psst draw",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    tagAfterProcessing: "true",
    processedTagKey: "<value>",
    processedTagValue: "<value>",
  };
```

### `models.InputS3InventoryPqEnabledFalseConstraint`

```typescript
const value: models.InputS3InventoryPqEnabledFalseConstraint = {
  pqEnabled: false,
  id: "<id>",
  type: "s3_inventory",
  disabled: true,
  pipeline: "<value>",
  sendToRoutes: false,
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
  awsAccountId: "<id>",
  awsAuthenticationMethod: "<value>",
  awsSecretKey: "<value>",
  region: "<value>",
  endpoint: "<value>",
  signatureVersion: "v2",
  reuseConnections: true,
  rejectUnauthorized: false,
  breakerRulesets: [
    "<value 1>",
  ],
  staleChannelFlushMs: 3633.3,
  maxMessages: 1377.68,
  visibilityTimeout: 3507.87,
  numReceivers: 2729.18,
  socketTimeout: 8871.42,
  skipOnError: false,
  includeSqsMetadata: true,
  enableAssumeRole: true,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 4382.13,
  enableSQSAssumeRole: true,
  preprocess: {
    disabled: false,
    command: "<value>",
    args: [
      "<value 1>",
    ],
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  parquetChunkSizeMB: 4595.56,
  parquetChunkDownloadTimeout: 8047.51,
  checkpointing: {
    enabled: true,
    retries: 4599.59,
  },
  pollTimeout: 5044.24,
  checksumSuffix: "<value>",
  maxManifestSizeKB: 275149,
  validateInventoryFiles: false,
  description: "aw whose including yet deep",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  tagAfterProcessing: "false",
  processedTagKey: "<value>",
  processedTagValue: "<value>",
};
```

### `models.InputS3InventoryPqEnabledTrueWithPqConstraint`

```typescript
const value: models.InputS3InventoryPqEnabledTrueWithPqConstraint = {
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
  type: "s3_inventory",
  disabled: true,
  pipeline: "<value>",
  sendToRoutes: false,
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
  queueName: "<value>",
  fileFilter: "<value>",
  awsAccountId: "<id>",
  awsAuthenticationMethod: "<value>",
  awsSecretKey: "<value>",
  region: "<value>",
  endpoint: "<value>",
  signatureVersion: "v4",
  reuseConnections: true,
  rejectUnauthorized: true,
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  staleChannelFlushMs: 4821.58,
  maxMessages: 7109.19,
  visibilityTimeout: 4691.76,
  numReceivers: 7280.31,
  socketTimeout: 2239.87,
  skipOnError: true,
  includeSqsMetadata: false,
  enableAssumeRole: false,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 6659.83,
  enableSQSAssumeRole: true,
  preprocess: {
    disabled: false,
    command: "<value>",
    args: [
      "<value 1>",
    ],
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  parquetChunkSizeMB: 1447.19,
  parquetChunkDownloadTimeout: 4739.57,
  checkpointing: {
    enabled: true,
    retries: 4599.59,
  },
  pollTimeout: 9961.5,
  checksumSuffix: "<value>",
  maxManifestSizeKB: 59988,
  validateInventoryFiles: false,
  description: "potable lest or along cinch courageously",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  tagAfterProcessing: "false",
  processedTagKey: "<value>",
  processedTagValue: "<value>",
};
```

