# CreateInputRequest

Input object


## Supported Types

### `operations.InputCollection`

```typescript
const value: operations.InputCollection = {
  id: "<id>",
  type: "collection",
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
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  breakerRulesets: [
    "<value 1>",
  ],
  staleChannelFlushMs: 5680.54,
  preprocess: {
    disabled: false,
    command: "<value>",
    args: [
      "<value 1>",
    ],
  },
  throttleRatePerSec: "<value>",
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
  id: "<id>",
  type: "kafka",
  disabled: true,
  pipeline: "<value>",
  sendToRoutes: false,
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
    mode: "always",
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  brokers: [],
  topics: [
    "<value 1>",
  ],
  groupId: "<id>",
  fromBeginning: true,
  kafkaSchemaRegistry: {
    disabled: true,
    schemaRegistryURL: "https://regal-switchboard.biz/",
    connectionTimeout: 9747.78,
    requestTimeout: 5018.66,
    maxRetries: 4285.6,
    auth: {
      disabled: false,
      credentialsSecret: "<value>",
    },
    tls: {
      disabled: false,
      rejectUnauthorized: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1",
      maxVersion: "TLSv1.1",
    },
  },
  connectionTimeout: 9400.64,
  requestTimeout: 8670.69,
  maxRetries: 7481.22,
  maxBackOff: 6874.43,
  initialBackoff: 675.29,
  backoffRate: 7831.91,
  authenticationTimeout: 4838.24,
  reauthenticationThreshold: 4484.32,
  sasl: {
    disabled: true,
    username: "Mertie.Abbott",
    password: "pD36Q7Bu1OSy91K",
    authType: "manual",
    credentialsSecret: "<value>",
    mechanism: "kerberos",
    keytabLocation: "<value>",
    principal: "<value>",
    brokerServiceClass: "<value>",
    oauthEnabled: false,
    tokenUrl: "https://victorious-tectonics.net",
    clientId: "<id>",
    oauthSecretType: "<value>",
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
    disabled: false,
    rejectUnauthorized: true,
    servername: "<value>",
    certificateName: "<value>",
    caPath: "<value>",
    privKeyPath: "<value>",
    certPath: "<value>",
    passphrase: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1.1",
  },
  sessionTimeout: 2927.84,
  rebalanceTimeout: 5598.08,
  heartbeatInterval: 1961.16,
  autoCommitInterval: 6350.5,
  autoCommitThreshold: 7008.45,
  maxBytesPerPartition: 9759.86,
  maxBytes: 5913.02,
  maxSocketErrors: 1895.95,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "under simple pfft solicit coexist mousse for",
};
```

### `operations.InputMsk`

```typescript
const value: operations.InputMsk = {
  id: "<id>",
  type: "msk",
  disabled: false,
  pipeline: "<value>",
  sendToRoutes: false,
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
    mode: "always",
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  brokers: [],
  topics: [
    "<value 1>",
    "<value 2>",
  ],
  groupId: "<id>",
  fromBeginning: false,
  sessionTimeout: 202,
  rebalanceTimeout: 3914.11,
  heartbeatInterval: 8903.9,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  kafkaSchemaRegistry: {
    disabled: true,
    schemaRegistryURL: "https://regal-switchboard.biz/",
    connectionTimeout: 9747.78,
    requestTimeout: 5018.66,
    maxRetries: 4285.6,
    auth: {
      disabled: false,
      credentialsSecret: "<value>",
    },
    tls: {
      disabled: false,
      rejectUnauthorized: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1",
      maxVersion: "TLSv1.1",
    },
  },
  connectionTimeout: 4330.24,
  requestTimeout: 5946.4,
  maxRetries: 5493.72,
  maxBackOff: 5512.41,
  initialBackoff: 6513.53,
  backoffRate: 1824.69,
  authenticationTimeout: 1180.47,
  reauthenticationThreshold: 7734.92,
  awsAuthenticationMethod: "<value>",
  awsSecretKey: "<value>",
  region: "<value>",
  endpoint: "<value>",
  signatureVersion: "v2",
  reuseConnections: false,
  rejectUnauthorized: false,
  enableAssumeRole: true,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 9728.95,
  tls: {
    disabled: false,
    rejectUnauthorized: true,
    servername: "<value>",
    certificateName: "<value>",
    caPath: "<value>",
    privKeyPath: "<value>",
    certPath: "<value>",
    passphrase: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1.1",
  },
  autoCommitInterval: 31.15,
  autoCommitThreshold: 3276.24,
  maxBytesPerPartition: 2416.1,
  maxBytes: 8058.54,
  maxSocketErrors: 370.82,
  description: "sparkling wavy joyously anticodon each bouncy",
  awsApiKey: "<value>",
  awsSecret: "<value>",
};
```

### `operations.InputHttp`

```typescript
const value: operations.InputHttp = {
  id: "<id>",
  type: "http",
  disabled: true,
  pipeline: "<value>",
  sendToRoutes: true,
  environment: "<value>",
  pqEnabled: true,
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
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  host: "excellent-pearl.name",
  port: 4829.29,
  authTokens: [
    "<value 1>",
  ],
  tls: {
    disabled: false,
    requestCert: true,
    rejectUnauthorized: true,
    commonNameRegex: "<value>",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1",
  },
  maxActiveReq: 3531.58,
  maxRequestsPerSocket: 401797,
  enableProxyHeader: true,
  captureHeaders: false,
  activityLogSampleRate: 7981.88,
  requestTimeout: 5786.11,
  socketTimeout: 1731.04,
  keepAliveTimeout: 1298.25,
  enableHealthCheck: true,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  criblAPI: "<value>",
  elasticAPI: "<value>",
  splunkHecAPI: "<value>",
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
      description: "instead worth trek drain eek below",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
    },
  ],
  description: "preregister oddly atomize why",
};
```

### `operations.InputSplunk`

```typescript
const value: operations.InputSplunk = {
  id: "<id>",
  type: "splunk",
  disabled: true,
  pipeline: "<value>",
  sendToRoutes: false,
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
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  host: "winding-hydrant.net",
  port: 5795.44,
  tls: {
    disabled: false,
    requestCert: true,
    rejectUnauthorized: true,
    commonNameRegex: "<value>",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1",
  },
  ipWhitelistRegex: "<value>",
  maxActiveCxn: 2043.55,
  socketIdleTimeout: 7553.42,
  socketEndingMaxWait: 196.24,
  socketMaxLifespan: 3552.88,
  enableProxyHeader: true,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  breakerRulesets: [
    "<value 1>",
  ],
  staleChannelFlushMs: 5266.6,
  authTokens: [
    {
      token: "<value>",
      description: "longingly gulp yum excluding pull pointed the travel",
    },
  ],
  maxS2Sversion: "v4",
  description: "diligently incidentally to finally playfully",
  useFwdTimezone: true,
  dropControlFields: false,
  extractMetrics: false,
  compress: "auto",
};
```

### `operations.InputSplunkSearch`

