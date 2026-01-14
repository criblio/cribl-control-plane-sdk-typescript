# Input


## Supported Types

### `models.InputCollection`

```typescript
const value: models.InputCollection = {
  sendToRoutes: true,
  id: "<id>",
  type: "collection",
  disabled: false,
  pipeline: "<value>",
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
    mode: "smart",
    maxBufferSize: 1717.96,
    commitFrequency: 1412.18,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/opt/include",
    compress: "none",
    pqControls: {},
  },
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  staleChannelFlushMs: 5307.81,
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
  sendToRoutes: true,
  id: "<id>",
  type: "kafka",
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
  brokers: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  topics: [
    "<value 1>",
    "<value 2>",
  ],
  groupId: "<id>",
  fromBeginning: true,
  kafkaSchemaRegistry: {
    disabled: true,
    schemaRegistryURL: "https://unfinished-decongestant.org",
    connectionTimeout: 5018.66,
    requestTimeout: 4285.6,
    maxRetries: 9127.09,
    auth: {
      disabled: false,
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
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1.3",
    },
  },
  connectionTimeout: 9152.39,
  requestTimeout: 8975.46,
  maxRetries: 7140.45,
  maxBackOff: 1119.07,
  initialBackoff: 2881.24,
  backoffRate: 2817.87,
  authenticationTimeout: 7812.82,
  reauthenticationThreshold: 4306.3,
  sasl: {
    disabled: false,
    username: "Lilyan_Kub66",
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
    disabled: true,
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
  sendToRoutes: true,
  id: "<id>",
  type: "msk",
  disabled: false,
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
  brokers: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  topics: [
    "<value 1>",
  ],
  groupId: "<id>",
  fromBeginning: false,
  sessionTimeout: 2610.43,
  rebalanceTimeout: 9334.03,
  heartbeatInterval: 6019.57,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  kafkaSchemaRegistry: {
    disabled: true,
    schemaRegistryURL: "https://unfinished-decongestant.org",
    connectionTimeout: 5018.66,
    requestTimeout: 4285.6,
    maxRetries: 9127.09,
    auth: {
      disabled: false,
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
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1.3",
    },
  },
  connectionTimeout: 3691.44,
  requestTimeout: 6670.84,
  maxRetries: 9992.57,
  maxBackOff: 95.8,
  initialBackoff: 3598.73,
  backoffRate: 7153.94,
  authenticationTimeout: 4857.79,
  reauthenticationThreshold: 6286.66,
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
  durationSeconds: 8663.73,
  tls: {
    disabled: true,
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
  autoCommitInterval: 8094.14,
  autoCommitThreshold: 1153.29,
  maxBytesPerPartition: 3234.81,
  maxBytes: 3027.03,
  maxSocketErrors: 4628.44,
  description: "ouch pliers tributary but inwardly",
  awsApiKey: "<value>",
  awsSecret: "<value>",
};
```

### `models.InputHttp`

```typescript
const value: models.InputHttp = {
  sendToRoutes: true,
  id: "<id>",
  type: "http",
  disabled: false,
  pipeline: "<value>",
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
    mode: "smart",
    maxBufferSize: 1717.96,
    commitFrequency: 1412.18,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/opt/include",
    compress: "none",
    pqControls: {},
  },
  host: "moral-provision.info",
  port: 1566.43,
  authTokens: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  tls: {
    disabled: true,
    requestCert: true,
    rejectUnauthorized: true,
    commonNameRegex: "<value>",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1.1",
  },
  maxActiveReq: 7292.46,
  maxRequestsPerSocket: 276209,
  enableProxyHeader: false,
  captureHeaders: false,
  activityLogSampleRate: 934.67,
  requestTimeout: 1804.56,
  socketTimeout: 9664.45,
  keepAliveTimeout: 9555.33,
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
      description: "positively divine about woot",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
    },
  ],
  description: "anti however before suddenly about which",
};
```

### `models.InputSplunk`

```typescript
const value: models.InputSplunk = {
  sendToRoutes: false,
  id: "<id>",
  type: "splunk",
  disabled: true,
  pipeline: "<value>",
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
    mode: "smart",
    maxBufferSize: 1717.96,
    commitFrequency: 1412.18,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/opt/include",
    compress: "none",
    pqControls: {},
  },
  host: "insignificant-councilman.info",
  port: 2204.51,
  tls: {
    disabled: true,
    requestCert: true,
    rejectUnauthorized: true,
    commonNameRegex: "<value>",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1.1",
  },
  ipWhitelistRegex: "<value>",
  maxActiveCxn: 5287.93,
  socketIdleTimeout: 4279.79,
  socketEndingMaxWait: 2470.73,
  socketMaxLifespan: 763.02,
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
  staleChannelFlushMs: 4561.94,
  authTokens: [
    {
      token: "<value>",
      description:
        "consign though fooey preclude embarrassment till bright aboard opposite hmph",
    },
  ],
  maxS2Sversion: "v4",
  description: "to pish safe boo conceptualize peppery abaft",
  useFwdTimezone: false,
  dropControlFields: true,
  extractMetrics: false,
  compress: "always",
};
```

### `models.InputSplunkSearch`

```typescript
const value: models.InputSplunkSearch = {
  sendToRoutes: true,
  id: "<id>",
  type: "splunk_search",
  disabled: true,
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
    mode: "smart",
    maxBufferSize: 1717.96,
    commitFrequency: 1412.18,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/opt/include",
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
  logLevel: "debug",
  requestTimeout: 3970.64,
  useRoundRobinDns: true,
  rejectUnauthorized: true,
  encoding: "<value>",
  keepAliveTime: 171.14,
  jobTimeout: "<value>",
  maxMissedKeepAlives: 1102.95,
  ttl: "<value>",
  ignoreGroupJobsLimit: true,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  retryRules: {
    type: "static",
    interval: 3153.33,
    limit: 2659.11,
    multiplier: 376.03,
    codes: [
      5006.8,
      7560.55,
      2139.95,
    ],
    enableHeader: false,
    retryConnectTimeout: false,
    retryConnectReset: false,
  },
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
  ],
  staleChannelFlushMs: 9303.69,
  authType: "credentialsSecret",
  description: "dowse magnetize until ideal ew versus husk trouser",
  username: "Felipe23",
  password: "UGpeaNdPL8ng3Fh",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://untried-statue.biz/",
  secretParamName: "<value>",
  secret: "<value>",
  tokenAttributeName: "<value>",
  authHeaderExpr: "<value>",
  tokenTimeoutSecs: 3063.92,
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
  id: "<id>",
  type: "splunk_hec",
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
  host: "ordinary-trash.net",
  port: 8739.92,
  authTokens: [
    {
      authType: "secret",
      tokenSecret: "<value>",
      token: "<value>",
      enabled: false,
      description: "psst too sniff over although er",
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
    requestCert: true,
    rejectUnauthorized: true,
    commonNameRegex: "<value>",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1.1",
  },
  maxActiveReq: 769.06,
  maxRequestsPerSocket: 633445,
  enableProxyHeader: false,
  captureHeaders: false,
  activityLogSampleRate: 5413.24,
  requestTimeout: 9005.63,
  socketTimeout: 5366.46,
  keepAliveTimeout: 5340.04,
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
  splunkHecAcks: true,
  breakerRulesets: [
    "<value 1>",
  ],
  staleChannelFlushMs: 37.27,
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
  ],
  emitTokenMetrics: false,
  description: "slushy hepatitis debut hm",
};
```

