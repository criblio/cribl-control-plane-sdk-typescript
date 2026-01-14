# CreateInputRequest

Input object


## Supported Types

### `operations.InputCollection`

```typescript
const value: operations.InputCollection = {
  sendToRoutes: false,
  id: "<id>",
  type: "collection",
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
  breakerRulesets: [
    "<value 1>",
  ],
  staleChannelFlushMs: 2763.06,
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
  sendToRoutes: false,
  id: "<id>",
  type: "kafka",
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
  brokers: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  topics: [],
  groupId: "<id>",
  fromBeginning: false,
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
  connectionTimeout: 949.64,
  requestTimeout: 3791.45,
  maxRetries: 6745.36,
  maxBackOff: 6400.9,
  initialBackoff: 6759.7,
  backoffRate: 7073.92,
  authenticationTimeout: 9336.98,
  reauthenticationThreshold: 8627.75,
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
  sessionTimeout: 4338.08,
  rebalanceTimeout: 5504.69,
  heartbeatInterval: 6831.07,
  autoCommitInterval: 5948.19,
  autoCommitThreshold: 4156.42,
  maxBytesPerPartition: 2406.14,
  maxBytes: 1570.82,
  maxSocketErrors: 8373.63,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description:
    "what yet loose legislature uncork blissfully carp supposing pfft",
};
```

### `operations.InputMsk`

```typescript
const value: operations.InputMsk = {
  sendToRoutes: false,
  id: "<id>",
  type: "msk",
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
  sessionTimeout: 2539.41,
  rebalanceTimeout: 4560.72,
  heartbeatInterval: 5015.59,
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
  connectionTimeout: 7025.54,
  requestTimeout: 1499.36,
  maxRetries: 8154.01,
  maxBackOff: 6169.94,
  initialBackoff: 2595.1,
  backoffRate: 613.7,
  authenticationTimeout: 8631.81,
  reauthenticationThreshold: 699.05,
  awsAuthenticationMethod: "<value>",
  awsSecretKey: "<value>",
  region: "<value>",
  endpoint: "<value>",
  signatureVersion: "v4",
  reuseConnections: false,
  rejectUnauthorized: true,
  enableAssumeRole: true,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 367.6,
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
  autoCommitInterval: 2169.02,
  autoCommitThreshold: 2382.07,
  maxBytesPerPartition: 9916.32,
  maxBytes: 3529.36,
  maxSocketErrors: 9528.55,
  description: "unnecessarily useless delectable indeed",
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
  host: "utilized-quit.com",
  port: 4746.66,
  authTokens: [
    "<value 1>",
    "<value 2>",
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
  maxActiveReq: 3565.99,
  maxRequestsPerSocket: 873043,
  enableProxyHeader: true,
  captureHeaders: false,
  activityLogSampleRate: 2567.27,
  requestTimeout: 2619.41,
  socketTimeout: 3475.13,
  keepAliveTimeout: 8300.9,
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
  description:
    "morning ah daily general ready reiterate throughout upright phew ew",
};
```

### `operations.InputSplunk`

```typescript
const value: operations.InputSplunk = {
  sendToRoutes: false,
  id: "<id>",
  type: "splunk",
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
  host: "motionless-lawmaker.com",
  port: 6291.91,
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
  maxActiveCxn: 1522.42,
  socketIdleTimeout: 4375.14,
  socketEndingMaxWait: 6202.44,
  socketMaxLifespan: 5572.58,
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
  staleChannelFlushMs: 4543.37,
  authTokens: [
    {
      token: "<value>",
      description:
        "internationalize completion though finally unless smart once braid",
    },
  ],
  maxS2Sversion: "v4",
  description: "redraw how stay hence aha beret pocket-watch",
  useFwdTimezone: false,
  dropControlFields: true,
  extractMetrics: false,
  compress: "auto",
};
```

### `operations.InputSplunkSearch`

```typescript
const value: operations.InputSplunkSearch = {
  sendToRoutes: false,
  id: "<id>",
  type: "splunk_search",
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
  requestTimeout: 9653.32,
  useRoundRobinDns: true,
  rejectUnauthorized: true,
  encoding: "<value>",
  keepAliveTime: 59.91,
  jobTimeout: "<value>",
  maxMissedKeepAlives: 5292.1,
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
  staleChannelFlushMs: 8174.55,
  authType: "basic",
  description: "deadly kindly during kookily down musty once between for",
  username: "Leon.Bosco5",
  password: "TnaRwnqVB8BgDxz",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://compassionate-allocation.org/",
  secretParamName: "<value>",
  secret: "<value>",
  tokenAttributeName: "<value>",
  authHeaderExpr: "<value>",
  tokenTimeoutSecs: 9959.32,
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
  host: "functional-citizen.com",
  port: 3789.23,
  authTokens: [
    {
      authType: "manual",
      tokenSecret: "<value>",
      token: "<value>",
      enabled: true,
      description:
        "between quarterly um maroon drat silk whose hence incidentally after",
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
  maxActiveReq: 396.13,
  maxRequestsPerSocket: 919483,
  enableProxyHeader: true,
  captureHeaders: false,
  activityLogSampleRate: 2769.9,
  requestTimeout: 9039.59,
  socketTimeout: 1472.98,
  keepAliveTimeout: 6063.99,
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
  ],
  staleChannelFlushMs: 1755.92,
  useFwdTimezone: true,
  dropControlFields: false,
  extractMetrics: true,
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
  description: "however er as rapidly back er since however yippee",
};
```

