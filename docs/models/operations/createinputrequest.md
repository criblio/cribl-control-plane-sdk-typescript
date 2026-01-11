# CreateInputRequest

Input object


## Supported Types

### `operations.InputCollection`

```typescript
const value: operations.InputCollection = {
  sendToRoutes: true,
  id: "<id>",
  type: "collection",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
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

### `operations.InputKafka`

```typescript
const value: operations.InputKafka = {
  sendToRoutes: true,
  id: "<id>",
  type: "kafka",
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
  autoCommitInterval: 3615.78,
  autoCommitThreshold: 9942.66,
  maxBytesPerPartition: 1048576,
  maxBytes: 10485760,
  maxSocketErrors: 0,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "per infamous snoop",
};
```

### `operations.InputMsk`

```typescript
const value: operations.InputMsk = {
  sendToRoutes: true,
  id: "<id>",
  type: "msk",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
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
    "<value 3>",
  ],
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
  autoCommitInterval: 8683.72,
  autoCommitThreshold: 2525.6,
  maxBytesPerPartition: 1048576,
  maxBytes: 10485760,
  maxSocketErrors: 0,
  description:
    "through wherever incidentally elevator now um overspend calmly if yum",
  awsApiKey: "<value>",
  awsSecret: "<value>",
};
```

### `operations.InputHttp`

```typescript
const value: operations.InputHttp = {
  sendToRoutes: true,
  id: "<id>",
  type: "http",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
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
  port: 6785.78,
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
      description: "demob apropos indeed ceramic scrabble however given scorn",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
    },
  ],
  description: "which rusty playfully as spirited next with circa",
};
```

### `operations.InputSplunk`

```typescript
const value: operations.InputSplunk = {
  sendToRoutes: true,
  id: "<id>",
  type: "splunk",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
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
  port: 6902.64,
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
  ],
  staleChannelFlushMs: 10000,
  authTokens: [
    {
      token: "<value>",
      description: "beneath that scarcely finally dusk beneath",
    },
  ],
  maxS2Sversion: "v3",
  description: "questionably qua yak lest roasted phew suckle",
  useFwdTimezone: true,
  dropControlFields: true,
  extractMetrics: false,
  compress: "disabled",
};
```

### `operations.InputSplunkSearch`

```typescript
const value: operations.InputSplunkSearch = {
  sendToRoutes: true,
  id: "<id>",
  type: "splunk_search",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
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
  logLevel: "info",
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
    "<value 2>",
    "<value 3>",
  ],
  staleChannelFlushMs: 10000,
  authType: "basic",
  description: "noisily vice chiffonier finally rewarding although stale every",
  username: "Alta_Cremin",
  password: "N7GNf93ZLTnaRwn",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://yummy-starboard.com",
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

### `operations.InputSplunkHec`

```typescript
const value: operations.InputSplunkHec = {
  sendToRoutes: true,
  id: "<id>",
  type: "splunk_hec",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
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
  port: 6114.45,
  authTokens: [
    {
      authType: "manual",
      tokenSecret: "<value>",
      token: "<value>",
      enabled: true,
      description:
        "bouncy digestive acknowledge instead moisten finally thoughtfully likewise graceful",
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
  ],
  staleChannelFlushMs: 10000,
  useFwdTimezone: true,
  dropControlFields: true,
  extractMetrics: false,
  accessControlAllowOrigin: [
    "<value 1>",
  ],
  accessControlAllowHeaders: [
    "<value 1>",
  ],
  emitTokenMetrics: false,
  description: "utterly egg serpentine",
};
```

### `operations.InputAzureBlob`

```typescript
const value: operations.InputAzureBlob = {
  sendToRoutes: true,
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
  description:
    "indeed carouse meh after atop wide kindheartedly perspire indeed",
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

### `operations.InputElastic`

```typescript
const value: operations.InputElastic = {
  sendToRoutes: true,
  id: "<id>",
  type: "elastic",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
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
  port: 4249.28,
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
    username: "Tony27",
    password: "tpxXY93r9VLxak1",
    credentialsSecret: "<value>",
    url: "https://impractical-decryption.net/",
    rejectUnauthorized: false,
    removeHeaders: [
      "<value 1>",
      "<value 2>",
    ],
    timeoutSec: 60,
  },
  description: "sans usefully between oh finding miskey properly and ick",
  username: "Darrel.Johns-Bernier25",
  password: "At3FZkn_A5ykHzb",
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

### `operations.InputConfluentCloud`