### `models.InputAzureBlob`

```typescript
const value: models.InputAzureBlob = {
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
  visibilityTimeout: 9339.82,
  numReceivers: 5576.42,
  maxMessages: 7254.03,
  servicePeriodSecs: 9073.65,
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
  staleChannelFlushMs: 9794.12,
  parquetChunkSizeMB: 2959.58,
  parquetChunkDownloadTimeout: 6517.05,
  authType: "clientSecret",
  description: "indeed openly up wetly valuable ouch riser equatorial",
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
  sendToRoutes: false,
  id: "<id>",
  type: "elastic",
  disabled: false,
  pipeline: "<value>",
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
    mode: "smart",
    maxBufferSize: 1717.96,
    commitFrequency: 1412.18,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/opt/include",
    compress: "none",
    pqControls: {},
  },
  host: "stale-discourse.name",
  port: 2842.65,
  tls: {
    disabled: true,
    requestCert: true,
    rejectUnauthorized: true,
    commonNameRegex: "<value>",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1.1",
  },
  maxActiveReq: 9762.55,
  maxRequestsPerSocket: 218129,
  enableProxyHeader: true,
  captureHeaders: true,
  activityLogSampleRate: 5252.11,
  requestTimeout: 7948.46,
  socketTimeout: 7018.17,
  keepAliveTimeout: 8330.71,
  enableHealthCheck: false,
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
    username: "Deon.Buckridge-Altenwerth8",
    password: "M0cd_ogL9HtpZNw",
    credentialsSecret: "<value>",
    url: "https://gaseous-hierarchy.org/",
    rejectUnauthorized: true,
    removeHeaders: [
      "<value 1>",
    ],
    timeoutSec: 9081.55,
  },
  description: "than mockingly capitalise cheerfully",
  username: "Elsa23",
  password: "FmVRDEkfXqSUuye",
  credentialsSecret: "<value>",
  authTokens: [
    "<value 1>",
    "<value 2>",
  ],
  customAPIVersion: "<value>",
};
```

### `models.InputConfluentCloud`

```typescript
const value: models.InputConfluentCloud = {
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
    mode: "smart",
    maxBufferSize: 1717.96,
    commitFrequency: 1412.18,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/opt/include",
    compress: "none",
    pqControls: {},
  },
  brokers: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  tls: {
    disabled: true,
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
  ],
  groupId: "<id>",
  fromBeginning: true,
  kafkaSchemaRegistry: {
    disabled: true,
    schemaRegistryURL: "https://unfinished-decongestant.org",
    connectionTimeout: 5018.66,
    requestTimeout: 4285.6,
    maxRetries: 9127.09,
    auth: {
      disabled: false,
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
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1.3",
    },
  },
  connectionTimeout: 9243.43,
  requestTimeout: 7542.92,
  maxRetries: 1623.19,
  maxBackOff: 1264.79,
  initialBackoff: 614.07,
  backoffRate: 8676.73,
  authenticationTimeout: 173.2,
  reauthenticationThreshold: 8004.77,
  sasl: {
    disabled: false,
    username: "Lilyan_Kub66",
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
  sessionTimeout: 273.28,
  rebalanceTimeout: 7569.19,
  heartbeatInterval: 5951.71,
  autoCommitInterval: 4048.53,
  autoCommitThreshold: 9060.05,
  maxBytesPerPartition: 7602.77,
  maxBytes: 285.77,
  maxSocketErrors: 5347.24,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description:
    "enchanting noteworthy ouch against into boo creative anesthetize roughly",
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
    mode: "smart",
    maxBufferSize: 1717.96,
    commitFrequency: 1412.18,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/opt/include",
    compress: "none",
    pqControls: {},
  },
  host: "grizzled-gown.biz",
  port: 5908.72,
  tls: {
    disabled: true,
    requestCert: true,
    rejectUnauthorized: true,
    commonNameRegex: "<value>",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1.1",
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
  sendToRoutes: false,
  id: "<id>",
  type: "loki",
  disabled: false,
  pipeline: "<value>",
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
    mode: "smart",
    maxBufferSize: 1717.96,
    commitFrequency: 1412.18,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/opt/include",
    compress: "none",
    pqControls: {},
  },
  host: "carefree-co-producer.name",
  port: 5913.81,
  tls: {
    disabled: true,
    requestCert: true,
    rejectUnauthorized: true,
    commonNameRegex: "<value>",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1.1",
  },
  maxActiveReq: 3993.27,
  maxRequestsPerSocket: 948702,
  enableProxyHeader: true,
  captureHeaders: false,
  activityLogSampleRate: 7251.79,
  requestTimeout: 1109.26,
  socketTimeout: 8330.3,
  keepAliveTimeout: 2404.75,
  enableHealthCheck: false,
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
  description: "maroon but consequently",
  username: "Domenick_Heathcote91",
  password: "gVFzXj8DoFY3c6z",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://intrepid-technician.net",
  secretParamName: "<value>",
  secret: "<value>",
  tokenAttributeName: "<value>",
  authHeaderExpr: "<value>",
  tokenTimeoutSecs: 146.79,
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
  sendToRoutes: false,
  id: "<id>",
  type: "prometheus_rw",
  disabled: true,
  pipeline: "<value>",
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
    mode: "smart",
    maxBufferSize: 1717.96,
    commitFrequency: 1412.18,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/opt/include",
    compress: "none",
    pqControls: {},
  },
  host: "noteworthy-suspension.com",
  port: 5425.93,
  tls: {
    disabled: true,
    requestCert: true,
    rejectUnauthorized: true,
    commonNameRegex: "<value>",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1.1",
  },
  maxActiveReq: 2559.53,
  maxRequestsPerSocket: 77228,
  enableProxyHeader: false,
  captureHeaders: true,
  activityLogSampleRate: 2707.33,
  requestTimeout: 8690.29,
  socketTimeout: 889.37,
  keepAliveTimeout: 1630.1,
  enableHealthCheck: true,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  prometheusAPI: "<value>",
  authType: "oauth",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "tabletop optimal sans ah valiantly",
  username: "Trent.Casper",
  password: "l6ZjiY_EdB5gTx4",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://troubled-minister.com",
  secretParamName: "<value>",
  secret: "<value>",
  tokenAttributeName: "<value>",
  authHeaderExpr: "<value>",
  tokenTimeoutSecs: 1323.48,
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
  id: "<id>",
  type: "prometheus",
  disabled: true,
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
    mode: "smart",
    maxBufferSize: 1717.96,
    commitFrequency: 1412.18,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/opt/include",
    compress: "none",
    pqControls: {},
  },
  dimensionList: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  discoveryType: "static",
  interval: 5538.93,
  logLevel: "error",
  rejectUnauthorized: false,
  timeout: 2125.09,
  keepAliveTime: 8778.22,
  jobTimeout: "<value>",
  maxMissedKeepAlives: 1715.9,
  ttl: "<value>",
  ignoreGroupJobsLimit: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  authType: "secret",
  description: "drat given vestment",
  targetList: [
    "<value 1>",
  ],
  recordType: "AAAA",
  scrapePort: 8693.9,
  nameList: [
    "<value 1>",
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
      Values: [],
    },
  ],
  awsSecretKey: "<value>",
  region: "<value>",
  endpoint: "<value>",
  signatureVersion: "v2",
  reuseConnections: true,
  enableAssumeRole: true,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 5787.16,
  username: "Edna.Bode59",
  password: "Km_4ZcnFhsMsMjN",
  credentialsSecret: "<value>",
};
```