### `operations.InputAzureBlob`

```typescript
const value: operations.InputAzureBlob = {
  sendToRoutes: false,
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
  visibilityTimeout: 106,
  numReceivers: 8860.89,
  maxMessages: 2374.51,
  servicePeriodSecs: 5008.23,
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
  staleChannelFlushMs: 7235.77,
  parquetChunkSizeMB: 8043.07,
  parquetChunkDownloadTimeout: 3864.58,
  authType: "clientCert",
  description: "rally aha gee",
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
  host: "ragged-bar.info",
  port: 8243.86,
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
  maxActiveReq: 4784.74,
  maxRequestsPerSocket: 770321,
  enableProxyHeader: true,
  captureHeaders: true,
  activityLogSampleRate: 530.7,
  requestTimeout: 2468.09,
  socketTimeout: 9848,
  keepAliveTimeout: 1929.97,
  enableHealthCheck: false,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  elasticAPI: "<value>",
  authType: "none",
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
    authType: "none",
    username: "Dustin_Marvin69",
    password: "EREk2mCBB7o8YVt",
    credentialsSecret: "<value>",
    url: "https://practical-baritone.com/",
    rejectUnauthorized: true,
    removeHeaders: [
      "<value 1>",
      "<value 2>",
    ],
    timeoutSec: 7074.87,
  },
  description: "behind for when rear tinderbox flame except pish out versus",
  username: "Emilie_Pouros52",
  password: "HyNakc6rEXTm9Is",
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
  sendToRoutes: false,
  id: "<id>",
  type: "confluent_cloud",
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
  connectionTimeout: 8726.78,
  requestTimeout: 401.38,
  maxRetries: 9659.51,
  maxBackOff: 3035.24,
  initialBackoff: 9156.25,
  backoffRate: 705.85,
  authenticationTimeout: 9922.95,
  reauthenticationThreshold: 9150.17,
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
  sessionTimeout: 7943.54,
  rebalanceTimeout: 8688.64,
  heartbeatInterval: 9633.28,
  autoCommitInterval: 1823.93,
  autoCommitThreshold: 2812.89,
  maxBytesPerPartition: 1741.74,
  maxBytes: 4383.72,
  maxSocketErrors: 1635.05,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "huzzah opera barring simple agreement brr eek vivacious",
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
    mode: "smart",
    maxBufferSize: 1717.96,
    commitFrequency: 1412.18,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/opt/include",
    compress: "none",
    pqControls: {},
  },
  host: "equatorial-colon.biz",
  port: 2154.72,
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
  sendToRoutes: false,
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
    mode: "smart",
    maxBufferSize: 1717.96,
    commitFrequency: 1412.18,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/opt/include",
    compress: "none",
    pqControls: {},
  },
  host: "serpentine-hippodrome.biz",
  port: 9671.25,
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
  maxActiveReq: 3135.18,
  maxRequestsPerSocket: 645179,
  enableProxyHeader: true,
  captureHeaders: false,
  activityLogSampleRate: 2215.29,
  requestTimeout: 46.75,
  socketTimeout: 9044.03,
  keepAliveTimeout: 2593.32,
  enableHealthCheck: true,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  lokiAPI: "<value>",
  authType: "credentialsSecret",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "heavily for chasuble psst curl lucky underneath aside",
  username: "Jaron48",
  password: "5gUKeS5HmCencll",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://fuzzy-gastropod.org/",
  secretParamName: "<value>",
  secret: "<value>",
  tokenAttributeName: "<value>",
  authHeaderExpr: "<value>",
  tokenTimeoutSecs: 6747.52,
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
  host: "outstanding-pliers.net",
  port: 6811.13,
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
  maxActiveReq: 6759.3,
  maxRequestsPerSocket: 200562,
  enableProxyHeader: true,
  captureHeaders: false,
  activityLogSampleRate: 5704.24,
  requestTimeout: 7817.6,
  socketTimeout: 5033.21,
  keepAliveTimeout: 6057.48,
  enableHealthCheck: false,
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
  description: "oil onto famously before",
  username: "Laurianne_Nienow",
  password: "Cp5XFBiXxUVqFTY",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://mild-habit.name/",
  secretParamName: "<value>",
  secret: "<value>",
  tokenAttributeName: "<value>",
  authHeaderExpr: "<value>",
  tokenTimeoutSecs: 7593.91,
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
  dimensionList: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  discoveryType: "dns",
  interval: 7584.62,
  logLevel: "info",
  rejectUnauthorized: false,
  timeout: 4442.19,
  keepAliveTime: 6674.05,
  jobTimeout: "<value>",
  maxMissedKeepAlives: 3278.41,
  ttl: "<value>",
  ignoreGroupJobsLimit: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  authType: "manual",
  description: "well whether sadly blushing blah elastic",
  targetList: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  recordType: "A",
  scrapePort: 9522.33,
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
      Values: [],
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
  durationSeconds: 8510.08,
  username: "Meghan.Treutel78",
  password: "iHI0H49dzeEgu37",
  credentialsSecret: "<value>",
};
```