```typescript
const value: operations.InputConfluentCloud = {
  sendToRoutes: true,
  id: "<id>",
  type: "confluent_cloud",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
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
  autoCommitInterval: 987.28,
  autoCommitThreshold: 5893.61,
  maxBytesPerPartition: 1048576,
  maxBytes: 10485760,
  maxSocketErrors: 0,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "as furiously jot as glider",
};
```

### `operations.InputGrafana`

```typescript
const value: operations.InputGrafana = {
  id: "<id>",
  type: "grafana",
  disabled: false,
  pipeline: "<value>",
  sendToRoutes: true,
  environment: "<value>",
  pqEnabled: false,
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
  port: 3829.93,
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
    username: "Keith.Bins85",
    password: "3MqrKhTNCXTRzTJ",
    token: "<value>",
    credentialsSecret: "<value>",
    textSecret: "<value>",
    loginUrl: "https://doting-freckle.com/",
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
    username: "Norval84",
    password: "2j2wLP5YnNQJeNf",
    token: "<value>",
    credentialsSecret: "<value>",
    textSecret: "<value>",
    loginUrl: "https://cultivated-riser.name",
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
    "supposing ignorance beside capitalize on even personalise silky responsible smoke",
};
```

### `operations.InputLoki`

```typescript
const value: operations.InputLoki = {
  sendToRoutes: true,
  id: "<id>",
  type: "loki",
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
  port: 8693.67,
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
  description:
    "bah along fooey beside suitcase intently that vivacious shrill atomize",
  username: "Laverne81",
  password: "Na5gUKeS5HmCenc",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://steel-dish.biz",
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

### `operations.InputPrometheusRw`

```typescript
const value: operations.InputPrometheusRw = {
  sendToRoutes: true,
  id: "<id>",
  type: "prometheus_rw",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
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
  port: 5937.93,
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
  description: "distant secondary which brush inasmuch ectoderm beside",
  username: "Jamir_Herzog7",
  password: "XFBiXxUVqFTYJQG",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://smoggy-trench.biz",
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

### `operations.InputPrometheus`

```typescript
const value: operations.InputPrometheus = {
  sendToRoutes: true,
  id: "<id>",
  type: "prometheus",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
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
    "<value 2>",
    "<value 3>",
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
  description: "jumbo compete qualified gosh aw too while circa scout how",
  targetList: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  recordType: "SRV",
  scrapePort: 9090,
  nameList: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
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
  username: "Hattie.Keebler",
  password: "49dzeEgu373gzji",
  credentialsSecret: "<value>",
};
```

### `operations.InputEdgePrometheus`

```typescript
const value: operations.InputEdgePrometheus = {
  sendToRoutes: true,
  id: "<id>",
  type: "edge_prometheus",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
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
    "<value 2>",
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
  description: "er delight incinerate before equatorial",
  targets: [
    {
      protocol: "http",
      host: "powerful-summer.org",
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
      description:
        "spectate round overproduce though psst commodity except across yum",
    },
  ],
  username: "Scot_Fisher55",
  password: "8jVu8wRJ1e7gBQP",
  credentialsSecret: "<value>",
};
```

### `operations.InputOffice365Mgmt`

```typescript
const value: operations.InputOffice365Mgmt = {
  sendToRoutes: true,
  id: "<id>",
  type: "office365_mgmt",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
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
      description: "excluding quiet unlike twine",
      interval: 6841.39,
      logLevel: "info",
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
  description: "red whose at scarcely accomplished surprisingly mmm",
  clientSecret: "<value>",
  textSecret: "<value>",
};
```

### `operations.InputOffice365Service`

```typescript
const value: operations.InputOffice365Service = {
  sendToRoutes: true,
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
      description: "bootleg fraudster sentimental",
      interval: 1685,
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
  description: "evil wrongly till meh eek",
  clientSecret: "<value>",
  textSecret: "<value>",
};
```

### `operations.InputOffice365MsgTrace`

```typescript
const value: operations.InputOffice365MsgTrace = {
  sendToRoutes: true,
  id: "<id>",
  type: "office365_msg_trace",
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
  description: "athwart keenly humidity inasmuch connect",
  username: "Davon86",
  password: "nOpBtx3Mn0yWZd5",
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

### `operations.InputEventhub`

```typescript
const value: operations.InputEventhub = {
  sendToRoutes: true,
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
  brokers: [
    "<value 1>",
  ],
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
  autoCommitInterval: 1534.42,
  autoCommitThreshold: 4540.32,
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
  description: "um lively consequently step battle squeaky",
};
```

### `operations.InputExec`

```typescript
const value: operations.InputExec = {
  sendToRoutes: true,
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
  command: "<value>",
  retries: 10,
  scheduleType: "interval",
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  staleChannelFlushMs: 10000,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "electronics quixotic carpool",
  interval: 60,
  cronSchedule: "* * * * *",
};
```

### `operations.InputFirehose`

```typescript
const value: operations.InputFirehose = {
  sendToRoutes: true,
  id: "<id>",
  type: "firehose",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
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
  port: 9117.23,
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
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description:
    "broadly loyalty whoa gah truly throughout miserably wherever founder",
};
```

### `operations.InputGooglePubsub`

```typescript
const value: operations.InputGooglePubsub = {
  sendToRoutes: true,
  id: "<id>",
  type: "google_pubsub",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
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
  description: "ideal follower sport considering",
  orderedDelivery: false,
};
```

### `operations.InputCribl`

```typescript
const value: operations.InputCribl = {
  sendToRoutes: true,
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
  filter: "<value>",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description:
    "until pfft lend inferior beside tempting kissingly ouch garrote phooey",
};
```

### `operations.InputCriblTcp`

```typescript
const value: operations.InputCriblTcp = {
  sendToRoutes: true,
  id: "<id>",
  type: "cribl_tcp",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
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
  port: 8395.01,
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
  description: "than exempt officially dial lieu matter after than",
};
```

### `operations.InputCriblHttp`

```typescript
const value: operations.InputCriblHttp = {
  sendToRoutes: true,
  id: "<id>",
  type: "cribl_http",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
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
  port: 3467.57,
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
  description: "demobilise after once physically lid knotty why designation",
};
```

### `operations.InputCriblLakeHttp`

```typescript
const value: operations.InputCriblLakeHttp = {
  sendToRoutes: true,
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
  port: 7324.83,
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
      description: "speedily blah oof zowie bookend",
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
          "<value 3>",
        ],
      },
      elasticsearchMetadata: {
        enabled: true,
        defaultDataset: "<value>",
      },
    },
  ],
  description: "during athwart healthily within angrily",
};
```

### `operations.InputTcpjson`

```typescript
const value: operations.InputTcpjson = {
  sendToRoutes: true,
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
  port: 8664.04,
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
  description: "beard minus since seemingly",
  authToken: "",
  textSecret: "<value>",
};
```

### `operations.InputSystemMetrics`

```typescript
const value: operations.InputSystemMetrics = {
  sendToRoutes: true,
  id: "<id>",
  type: "system_metrics",
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
          "<value 2>",
          "<value 3>",
        ],
        mountpoints: [
          "<value 1>",
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
  description: "lumpy hence advanced",
};
```

### `operations.InputSystemState`

```typescript
const value: operations.InputSystemState = {
  sendToRoutes: true,
  id: "<id>",
  type: "system_state",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
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
  description: "experienced across briskly likewise procrastinate",
};
```

### `operations.InputKubeMetrics`

```typescript
const value: operations.InputKubeMetrics = {
  sendToRoutes: true,
  id: "<id>",
  type: "kube_metrics",
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
  description: "storyboard anti arraign boohoo coexist fork indeed",
};
```

### `operations.InputKubeLogs`

```typescript
const value: operations.InputKubeLogs = {
  sendToRoutes: true,
  id: "<id>",
  type: "kube_logs",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
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
      description: "furthermore yet phew dusk ha off before",
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
  ],
  staleChannelFlushMs: 10000,
  enableLoadBalancing: false,
  description: "realistic stint leading arrange positively",
};
```

### `operations.InputKubeEvents`

```typescript
const value: operations.InputKubeEvents = {
  sendToRoutes: true,
  id: "<id>",
  type: "kube_events",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
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
  description: "versus yippee lest sleepy blindly drat",
};
```

### `operations.InputWindowsMetrics`

```typescript
const value: operations.InputWindowsMetrics = {
  sendToRoutes: true,
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
        ],
        perInterface: false,
      },
      disk: {
        mode: "basic",
        perVolume: false,
        detail: false,
        volumes: [
          "<value 1>",
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
  description:
    "tighten around mountain pish until critical what greatly enormously medium",
};
```

### `operations.InputCrowdstrike`

```typescript
const value: operations.InputCrowdstrike = {
  sendToRoutes: true,
  id: "<id>",
  type: "crowdstrike",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
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
  description: "after quit cuckoo whoa",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  tagAfterProcessing: "false",
  processedTagKey: "<value>",
  processedTagValue: "<value>",
};
```

### `operations.InputDatadogAgent`

```typescript
const value: operations.InputDatadogAgent = {
  sendToRoutes: true,
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
  port: 5077.61,
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
  description: "unaccountably miskey duh",
};
```

### `operations.InputDatagen`

```typescript
const value: operations.InputDatagen = {
  sendToRoutes: true,
  id: "<id>",
  type: "datagen",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
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
  description:
    "however timely happy-go-lucky before palatable commodity thigh like",
};
```

### `operations.InputHttpRaw`

```typescript
const value: operations.InputHttpRaw = {
  sendToRoutes: true,
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
  port: 6835.16,
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
  description: "indolent unto arrange um excepting optimistically",
};
```

### `operations.InputKinesis`

```typescript
const value: operations.InputKinesis = {
  sendToRoutes: true,
  id: "<id>",
  type: "kinesis",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
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
  description: "expansion deduction bah ew pfft who derby",
  awsApiKey: "<value>",
  awsSecret: "<value>",
};
```

### `operations.InputCriblmetrics`

```typescript
const value: operations.InputCriblmetrics = {
  sendToRoutes: true,
  id: "<id>",
  type: "criblmetrics",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
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
  description: "yowza accurate because than quick although outlaw proceed",
};
```

### `operations.InputMetrics`

```typescript
const value: operations.InputMetrics = {
  sendToRoutes: true,
  id: "<id>",
  type: "metrics",
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
  udpPort: 5530.13,
  tcpPort: 4822.38,
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
  udpSocketRxBufSize: 6906.73,
  description: "for whether archaeology",
};
```

### `operations.InputS3`

```typescript
const value: operations.InputS3 = {
  sendToRoutes: true,
  id: "<id>",
  type: "s3",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
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
  encoding: "<value>",
  tagAfterProcessing: false,
  description:
    "rural impossible reorient silently rosy notwithstanding orient inspect from",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  processedTagKey: "<value>",
  processedTagValue: "<value>",
};
```

### `operations.InputS3Inventory`

```typescript
const value: operations.InputS3Inventory = {
  sendToRoutes: true,
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
  description: "caption oh who",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  tagAfterProcessing: "false",
  processedTagKey: "<value>",
  processedTagValue: "<value>",
};
```

### `operations.InputSnmp`

```typescript
const value: operations.InputSnmp = {
  sendToRoutes: true,
  id: "<id>",
  type: "snmp",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
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
  udpSocketRxBufSize: 8335.29,
  varbindsWithTypes: false,
  bestEffortParsing: false,
  description: "wallaby ick bootleg with jury considering beneath",
};
```

### `operations.InputOpenTelemetry`

```typescript
const value: operations.InputOpenTelemetry = {
  sendToRoutes: true,
  id: "<id>",
  type: "open_telemetry",
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
  description: "before zowie effector",
  username: "Letitia30",
  password: "qt5BcczvMT9OEjo",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://scratchy-bidet.com/",
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

### `operations.InputModelDrivenTelemetry`

```typescript
const value: operations.InputModelDrivenTelemetry = {
  sendToRoutes: true,
  id: "<id>",
  type: "model_driven_telemetry",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
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
  description: "jot apologise than brr",
};
```

### `operations.InputSqs`

```typescript
const value: operations.InputSqs = {
  sendToRoutes: true,
  id: "<id>",
  type: "sqs",
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
  description:
    "graceful typify guilty leap provided bludgeon cycle upwardly overconfidently boohoo",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  numReceivers: 3,
};
```

### `operations.InputSyslog`

```typescript
const value: operations.InputSyslog = {
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
  udpPort: 1599.11,
  tcpPort: 1600.07,
  maxBufferSize: 1000,
  ipWhitelistRegex: "/.*/",
  timestampTimezone: "local",
  singleMsgUdpPackets: false,
  enableProxyHeader: false,
  keepFieldsList: [
    "<value 1>",
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
  udpSocketRxBufSize: 5723.15,
  enableLoadBalancing: false,
  description: "truly modulo grave cake hidden against carefully",
  enableEnhancedProxyHeaderParsing: false,
};
```

### `operations.InputFile`

```typescript
const value: operations.InputFile = {
  sendToRoutes: true,
  id: "<id>",
  type: "file",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
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
    "<value 3>",
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
  ],
  staleChannelFlushMs: 10000,
  description: "gut sticker whereas",
  path: "/usr/libdata",
  depth: 3.24,
  suppressMissingPathErrors: false,
  deleteFiles: false,
  includeUnidentifiableBinary: false,
};
```

### `operations.InputTcp`

```typescript
const value: operations.InputTcp = {
  sendToRoutes: true,
  id: "<id>",
  type: "tcp",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
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
  port: 3294.18,
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
  description: "distinction extremely kiss uh-huh",
  authToken: "",
  authType: "manual",
  textSecret: "<value>",
};
```

### `operations.InputAppscope`

```typescript
const value: operations.InputAppscope = {
  sendToRoutes: true,
  id: "<id>",
  type: "appscope",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
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
    transportURL: "https://cool-cop-out.info/",
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
  description:
    "inspection valuable hospitalization actual joshingly priesthood gifted dream",
  host: "different-account.com",
  port: 4578.96,
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

### `operations.InputWef`

```typescript
const value: operations.InputWef = {
  sendToRoutes: true,
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
    minVersion: "TLSv1.1",
    maxVersion: "TLSv1.1",
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
      targets: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
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
          path: "/private/tmp",
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
  description: "inasmuch when excluding label joyously",
  logFingerprintMismatch: false,
};
```

### `operations.InputWinEventLogs`

```typescript
const value: operations.InputWinEventLogs = {
  sendToRoutes: true,
  id: "<id>",
  type: "win_event_logs",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
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
  description: "across chiffonier fervently restaurant",
  disableJsonRendering: false,
  disableXmlRendering: true,
};
```

### `operations.InputRawUdp`

```typescript
const value: operations.InputRawUdp = {
  sendToRoutes: true,
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
  port: 3458.13,
  maxBufferSize: 1000,
  ipWhitelistRegex: "/.*/",
  singleMsgUdpPackets: false,
  ingestRawBytes: false,
  udpSocketRxBufSize: 2627.16,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "woot amused during arrogantly",
};
```

### `operations.InputJournalFiles`

```typescript
const value: operations.InputJournalFiles = {
  sendToRoutes: true,
  id: "<id>",
  type: "journal_files",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
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
    mode: "always",
    maxBufferSize: 1000,
    commitFrequency: 42,
    maxFileSize: "1 MB",
    maxSize: "5GB",
    path: "$CRIBL_HOME/state/queues",
    compress: "none",
    pqControls: {},
  },
  path: "/opt/include",
  interval: 10,
  journals: [
    "<value 1>",
    "<value 2>",
  ],
  rules: [
    {
      filter: "<value>",
      description: "cross metal tensely daintily where an hot duster",
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
  description: "a boohoo boldly bah solemnly positively tired during plain",
};
```

### `operations.InputWiz`

```typescript
const value: operations.InputWiz = {
  sendToRoutes: true,
  id: "<id>",
  type: "wiz",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
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
  authUrl: "https://only-inspection.info",
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
  description: "dash pro sympathetically probe next so merit so blah",
  clientSecret: "<value>",
  textSecret: "<value>",
};
```

### `operations.InputWizWebhook`

```typescript
const value: operations.InputWizWebhook = {
  sendToRoutes: true,
  id: "<id>",
  type: "wiz_webhook",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
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
  port: 319.62,
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
  description: "gosh what pale from glum step-mother ski",
};
```

### `operations.InputNetflow`

```typescript
const value: operations.InputNetflow = {
  sendToRoutes: true,
  id: "<id>",
  type: "netflow",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
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
  udpSocketRxBufSize: 1639.02,
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
  description: "hence tremendously acknowledge pushy jealous defiantly",
};
```

### `operations.InputSecurityLake`

```typescript
const value: operations.InputSecurityLake = {
  sendToRoutes: true,
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
  encoding: "<value>",
  description: "plus yowza promptly inwardly sock think powerless",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  tagAfterProcessing: "true",
  processedTagKey: "<value>",
  processedTagValue: "<value>",
};
```

### `operations.InputZscalerHec`

```typescript
const value: operations.InputZscalerHec = {
  sendToRoutes: true,
  id: "<id>",
  type: "zscaler_hec",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
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
  port: 6146.82,
  authTokens: [
    {
      authType: "manual",
      tokenSecret: "<value>",
      token: "<value>",
      enabled: true,
      description: "upon drain and appreciate",
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
  ],
  accessControlAllowHeaders: [
    "<value 1>",
    "<value 2>",
  ],
  emitTokenMetrics: false,
  description: "paltry above while in although excepting",
};
```

### `operations.InputCloudflareHec`

```typescript
const value: operations.InputCloudflareHec = {
  sendToRoutes: true,
  id: "<id>",
  type: "cloudflare_hec",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
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
  port: 1261.17,
  authTokens: [
    {
      authType: "secret",
      tokenSecret: "<value>",
      token: "<value>",
      enabled: true,
      description: "shakily apropos since phooey",
      allowedIndexesAtToken: [
        "<value 1>",
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
    "<value 2>",
    "<value 3>",
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
  description: "apud flat knuckle who openly huzzah",
};
```

