# S3CollectorConf


## Supported Types

### `models.S3AwsAuthenticationMethodAuto`

```typescript
const value: models.S3AwsAuthenticationMethodAuto = {
  awsAuthenticationMethod: "auto",
  outputName: "<value>",
  bucket: "<value>",
  parquetChunkSizeMB: 1076.96,
  parquetChunkDownloadTimeout: 219.62,
  region: "<value>",
  path: "/opt",
  partitioningScheme: "none",
  extractors: [
    {
      key: "<key>",
      expression: "<value>",
    },
  ],
  endpoint: "<value>",
  signatureVersion: "v2",
  enableAssumeRole: true,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 2211.36,
  maxBatchSize: 2607.49,
  recurse: "<value>",
  reuseConnections: false,
  rejectUnauthorized: true,
  verifyPermissions: false,
  disableTimeFilter: true,
};
```

### `models.S3AwsAuthenticationMethodManual`

```typescript
const value: models.S3AwsAuthenticationMethodManual = {
  awsAuthenticationMethod: "manual",
  awsApiKey: "<value>",
  awsSecretKey: "<value>",
  outputName: "<value>",
  bucket: "<value>",
  parquetChunkSizeMB: 6093.88,
  parquetChunkDownloadTimeout: 6177.24,
  region: "<value>",
  path: "/var/mail",
  partitioningScheme: "ddss",
  extractors: [
    {
      key: "<key>",
      expression: "<value>",
    },
  ],
  endpoint: "<value>",
  signatureVersion: "v4",
  enableAssumeRole: true,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 1583.72,
  maxBatchSize: 1694.29,
  recurse: "<value>",
  reuseConnections: true,
  rejectUnauthorized: false,
  verifyPermissions: false,
  disableTimeFilter: true,
};
```

### `models.S3AwsAuthenticationMethodSecret`

```typescript
const value: models.S3AwsAuthenticationMethodSecret = {
  awsAuthenticationMethod: "secret",
  awsSecret: "<value>",
  outputName: "<value>",
  bucket: "<value>",
  parquetChunkSizeMB: 6863.54,
  parquetChunkDownloadTimeout: 7443,
  region: "<value>",
  path: "/proc",
  partitioningScheme: "none",
  extractors: [
    {
      key: "<key>",
      expression: "<value>",
    },
  ],
  endpoint: "<value>",
  signatureVersion: "v2",
  enableAssumeRole: true,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 2574.95,
  maxBatchSize: 9056.47,
  recurse: "<value>",
  reuseConnections: true,
  rejectUnauthorized: true,
  verifyPermissions: false,
  disableTimeFilter: false,
};
```