### `operations.InputEdgePrometheus`

```typescript
const value: operations.InputEdgePrometheus = {
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
  dimensionList: [
    "<value 1>",
  ],
  discoveryType: "dns",
  interval: 2784.67,
  timeout: 7371.38,
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
  description:
    "delight incinerate before equatorial yowza creative yowza neatly painfully traditionalism",
  targets: [
    {
      protocol: "https",
      host: "actual-birdcage.org",
      port: 9959.63,
      path: "/var/mail",
    },
  ],
  recordType: "AAAA",
  scrapePort: 7343.15,
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
  signatureVersion: "v4",
  reuseConnections: false,
  rejectUnauthorized: false,
  enableAssumeRole: false,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 710.64,
  scrapeProtocolExpr: "<value>",
  scrapePortExpr: "<value>",
  scrapePathExpr: "<value>",
  podFilter: [
    {
      filter: "<value>",
      description: "afore basket question private athwart",
    },
  ],
  username: "Millie_Weissnat96",
  password: "hp5ItcnGj1dT1AS",
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
  timeout: 5868.81,
  keepAliveTime: 8617.44,
  jobTimeout: "<value>",
  maxMissedKeepAlives: 5506.68,
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
        "ick sign anesthetize wholly yahoo ugh cheese snarling now good-natured",
      interval: 2685.16,
      logLevel: "debug",
      enabled: true,
    },
  ],
  ingestionLag: 2402.94,
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
  description: "until apud lift quash however",
  clientSecret: "<value>",
  textSecret: "<value>",
};
```

### `operations.InputOffice365Service`

```typescript
const value: operations.InputOffice365Service = {
  sendToRoutes: false,
  id: "<id>",
  type: "office365_service",
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
  planType: "gcc",
  tenantId: "<id>",
  appId: "<id>",
  timeout: 8396.56,
  keepAliveTime: 7412.11,
  jobTimeout: "<value>",
  maxMissedKeepAlives: 9578.32,
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
      description: "from cycle decode rebuff gosh",
      interval: 1605.88,
      logLevel: "error",
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
  description: "near barracks rally",
  clientSecret: "<value>",
  textSecret: "<value>",
};
```

### `operations.InputOffice365MsgTrace`