### `models.InputEdgePrometheus`

```typescript
const value: models.InputEdgePrometheus = {
  sendToRoutes: true,
  id: "<id>",
  type: "edge_prometheus",
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
  dimensionList: [
    "<value 1>",
    "<value 2>",
  ],
  discoveryType: "dns",
  interval: 7099.51,
  timeout: 6560.58,
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
  description: "foodstuffs complete so woot boohoo discrete while hmph duh",
  targets: [
    {
      protocol: "https",
      host: "mad-carnival.com",
      port: 8409.15,
      path: "/home/user",
    },
  ],
  recordType: "A",
  scrapePort: 2333.43,
  nameList: [
    "<value 1>",
    "<value 2>",
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
      Values: [],
    },
  ],
  awsSecretKey: "<value>",
  region: "<value>",
  endpoint: "<value>",
  signatureVersion: "v2",
  reuseConnections: false,
  rejectUnauthorized: true,
  enableAssumeRole: false,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 9570.79,
  scrapeProtocolExpr: "<value>",
  scrapePortExpr: "<value>",
  scrapePathExpr: "<value>",
  podFilter: [
    {
      filter: "<value>",
      description:
        "woefully newsletter fathom ack who than productive edge bah",
    },
  ],
  username: "Sylvia.Kertzmann",
  password: "LJXQTRhnACspZCH",
  credentialsSecret: "<value>",
};
```

### `models.InputOffice365Mgmt`

```typescript
const value: models.InputOffice365Mgmt = {
  sendToRoutes: true,
  id: "<id>",
  type: "office365_mgmt",
  disabled: true,
  pipeline: "<value>",
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
    mode: "smart",
    maxBufferSize: 1717.96,
    commitFrequency: 1412.18,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/opt/include",
    compress: "none",
    pqControls: {},
  },
  planType: "gcc_high",
  tenantId: "<id>",
  appId: "<id>",
  timeout: 1421.9,
  keepAliveTime: 1799.63,
  jobTimeout: "<value>",
  maxMissedKeepAlives: 2725.58,
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
      description: "towards pick hmph boring gosh",
      interval: 1438.92,
      logLevel: "info",
      enabled: false,
    },
  ],
  ingestionLag: 6390.37,
  retryRules: {
    type: "none",
    interval: 2764.09,
    limit: 9039.82,
    multiplier: 1648,
    codes: [
      1223.37,
      608.99,
      2918.61,
    ],
    enableHeader: true,
    retryConnectTimeout: false,
    retryConnectReset: false,
  },
  authType: "manual",
  description: "near absent submitter brightly steeple scarcely that ah",
  clientSecret: "<value>",
  textSecret: "<value>",
};
```

### `models.InputOffice365Service`

```typescript
const value: models.InputOffice365Service = {
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
  planType: "enterprise_gcc",
  tenantId: "<id>",
  appId: "<id>",
  timeout: 4274.38,
  keepAliveTime: 1113.52,
  jobTimeout: "<value>",
  maxMissedKeepAlives: 2638.22,
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
      description: "whose acclaimed testify ha despite follower sans",
      interval: 1354.52,
      logLevel: "debug",
      enabled: false,
    },
  ],
  retryRules: {
    type: "none",
    interval: 2764.09,
    limit: 9039.82,
    multiplier: 1648,
    codes: [
      1223.37,
      608.99,
      2918.61,
    ],
    enableHeader: true,
    retryConnectTimeout: false,
    retryConnectReset: false,
  },
  authType: "manual",
  description: "yuck reckless which goodwill",
  clientSecret: "<value>",
  textSecret: "<value>",
};
```

### `models.InputOffice365MsgTrace`

```typescript
const value: models.InputOffice365MsgTrace = {
  sendToRoutes: true,
  id: "<id>",
  type: "office365_msg_trace",
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
    mode: "smart",
    maxBufferSize: 1717.96,
    commitFrequency: 1412.18,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/opt/include",
    compress: "none",
    pqControls: {},
  },
  url: "https://sturdy-necklace.org",
  interval: 7291.07,
  startDate: "<value>",
  endDate: "<value>",
  timeout: 3132.64,
  disableTimeFilter: true,
  authType: "manual",
  rescheduleDroppedTasks: false,
  maxTaskReschedule: 3510.6,
  logLevel: "silly",
  jobTimeout: "<value>",
  keepAliveTime: 5626.75,
  maxMissedKeepAlives: 6560.69,
  ttl: "<value>",
  ignoreGroupJobsLimit: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  retryRules: {
    type: "none",
    interval: 2764.09,
    limit: 9039.82,
    multiplier: 1648,
    codes: [
      1223.37,
      608.99,
      2918.61,
    ],
    enableHeader: true,
    retryConnectTimeout: false,
    retryConnectReset: false,
  },
  description: "economise putrefy ack ick madly handful moisten amid access",
  username: "Silas_Goldner48",
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
  sendToRoutes: true,
  id: "<id>",
  type: "eventhub",
  disabled: true,
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
    mode: "smart",
    maxBufferSize: 1717.96,
    commitFrequency: 1412.18,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/opt/include",
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
  connectionTimeout: 9238.25,
  requestTimeout: 5438.18,
  maxRetries: 9230.31,
  maxBackOff: 2101.71,
  initialBackoff: 9741.86,
  backoffRate: 3426.22,
  authenticationTimeout: 8021.76,
  reauthenticationThreshold: 8121.91,
  sasl: {
    disabled: true,
    authType: "manual",
    password: "tfATUqXAfby_x5u",
    textSecret: "<value>",
    mechanism: "oauthbearer",
    username: "Marge.Hegmann",
    clientSecretAuthType: "manual",
    clientSecret: "<value>",
    clientTextSecret: "<value>",
    certificateName: "<value>",
    certPath: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    oauthEndpoint: "https://login.partner.microsoftonline.cn",
    clientId: "<id>",
    tenantId: "<id>",
    scope: "<value>",
  },
  tls: {
    disabled: false,
    rejectUnauthorized: true,
  },
  sessionTimeout: 2633.53,
  rebalanceTimeout: 3000.96,
  heartbeatInterval: 6273.62,
  autoCommitInterval: 8652.9,
  autoCommitThreshold: 7069.03,
  maxBytesPerPartition: 8788.12,
  maxBytes: 5130.3,
  maxSocketErrors: 4123.59,
  minimizeDuplicates: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "since even so silently hungrily bonnet robust",
};
```