```typescript
const value: operations.InputSplunkSearch = {
  id: "<id>",
  type: "splunk_search",
  disabled: true,
  pipeline: "<value>",
  sendToRoutes: true,
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
    mode: "always",
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  searchHead: "<value>",
  search: "<value>",
  earliest: "<value>",
  latest: "<value>",
  cronSchedule: "<value>",
  endpoint: "<value>",
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
  requestTimeout: 215.19,
  useRoundRobinDns: false,
  rejectUnauthorized: false,
  encoding: "<value>",
  keepAliveTime: 1841.77,
  jobTimeout: "<value>",
  maxMissedKeepAlives: 6631.27,
  ttl: "<value>",
  ignoreGroupJobsLimit: true,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  retryRules: {
    type: "none",
    interval: 6996.29,
    limit: 5006.8,
    multiplier: 7560.55,
    codes: [
      9559.24,
    ],
    enableHeader: false,
    retryConnectTimeout: false,
    retryConnectReset: true,
  },
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  staleChannelFlushMs: 2782.5,
  authType: "basic",
  description: "birth or apud fooey numeric singing whereas nautical",
  username: "Vida1",
  password: "9JWrbdohpQJfHCn",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://self-reliant-chasuble.info",
  secretParamName: "<value>",
  secret: "<value>",
  tokenAttributeName: "<value>",
  authHeaderExpr: "<value>",
  tokenTimeoutSecs: 6490.55,
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
  id: "<id>",
  type: "splunk_hec",
  disabled: false,
  pipeline: "<value>",
  sendToRoutes: false,
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
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  host: "neglected-platter.net",
  port: 5410.31,
  authTokens: [
    {
      authType: "secret",
      tokenSecret: "<value>",
      token: "<value>",
      enabled: true,
      description: "guacamole corporation daddy gym colorfully giggle",
      allowedIndexesAtToken: [
        "<value 1>",
        "<value 2>",
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
    disabled: false,
    requestCert: true,
    rejectUnauthorized: true,
    commonNameRegex: "<value>",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1",
  },
  maxActiveReq: 9702.28,
  maxRequestsPerSocket: 262517,
  enableProxyHeader: true,
  captureHeaders: true,
  activityLogSampleRate: 2959.6,
  requestTimeout: 2106.04,
  socketTimeout: 9520.52,
  keepAliveTimeout: 7646.16,
  enableHealthCheck: "<value>",
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  splunkHecAPI: "<value>",
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
  staleChannelFlushMs: 5366.47,
  useFwdTimezone: true,
  dropControlFields: false,
  extractMetrics: true,
  accessControlAllowOrigin: [
    "<value 1>",
    "<value 2>",
  ],
  accessControlAllowHeaders: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  emitTokenMetrics: true,
  description:
    "slimy sticky hm gosh indeed wherever anneal notwithstanding anenst as",
};
```

### `operations.InputAzureBlob`

```typescript
const value: operations.InputAzureBlob = {
  id: "<id>",
  type: "azure_blob",
  disabled: false,
  pipeline: "<value>",
  sendToRoutes: false,
  environment: "<value>",
  pqEnabled: true,
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
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  queueName: "<value>",
  fileFilter: "<value>",
  visibilityTimeout: 668.73,
  numReceivers: 8084.51,
  maxMessages: 6142.34,
  servicePeriodSecs: 1655.47,
  skipOnError: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  breakerRulesets: [
    "<value 1>",
  ],
  staleChannelFlushMs: 7468.6,
  parquetChunkSizeMB: 4637.82,
  parquetChunkDownloadTimeout: 9629.28,
  authType: "manual",
  description: "disapprove cinch dowse until unusual interior rout helpfully",
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
  id: "<id>",
  type: "elastic",
  disabled: false,
  pipeline: "<value>",
  sendToRoutes: false,
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
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  host: "damp-jungle.org",
  port: 9874.95,
  tls: {
    disabled: false,
    requestCert: true,
    rejectUnauthorized: true,
    commonNameRegex: "<value>",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1",
  },
  maxActiveReq: 5135.96,
  maxRequestsPerSocket: 194839,
  enableProxyHeader: false,
  captureHeaders: true,
  activityLogSampleRate: 6560.16,
  requestTimeout: 5068.06,
  socketTimeout: 5652.9,
  keepAliveTimeout: 8898.64,
  enableHealthCheck: false,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  elasticAPI: "<value>",
  authType: "credentialsSecret",
  apiVersion: "6.8.4",
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
    authType: "manual",
    username: "Toy_Quitzon",
    password: "NaY2Ax9cyA7phV3",
    credentialsSecret: "<value>",
    url: "https://golden-petal.name",
    rejectUnauthorized: false,
    removeHeaders: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    timeoutSec: 9264.12,
  },
  description:
    "ah memorable abnegate mountain grandpa shanghai whether across legitimize",
  username: "Estell.Baumbach",
  password: "qE8YC8VcJnBHKiz",
  credentialsSecret: "<value>",
  authTokens: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  customAPIVersion: "<value>",
};
```

### `operations.InputConfluentCloud`

```typescript
const value: operations.InputConfluentCloud = {
  id: "<id>",
  type: "confluent_cloud",
  disabled: false,
  pipeline: "<value>",
  sendToRoutes: true,
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
    mode: "always",
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  brokers: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
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
    minVersion: "TLSv1",
    maxVersion: "TLSv1.1",
  },
  topics: [],
  groupId: "<id>",
  fromBeginning: true,
  kafkaSchemaRegistry: {
    disabled: true,
    schemaRegistryURL: "https://regal-switchboard.biz/",
    connectionTimeout: 9747.78,
    requestTimeout: 5018.66,
    maxRetries: 4285.6,
    auth: {
      disabled: false,
      credentialsSecret: "<value>",
    },
    tls: {
      disabled: false,
      rejectUnauthorized: true,
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1",
      maxVersion: "TLSv1.1",
    },
  },
  connectionTimeout: 5875.82,
  requestTimeout: 4430.43,
  maxRetries: 6258.28,
  maxBackOff: 5076.67,
  initialBackoff: 442.78,
  backoffRate: 2457.87,
  authenticationTimeout: 3230.45,
  reauthenticationThreshold: 3594.49,
  sasl: {
    disabled: true,
    username: "Mertie.Abbott",
    password: "pD36Q7Bu1OSy91K",
    authType: "manual",
    credentialsSecret: "<value>",
    mechanism: "kerberos",
    keytabLocation: "<value>",
    principal: "<value>",
    brokerServiceClass: "<value>",
    oauthEnabled: false,
    tokenUrl: "https://victorious-tectonics.net",
    clientId: "<id>",
    oauthSecretType: "<value>",
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
  sessionTimeout: 6214.84,
  rebalanceTimeout: 6484.38,
  heartbeatInterval: 129.76,
  autoCommitInterval: 642.99,
  autoCommitThreshold: 8706.81,
  maxBytesPerPartition: 6940.47,
  maxBytes: 9878.43,
  maxSocketErrors: 6571.24,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "soliloquy daily ack know carelessly after",
};
```

### `operations.InputGrafana`

```typescript
const value: operations.InputGrafana = {
  id: "<id>",
  type: "grafana",
  disabled: true,
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
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  host: "equatorial-colon.biz",
  port: 2154.72,
  tls: {
    disabled: false,
    requestCert: true,
    rejectUnauthorized: true,
    commonNameRegex: "<value>",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1",
  },
  maxActiveReq: 6769.73,
  maxRequestsPerSocket: 590709,
  enableProxyHeader: false,
  captureHeaders: true,
  activityLogSampleRate: 7133.02,
  requestTimeout: 575.67,
  socketTimeout: 5267.17,
  keepAliveTimeout: 8184.82,
  enableHealthCheck: true,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  prometheusAPI: "<value>",
  lokiAPI: "<value>",
  prometheusAuth: {
    authType: "textSecret",
    username: "Kameron.Krajcik",
    password: "TRzTJ4CieT2pr2j",
    token: "<value>",
    credentialsSecret: "<value>",
    textSecret: "<value>",
    loginUrl: "https://unwilling-battle.com/",
    secretParamName: "<value>",
    secret: "<value>",
    tokenAttributeName: "<value>",
    authHeaderExpr: "<value>",
    tokenTimeoutSecs: 1451.34,
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
    authType: "credentialsSecret",
    username: "Brad.Bogisich",
    password: "nNQJeNfbiSbBQOg",
    token: "<value>",
    credentialsSecret: "<value>",
    textSecret: "<value>",
    loginUrl: "https://cheap-custody.net",
    secretParamName: "<value>",
    secret: "<value>",
    tokenAttributeName: "<value>",
    authHeaderExpr: "<value>",
    tokenTimeoutSecs: 3513.03,
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
  description: "meanwhile till uncomfortable till onto utter",
};
```

