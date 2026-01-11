# Input


## Supported Types

### `models.InputCollection`

```typescript
const value: models.InputCollection = {
  sendToRoutes: true,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "collection",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
  streamtags: [
    "<value 1>",
  ],
  pq: {
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
  ],
  staleChannelFlushMs: 10000,
  preprocess: {
    disabled: true,
    command: "<value>",
    args: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  throttleRatePerSec: "0",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  output: "<value>",
};
```

### `models.InputKafka`

```typescript
const value: models.InputKafka = {
  sendToRoutes: true,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "kafka",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
  streamtags: [
    "<value 1>",
    "<value 2>",
  ],
  pq: {
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  brokers: [
    "<value 1>",
  ],
  topics: [],
  groupId: "Cribl",
  fromBeginning: true,
  kafkaSchemaRegistry: {
    disabled: true,
    schemaRegistryURL: "http://localhost:8081",
    connectionTimeout: 30000,
    requestTimeout: 30000,
    maxRetries: 1,
    auth: {
      disabled: true,
      credentialsSecret: "<value>",
    },
    tls: {
      disabled: true,
      rejectUnauthorized: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.3",
    },
  },
  connectionTimeout: 10000,
  requestTimeout: 60000,
  maxRetries: 5,
  maxBackOff: 30000,
  initialBackoff: 300,
  backoffRate: 2,
  authenticationTimeout: 10000,
  reauthenticationThreshold: 10000,
  sasl: {
    disabled: true,
    username: "Jocelyn_Casper88",
    password: "PIwQ9BxwvdkIdNi",
    authType: "manual",
    credentialsSecret: "<value>",
    mechanism: "plain",
    keytabLocation: "<value>",
    principal: "<value>",
    brokerServiceClass: "<value>",
    oauthEnabled: false,
    tokenUrl: "https://alive-spear.com",
    clientId: "<id>",
    oauthSecretType: "secret",
    clientTextSecret: "<value>",
    oauthParams: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    saslExtensions: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
  },
  tls: {
    disabled: true,
    rejectUnauthorized: true,
    servername: "<value>",
    certificateName: "<value>",
    caPath: "<value>",
    privKeyPath: "<value>",
    certPath: "<value>",
    passphrase: "<value>",
    minVersion: "TLSv1.2",
    maxVersion: "TLSv1.3",
  },
  sessionTimeout: 30000,
  rebalanceTimeout: 60000,
  heartbeatInterval: 3000,
  autoCommitInterval: 1440.88,
  autoCommitThreshold: 3766.44,
  maxBytesPerPartition: 1048576,
  maxBytes: 10485760,
  maxSocketErrors: 0,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "frizzy faraway ha when",
};
```

### `models.InputMsk`

```typescript
const value: models.InputMsk = {
  sendToRoutes: true,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "msk",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
  streamtags: [
    "<value 1>",
  ],
  pq: {
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  brokers: [
    "<value 1>",
    "<value 2>",
  ],
  topics: [],
  groupId: "Cribl",
  fromBeginning: true,
  sessionTimeout: 30000,
  rebalanceTimeout: 60000,
  heartbeatInterval: 3000,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  kafkaSchemaRegistry: {
    disabled: true,
    schemaRegistryURL: "http://localhost:8081",
    connectionTimeout: 30000,
    requestTimeout: 30000,
    maxRetries: 1,
    auth: {
      disabled: true,
      credentialsSecret: "<value>",
    },
    tls: {
      disabled: true,
      rejectUnauthorized: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.3",
    },
  },
  connectionTimeout: 10000,
  requestTimeout: 60000,
  maxRetries: 5,
  maxBackOff: 30000,
  initialBackoff: 300,
  backoffRate: 2,
  authenticationTimeout: 10000,
  reauthenticationThreshold: 10000,
  awsAuthenticationMethod: "auto",
  awsSecretKey: "<value>",
  region: "<value>",
  endpoint: "<value>",
  signatureVersion: "v4",
  reuseConnections: true,
  rejectUnauthorized: true,
  enableAssumeRole: false,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 3600,
  tls: {
    disabled: false,
    rejectUnauthorized: true,
    servername: "<value>",
    certificateName: "<value>",
    caPath: "<value>",
    privKeyPath: "<value>",
    certPath: "<value>",
    passphrase: "<value>",
    minVersion: "TLSv1.1",
    maxVersion: "TLSv1.3",
  },
  autoCommitInterval: 3085.62,
  autoCommitThreshold: 5538.49,
  maxBytesPerPartition: 1048576,
  maxBytes: 10485760,
  maxSocketErrors: 0,
  description: "fort dwell brr ouch pliers",
  awsApiKey: "<value>",
  awsSecret: "<value>",
};
```

### `models.InputHttp`

```typescript
const value: models.InputHttp = {
  sendToRoutes: true,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "http",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
  streamtags: [
    "<value 1>",
  ],
  pq: {
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  host: "0.0.0.0",
  port: 7700.44,
  authTokens: [
    "<value 1>",
  ],
  tls: {
    disabled: true,
    requestCert: false,
    rejectUnauthorized: true,
    commonNameRegex: "/.*/",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1.2",
  },
  maxActiveReq: 256,
  maxRequestsPerSocket: 0,
  enableProxyHeader: false,
  captureHeaders: false,
  activityLogSampleRate: 100,
  requestTimeout: 0,
  socketTimeout: 0,
  keepAliveTimeout: 5,
  enableHealthCheck: false,
  ipAllowlistRegex: "/.*/",
  ipDenylistRegex: "/^$/",
  criblAPI: "/cribl",
  elasticAPI: "/elastic",
  splunkHecAPI: "/services/collector",
  splunkHecAcks: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  authTokensExt: [
    {
      token: "<value>",
      description: "demob apropos indeed ceramic scrabble however given scorn",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
    },
  ],
  description: "meh teammate service rot international doubter sandbar",
};
```

### `models.InputSplunk`

```typescript
const value: models.InputSplunk = {
  sendToRoutes: true,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "splunk",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
  streamtags: [
    "<value 1>",
  ],
  pq: {
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  host: "0.0.0.0",
  port: 1846.59,
  tls: {
    disabled: true,
    requestCert: false,
    rejectUnauthorized: true,
    commonNameRegex: "/.*/",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1.2",
  },
  ipWhitelistRegex: "/.*/",
  maxActiveCxn: 1000,
  socketIdleTimeout: 0,
  socketEndingMaxWait: 30,
  socketMaxLifespan: 0,
  enableProxyHeader: false,
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
  staleChannelFlushMs: 10000,
  authTokens: [
    {
      token: "<value>",
      description:
        "diagram against like republican longingly huzzah where unimpressively per",
    },
  ],
  maxS2Sversion: "v3",
  description: "statement unnecessarily pepper readjust sandbar",
  useFwdTimezone: true,
  dropControlFields: true,
  extractMetrics: false,
  compress: "disabled",
};
```

### `models.InputSplunkSearch`

```typescript
const value: models.InputSplunkSearch = {
  sendToRoutes: true,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "splunk_search",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
  streamtags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  pq: {
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  searchHead: "https://localhost:8089",
  search: "<value>",
  earliest: "-16m@m",
  latest: "-1m@m",
  cronSchedule: "*/15 * * * *",
  endpoint: "/services/search/v2/jobs/export",
  outputMode: "json",
  endpointParams: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  endpointHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  logLevel: "error",
  requestTimeout: 0,
  useRoundRobinDns: false,
  rejectUnauthorized: false,
  encoding: "<value>",
  keepAliveTime: 30,
  jobTimeout: "0",
  maxMissedKeepAlives: 3,
  ttl: "4h",
  ignoreGroupJobsLimit: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  retryRules: {
    type: "backoff",
    interval: 1000,
    limit: 5,
    multiplier: 2,
    codes: [
      3836.07,
    ],
    enableHeader: true,
    retryConnectTimeout: false,
    retryConnectReset: false,
  },
  breakerRulesets: [
    "<value 1>",
  ],
  staleChannelFlushMs: 10000,
  authType: "basic",
  description: "whoa hmph shakily fooey",
  username: "Alena71",
  password: "GgMmEYENj1CWszJ",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://well-off-accompanist.info/",
  secretParamName: "<value>",
  secret: "<value>",
  tokenAttributeName: "<value>",
  authHeaderExpr: "`Bearer ${token}`",
  tokenTimeoutSecs: 3600,
  oauthParams: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  oauthHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
};
```