### `models.InputExec`

```typescript
const value: models.InputExec = {
  sendToRoutes: true,
  id: "<id>",
  type: "exec",
  disabled: true,
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
  command: "<value>",
  retries: 100.16,
  scheduleType: "cronSchedule",
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  staleChannelFlushMs: 8470.95,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description:
    "or nougat ugh ugh interchange retrospectivity if selfishly poorly",
  interval: 1082.22,
  cronSchedule: "<value>",
};
```

### `models.InputFirehose`

```typescript
const value: models.InputFirehose = {
  sendToRoutes: false,
  id: "<id>",
  type: "firehose",
  disabled: true,
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
  host: "black-amendment.biz",
  port: 5374.58,
  authTokens: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  tls: {
    disabled: true,
    requestCert: true,
    rejectUnauthorized: true,
    commonNameRegex: "<value>",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1.1",
  },
  maxActiveReq: 5726.88,
  maxRequestsPerSocket: 579333,
  enableProxyHeader: false,
  captureHeaders: true,
  activityLogSampleRate: 8819.28,
  requestTimeout: 9917.89,
  socketTimeout: 5197.13,
  keepAliveTimeout: 9188.71,
  enableHealthCheck: false,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "porter brr that given orchid",
};
```

### `models.InputGooglePubsub`

```typescript
const value: models.InputGooglePubsub = {
  sendToRoutes: false,
  id: "<id>",
  type: "google_pubsub",
  disabled: false,
  pipeline: "<value>",
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
    mode: "smart",
    maxBufferSize: 1717.96,
    commitFrequency: 1412.18,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/opt/include",
    compress: "none",
    pqControls: {},
  },
  topicName: "<value>",
  subscriptionName: "<value>",
  monitorSubscription: false,
  createTopic: false,
  createSubscription: false,
  region: "<value>",
  googleAuthMethod: "auto",
  serviceAccountCredentials: "<value>",
  secret: "<value>",
  maxBacklog: 5475.03,
  concurrency: 3229.57,
  requestTimeout: 563.42,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "gosh outnumber attend brr times",
  orderedDelivery: true,
};
```

### `models.InputCribl`

```typescript
const value: models.InputCribl = {
  sendToRoutes: false,
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
    mode: "smart",
    maxBufferSize: 1717.96,
    commitFrequency: 1412.18,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/opt/include",
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
  description: "respray which considering adult tabulate approach",
};
```

### `models.InputCriblTcp`

```typescript
const value: models.InputCriblTcp = {
  sendToRoutes: true,
  id: "<id>",
  type: "cribl_tcp",
  disabled: true,
  pipeline: "<value>",
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
    mode: "smart",
    maxBufferSize: 1717.96,
    commitFrequency: 1412.18,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/opt/include",
    compress: "none",
    pqControls: {},
  },
  host: "bleak-advertisement.net",
  port: 4421.42,
  tls: {
    disabled: true,
    requestCert: true,
    rejectUnauthorized: true,
    commonNameRegex: "<value>",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1.1",
  },
  maxActiveCxn: 481.62,
  socketIdleTimeout: 5081.68,
  socketEndingMaxWait: 669.3,
  socketMaxLifespan: 4260.65,
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
      description: "without slipper appropriate",
    },
  ],
  description:
    "ribbon upon joyfully yuck disconnection failing lightly mousse sudden between",
};
```

### `models.InputCriblHttp`

```typescript
const value: models.InputCriblHttp = {
  sendToRoutes: true,
  id: "<id>",
  type: "cribl_http",
  disabled: true,
  pipeline: "<value>",
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
    mode: "smart",
    maxBufferSize: 1717.96,
    commitFrequency: 1412.18,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/opt/include",
    compress: "none",
    pqControls: {},
  },
  host: "ruddy-alert.org",
  port: 2912.8,
  authTokens: [
    {
      tokenSecret: "<value>",
      enabled: true,
      description: "without slipper appropriate",
    },
  ],
  tls: {
    disabled: true,
    requestCert: true,
    rejectUnauthorized: true,
    commonNameRegex: "<value>",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1.1",
  },
  maxActiveReq: 9485.59,
  maxRequestsPerSocket: 642964,
  enableProxyHeader: false,
  captureHeaders: false,
  activityLogSampleRate: 7297.45,
  requestTimeout: 9093.35,
  socketTimeout: 5310.92,
  keepAliveTimeout: 9495.33,
  enableHealthCheck: true,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "although once before",
};
```

### `models.InputCriblLakeHttp`

```typescript
const value: models.InputCriblLakeHttp = {
  sendToRoutes: true,
  id: "<id>",
  type: "cribl_lake_http",
  disabled: true,
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
    mode: "smart",
    maxBufferSize: 1717.96,
    commitFrequency: 1412.18,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/opt/include",
    compress: "none",
    pqControls: {},
  },
  host: "rubbery-curl.name",
  port: 1880.73,
  authTokens: [
    "<value 1>",
  ],
  tls: {
    disabled: true,
    requestCert: true,
    rejectUnauthorized: true,
    commonNameRegex: "<value>",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1.1",
  },
  maxActiveReq: 792.86,
  maxRequestsPerSocket: 64219,
  enableProxyHeader: false,
  captureHeaders: true,
  activityLogSampleRate: 4284.7,
  requestTimeout: 5461.22,
  socketTimeout: 2557.07,
  keepAliveTimeout: 9268.56,
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
      description: "so provided intensely",
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
  description: "gee incidentally ample desk speedily",
};
```

### `models.InputTcpjson`