### `operations.InputLoki`

```typescript
const value: operations.InputLoki = {
  id: "<id>",
  type: "loki",
  disabled: false,
  pipeline: "<value>",
  sendToRoutes: true,
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
    mode: "always",
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  host: "different-halt.org",
  port: 3834.62,
  tls: {
    disabled: false,
    requestCert: true,
    rejectUnauthorized: true,
    commonNameRegex: "<value>",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1",
  },
  maxActiveReq: 2025.7,
  maxRequestsPerSocket: 813603,
  enableProxyHeader: true,
  captureHeaders: false,
  activityLogSampleRate: 4542.77,
  requestTimeout: 9300.73,
  socketTimeout: 9100.49,
  keepAliveTimeout: 4092.62,
  enableHealthCheck: false,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  lokiAPI: "<value>",
  authType: "token",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "emphasize joshingly at oof notwithstanding married flawed pfft",
  username: "Layne.Schroeder",
  password: "Cct1yQtgvQ6PZpB",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://oily-guacamole.com",
  secretParamName: "<value>",
  secret: "<value>",
  tokenAttributeName: "<value>",
  authHeaderExpr: "<value>",
  tokenTimeoutSecs: 6195.32,
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
  id: "<id>",
  type: "prometheus_rw",
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
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  host: "nifty-surface.info",
  port: 3397.29,
  tls: {
    disabled: false,
    requestCert: true,
    rejectUnauthorized: true,
    commonNameRegex: "<value>",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1",
  },
  maxActiveReq: 6203.03,
  maxRequestsPerSocket: 555303,
  enableProxyHeader: false,
  captureHeaders: false,
  activityLogSampleRate: 1438.4,
  requestTimeout: 4633.67,
  socketTimeout: 4441.4,
  keepAliveTimeout: 605.07,
  enableHealthCheck: false,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  prometheusAPI: "<value>",
  authType: "token",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "sightseeing wavy except keenly wide",
  username: "Cara6",
  password: "lUYYKvzYoOK8P9O",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://proper-experience.net",
  secretParamName: "<value>",
  secret: "<value>",
  tokenAttributeName: "<value>",
  authHeaderExpr: "<value>",
  tokenTimeoutSecs: 390.56,
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
  id: "<id>",
  type: "prometheus",
  disabled: true,
  pipeline: "<value>",
  sendToRoutes: false,
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
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  dimensionList: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  discoveryType: "dns",
  interval: 7932.5,
  logLevel: "error",
  rejectUnauthorized: false,
  timeout: 7495.43,
  keepAliveTime: 3867.11,
  jobTimeout: "<value>",
  maxMissedKeepAlives: 3956.43,
  ttl: "<value>",
  ignoreGroupJobsLimit: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  authType: "secret",
  description: "yet mainstream snoop grown atop ruin drat ethyl",
  targetList: [
    "<value 1>",
  ],
  recordType: "AAAA",
  scrapePort: 451.83,
  nameList: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  scrapeProtocol: "https",
  scrapePath: "<value>",
  awsAuthenticationMethod: "<value>",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  usePublicIp: false,
  searchFilter: [
    {
      Name: "<value>",
      Values: [
        "<value 1>",
      ],
    },
  ],
  awsSecretKey: "<value>",
  region: "<value>",
  endpoint: "<value>",
  signatureVersion: "v2",
  reuseConnections: false,
  enableAssumeRole: false,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 2640.6,
  username: "Jalen_Kris",
  password: "PUxEKSAbzVy9MPn",
  credentialsSecret: "<value>",
};
```

### `operations.InputEdgePrometheus`

```typescript
const value: operations.InputEdgePrometheus = {
  id: "<id>",
  type: "edge_prometheus",
  disabled: false,
  pipeline: "<value>",
  sendToRoutes: true,
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
    mode: "always",
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  dimensionList: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  discoveryType: "ec2",
  interval: 3025.46,
  timeout: 8305.52,
  persistence: {
    enable: false,
    timeWindow: "<value>",
    maxDataSize: "<value>",
    maxDataTime: "<value>",
    compress: "gzip",
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  authType: "manual",
  description: "jut yum hm swat what lock nervously upon standard",
  targets: [
    {
      protocol: "https",
      host: "paltry-strait.net",
      port: 7269.58,
      path: "/var/yp",
    },
  ],
  recordType: "SRV",
  scrapePort: 2494.02,
  nameList: [
    "<value 1>",
    "<value 2>",
  ],
  scrapeProtocol: "http",
  scrapePath: "<value>",
  awsAuthenticationMethod: "<value>",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  usePublicIp: false,
  searchFilter: [
    {
      Name: "<value>",
      Values: [
        "<value 1>",
      ],
    },
  ],
  awsSecretKey: "<value>",
  region: "<value>",
  endpoint: "<value>",
  signatureVersion: "v2",
  reuseConnections: false,
  rejectUnauthorized: true,
  enableAssumeRole: true,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 7941.22,
  scrapeProtocolExpr: "<value>",
  scrapePortExpr: "<value>",
  scrapePathExpr: "<value>",
  podFilter: [
    {
      filter: "<value>",
      description: "um which tune cease formamide whose aha general",
    },
  ],
  username: "Uriel.Schinner43",
  password: "_GfZ57KuJW1Epqr",
  credentialsSecret: "<value>",
};
```

### `operations.InputOffice365Mgmt`

```typescript
const value: operations.InputOffice365Mgmt = {
  id: "<id>",
  type: "office365_mgmt",
  disabled: false,
  pipeline: "<value>",
  sendToRoutes: false,
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
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  planType: "gcc_high",
  tenantId: "<id>",
  appId: "<id>",
  timeout: 788.07,
  keepAliveTime: 1427.54,
  jobTimeout: "<value>",
  maxMissedKeepAlives: 875.19,
  ttl: "<value>",
  ignoreGroupJobsLimit: true,
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
      description:
        "blowgun barge burdensome faint carelessly enthusiastically before lest under",
      interval: 2831.36,
      logLevel: "warn",
      enabled: true,
    },
  ],
  ingestionLag: 8240.57,
  retryRules: {
    type: "backoff",
    interval: 2107.49,
    limit: 2764.09,
    multiplier: 9039.82,
    codes: [
      6941.51,
    ],
    enableHeader: true,
    retryConnectTimeout: true,
    retryConnectReset: true,
  },
  authType: "secret",
  description: "impassioned which whereas ravage seagull boldly",
  clientSecret: "<value>",
  textSecret: "<value>",
};
```

### `operations.InputOffice365Service`

```typescript
const value: operations.InputOffice365Service = {
  id: "<id>",
  type: "office365_service",
  disabled: true,
  pipeline: "<value>",
  sendToRoutes: false,
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
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  planType: "dod",
  tenantId: "<id>",
  appId: "<id>",
  timeout: 4191.41,
  keepAliveTime: 3815.37,
  jobTimeout: "<value>",
  maxMissedKeepAlives: 5709.83,
  ttl: "<value>",
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
        "plus conjecture unrealistic than kielbasa important whoa yuck if confusion",
      interval: 1014.03,
      logLevel: "info",
      enabled: false,
    },
  ],
  retryRules: {
    type: "backoff",
    interval: 2107.49,
    limit: 2764.09,
    multiplier: 9039.82,
    codes: [
      6941.51,
    ],
    enableHeader: true,
    retryConnectTimeout: true,
    retryConnectReset: true,
  },
  authType: "manual",
  description: "yippee fail stiffen duh",
  clientSecret: "<value>",
  textSecret: "<value>",
};
```