```typescript
const value: operations.InputOffice365MsgTrace = {
  sendToRoutes: false,
  id: "<id>",
  type: "office365_msg_trace",
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
  url: "https://grouchy-carnival.name",
  interval: 2459.83,
  startDate: "<value>",
  endDate: "<value>",
  timeout: 5412.8,
  disableTimeFilter: false,
  authType: "oauthCert",
  rescheduleDroppedTasks: false,
  maxTaskReschedule: 9609.01,
  logLevel: "info",
  jobTimeout: "<value>",
  keepAliveTime: 4028.46,
  maxMissedKeepAlives: 697.32,
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
  description: "pulp costume absent truly",
  username: "Eddie67",
  password: "3Mn0yWZd5eojTwo",
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

### `operations.InputEventhub`

```typescript
const value: operations.InputEventhub = {
  sendToRoutes: false,
  id: "<id>",
  type: "eventhub",
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
  brokers: [
    "<value 1>",
  ],
  topics: [
    "<value 1>",
  ],
  groupId: "<id>",
  fromBeginning: false,
  connectionTimeout: 286.83,
  requestTimeout: 2216.55,
  maxRetries: 5684.1,
  maxBackOff: 1952.91,
  initialBackoff: 5207.27,
  backoffRate: 9894.6,
  authenticationTimeout: 249.53,
  reauthenticationThreshold: 8311.21,
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
  sessionTimeout: 4680.68,
  rebalanceTimeout: 8143.11,
  heartbeatInterval: 183.77,
  autoCommitInterval: 2950.65,
  autoCommitThreshold: 4472.17,
  maxBytesPerPartition: 9910.84,
  maxBytes: 7453.78,
  maxSocketErrors: 2749.98,
  minimizeDuplicates: true,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "than psst serialize upbeat aboard",
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
  retries: 8541.39,
  scheduleType: "interval",
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  staleChannelFlushMs: 8375.73,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "rapid between serialize gee appreciate for ew vivacious",
  interval: 6468.49,
  cronSchedule: "<value>",
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
  host: "limp-rawhide.net",
  port: 7458.89,
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
  maxActiveReq: 2986.82,
  maxRequestsPerSocket: 85847,
  enableProxyHeader: false,
  captureHeaders: false,
  activityLogSampleRate: 1339.2,
  requestTimeout: 9261.36,
  socketTimeout: 5020.8,
  keepAliveTimeout: 6565.72,
  enableHealthCheck: false,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "um amongst furthermore midst",
};
```

### `operations.InputGooglePubsub`

```typescript
const value: operations.InputGooglePubsub = {
  sendToRoutes: false,
  id: "<id>",
  type: "google_pubsub",
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
  topicName: "<value>",
  subscriptionName: "<value>",
  monitorSubscription: false,
  createTopic: true,
  createSubscription: true,
  region: "<value>",
  googleAuthMethod: "manual",
  serviceAccountCredentials: "<value>",
  secret: "<value>",
  maxBacklog: 3836.45,
  concurrency: 4656.2,
  requestTimeout: 2971.75,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "eggplant sense supposing below tarry everlasting below",
  orderedDelivery: true,
};
```

### `operations.InputCribl`

```typescript
const value: operations.InputCribl = {
  sendToRoutes: false,
  id: "<id>",
  type: "cribl",
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
  filter: "<value>",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "as clavicle object provided so burly fooey gleefully",
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
  host: "roasted-premier.info",
  port: 2264.37,
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
  maxActiveCxn: 5806.7,
  socketIdleTimeout: 6187.06,
  socketEndingMaxWait: 3094.27,
  socketMaxLifespan: 8322.45,
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
      description: "without slipper appropriate",
    },
  ],
  description: "book coin corner evenly failing unless searchingly",
};
```

### `operations.InputCriblHttp`

```typescript
const value: operations.InputCriblHttp = {
  sendToRoutes: true,
  id: "<id>",
  type: "cribl_http",
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
  host: "dirty-premise.org",
  port: 8522.93,
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
  maxActiveReq: 1073.96,
  maxRequestsPerSocket: 220085,
  enableProxyHeader: false,
  captureHeaders: false,
  activityLogSampleRate: 9770.08,
  requestTimeout: 4159.52,
  socketTimeout: 5624.02,
  keepAliveTimeout: 2415.92,
  enableHealthCheck: true,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "ah how tut pfft nimble blaspheme",
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
  host: "interesting-department.org",
  port: 1585.85,
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
  maxActiveReq: 1428.63,
  maxRequestsPerSocket: 404305,
  enableProxyHeader: false,
  captureHeaders: true,
  activityLogSampleRate: 8560.16,
  requestTimeout: 9741.35,
  socketTimeout: 5533.33,
  keepAliveTimeout: 6959.01,
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
      description:
        "since lest bruised variable like interviewer than meh round phooey",
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
        enabled: true,
        defaultDataset: "<value>",
      },
    },
  ],
  description: "however gadzooks pfft",
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
  host: "glum-partridge.net",
  port: 5019.92,
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
  maxActiveCxn: 7959.83,
  socketIdleTimeout: 565.85,
  socketEndingMaxWait: 5849.33,
  socketMaxLifespan: 5931.62,
  enableProxyHeader: true,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  enableLoadBalancing: true,
  authType: "manual",
  description: "scorpion enrage hungry",
  authToken: "<value>",
  textSecret: "<value>",
};
```

### `operations.InputSystemMetrics`

```typescript
const value: operations.InputSystemMetrics = {
  sendToRoutes: true,
  id: "<id>",
  type: "system_metrics",
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
  interval: 8040.26,
  host: {
    mode: "disabled",
    custom: {
      system: {
        mode: "all",
        processes: true,
      },
      cpu: {
        mode: "custom",
        perCpu: true,
        detail: false,
        time: false,
      },
      memory: {
        mode: "all",
        detail: false,
      },
      network: {
        mode: "disabled",
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
        detail: false,
        inodes: true,
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
    mode: "custom",
    dockerSocket: [
      "<value 1>",
      "<value 2>",
    ],
    dockerTimeout: 4624.48,
    filters: [
      {
        expr: "<value>",
      },
    ],
    allContainers: true,
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
    timeWindow: "<value>",
    maxDataSize: "<value>",
    maxDataTime: "<value>",
    compress: "gzip",
    destPath: "<value>",
  },
  description: "stingy wordy eyebrow trench eek",
};
```

### `operations.InputSystemState`

```typescript
const value: operations.InputSystemState = {
  sendToRoutes: true,
  id: "<id>",
  type: "system_state",
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
  interval: 9285.68,
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
      enable: false,
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
    enable: false,
    timeWindow: "<value>",
    maxDataSize: "<value>",
    maxDataTime: "<value>",
    compress: "gzip",
    destPath: "<value>",
  },
  disableNativeModule: true,
  description: "yowza consequently into unlike etch bloom following",
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
  interval: 8063.4,
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
    enable: false,
    timeWindow: "<value>",
    maxDataSize: "<value>",
    maxDataTime: "<value>",
    compress: "none",
    destPath: "<value>",
  },
  description: "fooey but blissfully jubilantly of summer",
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
  interval: 3478.49,
  rules: [
    {
      filter: "<value>",
      description: "brr until whose coarse how gosh settler premeditation",
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
  ],
  staleChannelFlushMs: 5436.87,
  enableLoadBalancing: false,
  description:
    "stint leading arrange positively separately knavishly reproach er",
};
```

### `operations.InputKubeEvents`

```typescript
const value: operations.InputKubeEvents = {
  sendToRoutes: true,
  id: "<id>",
  type: "kube_events",
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
  description: "teammate gee plain woefully",
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
  interval: 5065.19,
  host: {
    mode: "custom",
    custom: {
      system: {
        mode: "disabled",
        detail: false,
      },
      cpu: {
        mode: "disabled",
        perCpu: false,
        detail: false,
        time: false,
      },
      memory: {
        mode: "disabled",
        detail: false,
      },
      network: {
        mode: "disabled",
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
    enable: true,
    timeWindow: "<value>",
    maxDataSize: "<value>",
    maxDataTime: "<value>",
    compress: "gzip",
    destPath: "<value>",
  },
  disableNativeModule: false,
  description: "ack throughout notwithstanding",
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
  ],
  staleChannelFlushMs: 0.89,
  maxMessages: 43.76,
  visibilityTimeout: 2878.24,
  numReceivers: 2030.43,
  socketTimeout: 1093.04,
  skipOnError: false,
  includeSqsMetadata: false,
  enableAssumeRole: false,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 7268.58,
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
  pollTimeout: 4309.94,
  encoding: "<value>",
  description: "whose mainstream though transplant since whoa",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  tagAfterProcessing: "true",
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
  host: "awful-plumber.com",
  port: 7947.89,
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
  maxActiveReq: 1178.72,
  maxRequestsPerSocket: 846772,
  enableProxyHeader: true,
  captureHeaders: false,
  activityLogSampleRate: 5969.45,
  requestTimeout: 9774.51,
  socketTimeout: 8909.19,
  keepAliveTimeout: 4760.18,
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
    rejectUnauthorized: true,
  },
  description: "woeful pfft at eke gah",
};
```

### `operations.InputDatagen`

```typescript
const value: operations.InputDatagen = {
  sendToRoutes: true,
  id: "<id>",
  type: "datagen",
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
  samples: [],
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "internal triumphantly outside gee",
};
```

### `operations.InputHttpRaw`

```typescript
const value: operations.InputHttpRaw = {
  sendToRoutes: false,
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
    mode: "smart",
    maxBufferSize: 1717.96,
    commitFrequency: 1412.18,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/opt/include",
    compress: "none",
    pqControls: {},
  },
  host: "yellowish-linseed.info",
  port: 7902.87,
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
  maxActiveReq: 9197.53,
  maxRequestsPerSocket: 601068,
  enableProxyHeader: true,
  captureHeaders: false,
  activityLogSampleRate: 4136.33,
  requestTimeout: 5336.66,
  socketTimeout: 5430.58,
  keepAliveTimeout: 1153.39,
  enableHealthCheck: false,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
  ],
  staleChannelFlushMs: 1900.12,
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
      description: "positively divine about woot",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
    },
  ],
  description: "likewise possession sour austere aside",
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
  streamName: "<value>",
  serviceInterval: 4366.06,
  shardExpr: "<value>",
  shardIteratorType: "TRIM_HORIZON",
  payloadFormat: "cribl",
  getRecordsLimit: 6952.63,
  getRecordsLimitTotal: 3085.65,
  loadBalancingAlgorithm: "RoundRobin",
  awsAuthenticationMethod: "<value>",
  awsSecretKey: "<value>",
  region: "<value>",
  endpoint: "<value>",
  signatureVersion: "v4",
  reuseConnections: true,
  rejectUnauthorized: true,
  enableAssumeRole: true,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 5602.75,
  verifyKPLCheckSums: true,
  avoidDuplicates: true,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description:
    "uh-huh forenenst ouch unfortunately aw of contrail metabolite whereas if",
  awsApiKey: "<value>",
  awsSecret: "<value>",
};
```

### `operations.InputCriblmetrics`

```typescript
const value: operations.InputCriblmetrics = {
  sendToRoutes: false,
  id: "<id>",
  type: "criblmetrics",
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
  prefix: "<value>",
  fullFidelity: true,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "qua hawk whether",
};
```

### `operations.InputMetrics`

```typescript
const value: operations.InputMetrics = {
  sendToRoutes: false,
  id: "<id>",
  type: "metrics",
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
  host: "bogus-massage.biz",
  udpPort: 3618.67,
  tcpPort: 7952.62,
  maxBufferSize: 3090.78,
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
  udpSocketRxBufSize: 2124.5,
  description:
    "including harp colligate whose brr misjudge but pfft consequently tomorrow",
};
```

### `operations.InputS3`

```typescript
const value: operations.InputS3 = {
  sendToRoutes: false,
  id: "<id>",
  type: "s3",
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
  staleChannelFlushMs: 9529.27,
  maxMessages: 7006.22,
  visibilityTimeout: 6604.12,
  numReceivers: 5385.39,
  socketTimeout: 2168.56,
  skipOnError: false,
  includeSqsMetadata: false,
  enableAssumeRole: false,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 4029.11,
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
  parquetChunkSizeMB: 9069.63,
  parquetChunkDownloadTimeout: 8146.78,
  checkpointing: {
    enabled: true,
    retries: 4599.59,
  },
  pollTimeout: 7772.12,
  encoding: "<value>",
  tagAfterProcessing: true,
  description: "meh pertain offset up or before react",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  processedTagKey: "<value>",
  processedTagValue: "<value>",
};
```

### `operations.InputS3Inventory`

```typescript
const value: operations.InputS3Inventory = {
  sendToRoutes: false,
  id: "<id>",
  type: "s3_inventory",
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
  signatureVersion: "v2",
  reuseConnections: true,
  rejectUnauthorized: false,
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  staleChannelFlushMs: 6168.36,
  maxMessages: 1166,
  visibilityTimeout: 1738.91,
  numReceivers: 8677.35,
  socketTimeout: 545.06,
  skipOnError: true,
  includeSqsMetadata: false,
  enableAssumeRole: false,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 410.07,
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
  parquetChunkSizeMB: 5590.08,
  parquetChunkDownloadTimeout: 3431.83,
  checkpointing: {
    enabled: true,
    retries: 4599.59,
  },
  pollTimeout: 617.98,
  checksumSuffix: "<value>",
  maxManifestSizeKB: 470454,
  validateInventoryFiles: true,
  description:
    "instead busily easily density unaccountably excluding ick nifty beyond tomatillo",
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
  sendToRoutes: false,
  id: "<id>",
  type: "snmp",
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
  host: "limping-decongestant.org",
  port: 2923.73,
  snmpV3Auth: {
    v3AuthEnabled: true,
    allowUnmatchedTrap: false,
    v3Users: [
      {
        name: "<value>",
        authProtocol: "sha",
        authKey: "<value>",
        privProtocol: "none",
        privKey: "<value>",
      },
    ],
  },
  maxBufferSize: 3040.92,
  ipWhitelistRegex: "<value>",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  udpSocketRxBufSize: 9763.82,
  varbindsWithTypes: true,
  bestEffortParsing: true,
  description: "fragrant intent until beneath tame availability crystallize",
};
```

### `operations.InputOpenTelemetry`

```typescript
const value: operations.InputOpenTelemetry = {
  sendToRoutes: false,
  id: "<id>",
  type: "open_telemetry",
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
  host: "gigantic-asset.name",
  port: 9215.53,
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
  maxActiveReq: 2717.34,
  maxRequestsPerSocket: 155005,
  enableProxyHeader: "<value>",
  captureHeaders: "<value>",
  activityLogSampleRate: "<value>",
  requestTimeout: 6993.06,
  socketTimeout: 3789.6,
  keepAliveTimeout: 2135.03,
  enableHealthCheck: false,
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
  maxActiveCxn: 3249.57,
  description:
    "if opposite practical jovially tensely secularize about provided ick digit",
  username: "Alysson.Kautzer",
  password: "4WBNWxXw85vcAFl",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://wordy-cricket.org/",
  secretParamName: "<value>",
  secret: "<value>",
  tokenAttributeName: "<value>",
  authHeaderExpr: "<value>",
  tokenTimeoutSecs: 3644.62,
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

### `operations.InputModelDrivenTelemetry`

```typescript
const value: operations.InputModelDrivenTelemetry = {
  sendToRoutes: false,
  id: "<id>",
  type: "model_driven_telemetry",
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
  host: "rundown-sermon.name",
  port: 5333.49,
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
  maxActiveCxn: 4638.32,
  shutdownTimeoutMs: 1933.99,
  description: "weakly pish yak",
};
```

### `operations.InputSqs`

```typescript
const value: operations.InputSqs = {
  sendToRoutes: false,
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
  createQueue: true,
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
  durationSeconds: 3230.56,
  maxMessages: 933.55,
  visibilityTimeout: 1596.96,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  pollTimeout: 2475.8,
  description: "whereas above embed sweetly certainly",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  numReceivers: 2190.89,
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
    mode: "smart",
    maxBufferSize: 1717.96,
    commitFrequency: 1412.18,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/opt/include",
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
  udpSocketRxBufSize: 7607.34,
  enableLoadBalancing: true,
  description: "because mispronounce tarragon that typewriter",
  enableEnhancedProxyHeaderParsing: true,
};
```

### `operations.InputFile`

```typescript
const value: operations.InputFile = {
  sendToRoutes: false,
  id: "<id>",
  type: "file",
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
  mode: "manual",
  interval: 4317.88,
  filenames: [
    "<value 1>",
  ],
  filterArchivedFiles: false,
  tailOnly: true,
  idleTimeout: 2704.65,
  minAgeDur: "<value>",
  maxAgeDur: "<value>",
  checkFileModTime: true,
  forceText: true,
  hashLen: 6448.54,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  breakerRulesets: [
    "<value 1>",
  ],
  staleChannelFlushMs: 9567.65,
  description: "jealously pinion energetic dearly cinema strange",
  path: "/usr/obj",
  depth: 4898.98,
  suppressMissingPathErrors: true,
  deleteFiles: true,
  includeUnidentifiableBinary: true,
};
```

### `operations.InputTcp`

```typescript
const value: operations.InputTcp = {
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
  host: "avaricious-manner.com",
  port: 2844.68,
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
  maxActiveCxn: 9297.84,
  socketIdleTimeout: 7106.32,
  socketEndingMaxWait: 2609.04,
  socketMaxLifespan: 6718.02,
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
  staleChannelFlushMs: 5399.5,
  enableHeader: false,
  preprocess: {
    disabled: false,
    command: "<value>",
    args: [
      "<value 1>",
    ],
  },
  description: "jubilant representation scientific victoriously murky phew",
  authToken: "<value>",
  authType: "manual",
  textSecret: "<value>",
};
```

### `operations.InputAppscope`

```typescript
const value: operations.InputAppscope = {
  sendToRoutes: false,
  id: "<id>",
  type: "appscope",
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
  ipWhitelistRegex: "<value>",
  maxActiveCxn: 4448.42,
  socketIdleTimeout: 1617.55,
  socketEndingMaxWait: 6011.02,
  socketMaxLifespan: 5805.91,
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
  staleChannelFlushMs: 1727.33,
  enableUnixPath: false,
  filter: {
    allow: [
      {
        procname: "<value>",
        arg: "<value>",
        config: "<value>",
      },
    ],
    transportURL: "https://clean-blight.net",
  },
  persistence: {
    enable: true,
    timeWindow: "<value>",
    maxDataSize: "<value>",
    maxDataTime: "<value>",
    compress: "none",
    destPath: "<value>",
  },
  authType: "secret",
  description: "gee within phooey bah worth",
  host: "radiant-sonata.biz",
  port: 1966.66,
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

### `operations.InputWef`

```typescript
const value: operations.InputWef = {
  sendToRoutes: false,
  id: "<id>",
  type: "wef",
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
  host: "damaged-saloon.org",
  port: 4944.48,
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
    maxVersion: "TLSv1.2",
    ocspCheck: false,
    keytab: "<value>",
    principal: "<value>",
    ocspCheckFailClose: false,
  },
  maxActiveReq: 3295.79,
  maxRequestsPerSocket: 233857,
  enableProxyHeader: false,
  captureHeaders: false,
  keepAliveTimeout: 3004.7,
  enableHealthCheck: false,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  socketTimeout: 2605.22,
  caFingerprint: "<value>",
  keytab: "<value>",
  principal: "<value>",
  allowMachineIdMismatch: false,
  subscriptions: [
    {
      subscriptionName: "<value>",
      version: "<value>",
      contentFormat: "Raw",
      heartbeatInterval: 7893.13,
      batchTimeout: 6233.38,
      readExistingEvents: false,
      sendBookmarks: false,
      compress: true,
      targets: [],
      locale: "it",
      querySelector: "simple",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      queries: [
        {
          path: "/usr/share",
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
  description: "with spectate spiffy between",
  logFingerprintMismatch: true,
};
```

### `operations.InputWinEventLogs`

```typescript
const value: operations.InputWinEventLogs = {
  sendToRoutes: true,
  id: "<id>",
  type: "win_event_logs",
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
  logNames: [
    "<value 1>",
    "<value 2>",
  ],
  readMode: "oldest",
  eventFormat: "xml",
  disableNativeModule: true,
  interval: 7055.61,
  batchSize: 570.36,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  maxEventBytes: 8420.43,
  description:
    "politely notwithstanding sew gleefully of nicely gadzooks nearly",
  disableJsonRendering: false,
  disableXmlRendering: false,
};
```

### `operations.InputRawUdp`

```typescript
const value: operations.InputRawUdp = {
  sendToRoutes: true,
  id: "<id>",
  type: "raw_udp",
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
  host: "burly-coordination.info",
  port: 1601.29,
  maxBufferSize: 8874.27,
  ipWhitelistRegex: "<value>",
  singleMsgUdpPackets: false,
  ingestRawBytes: true,
  udpSocketRxBufSize: 2511.18,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "metal outrun clone sans aboard acquire along",
};
```

### `operations.InputJournalFiles`

```typescript
const value: operations.InputJournalFiles = {
  sendToRoutes: true,
  id: "<id>",
  type: "journal_files",
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
  path: "/opt/share",
  interval: 6011.9,
  journals: [
    "<value 1>",
  ],
  rules: [
    {
      filter: "<value>",
      description: "sew gladly event an hence warped up",
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
  description:
    "gah admonish metal finally duh through oh reorient jittery despite",
};
```

### `operations.InputWiz`

```typescript
const value: operations.InputWiz = {
  sendToRoutes: false,
  id: "<id>",
  type: "wiz",
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
  endpoint: "<value>",
  authUrl: "https://ultimate-summary.name/",
  authAudienceOverride: "<value>",
  clientId: "<id>",
  contentConfig: [],
  requestTimeout: 4525.95,
  keepAliveTime: 244.32,
  maxMissedKeepAlives: 1549.6,
  ttl: "<value>",
  ignoreGroupJobsLimit: false,
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
  description: "ugh nor pile crazy",
  clientSecret: "<value>",
  textSecret: "<value>",
};
```

### `operations.InputWizWebhook`

```typescript
const value: operations.InputWizWebhook = {
  sendToRoutes: false,
  id: "<id>",
  type: "wiz_webhook",
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
  host: "unfinished-governance.name",
  port: 7470.46,
  authTokens: [
    "<value 1>",
    "<value 2>",
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
  maxActiveReq: 1550.32,
  maxRequestsPerSocket: 96820,
  enableProxyHeader: false,
  captureHeaders: false,
  activityLogSampleRate: 8347.58,
  requestTimeout: 2055.19,
  socketTimeout: 9213.7,
  keepAliveTimeout: 1810.7,
  enableHealthCheck: true,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
  ],
  staleChannelFlushMs: 239.63,
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
  description: "on excellent rarely uh-huh greedily less monthly under",
};
```

### `operations.InputNetflow`

```typescript
const value: operations.InputNetflow = {
  sendToRoutes: true,
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
  host: "phony-suv.biz",
  port: 2233.02,
  enablePassThrough: false,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  udpSocketRxBufSize: 2484.62,
  templateCacheMinutes: 281.12,
  v5Enabled: false,
  v9Enabled: true,
  ipfixEnabled: true,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description:
    "near truly limping ha boohoo lock aha madly judgementally accidentally",
};
```

### `operations.InputSecurityLake`

```typescript
const value: operations.InputSecurityLake = {
  sendToRoutes: true,
  id: "<id>",
  type: "security_lake",
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
  staleChannelFlushMs: 8707.09,
  maxMessages: 7159.91,
  visibilityTimeout: 3589.17,
  numReceivers: 383.55,
  socketTimeout: 5860.04,
  skipOnError: true,
  includeSqsMetadata: false,
  enableAssumeRole: false,
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  durationSeconds: 1340.77,
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
  parquetChunkSizeMB: 7298.19,
  parquetChunkDownloadTimeout: 1054.3,
  checkpointing: {
    enabled: true,
    retries: 4599.59,
  },
  pollTimeout: 5202.57,
  encoding: "<value>",
  description: "usher newsprint busy aha while",
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
  sendToRoutes: true,
  id: "<id>",
  type: "zscaler_hec",
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
  host: "pink-hovercraft.net",
  port: 9464.95,
  authTokens: [
    {
      authType: "manual",
      tokenSecret: "<value>",
      token: "<value>",
      enabled: true,
      description:
        "handle considering platypus even gadzooks ah blah comestible inquisitively",
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
  maxActiveReq: 2075.96,
  maxRequestsPerSocket: 301749,
  enableProxyHeader: false,
  captureHeaders: false,
  activityLogSampleRate: 5931.98,
  requestTimeout: 4504.63,
  socketTimeout: 2261.05,
  keepAliveTimeout: 7227.55,
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
  ],
  accessControlAllowHeaders: [
    "<value 1>",
  ],
  emitTokenMetrics: false,
  description: "athwart fooey dissemble amongst grok whoa wasteful",
};
```

### `operations.InputCloudflareHec`

```typescript
const value: operations.InputCloudflareHec = {
  sendToRoutes: false,
  id: "<id>",
  type: "cloudflare_hec",
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
  host: "puzzled-cutover.info",
  port: 955.18,
  authTokens: [
    {
      authType: "secret",
      tokenSecret: "<value>",
      token: "<value>",
      enabled: true,
      description: "ugh utterly upon big pfft outrun times anenst stratify",
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
  maxActiveReq: 1139.17,
  maxRequestsPerSocket: 415108,
  enableProxyHeader: false,
  captureHeaders: false,
  activityLogSampleRate: 7334.45,
  requestTimeout: 1887.58,
  socketTimeout: 585.76,
  keepAliveTimeout: 5367.96,
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
  breakerRulesets: [
    "<value 1>",
  ],
  staleChannelFlushMs: 920.51,
  accessControlAllowOrigin: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  accessControlAllowHeaders: [
    "<value 1>",
    "<value 2>",
  ],
  emitTokenMetrics: true,
  description: "since ice-cream focalise",
};
```

