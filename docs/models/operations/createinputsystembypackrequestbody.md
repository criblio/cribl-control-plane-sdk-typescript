# CreateInputSystemByPackRequestBody

Input object


## Supported Types

### `operations.CreateInputSystemByPackInputCollection`

```typescript
const value: operations.CreateInputSystemByPackInputCollection = {
  id: "<id>",
  type: "collection",
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
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  staleChannelFlushMs: 7987.47,
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

### `operations.CreateInputSystemByPackInputKafka`

```typescript
const value: operations.CreateInputSystemByPackInputKafka = {
  id: "<id>",
  type: "kafka",
  disabled: false,
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
  connectionTimeout: 1308.83,
  requestTimeout: 7269.81,
  maxRetries: 5188.59,
  maxBackOff: 574.2,
  initialBackoff: 2353.42,
  backoffRate: 642.42,
  authenticationTimeout: 1846.05,
  reauthenticationThreshold: 8820.67,
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
  sessionTimeout: 6623.32,
  rebalanceTimeout: 1084.92,
  heartbeatInterval: 9781.88,
  autoCommitInterval: 5461.38,
  autoCommitThreshold: 8317.11,
  maxBytesPerPartition: 2246.88,
  maxBytes: 7948.51,
  maxSocketErrors: 1092.16,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "showboat boohoo galoshes but doodle breed between ornate",
};
```

### `operations.CreateInputSystemByPackInputMsk`

```typescript
const value: operations.CreateInputSystemByPackInputMsk = {
  id: "<id>",
  type: "msk",
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
  brokers: [],
  topics: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  groupId: "<id>",
  fromBeginning: true,
  sessionTimeout: 126.88,
  rebalanceTimeout: 3231.34,
  heartbeatInterval: 6317.54,
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
  connectionTimeout: 9946.03,
  requestTimeout: 6533.08,
  maxRetries: 3062.6,
  maxBackOff: 7040.9,
  initialBackoff: 5384.11,
  backoffRate: 7294.33,
  authenticationTimeout: 5808.04,
  reauthenticationThreshold: 8074.39,
  awsAuthenticationMethod: "<value>",
  awsSecretKey: "<value>",
  region: "<value>",
  endpoint: "<value>",
  signatureVersion: "v2",
  reuseConnections: false,
  rejectUnauthorized: true,
  enableAssumeRole: false,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 9078.51,
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
  autoCommitInterval: 7092.81,
  autoCommitThreshold: 4072.72,
  maxBytesPerPartition: 3395.87,
  maxBytes: 4438.44,
  maxSocketErrors: 4994.2,
  description: "stained spiffy unwritten acidic even digit unhappy",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  __template_awsSecretKey: "<value>",
  __template_region: "<value>",
  __template_assumeRoleArn: "<value>",
  __template_assumeRoleExternalId: "<id>",
  __template_awsApiKey: "<value>",
};
```

### `operations.CreateInputSystemByPackInputHttp`

```typescript
const value: operations.CreateInputSystemByPackInputHttp = {
  id: "<id>",
  type: "http",
  disabled: true,
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
  host: "hospitable-developing.net",
  port: 3534.83,
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
  maxActiveReq: 4770,
  maxRequestsPerSocket: 389783,
  enableProxyHeader: false,
  captureHeaders: true,
  activityLogSampleRate: 5515.8,
  requestTimeout: 5923.94,
  socketTimeout: 4935.04,
  keepAliveTimeout: 3809.52,
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
      description: "instead worth trek drain eek below",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
    },
  ],
  description: "instead nutritious reboot before clavicle why",
  __template_host: "<value>",
  __template_port: "<value>",
  __template_splunkHecAPI: "<value>",
};
```

### `operations.CreateInputSystemByPackInputSplunk`

```typescript
const value: operations.CreateInputSystemByPackInputSplunk = {
  id: "<id>",
  type: "splunk",
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
  host: "gruesome-orchid.name",
  port: 1717.41,
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
  maxActiveCxn: 4468.91,
  socketIdleTimeout: 1108.3,
  socketEndingMaxWait: 113.39,
  socketMaxLifespan: 3900.99,
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
  staleChannelFlushMs: 6363.92,
  authTokens: [
    {
      token: "<value>",
      description:
        "aw pension nightlife conjecture greedily deflect feline mainstream",
    },
  ],
  maxS2Sversion: "v4",
  description:
    "around capitalize however extremely knuckle miscalculate truly plain",
  useFwdTimezone: false,
  dropControlFields: true,
  extractMetrics: false,
  compress: "disabled",
  __template_host: "<value>",
  __template_port: "<value>",
};
```

### `operations.CreateInputSystemByPackInputSplunkSearch`

```typescript
const value: operations.CreateInputSystemByPackInputSplunkSearch = {
  id: "<id>",
  type: "splunk_search",
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
  logLevel: "warn",
  requestTimeout: 9173.83,
  useRoundRobinDns: true,
  rejectUnauthorized: true,
  encoding: "<value>",
  keepAliveTime: 4128.11,
  jobTimeout: "<value>",
  maxMissedKeepAlives: 4201.68,
  ttl: "<value>",
  ignoreGroupJobsLimit: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  retryRules: {
    type: "<value>",
    interval: 376.03,
    limit: 6996.29,
    multiplier: 5006.8,
    codes: [
      2139.95,
      9559.24,
      6726.47,
    ],
    enableHeader: false,
    retryConnectTimeout: true,
    retryConnectReset: false,
  },
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
  ],
  staleChannelFlushMs: 9985.59,
  authType: "credentialsSecret",
  description: "rubric proceed after till median marten than own",
  username: "Krystina_Tremblay37",
  password: "5HGjLa1KVQmLq_X",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
};
```

### `operations.CreateInputSystemByPackInputSplunkHec`

```typescript
const value: operations.CreateInputSystemByPackInputSplunkHec = {
  id: "<id>",
  type: "splunk_hec",
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
  host: "fake-encouragement.com",
  port: 1437.17,
  authTokens: [
    {
      authType: "secret",
      tokenSecret: "<value>",
      token: "<value>",
      enabled: false,
      description: "dual when through to pfft",
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
  maxActiveReq: 1431.56,
  maxRequestsPerSocket: 344170,
  enableProxyHeader: true,
  captureHeaders: false,
  activityLogSampleRate: 5198.22,
  requestTimeout: 9652.64,
  socketTimeout: 7992.38,
  keepAliveTimeout: 9935.9,
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
    "<value 2>",
  ],
  splunkHecAcks: true,
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  staleChannelFlushMs: 8372.74,
  useFwdTimezone: true,
  dropControlFields: false,
  extractMetrics: true,
  accessControlAllowOrigin: [
    "<value 1>",
  ],
  accessControlAllowHeaders: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  emitTokenMetrics: false,
  description: "absent zowie alert square coaxingly zowie",
  __template_host: "<value>",
  __template_port: "<value>",
  __template_splunkHecAPI: "<value>",
};
```

### `operations.CreateInputSystemByPackInputAzureBlob`

```typescript
const value: operations.CreateInputSystemByPackInputAzureBlob = {
  id: "<id>",
  type: "azure_blob",
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
  queueName: "<value>",
  fileFilter: "<value>",
  visibilityTimeout: 4534.16,
  numReceivers: 2287.75,
  maxMessages: 1907.53,
  servicePeriodSecs: 6556.87,
  skipOnError: true,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  breakerRulesets: [
    "<value 1>",
  ],
  staleChannelFlushMs: 3031.81,
  parquetChunkSizeMB: 3186.68,
  parquetChunkDownloadTimeout: 3373.76,
  authType: "clientCert",
  description: "even steeple spiffy brr",
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
  __template_queueName: "<value>",
  __template_connectionString: "<value>",
  __template_tenantId: "<id>",
  __template_clientId: "<id>",
};
```

### `operations.CreateInputSystemByPackInputElastic`

```typescript
const value: operations.CreateInputSystemByPackInputElastic = {
  id: "<id>",
  type: "elastic",
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
  host: "fluffy-lift.org",
  port: 805.68,
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
  maxActiveReq: 9790.71,
  maxRequestsPerSocket: 274431,
  enableProxyHeader: false,
  captureHeaders: true,
  activityLogSampleRate: 4891.84,
  requestTimeout: 2140.05,
  socketTimeout: 7254.47,
  keepAliveTimeout: 5607.14,
  enableHealthCheck: true,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  elasticAPI: "<value>",
  authType: "authTokens",
  apiVersion: "custom",
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
    authType: "secret",
    username: "Malachi12",
    password: "lsPR78q3ksU17rp",
    credentialsSecret: "<value>",
    url: "https://bulky-attraction.com/",
    rejectUnauthorized: true,
    removeHeaders: [
      "<value 1>",
      "<value 2>",
    ],
    timeoutSec: 7075.67,
    __template_url: "https://heavy-dish.biz",
  },
  description: "ah psst when before so geez darling tattered embed",
  username: "Tess_Emmerich81",
  password: "nOIKL86w8OWflPd",
  credentialsSecret: "<value>",
  authTokens: [
    "<value 1>",
  ],
  customAPIVersion: "<value>",
  __template_host: "<value>",
  __template_port: "<value>",
};
```

### `operations.CreateInputSystemByPackInputConfluentCloud`

```typescript
const value: operations.CreateInputSystemByPackInputConfluentCloud = {
  id: "<id>",
  type: "confluent_cloud",
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
  brokers: [
    "<value 1>",
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
  topics: [
    "<value 1>",
    "<value 2>",
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
  connectionTimeout: 8770.92,
  requestTimeout: 654.34,
  maxRetries: 5968.9,
  maxBackOff: 7960.76,
  initialBackoff: 3714.59,
  backoffRate: 9003.15,
  authenticationTimeout: 7947.82,
  reauthenticationThreshold: 3060.3,
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
  sessionTimeout: 7186.95,
  rebalanceTimeout: 3330.78,
  heartbeatInterval: 6293.37,
  autoCommitInterval: 6853.7,
  autoCommitThreshold: 889.3,
  maxBytesPerPartition: 5883.6,
  maxBytes: 4756.43,
  maxSocketErrors: 2462.74,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "reclassify thread as someplace",
};
```

### `operations.CreateInputSystemByPackInputGrafanaUnion`

```typescript
const value: operations.CreateInputSystemByPackInputGrafanaUnion = {
  id: "<id>",
  type: "grafana",
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
  host: "gigantic-testimonial.info",
  port: 7018.42,
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
  maxActiveReq: 5132.47,
  maxRequestsPerSocket: 948408,
  enableProxyHeader: true,
  captureHeaders: true,
  activityLogSampleRate: 6997.25,
  requestTimeout: 9129.78,
  socketTimeout: 7835.63,
  keepAliveTimeout: 1087.5,
  enableHealthCheck: false,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  prometheusAPI: "<value>",
  lokiAPI: "<value>",
  prometheusAuth: {
    authType: "textSecret",
    username: "Vickie.Sporer49",
    password: "wfUsLAkFIiqyLng",
    token: "<value>",
    credentialsSecret: "<value>",
    textSecret: "<value>",
  },
  lokiAuth: {
    authType: "none",
    username: "Andreane_Altenwerth",
    password: "2zw6hF9cRyU_8Mw",
    token: "<value>",
    credentialsSecret: "<value>",
    textSecret: "<value>",
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "phooey woot despite than who",
  __template_host: "<value>",
  __template_port: "<value>",
};
```

### `operations.CreateInputSystemByPackInputLoki`

```typescript
const value: operations.CreateInputSystemByPackInputLoki = {
  id: "<id>",
  type: "loki",
  disabled: false,
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
  host: "yummy-thongs.org",
  port: 1142.85,
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
  maxActiveReq: 4151.36,
  maxRequestsPerSocket: 269498,
  enableProxyHeader: false,
  captureHeaders: true,
  activityLogSampleRate: 2243.85,
  requestTimeout: 3332.7,
  socketTimeout: 2287.57,
  keepAliveTimeout: 5778.97,
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
  description: "yippee uh-huh smog where dereference huzzah drat yet peony",
  username: "Ceasar40",
  password: "aLvbWcmimktNIjb",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  __template_host: "<value>",
  __template_port: "<value>",
};
```

### `operations.CreateInputSystemByPackInputPrometheusRw`

```typescript
const value: operations.CreateInputSystemByPackInputPrometheusRw = {
  id: "<id>",
  type: "prometheus_rw",
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
  host: "obedient-bakeware.com",
  port: 9954.83,
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
  maxActiveReq: 9841.56,
  maxRequestsPerSocket: 144345,
  enableProxyHeader: false,
  captureHeaders: false,
  activityLogSampleRate: 4195.61,
  requestTimeout: 7755.32,
  socketTimeout: 2444.53,
  keepAliveTimeout: 4354.38,
  enableHealthCheck: true,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  prometheusAPI: "<value>",
  authType: "credentialsSecret",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "tinted cone worth",
  username: "Gus_Rolfson",
  password: "u8F3Cxktp1pYgrl",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  __template_host: "<value>",
  __template_port: "<value>",
  __template_prometheusAPI: "<value>",
};
```

### `operations.CreateInputSystemByPackInputPrometheus`

```typescript
const value: operations.CreateInputSystemByPackInputPrometheus = {
  id: "<id>",
  type: "prometheus",
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
  dimensionList: [
    "<value 1>",
  ],
  discoveryType: "static",
  interval: 9856.56,
  logLevel: "info",
  rejectUnauthorized: false,
  timeout: 1341.93,
  keepAliveTime: 2353.42,
  jobTimeout: "<value>",
  maxMissedKeepAlives: 5004.89,
  ttl: "<value>",
  ignoreGroupJobsLimit: true,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  authType: "secret",
  description: "ouch gadzooks swiftly the",
  targetList: [
    "<value 1>",
  ],
  recordType: "AAAA",
  scrapePort: 2687.45,
  nameList: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  scrapeProtocol: "http",
  scrapePath: "<value>",
  awsAuthenticationMethod: "<value>",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  usePublicIp: true,
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
  signatureVersion: "v4",
  reuseConnections: false,
  enableAssumeRole: true,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 5709.3,
  username: "Davon_Crooks52",
  password: "s8_jZOwlha7AstH",
  credentialsSecret: "<value>",
  __template_logLevel: "<value>",
  __template_awsApiKey: "<value>",
  __template_awsSecretKey: "<value>",
  __template_region: "<value>",
  __template_assumeRoleArn: "<value>",
  __template_assumeRoleExternalId: "<id>",
};
```

### `operations.CreateInputSystemByPackInputEdgePrometheus`

```typescript
const value: operations.CreateInputSystemByPackInputEdgePrometheus = {
  id: "<id>",
  type: "edge_prometheus",
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
  dimensionList: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  discoveryType: "ec2",
  interval: 5754.7,
  timeout: 814.17,
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
  authType: "secret",
  description:
    "following during evenly duh unnaturally shrill scarcely bowling tightly splay",
  targets: [
    {
      protocol: "http",
      host: "linear-worth.biz",
      port: 4855.53,
      path: "/usr/local/src",
    },
  ],
  recordType: "SRV",
  scrapePort: 4945.08,
  nameList: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
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
  signatureVersion: "v4",
  reuseConnections: false,
  rejectUnauthorized: true,
  enableAssumeRole: true,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 4199.31,
  scrapeProtocolExpr: "<value>",
  scrapePortExpr: "<value>",
  scrapePathExpr: "<value>",
  podFilter: [
    {
      filter: "<value>",
      description:
        "scare which likewise disclosure minus newsprint comb gallivant hoarse",
    },
  ],
  username: "Scotty57",
  password: "VPE7uvWwEynkM7r",
  credentialsSecret: "<value>",
  __template_awsApiKey: "<value>",
  __template_awsSecretKey: "<value>",
  __template_region: "<value>",
  __template_assumeRoleArn: "<value>",
  __template_assumeRoleExternalId: "<id>",
};
```

### `operations.CreateInputSystemByPackInputOffice365Mgmt`

```typescript
const value: operations.CreateInputSystemByPackInputOffice365Mgmt = {
  id: "<id>",
  type: "office365_mgmt",
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
  planType: "gcc_high",
  tenantId: "<id>",
  appId: "<id>",
  timeout: 2714.93,
  keepAliveTime: 3340.46,
  jobTimeout: "<value>",
  maxMissedKeepAlives: 7958.52,
  ttl: "<value>",
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
      description:
        "drat on bouncy reconstitute blah personalise fooey joyfully exempt because",
      interval: 5228.16,
      logLevel: "info",
      enabled: true,
    },
  ],
  ingestionLag: 5834.6,
  retryRules: {
    type: "<value>",
    interval: 6390.37,
    limit: 2107.49,
    multiplier: 2764.09,
    codes: [
      1648,
      6941.51,
      1223.37,
    ],
    enableHeader: true,
    retryConnectTimeout: true,
    retryConnectReset: true,
  },
  authType: "secret",
  description: "among clavicle per fooey scrabble summary ordinary provided",
  clientSecret: "<value>",
  textSecret: "<value>",
  __template_tenantId: "<id>",
  __template_appId: "<id>",
  __template_publisherIdentifier: "<value>",
  __template_clientSecret: "<value>",
};
```

### `operations.CreateInputSystemByPackInputOffice365Service`

```typescript
const value: operations.CreateInputSystemByPackInputOffice365Service = {
  id: "<id>",
  type: "office365_service",
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
  planType: "enterprise_gcc",
  tenantId: "<id>",
  appId: "<id>",
  timeout: 1065.46,
  keepAliveTime: 5709.61,
  jobTimeout: "<value>",
  maxMissedKeepAlives: 6673.54,
  ttl: "<value>",
  ignoreGroupJobsLimit: true,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  contentConfig: [
    {
      contentType: "<value>",
      description: "meh management that pish energetically jet gosh",
      interval: 2091.39,
      logLevel: "info",
      enabled: false,
    },
  ],
  retryRules: {
    type: "<value>",
    interval: 6390.37,
    limit: 2107.49,
    multiplier: 2764.09,
    codes: [
      1648,
      6941.51,
      1223.37,
    ],
    enableHeader: true,
    retryConnectTimeout: true,
    retryConnectReset: true,
  },
  authType: "secret",
  description: "uh-huh miserably pant but diligently guilty pear gracefully",
  clientSecret: "<value>",
  textSecret: "<value>",
  __template_tenantId: "<id>",
  __template_appId: "<id>",
  __template_clientSecret: "<value>",
};
```

### `operations.CreateInputSystemByPackInputOffice365MsgTrace`

```typescript
const value: operations.CreateInputSystemByPackInputOffice365MsgTrace = {
  id: "<id>",
  type: "office365_msg_trace",
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
  url: "https://babyish-tinderbox.org",
  interval: 7495.91,
  startDate: "<value>",
  endDate: "<value>",
  timeout: 7250.59,
  disableTimeFilter: false,
  authType: "oauthSecret",
  rescheduleDroppedTasks: false,
  maxTaskReschedule: 3676.68,
  logLevel: "debug",
  jobTimeout: "<value>",
  keepAliveTime: 777.19,
  maxMissedKeepAlives: 4299.45,
  ttl: "<value>",
  ignoreGroupJobsLimit: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  retryRules: {
    type: "<value>",
    interval: 6390.37,
    limit: 2107.49,
    multiplier: 2764.09,
    codes: [
      1648,
      6941.51,
      1223.37,
    ],
    enableHeader: true,
    retryConnectTimeout: true,
    retryConnectReset: true,
  },
  description: "unaccountably unlucky decode whereas bitterly",
  username: "Myriam.Grimes58",
  password: "DHwELmHXy6CvSgQ",
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
  __template_url: "https://far-icebreaker.com",
  __template_tenantId: "<id>",
  __template_clientId: "<id>",
  __template_resource: "<value>",
};
```

### `operations.CreateInputSystemByPackInputEventhub`

```typescript
const value: operations.CreateInputSystemByPackInputEventhub = {
  id: "<id>",
  type: "eventhub",
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
  brokers: [
    "<value 1>",
  ],
  topics: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  groupId: "<id>",
  fromBeginning: false,
  connectionTimeout: 7888.03,
  requestTimeout: 1651.92,
  maxRetries: 1215.42,
  maxBackOff: 9017.75,
  initialBackoff: 5156.36,
  backoffRate: 9872.58,
  authenticationTimeout: 4730.8,
  reauthenticationThreshold: 6589.51,
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
  sessionTimeout: 201.65,
  rebalanceTimeout: 6614.1,
  heartbeatInterval: 4256.57,
  autoCommitInterval: 7056.85,
  autoCommitThreshold: 2323.3,
  maxBytesPerPartition: 9021.71,
  maxBytes: 3160.14,
  maxSocketErrors: 8732.86,
  minimizeDuplicates: true,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "versus meh throughout perfectly quirkily",
};
```

### `operations.CreateInputSystemByPackInputExec`

```typescript
const value: operations.CreateInputSystemByPackInputExec = {
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
  retries: 7435.72,
  scheduleType: "interval",
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  staleChannelFlushMs: 8557.22,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "or regarding mmm makeover tinderbox failing psst ouch sheathe",
  interval: 5919.33,
  cronSchedule: "<value>",
};
```

### `operations.CreateInputSystemByPackInputFirehose`

```typescript
const value: operations.CreateInputSystemByPackInputFirehose = {
  id: "<id>",
  type: "firehose",
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
  host: "short-parsnip.name",
  port: 1426.26,
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
  maxActiveReq: 4425.05,
  maxRequestsPerSocket: 26389,
  enableProxyHeader: false,
  captureHeaders: true,
  activityLogSampleRate: 4294.4,
  requestTimeout: 6081.32,
  socketTimeout: 8129.31,
  keepAliveTimeout: 1730.52,
  enableHealthCheck: true,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description:
    "immaculate ah fax chromakey deed against that unnaturally valiantly",
  __template_host: "<value>",
  __template_port: "<value>",
};
```

### `operations.CreateInputSystemByPackInputGooglePubsub`

```typescript
const value: operations.CreateInputSystemByPackInputGooglePubsub = {
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
  monitorSubscription: true,
  createTopic: true,
  createSubscription: true,
  region: "<value>",
  googleAuthMethod: "auto",
  serviceAccountCredentials: "<value>",
  secret: "<value>",
  maxBacklog: 9769.81,
  concurrency: 3406.19,
  requestTimeout: 2630.21,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "stack hence than",
  orderedDelivery: false,
  __template_topicName: "<value>",
  __template_subscriptionName: "<value>",
  __template_region: "<value>",
};
```

### `operations.CreateInputSystemByPackInputCribl`

```typescript
const value: operations.CreateInputSystemByPackInputCribl = {
  id: "<id>",
  type: "cribl",
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
  filter: "<value>",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "where hm calculating physically out nor an prioritize lest",
};
```

### `operations.CreateInputSystemByPackInputCriblTcp`

```typescript
const value: operations.CreateInputSystemByPackInputCriblTcp = {
  id: "<id>",
  type: "cribl_tcp",
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
  host: "fixed-antelope.org",
  port: 9691.28,
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
  maxActiveCxn: 8997.73,
  socketIdleTimeout: 6180.59,
  socketEndingMaxWait: 5691.6,
  socketMaxLifespan: 7600.64,
  enableProxyHeader: true,
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
      description: "technician flimsy and ha",
    },
  ],
  description:
    "bootleg insecure cinch hyphenation molasses hornet arbitrate about",
  __template_host: "<value>",
  __template_port: "<value>",
};
```

### `operations.CreateInputSystemByPackInputCriblHttp`

```typescript
const value: operations.CreateInputSystemByPackInputCriblHttp = {
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
  host: "shameless-t-shirt.com",
  port: 3978.46,
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
  maxActiveReq: 5875.27,
  maxRequestsPerSocket: 684963,
  enableProxyHeader: true,
  captureHeaders: true,
  activityLogSampleRate: 2800.73,
  requestTimeout: 9490.29,
  socketTimeout: 1956,
  keepAliveTimeout: 7541.32,
  enableHealthCheck: false,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "allegation following overcooked mooch dependent",
  __template_host: "<value>",
  __template_port: "<value>",
};
```

### `operations.CreateInputSystemByPackInputCriblLakeHttp`

```typescript
const value: operations.CreateInputSystemByPackInputCriblLakeHttp = {
  id: "<id>",
  type: "cribl_lake_http",
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
  host: "crooked-sushi.org",
  port: 4198.57,
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
  maxActiveReq: 2455.6,
  maxRequestsPerSocket: 471224,
  enableProxyHeader: false,
  captureHeaders: false,
  activityLogSampleRate: 6465.19,
  requestTimeout: 1743.26,
  socketTimeout: 3788.47,
  keepAliveTimeout: 8756.43,
  enableHealthCheck: false,
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
      description: "since deficient confide place brisk",
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
        enabled: false,
        defaultDataset: "<value>",
      },
    },
  ],
  description:
    "officially near hm at rebuild translation major familiarize forenenst goat",
  __template_host: "<value>",
  __template_port: "<value>",
  __template_splunkHecAPI: "<value>",
};
```

### `operations.CreateInputSystemByPackInputTcpjson`

```typescript
const value: operations.CreateInputSystemByPackInputTcpjson = {
  id: "<id>",
  type: "tcpjson",
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
  host: "each-cop-out.com",
  port: 8028.01,
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
  maxActiveCxn: 9395.06,
  socketIdleTimeout: 9197.59,
  socketEndingMaxWait: 453.91,
  socketMaxLifespan: 5908.44,
  enableProxyHeader: true,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  enableLoadBalancing: false,
  authType: "manual",
  description: "claw ew fraternise",
  authToken: "<value>",
  textSecret: "<value>",
  __template_host: "<value>",
  __template_port: "<value>",
};
```

### `operations.CreateInputSystemByPackInputSystemMetrics`

```typescript
const value: operations.CreateInputSystemByPackInputSystemMetrics = {
  id: "<id>",
  type: "system_metrics",
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
  interval: 5738.85,
  host: {
    mode: "basic",
    custom: {
      system: {
        mode: "disabled",
        processes: true,
      },
      cpu: {
        mode: "all",
        perCpu: false,
        detail: true,
        time: true,
      },
      memory: {
        mode: "custom",
        detail: true,
      },
      network: {
        mode: "all",
        detail: true,
        protocols: true,
        devices: [
          "<value 1>",
          "<value 2>",
        ],
        perInterface: true,
      },
      disk: {
        mode: "disabled",
        detail: true,
        inodes: false,
        devices: [
          "<value 1>",
          "<value 2>",
        ],
        mountpoints: [
          "<value 1>",
          "<value 2>",
        ],
        fstypes: [
          "<value 1>",
          "<value 2>",
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
    mode: "basic",
    dockerSocket: [
      "<value 1>",
    ],
    dockerTimeout: 6061,
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
    enable: true,
    timeWindow: "<value>",
    maxDataSize: "<value>",
    maxDataTime: "<value>",
    compress: "none",
    destPath: "<value>",
  },
  description: "glum stiff via scaly irresponsible geez youthful sans",
};
```

### `operations.CreateInputSystemByPackInputSystemState`

```typescript
const value: operations.CreateInputSystemByPackInputSystemState = {
  id: "<id>",
  type: "system_state",
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
  interval: 1011.99,
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
      enable: false,
    },
    metadata: {
      enable: false,
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
      enable: false,
    },
    services: {
      enable: true,
    },
    ports: {
      enable: false,
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
  disableNativeModule: true,
  disableNativeLastLogModule: false,
  description: "outside minus majestically never tomorrow",
};
```

### `operations.CreateInputSystemByPackInputKubeMetrics`

```typescript
const value: operations.CreateInputSystemByPackInputKubeMetrics = {
  id: "<id>",
  type: "kube_metrics",
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
  interval: 9011.21,
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
    enable: false,
    timeWindow: "<value>",
    maxDataSize: "<value>",
    maxDataTime: "<value>",
    compress: "none",
    destPath: "<value>",
  },
  description: "confound mmm propound",
};
```

### `operations.CreateInputSystemByPackInputKubeLogs`

```typescript
const value: operations.CreateInputSystemByPackInputKubeLogs = {
  id: "<id>",
  type: "kube_logs",
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
  interval: 1490.72,
  rules: [
    {
      filter: "<value>",
      description:
        "through why without uselessly feather linseed joshingly charter",
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
  staleChannelFlushMs: 232.58,
  enableLoadBalancing: false,
  description:
    "supposing put brr meanwhile meh correctly inside broadly huddle",
};
```

### `operations.CreateInputSystemByPackInputKubeEvents`

```typescript
const value: operations.CreateInputSystemByPackInputKubeEvents = {
  id: "<id>",
  type: "kube_events",
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
  description: "gulp penalise beyond until finally electric obesity",
};
```

### `operations.CreateInputSystemByPackInputWindowsMetrics`

```typescript
const value: operations.CreateInputSystemByPackInputWindowsMetrics = {
  id: "<id>",
  type: "windows_metrics",
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
  interval: 1227.88,
  host: {
    mode: "all",
    custom: {
      system: {
        mode: "custom",
        detail: false,
      },
      cpu: {
        mode: "disabled",
        perCpu: false,
        detail: false,
        time: true,
      },
      memory: {
        mode: "custom",
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
        mode: "disabled",
        perVolume: true,
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
    enable: true,
    timeWindow: "<value>",
    maxDataSize: "<value>",
    maxDataTime: "<value>",
    compress: "none",
    destPath: "<value>",
  },
  disableNativeModule: false,
  description:
    "before enormously marketplace but inasmuch log between flowery eek yum",
};
```

### `operations.CreateInputSystemByPackInputCrowdstrike`

```typescript
const value: operations.CreateInputSystemByPackInputCrowdstrike = {
  id: "<id>",
  type: "crowdstrike",
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
    "<value 3>",
  ],
  staleChannelFlushMs: 7273.51,
  maxMessages: 5403.95,
  visibilityTimeout: 6892.64,
  numReceivers: 1733.18,
  socketTimeout: 4242.97,
  skipOnError: true,
  includeSqsMetadata: false,
  enableAssumeRole: true,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 8169.95,
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
  pollTimeout: 1906,
  encoding: "<value>",
  description: "phooey contractor satirise truly unlike amidst char minister",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  tagAfterProcessing: "true",
  processedTagKey: "<value>",
  processedTagValue: "<value>",
  __template_queueName: "<value>",
  __template_awsAccountId: "<id>",
  __template_awsSecretKey: "<value>",
  __template_region: "<value>",
  __template_assumeRoleArn: "<value>",
  __template_assumeRoleExternalId: "<id>",
  __template_awsApiKey: "<value>",
};
```

### `operations.CreateInputSystemByPackInputDatadogAgent`

```typescript
const value: operations.CreateInputSystemByPackInputDatadogAgent = {
  id: "<id>",
  type: "datadog_agent",
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
  host: "ruddy-noon.biz",
  port: 89.63,
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
  maxActiveReq: 3378.82,
  maxRequestsPerSocket: 842721,
  enableProxyHeader: true,
  captureHeaders: false,
  activityLogSampleRate: 7562.94,
  requestTimeout: 1093.43,
  socketTimeout: 2029.81,
  keepAliveTimeout: 5838.15,
  enableHealthCheck: false,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  extractMetrics: true,
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
  description: "enthusiastically mobilise plugin secret mmm oh against",
  __template_host: "<value>",
  __template_port: "<value>",
};
```

### `operations.CreateInputSystemByPackInputDatagen`

```typescript
const value: operations.CreateInputSystemByPackInputDatagen = {
  id: "<id>",
  type: "datagen",
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
  samples: [
    {
      sample: "<value>",
      eventsPerSec: 9169.31,
    },
  ],
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "by boohoo brochure giggle decode treble microchip",
};
```

### `operations.CreateInputSystemByPackInputHttpRaw`

```typescript
const value: operations.CreateInputSystemByPackInputHttpRaw = {
  id: "<id>",
  type: "http_raw",
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
  host: "muted-championship.biz",
  port: 3301.1,
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
  maxActiveReq: 1000.4,
  maxRequestsPerSocket: 336636,
  enableProxyHeader: false,
  captureHeaders: true,
  activityLogSampleRate: 7942.8,
  requestTimeout: 6539.48,
  socketTimeout: 5890.15,
  keepAliveTimeout: 1933.97,
  enableHealthCheck: false,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  breakerRulesets: [
    "<value 1>",
  ],
  staleChannelFlushMs: 8811.45,
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
  description: "bank if intently thorough following",
  __template_host: "<value>",
  __template_port: "<value>",
};
```

### `operations.CreateInputSystemByPackInputKinesis`

```typescript
const value: operations.CreateInputSystemByPackInputKinesis = {
  id: "<id>",
  type: "kinesis",
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
  streamName: "<value>",
  serviceInterval: 807.66,
  shardExpr: "<value>",
  shardIteratorType: "TRIM_HORIZON",
  payloadFormat: "cribl",
  getRecordsLimit: 3775.26,
  getRecordsLimitTotal: 9446.56,
  loadBalancingAlgorithm: "ConsistentHashing",
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
  durationSeconds: 8251.59,
  verifyKPLCheckSums: false,
  avoidDuplicates: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "harangue corrupt another despite yuck",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  __template_streamName: "<value>",
  __template_awsSecretKey: "<value>",
  __template_region: "<value>",
  __template_assumeRoleArn: "<value>",
  __template_assumeRoleExternalId: "<id>",
  __template_awsApiKey: "<value>",
};
```

### `operations.CreateInputSystemByPackInputCriblmetrics`

```typescript
const value: operations.CreateInputSystemByPackInputCriblmetrics = {
  id: "<id>",
  type: "criblmetrics",
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
  prefix: "<value>",
  fullFidelity: true,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "humiliating tightly gosh now",
};
```

### `operations.CreateInputSystemByPackInputMetrics`

```typescript
const value: operations.CreateInputSystemByPackInputMetrics = {
  id: "<id>",
  type: "metrics",
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
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  host: "emotional-seagull.info",
  udpPort: 775.98,
  tcpPort: 2902.26,
  maxBufferSize: 8020.67,
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
  udpSocketRxBufSize: 3109.06,
  description:
    "geez ugh possible cafe shrilly rudely frankly from meanwhile well-worn",
  __template_host: "<value>",
  __template_udpPort: "<value>",
  __template_tcpPort: "<value>",
};
```

### `operations.CreateInputSystemByPackInputS3`

```typescript
const value: operations.CreateInputSystemByPackInputS3 = {
  id: "<id>",
  type: "s3",
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
    "<value 2>",
    "<value 3>",
  ],
  staleChannelFlushMs: 1686.23,
  maxMessages: 2475.75,
  visibilityTimeout: 472.81,
  numReceivers: 2274.14,
  socketTimeout: 1990.48,
  skipOnError: false,
  includeSqsMetadata: true,
  enableAssumeRole: false,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 6928.41,
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
  parquetChunkSizeMB: 399.58,
  parquetChunkDownloadTimeout: 319.71,
  checkpointing: {
    enabled: true,
    retries: 263.57,
  },
  pollTimeout: 1461.08,
  encoding: "<value>",
  tagAfterProcessing: false,
  description: "supposing foot boo owlishly",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  processedTagKey: "<value>",
  processedTagValue: "<value>",
  __template_queueName: "<value>",
  __template_awsAccountId: "<id>",
  __template_awsSecretKey: "<value>",
  __template_region: "<value>",
  __template_assumeRoleArn: "<value>",
  __template_assumeRoleExternalId: "<id>",
  __template_awsApiKey: "<value>",
};
```

### `operations.CreateInputSystemByPackInputS3Inventory`

```typescript
const value: operations.CreateInputSystemByPackInputS3Inventory = {
  id: "<id>",
  type: "s3_inventory",
  disabled: true,
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
  signatureVersion: "v4",
  reuseConnections: true,
  rejectUnauthorized: false,
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  staleChannelFlushMs: 907.66,
  maxMessages: 4467.22,
  visibilityTimeout: 1806.86,
  numReceivers: 2927.11,
  socketTimeout: 7596.15,
  skipOnError: true,
  includeSqsMetadata: true,
  enableAssumeRole: true,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 2711.14,
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
  parquetChunkSizeMB: 7939.44,
  parquetChunkDownloadTimeout: 4426.01,
  checkpointing: {
    enabled: true,
    retries: 263.57,
  },
  pollTimeout: 4661.36,
  checksumSuffix: "<value>",
  maxManifestSizeKB: 489711,
  validateInventoryFiles: false,
  description: "bump noon stable meatloaf supportive oh warm not status",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  tagAfterProcessing: "false",
  processedTagKey: "<value>",
  processedTagValue: "<value>",
  __template_queueName: "<value>",
  __template_awsAccountId: "<id>",
  __template_awsSecretKey: "<value>",
  __template_region: "<value>",
  __template_assumeRoleArn: "<value>",
  __template_assumeRoleExternalId: "<id>",
  __template_awsApiKey: "<value>",
};
```

### `operations.CreateInputSystemByPackInputSnmp`

```typescript
const value: operations.CreateInputSystemByPackInputSnmp = {
  id: "<id>",
  type: "snmp",
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
  host: "cuddly-sandbar.net",
  port: 75.13,
  snmpV3Auth: {
    v3AuthEnabled: true,
    allowUnmatchedTrap: false,
    v3Users: [
      {
        name: "<value>",
        authProtocol: "md5",
        authKey: "<value>",
        privProtocol: "none",
        privKey: "<value>",
      },
    ],
  },
  maxBufferSize: 9226.89,
  ipWhitelistRegex: "<value>",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  udpSocketRxBufSize: 575.68,
  varbindsWithTypes: true,
  bestEffortParsing: false,
  description: "without out lobotomise disapprove quinoa warm",
  __template_host: "<value>",
  __template_port: "<value>",
};
```

### `operations.CreateInputSystemByPackInputOpenTelemetry`

```typescript
const value: operations.CreateInputSystemByPackInputOpenTelemetry = {
  id: "<id>",
  type: "open_telemetry",
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
  host: "present-individual.biz",
  port: 3256.43,
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
  maxActiveReq: 5841.35,
  maxRequestsPerSocket: 241980,
  enableProxyHeader: "<value>",
  captureHeaders: "<value>",
  activityLogSampleRate: "<value>",
  requestTimeout: 943.51,
  socketTimeout: 8240.83,
  keepAliveTimeout: 3684.93,
  enableHealthCheck: true,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  protocol: "http",
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
  maxActiveCxn: 9016.99,
  description: "yet blah with between tectonics anenst if",
  username: "Marcelina20",
  password: "IH5Xp2MO2RYQE_k",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  extractLogs: true,
  __template_host: "<value>",
  __template_port: "<value>",
};
```

### `operations.CreateInputSystemByPackInputModelDrivenTelemetry`

```typescript
const value: operations.CreateInputSystemByPackInputModelDrivenTelemetry = {
  id: "<id>",
  type: "model_driven_telemetry",
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
  host: "snarling-procurement.org",
  port: 1950.94,
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
  maxActiveCxn: 6586.22,
  shutdownTimeoutMs: 2902.14,
  description: "about tune-up ew",
  __template_host: "<value>",
  __template_port: "<value>",
};
```

### `operations.CreateInputSystemByPackInputSqs`

```typescript
const value: operations.CreateInputSystemByPackInputSqs = {
  id: "<id>",
  type: "sqs",
  disabled: false,
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
  queueName: "<value>",
  queueType: "fifo",
  awsAccountId: "<id>",
  createQueue: true,
  awsAuthenticationMethod: "<value>",
  awsSecretKey: "<value>",
  region: "<value>",
  endpoint: "<value>",
  signatureVersion: "v4",
  reuseConnections: false,
  rejectUnauthorized: true,
  enableAssumeRole: false,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 2700.78,
  maxMessages: 1479.2,
  visibilityTimeout: 3518.51,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  pollTimeout: 1542.84,
  description: "fatally more over nauseate hm atop",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  numReceivers: 193.93,
  __template_queueName: "<value>",
  __template_awsAccountId: "<id>",
  __template_awsSecretKey: "<value>",
  __template_region: "<value>",
  __template_assumeRoleArn: "<value>",
  __template_assumeRoleExternalId: "<id>",
  __template_awsApiKey: "<value>",
};
```

### `operations.CreateInputSystemByPackInputSyslogUnion`

```typescript
const value: operations.CreateInputSystemByPackInputSyslogUnion = {
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
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  host: "violent-cantaloupe.com",
  udpPort: 2175.08,
  tcpPort: 9330.17,
  maxBufferSize: 637.98,
  ipWhitelistRegex: "<value>",
  timestampTimezone: "<value>",
  singleMsgUdpPackets: false,
  enableProxyHeader: false,
  keepFieldsList: [
    "<value 1>",
  ],
  octetCounting: true,
  inferFraming: false,
  strictlyInferOctetCounting: true,
  allowNonStandardAppName: true,
  maxActiveCxn: 7975.25,
  socketIdleTimeout: 6348.87,
  socketEndingMaxWait: 3230.3,
  socketMaxLifespan: 6380.31,
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
  udpSocketRxBufSize: 5733.13,
  enableLoadBalancing: true,
  description: "openly poorly closed for yet shoddy exalted object between",
  enableEnhancedProxyHeaderParsing: true,
  __template_host: "<value>",
  __template_udpPort: "<value>",
  __template_tcpPort: "<value>",
};
```

### `operations.CreateInputSystemByPackInputFile`

```typescript
const value: operations.CreateInputSystemByPackInputFile = {
  id: "<id>",
  type: "file",
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
  mode: "manual",
  interval: 6657.22,
  filenames: [
    "<value 1>",
    "<value 2>",
  ],
  filterArchivedFiles: true,
  tailOnly: false,
  idleTimeout: 2923.34,
  minAgeDur: "<value>",
  maxAgeDur: "<value>",
  checkFileModTime: true,
  forceText: true,
  hashLen: 8689.38,
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
  staleChannelFlushMs: 6357.04,
  description: "hungry search zowie mild bonnet slip",
  path: "/lost+found",
  depth: 194.54,
  suppressMissingPathErrors: false,
  deleteFiles: false,
  saltHash: false,
  includeUnidentifiableBinary: false,
};
```

### `operations.CreateInputSystemByPackInputTcp`

```typescript
const value: operations.CreateInputSystemByPackInputTcp = {
  id: "<id>",
  type: "tcp",
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
  host: "rewarding-help.biz",
  port: 7991.62,
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
  maxActiveCxn: 1647.09,
  socketIdleTimeout: 7943.58,
  socketEndingMaxWait: 1046.7,
  socketMaxLifespan: 405.54,
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
  staleChannelFlushMs: 8808.2,
  enableHeader: false,
  preprocess: {
    disabled: false,
    command: "<value>",
    args: [
      "<value 1>",
    ],
  },
  description: "breakable ambitious frizzy per",
  authToken: "<value>",
  authType: "manual",
  textSecret: "<value>",
  __template_host: "<value>",
  __template_port: "<value>",
};
```

### `operations.CreateInputSystemByPackInputAppscope`

```typescript
const value: operations.CreateInputSystemByPackInputAppscope = {
  id: "<id>",
  type: "appscope",
  disabled: true,
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
  ipWhitelistRegex: "<value>",
  maxActiveCxn: 4209.89,
  socketIdleTimeout: 1598.71,
  socketEndingMaxWait: 6514.16,
  socketMaxLifespan: 7224.57,
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
  staleChannelFlushMs: 3006.42,
  enableUnixPath: false,
  filter: {
    allow: [
      {
        procname: "<value>",
        arg: "<value>",
        config: "<value>",
      },
    ],
    transportURL: "https://pleased-duster.name",
  },
  persistence: {
    enable: true,
    timeWindow: "<value>",
    maxDataSize: "<value>",
    maxDataTime: "<value>",
    compress: "gzip",
    destPath: "<value>",
  },
  authType: "secret",
  description: "gerbil grumpy ick since",
  host: "ashamed-hutch.net",
  port: 6859.07,
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
  __template_host: "<value>",
  __template_port: "<value>",
};
```

### `operations.CreateInputSystemByPackInputWef`

```typescript
const value: operations.CreateInputSystemByPackInputWef = {
  id: "<id>",
  type: "wef",
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
  host: "stylish-reasoning.info",
  port: 276.44,
  authMethod: "clientCert",
  tls: {
    disabled: false,
    rejectUnauthorized: true,
    requestCert: false,
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    commonNameRegex: "<value>",
    minVersion: "TLSv1.1",
    maxVersion: "TLSv1.1",
    ocspCheck: false,
    keytab: "<value>",
    principal: "<value>",
    ocspCheckFailClose: false,
  },
  maxActiveReq: 132.51,
  maxRequestsPerSocket: 171416,
  enableProxyHeader: false,
  captureHeaders: false,
  keepAliveTimeout: 3223.39,
  enableHealthCheck: false,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  socketTimeout: 5677.34,
  caFingerprint: "<value>",
  keytab: "<value>",
  principal: "<value>",
  allowMachineIdMismatch: false,
  subscriptions: [
    {
      subscriptionName: "<value>",
      version: "<value>",
      contentFormat: "Raw",
      heartbeatInterval: 5598.41,
      batchTimeout: 187.57,
      readExistingEvents: false,
      sendBookmarks: true,
      compress: true,
      targets: [
        "<value 1>",
        "<value 2>",
      ],
      locale: "nl",
      querySelector: "simple",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      queries: [
        {
          path: "/home",
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
  description: "edible enthusiastically ouch",
  logFingerprintMismatch: true,
  __template_host: "<value>",
  __template_port: "<value>",
};
```

### `operations.CreateInputSystemByPackInputWinEventLogs`

```typescript
const value: operations.CreateInputSystemByPackInputWinEventLogs = {
  id: "<id>",
  type: "win_event_logs",
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
  logNames: [
    "<value 1>",
    "<value 2>",
  ],
  readMode: "oldest",
  eventFormat: "xml",
  disableNativeModule: true,
  interval: 3034.17,
  batchSize: 4251.5,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  maxEventBytes: 3209.48,
  description: "going cricket sham lest physically beside",
  disableJsonRendering: false,
  disableXmlRendering: true,
};
```

### `operations.CreateInputSystemByPackInputRawUdp`

```typescript
const value: operations.CreateInputSystemByPackInputRawUdp = {
  id: "<id>",
  type: "raw_udp",
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
  host: "whopping-step.name",
  port: 6211.85,
  maxBufferSize: 8656.9,
  ipWhitelistRegex: "<value>",
  singleMsgUdpPackets: false,
  ingestRawBytes: false,
  udpSocketRxBufSize: 6570.19,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description:
    "babushka prime properly acidic starboard before questionable as afterwards",
  __template_host: "<value>",
  __template_port: "<value>",
};
```

### `operations.CreateInputSystemByPackInputJournalFiles`

```typescript
const value: operations.CreateInputSystemByPackInputJournalFiles = {
  id: "<id>",
  type: "journal_files",
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
  path: "/proc",
  interval: 57.97,
  journals: [],
  rules: [
    {
      filter: "<value>",
      description: "likewise near wherever below yesterday",
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
  description: "whereas anti hoot",
};
```

### `operations.CreateInputSystemByPackInputWiz`

```typescript
const value: operations.CreateInputSystemByPackInputWiz = {
  id: "<id>",
  type: "wiz",
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
    maxBufferSize: 357.77,
    commitFrequency: 1717.96,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/etc/namedb",
    compress: "none",
    pqControls: {},
  },
  endpoint: "<value>",
  authUrl: "https://sophisticated-in-joke.com",
  authAudienceOverride: "<value>",
  clientId: "<id>",
  contentConfig: [],
  requestTimeout: 3987.45,
  keepAliveTime: 8957.54,
  maxMissedKeepAlives: 5223.8,
  ttl: "<value>",
  ignoreGroupJobsLimit: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  retryRules: {
    type: "<value>",
    interval: 376.03,
    limit: 6996.29,
    multiplier: 5006.8,
    codes: [
      2139.95,
      9559.24,
      6726.47,
    ],
    enableHeader: false,
    retryConnectTimeout: true,
    retryConnectReset: false,
  },
  authType: "manual",
  description: "until so opposite ha why intermix",
  clientSecret: "<value>",
  textSecret: "<value>",
  __template_endpoint: "<value>",
  __template_authUrl: "https://unrealistic-conversation.com",
  __template_clientId: "<id>",
};
```

### `operations.CreateInputSystemByPackInputWizWebhook`

```typescript
const value: operations.CreateInputSystemByPackInputWizWebhook = {
  id: "<id>",
  type: "wiz_webhook",
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
  host: "golden-extension.org",
  port: 5489.78,
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
  maxActiveReq: 1582.62,
  maxRequestsPerSocket: 846542,
  enableProxyHeader: false,
  captureHeaders: true,
  activityLogSampleRate: 42.96,
  requestTimeout: 9992.95,
  socketTimeout: 4940.53,
  keepAliveTimeout: 1813.94,
  enableHealthCheck: true,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  breakerRulesets: [
    "<value 1>",
  ],
  staleChannelFlushMs: 4387.51,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  allowedPaths: [
    "<value 1>",
  ],
  allowedMethods: [
    "<value 1>",
    "<value 2>",
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
  description: "vainly innocent um basket",
  __template_host: "<value>",
  __template_port: "<value>",
};
```

### `operations.CreateInputSystemByPackInputNetflow`

```typescript
const value: operations.CreateInputSystemByPackInputNetflow = {
  id: "<id>",
  type: "netflow",
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
  host: "cloudy-gradient.net",
  port: 3420.26,
  enablePassThrough: false,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  udpSocketRxBufSize: 7453.32,
  templateCacheMinutes: 1568.09,
  v5Enabled: true,
  v9Enabled: false,
  ipfixEnabled: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "enrich yuck electrify boo",
  __template_host: "<value>",
  __template_port: "<value>",
};
```

### `operations.CreateInputSystemByPackInputSecurityLake`

```typescript
const value: operations.CreateInputSystemByPackInputSecurityLake = {
  id: "<id>",
  type: "security_lake",
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
  reuseConnections: false,
  rejectUnauthorized: true,
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
  ],
  staleChannelFlushMs: 1030.15,
  maxMessages: 827.4,
  visibilityTimeout: 5284.14,
  numReceivers: 3549.77,
  socketTimeout: 1200.64,
  skipOnError: true,
  includeSqsMetadata: true,
  enableAssumeRole: true,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 9091.26,
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
  parquetChunkSizeMB: 872.08,
  parquetChunkDownloadTimeout: 8542.83,
  checkpointing: {
    enabled: true,
    retries: 263.57,
  },
  pollTimeout: 5606.49,
  encoding: "<value>",
  description: "airman yowza often once misfire jealously refine ah",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  tagAfterProcessing: "false",
  processedTagKey: "<value>",
  processedTagValue: "<value>",
  __template_queueName: "<value>",
  __template_awsAccountId: "<id>",
  __template_awsSecretKey: "<value>",
  __template_region: "<value>",
  __template_assumeRoleArn: "<value>",
  __template_assumeRoleExternalId: "<id>",
  __template_awsApiKey: "<value>",
};
```

### `operations.CreateInputSystemByPackInputZscalerHec`

```typescript
const value: operations.CreateInputSystemByPackInputZscalerHec = {
  id: "<id>",
  type: "zscaler_hec",
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
  host: "different-cope.info",
  port: 2989.75,
  authTokens: [
    {
      authType: "secret",
      tokenSecret: "<value>",
      token: "<value>",
      enabled: false,
      description: "taro upon institutionalize deflate boring",
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
  maxActiveReq: 9090.8,
  maxRequestsPerSocket: 474662,
  enableProxyHeader: false,
  captureHeaders: false,
  activityLogSampleRate: 117.58,
  requestTimeout: 7287.03,
  socketTimeout: 1708.36,
  keepAliveTimeout: 9785.44,
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
  description: "mmm ape long-term aw gosh eek toward soon",
  __template_host: "<value>",
  __template_port: "<value>",
  __template_hecAPI: "<value>",
};
```

### `operations.CreateInputSystemByPackInputCloudflareHec`

```typescript
const value: operations.CreateInputSystemByPackInputCloudflareHec = {
  id: "<id>",
  type: "cloudflare_hec",
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
  host: "corrupt-expense.biz",
  port: 2506.77,
  authTokens: [
    {
      authType: "secret",
      tokenSecret: "<value>",
      token: "<value>",
      enabled: false,
      description:
        "oh grouper next that evil nutritious every marketplace ceramics patiently",
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
  maxActiveReq: 455.79,
  maxRequestsPerSocket: 731455,
  enableProxyHeader: true,
  captureHeaders: false,
  activityLogSampleRate: 4408.73,
  requestTimeout: 6428.07,
  socketTimeout: 8658.48,
  keepAliveTimeout: 5494.55,
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
  staleChannelFlushMs: 3375.11,
  accessControlAllowOrigin: [
    "<value 1>",
  ],
  accessControlAllowHeaders: [
    "<value 1>",
  ],
  emitTokenMetrics: false,
  description: "silt highly plain yowza riser",
  __template_host: "<value>",
  __template_port: "<value>",
};
```