### `operations.InputOffice365MsgTrace`

```typescript
const value: operations.InputOffice365MsgTrace = {
  id: "<id>",
  type: "office365_msg_trace",
  disabled: true,
  pipeline: "<value>",
  sendToRoutes: false,
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
    mode: "always",
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  url: "https://wicked-bid.info/",
  interval: 943.75,
  startDate: "<value>",
  endDate: "<value>",
  timeout: 570.06,
  disableTimeFilter: true,
  authType: "oauthSecret",
  rescheduleDroppedTasks: false,
  maxTaskReschedule: 2640.61,
  logLevel: "info",
  jobTimeout: "<value>",
  keepAliveTime: 8376.56,
  maxMissedKeepAlives: 2084.53,
  ttl: "<value>",
  ignoreGroupJobsLimit: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  retryRules: {
    type: "backoff",
    interval: 2107.49,
    limit: 2764.09,
    multiplier: 9039.82,
    codes: [
      6941.51,
    ],
    enableHeader: true,
    retryConnectTimeout: true,
    retryConnectReset: true,
  },
  description: "deed whether until naturally degrease",
  username: "Mireya36",
  password: "JZFZfNY3kgTm5fh",
  credentialsSecret: "<value>",
  clientSecret: "<value>",
  tenantId: "<id>",
  clientId: "<id>",
  resource: "<value>",
  planType: "gcc_high",
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
  id: "<id>",
  type: "eventhub",
  disabled: false,
  pipeline: "<value>",
  sendToRoutes: true,
  environment: "<value>",
  pqEnabled: true,
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
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  brokers: [
    "<value 1>",
    "<value 2>",
  ],
  topics: [
    "<value 1>",
  ],
  groupId: "<id>",
  fromBeginning: false,
  connectionTimeout: 2410.87,
  requestTimeout: 6948.17,
  maxRetries: 7510.39,
  maxBackOff: 5913.86,
  initialBackoff: 359.02,
  backoffRate: 5781.86,
  authenticationTimeout: 6168.83,
  reauthenticationThreshold: 5575.38,
  sasl: {
    disabled: false,
    authType: "manual",
    password: "CtfATUqXAfby_x5",
    textSecret: "<value>",
    mechanism: "oauthbearer",
    username: "Rosa.Lakin33",
    clientSecretAuthType: "secret",
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
    rejectUnauthorized: false,
  },
  sessionTimeout: 2694.17,
  rebalanceTimeout: 7726.24,
  heartbeatInterval: 7886.72,
  autoCommitInterval: 6500.9,
  autoCommitThreshold: 6832.17,
  maxBytesPerPartition: 56.52,
  maxBytes: 9270.09,
  maxSocketErrors: 8676.76,
  minimizeDuplicates: true,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description:
    "economise ramp the inquisitively hence anenst with even rusty mmm",
};
```

### `operations.InputExec`

```typescript
const value: operations.InputExec = {
  id: "<id>",
  type: "exec",
  disabled: true,
  pipeline: "<value>",
  sendToRoutes: false,
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
    mode: "always",
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  command: "<value>",
  retries: 7725.09,
  scheduleType: "cronSchedule",
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  staleChannelFlushMs: 5694.82,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "opera wring dress likewise",
  interval: 8781.63,
  cronSchedule: "<value>",
};
```

### `operations.InputFirehose`

```typescript
const value: operations.InputFirehose = {
  id: "<id>",
  type: "firehose",
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
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  host: "skeletal-council.info",
  port: 6949.37,
  authTokens: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  tls: {
    disabled: false,
    requestCert: true,
    rejectUnauthorized: true,
    commonNameRegex: "<value>",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1",
  },
  maxActiveReq: 8100.76,
  maxRequestsPerSocket: 863638,
  enableProxyHeader: true,
  captureHeaders: true,
  activityLogSampleRate: 43.36,
  requestTimeout: 5334.79,
  socketTimeout: 2247.58,
  keepAliveTimeout: 9021.98,
  enableHealthCheck: false,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "postbox psst however till athwart lightly",
};
```

### `operations.InputGooglePubsub`

```typescript
const value: operations.InputGooglePubsub = {
  id: "<id>",
  type: "google_pubsub",
  disabled: true,
  pipeline: "<value>",
  sendToRoutes: false,
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
    mode: "always",
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  topicName: "<value>",
  subscriptionName: "<value>",
  monitorSubscription: false,
  createTopic: false,
  createSubscription: false,
  region: "<value>",
  googleAuthMethod: "secret",
  serviceAccountCredentials: "<value>",
  secret: "<value>",
  maxBacklog: 6970.64,
  concurrency: 8341.33,
  requestTimeout: 8554.64,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "past creator or given slowly glossy nutritious volunteer but",
  orderedDelivery: true,
};
```

### `operations.InputCribl`

```typescript
const value: operations.InputCribl = {
  id: "<id>",
  type: "cribl",
  disabled: true,
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
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
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
    "which eternity scuttle cheerfully whereas yet mmm playfully pecan what",
};
```

### `operations.InputCriblTcp`

```typescript
const value: operations.InputCriblTcp = {
  id: "<id>",
  type: "cribl_tcp",
  disabled: true,
  pipeline: "<value>",
  sendToRoutes: false,
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
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  host: "partial-status.org",
  port: 8551.78,
  tls: {
    disabled: false,
    requestCert: true,
    rejectUnauthorized: true,
    commonNameRegex: "<value>",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1",
  },
  maxActiveCxn: 8321.6,
  socketIdleTimeout: 8630.72,
  socketEndingMaxWait: 895.97,
  socketMaxLifespan: 4455.26,
  enableProxyHeader: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  enableLoadBalancing: true,
  authTokens: [
    {
      tokenSecret: "<value>",
      enabled: true,
      description: "technician flimsy and ha",
    },
  ],
  description: "ouch warmly encode probable regularly boyfriend almost across",
};
```

### `operations.InputCriblHttp`

```typescript
const value: operations.InputCriblHttp = {
  id: "<id>",
  type: "cribl_http",
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
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  host: "biodegradable-worth.net",
  port: 6748.87,
  authTokens: [
    {
      tokenSecret: "<value>",
      enabled: true,
      description: "technician flimsy and ha",
    },
  ],
  tls: {
    disabled: false,
    requestCert: true,
    rejectUnauthorized: true,
    commonNameRegex: "<value>",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1",
  },
  maxActiveReq: 3998.15,
  maxRequestsPerSocket: 640223,
  enableProxyHeader: false,
  captureHeaders: true,
  activityLogSampleRate: 3450.45,
  requestTimeout: 3926.55,
  socketTimeout: 8507.54,
  keepAliveTimeout: 8449.54,
  enableHealthCheck: false,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "tune earth since likewise furthermore tooth folklore",
};
```

### `operations.InputCriblLakeHttp`

```typescript
const value: operations.InputCriblLakeHttp = {
  id: "<id>",
  type: "cribl_lake_http",
  disabled: true,
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
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  host: "worse-convection.com",
  port: 466.24,
  authTokens: [
    "<value 1>",
    "<value 2>",
  ],
  tls: {
    disabled: false,
    requestCert: true,
    rejectUnauthorized: true,
    commonNameRegex: "<value>",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1",
  },
  maxActiveReq: 7820.45,
  maxRequestsPerSocket: 243793,
  enableProxyHeader: true,
  captureHeaders: true,
  activityLogSampleRate: 7534.49,
  requestTimeout: 4513.21,
  socketTimeout: 6554.3,
  keepAliveTimeout: 1793.5,
  enableHealthCheck: false,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  criblAPI: "<value>",
  elasticAPI: "<value>",
  splunkHecAPI: "<value>",
  splunkHecAcks: true,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  authTokensExt: [
    {
      token: "<value>",
      description: "obtrude chime along",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      splunkHecMetadata: {
        enabled: true,
        defaultDataset: "<value>",
        allowedIndexesAtToken: [
          "<value 1>",
        ],
      },
      elasticsearchMetadata: {
        enabled: true,
        defaultDataset: "<value>",
      },
    },
  ],
  description: "if acceptable once numeric",
};
```

