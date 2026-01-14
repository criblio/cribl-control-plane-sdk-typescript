# InputCrowdstrike


## Supported Types

### `models.InputCrowdstrikeSendToRoutesTrueConstraint`

```typescript
const value: models.InputCrowdstrikeSendToRoutesTrueConstraint = {
  sendToRoutes: true,
  id: "<id>",
  type: "crowdstrike",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
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
  reuseConnections: true,
  rejectUnauthorized: true,
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
  ],
  staleChannelFlushMs: 5844.42,
  maxMessages: 3194.11,
  visibilityTimeout: 5086.09,
  numReceivers: 8401.61,
  socketTimeout: 5440.54,
  skipOnError: true,
  includeSqsMetadata: false,
  enableAssumeRole: true,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 140.59,
  enableSQSAssumeRole: false,
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
  checkpointing: {
    enabled: true,
    retries: 4599.59,
  },
  pollTimeout: 1416.78,
  encoding: "<value>",
  description: "fortunately tepid but",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  tagAfterProcessing: "true",
  processedTagKey: "<value>",
  processedTagValue: "<value>",
};
```

### `models.InputCrowdstrikeSendToRoutesFalseWithConnectionsConstraint`

```typescript
const value: models.InputCrowdstrikeSendToRoutesFalseWithConnectionsConstraint =
  {
    sendToRoutes: false,
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    id: "<id>",
    type: "crowdstrike",
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
    rejectUnauthorized: false,
    breakerRulesets: [
      "<value 1>",
      "<value 2>",
    ],
    staleChannelFlushMs: 9222.49,
    maxMessages: 6842.68,
    visibilityTimeout: 559.18,
    numReceivers: 9300.92,
    socketTimeout: 7337.7,
    skipOnError: false,
    includeSqsMetadata: false,
    enableAssumeRole: false,
    assumeRoleArn: "<value>",
    assumeRoleExternalId: "<id>",
    durationSeconds: 391.59,
    enableSQSAssumeRole: false,
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
    checkpointing: {
      enabled: true,
      retries: 4599.59,
    },
    pollTimeout: 725.83,
    encoding: "<value>",
    description: "how helpfully stock like ascribe internationalize within",
    awsApiKey: "<value>",
    awsSecret: "<value>",
    tagAfterProcessing: "true",
    processedTagKey: "<value>",
    processedTagValue: "<value>",
  };
```

### `models.InputCrowdstrikePqEnabledFalseConstraint`

```typescript
const value: models.InputCrowdstrikePqEnabledFalseConstraint = {
  pqEnabled: true,
  id: "<id>",
  type: "crowdstrike",
  disabled: false,
  pipeline: "<value>",
  sendToRoutes: false,
  environment: "<value>",
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
    "<value 3>",
  ],
  staleChannelFlushMs: 8700.93,
  maxMessages: 4528.06,
  visibilityTimeout: 8104.15,
  numReceivers: 1815.7,
  socketTimeout: 4221.85,
  skipOnError: true,
  includeSqsMetadata: false,
  enableAssumeRole: true,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 5846.13,
  enableSQSAssumeRole: false,
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
  checkpointing: {
    enabled: true,
    retries: 4599.59,
  },
  pollTimeout: 9409.97,
  encoding: "<value>",
  description: "founder filthy redact finer colorize besides",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  tagAfterProcessing: "true",
  processedTagKey: "<value>",
  processedTagValue: "<value>",
};
```

### `models.InputCrowdstrikePqEnabledTrueWithPqConstraint`

```typescript
const value: models.InputCrowdstrikePqEnabledTrueWithPqConstraint = {
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
  type: "crowdstrike",
  disabled: false,
  pipeline: "<value>",
  sendToRoutes: true,
  environment: "<value>",
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
    "<value 2>",
  ],
  staleChannelFlushMs: 3048.33,
  maxMessages: 5683.91,
  visibilityTimeout: 4260.24,
  numReceivers: 479.96,
  socketTimeout: 9186.38,
  skipOnError: true,
  includeSqsMetadata: false,
  enableAssumeRole: true,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 2234.47,
  enableSQSAssumeRole: false,
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
  checkpointing: {
    enabled: true,
    retries: 4599.59,
  },
  pollTimeout: 8781.3,
  encoding: "<value>",
  description: "like healthily likewise corner along how provided",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  tagAfterProcessing: "false",
  processedTagKey: "<value>",
  processedTagValue: "<value>",
};
```