```typescript
const value: models.InputTcpjson = {
  sendToRoutes: false,
  id: "<id>",
  type: "tcpjson",
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
    mode: "smart",
    maxBufferSize: 1717.96,
    commitFrequency: 1412.18,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/opt/include",
    compress: "none",
    pqControls: {},
  },
  host: "quarrelsome-character.info",
  port: 7055.47,
  tls: {
    disabled: true,
    requestCert: true,
    rejectUnauthorized: true,
    commonNameRegex: "<value>",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1.1",
  },
  ipWhitelistRegex: "<value>",
  maxActiveCxn: 5503.1,
  socketIdleTimeout: 712.24,
  socketEndingMaxWait: 4264.81,
  socketMaxLifespan: 8716.8,
  enableProxyHeader: true,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  enableLoadBalancing: true,
  authType: "secret",
  description: "flickering oh although debut needily reluctantly what",
  authToken: "<value>",
  textSecret: "<value>",
};
```

### `models.InputSystemMetrics`

```typescript
const value: models.InputSystemMetrics = {
  sendToRoutes: true,
  id: "<id>",
  type: "system_metrics",
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
  interval: 5881.76,
  host: {
    mode: "disabled",
    custom: {
      system: {
        mode: "custom",
        processes: true,
      },
      cpu: {
        mode: "basic",
        perCpu: false,
        detail: true,
        time: false,
      },
      memory: {
        mode: "custom",
        detail: true,
      },
      network: {
        mode: "all",
        detail: true,
        protocols: false,
        devices: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        perInterface: true,
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
    dockerTimeout: 9942.78,
    filters: [
      {
        expr: "<value>",
      },
    ],
    allContainers: false,
    perDevice: true,
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
    compress: "gzip",
    destPath: "<value>",
  },
  description: "circa ugh athletic import so slap pfft hexagon righteously",
};
```

### `models.InputSystemState`

```typescript
const value: models.InputSystemState = {
  sendToRoutes: true,
  id: "<id>",
  type: "system_state",
  disabled: true,
  pipeline: "<value>",
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
    mode: "smart",
    maxBufferSize: 1717.96,
    commitFrequency: 1412.18,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/opt/include",
    compress: "none",
    pqControls: {},
  },
  interval: 4822.09,
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
      enable: false,
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
      enable: false,
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
  description: "hollow yuck diligently",
};
```

### `models.InputKubeMetrics`

```typescript
const value: models.InputKubeMetrics = {
  sendToRoutes: false,
  id: "<id>",
  type: "kube_metrics",
  disabled: false,
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
  interval: 5289.1,
  rules: [
    {
      filter: "<value>",
      description: "gerbil who despite each ha deliquesce",
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
    "till hydrocarbon boo eek next uh-huh signature nor mozzarella subdued",
};
```

### `models.InputKubeLogs`

```typescript
const value: models.InputKubeLogs = {
  sendToRoutes: false,
  id: "<id>",
  type: "kube_logs",
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
    mode: "smart",
    maxBufferSize: 1717.96,
    commitFrequency: 1412.18,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/opt/include",
    compress: "none",
    pqControls: {},
  },
  interval: 6007.23,
  rules: [
    {
      filter: "<value>",
      description: "blah that regarding brochure sideboard pleased prudent",
    },
  ],
  timestamps: true,
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
    "<value 3>",
  ],
  staleChannelFlushMs: 1393.33,
  enableLoadBalancing: false,
  description: "rightfully nifty how unaccountably",
};
```

### `models.InputKubeEvents`

```typescript
const value: models.InputKubeEvents = {
  sendToRoutes: true,
  id: "<id>",
  type: "kube_events",
  disabled: true,
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
  rules: [
    {
      filter: "<value>",
      description: "gerbil who despite each ha deliquesce",
    },
  ],
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description:
    "hollow recount bah furthermore likewise pro behold fat compassionate",
};
```

### `models.InputWindowsMetrics`

```typescript
const value: models.InputWindowsMetrics = {
  sendToRoutes: false,
  id: "<id>",
  type: "windows_metrics",
  disabled: false,
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
  interval: 5565.51,
  host: {
    mode: "basic",
    custom: {
      system: {
        mode: "all",
        detail: false,
      },
      cpu: {
        mode: "disabled",
        perCpu: false,
        detail: true,
        time: true,
      },
      memory: {
        mode: "custom",
        detail: true,
      },
      network: {
        mode: "basic",
        detail: true,
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
    enable: true,
    timeWindow: "<value>",
    maxDataSize: "<value>",
    maxDataTime: "<value>",
    compress: "none",
    destPath: "<value>",
  },
  disableNativeModule: false,
  description:
    "mountain between once incandescence pfft meanwhile wheel against",
};
```

### `models.InputCrowdstrike`

```typescript
const value: models.InputCrowdstrike = {
  sendToRoutes: true,
  id: "<id>",
  type: "crowdstrike",
  disabled: true,
  pipeline: "<value>",
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
  staleChannelFlushMs: 2238.24,
  maxMessages: 2190.92,
  visibilityTimeout: 3052,
  numReceivers: 1035.25,
  socketTimeout: 7130.13,
  skipOnError: true,
  includeSqsMetadata: true,
  enableAssumeRole: true,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 3840.8,
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
    retries: 4599.59,
  },
  pollTimeout: 2373.94,
  encoding: "<value>",
  description: "notwithstanding as why jubilant although",
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
  id: "<id>",
  type: "datadog_agent",
  disabled: false,
  pipeline: "<value>",
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
    mode: "smart",
    maxBufferSize: 1717.96,
    commitFrequency: 1412.18,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/opt/include",
    compress: "none",
    pqControls: {},
  },
  host: "jagged-flat.name",
  port: 9434.99,
  tls: {
    disabled: true,
    requestCert: true,
    rejectUnauthorized: true,
    commonNameRegex: "<value>",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1.1",
  },
  maxActiveReq: 3784.52,
  maxRequestsPerSocket: 746296,
  enableProxyHeader: true,
  captureHeaders: true,
  activityLogSampleRate: 8039.38,
  requestTimeout: 7657.4,
  socketTimeout: 771,
  keepAliveTimeout: 3582.28,
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
    rejectUnauthorized: false,
  },
  description:
    "clonk yearly motionless override that bitterly sans thunderbolt lashes",
};
```

### `models.InputDatagen`

```typescript
const value: models.InputDatagen = {
  sendToRoutes: false,
  id: "<id>",
  type: "datagen",
  disabled: true,
  pipeline: "<value>",
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
    mode: "smart",
    maxBufferSize: 1717.96,
    commitFrequency: 1412.18,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/opt/include",
    compress: "none",
    pqControls: {},
  },
  samples: [
    {
      sample: "<value>",
      eventsPerSec: 777.05,
    },
  ],
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "yippee hmph basic narrate amid after across openly though",
};
```

### `models.InputHttpRaw`