### `operations.InputTcpjson`

```typescript
const value: operations.InputTcpjson = {
  id: "<id>",
  type: "tcpjson",
  disabled: true,
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
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  host: "prudent-bungalow.name",
  port: 9637.46,
  tls: {
    disabled: false,
    requestCert: true,
    rejectUnauthorized: true,
    commonNameRegex: "<value>",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1",
  },
  ipWhitelistRegex: "<value>",
  maxActiveCxn: 9134.66,
  socketIdleTimeout: 748.05,
  socketEndingMaxWait: 6406.81,
  socketMaxLifespan: 5580.85,
  enableProxyHeader: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  enableLoadBalancing: false,
  authType: "manual",
  description: "menacing swing oh lovingly",
  authToken: "<value>",
  textSecret: "<value>",
};
```

### `operations.InputSystemMetrics`

```typescript
const value: operations.InputSystemMetrics = {
  id: "<id>",
  type: "system_metrics",
  disabled: false,
  pipeline: "<value>",
  sendToRoutes: false,
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
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  interval: 5754.52,
  host: {
    mode: "custom",
    custom: {
      system: {
        mode: "all",
        processes: true,
      },
      cpu: {
        mode: "custom",
        perCpu: false,
        detail: true,
        time: false,
      },
      memory: {
        mode: "all",
        detail: false,
      },
      network: {
        mode: "custom",
        detail: false,
        protocols: false,
        devices: [
          "<value 1>",
          "<value 2>",
        ],
        perInterface: false,
      },
      disk: {
        mode: "custom",
        detail: true,
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
          "<value 3>",
        ],
        perDevice: true,
      },
    },
  },
  process: {
    sets: [
      {
        name: "<value>",
        filter: "<value>",
        includeChildren: true,
      },
    ],
  },
  container: {
    mode: "custom",
    dockerSocket: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    dockerTimeout: 2610.95,
    filters: [
      {
        expr: "<value>",
      },
    ],
    allContainers: true,
    perDevice: true,
    detail: true,
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  persistence: {
    enable: true,
    timeWindow: "<value>",
    maxDataSize: "<value>",
    maxDataTime: "<value>",
    compress: "none",
    destPath: "<value>",
  },
  description: "trash frequent instead badly though schedule dual vainly zowie",
};
```

### `operations.InputSystemState`

```typescript
const value: operations.InputSystemState = {
  id: "<id>",
  type: "system_state",
  disabled: true,
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
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  interval: 7525.13,
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
      enable: false,
    },
    dns: {
      enable: true,
    },
    user: {
      enable: false,
    },
    firewall: {
      enable: false,
    },
    services: {
      enable: false,
    },
    ports: {
      enable: true,
    },
    loginUsers: {
      enable: true,
    },
  },
  persistence: {
    enable: true,
    timeWindow: "<value>",
    maxDataSize: "<value>",
    maxDataTime: "<value>",
    compress: "none",
    destPath: "<value>",
  },
  disableNativeModule: false,
  description: "hmph whoa minister that defiantly inasmuch softly",
};
```

### `operations.InputKubeMetrics`

```typescript
const value: operations.InputKubeMetrics = {
  id: "<id>",
  type: "kube_metrics",
  disabled: false,
  pipeline: "<value>",
  sendToRoutes: false,
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
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  interval: 5280.18,
  rules: [
    {
      filter: "<value>",
      description: "perspire positively eek these bruised glaring than",
    },
  ],
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  persistence: {
    enable: true,
    timeWindow: "<value>",
    maxDataSize: "<value>",
    maxDataTime: "<value>",
    compress: "gzip",
    destPath: "<value>",
  },
  description:
    "unless meanwhile upbeat where stall mmm fabricate athwart throughout",
};
```

### `operations.InputKubeLogs`

```typescript
const value: operations.InputKubeLogs = {
  id: "<id>",
  type: "kube_logs",
  disabled: false,
  pipeline: "<value>",
  sendToRoutes: true,
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
    mode: "always",
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  interval: 7999.71,
  rules: [
    {
      filter: "<value>",
      description:
        "now after brr unsightly smoothly sham incidentally reclassify service",
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
    timeWindow: "<value>",
    maxDataSize: "<value>",
    maxDataTime: "<value>",
    compress: "gzip",
  },
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
  ],
  staleChannelFlushMs: 8901.57,
  enableLoadBalancing: true,
  description: "now while bah er between lotion husk wedge courageously before",
};
```

### `operations.InputKubeEvents`

```typescript
const value: operations.InputKubeEvents = {
  id: "<id>",
  type: "kube_events",
  disabled: false,
  pipeline: "<value>",
  sendToRoutes: true,
  environment: "<value>",
  pqEnabled: true,
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
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  rules: [
    {
      filter: "<value>",
      description: "perspire positively eek these bruised glaring than",
    },
  ],
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "under refute cleverly until popularize",
};
```

### `operations.InputWindowsMetrics`

```typescript
const value: operations.InputWindowsMetrics = {
  id: "<id>",
  type: "windows_metrics",
  disabled: false,
  pipeline: "<value>",
  sendToRoutes: true,
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
    mode: "always",
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  interval: 1405.59,
  host: {
    mode: "basic",
    custom: {
      system: {
        mode: "custom",
        detail: true,
      },
      cpu: {
        mode: "custom",
        perCpu: false,
        detail: true,
        time: true,
      },
      memory: {
        mode: "custom",
        detail: false,
      },
      network: {
        mode: "custom",
        detail: false,
        protocols: false,
        devices: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        perInterface: true,
      },
      disk: {
        mode: "custom",
        perVolume: true,
        detail: true,
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
        includeChildren: true,
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
    timeWindow: "<value>",
    maxDataSize: "<value>",
    maxDataTime: "<value>",
    compress: "none",
    destPath: "<value>",
  },
  disableNativeModule: true,
  description: "unabashedly ugh so rule swiftly an reflecting mobilize",
};
```

### `operations.InputCrowdstrike`

```typescript
const value: operations.InputCrowdstrike = {
  id: "<id>",
  type: "crowdstrike",
  disabled: true,
  pipeline: "<value>",
  sendToRoutes: true,
  environment: "<value>",
  pqEnabled: true,
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
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
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
  rejectUnauthorized: false,
  breakerRulesets: [
    "<value 1>",
  ],
  staleChannelFlushMs: 733.68,
  maxMessages: 7984.46,
  visibilityTimeout: 1856.44,
  numReceivers: 7008.52,
  socketTimeout: 5247.82,
  skipOnError: true,
  includeSqsMetadata: true,
  enableAssumeRole: false,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 1140.91,
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
  checkpointing: {
    enabled: true,
    retries: 263.57,
  },
  pollTimeout: 4653.01,
  encoding: "<value>",
  description: "woot boohoo lively by likewise calmly boohoo woot",
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
  id: "<id>",
  type: "datadog_agent",
  disabled: true,
  pipeline: "<value>",
  sendToRoutes: false,
  environment: "<value>",
  pqEnabled: true,
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
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  host: "authorized-sanity.info",
  port: 4355.2,
  tls: {
    disabled: false,
    requestCert: true,
    rejectUnauthorized: true,
    commonNameRegex: "<value>",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1",
  },
  maxActiveReq: 9905.9,
  maxRequestsPerSocket: 306070,
  enableProxyHeader: true,
  captureHeaders: false,
  activityLogSampleRate: 220.22,
  requestTimeout: 3474.87,
  socketTimeout: 4505.49,
  keepAliveTimeout: 1952.35,
  enableHealthCheck: false,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  extractMetrics: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  proxyMode: {
    enabled: false,
    rejectUnauthorized: false,
  },
  description: "although minister enraged howl understated standard marimba",
};
```

