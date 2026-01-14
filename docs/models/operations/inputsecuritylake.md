# InputSecurityLake


## Supported Types

### `operations.InputSecurityLakeSendToRoutesTrueConstraint`

```typescript
const value: operations.InputSecurityLakeSendToRoutesTrueConstraint = {
  sendToRoutes: false,
  id: "<id>",
  type: "security_lake",
  disabled: true,
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
  staleChannelFlushMs: 1208.87,
  maxMessages: 7612.06,
  visibilityTimeout: 6446.45,
  numReceivers: 2767.71,
  socketTimeout: 7779.85,
  skipOnError: false,
  includeSqsMetadata: false,
  enableAssumeRole: false,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 1325.21,
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
  parquetChunkSizeMB: 7390.01,
  parquetChunkDownloadTimeout: 2449.05,
  checkpointing: {
    enabled: true,
    retries: 4599.59,
  },
  pollTimeout: 405.81,
  encoding: "<value>",
  description: "critical alert aha yowza often aha drat supposing",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  tagAfterProcessing: "false",
  processedTagKey: "<value>",
  processedTagValue: "<value>",
};
```

### `operations.InputSecurityLakeSendToRoutesFalseWithConnectionsConstraint`

```typescript
const value:
  operations.InputSecurityLakeSendToRoutesFalseWithConnectionsConstraint = {
    sendToRoutes: true,
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    id: "<id>",
    type: "security_lake",
    disabled: true,
    pipeline: "<value>",
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
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
    reuseConnections: false,
    rejectUnauthorized: false,
    breakerRulesets: [
      "<value 1>",
    ],
    staleChannelFlushMs: 6294.71,
    maxMessages: 4976.62,
    visibilityTimeout: 9736.68,
    numReceivers: 4785.53,
    socketTimeout: 1088.57,
    skipOnError: false,
    includeSqsMetadata: false,
    enableAssumeRole: false,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 8004.4,
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
    parquetChunkSizeMB: 2077.62,
    parquetChunkDownloadTimeout: 4013.62,
    checkpointing: {
      enabled: true,
      retries: 4599.59,
    },
    pollTimeout: 2483.44,
    encoding: "<value>",
    description: "ouch ha insolence hydrolyze",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    tagAfterProcessing: "true",
    processedTagKey: "<value>",
    processedTagValue: "<value>",
  };
```

### `operations.InputSecurityLakePqEnabledFalseConstraint`

```typescript
const value: operations.InputSecurityLakePqEnabledFalseConstraint = {
  pqEnabled: false,
  id: "<id>",
  type: "security_lake",
  disabled: false,
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
  awsAccountId: "<id>",
  awsAuthenticationMethod: "<value>",
  awsSecretKey: "<value>",
  region: "<value>",
  endpoint: "<value>",
  signatureVersion: "v2",
  reuseConnections: true,
  rejectUnauthorized: true,
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
  ],
  staleChannelFlushMs: 6876.55,
  maxMessages: 4074.09,
  visibilityTimeout: 7474.74,
  numReceivers: 3565.03,
  socketTimeout: 3748.38,
  skipOnError: true,
  includeSqsMetadata: false,
  enableAssumeRole: false,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 3680.24,
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
  parquetChunkSizeMB: 4436.69,
  parquetChunkDownloadTimeout: 2168.39,
  checkpointing: {
    enabled: true,
    retries: 4599.59,
  },
  pollTimeout: 291.15,
  encoding: "<value>",
  description:
    "after despite bleak unfortunately equatorial boo cardboard courtroom",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  tagAfterProcessing: "true",
  processedTagKey: "<value>",
  processedTagValue: "<value>",
};
```

### `operations.InputSecurityLakePqEnabledTrueWithPqConstraint`

```typescript
const value: operations.InputSecurityLakePqEnabledTrueWithPqConstraint = {
  pqEnabled: false,
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
  type: "security_lake",
  disabled: false,
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
  queueName: "<value>",
  fileFilter: "<value>",
  awsAccountId: "<id>",
  awsAuthenticationMethod: "<value>",
  awsSecretKey: "<value>",
  region: "<value>",
  endpoint: "<value>",
  signatureVersion: "v4",
  reuseConnections: false,
  rejectUnauthorized: false,
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
  ],
  staleChannelFlushMs: 2770.76,
  maxMessages: 3591.01,
  visibilityTimeout: 7821.79,
  numReceivers: 3167.48,
  socketTimeout: 8851.59,
  skipOnError: false,
  includeSqsMetadata: false,
  enableAssumeRole: false,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 1537.47,
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
  parquetChunkSizeMB: 7410.56,
  parquetChunkDownloadTimeout: 7298.29,
  checkpointing: {
    enabled: true,
    retries: 4599.59,
  },
  pollTimeout: 7404.92,
  encoding: "<value>",
  description: "shakily so phooey yahoo although fairly even ravel",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  tagAfterProcessing: "true",
  processedTagKey: "<value>",
  processedTagValue: "<value>",
};
```

