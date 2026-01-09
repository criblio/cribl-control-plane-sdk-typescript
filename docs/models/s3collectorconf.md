# S3CollectorConf


## Supported Types

### `models.S3AwsAuthenticationMethodAuto`

```typescript
const value: models.S3AwsAuthenticationMethodAuto = {
  awsAuthenticationMethod: "auto",
  outputName: "<value>",
  bucket: "<value>",
  region: "<value>",
  path: "/etc/defaults",
  extractors: [
    {
      key: "<key>",
      expression: "<value>",
    },
  ],
  endpoint: "<value>",
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  recurse: "<value>",
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
  region: "<value>",
  path: "/sys",
  extractors: [
    {
      key: "<key>",
      expression: "<value>",
    },
  ],
  endpoint: "<value>",
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  recurse: "<value>",
};
```

### `models.S3AwsAuthenticationMethodSecret`

```typescript
const value: models.S3AwsAuthenticationMethodSecret = {
  awsAuthenticationMethod: "secret",
  awsSecret: "<value>",
  outputName: "<value>",
  bucket: "<value>",
  region: "<value>",
  path: "/usr/X11R6",
  extractors: [
    {
      key: "<key>",
      expression: "<value>",
    },
  ],
  endpoint: "<value>",
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  recurse: "<value>",
};
```