### `operations.InputDatagen`

```typescript
const value: operations.InputDatagen = {
  id: "<id>",
  type: "datagen",
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
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  samples: [
    {
      sample: "<value>",
      eventsPerSec: 9663.81,
    },
  ],
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "sidetrack kiss mesh qua limp satirize yippee partridge yuck",
};
```

### `operations.InputHttpRaw`

```typescript
const value: operations.InputHttpRaw = {
  id: "<id>",
  type: "http_raw",
  disabled: true,
  pipeline: "<value>",
  sendToRoutes: false,
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
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  host: "able-slipper.com",
  port: 8023.04,
  authTokens: [
    "<value 1>",
  ],
  tls: {
    disabled: false,
    requestCert: true,
    rejectUnauthorized: true,
    commonNameRegex: "<value>",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1",
  },
  maxActiveReq: 2744.85,
  maxRequestsPerSocket: 164381,
  enableProxyHeader: false,
  captureHeaders: true,
  activityLogSampleRate: 8851.97,
  requestTimeout: 1960.89,
  socketTimeout: 8196.57,
  keepAliveTimeout: 9161.38,
  enableHealthCheck: true,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
  ],
  staleChannelFlushMs: 4442.45,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  allowedPaths: [
    "<value 1>",
    "<value 2>",
  ],
  allowedMethods: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  authTokensExt: [
    {
      token: "<value>",
      description: "instead worth trek drain eek below",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
    },
  ],
  description:
    "orientate pfft excepting voluntarily till dependable failing likewise",
};
```

### `operations.InputKinesis`

```typescript
const value: operations.InputKinesis = {
  id: "<id>",
  type: "kinesis",
  disabled: false,
  pipeline: "<value>",
  sendToRoutes: false,
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
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  streamName: "<value>",
  serviceInterval: 6770.38,
  shardExpr: "<value>",
  shardIteratorType: "TRIM_HORIZON",
  payloadFormat: "cribl",
  getRecordsLimit: 6240.06,
  getRecordsLimitTotal: 3491.48,
  loadBalancingAlgorithm: "RoundRobin",
  awsAuthenticationMethod: "<value>",
  awsSecretKey: "<value>",
  region: "<value>",
  endpoint: "<value>",
  signatureVersion: "v2",
  reuseConnections: true,
  rejectUnauthorized: true,
  enableAssumeRole: false,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 6181.69,
  verifyKPLCheckSums: false,
  avoidDuplicates: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "yahoo um aw concerning instead but than amendment",
  awsApiKey: "<value>",
  awsSecret: "<value>",
};
```

### `operations.InputCriblmetrics`

```typescript
const value: operations.InputCriblmetrics = {
  id: "<id>",
  type: "criblmetrics",
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
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  prefix: "<value>",
  fullFidelity: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "slowly yahoo fax jam-packed excluding",
};
```

### `operations.InputMetrics`

```typescript
const value: operations.InputMetrics = {
  id: "<id>",
  type: "metrics",
  disabled: true,
  pipeline: "<value>",
  sendToRoutes: true,
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
    mode: "always",
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  host: "untried-issue.org",
  udpPort: 5392.88,
  tcpPort: 1494.72,
  maxBufferSize: 3461.98,
  ipWhitelistRegex: "<value>",
  enableProxyHeader: true,
  tls: {
    disabled: false,
    requestCert: true,
    rejectUnauthorized: true,
    commonNameRegex: "<value>",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1",
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  udpSocketRxBufSize: 9826.8,
  description:
    "free antelope dependent mushy bandwidth internal adaptation gosh",
};
```

### `operations.InputS3`

```typescript
const value: operations.InputS3 = {
  id: "<id>",
  type: "s3",
  disabled: false,
  pipeline: "<value>",
  sendToRoutes: true,
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
    mode: "always",
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
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
  staleChannelFlushMs: 3022.43,
  maxMessages: 6822.6,
  visibilityTimeout: 5507.13,
  numReceivers: 5367.73,
  socketTimeout: 4409.74,
  skipOnError: true,
  includeSqsMetadata: true,
  enableAssumeRole: true,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 2021.66,
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
  parquetChunkSizeMB: 9578.15,
  parquetChunkDownloadTimeout: 3370,
  checkpointing: {
    enabled: true,
    retries: 263.57,
  },
  pollTimeout: 4285.53,
  encoding: "<value>",
  tagAfterProcessing: true,
  description: "drat since wherever um readjust indeed lest",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  processedTagKey: "<value>",
  processedTagValue: "<value>",
};
```

### `operations.InputS3Inventory`

```typescript
const value: operations.InputS3Inventory = {
  id: "<id>",
  type: "s3_inventory",
  disabled: false,
  pipeline: "<value>",
  sendToRoutes: false,
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
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
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
    "<value 2>",
    "<value 3>",
  ],
  staleChannelFlushMs: 6245.83,
  maxMessages: 106.38,
  visibilityTimeout: 525.72,
  numReceivers: 2680.09,
  socketTimeout: 1176.88,
  skipOnError: true,
  includeSqsMetadata: false,
  enableAssumeRole: false,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 4249.9,
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
  parquetChunkSizeMB: 6112.87,
  parquetChunkDownloadTimeout: 9257.35,
  checkpointing: {
    enabled: true,
    retries: 263.57,
  },
  pollTimeout: 7639.42,
  checksumSuffix: "<value>",
  maxManifestSizeKB: 981790,
  validateInventoryFiles: false,
  description: "plus via tabulate judgementally",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  tagAfterProcessing: "true",
  processedTagKey: "<value>",
  processedTagValue: "<value>",
};
```

### `operations.InputSnmp`

```typescript
const value: operations.InputSnmp = {
  id: "<id>",
  type: "snmp",
  disabled: true,
  pipeline: "<value>",
  sendToRoutes: false,
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
    mode: "always",
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  host: "robust-reservation.org",
  port: 6329.76,
  snmpV3Auth: {
    v3AuthEnabled: true,
    allowUnmatchedTrap: false,
    v3Users: [
      {
        name: "<value>",
        authProtocol: "none",
        authKey: "<value>",
        privProtocol: "aes",
        privKey: "<value>",
      },
    ],
  },
  maxBufferSize: 9645.47,
  ipWhitelistRegex: "<value>",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  udpSocketRxBufSize: 9521.08,
  varbindsWithTypes: true,
  bestEffortParsing: false,
  description: "behind versus omelet",
};
```

### `operations.InputOpenTelemetry`