### `models.InputSplunkHec`

```typescript
const value: models.InputSplunkHec = {
  sendToRoutes: true,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "splunk_hec",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
  streamtags: [
    "<value 1>",
  ],
  pq: {
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  host: "0.0.0.0",
  port: 575.46,
  authTokens: [
    {
      authType: "manual",
      tokenSecret: "<value>",
      token: "<value>",
      enabled: true,
      description: "motionless jubilant agile",
      allowedIndexesAtToken: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
    },
  ],
  tls: {
    disabled: true,
    requestCert: false,
    rejectUnauthorized: true,
    commonNameRegex: "/.*/",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1.2",
  },
  maxActiveReq: 256,
  maxRequestsPerSocket: 0,
  enableProxyHeader: false,
  captureHeaders: false,
  activityLogSampleRate: 100,
  requestTimeout: 0,
  socketTimeout: 0,
  keepAliveTimeout: 5,
  enableHealthCheck: "<value>",
  ipAllowlistRegex: "/.*/",
  ipDenylistRegex: "/^$/",
  splunkHecAPI: "/services/collector",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  allowedIndexes: [
    "<value 1>",
  ],
  splunkHecAcks: false,
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  staleChannelFlushMs: 10000,
  useFwdTimezone: true,
  dropControlFields: true,
  extractMetrics: false,
  accessControlAllowOrigin: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  accessControlAllowHeaders: [
    "<value 1>",
    "<value 2>",
  ],
  emitTokenMetrics: false,
  description:
    "farm instead cinema quaver greatly readjust premier entrench past lest",
};
```

### `models.InputAzureBlob`