```typescript
const value: models.InputHttpRaw = {
  sendToRoutes: true,
  id: "<id>",
  type: "http_raw",
  disabled: false,
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
  host: "smart-role.info",
  port: 9593.11,
  authTokens: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  tls: {
    disabled: true,
    requestCert: true,
    rejectUnauthorized: true,
    commonNameRegex: "<value>",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1.1",
  },
  maxActiveReq: 9672.98,
  maxRequestsPerSocket: 577018,
  enableProxyHeader: true,
  captureHeaders: true,
  activityLogSampleRate: 2454.06,
  requestTimeout: 6101.23,
  socketTimeout: 3165.33,
  keepAliveTimeout: 3176.94,
  enableHealthCheck: false,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  breakerRulesets: [
    "<value 1>",
  ],
  staleChannelFlushMs: 9324.25,
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
  ],
  authTokensExt: [
    {
      token: "<value>",
      description: "positively divine about woot",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
    },
  ],
  description:
    "whether provided distant that manner without equate finally know",
};
```

### `models.InputKinesis`

```typescript
const value: models.InputKinesis = {
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
  serviceInterval: 7638.01,
  shardExpr: "<value>",
  shardIteratorType: "LATEST",
  payloadFormat: "cribl",
  getRecordsLimit: 4071.84,
  getRecordsLimitTotal: 5657.45,
  loadBalancingAlgorithm: "RoundRobin",
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
  durationSeconds: 5699.58,
  verifyKPLCheckSums: true,
  avoidDuplicates: true,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "lounge against nicely dirty under urgently yum now insolence",
  awsApiKey: "<value>",
  awsSecret: "<value>",
};
```

### `models.InputCriblmetrics`

```typescript
const value: models.InputCriblmetrics = {
  sendToRoutes: true,
  id: "<id>",
  type: "criblmetrics",
  disabled: true,
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
    mode: "smart",
    maxBufferSize: 1717.96,
    commitFrequency: 1412.18,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/opt/include",
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
  description: "present annual alongside",
};
```

### `models.InputMetrics`

```typescript
const value: models.InputMetrics = {
  sendToRoutes: true,
  id: "<id>",
  type: "metrics",
  disabled: false,
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
  host: "questionable-commodity.biz",
  udpPort: 4101.12,
  tcpPort: 9929.73,
  maxBufferSize: 9686.57,
  ipWhitelistRegex: "<value>",
  enableProxyHeader: false,
  tls: {
    disabled: true,
    requestCert: true,
    rejectUnauthorized: true,
    commonNameRegex: "<value>",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1.1",
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  udpSocketRxBufSize: 3131.4,
  description: "woot similar wretched",
};
```

### `models.InputS3`

```typescript
const value: models.InputS3 = {
  sendToRoutes: false,
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
  signatureVersion: "v2",
  reuseConnections: true,
  rejectUnauthorized: true,
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
  ],
  staleChannelFlushMs: 2874.19,
  maxMessages: 3288.89,
  visibilityTimeout: 4404.3,
  numReceivers: 1993.11,
  socketTimeout: 9001.62,
  skipOnError: false,
  includeSqsMetadata: false,
  enableAssumeRole: true,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 3227.03,
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
  parquetChunkSizeMB: 359,
  parquetChunkDownloadTimeout: 9177.75,
  checkpointing: {
    enabled: true,
    retries: 4599.59,
  },
  pollTimeout: 3519.43,
  encoding: "<value>",
  tagAfterProcessing: false,
  description: "ouch fooey down reorganisation unique",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  processedTagKey: "<value>",
  processedTagValue: "<value>",
};
```

### `models.InputS3Inventory`

```typescript
const value: models.InputS3Inventory = {
  sendToRoutes: false,
  id: "<id>",
  type: "s3_inventory",
  disabled: true,
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
  reuseConnections: false,
  rejectUnauthorized: true,
  breakerRulesets: [
    "<value 1>",
  ],
  staleChannelFlushMs: 6997.08,
  maxMessages: 6483.81,
  visibilityTimeout: 628.77,
  numReceivers: 7662.59,
  socketTimeout: 4368.84,
  skipOnError: false,
  includeSqsMetadata: false,
  enableAssumeRole: false,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 4386.42,
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
  parquetChunkSizeMB: 8211.71,
  parquetChunkDownloadTimeout: 6004.27,
  checkpointing: {
    enabled: true,
    retries: 4599.59,
  },
  pollTimeout: 1591.83,
  checksumSuffix: "<value>",
  maxManifestSizeKB: 367051,
  validateInventoryFiles: true,
  description: "likely bah ew gadzooks anenst",
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
  id: "<id>",
  type: "snmp",
  disabled: false,
  pipeline: "<value>",
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
    mode: "smart",
    maxBufferSize: 1717.96,
    commitFrequency: 1412.18,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/opt/include",
    compress: "none",
    pqControls: {},
  },
  host: "courteous-flint.com",
  port: 1513.74,
  snmpV3Auth: {
    v3AuthEnabled: true,
    allowUnmatchedTrap: true,
    v3Users: [
      {
        name: "<value>",
        authProtocol: "md5",
        authKey: "<value>",
        privProtocol: "aes",
        privKey: "<value>",
      },
    ],
  },
  maxBufferSize: 5271.05,
  ipWhitelistRegex: "<value>",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  udpSocketRxBufSize: 7786.2,
  varbindsWithTypes: false,
  bestEffortParsing: true,
  description:
    "acclaimed inwardly huzzah whether fisherman supposing presell after",
};
```

### `models.InputOpenTelemetry`

```typescript
const value: models.InputOpenTelemetry = {
  sendToRoutes: true,
  id: "<id>",
  type: "open_telemetry",
  disabled: true,
  pipeline: "<value>",
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
    mode: "smart",
    maxBufferSize: 1717.96,
    commitFrequency: 1412.18,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/opt/include",
    compress: "none",
    pqControls: {},
  },
  host: "profitable-ribbon.org",
  port: 2111.5,
  tls: {
    disabled: true,
    requestCert: true,
    rejectUnauthorized: true,
    commonNameRegex: "<value>",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1.1",
  },
  maxActiveReq: 9161.07,
  maxRequestsPerSocket: 736909,
  enableProxyHeader: "<value>",
  captureHeaders: "<value>",
  activityLogSampleRate: "<value>",
  requestTimeout: 2624.19,
  socketTimeout: 3368.85,
  keepAliveTimeout: 7402.94,
  enableHealthCheck: true,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  protocol: "http",
  extractSpans: false,
  extractMetrics: true,
  otlpVersion: "1.3.1",
  authType: "textSecret",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  maxActiveCxn: 6438.67,
  description: "strictly and emboss oof failing aggravating out old until",
  username: "Simone64",
  password: "8yuR5vesgUBzbeo",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://cavernous-lace.name",
  secretParamName: "<value>",
  secret: "<value>",
  tokenAttributeName: "<value>",
  authHeaderExpr: "<value>",
  tokenTimeoutSecs: 2981.59,
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
  extractLogs: true,
};
```

### `models.InputModelDrivenTelemetry`