```typescript
const value: operations.InputOpenTelemetry = {
  id: "<id>",
  type: "open_telemetry",
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
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  host: "enchanting-swim.name",
  port: 91.8,
  tls: {
    disabled: false,
    requestCert: true,
    rejectUnauthorized: true,
    commonNameRegex: "<value>",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1",
  },
  maxActiveReq: 3623.37,
  maxRequestsPerSocket: 167017,
  enableProxyHeader: "<value>",
  captureHeaders: "<value>",
  activityLogSampleRate: "<value>",
  requestTimeout: 4856.31,
  socketTimeout: 6530.93,
  keepAliveTimeout: 2682.96,
  enableHealthCheck: false,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  protocol: "grpc",
  extractSpans: false,
  extractMetrics: true,
  otlpVersion: "1.3.1",
  authType: "token",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  maxActiveCxn: 9401.69,
  description: "phony er whoa however oof svelte yowza",
  username: "Althea_Parker79",
  password: "QsmyV5PHv6hDzLi",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://pricey-lawmaker.com",
  secretParamName: "<value>",
  secret: "<value>",
  tokenAttributeName: "<value>",
  authHeaderExpr: "<value>",
  tokenTimeoutSecs: 8625.86,
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
  id: "<id>",
  type: "model_driven_telemetry",
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
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  host: "impressive-patroller.org",
  port: 3171.72,
  tls: {
    disabled: false,
    requestCert: true,
    rejectUnauthorized: true,
    commonNameRegex: "<value>",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1",
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  maxActiveCxn: 7750.59,
  shutdownTimeoutMs: 7039.55,
  description: "insert connect metabolise flight",
};
```

### `operations.InputSqs`

```typescript
const value: operations.InputSqs = {
  id: "<id>",
  type: "sqs",
  disabled: true,
  pipeline: "<value>",
  sendToRoutes: true,
  environment: "<value>",
  pqEnabled: true,
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
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  queueName: "<value>",
  queueType: "fifo",
  awsAccountId: "<id>",
  createQueue: false,
  awsAuthenticationMethod: "<value>",
  awsSecretKey: "<value>",
  region: "<value>",
  endpoint: "<value>",
  signatureVersion: "v2",
  reuseConnections: false,
  rejectUnauthorized: false,
  enableAssumeRole: true,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 5766.22,
  maxMessages: 3871.51,
  visibilityTimeout: 4486.16,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  pollTimeout: 1932.15,
  description: "outfox cleverly wisely despite ideal",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  numReceivers: 4387.78,
};
```

### `operations.InputSyslog`

```typescript
const value: operations.InputSyslog = {
  id: "<id>",
  type: "syslog",
  disabled: true,
  pipeline: "<value>",
  sendToRoutes: true,
  environment: "<value>",
  pqEnabled: true,
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
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  host: "old-fashioned-leading.com",
  udpPort: 9754.95,
  tcpPort: 4042.01,
  maxBufferSize: 2456,
  ipWhitelistRegex: "<value>",
  timestampTimezone: "<value>",
  singleMsgUdpPackets: false,
  enableProxyHeader: true,
  keepFieldsList: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  octetCounting: true,
  inferFraming: true,
  strictlyInferOctetCounting: false,
  allowNonStandardAppName: true,
  maxActiveCxn: 1234.54,
  socketIdleTimeout: 5106.2,
  socketEndingMaxWait: 5819,
  socketMaxLifespan: 2768.86,
  tls: {
    disabled: false,
    requestCert: true,
    rejectUnauthorized: true,
    commonNameRegex: "<value>",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1",
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  udpSocketRxBufSize: 7607.34,
  enableLoadBalancing: true,
  description: "because mispronounce tarragon that typewriter",
  enableEnhancedProxyHeaderParsing: true,
};
```

### `operations.InputFile`

```typescript
const value: operations.InputFile = {
  id: "<id>",
  type: "file",
  disabled: false,
  pipeline: "<value>",
  sendToRoutes: true,
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
    mode: "always",
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  mode: "auto",
  interval: 2930.4,
  filenames: [
    "<value 1>",
    "<value 2>",
  ],
  filterArchivedFiles: false,
  tailOnly: true,
  idleTimeout: 1865.04,
  minAgeDur: "<value>",
  maxAgeDur: "<value>",
  checkFileModTime: false,
  forceText: true,
  hashLen: 2536.06,
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
  staleChannelFlushMs: 938.78,
  description:
    "pear linear outside absentmindedly mostly truthfully sanity brr immediately commonly",
  path: "/var/yp",
  depth: 2604.05,
  suppressMissingPathErrors: true,
  deleteFiles: true,
  includeUnidentifiableBinary: true,
};
```

### `operations.InputTcp`

```typescript
const value: operations.InputTcp = {
  id: "<id>",
  type: "tcp",
  disabled: true,
  pipeline: "<value>",
  sendToRoutes: false,
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
    mode: "always",
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  host: "cloudy-premier.net",
  port: 9499.86,
  tls: {
    disabled: false,
    requestCert: true,
    rejectUnauthorized: true,
    commonNameRegex: "<value>",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1",
  },
  ipWhitelistRegex: "<value>",
  maxActiveCxn: 5648.33,
  socketIdleTimeout: 6675.69,
  socketEndingMaxWait: 3998.18,
  socketMaxLifespan: 464.91,
  enableProxyHeader: true,
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
  staleChannelFlushMs: 7437.62,
  enableHeader: true,
  preprocess: {
    disabled: false,
    command: "<value>",
    args: [
      "<value 1>",
    ],
  },
  description: "mmm than excepting",
  authToken: "<value>",
  authType: "secret",
  textSecret: "<value>",
};
```

### `operations.InputAppscope`

```typescript
const value: operations.InputAppscope = {
  id: "<id>",
  type: "appscope",
  disabled: true,
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
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  ipWhitelistRegex: "<value>",
  maxActiveCxn: 3550.56,
  socketIdleTimeout: 9471.94,
  socketEndingMaxWait: 6434.91,
  socketMaxLifespan: 1034.62,
  enableProxyHeader: true,
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
  staleChannelFlushMs: 9828.57,
  enableUnixPath: true,
  filter: {
    allow: [
      {
        procname: "<value>",
        arg: "<value>",
        config: "<value>",
      },
    ],
    transportURL: "https://best-trolley.net",
  },
  persistence: {
    enable: false,
    timeWindow: "<value>",
    maxDataSize: "<value>",
    maxDataTime: "<value>",
    compress: "gzip",
    destPath: "<value>",
  },
  authType: "manual",
  description: "interestingly oof hasty during",
  host: "international-duster.info",
  port: 7222.33,
  tls: {
    disabled: false,
    requestCert: true,
    rejectUnauthorized: true,
    commonNameRegex: "<value>",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1",
  },
  unixSocketPath: "<value>",
  unixSocketPerms: "<value>",
  authToken: "<value>",
  textSecret: "<value>",
};
```

### `operations.InputWef`

```typescript
const value: operations.InputWef = {
  id: "<id>",
  type: "wef",
  disabled: false,
  pipeline: "<value>",
  sendToRoutes: true,
  environment: "<value>",
  pqEnabled: true,
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
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  host: "limp-merit.com",
  port: 8774.54,
  authMethod: "kerberos",
  tls: {
    disabled: false,
    rejectUnauthorized: false,
    requestCert: false,
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    commonNameRegex: "<value>",
    minVersion: "TLSv1.3",
    maxVersion: "TLSv1.2",
    ocspCheck: true,
    keytab: "<value>",
    principal: "<value>",
    ocspCheckFailClose: true,
  },
  maxActiveReq: 9277.92,
  maxRequestsPerSocket: 66275,
  enableProxyHeader: true,
  captureHeaders: true,
  keepAliveTimeout: 1075.6,
  enableHealthCheck: true,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  socketTimeout: 2108.93,
  caFingerprint: "<value>",
  keytab: "<value>",
  principal: "<value>",
  allowMachineIdMismatch: false,
  subscriptions: [],
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "weighty firsthand wing meanwhile tomatillo",
  logFingerprintMismatch: false,
};
```

### `operations.InputWinEventLogs`

