# CreateInputRequest

Input object


## Supported Types

### `operations.CreateInputInputCollection`

```typescript
const value: operations.CreateInputInputCollection = {
  id: "<id>",
  type: "collection",
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
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  staleChannelFlushMs: 6953.4,
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

### `operations.CreateInputInputKafka`

```typescript
const value: operations.CreateInputInputKafka = {
  id: "<id>",
  type: "kafka",
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
  brokers: [
    "<value 1>",
    "<value 2>",
  ],
  topics: [
    "<value 1>",
    "<value 2>",
  ],
  groupId: "<id>",
  fromBeginning: false,
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
  connectionTimeout: 9692.08,
  requestTimeout: 5620.09,
  maxRetries: 4287.72,
  maxBackOff: 2609.07,
  initialBackoff: 2554.03,
  backoffRate: 7156.92,
  authenticationTimeout: 6017.26,
  reauthenticationThreshold: 3293.85,
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
  sessionTimeout: 5106.76,
  rebalanceTimeout: 9099.46,
  heartbeatInterval: 1185.83,
  autoCommitInterval: 7260.25,
  autoCommitThreshold: 8295.72,
  maxBytesPerPartition: 8684.58,
  maxBytes: 2507.28,
  maxSocketErrors: 8317.76,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description:
    "suffocate within finally gosh who meanwhile especially paralyse owlishly",
};
```

### `operations.CreateInputInputMsk`

```typescript
const value: operations.CreateInputInputMsk = {
  id: "<id>",
  type: "msk",
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
  brokers: [],
  topics: [],
  groupId: "<id>",
  fromBeginning: true,
  sessionTimeout: 8255.3,
  rebalanceTimeout: 756.43,
  heartbeatInterval: 943.01,
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
  connectionTimeout: 8992.69,
  requestTimeout: 1847.49,
  maxRetries: 9294.19,
  maxBackOff: 6182.09,
  initialBackoff: 6504.84,
  backoffRate: 2636.73,
  authenticationTimeout: 7525.57,
  reauthenticationThreshold: 7608.54,
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
  durationSeconds: 9937.61,
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
  autoCommitInterval: 9745.78,
  autoCommitThreshold: 514.67,
  maxBytesPerPartition: 6170.55,
  maxBytes: 2385.56,
  maxSocketErrors: 4529.46,
  description: "translation despite digit",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  __template_awsSecretKey: "<value>",
  __template_region: "<value>",
  __template_assumeRoleArn: "<value>",
  __template_assumeRoleExternalId: "<id>",
  __template_awsApiKey: "<value>",
};
```

### `operations.CreateInputInputHttp`

```typescript
const value: operations.CreateInputInputHttp = {
  id: "<id>",
  type: "http",
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
  host: "weary-in-joke.net",
  port: 3517.37,
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
  maxActiveReq: 2895.17,
  maxRequestsPerSocket: 505416,
  enableProxyHeader: false,
  captureHeaders: false,
  activityLogSampleRate: 6809.46,
  requestTimeout: 4208.52,
  socketTimeout: 8078.43,
  keepAliveTimeout: 3215.47,
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
      description: "instead worth trek drain eek below",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
    },
  ],
  description: "fooey as whether interestingly grizzled miscalculate glow sway",
  __template_host: "<value>",
  __template_port: "<value>",
  __template_splunkHecAPI: "<value>",
};
```

### `operations.CreateInputInputSplunk`

```typescript
const value: operations.CreateInputInputSplunk = {
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
  host: "prestigious-issue.net",
  port: 6281.3,
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
  maxActiveCxn: 3581.09,
  socketIdleTimeout: 826.1,
  socketEndingMaxWait: 7663.3,
  socketMaxLifespan: 6658.64,
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
  staleChannelFlushMs: 8028.37,
  authTokens: [
    {
      token: "<value>",
      description: "jagged about famously softly since against unique",
    },
  ],
  maxS2Sversion: "v3",
  description: "who lawmaker why indeed boldly",
  useFwdTimezone: true,
  dropControlFields: true,
  extractMetrics: false,
  compress: "auto",
  __template_host: "<value>",
  __template_port: "<value>",
};
```

### `operations.CreateInputInputSplunkSearch`

```typescript
const value: operations.CreateInputInputSplunkSearch = {
  id: "<id>",
  type: "splunk_search",
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
  requestTimeout: 4738.05,
  useRoundRobinDns: true,
  rejectUnauthorized: true,
  encoding: "<value>",
  keepAliveTime: 1715.88,
  jobTimeout: "<value>",
  maxMissedKeepAlives: 1857.84,
  ttl: "<value>",
  ignoreGroupJobsLimit: true,
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
  ],
  staleChannelFlushMs: 3880.48,
  authType: "textSecret",
  description: "consequently from flashy deficient",
  username: "Emilio_Stokes-Feeney21",
  password: "s2oTjG_ZcurGmVh",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
};
```

### `operations.CreateInputInputSplunkHec`

```typescript
const value: operations.CreateInputInputSplunkHec = {
  id: "<id>",
  type: "splunk_hec",
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
  host: "bulky-independence.biz",
  port: 8564.1,
  authTokens: [
    {
      authType: "secret",
      tokenSecret: "<value>",
      token: "<value>",
      enabled: true,
      description: "cheerful selfish unfortunately",
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
  maxActiveReq: 2466.66,
  maxRequestsPerSocket: 114690,
  enableProxyHeader: true,
  captureHeaders: true,
  activityLogSampleRate: 9768.52,
  requestTimeout: 8684.48,
  socketTimeout: 296.55,
  keepAliveTimeout: 1476.93,
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
    "<value 3>",
  ],
  splunkHecAcks: false,
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
  ],
  staleChannelFlushMs: 6607.52,
  useFwdTimezone: false,
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
    "<value 3>",
  ],
  emitTokenMetrics: false,
  description: "longingly famously bonnet tectonics breastplate apropos keenly",
  __template_host: "<value>",
  __template_port: "<value>",
  __template_splunkHecAPI: "<value>",
};
```

### `operations.CreateInputInputAzureBlob`

```typescript
const value: operations.CreateInputInputAzureBlob = {
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
  visibilityTimeout: 4835.86,
  numReceivers: 3117.53,
  maxMessages: 2553.29,
  servicePeriodSecs: 1034.08,
  skipOnError: true,
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
  staleChannelFlushMs: 5196.9,
  parquetChunkSizeMB: 5454.03,
  parquetChunkDownloadTimeout: 3546.42,
  authType: "clientSecret",
  description: "knavishly considering oddball blissfully gust provision",
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

### `operations.CreateInputInputElastic`

```typescript
const value: operations.CreateInputInputElastic = {
  id: "<id>",
  type: "elastic",
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
  host: "upright-descendant.biz",
  port: 1994.2,
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
  maxActiveReq: 9761.4,
  maxRequestsPerSocket: 105501,
  enableProxyHeader: true,
  captureHeaders: true,
  activityLogSampleRate: 6306.51,
  requestTimeout: 2851.27,
  socketTimeout: 2533.58,
  keepAliveTimeout: 1385.04,
  enableHealthCheck: true,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  elasticAPI: "<value>",
  authType: "none",
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
    enabled: true,
    authType: "secret",
    username: "Emelie_Boyer",
    password: "HAM85xwjsD77_XY",
    credentialsSecret: "<value>",
    url: "https://gripping-hundred.name/",
    rejectUnauthorized: true,
    removeHeaders: [
      "<value 1>",
    ],
    timeoutSec: 4349.44,
    __template_url: "https://elderly-platypus.biz/",
  },
  description:
    "honesty angle supposing pfft victoriously unfortunate phooey forenenst",
  username: "Pearl_Lakin",
  password: "EDUWDG03tvA_GmE",
  credentialsSecret: "<value>",
  authTokens: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  customAPIVersion: "<value>",
  __template_host: "<value>",
  __template_port: "<value>",
};
```

### `operations.CreateInputInputConfluentCloud`

```typescript
const value: operations.CreateInputInputConfluentCloud = {
  id: "<id>",
  type: "confluent_cloud",
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
    minVersion: "TLSv1",
    maxVersion: "TLSv1.1",
  },
  topics: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
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
  connectionTimeout: 7987.69,
  requestTimeout: 3066.87,
  maxRetries: 2390.74,
  maxBackOff: 2601.26,
  initialBackoff: 9247.11,
  backoffRate: 219.13,
  authenticationTimeout: 9757.52,
  reauthenticationThreshold: 1450.19,
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
  sessionTimeout: 913.27,
  rebalanceTimeout: 5941.13,
  heartbeatInterval: 2991.92,
  autoCommitInterval: 7957.68,
  autoCommitThreshold: 5397.11,
  maxBytesPerPartition: 6515.87,
  maxBytes: 9301,
  maxSocketErrors: 8624.5,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description:
    "jagged legislature briefly than whose noteworthy outrun concrete",
};
```

### `operations.CreateInputInputGrafanaUnion`

```typescript
const value: operations.CreateInputInputGrafanaUnion = {
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
  host: "adolescent-loaf.name",
  port: 481.29,
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
  maxActiveReq: 8932.11,
  maxRequestsPerSocket: 798378,
  enableProxyHeader: true,
  captureHeaders: true,
  activityLogSampleRate: 2528.84,
  requestTimeout: 5187.22,
  socketTimeout: 9155.07,
  keepAliveTimeout: 9394.19,
  enableHealthCheck: false,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  prometheusAPI: "<value>",
  lokiAPI: "<value>",
  prometheusAuth: {
    authType: "token",
    username: "Jocelyn66",
    password: "2LPMCGbi0B6WWa8",
    token: "<value>",
    credentialsSecret: "<value>",
    textSecret: "<value>",
  },
  lokiAuth: {
    authType: "textSecret",
    username: "Odell_Rosenbaum68",
    password: "1jlFjr1rDrE9Bo1",
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
  description: "private scoff around seemingly even bowed",
  __template_host: "<value>",
  __template_port: "<value>",
};
```

### `operations.CreateInputInputLoki`

```typescript
const value: operations.CreateInputInputLoki = {
  id: "<id>",
  type: "loki",
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
  host: "experienced-overcoat.info",
  port: 8983.16,
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
  maxActiveReq: 9908.18,
  maxRequestsPerSocket: 187926,
  enableProxyHeader: true,
  captureHeaders: true,
  activityLogSampleRate: 1276.29,
  requestTimeout: 9876.12,
  socketTimeout: 1017.7,
  keepAliveTimeout: 2146.08,
  enableHealthCheck: false,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  lokiAPI: "<value>",
  authType: "basic",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "yahoo less fowl atop",
  username: "Liam.Cummerata",
  password: "kRFxPjJqMY1REPs",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  __template_host: "<value>",
  __template_port: "<value>",
};
```

### `operations.CreateInputInputPrometheusRw`

```typescript
const value: operations.CreateInputInputPrometheusRw = {
  id: "<id>",
  type: "prometheus_rw",
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
  host: "bossy-fraudster.info",
  port: 3855.59,
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
  maxActiveReq: 9452.46,
  maxRequestsPerSocket: 443325,
  enableProxyHeader: false,
  captureHeaders: false,
  activityLogSampleRate: 9786.83,
  requestTimeout: 5226.27,
  socketTimeout: 4774.19,
  keepAliveTimeout: 9902.91,
  enableHealthCheck: false,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  prometheusAPI: "<value>",
  authType: "textSecret",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "interviewer for webbed pulp drat finally ick gah",
  username: "Allen.Dicki69",
  password: "6ps8oHvyofD5TkH",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  __template_host: "<value>",
  __template_port: "<value>",
  __template_prometheusAPI: "<value>",
};
```

### `operations.CreateInputInputPrometheus`

```typescript
const value: operations.CreateInputInputPrometheus = {
  id: "<id>",
  type: "prometheus",
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
  dimensionList: [
    "<value 1>",
  ],
  discoveryType: "ec2",
  interval: 1108.53,
  logLevel: "error",
  rejectUnauthorized: false,
  timeout: 7553.64,
  keepAliveTime: 1523.81,
  jobTimeout: "<value>",
  maxMissedKeepAlives: 2298.79,
  ttl: "<value>",
  ignoreGroupJobsLimit: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  authType: "manual",
  description: "perfectly trustworthy gloom ajar sting",
  targetList: [
    "<value 1>",
    "<value 2>",
  ],
  recordType: "A",
  scrapePort: 5792.03,
  nameList: [
    "<value 1>",
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
  enableAssumeRole: true,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 7507.64,
  username: "Iva.Lynch26",
  password: "fj7pulXo01FYWct",
  credentialsSecret: "<value>",
  __template_logLevel: "<value>",
  __template_awsApiKey: "<value>",
  __template_awsSecretKey: "<value>",
  __template_region: "<value>",
  __template_assumeRoleArn: "<value>",
  __template_assumeRoleExternalId: "<id>",
};
```

### `operations.CreateInputInputEdgePrometheus`

```typescript
const value: operations.CreateInputInputEdgePrometheus = {
  id: "<id>",
  type: "edge_prometheus",
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
  dimensionList: [
    "<value 1>",
  ],
  discoveryType: "k8s-node",
  interval: 7432.46,
  timeout: 8220.38,
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
  authType: "kubernetes",
  description: "sedately which rule boggle plus nor upright why as",
  targets: [
    {
      protocol: "https",
      host: "concerned-pliers.net",
      port: 6188.91,
      path: "/selinux",
    },
  ],
  recordType: "AAAA",
  scrapePort: 9093.03,
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
  signatureVersion: "v4",
  reuseConnections: true,
  rejectUnauthorized: true,
  enableAssumeRole: false,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 2194.37,
  scrapeProtocolExpr: "<value>",
  scrapePortExpr: "<value>",
  scrapePathExpr: "<value>",
  podFilter: [
    {
      filter: "<value>",
      description:
        "who scoop horse promise shampoo injunction rosin swiftly brr ack",
    },
  ],
  username: "Kamron_Dibbert",
  password: "TM6jPr78ZWM5oF8",
  credentialsSecret: "<value>",
  __template_awsApiKey: "<value>",
  __template_awsSecretKey: "<value>",
  __template_region: "<value>",
  __template_assumeRoleArn: "<value>",
  __template_assumeRoleExternalId: "<id>",
};
```

### `operations.CreateInputInputOffice365Mgmt`

```typescript
const value: operations.CreateInputInputOffice365Mgmt = {
  id: "<id>",
  type: "office365_mgmt",
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
  planType: "enterprise_gcc",
  tenantId: "<id>",
  appId: "<id>",
  timeout: 6352.01,
  keepAliveTime: 6035.08,
  jobTimeout: "<value>",
  maxMissedKeepAlives: 3382.81,
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
      description: "immediately once nab whether",
      interval: 8097.17,
      logLevel: "info",
      enabled: false,
    },
  ],
  ingestionLag: 7746.02,
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
  authType: "manual",
  description: "information wire supposing impressive yuck address which",
  clientSecret: "<value>",
  textSecret: "<value>",
  __template_tenantId: "<id>",
  __template_appId: "<id>",
  __template_publisherIdentifier: "<value>",
  __template_clientSecret: "<value>",
};
```

### `operations.CreateInputInputOffice365Service`

```typescript
const value: operations.CreateInputInputOffice365Service = {
  id: "<id>",
  type: "office365_service",
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
  planType: "enterprise_gcc",
  tenantId: "<id>",
  appId: "<id>",
  timeout: 4696,
  keepAliveTime: 6627.43,
  jobTimeout: "<value>",
  maxMissedKeepAlives: 2386.97,
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
        "hm stealthily because slump mysteriously yahoo as until however drowse",
      interval: 2776.83,
      logLevel: "info",
      enabled: true,
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
  authType: "manual",
  description: "foolishly suffice yuck our aware thorny",
  clientSecret: "<value>",
  textSecret: "<value>",
  __template_tenantId: "<id>",
  __template_appId: "<id>",
  __template_clientSecret: "<value>",
};
```

### `operations.CreateInputInputOffice365MsgTrace`

```typescript
const value: operations.CreateInputInputOffice365MsgTrace = {
  id: "<id>",
  type: "office365_msg_trace",
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
  url: "https://married-wafer.name",
  interval: 2208.14,
  startDate: "<value>",
  endDate: "<value>",
  timeout: 7476.2,
  disableTimeFilter: false,
  authType: "oauth",
  rescheduleDroppedTasks: false,
  maxTaskReschedule: 8325.69,
  logLevel: "silly",
  jobTimeout: "<value>",
  keepAliveTime: 7705.66,
  maxMissedKeepAlives: 6063.77,
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
  description: "hmph digestive probable",
  username: "Sophia.Johnston86",
  password: "xHT77R9c6nCz3FV",
  credentialsSecret: "<value>",
  clientSecret: "<value>",
  tenantId: "<id>",
  clientId: "<id>",
  resource: "<value>",
  planType: "dod",
  textSecret: "<value>",
  certOptions: {
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
  },
  __template_url: "https://inferior-step.net",
  __template_tenantId: "<id>",
  __template_clientId: "<id>",
  __template_resource: "<value>",
};
```

### `operations.CreateInputInputEventhub`

```typescript
const value: operations.CreateInputInputEventhub = {
  id: "<id>",
  type: "eventhub",
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
  brokers: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  topics: [],
  groupId: "<id>",
  fromBeginning: false,
  connectionTimeout: 1314.59,
  requestTimeout: 3229.77,
  maxRetries: 9480.17,
  maxBackOff: 9786.6,
  initialBackoff: 992.9,
  backoffRate: 2381.84,
  authenticationTimeout: 59.92,
  reauthenticationThreshold: 3173.39,
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
  sessionTimeout: 8485.45,
  rebalanceTimeout: 545.14,
  heartbeatInterval: 4053.62,
  autoCommitInterval: 1065.88,
  autoCommitThreshold: 8588.7,
  maxBytesPerPartition: 3648.89,
  maxBytes: 2631.85,
  maxSocketErrors: 9740.19,
  minimizeDuplicates: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "forenenst drat obesity sweatshop mmm",
};
```

### `operations.CreateInputInputExec`

```typescript
const value: operations.CreateInputInputExec = {
  id: "<id>",
  type: "exec",
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
  command: "<value>",
  retries: 1000.19,
  scheduleType: "interval",
  breakerRulesets: [
    "<value 1>",
  ],
  staleChannelFlushMs: 4265.46,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description:
    "separately valuable intently lovingly knowledgeably furthermore inconsequential appropriate merrily fellow",
  interval: 5838.56,
  cronSchedule: "<value>",
};
```

### `operations.CreateInputInputFirehose`

```typescript
const value: operations.CreateInputInputFirehose = {
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
  host: "illustrious-taro.name",
  port: 5846.15,
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
  maxActiveReq: 6256.07,
  maxRequestsPerSocket: 19566,
  enableProxyHeader: true,
  captureHeaders: false,
  activityLogSampleRate: 7484.75,
  requestTimeout: 1925.49,
  socketTimeout: 4971.34,
  keepAliveTimeout: 538.97,
  enableHealthCheck: false,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "regular towards after experienced",
  __template_host: "<value>",
  __template_port: "<value>",
};
```

### `operations.CreateInputInputGooglePubsub`

```typescript
const value: operations.CreateInputInputGooglePubsub = {
  id: "<id>",
  type: "google_pubsub",
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
  topicName: "<value>",
  subscriptionName: "<value>",
  monitorSubscription: false,
  createTopic: false,
  createSubscription: true,
  region: "<value>",
  googleAuthMethod: "auto",
  serviceAccountCredentials: "<value>",
  secret: "<value>",
  maxBacklog: 1522.38,
  concurrency: 4546.12,
  requestTimeout: 9024.14,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "healthily whether accelerator redevelop yet",
  orderedDelivery: false,
  __template_topicName: "<value>",
  __template_subscriptionName: "<value>",
  __template_region: "<value>",
};
```

### `operations.CreateInputInputCribl`

```typescript
const value: operations.CreateInputInputCribl = {
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
  description: "dally parade yet after ameliorate weakly",
};
```

### `operations.CreateInputInputCriblTcp`

```typescript
const value: operations.CreateInputInputCriblTcp = {
  id: "<id>",
  type: "cribl_tcp",
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
  host: "big-daddy.net",
  port: 2066.41,
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
  maxActiveCxn: 4431.24,
  socketIdleTimeout: 5274.64,
  socketEndingMaxWait: 8668.25,
  socketMaxLifespan: 873.59,
  enableProxyHeader: true,
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
  description: "cheerfully however atop only tackle gadzooks",
  __template_host: "<value>",
  __template_port: "<value>",
};
```

### `operations.CreateInputInputCriblHttp`

```typescript
const value: operations.CreateInputInputCriblHttp = {
  id: "<id>",
  type: "cribl_http",
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
  host: "angelic-ghost.info",
  port: 1399.4,
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
  maxActiveReq: 9564.82,
  maxRequestsPerSocket: 1619,
  enableProxyHeader: true,
  captureHeaders: false,
  activityLogSampleRate: 2923.55,
  requestTimeout: 4049.38,
  socketTimeout: 260.08,
  keepAliveTimeout: 2738.68,
  enableHealthCheck: false,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "drat tame bah as westernise other though wherever yet whenever",
  __template_host: "<value>",
  __template_port: "<value>",
};
```

### `operations.CreateInputInputCriblLakeHttp`

```typescript
const value: operations.CreateInputInputCriblLakeHttp = {
  id: "<id>",
  type: "cribl_lake_http",
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
  host: "bruised-goodwill.net",
  port: 1682.79,
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
  maxActiveReq: 9281.49,
  maxRequestsPerSocket: 491416,
  enableProxyHeader: true,
  captureHeaders: true,
  activityLogSampleRate: 6865.53,
  requestTimeout: 4150.2,
  socketTimeout: 3170.13,
  keepAliveTimeout: 6627.26,
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
      description: "traduce anxiously trivial nougat buttery waist hence",
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
        enabled: false,
        defaultDataset: "<value>",
      },
    },
  ],
  description: "anti knowledgeably of inasmuch blah unlined judgementally",
  __template_host: "<value>",
  __template_port: "<value>",
  __template_splunkHecAPI: "<value>",
};
```

### `operations.CreateInputInputTcpjson`

```typescript
const value: operations.CreateInputInputTcpjson = {
  id: "<id>",
  type: "tcpjson",
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
  host: "impeccable-switch.name",
  port: 1090.61,
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
  maxActiveCxn: 2929.16,
  socketIdleTimeout: 8996.97,
  socketEndingMaxWait: 9039.83,
  socketMaxLifespan: 6172.19,
  enableProxyHeader: true,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  enableLoadBalancing: false,
  authType: "secret",
  description: "whale silky yin over pluck zowie um colorfully sans silent",
  authToken: "<value>",
  textSecret: "<value>",
  __template_host: "<value>",
  __template_port: "<value>",
};
```

### `operations.CreateInputInputSystemMetrics`

```typescript
const value: operations.CreateInputInputSystemMetrics = {
  id: "<id>",
  type: "system_metrics",
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
  interval: 7388.27,
  host: {
    mode: "basic",
    custom: {
      system: {
        mode: "custom",
        processes: true,
      },
      cpu: {
        mode: "custom",
        perCpu: false,
        detail: false,
        time: true,
      },
      memory: {
        mode: "basic",
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
        mode: "basic",
        detail: false,
        inodes: true,
        devices: [
          "<value 1>",
          "<value 2>",
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
        includeChildren: true,
      },
    ],
  },
  container: {
    mode: "basic",
    dockerSocket: [
      "<value 1>",
      "<value 2>",
    ],
    dockerTimeout: 2917.13,
    filters: [
      {
        expr: "<value>",
      },
    ],
    allContainers: false,
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
    enable: false,
    timeWindow: "<value>",
    maxDataSize: "<value>",
    maxDataTime: "<value>",
    compress: "gzip",
    destPath: "<value>",
  },
  description: "climb sweatshop surge",
};
```

### `operations.CreateInputInputSystemState`

```typescript
const value: operations.CreateInputInputSystemState = {
  id: "<id>",
  type: "system_state",
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
  interval: 5601.54,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  collectors: {
    hostsfile: {
      enable: false,
    },
    interfaces: {
      enable: false,
    },
    disk: {
      enable: true,
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
    enable: false,
    timeWindow: "<value>",
    maxDataSize: "<value>",
    maxDataTime: "<value>",
    compress: "none",
    destPath: "<value>",
  },
  disableNativeModule: true,
  disableNativeLastLogModule: true,
  description: "materialise citizen doting wetly inasmuch into",
};
```

### `operations.CreateInputInputKubeMetrics`

```typescript
const value: operations.CreateInputInputKubeMetrics = {
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
  interval: 1901.33,
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
    compress: "none",
    destPath: "<value>",
  },
  description: "passport impact offensively",
};
```

### `operations.CreateInputInputKubeLogs`

```typescript
const value: operations.CreateInputInputKubeLogs = {
  id: "<id>",
  type: "kube_logs",
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
  interval: 8324.91,
  rules: [
    {
      filter: "<value>",
      description:
        "whoa before readily criminal drat quirkily alongside mortar gaseous",
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
  staleChannelFlushMs: 6279.08,
  enableLoadBalancing: true,
  description: "whether for that happy the serene pants whereas",
};
```

### `operations.CreateInputInputKubeEvents`

```typescript
const value: operations.CreateInputInputKubeEvents = {
  id: "<id>",
  type: "kube_events",
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
  description: "however svelte unlike gah slide unblinking",
};
```

### `operations.CreateInputInputWindowsMetrics`

```typescript
const value: operations.CreateInputInputWindowsMetrics = {
  id: "<id>",
  type: "windows_metrics",
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
  interval: 3556.41,
  host: {
    mode: "disabled",
    custom: {
      system: {
        mode: "disabled",
        detail: true,
      },
      cpu: {
        mode: "basic",
        perCpu: true,
        detail: true,
        time: false,
      },
      memory: {
        mode: "all",
        detail: true,
      },
      network: {
        mode: "all",
        detail: false,
        protocols: true,
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
    compress: "gzip",
    destPath: "<value>",
  },
  disableNativeModule: true,
  description: "almost wring psst angle ugh evenly by hmph",
};
```

### `operations.CreateInputInputCrowdstrike`

```typescript
const value: operations.CreateInputInputCrowdstrike = {
  id: "<id>",
  type: "crowdstrike",
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
  reuseConnections: false,
  rejectUnauthorized: false,
  breakerRulesets: [
    "<value 1>",
  ],
  staleChannelFlushMs: 6253.05,
  maxMessages: 782.98,
  visibilityTimeout: 3168.62,
  numReceivers: 6250.01,
  socketTimeout: 4592.73,
  skipOnError: false,
  includeSqsMetadata: false,
  enableAssumeRole: false,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 5715.25,
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
  pollTimeout: 4535.96,
  encoding: "<value>",
  description: "nervously separately finally peninsula",
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

### `operations.CreateInputInputDatadogAgent`

```typescript
const value: operations.CreateInputInputDatadogAgent = {
  id: "<id>",
  type: "datadog_agent",
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
  host: "admired-printer.com",
  port: 9489.96,
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
  maxActiveReq: 7207.15,
  maxRequestsPerSocket: 407421,
  enableProxyHeader: false,
  captureHeaders: false,
  activityLogSampleRate: 1033.92,
  requestTimeout: 7543.73,
  socketTimeout: 1512.2,
  keepAliveTimeout: 5374.66,
  enableHealthCheck: true,
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
    rejectUnauthorized: true,
  },
  description: "fathom unimpressively guilt cripple harvest",
  __template_host: "<value>",
  __template_port: "<value>",
};
```

### `operations.CreateInputInputDatagen`

```typescript
const value: operations.CreateInputInputDatagen = {
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
  samples: [],
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description:
    "guidance or multicolored torn finally unlike incomplete bah neck yet",
};
```

### `operations.CreateInputInputHttpRaw`

```typescript
const value: operations.CreateInputInputHttpRaw = {
  id: "<id>",
  type: "http_raw",
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
  host: "weary-goat.com",
  port: 5913.5,
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
  maxActiveReq: 5455.24,
  maxRequestsPerSocket: 460147,
  enableProxyHeader: false,
  captureHeaders: false,
  activityLogSampleRate: 5267.73,
  requestTimeout: 2225.5,
  socketTimeout: 2009.31,
  keepAliveTimeout: 4161.55,
  enableHealthCheck: false,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  staleChannelFlushMs: 7593.24,
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
  description: "yippee sternly everlasting within",
  __template_host: "<value>",
  __template_port: "<value>",
};
```

### `operations.CreateInputInputKinesis`

```typescript
const value: operations.CreateInputInputKinesis = {
  id: "<id>",
  type: "kinesis",
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
  streamName: "<value>",
  serviceInterval: 4582.73,
  shardExpr: "<value>",
  shardIteratorType: "TRIM_HORIZON",
  payloadFormat: "cloudwatch",
  getRecordsLimit: 4881.25,
  getRecordsLimitTotal: 569.19,
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
  durationSeconds: 1661.49,
  verifyKPLCheckSums: true,
  avoidDuplicates: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "devastation oof opposite",
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

### `operations.CreateInputInputCriblmetrics`

```typescript
const value: operations.CreateInputInputCriblmetrics = {
  id: "<id>",
  type: "criblmetrics",
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
  prefix: "<value>",
  fullFidelity: true,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "because barring apropos whose navigate exhaust knife",
};
```

### `operations.CreateInputInputMetrics`

```typescript
const value: operations.CreateInputInputMetrics = {
  id: "<id>",
  type: "metrics",
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
  host: "annual-soybean.info",
  udpPort: 2736.87,
  tcpPort: 4134.94,
  maxBufferSize: 5180.4,
  ipWhitelistRegex: "<value>",
  enableProxyHeader: false,
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
  udpSocketRxBufSize: 7489.41,
  description: "low geez cop-out",
  __template_host: "<value>",
  __template_udpPort: "<value>",
  __template_tcpPort: "<value>",
};
```

### `operations.CreateInputInputS3`

```typescript
const value: operations.CreateInputInputS3 = {
  id: "<id>",
  type: "s3",
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
  signatureVersion: "v4",
  reuseConnections: true,
  rejectUnauthorized: true,
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
  ],
  staleChannelFlushMs: 782,
  maxMessages: 7517.36,
  visibilityTimeout: 7333.95,
  numReceivers: 2541.51,
  socketTimeout: 1712.77,
  skipOnError: true,
  includeSqsMetadata: false,
  enableAssumeRole: true,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 6091.84,
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
  parquetChunkSizeMB: 6041.72,
  parquetChunkDownloadTimeout: 7647.31,
  checkpointing: {
    enabled: true,
    retries: 263.57,
  },
  pollTimeout: 3362.08,
  encoding: "<value>",
  tagAfterProcessing: true,
  description: "circa sideboard proofread triumphantly marvelous",
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

### `operations.CreateInputInputS3Inventory`

```typescript
const value: operations.CreateInputInputS3Inventory = {
  id: "<id>",
  type: "s3_inventory",
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
  signatureVersion: "v2",
  reuseConnections: false,
  rejectUnauthorized: true,
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  staleChannelFlushMs: 2262.91,
  maxMessages: 7081.05,
  visibilityTimeout: 5194,
  numReceivers: 9647.24,
  socketTimeout: 642.23,
  skipOnError: true,
  includeSqsMetadata: false,
  enableAssumeRole: false,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 8092.52,
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
  parquetChunkSizeMB: 3556.92,
  parquetChunkDownloadTimeout: 653.95,
  checkpointing: {
    enabled: true,
    retries: 263.57,
  },
  pollTimeout: 6892.41,
  checksumSuffix: "<value>",
  maxManifestSizeKB: 666835,
  validateInventoryFiles: true,
  description: "pish but boo",
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

### `operations.CreateInputInputSnmp`

```typescript
const value: operations.CreateInputInputSnmp = {
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
  host: "big-heating.org",
  port: 5679.07,
  snmpV3Auth: {
    v3AuthEnabled: true,
    allowUnmatchedTrap: false,
    v3Users: [
      {
        name: "<value>",
        authProtocol: "sha512",
        authKey: "<value>",
        privProtocol: "aes256b",
        privKey: "<value>",
      },
    ],
  },
  maxBufferSize: 5639.81,
  ipWhitelistRegex: "<value>",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  udpSocketRxBufSize: 5277.13,
  varbindsWithTypes: true,
  bestEffortParsing: false,
  description: "pant obnoxiously abandoned",
  __template_host: "<value>",
  __template_port: "<value>",
};
```

### `operations.CreateInputInputOpenTelemetry`

```typescript
const value: operations.CreateInputInputOpenTelemetry = {
  id: "<id>",
  type: "open_telemetry",
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
  host: "uncomfortable-experience.info",
  port: 3966.16,
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
  maxActiveReq: 2727.71,
  maxRequestsPerSocket: 756828,
  enableProxyHeader: "<value>",
  captureHeaders: "<value>",
  activityLogSampleRate: "<value>",
  requestTimeout: 8744.82,
  socketTimeout: 8572.46,
  keepAliveTimeout: 8086.78,
  enableHealthCheck: true,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  protocol: "grpc",
  extractSpans: false,
  extractMetrics: false,
  otlpVersion: "1.3.1",
  authType: "credentialsSecret",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  maxActiveCxn: 8050.89,
  description:
    "likewise queasily ick apostrophize meaty hmph intellect oof teammate homeschool",
  username: "Isabel_Keeling-Hudson",
  password: "Etm_Ob17cJ0D68A",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  extractLogs: true,
  __template_host: "<value>",
  __template_port: "<value>",
};
```

### `operations.CreateInputInputModelDrivenTelemetry`

```typescript
const value: operations.CreateInputInputModelDrivenTelemetry = {
  id: "<id>",
  type: "model_driven_telemetry",
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
  host: "internal-median.net",
  port: 2508.88,
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
  maxActiveCxn: 892.86,
  shutdownTimeoutMs: 5117.79,
  description: "cheap which yahoo puny",
  __template_host: "<value>",
  __template_port: "<value>",
};
```

### `operations.CreateInputInputSqs`

```typescript
const value: operations.CreateInputInputSqs = {
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
  queueType: "standard",
  awsAccountId: "<id>",
  createQueue: true,
  awsAuthenticationMethod: "<value>",
  awsSecretKey: "<value>",
  region: "<value>",
  endpoint: "<value>",
  signatureVersion: "v2",
  reuseConnections: true,
  rejectUnauthorized: true,
  enableAssumeRole: true,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 9251.7,
  maxMessages: 9173.17,
  visibilityTimeout: 3932.36,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  pollTimeout: 509.23,
  description: "mmm hm yowza barring",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  numReceivers: 9641.23,
  __template_queueName: "<value>",
  __template_awsAccountId: "<id>",
  __template_awsSecretKey: "<value>",
  __template_region: "<value>",
  __template_assumeRoleArn: "<value>",
  __template_assumeRoleExternalId: "<id>",
  __template_awsApiKey: "<value>",
};
```

### `operations.CreateInputInputSyslogUnion`

```typescript
const value: operations.CreateInputInputSyslogUnion = {
  id: "<id>",
  type: "syslog",
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
  host: "quick-witted-slide.info",
  udpPort: 1488.34,
  tcpPort: 3230.6,
  maxBufferSize: 4342.19,
  ipWhitelistRegex: "<value>",
  timestampTimezone: "<value>",
  singleMsgUdpPackets: true,
  enableProxyHeader: true,
  keepFieldsList: [
    "<value 1>",
  ],
  octetCounting: true,
  inferFraming: false,
  strictlyInferOctetCounting: true,
  allowNonStandardAppName: false,
  maxActiveCxn: 4342.62,
  socketIdleTimeout: 4563.7,
  socketEndingMaxWait: 9910.17,
  socketMaxLifespan: 5770.65,
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
  udpSocketRxBufSize: 6951.69,
  enableLoadBalancing: true,
  description: "excluding urgently frozen geez blah by",
  enableEnhancedProxyHeaderParsing: true,
  __template_host: "<value>",
  __template_udpPort: "<value>",
  __template_tcpPort: "<value>",
};
```

### `operations.CreateInputInputFile`

```typescript
const value: operations.CreateInputInputFile = {
  id: "<id>",
  type: "file",
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
  mode: "manual",
  interval: 8277.37,
  filenames: [
    "<value 1>",
  ],
  filterArchivedFiles: false,
  tailOnly: false,
  idleTimeout: 1378.8,
  minAgeDur: "<value>",
  maxAgeDur: "<value>",
  checkFileModTime: false,
  forceText: false,
  hashLen: 7894.69,
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
  staleChannelFlushMs: 2441,
  description: "tenant necessary pulverize sometimes",
  path: "/usr/local/src",
  depth: 7380.42,
  suppressMissingPathErrors: false,
  deleteFiles: false,
  saltHash: false,
  includeUnidentifiableBinary: true,
};
```

### `operations.CreateInputInputTcp`

```typescript
const value: operations.CreateInputInputTcp = {
  id: "<id>",
  type: "tcp",
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
  host: "specific-tool.org",
  port: 2579.77,
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
  maxActiveCxn: 5732.61,
  socketIdleTimeout: 6314.83,
  socketEndingMaxWait: 7155.71,
  socketMaxLifespan: 3063.67,
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
  staleChannelFlushMs: 124.68,
  enableHeader: true,
  preprocess: {
    disabled: false,
    command: "<value>",
    args: [
      "<value 1>",
    ],
  },
  description: "aw forenenst atop so ouch coaxingly godparent for",
  authToken: "<value>",
  authType: "manual",
  textSecret: "<value>",
  __template_host: "<value>",
  __template_port: "<value>",
};
```

### `operations.CreateInputInputAppscope`

```typescript
const value: operations.CreateInputInputAppscope = {
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
  ipWhitelistRegex: "<value>",
  maxActiveCxn: 6442.87,
  socketIdleTimeout: 5991.93,
  socketEndingMaxWait: 9225.83,
  socketMaxLifespan: 3347.2,
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
  staleChannelFlushMs: 9471.82,
  enableUnixPath: true,
  filter: {
    allow: [
      {
        procname: "<value>",
        arg: "<value>",
        config: "<value>",
      },
    ],
    transportURL: "https://staid-tapioca.biz",
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
  description: "beneficial seldom ick",
  host: "rich-cheese.net",
  port: 1820.69,
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

### `operations.CreateInputInputWef`

```typescript
const value: operations.CreateInputInputWef = {
  id: "<id>",
  type: "wef",
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
  host: "swift-fog.info",
  port: 3395.8,
  authMethod: "kerberos",
  tls: {
    disabled: true,
    rejectUnauthorized: true,
    requestCert: false,
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    commonNameRegex: "<value>",
    minVersion: "TLSv1.1",
    maxVersion: "TLSv1.2",
    ocspCheck: false,
    keytab: "<value>",
    principal: "<value>",
    ocspCheckFailClose: true,
  },
  maxActiveReq: 1531.1,
  maxRequestsPerSocket: 548717,
  enableProxyHeader: false,
  captureHeaders: false,
  keepAliveTimeout: 7861.5,
  enableHealthCheck: true,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  socketTimeout: 2566.62,
  caFingerprint: "<value>",
  keytab: "<value>",
  principal: "<value>",
  allowMachineIdMismatch: false,
  subscriptions: [
    {
      subscriptionName: "<value>",
      version: "<value>",
      contentFormat: "RenderedText",
      heartbeatInterval: 1812.27,
      batchTimeout: 9931.54,
      readExistingEvents: false,
      sendBookmarks: false,
      compress: false,
      targets: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      locale: "zh",
      querySelector: "xml",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      queries: [
        {
          path: "/etc/mail",
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
  description:
    "about shadowbox generally underneath cruelly meanwhile capitalise awkwardly",
  logFingerprintMismatch: true,
  __template_host: "<value>",
  __template_port: "<value>",
};
```

### `operations.CreateInputInputWinEventLogs`

```typescript
const value: operations.CreateInputInputWinEventLogs = {
  id: "<id>",
  type: "win_event_logs",
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
  logNames: [],
  readMode: "newest",
  eventFormat: "json",
  disableNativeModule: true,
  interval: 3417.78,
  batchSize: 8216.6,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  maxEventBytes: 3070.67,
  description: "blah chip orange inure mechanically",
  disableJsonRendering: false,
  disableXmlRendering: true,
};
```

### `operations.CreateInputInputRawUdp`

```typescript
const value: operations.CreateInputInputRawUdp = {
  id: "<id>",
  type: "raw_udp",
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
  host: "adolescent-density.info",
  port: 8358.67,
  maxBufferSize: 5817.05,
  ipWhitelistRegex: "<value>",
  singleMsgUdpPackets: false,
  ingestRawBytes: false,
  udpSocketRxBufSize: 2227.48,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "onto override deeply eke",
  __template_host: "<value>",
  __template_port: "<value>",
};
```

### `operations.CreateInputInputJournalFiles`

```typescript
const value: operations.CreateInputInputJournalFiles = {
  id: "<id>",
  type: "journal_files",
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
  path: "/Users",
  interval: 4203.3,
  journals: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  rules: [
    {
      filter: "<value>",
      description: "powerfully ack lazily apropos",
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
  description: "juggernaut ha fairly",
};
```

### `operations.CreateInputInputWiz`

```typescript
const value: operations.CreateInputInputWiz = {
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
  endpoint: "<value>",
  authUrl: "https://runny-packaging.net/",
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
      logLevel: "silly",
      maxPages: 2440.42,
    },
  ],
  requestTimeout: 9477.33,
  keepAliveTime: 666.97,
  maxMissedKeepAlives: 3466.54,
  ttl: "<value>",
  ignoreGroupJobsLimit: true,
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
  authType: "secret",
  description: "always information unto gah but above provided for but",
  clientSecret: "<value>",
  textSecret: "<value>",
  __template_endpoint: "<value>",
  __template_authUrl: "https://serpentine-opera.org",
  __template_clientId: "<id>",
};
```

### `operations.CreateInputInputWizWebhook`

```typescript
const value: operations.CreateInputInputWizWebhook = {
  id: "<id>",
  type: "wiz_webhook",
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
  host: "improbable-ribbon.name",
  port: 1396.98,
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
  maxActiveReq: 9272.44,
  maxRequestsPerSocket: 486428,
  enableProxyHeader: true,
  captureHeaders: true,
  activityLogSampleRate: 6395.07,
  requestTimeout: 5515.59,
  socketTimeout: 6681.76,
  keepAliveTimeout: 9221.35,
  enableHealthCheck: true,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  staleChannelFlushMs: 195.61,
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
  description: "tail correctly eulogise while",
  __template_host: "<value>",
  __template_port: "<value>",
};
```

### `operations.CreateInputInputNetflow`

```typescript
const value: operations.CreateInputInputNetflow = {
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
  host: "likely-lay.net",
  port: 7606.62,
  enablePassThrough: true,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  udpSocketRxBufSize: 5041.1,
  templateCacheMinutes: 1481.93,
  v5Enabled: true,
  v9Enabled: false,
  ipfixEnabled: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "excess forsaken tragic consequently",
  __template_host: "<value>",
  __template_port: "<value>",
};
```

### `operations.CreateInputInputSecurityLake`

```typescript
const value: operations.CreateInputInputSecurityLake = {
  id: "<id>",
  type: "security_lake",
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
  staleChannelFlushMs: 5665.41,
  maxMessages: 4459.76,
  visibilityTimeout: 3574.14,
  numReceivers: 9670.36,
  socketTimeout: 4285.59,
  skipOnError: false,
  includeSqsMetadata: false,
  enableAssumeRole: false,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 105.51,
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
  parquetChunkSizeMB: 7841.72,
  parquetChunkDownloadTimeout: 8321.12,
  checkpointing: {
    enabled: true,
    retries: 263.57,
  },
  pollTimeout: 5820.37,
  encoding: "<value>",
  description:
    "conversation duh consequently versus upon even even edge critical aha",
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

### `operations.CreateInputInputZscalerHec`

```typescript
const value: operations.CreateInputInputZscalerHec = {
  id: "<id>",
  type: "zscaler_hec",
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
  host: "impossible-crest.biz",
  port: 6510.64,
  authTokens: [
    {
      authType: "manual",
      tokenSecret: "<value>",
      token: "<value>",
      enabled: false,
      description: "lazily secrecy manipulate zany",
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
  maxActiveReq: 2751.28,
  maxRequestsPerSocket: 875618,
  enableProxyHeader: false,
  captureHeaders: false,
  activityLogSampleRate: 6823.69,
  requestTimeout: 3162.27,
  socketTimeout: 6639.21,
  keepAliveTimeout: 2040.93,
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
  hecAcks: false,
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
  description: "but upwardly yearly um save lest SUV furthermore although",
  __template_host: "<value>",
  __template_port: "<value>",
  __template_hecAPI: "<value>",
};
```

### `operations.CreateInputInputCloudflareHec`

```typescript
const value: operations.CreateInputInputCloudflareHec = {
  id: "<id>",
  type: "cloudflare_hec",
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
  host: "well-to-do-sock.biz",
  port: 6728.66,
  authTokens: [
    {
      authType: "secret",
      tokenSecret: "<value>",
      token: "<value>",
      enabled: false,
      description: "wherever till dislocate",
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
    requestCert: false,
    rejectUnauthorized: true,
    commonNameRegex: "<value>",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1.3",
  },
  maxActiveReq: 1745.86,
  maxRequestsPerSocket: 891747,
  enableProxyHeader: false,
  captureHeaders: true,
  activityLogSampleRate: 8825.42,
  requestTimeout: 8352.22,
  socketTimeout: 8572.68,
  keepAliveTimeout: 6206.48,
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
    "<value 2>",
  ],
  staleChannelFlushMs: 3533.36,
  accessControlAllowOrigin: [
    "<value 1>",
  ],
  accessControlAllowHeaders: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  emitTokenMetrics: true,
  description: "outgoing meh outdo sick agreement whoa jittery vaguely boohoo",
  __template_host: "<value>",
  __template_port: "<value>",
};
```

