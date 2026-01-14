# Input


## Supported Types

### `models.InputCollection`

```typescript
const value: models.InputCollection = {
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
  staleChannelFlushMs: 8467.21,
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

### `models.InputKafka`

```typescript
const value: models.InputKafka = {
  id: "<id>",
  type: "kafka",
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
    "<value 2>",
    "<value 3>",
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
  connectionTimeout: 9191.7,
  requestTimeout: 9152.39,
  maxRetries: 8975.46,
  maxBackOff: 7140.45,
  initialBackoff: 1119.07,
  backoffRate: 2881.24,
  authenticationTimeout: 2817.87,
  reauthenticationThreshold: 7812.82,
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
  sessionTimeout: 9176.35,
  rebalanceTimeout: 1822.55,
  heartbeatInterval: 9939.31,
  autoCommitInterval: 7467.15,
  autoCommitThreshold: 8692.82,
  maxBytesPerPartition: 6817.05,
  maxBytes: 6788.97,
  maxSocketErrors: 7060.19,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "with quicker misfire so hence lovingly woot inside",
};
```

### `models.InputMsk`

```typescript
const value: models.InputMsk = {
  id: "<id>",
  type: "msk",
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
  brokers: [
    "<value 1>",
  ],
  topics: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  groupId: "<id>",
  fromBeginning: true,
  sessionTimeout: 5538.49,
  rebalanceTimeout: 2610.43,
  heartbeatInterval: 9334.03,
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
  connectionTimeout: 6019.57,
  requestTimeout: 3691.44,
  maxRetries: 6670.84,
  maxBackOff: 9992.57,
  initialBackoff: 95.8,
  backoffRate: 3598.73,
  authenticationTimeout: 7153.94,
  reauthenticationThreshold: 4857.79,
  awsAuthenticationMethod: "<value>",
  awsSecretKey: "<value>",
  region: "<value>",
  endpoint: "<value>",
  signatureVersion: "v4",
  reuseConnections: true,
  rejectUnauthorized: false,
  enableAssumeRole: false,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 2790.42,
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
  autoCommitInterval: 8663.73,
  autoCommitThreshold: 8094.14,
  maxBytesPerPartition: 1153.29,
  maxBytes: 3234.81,
  maxSocketErrors: 3027.03,
  description: "book delight positively majestically freezing beyond",
  awsApiKey: "<value>",
  awsSecret: "<value>",
};
```

### `models.InputHttp`

```typescript
const value: models.InputHttp = {
  id: "<id>",
  type: "http",
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
  host: "early-linseed.net",
  port: 4568.44,
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
  maxActiveReq: 2500.22,
  maxRequestsPerSocket: 729246,
  enableProxyHeader: true,
  captureHeaders: false,
  activityLogSampleRate: 7856.7,
  requestTimeout: 934.67,
  socketTimeout: 1804.56,
  keepAliveTimeout: 9664.45,
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
  description: "despite if after hunt immediately so arcade",
};
```

### `models.InputSplunk`

```typescript
const value: models.InputSplunk = {
  id: "<id>",
  type: "splunk",
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
  host: "stark-hierarchy.biz",
  port: 4941.14,
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
  maxActiveCxn: 2204.51,
  socketIdleTimeout: 5287.93,
  socketEndingMaxWait: 4279.79,
  socketMaxLifespan: 2470.73,
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
  staleChannelFlushMs: 7385.66,
  authTokens: [
    {
      token: "<value>",
      description: "around inside although phooey pfft acidly",
    },
  ],
  maxS2Sversion: "v4",
  description: "vivaciously upbeat cricket where castanet than",
  useFwdTimezone: false,
  dropControlFields: false,
  extractMetrics: false,
  compress: "always",
};
```

### `models.InputSplunkSearch`

```typescript
const value: models.InputSplunkSearch = {
  id: "<id>",
  type: "splunk_search",
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
  searchHead: "<value>",
  search: "<value>",
  earliest: "<value>",
  latest: "<value>",
  cronSchedule: "<value>",
  endpoint: "<value>",
  outputMode: "csv",
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
  requestTimeout: 7648.22,
  useRoundRobinDns: true,
  rejectUnauthorized: true,
  encoding: "<value>",
  keepAliveTime: 2683.02,
  jobTimeout: "<value>",
  maxMissedKeepAlives: 171.14,
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
  ],
  staleChannelFlushMs: 3804.15,
  authType: "oauth",
  description: "past cassava however tenderly considerate suitcase",
  username: "Twila_Homenick",
  password: "WHMIdyB7lUGpeaN",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://mealy-pile.info",
  secretParamName: "<value>",
  secret: "<value>",
  tokenAttributeName: "<value>",
  authHeaderExpr: "<value>",
  tokenTimeoutSecs: 2444.65,
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
  id: "<id>",
  type: "splunk_hec",
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
  host: "quarrelsome-mixture.org",
  port: 8060.26,
  authTokens: [
    {
      authType: "secret",
      tokenSecret: "<value>",
      token: "<value>",
      enabled: false,
      description: "jubilant agile bowed what mockingly excluding maintainer",
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
  maxActiveReq: 5366.46,
  maxRequestsPerSocket: 534004,
  enableProxyHeader: true,
  captureHeaders: true,
  activityLogSampleRate: 3048.18,
  requestTimeout: 37.27,
  socketTimeout: 7463.91,
  keepAliveTimeout: 2663.46,
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
  staleChannelFlushMs: 6760.1,
  useFwdTimezone: true,
  dropControlFields: true,
  extractMetrics: true,
  accessControlAllowOrigin: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  accessControlAllowHeaders: [
    "<value 1>",
  ],
  emitTokenMetrics: false,
  description: "entrench past lest morning boohoo yawningly meh marten",
};
```

### `models.InputAzureBlob`

```typescript
const value: models.InputAzureBlob = {
  id: "<id>",
  type: "azure_blob",
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
  visibilityTimeout: 9945.7,
  numReceivers: 9339.82,
  maxMessages: 5576.42,
  servicePeriodSecs: 7254.03,
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
  ],
  staleChannelFlushMs: 6373.06,
  parquetChunkSizeMB: 9794.12,
  parquetChunkDownloadTimeout: 2959.58,
  authType: "clientSecret",
  description: "since goose idealistic yahoo tricky about exalt scornful",
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
  id: "<id>",
  type: "elastic",
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
  host: "coordinated-season.biz",
  port: 6214.35,
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
  maxActiveReq: 2842.65,
  maxRequestsPerSocket: 976255,
  enableProxyHeader: true,
  captureHeaders: true,
  activityLogSampleRate: 4682.34,
  requestTimeout: 5252.11,
  socketTimeout: 7948.46,
  keepAliveTimeout: 7018.17,
  enableHealthCheck: false,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  elasticAPI: "<value>",
  authType: "credentialsSecret",
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
    authType: "manual",
    username: "Omer.Wilderman0",
    password: "0M0cd_ogL9HtpZN",
    credentialsSecret: "<value>",
    url: "https://graceful-experience.info",
    rejectUnauthorized: false,
    removeHeaders: [
      "<value 1>",
      "<value 2>",
    ],
    timeoutSec: 2929.22,
  },
  description:
    "fly how incidentally fast furthermore repeatedly calmly starboard er waft",
  username: "Emerson.Mertz",
  password: "MrCR_bg74dlzuxm",
  credentialsSecret: "<value>",
  authTokens: [
    "<value 1>",
  ],
  customAPIVersion: "<value>",
};
```

### `models.InputConfluentCloud`

```typescript
const value: models.InputConfluentCloud = {
  id: "<id>",
  type: "confluent_cloud",
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
    "<value 3>",
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
  connectionTimeout: 4548.16,
  requestTimeout: 9243.43,
  maxRetries: 7542.92,
  maxBackOff: 1623.19,
  initialBackoff: 1264.79,
  backoffRate: 614.07,
  authenticationTimeout: 8676.73,
  reauthenticationThreshold: 173.2,
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
  sessionTimeout: 8004.77,
  rebalanceTimeout: 273.28,
  heartbeatInterval: 7569.19,
  autoCommitInterval: 5951.71,
  autoCommitThreshold: 4048.53,
  maxBytesPerPartition: 9060.05,
  maxBytes: 7602.77,
  maxSocketErrors: 285.77,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "soupy why accessorise tune sans aware smuggle",
};
```

### `models.InputGrafana`

```typescript
const value: models.InputGrafana = {
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
  host: "grizzled-gown.biz",
  port: 5908.72,
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
  maxActiveReq: 1524.26,
  maxRequestsPerSocket: 293320,
  enableProxyHeader: false,
  captureHeaders: true,
  activityLogSampleRate: 558.85,
  requestTimeout: 1995.37,
  socketTimeout: 5339.01,
  keepAliveTimeout: 1926.3,
  enableHealthCheck: false,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  prometheusAPI: "<value>",
  lokiAPI: "<value>",
  prometheusAuth: {
    authType: "token",
    username: "Dwight28",
    password: "AySqW5o8JbMBEn4",
    token: "<value>",
    credentialsSecret: "<value>",
    textSecret: "<value>",
    loginUrl: "https://wide-eyed-rationale.info/",
    secretParamName: "<value>",
    secret: "<value>",
    tokenAttributeName: "<value>",
    authHeaderExpr: "<value>",
    tokenTimeoutSecs: 1516.76,
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
    authType: "token",
    username: "Jarvis_Greenholt",
    password: "0GmdmcY5dZMn1QV",
    token: "<value>",
    credentialsSecret: "<value>",
    textSecret: "<value>",
    loginUrl: "https://well-off-igloo.net/",
    secretParamName: "<value>",
    secret: "<value>",
    tokenAttributeName: "<value>",
    authHeaderExpr: "<value>",
    tokenTimeoutSecs: 2601.58,
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
  description: "upbeat now e-mail corner only limping er brr except",
};
```

### `models.InputLoki`

```typescript
const value: models.InputLoki = {
  id: "<id>",
  type: "loki",
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
  host: "sleepy-brochure.com",
  port: 5224.57,
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
  maxActiveReq: 5913.81,
  maxRequestsPerSocket: 399327,
  enableProxyHeader: false,
  captureHeaders: true,
  activityLogSampleRate: 9489.45,
  requestTimeout: 7251.79,
  socketTimeout: 1109.26,
  keepAliveTimeout: 8330.3,
  enableHealthCheck: true,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  lokiAPI: "<value>",
  authType: "textSecret",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "gum playfully phew colossal whose fluffy defendant arrogantly",
  username: "Ronaldo87",
  password: "OXGU2LDulsn3fGv",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://tepid-summer.org",
  secretParamName: "<value>",
  secret: "<value>",
  tokenAttributeName: "<value>",
  authHeaderExpr: "<value>",
  tokenTimeoutSecs: 2498.36,
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
  id: "<id>",
  type: "prometheus_rw",
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
  host: "subdued-meal.org",
  port: 93.83,
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
  maxActiveReq: 5425.93,
  maxRequestsPerSocket: 255953,
  enableProxyHeader: true,
  captureHeaders: false,
  activityLogSampleRate: 450.97,
  requestTimeout: 2707.33,
  socketTimeout: 8690.29,
  keepAliveTimeout: 889.37,
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
  description: "arcade soybean onto yahoo hydrolyze gee rapid why hm as",
  username: "Tanya.Mayer13",
  password: "VVh2TYDsD8VsEpa",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://radiant-hydrolyse.name",
  secretParamName: "<value>",
  secret: "<value>",
  tokenAttributeName: "<value>",
  authHeaderExpr: "<value>",
  tokenTimeoutSecs: 7170.49,
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
  id: "<id>",
  type: "prometheus",
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
  dimensionList: [
    "<value 1>",
    "<value 2>",
  ],
  discoveryType: "ec2",
  interval: 2386.57,
  logLevel: "info",
  rejectUnauthorized: true,
  timeout: 9689.51,
  keepAliveTime: 2125.09,
  jobTimeout: "<value>",
  maxMissedKeepAlives: 8778.22,
  ttl: "<value>",
  ignoreGroupJobsLimit: true,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  authType: "secret",
  description: "what closely mob gently or ack sudden legal good",
  targetList: [
    "<value 1>",
  ],
  recordType: "AAAA",
  scrapePort: 6229.35,
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
  signatureVersion: "v2",
  reuseConnections: true,
  enableAssumeRole: false,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 2790.27,
  username: "Xander5",
  password: "th_udqpW8UBrZko",
  credentialsSecret: "<value>",
};
```

### `models.InputEdgePrometheus`

```typescript
const value: models.InputEdgePrometheus = {
  id: "<id>",
  type: "edge_prometheus",
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
  dimensionList: [
    "<value 1>",
    "<value 2>",
  ],
  discoveryType: "ec2",
  interval: 3298.52,
  timeout: 7099.51,
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
  description: "authorized wealthy hm lest how plumber",
  targets: [
    {
      protocol: "http",
      host: "gloomy-petticoat.info",
      port: 146.54,
      path: "/net",
    },
  ],
  recordType: "A",
  scrapePort: 9821.24,
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
  signatureVersion: "v2",
  reuseConnections: true,
  rejectUnauthorized: true,
  enableAssumeRole: false,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 1316.68,
  scrapeProtocolExpr: "<value>",
  scrapePortExpr: "<value>",
  scrapePathExpr: "<value>",
  podFilter: [
    {
      filter: "<value>",
      description: "meh that oof lest mainstream times anti reboot packaging",
    },
  ],
  username: "Lindsay48",
  password: "YXAl8n5UV0w6JPk",
  credentialsSecret: "<value>",
};
```

### `models.InputOffice365Mgmt`

```typescript
const value: models.InputOffice365Mgmt = {
  id: "<id>",
  type: "office365_mgmt",
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
  planType: "gcc_high",
  tenantId: "<id>",
  appId: "<id>",
  timeout: 6368.3,
  keepAliveTime: 1421.9,
  jobTimeout: "<value>",
  maxMissedKeepAlives: 1799.63,
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
      description: "illusion ice-cream if puny towards",
      interval: 8290.81,
      logLevel: "error",
      enabled: false,
    },
  ],
  ingestionLag: 9152.34,
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
  description: "caption aw chainstay vice soliloquy vivid without",
  clientSecret: "<value>",
  textSecret: "<value>",
};
```

### `models.InputOffice365Service`

```typescript
const value: models.InputOffice365Service = {
  id: "<id>",
  type: "office365_service",
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
  planType: "gcc",
  tenantId: "<id>",
  appId: "<id>",
  timeout: 1685.12,
  keepAliveTime: 4274.38,
  jobTimeout: "<value>",
  maxMissedKeepAlives: 1113.52,
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
      description: "with these overconfidently",
      interval: 9163.06,
      logLevel: "debug",
      enabled: true,
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
  description: "as incidentally until bell",
  clientSecret: "<value>",
  textSecret: "<value>",
};
```

### `models.InputOffice365MsgTrace`

```typescript
const value: models.InputOffice365MsgTrace = {
  id: "<id>",
  type: "office365_msg_trace",
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
  url: "https://mean-signature.name/",
  interval: 8682.26,
  startDate: "<value>",
  endDate: "<value>",
  timeout: 7291.07,
  disableTimeFilter: true,
  authType: "secret",
  rescheduleDroppedTasks: true,
  maxTaskReschedule: 5401.17,
  logLevel: "warn",
  jobTimeout: "<value>",
  keepAliveTime: 8128.14,
  maxMissedKeepAlives: 5626.75,
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
  description:
    "microblog ill-fated ha finally detective illiterate before precedent in",
  username: "Ada.Shanahan",
  password: "oOeRF2zrHIlSKLX",
  credentialsSecret: "<value>",
  clientSecret: "<value>",
  tenantId: "<id>",
  clientId: "<id>",
  resource: "<value>",
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
  ],
  topics: [
    "<value 1>",
    "<value 2>",
  ],
  groupId: "<id>",
  fromBeginning: false,
  connectionTimeout: 6174.22,
  requestTimeout: 9238.25,
  maxRetries: 5438.18,
  maxBackOff: 9230.31,
  initialBackoff: 2101.71,
  backoffRate: 9741.86,
  authenticationTimeout: 3426.22,
  reauthenticationThreshold: 8021.76,
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
  sessionTimeout: 147.46,
  rebalanceTimeout: 2633.53,
  heartbeatInterval: 3000.96,
  autoCommitInterval: 6273.62,
  autoCommitThreshold: 8652.9,
  maxBytesPerPartition: 7069.03,
  maxBytes: 8788.12,
  maxSocketErrors: 5130.3,
  minimizeDuplicates: true,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "which verify victoriously keel dreamily scrape lieu intermesh",
};
```

### `models.InputExec`

```typescript
const value: models.InputExec = {
  id: "<id>",
  type: "exec",
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
  command: "<value>",
  retries: 8813.07,
  scheduleType: "interval",
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
  ],
  staleChannelFlushMs: 7140.36,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description:
    "weakly moor around forenenst meanwhile reproach however aside energetically",
  interval: 5882.92,
  cronSchedule: "<value>",
};
```

### `models.InputFirehose`

```typescript
const value: models.InputFirehose = {
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
  host: "timely-bathrobe.com",
  port: 2198.14,
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
  maxActiveReq: 6680.86,
  maxRequestsPerSocket: 572688,
  enableProxyHeader: false,
  captureHeaders: false,
  activityLogSampleRate: 1752.7,
  requestTimeout: 8819.28,
  socketTimeout: 9917.89,
  keepAliveTimeout: 5197.13,
  enableHealthCheck: false,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description:
    "meh grizzled righteously clonk against sternly oh whoever duh finally",
};
```

### `models.InputGooglePubsub`

```typescript
const value: models.InputGooglePubsub = {
  id: "<id>",
  type: "google_pubsub",
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
  topicName: "<value>",
  subscriptionName: "<value>",
  monitorSubscription: false,
  createTopic: false,
  createSubscription: false,
  region: "<value>",
  googleAuthMethod: "secret",
  serviceAccountCredentials: "<value>",
  secret: "<value>",
  maxBacklog: 2839.01,
  concurrency: 5475.03,
  requestTimeout: 3229.57,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "hence once vice",
  orderedDelivery: true,
};
```

### `models.InputCribl`

```typescript
const value: models.InputCribl = {
  id: "<id>",
  type: "cribl",
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
  filter: "<value>",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description:
    "excluding whereas eek naturally upon ick ha splosh the negative",
};
```

### `models.InputCriblTcp`

```typescript
const value: models.InputCriblTcp = {
  id: "<id>",
  type: "cribl_tcp",
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
  host: "aching-bell.com",
  port: 7144.69,
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
  maxActiveCxn: 4421.42,
  socketIdleTimeout: 481.62,
  socketEndingMaxWait: 5081.68,
  socketMaxLifespan: 669.3,
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
  description: "embarrassment happily overspend by antique",
};
```

### `models.InputCriblHttp`

```typescript
const value: models.InputCriblHttp = {
  id: "<id>",
  type: "cribl_http",
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
  host: "stingy-postbox.com",
  port: 8372.55,
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
  maxActiveReq: 2912.8,
  maxRequestsPerSocket: 948559,
  enableProxyHeader: false,
  captureHeaders: false,
  activityLogSampleRate: 5732.3,
  requestTimeout: 7297.45,
  socketTimeout: 9093.35,
  keepAliveTimeout: 5310.92,
  enableHealthCheck: false,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "midst meh off aha",
};
```

### `models.InputCriblLakeHttp`

```typescript
const value: models.InputCriblLakeHttp = {
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
  host: "evil-possession.biz",
  port: 6193.35,
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
  maxActiveReq: 1430.96,
  maxRequestsPerSocket: 79286,
  enableProxyHeader: true,
  captureHeaders: false,
  activityLogSampleRate: 1022.19,
  requestTimeout: 4284.7,
  socketTimeout: 5461.22,
  keepAliveTimeout: 2557.07,
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
      description: "angrily yearningly ferociously vet trusting yum catch",
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
  description: "cute adult obediently consequently westernise",
};
```

### `models.InputTcpjson`

```typescript
const value: models.InputTcpjson = {
  id: "<id>",
  type: "tcpjson",
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
  host: "intrepid-pendant.com",
  port: 4813.44,
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
  maxActiveCxn: 7055.47,
  socketIdleTimeout: 5503.1,
  socketEndingMaxWait: 712.24,
  socketMaxLifespan: 4264.81,
  enableProxyHeader: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  enableLoadBalancing: true,
  authType: "manual",
  description:
    "snappy knitting absent denitrify furthermore dwell quietly elevation",
  authToken: "<value>",
  textSecret: "<value>",
};
```

### `models.InputSystemMetrics`

```typescript
const value: models.InputSystemMetrics = {
  id: "<id>",
  type: "system_metrics",
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
  interval: 5902.57,
  host: {
    mode: "custom",
    custom: {
      system: {
        mode: "disabled",
        processes: false,
      },
      cpu: {
        mode: "all",
        perCpu: true,
        detail: false,
        time: true,
      },
      memory: {
        mode: "disabled",
        detail: false,
      },
      network: {
        mode: "basic",
        detail: true,
        protocols: true,
        devices: [
          "<value 1>",
          "<value 2>",
        ],
        perInterface: false,
      },
      disk: {
        mode: "basic",
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
    ],
    dockerTimeout: 9123.42,
    filters: [
      {
        expr: "<value>",
      },
    ],
    allContainers: false,
    perDevice: false,
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
    compress: "none",
    destPath: "<value>",
  },
  description: "pfft to thorny um daily gently cultivated",
};
```

### `models.InputSystemState`

```typescript
const value: models.InputSystemState = {
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
  interval: 1355.72,
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
      enable: true,
    },
    services: {
      enable: false,
    },
    ports: {
      enable: false,
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
  description: "hollow yuck diligently",
};
```

### `models.InputKubeMetrics`

```typescript
const value: models.InputKubeMetrics = {
  id: "<id>",
  type: "kube_metrics",
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
  interval: 5840.12,
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
  description: "ha incidentally after when than yuck reschedule dual",
};
```

### `models.InputKubeLogs`

```typescript
const value: models.InputKubeLogs = {
  id: "<id>",
  type: "kube_logs",
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
  interval: 971.18,
  rules: [
    {
      filter: "<value>",
      description: "graduate now fiddle ouch carefully wherever where",
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
  staleChannelFlushMs: 9531.45,
  enableLoadBalancing: true,
  description: "but over wafer following ugh strait dimly yuck crumble hastily",
};
```

### `models.InputKubeEvents`

```typescript
const value: models.InputKubeEvents = {
  id: "<id>",
  type: "kube_events",
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
  description: "fussy idle nasalise disbar veto astonishing considerate abseil",
};
```

### `models.InputWindowsMetrics`

```typescript
const value: models.InputWindowsMetrics = {
  id: "<id>",
  type: "windows_metrics",
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
  interval: 4147.56,
  host: {
    mode: "custom",
    custom: {
      system: {
        mode: "basic",
        detail: true,
      },
      cpu: {
        mode: "custom",
        perCpu: false,
        detail: false,
        time: true,
      },
      memory: {
        mode: "all",
        detail: false,
      },
      network: {
        mode: "all",
        detail: true,
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
          "<value 2>",
          "<value 3>",
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
  description:
    "above commemorate quarrelsomely outrun independence kettledrum very along",
};
```

### `models.InputCrowdstrike`

```typescript
const value: models.InputCrowdstrike = {
  id: "<id>",
  type: "crowdstrike",
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
  staleChannelFlushMs: 9153.53,
  maxMessages: 2238.24,
  visibilityTimeout: 2190.92,
  numReceivers: 3052,
  socketTimeout: 1035.25,
  skipOnError: false,
  includeSqsMetadata: true,
  enableAssumeRole: true,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 818.63,
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
  pollTimeout: 4599.59,
  encoding: "<value>",
  description: "obscure anxiously strictly wherever",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  tagAfterProcessing: "false",
  processedTagKey: "<value>",
  processedTagValue: "<value>",
};
```

### `models.InputDatadogAgent`

```typescript
const value: models.InputDatadogAgent = {
  id: "<id>",
  type: "datadog_agent",
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
  host: "stable-hovercraft.info",
  port: 5714.97,
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
  maxActiveReq: 9434.99,
  maxRequestsPerSocket: 378452,
  enableProxyHeader: false,
  captureHeaders: true,
  activityLogSampleRate: 550,
  requestTimeout: 8039.38,
  socketTimeout: 7657.4,
  keepAliveTimeout: 771,
  enableHealthCheck: true,
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
  description:
    "upright outflank mmm per successfully yum ape councilman between grandpa",
};
```

### `models.InputDatagen`

```typescript
const value: models.InputDatagen = {
  id: "<id>",
  type: "datagen",
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
  samples: [
    {
      sample: "<value>",
      eventsPerSec: 9494.62,
    },
  ],
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "dearest considering gosh",
};
```

### `models.InputHttpRaw`

```typescript
const value: models.InputHttpRaw = {
  id: "<id>",
  type: "http_raw",
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
  host: "intelligent-reward.net",
  port: 4895.66,
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
  maxActiveReq: 6896.22,
  maxRequestsPerSocket: 967298,
  enableProxyHeader: false,
  captureHeaders: true,
  activityLogSampleRate: 1148.51,
  requestTimeout: 2454.06,
  socketTimeout: 6101.23,
  keepAliveTimeout: 3165.33,
  enableHealthCheck: true,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  staleChannelFlushMs: 2369.85,
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
      description: "instead worth trek drain eek below",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
    },
  ],
  description: "very incomparable stale sidetrack",
};
```

### `models.InputKinesis`

```typescript
const value: models.InputKinesis = {
  id: "<id>",
  type: "kinesis",
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
  streamName: "<value>",
  serviceInterval: 2595.16,
  shardExpr: "<value>",
  shardIteratorType: "LATEST",
  payloadFormat: "line",
  getRecordsLimit: 29.69,
  getRecordsLimitTotal: 4071.84,
  loadBalancingAlgorithm: "RoundRobin",
  awsAuthenticationMethod: "<value>",
  awsSecretKey: "<value>",
  region: "<value>",
  endpoint: "<value>",
  signatureVersion: "v4",
  reuseConnections: true,
  rejectUnauthorized: false,
  enableAssumeRole: false,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 4231.27,
  verifyKPLCheckSums: false,
  avoidDuplicates: true,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "as until hm",
  awsApiKey: "<value>",
  awsSecret: "<value>",
};
```

### `models.InputCriblmetrics`

```typescript
const value: models.InputCriblmetrics = {
  id: "<id>",
  type: "criblmetrics",
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
  prefix: "<value>",
  fullFidelity: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "miskey before behind er",
};
```

### `models.InputMetrics`

```typescript
const value: models.InputMetrics = {
  id: "<id>",
  type: "metrics",
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
  host: "needy-pepper.biz",
  udpPort: 2964.3,
  tcpPort: 4101.12,
  maxBufferSize: 9929.73,
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
  udpSocketRxBufSize: 9051.37,
  description: "aha off whose blah however",
};
```

### `models.InputS3`

```typescript
const value: models.InputS3 = {
  id: "<id>",
  type: "s3",
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
  ],
  staleChannelFlushMs: 3671.24,
  maxMessages: 2874.19,
  visibilityTimeout: 3288.89,
  numReceivers: 4404.3,
  socketTimeout: 1993.11,
  skipOnError: false,
  includeSqsMetadata: false,
  enableAssumeRole: false,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 3111.12,
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
  parquetChunkSizeMB: 4656.25,
  parquetChunkDownloadTimeout: 359,
  checkpointing: {
    enabled: true,
    retries: 263.57,
  },
  pollTimeout: 9177.75,
  encoding: "<value>",
  tagAfterProcessing: true,
  description:
    "instructive middle foolish whitewash simple airbus tomorrow minus",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  processedTagKey: "<value>",
  processedTagValue: "<value>",
};
```

### `models.InputS3Inventory`

```typescript
const value: models.InputS3Inventory = {
  id: "<id>",
  type: "s3_inventory",
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
  staleChannelFlushMs: 2687.78,
  maxMessages: 6997.08,
  visibilityTimeout: 6483.81,
  numReceivers: 628.77,
  socketTimeout: 7662.59,
  skipOnError: true,
  includeSqsMetadata: false,
  enableAssumeRole: false,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 7697.09,
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
  parquetChunkSizeMB: 7362.78,
  parquetChunkDownloadTimeout: 8211.71,
  checkpointing: {
    enabled: true,
    retries: 263.57,
  },
  pollTimeout: 6004.27,
  checksumSuffix: "<value>",
  maxManifestSizeKB: 159183,
  validateInventoryFiles: true,
  description: "busily as unless angle so little",
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
  id: "<id>",
  type: "snmp",
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
  host: "simple-cheese.info",
  port: 1363.98,
  snmpV3Auth: {
    v3AuthEnabled: true,
    allowUnmatchedTrap: true,
    v3Users: [
      {
        name: "<value>",
        authProtocol: "md5",
        authKey: "<value>",
        privProtocol: "des",
        privKey: "<value>",
      },
    ],
  },
  maxBufferSize: 5243.71,
  ipWhitelistRegex: "<value>",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  udpSocketRxBufSize: 5271.05,
  varbindsWithTypes: false,
  bestEffortParsing: false,
  description: "possible merrily along below geez horse",
};
```

### `models.InputOpenTelemetry`

```typescript
const value: models.InputOpenTelemetry = {
  id: "<id>",
  type: "open_telemetry",
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
  host: "graceful-palate.net",
  port: 9236.57,
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
  maxActiveReq: 2111.5,
  maxRequestsPerSocket: 916107,
  enableProxyHeader: "<value>",
  captureHeaders: "<value>",
  activityLogSampleRate: "<value>",
  requestTimeout: 7369.09,
  socketTimeout: 2624.19,
  keepAliveTimeout: 3368.85,
  enableHealthCheck: false,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  protocol: "grpc",
  extractSpans: false,
  extractMetrics: false,
  otlpVersion: "0.10.0",
  authType: "textSecret",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  maxActiveCxn: 8028.77,
  description: "hornet mould because where lest settle after who",
  username: "Kiana7",
  password: "vuTAFe8yuR5vesg",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://both-forager.org",
  secretParamName: "<value>",
  secret: "<value>",
  tokenAttributeName: "<value>",
  authHeaderExpr: "<value>",
  tokenTimeoutSecs: 9881.65,
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
  host: "husky-completion.name",
  port: 5895.55,
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
  maxActiveCxn: 1920.13,
  shutdownTimeoutMs: 6456.5,
  description: "suddenly while pace now bleak huzzah psst forenenst yet oof",
};
```

### `models.InputSqs`

```typescript
const value: models.InputSqs = {
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
  createQueue: false,
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
  durationSeconds: 4464.29,
  maxMessages: 6146.94,
  visibilityTimeout: 813.86,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  pollTimeout: 9189.56,
  description: "content even down out ew yowza mmm meh keenly anenst",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  numReceivers: 9368.6,
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
  host: "irresponsible-interviewer.org",
  udpPort: 1038.56,
  tcpPort: 9959.47,
  maxBufferSize: 9781.95,
  ipWhitelistRegex: "<value>",
  timestampTimezone: "<value>",
  singleMsgUdpPackets: false,
  enableProxyHeader: true,
  keepFieldsList: [
    "<value 1>",
    "<value 2>",
  ],
  octetCounting: true,
  inferFraming: false,
  strictlyInferOctetCounting: true,
  allowNonStandardAppName: true,
  maxActiveCxn: 3990.8,
  socketIdleTimeout: 5096.06,
  socketEndingMaxWait: 21.25,
  socketMaxLifespan: 8306.75,
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
  udpSocketRxBufSize: 7453.83,
  enableLoadBalancing: true,
  description: "huzzah if though brook mid seemingly",
  enableEnhancedProxyHeaderParsing: true,
};
```

### `models.InputFile`

```typescript
const value: models.InputFile = {
  id: "<id>",
  type: "file",
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
  mode: "manual",
  interval: 353.99,
  filenames: [
    "<value 1>",
    "<value 2>",
  ],
  filterArchivedFiles: true,
  tailOnly: false,
  idleTimeout: 795.27,
  minAgeDur: "<value>",
  maxAgeDur: "<value>",
  checkFileModTime: true,
  forceText: true,
  hashLen: 3508.88,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  breakerRulesets: [
    "<value 1>",
  ],
  staleChannelFlushMs: 1033.1,
  description:
    "helpless bah raw out fully miscalculate wisecrack frightfully meatloaf",
  path: "/usr/ports",
  depth: 8613.44,
  suppressMissingPathErrors: false,
  deleteFiles: false,
  includeUnidentifiableBinary: true,
};
```

### `models.InputTcp`

```typescript
const value: models.InputTcp = {
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
  host: "circular-marimba.info",
  port: 8231.88,
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
  maxActiveCxn: 9293.87,
  socketIdleTimeout: 7899.93,
  socketEndingMaxWait: 4795.04,
  socketMaxLifespan: 4783.69,
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
  staleChannelFlushMs: 3615.97,
  enableHeader: false,
  preprocess: {
    disabled: false,
    command: "<value>",
    args: [
      "<value 1>",
    ],
  },
  description: "meh pharmacopoeia yummy",
  authToken: "<value>",
  authType: "manual",
  textSecret: "<value>",
};
```

### `models.InputAppscope`

```typescript
const value: models.InputAppscope = {
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
  maxActiveCxn: 4559.47,
  socketIdleTimeout: 7115.31,
  socketEndingMaxWait: 5650.48,
  socketMaxLifespan: 4966.67,
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
  staleChannelFlushMs: 1872.92,
  enableUnixPath: false,
  filter: {
    allow: [
      {
        procname: "<value>",
        arg: "<value>",
        config: "<value>",
      },
    ],
    transportURL: "https://likable-importance.net/",
  },
  persistence: {
    enable: false,
    timeWindow: "<value>",
    maxDataSize: "<value>",
    maxDataTime: "<value>",
    compress: "none",
    destPath: "<value>",
  },
  authType: "manual",
  description: "alliance extremely coaxingly",
  host: "sniveling-order.net",
  port: 9741.69,
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

### `models.InputWef`

```typescript
const value: models.InputWef = {
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
  host: "stiff-baseboard.biz",
  port: 1432.95,
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
    minVersion: "TLSv1.2",
    maxVersion: "TLSv1",
    ocspCheck: true,
    keytab: "<value>",
    principal: "<value>",
    ocspCheckFailClose: true,
  },
  maxActiveReq: 433.31,
  maxRequestsPerSocket: 881300,
  enableProxyHeader: false,
  captureHeaders: false,
  keepAliveTimeout: 3234.04,
  enableHealthCheck: false,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  socketTimeout: 6412.18,
  caFingerprint: "<value>",
  keytab: "<value>",
  principal: "<value>",
  allowMachineIdMismatch: false,
  subscriptions: [
    {
      subscriptionName: "<value>",
      version: "<value>",
      contentFormat: "RenderedText",
      heartbeatInterval: 2153.04,
      batchTimeout: 5580.43,
      readExistingEvents: true,
      sendBookmarks: false,
      compress: false,
      targets: [],
      locale: "nl",
      querySelector: "xml",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      queries: [
        {
          path: "/usr/libexec",
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
    "pivot slight coincide when neatly obediently upbeat evenly blind saturate",
  logFingerprintMismatch: false,
};
```

### `models.InputWinEventLogs`

```typescript
const value: models.InputWinEventLogs = {
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
  ],
  readMode: "newest",
  eventFormat: "xml",
  disableNativeModule: false,
  interval: 6463.86,
  batchSize: 5296.2,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  maxEventBytes: 3079,
  description: "finished evil consign fooey nor yowza finally round",
  disableJsonRendering: true,
  disableXmlRendering: true,
};
```

### `models.InputRawUdp`

```typescript
const value: models.InputRawUdp = {
  id: "<id>",
  type: "raw_udp",
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
  host: "judicious-pliers.info",
  port: 546.34,
  maxBufferSize: 4993.2,
  ipWhitelistRegex: "<value>",
  singleMsgUdpPackets: true,
  ingestRawBytes: true,
  udpSocketRxBufSize: 2807.29,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "motivate frank showy instead darn without aw beyond cop-out",
};
```

### `models.InputJournalFiles`

```typescript
const value: models.InputJournalFiles = {
  id: "<id>",
  type: "journal_files",
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
  path: "/tmp",
  interval: 2154.67,
  journals: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  rules: [
    {
      filter: "<value>",
      description:
        "catalog self-reliant scare frightened voluminous till fooey other",
    },
  ],
  currentBoot: true,
  maxAgeDur: "<value>",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "vengeful repeatedly yippee govern near tricky whose",
};
```

### `models.InputWiz`

```typescript
const value: models.InputWiz = {
  id: "<id>",
  type: "wiz",
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
  endpoint: "<value>",
  authUrl: "https://dependable-riser.name/",
  authAudienceOverride: "<value>",
  clientId: "<id>",
  contentConfig: [],
  requestTimeout: 2735.91,
  keepAliveTime: 4208.71,
  maxMissedKeepAlives: 632.03,
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
  authType: "manual",
  description: "stark cannibalise flint fumigate",
  clientSecret: "<value>",
  textSecret: "<value>",
};
```

### `models.InputWizWebhook`

```typescript
const value: models.InputWizWebhook = {
  id: "<id>",
  type: "wiz_webhook",
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
  host: "neat-widow.org",
  port: 6472.83,
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
  maxActiveReq: 7652.8,
  maxRequestsPerSocket: 661243,
  enableProxyHeader: false,
  captureHeaders: false,
  activityLogSampleRate: 3018.24,
  requestTimeout: 4540.59,
  socketTimeout: 3714.99,
  keepAliveTimeout: 5742.35,
  enableHealthCheck: true,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
  ],
  staleChannelFlushMs: 7977.48,
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
      description: "instead worth trek drain eek below",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
    },
  ],
  description: "reckless acceptable pish and solemnly viciously descendant",
};
```

### `models.InputNetflow`

```typescript
const value: models.InputNetflow = {
  id: "<id>",
  type: "netflow",
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
  host: "official-pilot.net",
  port: 9390.31,
  enablePassThrough: true,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  udpSocketRxBufSize: 2956.03,
  templateCacheMinutes: 7232.01,
  v5Enabled: false,
  v9Enabled: true,
  ipfixEnabled: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description:
    "incidentally gracefully sin if lest weekly certification blissfully considering",
};
```

### `models.InputSecurityLake`

```typescript
const value: models.InputSecurityLake = {
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
  staleChannelFlushMs: 4483.86,
  maxMessages: 4398.07,
  visibilityTimeout: 651.05,
  numReceivers: 3284.87,
  socketTimeout: 7840.45,
  skipOnError: false,
  includeSqsMetadata: true,
  enableAssumeRole: true,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 1160.94,
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
  parquetChunkSizeMB: 2573.09,
  parquetChunkDownloadTimeout: 4489.99,
  checkpointing: {
    enabled: true,
    retries: 263.57,
  },
  pollTimeout: 7611.23,
  encoding: "<value>",
  description: "unless intermesh council",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  tagAfterProcessing: "false",
  processedTagKey: "<value>",
  processedTagValue: "<value>",
};
```

### `models.InputZscalerHec`

```typescript
const value: models.InputZscalerHec = {
  id: "<id>",
  type: "zscaler_hec",
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
  host: "second-hand-starboard.name",
  port: 3809.87,
  authTokens: [
    {
      authType: "manual",
      tokenSecret: "<value>",
      token: "<value>",
      enabled: false,
      description: "vacantly attraction officially concerned",
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
  maxActiveReq: 8385.05,
  maxRequestsPerSocket: 698418,
  enableProxyHeader: true,
  captureHeaders: false,
  activityLogSampleRate: 571.68,
  requestTimeout: 7213.3,
  socketTimeout: 3089.96,
  keepAliveTimeout: 8345.51,
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
  ],
  hecAcks: true,
  accessControlAllowOrigin: [
    "<value 1>",
  ],
  accessControlAllowHeaders: [
    "<value 1>",
    "<value 2>",
  ],
  emitTokenMetrics: true,
  description: "nice fax solidly fog brr doubtfully gee apud incline now",
};
```

### `models.InputCloudflareHec`

```typescript
const value: models.InputCloudflareHec = {
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
  host: "disloyal-challenge.name",
  port: 9753.01,
  authTokens: [
    {
      authType: "manual",
      tokenSecret: "<value>",
      token: "<value>",
      enabled: false,
      description: "pro pish equate cumbersome unwritten while unless right",
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
  maxActiveReq: 4987.89,
  maxRequestsPerSocket: 655252,
  enableProxyHeader: false,
  captureHeaders: true,
  activityLogSampleRate: 6374.67,
  requestTimeout: 2259.74,
  socketTimeout: 8058.3,
  keepAliveTimeout: 7840.92,
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
  breakerRulesets: [
    "<value 1>",
  ],
  staleChannelFlushMs: 9558.71,
  accessControlAllowOrigin: [
    "<value 1>",
    "<value 2>",
  ],
  accessControlAllowHeaders: [
    "<value 1>",
    "<value 2>",
  ],
  emitTokenMetrics: true,
  description: "loose puzzled well but",
};
```