```typescript
const value: operations.InputWinEventLogs = {
  id: "<id>",
  type: "win_event_logs",
  disabled: false,
  pipeline: "<value>",
  sendToRoutes: false,
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
    mode: "always",
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  logNames: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  readMode: "oldest",
  eventFormat: "json",
  disableNativeModule: false,
  interval: 4446.87,
  batchSize: 303.57,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  maxEventBytes: 3683.2,
  description:
    "fill knowingly irk narrowcast reprimand hence opposite ill-fated psst including",
  disableJsonRendering: true,
  disableXmlRendering: false,
};
```

### `operations.InputRawUdp`

```typescript
const value: operations.InputRawUdp = {
  id: "<id>",
  type: "raw_udp",
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
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  host: "neighboring-overheard.biz",
  port: 6658.22,
  maxBufferSize: 6427.1,
  ipWhitelistRegex: "<value>",
  singleMsgUdpPackets: true,
  ingestRawBytes: false,
  udpSocketRxBufSize: 6926.76,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "wearily around so",
};
```

### `operations.InputJournalFiles`

```typescript
const value: operations.InputJournalFiles = {
  id: "<id>",
  type: "journal_files",
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
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  path: "/opt/sbin",
  interval: 3645.26,
  journals: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  rules: [
    {
      filter: "<value>",
      description: "worthless smog outside by handle into massage nor meh",
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
  description: "upwardly summer uncommon minus",
};
```

### `operations.InputWiz`

```typescript
const value: operations.InputWiz = {
  id: "<id>",
  type: "wiz",
  disabled: false,
  pipeline: "<value>",
  sendToRoutes: false,
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
    mode: "always",
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  endpoint: "<value>",
  authUrl: "https://critical-premeditation.biz/",
  authAudienceOverride: "<value>",
  clientId: "<id>",
  contentConfig: [
    {
      contentType: "<value>",
      contentDescription: "<value>",
      enabled: true,
      stateTracking: false,
      stateUpdateExpression: "<value>",
      stateMergeExpression: "<value>",
      manageState: {},
      contentQuery: "<value>",
      cronSchedule: "<value>",
      earliest: "<value>",
      latest: "<value>",
      jobTimeout: "<value>",
      logLevel: "warn",
      maxPages: 9147.3,
    },
  ],
  requestTimeout: 436.67,
  keepAliveTime: 9447.62,
  maxMissedKeepAlives: 3253.16,
  ttl: "<value>",
  ignoreGroupJobsLimit: true,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  retryRules: {
    type: "none",
    interval: 6996.29,
    limit: 5006.8,
    multiplier: 7560.55,
    codes: [
      9559.24,
    ],
    enableHeader: false,
    retryConnectTimeout: false,
    retryConnectReset: true,
  },
  authType: "secret",
  description:
    "furiously unfinished honestly pfft seemingly unearth remand foretell whoever",
  clientSecret: "<value>",
  textSecret: "<value>",
};
```

### `operations.InputWizWebhook`

```typescript
const value: operations.InputWizWebhook = {
  id: "<id>",
  type: "wiz_webhook",
  disabled: false,
  pipeline: "<value>",
  sendToRoutes: false,
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
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  host: "eminent-sport.info",
  port: 9697.37,
  authTokens: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  tls: {
    disabled: false,
    requestCert: true,
    rejectUnauthorized: true,
    commonNameRegex: "<value>",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1",
  },
  maxActiveReq: 9856.66,
  maxRequestsPerSocket: 916,
  enableProxyHeader: true,
  captureHeaders: false,
  activityLogSampleRate: 985.96,
  requestTimeout: 253.53,
  socketTimeout: 94.02,
  keepAliveTimeout: 5673.81,
  enableHealthCheck: false,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  breakerRulesets: [
    "<value 1>",
  ],
  staleChannelFlushMs: 8355.45,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  allowedPaths: [
    "<value 1>",
    "<value 2>",
  ],
  allowedMethods: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  authTokensExt: [
    {
      token: "<value>",
      description: "instead worth trek drain eek below",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
    },
  ],
  description: "metallic devoted behind weakly phrase what mosh faithfully",
};
```

### `operations.InputNetflow`

```typescript
const value: operations.InputNetflow = {
  id: "<id>",
  type: "netflow",
  disabled: false,
  pipeline: "<value>",
  sendToRoutes: false,
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
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  host: "zealous-fund.org",
  port: 3209.42,
  enablePassThrough: false,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  udpSocketRxBufSize: 8327.74,
  templateCacheMinutes: 7161.42,
  v5Enabled: false,
  v9Enabled: true,
  ipfixEnabled: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "schlep however question step entice yowza past whoever",
};
```

### `operations.InputSecurityLake`

```typescript
const value: operations.InputSecurityLake = {
  id: "<id>",
  type: "security_lake",
  disabled: true,
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
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
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
  staleChannelFlushMs: 8288.23,
  maxMessages: 8530.47,
  visibilityTimeout: 1695.02,
  numReceivers: 7805.23,
  socketTimeout: 9417.28,
  skipOnError: true,
  includeSqsMetadata: true,
  enableAssumeRole: false,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 9621.57,
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
  parquetChunkSizeMB: 5822.3,
  parquetChunkDownloadTimeout: 7613.55,
  checkpointing: {
    enabled: true,
    retries: 263.57,
  },
  pollTimeout: 4072.53,
  encoding: "<value>",
  description: "searchingly geez yowza utilized",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  tagAfterProcessing: "false",
  processedTagKey: "<value>",
  processedTagValue: "<value>",
};
```

### `operations.InputZscalerHec`

```typescript
const value: operations.InputZscalerHec = {
  id: "<id>",
  type: "zscaler_hec",
  disabled: true,
  pipeline: "<value>",
  sendToRoutes: false,
  environment: "<value>",
  pqEnabled: true,
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
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  host: "fatal-zebra.org",
  port: 4695.79,
  authTokens: [
    {
      authType: "secret",
      tokenSecret: "<value>",
      token: "<value>",
      enabled: true,
      description: "up whereas energetically limply verbally incline",
      allowedIndexesAtToken: [
        "<value 1>",
        "<value 2>",
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
    disabled: false,
    requestCert: true,
    rejectUnauthorized: true,
    commonNameRegex: "<value>",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1",
  },
  maxActiveReq: 15.52,
  maxRequestsPerSocket: 645270,
  enableProxyHeader: true,
  captureHeaders: true,
  activityLogSampleRate: 7751.55,
  requestTimeout: 1204.99,
  socketTimeout: 3725.58,
  keepAliveTimeout: 7932.87,
  enableHealthCheck: "<value>",
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  hecAPI: "<value>",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  allowedIndexes: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
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
  description: "concerning essence validity runny ick ew log",
};
```

### `operations.InputCloudflareHec`

```typescript
const value: operations.InputCloudflareHec = {
  id: "<id>",
  type: "cloudflare_hec",
  disabled: false,
  pipeline: "<value>",
  sendToRoutes: true,
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
    mode: "always",
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  host: "young-longboat.org",
  port: 9920.98,
  authTokens: [
    {
      authType: "secret",
      tokenSecret: "<value>",
      token: "<value>",
      enabled: false,
      description: "as ugh furlough aw gosh release interviewer accept gosh",
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
    disabled: false,
    requestCert: true,
    rejectUnauthorized: true,
    commonNameRegex: "<value>",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1",
  },
  maxActiveReq: 1311.84,
  maxRequestsPerSocket: 751791,
  enableProxyHeader: false,
  captureHeaders: true,
  activityLogSampleRate: 3258.21,
  requestTimeout: 9447.02,
  socketTimeout: 7012.45,
  keepAliveTimeout: 8953.57,
  enableHealthCheck: "<value>",
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
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
  staleChannelFlushMs: 5766.92,
  accessControlAllowOrigin: [
    "<value 1>",
  ],
  accessControlAllowHeaders: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  emitTokenMetrics: true,
  description: "slow hassle convalesce boohoo",
};
```

