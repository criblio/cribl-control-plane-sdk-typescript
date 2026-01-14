# InputKinesis


## Supported Types

### `models.InputKinesisSendToRoutesTrueConstraint`

```typescript
const value: models.InputKinesisSendToRoutesTrueConstraint = {
  sendToRoutes: true,
  id: "<id>",
  type: "kinesis",
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
  streamName: "<value>",
  serviceInterval: 7863.75,
  shardExpr: "<value>",
  shardIteratorType: "LATEST",
  payloadFormat: "line",
  getRecordsLimit: 2397.18,
  getRecordsLimitTotal: 5340.2,
  loadBalancingAlgorithm: "ConsistentHashing",
  awsAuthenticationMethod: "<value>",
  awsSecretKey: "<value>",
  region: "<value>",
  endpoint: "<value>",
  signatureVersion: "v4",
  reuseConnections: false,
  rejectUnauthorized: false,
  enableAssumeRole: true,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 7085.35,
  verifyKPLCheckSums: false,
  avoidDuplicates: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "worriedly psst shallow whose boohoo vice weird merge unibody",
  awsApiKey: "<value>",
  awsSecret: "<value>",
};
```

### `models.InputKinesisSendToRoutesFalseWithConnectionsConstraint`

```typescript
const value: models.InputKinesisSendToRoutesFalseWithConnectionsConstraint = {
  sendToRoutes: false,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "kinesis",
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
  streamName: "<value>",
  serviceInterval: 9933.12,
  shardExpr: "<value>",
  shardIteratorType: "LATEST",
  payloadFormat: "cribl",
  getRecordsLimit: 8618.95,
  getRecordsLimitTotal: 6451.42,
  loadBalancingAlgorithm: "ConsistentHashing",
  awsAuthenticationMethod: "<value>",
  awsSecretKey: "<value>",
  region: "<value>",
  endpoint: "<value>",
  signatureVersion: "v4",
  reuseConnections: false,
  rejectUnauthorized: false,
  enableAssumeRole: false,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 6721.01,
  verifyKPLCheckSums: true,
  avoidDuplicates: true,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description:
    "phooey lend elegantly horn bus approach coal merry failing service",
  awsApiKey: "<value>",
  awsSecret: "<value>",
};
```

### `models.InputKinesisPqEnabledFalseConstraint`

```typescript
const value: models.InputKinesisPqEnabledFalseConstraint = {
  pqEnabled: false,
  id: "<id>",
  type: "kinesis",
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
  streamName: "<value>",
  serviceInterval: 2850.53,
  shardExpr: "<value>",
  shardIteratorType: "LATEST",
  payloadFormat: "line",
  getRecordsLimit: 4266.69,
  getRecordsLimitTotal: 5131.57,
  loadBalancingAlgorithm: "ConsistentHashing",
  awsAuthenticationMethod: "<value>",
  awsSecretKey: "<value>",
  region: "<value>",
  endpoint: "<value>",
  signatureVersion: "v2",
  reuseConnections: false,
  rejectUnauthorized: true,
  enableAssumeRole: true,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 517.81,
  verifyKPLCheckSums: false,
  avoidDuplicates: true,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "circa a mostly strategy yippee really",
  awsApiKey: "<value>",
  awsSecret: "<value>",
};
```

### `models.InputKinesisPqEnabledTrueWithPqConstraint`

```typescript
const value: models.InputKinesisPqEnabledTrueWithPqConstraint = {
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
  type: "kinesis",
  disabled: false,
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
  streamName: "<value>",
  serviceInterval: 2745.67,
  shardExpr: "<value>",
  shardIteratorType: "TRIM_HORIZON",
  payloadFormat: "line",
  getRecordsLimit: 9995.59,
  getRecordsLimitTotal: 7169.36,
  loadBalancingAlgorithm: "ConsistentHashing",
  awsAuthenticationMethod: "<value>",
  awsSecretKey: "<value>",
  region: "<value>",
  endpoint: "<value>",
  signatureVersion: "v2",
  reuseConnections: false,
  rejectUnauthorized: false,
  enableAssumeRole: false,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 8429.34,
  verifyKPLCheckSums: false,
  avoidDuplicates: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "eek successfully remark before upward bowling flood",
  awsApiKey: "<value>",
  awsSecret: "<value>",
};
```