```typescript
const value: models.InputModelDrivenTelemetry = {
  sendToRoutes: false,
  id: "<id>",
  type: "model_driven_telemetry",
  disabled: false,
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
  host: "defenseless-overcoat.name",
  port: 1920.13,
  tls: {
    disabled: true,
    requestCert: true,
    rejectUnauthorized: true,
    commonNameRegex: "<value>",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1.1",
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  maxActiveCxn: 6456.5,
  shutdownTimeoutMs: 9208.55,
  description: "which flawed pip step-mother than",
};
```

### `models.InputSqs`

```typescript
const value: models.InputSqs = {
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
  queueType: "fifo",
  awsAccountId: "<id>",
  createQueue: false,
  awsAuthenticationMethod: "<value>",
  awsSecretKey: "<value>",
  region: "<value>",
  endpoint: "<value>",
  signatureVersion: "v4",
  reuseConnections: true,
  rejectUnauthorized: false,
  enableAssumeRole: true,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 6146.94,
  maxMessages: 813.86,
  visibilityTimeout: 9189.56,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  pollTimeout: 9060.33,
  description: "urgently quarrelsomely out woeful whereas sauerkraut vain",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  numReceivers: 7121.1,
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
    mode: "smart",
    maxBufferSize: 1717.96,
    commitFrequency: 1412.18,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/opt/include",
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
    disabled: true,
    requestCert: true,
    rejectUnauthorized: true,
    commonNameRegex: "<value>",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1.1",
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
  sendToRoutes: true,
  id: "<id>",
  type: "file",
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
    mode: "smart",
    maxBufferSize: 1717.96,
    commitFrequency: 1412.18,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/opt/include",
    compress: "none",
    pqControls: {},
  },
  mode: "manual",
  interval: 5256.77,
  filenames: [
    "<value 1>",
  ],
  filterArchivedFiles: false,
  tailOnly: true,
  idleTimeout: 1744.72,
  minAgeDur: "<value>",
  maxAgeDur: "<value>",
  checkFileModTime: true,
  forceText: true,
  hashLen: 2066.22,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  breakerRulesets: [
    "<value 1>",
  ],
  staleChannelFlushMs: 8465.57,
  description: "wildly gah exalted sport scarily wherever",
  path: "/etc/mail",
  depth: 3253.57,
  suppressMissingPathErrors: false,
  deleteFiles: false,
  includeUnidentifiableBinary: false,
};
```

### `models.InputTcp`

```typescript
const value: models.InputTcp = {
  sendToRoutes: true,
  id: "<id>",
  type: "tcp",
  disabled: true,
  pipeline: "<value>",
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
    mode: "smart",
    maxBufferSize: 1717.96,
    commitFrequency: 1412.18,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/opt/include",
    compress: "none",
    pqControls: {},
  },
  host: "new-formation.net",
  port: 9293.87,
  tls: {
    disabled: true,
    requestCert: true,
    rejectUnauthorized: true,
    commonNameRegex: "<value>",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1.1",
  },
  ipWhitelistRegex: "<value>",
  maxActiveCxn: 7899.93,
  socketIdleTimeout: 4795.04,
  socketEndingMaxWait: 4783.69,
  socketMaxLifespan: 8520.87,
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
  staleChannelFlushMs: 7878.91,
  enableHeader: true,
  preprocess: {
    disabled: false,
    command: "<value>",
    args: [
      "<value 1>",
    ],
  },
  description: "zowie er insignificant",
  authToken: "<value>",
  authType: "manual",
  textSecret: "<value>",
};
```

### `models.InputAppscope`

```typescript
const value: models.InputAppscope = {
  sendToRoutes: true,
  id: "<id>",
  type: "appscope",
  disabled: false,
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
  ipWhitelistRegex: "<value>",
  maxActiveCxn: 7115.31,
  socketIdleTimeout: 5650.48,
  socketEndingMaxWait: 4966.67,
  socketMaxLifespan: 5875.12,
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
  staleChannelFlushMs: 9547.37,
  enableUnixPath: true,
  filter: {
    allow: [
      {
        procname: "<value>",
        arg: "<value>",
        config: "<value>",
      },
    ],
    transportURL: "https://late-sanity.org/",
  },
  persistence: {
    enable: true,
    timeWindow: "<value>",
    maxDataSize: "<value>",
    maxDataTime: "<value>",
    compress: "none",
    destPath: "<value>",
  },
  authType: "manual",
  description: "gnash if scheme",
  host: "powerless-popularity.org",
  port: 1805.49,
  tls: {
    disabled: true,
    requestCert: true,
    rejectUnauthorized: true,
    commonNameRegex: "<value>",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1.1",
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
  sendToRoutes: false,
  id: "<id>",
  type: "wef",
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
  host: "big-equal.com",
  port: 9819.67,
  authMethod: "clientCert",
  tls: {
    disabled: true,
    rejectUnauthorized: false,
    requestCert: false,
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    commonNameRegex: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1",
    ocspCheck: true,
    keytab: "<value>",
    principal: "<value>",
    ocspCheckFailClose: true,
  },
  maxActiveReq: 8813,
  maxRequestsPerSocket: 597932,
  enableProxyHeader: false,
  captureHeaders: true,
  keepAliveTimeout: 7368.24,
  enableHealthCheck: false,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  socketTimeout: 5027.56,
  caFingerprint: "<value>",
  keytab: "<value>",
  principal: "<value>",
  allowMachineIdMismatch: false,
  subscriptions: [
    {
      subscriptionName: "<value>",
      version: "<value>",
      contentFormat: "Raw",
      heartbeatInterval: 5580.43,
      batchTimeout: 3722.13,
      readExistingEvents: false,
      sendBookmarks: false,
      compress: true,
      targets: [
        "<value 1>",
        "<value 2>",
      ],
      locale: "el",
      querySelector: "xml",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      queries: [
        {
          path: "/var",
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
  description: "inasmuch harmful whose yuck pulse lovable",
  logFingerprintMismatch: false,
};
```

### `models.InputWinEventLogs`

```typescript
const value: models.InputWinEventLogs = {
  sendToRoutes: false,
  id: "<id>",
  type: "win_event_logs",
  disabled: true,
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
    mode: "smart",
    maxBufferSize: 1717.96,
    commitFrequency: 1412.18,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/opt/include",
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
  interval: 5296.2,
  batchSize: 3079,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  maxEventBytes: 6521.9,
  description: "ew yum pish suffice whose reiterate pish about ruin",
  disableJsonRendering: false,
  disableXmlRendering: true,
};
```

### `models.InputRawUdp`

```typescript
const value: models.InputRawUdp = {
  sendToRoutes: false,
  id: "<id>",
  type: "raw_udp",
  disabled: false,
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
  host: "rewarding-joy.com",
  port: 4993.2,
  maxBufferSize: 2403.38,
  ipWhitelistRegex: "<value>",
  singleMsgUdpPackets: true,
  ingestRawBytes: true,
  udpSocketRxBufSize: 8511.96,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "yum frenetically fine airbus longingly",
};
```