```typescript
const value: models.InputAzureBlob = {
  sendToRoutes: true,
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
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  queueName: "<value>",
  fileFilter: "/.*/",
  visibilityTimeout: 600,
  numReceivers: 1,
  maxMessages: 1,
  servicePeriodSecs: 5,
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
  staleChannelFlushMs: 10000,
  parquetChunkSizeMB: 5,
  parquetChunkDownloadTimeout: 600,
  authType: "manual",
  description: "private webbed raw so",
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

### `models.InputElastic`

```typescript
const value: models.InputElastic = {
  sendToRoutes: true,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "elastic",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
  streamtags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  pq: {
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  host: "0.0.0.0",
  port: 8980.92,
  tls: {
    disabled: true,
    requestCert: false,
    rejectUnauthorized: true,
    commonNameRegex: "/.*/",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1.2",
  },
  maxActiveReq: 256,
  maxRequestsPerSocket: 0,
  enableProxyHeader: false,
  captureHeaders: false,
  activityLogSampleRate: 100,
  requestTimeout: 0,
  socketTimeout: 0,
  keepAliveTimeout: 5,
  enableHealthCheck: false,
  ipAllowlistRegex: "/.*/",
  ipDenylistRegex: "/^$/",
  elasticAPI: "/",
  authType: "none",
  apiVersion: "8.3.2",
  extraHttpHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  proxyMode: {
    enabled: false,
    authType: "none",
    username: "Cleora.Schinner62",
    password: "5KMRlcpcktj90M0",
    credentialsSecret: "<value>",
    url: "https://scientific-pepper.net",
    rejectUnauthorized: false,
    removeHeaders: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    timeoutSec: 60,
  },
  description: "forenenst ah like definitive awareness carelessly",
  username: "Davon_Hagenes",
  password: "6vFmVRDEkfXqSUu",
  credentialsSecret: "<value>",
  authTokens: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  customAPIVersion:
    "{\n    \"name\": \"AzU84iL\",\n    \"cluster_name\": \"cribl\",\n    \"cluster_uuid\": \"Js6_Z2VKS3KbfRSxPmPbaw\",\n    \"version\": {\n        \"number\": \"8.3.2\",\n        \"build_type\": \"tar\",\n        \"build_hash\": \"bca0c8d\",\n        \"build_date\": \"2019-10-16T06:19:49.319352Z\",\n        \"build_snapshot\": false,\n        \"lucene_version\": \"9.7.2\",\n        \"minimum_wire_compatibility_version\": \"7.17.0\",\n        \"minimum_index_compatibility_version\": \"7.0.0\"\n    },\n    \"tagline\": \"You Know, for Search\"\n}",
};
```

### `models.InputConfluentCloud`

```typescript
const value: models.InputConfluentCloud = {
  sendToRoutes: true,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "confluent_cloud",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
  streamtags: [
    "<value 1>",
  ],
  pq: {
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  brokers: [
    "<value 1>",
    "<value 2>",
  ],
  tls: {
    disabled: false,
    rejectUnauthorized: true,
    servername: "<value>",
    certificateName: "<value>",
    caPath: "<value>",
    privKeyPath: "<value>",
    certPath: "<value>",
    passphrase: "<value>",
    minVersion: "TLSv1.1",
    maxVersion: "TLSv1.3",
  },
  topics: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  groupId: "Cribl",
  fromBeginning: true,
  kafkaSchemaRegistry: {
    disabled: true,
    schemaRegistryURL: "http://localhost:8081",
    connectionTimeout: 30000,
    requestTimeout: 30000,
    maxRetries: 1,
    auth: {
      disabled: true,
      credentialsSecret: "<value>",
    },
    tls: {
      disabled: true,
      rejectUnauthorized: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.3",
    },
  },
  connectionTimeout: 10000,
  requestTimeout: 60000,
  maxRetries: 5,
  maxBackOff: 30000,
  initialBackoff: 300,
  backoffRate: 2,
  authenticationTimeout: 10000,
  reauthenticationThreshold: 10000,
  sasl: {
    disabled: true,
    username: "Jocelyn_Casper88",
    password: "PIwQ9BxwvdkIdNi",
    authType: "manual",
    credentialsSecret: "<value>",
    mechanism: "plain",
    keytabLocation: "<value>",
    principal: "<value>",
    brokerServiceClass: "<value>",
    oauthEnabled: false,
    tokenUrl: "https://alive-spear.com",
    clientId: "<id>",
    oauthSecretType: "secret",
    clientTextSecret: "<value>",
    oauthParams: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    saslExtensions: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
  },
  sessionTimeout: 30000,
  rebalanceTimeout: 60000,
  heartbeatInterval: 3000,
  autoCommitInterval: 4568.71,
  autoCommitThreshold: 8467.43,
  maxBytesPerPartition: 1048576,
  maxBytes: 10485760,
  maxSocketErrors: 0,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "unnaturally who patroller why evenly aw considering",
};
```

### `models.InputGrafana`

```typescript
const value: models.InputGrafana = {
  id: "<id>",
  type: "grafana",
  disabled: false,
  pipeline: "<value>",
  sendToRoutes: true,
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
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  host: "0.0.0.0",
  port: 9330.93,
  tls: {
    disabled: true,
    requestCert: false,
    rejectUnauthorized: true,
    commonNameRegex: "/.*/",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1.2",
  },
  maxActiveReq: 256,
  maxRequestsPerSocket: 0,
  enableProxyHeader: false,
  captureHeaders: false,
  activityLogSampleRate: 100,
  requestTimeout: 0,
  socketTimeout: 0,
  keepAliveTimeout: 5,
  enableHealthCheck: false,
  ipAllowlistRegex: "/.*/",
  ipDenylistRegex: "/^$/",
  prometheusAPI: "/api/prom/push",
  lokiAPI: "/loki/api/v1/push",
  prometheusAuth: {
    authType: "none",
    username: "Carrie.Heaney",
    password: "R3S3RViAySqW5o8",
    token: "<value>",
    credentialsSecret: "<value>",
    textSecret: "<value>",
    loginUrl: "https://joyful-pneumonia.info/",
    secretParamName: "<value>",
    secret: "<value>",
    tokenAttributeName: "<value>",
    authHeaderExpr: "`Bearer ${token}`",
    tokenTimeoutSecs: 3600,
    oauthParams: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    oauthHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
  },
  lokiAuth: {
    authType: "none",
    username: "Fatima34",
    password: "fAYNLh60GmdmcY5",
    token: "<value>",
    credentialsSecret: "<value>",
    textSecret: "<value>",
    loginUrl: "https://physical-breastplate.info",
    secretParamName: "<value>",
    secret: "<value>",
    tokenAttributeName: "<value>",
    authHeaderExpr: "`Bearer ${token}`",
    tokenTimeoutSecs: 3600,
    oauthParams: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    oauthHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description:
    "kooky internal certainly minus front vivaciously minus naturally compete",
};
```

### `models.InputLoki`

```typescript
const value: models.InputLoki = {
  sendToRoutes: true,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "loki",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
  streamtags: [
    "<value 1>",
    "<value 2>",
  ],
  pq: {
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  host: "0.0.0.0",
  port: 8281.77,
  tls: {
    disabled: true,
    requestCert: false,
    rejectUnauthorized: true,
    commonNameRegex: "/.*/",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1.2",
  },
  maxActiveReq: 256,
  maxRequestsPerSocket: 0,
  enableProxyHeader: false,
  captureHeaders: false,
  activityLogSampleRate: 100,
  requestTimeout: 0,
  socketTimeout: 0,
  keepAliveTimeout: 5,
  enableHealthCheck: false,
  ipAllowlistRegex: "/.*/",
  ipDenylistRegex: "/^$/",
  lokiAPI: "/loki/api/v1/push",
  authType: "none",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "ick tightly truthfully",
  username: "Gertrude_Schroeder94",
  password: "XdgI0jAxwgVFzXj",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://hopeful-overheard.net/",
  secretParamName: "<value>",
  secret: "<value>",
  tokenAttributeName: "<value>",
  authHeaderExpr: "`Bearer ${token}`",
  tokenTimeoutSecs: 3600,
  oauthParams: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  oauthHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
};
```

### `models.InputPrometheusRw`

```typescript
const value: models.InputPrometheusRw = {
  sendToRoutes: true,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "prometheus_rw",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
  streamtags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  pq: {
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  host: "0.0.0.0",
  port: 1762.03,
  tls: {
    disabled: true,
    requestCert: false,
    rejectUnauthorized: true,
    commonNameRegex: "/.*/",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1.2",
  },
  maxActiveReq: 256,
  maxRequestsPerSocket: 0,
  enableProxyHeader: false,
  captureHeaders: false,
  activityLogSampleRate: 100,
  requestTimeout: 0,
  socketTimeout: 0,
  keepAliveTimeout: 5,
  enableHealthCheck: false,
  ipAllowlistRegex: "/.*/",
  ipDenylistRegex: "/^$/",
  prometheusAPI: "/write",
  authType: "none",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "as fisherman oh gosh",
  username: "Roberta30",
  password: "iqAEkFnZvKxy5Fl",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://gray-netsuke.net/",
  secretParamName: "<value>",
  secret: "<value>",
  tokenAttributeName: "<value>",
  authHeaderExpr: "`Bearer ${token}`",
  tokenTimeoutSecs: 3600,
  oauthParams: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  oauthHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
};
```

### `models.InputPrometheus`

```typescript
const value: models.InputPrometheus = {
  sendToRoutes: true,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "prometheus",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
  streamtags: [
    "<value 1>",
    "<value 2>",
  ],
  pq: {
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  dimensionList: [
    "<value 1>",
  ],
  discoveryType: "static",
  interval: 15,
  logLevel: "info",
  rejectUnauthorized: true,
  timeout: 0,
  keepAliveTime: 30,
  jobTimeout: "0",
  maxMissedKeepAlives: 3,
  ttl: "4h",
  ignoreGroupJobsLimit: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  authType: "manual",
  description: "fooey follower readjust so",
  targetList: [
    "<value 1>",
    "<value 2>",
  ],
  recordType: "SRV",
  scrapePort: 9090,
  nameList: [
    "<value 1>",
  ],
  scrapeProtocol: "http",
  scrapePath: "/metrics",
  awsAuthenticationMethod: "auto",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  usePublicIp: true,
  searchFilter: [
    {
      Name: "<value>",
      Values: [
        "<value 1>",
        "<value 2>",
      ],
    },
  ],
  awsSecretKey: "<value>",
  region: "<value>",
  endpoint: "<value>",
  signatureVersion: "v4",
  reuseConnections: true,
  enableAssumeRole: false,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 3600,
  username: "Julianne_Batz-Padberg7",
  password: "CPWRNYKm_4ZcnFh",
  credentialsSecret: "<value>",
};
```

### `models.InputEdgePrometheus`

```typescript
const value: models.InputEdgePrometheus = {
  sendToRoutes: true,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "edge_prometheus",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
  streamtags: [
    "<value 1>",
  ],
  pq: {
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  dimensionList: [
    "<value 1>",
  ],
  discoveryType: "static",
  interval: 15,
  timeout: 5000,
  persistence: {
    enable: false,
    timeWindow: "10m",
    maxDataSize: "1GB",
    maxDataTime: "24h",
    compress: "gzip",
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  authType: "manual",
  description: "twin tuba ride",
  targets: [
    {
      protocol: "http",
      host: "wealthy-ceramics.com",
      port: 9090,
      path: "/metrics",
    },
  ],
  recordType: "SRV",
  scrapePort: 9090,
  nameList: [
    "<value 1>",
  ],
  scrapeProtocol: "http",
  scrapePath: "/metrics",
  awsAuthenticationMethod: "auto",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  usePublicIp: true,
  searchFilter: [
    {
      Name: "<value>",
      Values: [
        "<value 1>",
        "<value 2>",
      ],
    },
  ],
  awsSecretKey: "<value>",
  region: "<value>",
  endpoint: "<value>",
  signatureVersion: "v4",
  reuseConnections: true,
  rejectUnauthorized: true,
  enableAssumeRole: false,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 3600,
  scrapeProtocolExpr: "metadata.annotations['prometheus.io/scheme'] || 'http'",
  scrapePortExpr: "metadata.annotations['prometheus.io/port'] || 9090",
  scrapePathExpr: "metadata.annotations['prometheus.io/path'] || '/metrics'",
  podFilter: [
    {
      filter: "<value>",
      description: "boo oof wherever circa between",
    },
  ],
  username: "Gretchen13",
  password: "PbiOp5J7DY2jV5F",
  credentialsSecret: "<value>",
};
```

### `models.InputOffice365Mgmt`

```typescript
const value: models.InputOffice365Mgmt = {
  sendToRoutes: true,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "office365_mgmt",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
  streamtags: [
    "<value 1>",
  ],
  pq: {
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  planType: "enterprise_gcc",
  tenantId: "<id>",
  appId: "<id>",
  timeout: 300,
  keepAliveTime: 30,
  jobTimeout: "0",
  maxMissedKeepAlives: 3,
  ttl: "4h",
  ignoreGroupJobsLimit: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  publisherIdentifier: "<value>",
  contentConfig: [
    {
      contentType: "<value>",
      description: "furiously illusion ice-cream if puny towards",
      interval: 8290.81,
      logLevel: "error",
      enabled: false,
    },
  ],
  ingestionLag: 0,
  retryRules: {
    type: "backoff",
    interval: 1000,
    limit: 5,
    multiplier: 2,
    codes: [
      6390.37,
      2107.49,
      2764.09,
    ],
    enableHeader: true,
    retryConnectTimeout: false,
    retryConnectReset: false,
  },
  authType: "manual",
  description:
    "neglect caption aw chainstay vice soliloquy vivid without fledgling pish",
  clientSecret: "<value>",
  textSecret: "<value>",
};
```

### `models.InputOffice365Service`

```typescript
const value: models.InputOffice365Service = {
  sendToRoutes: true,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "office365_service",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
  streamtags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  pq: {
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  planType: "enterprise_gcc",
  tenantId: "<id>",
  appId: "<id>",
  timeout: 300,
  keepAliveTime: 30,
  jobTimeout: "0",
  maxMissedKeepAlives: 3,
  ttl: "4h",
  ignoreGroupJobsLimit: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  contentConfig: [
    {
      contentType: "<value>",
      description:
        "yuck with these overconfidently mostly verify yuck blissfully",
      interval: 7686.02,
      logLevel: "error",
      enabled: false,
    },
  ],
  retryRules: {
    type: "backoff",
    interval: 1000,
    limit: 5,
    multiplier: 2,
    codes: [
      6390.37,
      2107.49,
      2764.09,
    ],
    enableHeader: true,
    retryConnectTimeout: false,
    retryConnectReset: false,
  },
  authType: "manual",
  description: "following fog whoa whether fatal congregate square",
  clientSecret: "<value>",
  textSecret: "<value>",
};
```

### `models.InputOffice365MsgTrace`

```typescript
const value: models.InputOffice365MsgTrace = {
  sendToRoutes: true,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "office365_msg_trace",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
  streamtags: [
    "<value 1>",
    "<value 2>",
  ],
  pq: {
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  url:
    "https://reports.office365.com/ecp/reportingwebservice/reporting.svc/MessageTrace",
  interval: 60,
  startDate: "<value>",
  endDate: "<value>",
  timeout: 300,
  disableTimeFilter: true,
  authType: "oauth",
  rescheduleDroppedTasks: true,
  maxTaskReschedule: 1,
  logLevel: "info",
  jobTimeout: "0",
  keepAliveTime: 30,
  maxMissedKeepAlives: 3,
  ttl: "4h",
  ignoreGroupJobsLimit: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  retryRules: {
    type: "backoff",
    interval: 1000,
    limit: 5,
    multiplier: 2,
    codes: [
      6390.37,
      2107.49,
      2764.09,
    ],
    enableHeader: true,
    retryConnectTimeout: false,
    retryConnectReset: false,
  },
  description: "shady meatloaf well sermon broadly below uh-huh",
  username: "Shaniya_Kovacek",
  password: "pxEG0kJtSiFWcxG",
  credentialsSecret: "<value>",
  clientSecret: "<value>",
  tenantId: "<id>",
  clientId: "<id>",
  resource: "https://outlook.office365.com",
  planType: "enterprise_gcc",
  textSecret: "<value>",
  certOptions: {
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
  },
};
```

### `models.InputEventhub`

```typescript
const value: models.InputEventhub = {
  sendToRoutes: true,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "eventhub",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
  streamtags: [
    "<value 1>",
    "<value 2>",
  ],
  pq: {
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  brokers: [],
  topics: [
    "<value 1>",
    "<value 2>",
  ],
  groupId: "Cribl",
  fromBeginning: true,
  connectionTimeout: 10000,
  requestTimeout: 60000,
  maxRetries: 5,
  maxBackOff: 30000,
  initialBackoff: 300,
  backoffRate: 2,
  authenticationTimeout: 10000,
  reauthenticationThreshold: 10000,
  sasl: {
    disabled: false,
    authType: "manual",
    password: "crxTx4Amn7CtfAT",
    textSecret: "<value>",
    mechanism: "plain",
    username: "$ConnectionString",
    clientSecretAuthType: "manual",
    clientSecret: "<value>",
    clientTextSecret: "<value>",
    certificateName: "<value>",
    certPath: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    oauthEndpoint: "https://login.microsoftonline.com",
    clientId: "<id>",
    tenantId: "<id>",
    scope: "<value>",
  },
  tls: {
    disabled: false,
    rejectUnauthorized: true,
  },
  sessionTimeout: 30000,
  rebalanceTimeout: 60000,
  heartbeatInterval: 3000,
  autoCommitInterval: 5569.57,
  autoCommitThreshold: 8448.22,
  maxBytesPerPartition: 1048576,
  maxBytes: 10485760,
  maxSocketErrors: 0,
  minimizeDuplicates: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "greedy wherever apud which sticky ack almost",
};
```

### `models.InputExec`

```typescript
const value: models.InputExec = {
  sendToRoutes: true,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "exec",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
  streamtags: [
    "<value 1>",
    "<value 2>",
  ],
  pq: {
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  command: "<value>",
  retries: 10,
  scheduleType: "interval",
  breakerRulesets: [
    "<value 1>",
  ],
  staleChannelFlushMs: 10000,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "minus smug among gee",
  interval: 60,
  cronSchedule: "* * * * *",
};
```

### `models.InputFirehose`

```typescript
const value: models.InputFirehose = {
  sendToRoutes: true,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "firehose",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
  streamtags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  pq: {
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  host: "0.0.0.0",
  port: 3362.23,
  authTokens: [
    "<value 1>",
    "<value 2>",
  ],
  tls: {
    disabled: true,
    requestCert: false,
    rejectUnauthorized: true,
    commonNameRegex: "/.*/",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1.2",
  },
  maxActiveReq: 256,
  maxRequestsPerSocket: 0,
  enableProxyHeader: false,
  captureHeaders: false,
  activityLogSampleRate: 100,
  requestTimeout: 0,
  socketTimeout: 0,
  keepAliveTimeout: 5,
  enableHealthCheck: false,
  ipAllowlistRegex: "/.*/",
  ipDenylistRegex: "/^$/",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description:
    "modulo wealthy meh grizzled righteously clonk against sternly oh",
};
```

### `models.InputGooglePubsub`

```typescript
const value: models.InputGooglePubsub = {
  sendToRoutes: true,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "google_pubsub",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
  streamtags: [
    "<value 1>",
  ],
  pq: {
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  topicName: "cribl",
  subscriptionName: "<value>",
  monitorSubscription: false,
  createTopic: false,
  createSubscription: true,
  region: "<value>",
  googleAuthMethod: "manual",
  serviceAccountCredentials: "<value>",
  secret: "<value>",
  maxBacklog: 1000,
  concurrency: 5,
  requestTimeout: 60000,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "officially meh fooey solicit majestically moment beyond",
  orderedDelivery: false,
};
```

### `models.InputCribl`

```typescript
const value: models.InputCribl = {
  sendToRoutes: true,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "cribl",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
  streamtags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  pq: {
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  filter: "<value>",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description:
    "pfft meaningfully if transom misappropriate ack and because tinderbox",
};
```

### `models.InputCriblTcp`

```typescript
const value: models.InputCriblTcp = {
  sendToRoutes: true,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "cribl_tcp",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
  streamtags: [
    "<value 1>",
    "<value 2>",
  ],
  pq: {
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  host: "0.0.0.0",
  port: 1160.64,
  tls: {
    disabled: true,
    requestCert: false,
    rejectUnauthorized: true,
    commonNameRegex: "/.*/",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1.2",
  },
  maxActiveCxn: 1000,
  socketIdleTimeout: 0,
  socketEndingMaxWait: 30,
  socketMaxLifespan: 0,
  enableProxyHeader: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  enableLoadBalancing: false,
  authTokens: [
    {
      tokenSecret: "<value>",
      enabled: true,
      description: "psst whoa zowie when waterspout",
    },
  ],
  description: "feline to coolly",
};
```

### `models.InputCriblHttp`

```typescript
const value: models.InputCriblHttp = {
  sendToRoutes: true,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "cribl_http",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
  streamtags: [
    "<value 1>",
  ],
  pq: {
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  host: "0.0.0.0",
  port: 3492.73,
  authTokens: [
    {
      tokenSecret: "<value>",
      enabled: true,
      description: "psst whoa zowie when waterspout",
    },
  ],
  tls: {
    disabled: true,
    requestCert: false,
    rejectUnauthorized: true,
    commonNameRegex: "/.*/",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1.2",
  },
  maxActiveReq: 256,
  maxRequestsPerSocket: 0,
  enableProxyHeader: false,
  captureHeaders: false,
  activityLogSampleRate: 100,
  requestTimeout: 0,
  socketTimeout: 0,
  keepAliveTimeout: 5,
  enableHealthCheck: false,
  ipAllowlistRegex: "/.*/",
  ipDenylistRegex: "/^$/",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "that cultivated midst",
};
```

### `models.InputCriblLakeHttp`

```typescript
const value: models.InputCriblLakeHttp = {
  sendToRoutes: true,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "cribl_lake_http",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
  streamtags: [
    "<value 1>",
    "<value 2>",
  ],
  pq: {
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  host: "0.0.0.0",
  port: 877.2,
  authTokens: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  tls: {
    disabled: true,
    requestCert: false,
    rejectUnauthorized: true,
    commonNameRegex: "/.*/",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1.2",
  },
  maxActiveReq: 256,
  maxRequestsPerSocket: 0,
  enableProxyHeader: false,
  captureHeaders: false,
  activityLogSampleRate: 100,
  requestTimeout: 0,
  socketTimeout: 0,
  keepAliveTimeout: 5,
  enableHealthCheck: false,
  ipAllowlistRegex: "/.*/",
  ipDenylistRegex: "/^$/",
  criblAPI: "/cribl",
  elasticAPI: "/elastic",
  splunkHecAPI: "/services/collector",
  splunkHecAcks: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  authTokensExt: [
    {
      token: "<value>",
      description: "across fooey judgementally cork",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      splunkHecMetadata: {
        enabled: false,
        defaultDataset: "<value>",
        allowedIndexesAtToken: [
          "<value 1>",
          "<value 2>",
        ],
      },
      elasticsearchMetadata: {
        enabled: false,
        defaultDataset: "<value>",
      },
    },
  ],
  description: "which why frenetically",
};
```

### `models.InputTcpjson`

```typescript
const value: models.InputTcpjson = {
  sendToRoutes: true,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "tcpjson",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
  streamtags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  pq: {
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  host: "0.0.0.0",
  port: 8304,
  tls: {
    disabled: true,
    requestCert: false,
    rejectUnauthorized: true,
    commonNameRegex: "/.*/",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1.2",
  },
  ipWhitelistRegex: "/.*/",
  maxActiveCxn: 1000,
  socketIdleTimeout: 0,
  socketEndingMaxWait: 30,
  socketMaxLifespan: 0,
  enableProxyHeader: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  enableLoadBalancing: false,
  authType: "manual",
  description:
    "behest embossing upside-down drat strictly while indeed commemorate whoa",
  authToken: "",
  textSecret: "<value>",
};
```

### `models.InputSystemMetrics`

```typescript
const value: models.InputSystemMetrics = {
  sendToRoutes: true,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "system_metrics",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
  streamtags: [
    "<value 1>",
  ],
  pq: {
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  interval: 10,
  host: {
    mode: "basic",
    custom: {
      system: {
        mode: "basic",
        processes: false,
      },
      cpu: {
        mode: "basic",
        perCpu: false,
        detail: false,
        time: false,
      },
      memory: {
        mode: "basic",
        detail: false,
      },
      network: {
        mode: "basic",
        detail: false,
        protocols: false,
        devices: [
          "<value 1>",
          "<value 2>",
        ],
        perInterface: false,
      },
      disk: {
        mode: "basic",
        detail: false,
        inodes: false,
        devices: [
          "<value 1>",
        ],
        mountpoints: [
          "<value 1>",
          "<value 2>",
        ],
        fstypes: [
          "<value 1>",
          "<value 2>",
        ],
        perDevice: false,
      },
    },
  },
  process: {
    sets: [
      {
        name: "<value>",
        filter: "<value>",
        includeChildren: false,
      },
    ],
  },
  container: {
    mode: "basic",
    dockerSocket: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    dockerTimeout: 5,
    filters: [
      {
        expr: "<value>",
      },
    ],
    allContainers: false,
    perDevice: false,
    detail: false,
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  persistence: {
    enable: false,
    timeWindow: "10m",
    maxDataSize: "1GB",
    maxDataTime: "24h",
    compress: "gzip",
    destPath: "$CRIBL_HOME/state/system_metrics",
  },
  description: "alliance properly brush yippee pfft to thorny um",
};
```

### `models.InputSystemState`

```typescript
const value: models.InputSystemState = {
  sendToRoutes: true,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "system_state",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
  streamtags: [
    "<value 1>",
  ],
  pq: {
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  interval: 300,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  collectors: {
    hostsfile: {
      enable: true,
    },
    interfaces: {
      enable: true,
    },
    disk: {
      enable: true,
    },
    metadata: {
      enable: true,
    },
    routes: {
      enable: true,
    },
    dns: {
      enable: true,
    },
    user: {
      enable: true,
    },
    firewall: {
      enable: true,
    },
    services: {
      enable: true,
    },
    ports: {
      enable: true,
    },
    loginUsers: {
      enable: true,
    },
  },
  persistence: {
    enable: false,
    timeWindow: "10m",
    maxDataSize: "1GB",
    maxDataTime: "24h",
    compress: "none",
    destPath: "$CRIBL_HOME/state/system_state",
  },
  disableNativeModule: false,
  description: "ugh without when unwilling doubtfully word",
};
```

### `models.InputKubeMetrics`

```typescript
const value: models.InputKubeMetrics = {
  sendToRoutes: true,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "kube_metrics",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
  streamtags: [
    "<value 1>",
  ],
  pq: {
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  interval: 15,
  rules: [
    {
      filter: "<value>",
      description:
        "afore progress ethyl um gratefully pish whose till hydrocarbon",
    },
  ],
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  persistence: {
    enable: false,
    timeWindow: "10m",
    maxDataSize: "1GB",
    maxDataTime: "24h",
    compress: "gzip",
    destPath: "$CRIBL_HOME/state/kube_metrics",
  },
  description: "when a palatable worth finally",
};
```

### `models.InputKubeLogs`

```typescript
const value: models.InputKubeLogs = {
  sendToRoutes: true,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "kube_logs",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
  streamtags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  pq: {
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  interval: 15,
  rules: [
    {
      filter: "<value>",
      description:
        "lava unlike unlike kiss till focalise kosher cool amidst per",
    },
  ],
  timestamps: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  persistence: {
    enable: false,
    timeWindow: "10m",
    maxDataSize: "1GB",
    maxDataTime: "24h",
    compress: "gzip",
  },
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  staleChannelFlushMs: 10000,
  enableLoadBalancing: false,
  description: "how unaccountably jump mmm against hmph fort",
};
```

### `models.InputKubeEvents`

```typescript
const value: models.InputKubeEvents = {
  sendToRoutes: true,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "kube_events",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
  streamtags: [
    "<value 1>",
  ],
  pq: {
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  rules: [
    {
      filter: "<value>",
      description:
        "afore progress ethyl um gratefully pish whose till hydrocarbon",
    },
  ],
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "gummy yum like",
};
```

### `models.InputWindowsMetrics`

```typescript
const value: models.InputWindowsMetrics = {
  sendToRoutes: true,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "windows_metrics",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
  streamtags: [
    "<value 1>",
    "<value 2>",
  ],
  pq: {
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  interval: 10,
  host: {
    mode: "basic",
    custom: {
      system: {
        mode: "basic",
        detail: false,
      },
      cpu: {
        mode: "basic",
        perCpu: false,
        detail: false,
        time: false,
      },
      memory: {
        mode: "basic",
        detail: false,
      },
      network: {
        mode: "basic",
        detail: false,
        protocols: false,
        devices: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        perInterface: false,
      },
      disk: {
        mode: "basic",
        perVolume: false,
        detail: false,
        volumes: [
          "<value 1>",
          "<value 2>",
        ],
      },
    },
  },
  process: {
    sets: [
      {
        name: "<value>",
        filter: "<value>",
        includeChildren: false,
      },
    ],
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  persistence: {
    enable: false,
    timeWindow: "10m",
    maxDataSize: "1GB",
    maxDataTime: "24h",
    compress: "gzip",
    destPath: "$CRIBL_HOME/state/windows_metrics",
  },
  disableNativeModule: false,
  description: "beside ew far pfft outside anti",
};
```

### `models.InputCrowdstrike`

```typescript
const value: models.InputCrowdstrike = {
  sendToRoutes: true,
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
  ],
  pq: {
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  queueName: "<value>",
  fileFilter: "/.*/",
  awsAccountId: "<id>",
  awsAuthenticationMethod: "auto",
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
  staleChannelFlushMs: 10000,
  maxMessages: 1,
  visibilityTimeout: 21600,
  numReceivers: 1,
  socketTimeout: 300,
  skipOnError: false,
  includeSqsMetadata: false,
  enableAssumeRole: true,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 3600,
  enableSQSAssumeRole: false,
  preprocess: {
    disabled: true,
    command: "<value>",
    args: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  checkpointing: {
    enabled: false,
    retries: 5,
  },
  pollTimeout: 10,
  encoding: "<value>",
  description: "excitedly jovially slowly",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  tagAfterProcessing: "true",
  processedTagKey: "<value>",
  processedTagValue: "<value>",
};
```

### `models.InputDatadogAgent`

```typescript
const value: models.InputDatadogAgent = {
  sendToRoutes: true,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "datadog_agent",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
  streamtags: [
    "<value 1>",
    "<value 2>",
  ],
  pq: {
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  host: "0.0.0.0",
  port: 8286.83,
  tls: {
    disabled: true,
    requestCert: false,
    rejectUnauthorized: true,
    commonNameRegex: "/.*/",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1.2",
  },
  maxActiveReq: 256,
  maxRequestsPerSocket: 0,
  enableProxyHeader: false,
  captureHeaders: false,
  activityLogSampleRate: 100,
  requestTimeout: 0,
  socketTimeout: 0,
  keepAliveTimeout: 5,
  enableHealthCheck: false,
  ipAllowlistRegex: "/.*/",
  ipDenylistRegex: "/^$/",
  extractMetrics: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  proxyMode: {
    enabled: false,
    rejectUnauthorized: true,
  },
  description: "reporter loyally properly slowly generously",
};
```

### `models.InputDatagen`

```typescript
const value: models.InputDatagen = {
  sendToRoutes: true,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "datagen",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
  streamtags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  pq: {
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  samples: [],
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "obstruct horse modulo",
};
```

### `models.InputHttpRaw`

```typescript
const value: models.InputHttpRaw = {
  sendToRoutes: true,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "http_raw",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
  streamtags: [
    "<value 1>",
    "<value 2>",
  ],
  pq: {
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  host: "0.0.0.0",
  port: 8335.41,
  authTokens: [
    "<value 1>",
  ],
  tls: {
    disabled: true,
    requestCert: false,
    rejectUnauthorized: true,
    commonNameRegex: "/.*/",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1.2",
  },
  maxActiveReq: 256,
  maxRequestsPerSocket: 0,
  enableProxyHeader: false,
  captureHeaders: false,
  activityLogSampleRate: 100,
  requestTimeout: 0,
  socketTimeout: 0,
  keepAliveTimeout: 5,
  enableHealthCheck: false,
  ipAllowlistRegex: "/.*/",
  ipDenylistRegex: "/^$/",
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
  ],
  staleChannelFlushMs: 10000,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  allowedPaths: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  allowedMethods: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  authTokensExt: [
    {
      token: "<value>",
      description: "demob apropos indeed ceramic scrabble however given scorn",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
    },
  ],
  description: "ferociously while boiling median nocturnal efface",
};
```

### `models.InputKinesis`

```typescript
const value: models.InputKinesis = {
  sendToRoutes: true,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "kinesis",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
  streamtags: [
    "<value 1>",
    "<value 2>",
  ],
  pq: {
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  streamName: "<value>",
  serviceInterval: 1,
  shardExpr: "true",
  shardIteratorType: "TRIM_HORIZON",
  payloadFormat: "cribl",
  getRecordsLimit: 5000,
  getRecordsLimitTotal: 20000,
  loadBalancingAlgorithm: "ConsistentHashing",
  awsAuthenticationMethod: "auto",
  awsSecretKey: "<value>",
  region: "<value>",
  endpoint: "<value>",
  signatureVersion: "v4",
  reuseConnections: true,
  rejectUnauthorized: true,
  enableAssumeRole: false,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 3600,
  verifyKPLCheckSums: false,
  avoidDuplicates: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description:
    "midst beneath roundabout failing whenever the who complete shyly",
  awsApiKey: "<value>",
  awsSecret: "<value>",
};
```

### `models.InputCriblmetrics`

```typescript
const value: models.InputCriblmetrics = {
  sendToRoutes: true,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "criblmetrics",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
  streamtags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  pq: {
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  prefix: "cribl.logstream.",
  fullFidelity: true,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "near especially forenenst",
};
```

### `models.InputMetrics`

```typescript
const value: models.InputMetrics = {
  sendToRoutes: true,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "metrics",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
  streamtags: [
    "<value 1>",
  ],
  pq: {
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  host: "0.0.0.0",
  udpPort: 6373.18,
  tcpPort: 1218.28,
  maxBufferSize: 1000,
  ipWhitelistRegex: "/.*/",
  enableProxyHeader: false,
  tls: {
    disabled: true,
    requestCert: false,
    rejectUnauthorized: true,
    commonNameRegex: "/.*/",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1.2",
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  udpSocketRxBufSize: 5456.52,
  description: "genuine aha off whose blah however blah why",
};
```

### `models.InputS3`

```typescript
const value: models.InputS3 = {
  sendToRoutes: true,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "s3",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
  streamtags: [
    "<value 1>",
    "<value 2>",
  ],
  pq: {
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  queueName: "<value>",
  fileFilter: "/.*/",
  awsAccountId: "<id>",
  awsAuthenticationMethod: "auto",
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
  staleChannelFlushMs: 10000,
  maxMessages: 1,
  visibilityTimeout: 600,
  numReceivers: 1,
  socketTimeout: 300,
  skipOnError: false,
  includeSqsMetadata: false,
  enableAssumeRole: true,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 3600,
  enableSQSAssumeRole: false,
  preprocess: {
    disabled: true,
    command: "<value>",
    args: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  parquetChunkSizeMB: 5,
  parquetChunkDownloadTimeout: 600,
  checkpointing: {
    enabled: false,
    retries: 5,
  },
  pollTimeout: 10,
  encoding: "<value>",
  tagAfterProcessing: false,
  description: "between between when frequent now until into lumpy into by",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  processedTagKey: "<value>",
  processedTagValue: "<value>",
};
```

### `models.InputS3Inventory`

```typescript
const value: models.InputS3Inventory = {
  sendToRoutes: true,
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
    "<value 3>",
  ],
  pq: {
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  queueName: "<value>",
  fileFilter: "/.*/",
  awsAccountId: "<id>",
  awsAuthenticationMethod: "auto",
  awsSecretKey: "<value>",
  region: "<value>",
  endpoint: "<value>",
  signatureVersion: "v4",
  reuseConnections: true,
  rejectUnauthorized: true,
  breakerRulesets: [
    "<value 1>",
  ],
  staleChannelFlushMs: 10000,
  maxMessages: 1,
  visibilityTimeout: 600,
  numReceivers: 1,
  socketTimeout: 300,
  skipOnError: false,
  includeSqsMetadata: false,
  enableAssumeRole: true,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 3600,
  enableSQSAssumeRole: false,
  preprocess: {
    disabled: true,
    command: "<value>",
    args: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  parquetChunkSizeMB: 5,
  parquetChunkDownloadTimeout: 600,
  checkpointing: {
    enabled: false,
    retries: 5,
  },
  pollTimeout: 10,
  checksumSuffix: "checksum",
  maxManifestSizeKB: 4096,
  validateInventoryFiles: false,
  description:
    "though insert inasmuch likely bah ew gadzooks anenst powerfully",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  tagAfterProcessing: "true",
  processedTagKey: "<value>",
  processedTagValue: "<value>",
};
```

### `models.InputSnmp`

```typescript
const value: models.InputSnmp = {
  sendToRoutes: true,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "snmp",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
  streamtags: [
    "<value 1>",
    "<value 2>",
  ],
  pq: {
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  host: "0.0.0.0",
  port: 162,
  snmpV3Auth: {
    v3AuthEnabled: false,
    allowUnmatchedTrap: false,
    v3Users: [
      {
        name: "<value>",
        authProtocol: "none",
        authKey: "<value>",
        privProtocol: "none",
        privKey: "<value>",
      },
    ],
  },
  maxBufferSize: 1000,
  ipWhitelistRegex: "/.*/",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  udpSocketRxBufSize: 9731.46,
  varbindsWithTypes: false,
  bestEffortParsing: false,
  description: "e-mail reprove acclaimed inwardly huzzah",
};
```

### `models.InputOpenTelemetry`

```typescript
const value: models.InputOpenTelemetry = {
  sendToRoutes: true,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "open_telemetry",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
  streamtags: [
    "<value 1>",
  ],
  pq: {
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  host: "0.0.0.0",
  port: 4317,
  tls: {
    disabled: true,
    requestCert: false,
    rejectUnauthorized: true,
    commonNameRegex: "/.*/",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1.2",
  },
  maxActiveReq: 256,
  maxRequestsPerSocket: 0,
  enableProxyHeader: "<value>",
  captureHeaders: "<value>",
  activityLogSampleRate: "<value>",
  requestTimeout: 0,
  socketTimeout: 0,
  keepAliveTimeout: 15,
  enableHealthCheck: false,
  ipAllowlistRegex: "/.*/",
  ipDenylistRegex: "/^$/",
  protocol: "grpc",
  extractSpans: false,
  extractMetrics: false,
  otlpVersion: "0.10.0",
  authType: "none",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  maxActiveCxn: 1000,
  description: "unto gee basic",
  username: "Twila77",
  password: "4T9Z8qy0Rl6tiFK",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://unwritten-parade.biz",
  secretParamName: "<value>",
  secret: "<value>",
  tokenAttributeName: "<value>",
  authHeaderExpr: "`Bearer ${token}`",
  tokenTimeoutSecs: 3600,
  oauthParams: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  oauthHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  extractLogs: false,
};
```

### `models.InputModelDrivenTelemetry`

```typescript
const value: models.InputModelDrivenTelemetry = {
  sendToRoutes: true,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "model_driven_telemetry",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
  streamtags: [
    "<value 1>",
  ],
  pq: {
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  host: "0.0.0.0",
  port: 57000,
  tls: {
    disabled: true,
    requestCert: false,
    rejectUnauthorized: true,
    commonNameRegex: "/.*/",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1.2",
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  maxActiveCxn: 1000,
  shutdownTimeoutMs: 5000,
  description: "bah at great chow upright so wherever and poppy from",
};
```

### `models.InputSqs`

```typescript
const value: models.InputSqs = {
  sendToRoutes: true,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "sqs",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
  streamtags: [
    "<value 1>",
    "<value 2>",
  ],
  pq: {
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  queueName: "<value>",
  queueType: "fifo",
  awsAccountId: "<id>",
  createQueue: false,
  awsAuthenticationMethod: "auto",
  awsSecretKey: "<value>",
  region: "<value>",
  endpoint: "<value>",
  signatureVersion: "v4",
  reuseConnections: true,
  rejectUnauthorized: true,
  enableAssumeRole: false,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 3600,
  maxMessages: 10,
  visibilityTimeout: 600,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  pollTimeout: 10,
  description: "meanwhile next mmm instead geez",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  numReceivers: 3,
};
```

### `models.InputSyslog`

```typescript
const value: models.InputSyslog = {
  id: "<id>",
  type: "syslog",
  disabled: false,
  pipeline: "<value>",
  sendToRoutes: true,
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
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  host: "0.0.0.0",
  udpPort: 1436.13,
  tcpPort: 4731.61,
  maxBufferSize: 1000,
  ipWhitelistRegex: "/.*/",
  timestampTimezone: "local",
  singleMsgUdpPackets: false,
  enableProxyHeader: false,
  keepFieldsList: [
    "<value 1>",
    "<value 2>",
  ],
  octetCounting: false,
  inferFraming: true,
  strictlyInferOctetCounting: true,
  allowNonStandardAppName: false,
  maxActiveCxn: 1000,
  socketIdleTimeout: 0,
  socketEndingMaxWait: 30,
  socketMaxLifespan: 0,
  tls: {
    disabled: true,
    requestCert: false,
    rejectUnauthorized: true,
    commonNameRegex: "/.*/",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1.2",
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  udpSocketRxBufSize: 4338.64,
  enableLoadBalancing: false,
  description: "positively yuck hmph whoa yet yahoo",
  enableEnhancedProxyHeaderParsing: false,
};
```

### `models.InputFile`

```typescript
const value: models.InputFile = {
  sendToRoutes: true,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "file",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
  streamtags: [
    "<value 1>",
  ],
  pq: {
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  mode: "manual",
  interval: 10,
  filenames: [
    "<value 1>",
    "<value 2>",
  ],
  filterArchivedFiles: false,
  tailOnly: true,
  idleTimeout: 300,
  minAgeDur: "<value>",
  maxAgeDur: "<value>",
  checkFileModTime: false,
  forceText: false,
  hashLen: 256,
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
  staleChannelFlushMs: 10000,
  description: "fundraising hoof an",
  path: "/private/tmp",
  depth: 298.53,
  suppressMissingPathErrors: false,
  deleteFiles: false,
  includeUnidentifiableBinary: false,
};
```

### `models.InputTcp`

```typescript
const value: models.InputTcp = {
  sendToRoutes: true,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "tcp",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
  streamtags: [
    "<value 1>",
  ],
  pq: {
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  host: "0.0.0.0",
  port: 3923.1,
  tls: {
    disabled: true,
    requestCert: false,
    rejectUnauthorized: true,
    commonNameRegex: "/.*/",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1.2",
  },
  ipWhitelistRegex: "/.*/",
  maxActiveCxn: 1000,
  socketIdleTimeout: 0,
  socketEndingMaxWait: 30,
  socketMaxLifespan: 0,
  enableProxyHeader: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  breakerRulesets: [
    "<value 1>",
  ],
  staleChannelFlushMs: 10000,
  enableHeader: false,
  preprocess: {
    disabled: true,
    command: "<value>",
    args: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  description: "mechanically airman against",
  authToken: "",
  authType: "manual",
  textSecret: "<value>",
};
```

### `models.InputAppscope`

```typescript
const value: models.InputAppscope = {
  sendToRoutes: true,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "appscope",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
  streamtags: [
    "<value 1>",
  ],
  pq: {
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  ipWhitelistRegex: "/.*/",
  maxActiveCxn: 1000,
  socketIdleTimeout: 0,
  socketEndingMaxWait: 30,
  socketMaxLifespan: 0,
  enableProxyHeader: false,
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
  staleChannelFlushMs: 10000,
  enableUnixPath: false,
  filter: {
    allow: [
      {
        procname: "<value>",
        arg: "<value>",
        config: "<value>",
      },
    ],
    transportURL: "https://last-prohibition.name/",
  },
  persistence: {
    enable: false,
    timeWindow: "10m",
    maxDataSize: "1GB",
    maxDataTime: "24h",
    compress: "gzip",
    destPath: "$CRIBL_HOME/state/appscope",
  },
  authType: "manual",
  description: "following keenly oof ghost than unnecessarily",
  host: "crushing-velocity.com",
  port: 8056.84,
  tls: {
    disabled: true,
    requestCert: false,
    rejectUnauthorized: true,
    commonNameRegex: "/.*/",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1.2",
  },
  unixSocketPath: "$CRIBL_HOME/state/appscope.sock",
  unixSocketPerms: "<value>",
  authToken: "",
  textSecret: "<value>",
};
```

### `models.InputWef`

```typescript
const value: models.InputWef = {
  sendToRoutes: true,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "wef",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
  streamtags: [
    "<value 1>",
    "<value 2>",
  ],
  pq: {
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  host: "0.0.0.0",
  port: 5986,
  authMethod: "clientCert",
  tls: {
    disabled: false,
    rejectUnauthorized: true,
    requestCert: true,
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    commonNameRegex: "/.*/",
    minVersion: "TLSv1.2",
    maxVersion: "TLSv1.3",
    ocspCheck: false,
    keytab: "<value>",
    principal: "<value>",
    ocspCheckFailClose: false,
  },
  maxActiveReq: 256,
  maxRequestsPerSocket: 0,
  enableProxyHeader: false,
  captureHeaders: false,
  keepAliveTimeout: 90,
  enableHealthCheck: false,
  ipAllowlistRegex: "/.*/",
  ipDenylistRegex: "/^$/",
  socketTimeout: 0,
  caFingerprint: "<value>",
  keytab: "<value>",
  principal: "<value>",
  allowMachineIdMismatch: false,
  subscriptions: [
    {
      subscriptionName: "<value>",
      version: "<value>",
      contentFormat: "Raw",
      heartbeatInterval: 60,
      batchTimeout: 60,
      readExistingEvents: false,
      sendBookmarks: true,
      compress: true,
      targets: [],
      locale: "en-US",
      querySelector: "simple",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      queries: [
        {
          path: "/media",
          queryExpression: "<value>",
        },
      ],
      xmlQuery: "<value>",
    },
  ],
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "although shyly gloat until",
  logFingerprintMismatch: false,
};
```

### `models.InputWinEventLogs`

```typescript
const value: models.InputWinEventLogs = {
  sendToRoutes: true,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "win_event_logs",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
  streamtags: [
    "<value 1>",
    "<value 2>",
  ],
  pq: {
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  logNames: [],
  readMode: "newest",
  eventFormat: "json",
  disableNativeModule: false,
  interval: 10,
  batchSize: 500,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  maxEventBytes: 51200,
  description:
    "funny questionable knitting coal linseed mystify hard-to-find busily platter",
  disableJsonRendering: false,
  disableXmlRendering: true,
};
```

### `models.InputRawUdp`

```typescript
const value: models.InputRawUdp = {
  sendToRoutes: true,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "raw_udp",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
  streamtags: [
    "<value 1>",
    "<value 2>",
  ],
  pq: {
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  host: "0.0.0.0",
  port: 7664.5,
  maxBufferSize: 1000,
  ipWhitelistRegex: "/.*/",
  singleMsgUdpPackets: false,
  ingestRawBytes: false,
  udpSocketRxBufSize: 8140.6,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "ew huzzah similar salty degrease times",
};
```

### `models.InputJournalFiles`

```typescript
const value: models.InputJournalFiles = {
  sendToRoutes: true,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "journal_files",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
  streamtags: [
    "<value 1>",
    "<value 2>",
  ],
  pq: {
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  path: "/tmp",
  interval: 10,
  journals: [
    "<value 1>",
  ],
  rules: [
    {
      filter: "<value>",
      description:
        "break mathematics finally version functional honored given shoulder",
    },
  ],
  currentBoot: false,
  maxAgeDur: "<value>",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "to yearningly floss boo spirit hydrocarbon gently",
};
```

### `models.InputWiz`

```typescript
const value: models.InputWiz = {
  sendToRoutes: true,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "wiz",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
  streamtags: [
    "<value 1>",
    "<value 2>",
  ],
  pq: {
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  endpoint: "https://api.<region>.app.wiz.io/graphql",
  authUrl: "https://polite-hammock.biz/",
  authAudienceOverride: "<value>",
  clientId: "<id>",
  contentConfig: [
    {
      contentType: "<value>",
      contentDescription: "<value>",
      enabled: false,
      stateTracking: false,
      stateUpdateExpression:
        "__timestampExtracted !== false && {latestTime: (state.latestTime || 0) > _time ? state.latestTime : _time}",
      stateMergeExpression:
        "prevState.latestTime > newState.latestTime ? prevState : newState",
      manageState: {},
      contentQuery: "<value>",
      cronSchedule: "0 */12 * * *",
      earliest: "-12h@h",
      latest: "now",
      jobTimeout: "0",
      logLevel: "info",
      maxPages: 0,
    },
  ],
  requestTimeout: 300,
  keepAliveTime: 30,
  maxMissedKeepAlives: 3,
  ttl: "4h",
  ignoreGroupJobsLimit: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  retryRules: {
    type: "backoff",
    interval: 1000,
    limit: 5,
    multiplier: 2,
    codes: [
      3836.07,
    ],
    enableHeader: true,
    retryConnectTimeout: false,
    retryConnectReset: false,
  },
  authType: "manual",
  description: "among stark cannibalise flint fumigate likewise mutate",
  clientSecret: "<value>",
  textSecret: "<value>",
};
```

### `models.InputWizWebhook`

```typescript
const value: models.InputWizWebhook = {
  sendToRoutes: true,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "wiz_webhook",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
  streamtags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  pq: {
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  host: "0.0.0.0",
  port: 6102.56,
  authTokens: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  tls: {
    disabled: true,
    requestCert: false,
    rejectUnauthorized: true,
    commonNameRegex: "/.*/",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1.2",
  },
  maxActiveReq: 256,
  maxRequestsPerSocket: 0,
  enableProxyHeader: false,
  captureHeaders: false,
  activityLogSampleRate: 100,
  requestTimeout: 0,
  socketTimeout: 0,
  keepAliveTimeout: 5,
  enableHealthCheck: false,
  ipAllowlistRegex: "/.*/",
  ipDenylistRegex: "/^$/",
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
  ],
  staleChannelFlushMs: 10000,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  allowedPaths: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  allowedMethods: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  authTokensExt: [
    {
      token: "<value>",
      description: "demob apropos indeed ceramic scrabble however given scorn",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
    },
  ],
  description: "longingly writhing where oof despite excepting diversity brr",
};
```

### `models.InputNetflow`

```typescript
const value: models.InputNetflow = {
  sendToRoutes: true,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "netflow",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
  streamtags: [
    "<value 1>",
  ],
  pq: {
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  host: "0.0.0.0",
  port: 2055,
  enablePassThrough: false,
  ipAllowlistRegex: "/.*/",
  ipDenylistRegex: "/^$/",
  udpSocketRxBufSize: 4331.4,
  templateCacheMinutes: 30,
  v5Enabled: true,
  v9Enabled: true,
  ipfixEnabled: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description:
    "shakily though mixed though perfection barracks remarkable merrily ouch incidentally",
};
```

### `models.InputSecurityLake`

```typescript
const value: models.InputSecurityLake = {
  sendToRoutes: true,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "security_lake",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
  streamtags: [
    "<value 1>",
    "<value 2>",
  ],
  pq: {
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  queueName: "<value>",
  fileFilter: "/.*/",
  awsAccountId: "<id>",
  awsAuthenticationMethod: "auto",
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
  staleChannelFlushMs: 10000,
  maxMessages: 1,
  visibilityTimeout: 600,
  numReceivers: 1,
  socketTimeout: 300,
  skipOnError: false,
  includeSqsMetadata: false,
  enableAssumeRole: true,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 3600,
  enableSQSAssumeRole: false,
  preprocess: {
    disabled: true,
    command: "<value>",
    args: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  parquetChunkSizeMB: 5,
  parquetChunkDownloadTimeout: 600,
  checkpointing: {
    enabled: false,
    retries: 5,
  },
  pollTimeout: 10,
  encoding: "<value>",
  description: "as aw programme ugh log after brr fearless toward pro",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  tagAfterProcessing: "true",
  processedTagKey: "<value>",
  processedTagValue: "<value>",
};
```

### `models.InputZscalerHec`

```typescript
const value: models.InputZscalerHec = {
  sendToRoutes: true,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "zscaler_hec",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
  streamtags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  pq: {
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  host: "0.0.0.0",
  port: 7332.06,
  authTokens: [
    {
      authType: "manual",
      tokenSecret: "<value>",
      token: "<value>",
      enabled: true,
      description: "enchanted vacantly attraction",
      allowedIndexesAtToken: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
    },
  ],
  tls: {
    disabled: true,
    requestCert: false,
    rejectUnauthorized: true,
    commonNameRegex: "/.*/",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1.2",
  },
  maxActiveReq: 256,
  maxRequestsPerSocket: 0,
  enableProxyHeader: false,
  captureHeaders: false,
  activityLogSampleRate: 100,
  requestTimeout: 0,
  socketTimeout: 0,
  keepAliveTimeout: 5,
  enableHealthCheck: "<value>",
  ipAllowlistRegex: "/.*/",
  ipDenylistRegex: "/^$/",
  hecAPI: "/services/collector",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  allowedIndexes: [
    "<value 1>",
  ],
  hecAcks: false,
  accessControlAllowOrigin: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  accessControlAllowHeaders: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  emitTokenMetrics: false,
  description:
    "unfinished sometimes however considering duh an vaguely that times",
};
```

### `models.InputCloudflareHec`

```typescript
const value: models.InputCloudflareHec = {
  sendToRoutes: true,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "cloudflare_hec",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
  streamtags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  pq: {
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  host: "0.0.0.0",
  port: 353.23,
  authTokens: [
    {
      authType: "secret",
      tokenSecret: "<value>",
      token: "<value>",
      enabled: true,
      description: "off pro pish equate cumbersome unwritten while",
      allowedIndexesAtToken: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
    },
  ],
  tls: {
    disabled: true,
    requestCert: false,
    rejectUnauthorized: true,
    commonNameRegex: "/.*/",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1.2",
  },
  maxActiveReq: 256,
  maxRequestsPerSocket: 0,
  enableProxyHeader: false,
  captureHeaders: false,
  activityLogSampleRate: 100,
  requestTimeout: 0,
  socketTimeout: 0,
  keepAliveTimeout: 5,
  enableHealthCheck: "<value>",
  ipAllowlistRegex: "/.*/",
  ipDenylistRegex: "/^$/",
  hecAPI: "<value>",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  allowedIndexes: [
    "<value 1>",
  ],
  breakerRulesets: [
    "<value 1>",
  ],
  staleChannelFlushMs: 10000,
  accessControlAllowOrigin: [
    "<value 1>",
    "<value 2>",
  ],
  accessControlAllowHeaders: [
    "<value 1>",
  ],
  emitTokenMetrics: false,
  description: "overcharge quizzically since grade midst until and whoa plain",
};
```