### `models.InputJournalFiles`

```typescript
const value: models.InputJournalFiles = {
  sendToRoutes: true,
  id: "<id>",
  type: "journal_files",
  disabled: false,
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
  path: "/home/user",
  interval: 8225.54,
  journals: [
    "<value 1>",
    "<value 2>",
  ],
  rules: [
    {
      filter: "<value>",
      description: "sympathetically slushy frizz hm optimal blah annually amid",
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
  description: "terrible edge object boo",
};
```

### `models.InputWiz`

```typescript
const value: models.InputWiz = {
  sendToRoutes: true,
  id: "<id>",
  type: "wiz",
  disabled: true,
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
    mode: "smart",
    maxBufferSize: 1717.96,
    commitFrequency: 1412.18,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/opt/include",
    compress: "none",
    pqControls: {},
  },
  endpoint: "<value>",
  authUrl: "https://smug-mentor.biz/",
  authAudienceOverride: "<value>",
  clientId: "<id>",
  contentConfig: [],
  requestTimeout: 4208.71,
  keepAliveTime: 632.03,
  maxMissedKeepAlives: 1559.21,
  ttl: "<value>",
  ignoreGroupJobsLimit: true,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  retryRules: {
    type: "static",
    interval: 3153.33,
    limit: 2659.11,
    multiplier: 376.03,
    codes: [
      5006.8,
      7560.55,
      2139.95,
    ],
    enableHeader: false,
    retryConnectTimeout: false,
    retryConnectReset: false,
  },
  authType: "manual",
  description: "caring kiddingly sharply vastly rebel",
  clientSecret: "<value>",
  textSecret: "<value>",
};
```

### `models.InputWizWebhook`

```typescript
const value: models.InputWizWebhook = {
  sendToRoutes: false,
  id: "<id>",
  type: "wiz_webhook",
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
    mode: "smart",
    maxBufferSize: 1717.96,
    commitFrequency: 1412.18,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/opt/include",
    compress: "none",
    pqControls: {},
  },
  host: "worthy-summer.name",
  port: 4056.72,
  authTokens: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  tls: {
    disabled: true,
    requestCert: true,
    rejectUnauthorized: true,
    commonNameRegex: "<value>",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1.1",
  },
  maxActiveReq: 6612.43,
  maxRequestsPerSocket: 989950,
  enableProxyHeader: false,
  captureHeaders: true,
  activityLogSampleRate: 4540.59,
  requestTimeout: 3714.99,
  socketTimeout: 5742.35,
  keepAliveTimeout: 4090.51,
  enableHealthCheck: false,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  staleChannelFlushMs: 7783.3,
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
      description: "positively divine about woot",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
    },
  ],
  description: "graceful woot extroverted why instead yet rudely oh",
};
```

### `models.InputNetflow`

```typescript
const value: models.InputNetflow = {
  sendToRoutes: false,
  id: "<id>",
  type: "netflow",
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
  host: "rectangular-solvency.org",
  port: 572.31,
  enablePassThrough: true,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  udpSocketRxBufSize: 7232.01,
  templateCacheMinutes: 7528.92,
  v5Enabled: true,
  v9Enabled: false,
  ipfixEnabled: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "incidentally fog provided now wherever tidy",
};
```

### `models.InputSecurityLake`

```typescript
const value: models.InputSecurityLake = {
  sendToRoutes: false,
  id: "<id>",
  type: "security_lake",
  disabled: false,
  pipeline: "<value>",
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
  staleChannelFlushMs: 4398.07,
  maxMessages: 651.05,
  visibilityTimeout: 3284.87,
  numReceivers: 7840.45,
  socketTimeout: 9788.9,
  skipOnError: true,
  includeSqsMetadata: true,
  enableAssumeRole: true,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 5303.03,
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
  parquetChunkSizeMB: 4489.99,
  parquetChunkDownloadTimeout: 7611.23,
  checkpointing: {
    enabled: true,
    retries: 4599.59,
  },
  pollTimeout: 715.65,
  encoding: "<value>",
  description:
    "pfft viciously astride who shudder ha bleakly ham cardboard until",
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
  sendToRoutes: false,
  id: "<id>",
  type: "zscaler_hec",
  disabled: false,
  pipeline: "<value>",
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
    mode: "smart",
    maxBufferSize: 1717.96,
    commitFrequency: 1412.18,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/opt/include",
    compress: "none",
    pqControls: {},
  },
  host: "tepid-petticoat.info",
  port: 4941.59,
  authTokens: [
    {
      authType: "secret",
      tokenSecret: "<value>",
      token: "<value>",
      enabled: true,
      description: "switch within furthermore quarrelsomely",
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
    requestCert: true,
    rejectUnauthorized: true,
    commonNameRegex: "<value>",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1.1",
  },
  maxActiveReq: 6984.18,
  maxRequestsPerSocket: 393471,
  enableProxyHeader: false,
  captureHeaders: true,
  activityLogSampleRate: 7213.3,
  requestTimeout: 3089.96,
  socketTimeout: 8345.51,
  keepAliveTimeout: 6225.43,
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
  hecAcks: true,
  accessControlAllowOrigin: [
    "<value 1>",
    "<value 2>",
  ],
  accessControlAllowHeaders: [
    "<value 1>",
  ],
  emitTokenMetrics: false,
  description: "discrete unbearably as beneath to cruelly appreciate yippee",
};
```

### `models.InputCloudflareHec`

```typescript
const value: models.InputCloudflareHec = {
  sendToRoutes: false,
  id: "<id>",
  type: "cloudflare_hec",
  disabled: true,
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
    mode: "smart",
    maxBufferSize: 1717.96,
    commitFrequency: 1412.18,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/opt/include",
    compress: "none",
    pqControls: {},
  },
  host: "confused-overload.org",
  port: 7404.68,
  authTokens: [
    {
      authType: "manual",
      tokenSecret: "<value>",
      token: "<value>",
      enabled: false,
      description:
        "fall regarding eek vainly carefree ouch zowie messy whereas and",
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
    requestCert: true,
    rejectUnauthorized: true,
    commonNameRegex: "<value>",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1.1",
  },
  maxActiveReq: 1295.09,
  maxRequestsPerSocket: 349074,
  enableProxyHeader: true,
  captureHeaders: true,
  activityLogSampleRate: 9509.92,
  requestTimeout: 5539.42,
  socketTimeout: 4854.45,
  keepAliveTimeout: 2430.61,
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
    "<value 2>",
  ],
  staleChannelFlushMs: 5675.92,
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
    "underneath deform low coagulate geez oddly until brandish whether throughout",
};
```

