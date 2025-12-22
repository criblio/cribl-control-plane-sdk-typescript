# Input


## Supported Types

### `models.InputCollection`

```typescript
const value: models.InputCollection = {
  id: "<id>",
  type: "collection",
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  breakerRulesets: [
    "<value 1>",
  ],
  preprocess: {
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
  output: "<value>",
};
```

### `models.InputKafka`

```typescript
const value: models.InputKafka = {
  id: "<id>",
  type: "kafka",
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  brokers: [
    "<value 1>",
  ],
  topics: [
    "<value 1>",
  ],
  kafkaSchemaRegistry: {
    auth: {
      credentialsSecret: "<value>",
    },
    tls: {
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1",
      maxVersion: "TLSv1.2",
    },
  },
  sasl: {
    username: "Seamus67",
    password: "6PIwQ9BxwvdkIdN",
    credentialsSecret: "<value>",
    keytabLocation: "<value>",
    principal: "<value>",
    brokerServiceClass: "<value>",
    tokenUrl: "https://quiet-airmail.org",
    clientId: "<id>",
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
    servername: "<value>",
    certificateName: "<value>",
    caPath: "<value>",
    privKeyPath: "<value>",
    certPath: "<value>",
    passphrase: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1.2",
  },
  autoCommitInterval: 1317.99,
  autoCommitThreshold: 1440.88,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "gee trolley what yieldingly yummy mentor",
};
```

### `models.InputMsk`

```typescript
const value: models.InputMsk = {
  id: "<id>",
  type: "msk",
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  brokers: [
    "<value 1>",
  ],
  topics: [
    "<value 1>",
    "<value 2>",
  ],
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  kafkaSchemaRegistry: {
    auth: {
      credentialsSecret: "<value>",
    },
    tls: {
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1",
      maxVersion: "TLSv1.2",
    },
  },
  awsSecretKey: "<value>",
  region: "<value>",
  endpoint: "<value>",
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  tls: {
    servername: "<value>",
    certificateName: "<value>",
    caPath: "<value>",
    privKeyPath: "<value>",
    certPath: "<value>",
    passphrase: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1.1",
  },
  autoCommitInterval: 9112.9,
  autoCommitThreshold: 3085.62,
  description: "admired uh-huh joint book delight positively majestically",
  awsApiKey: "<value>",
  awsSecret: "<value>",
};
```

### `models.InputHttp`

```typescript
const value: models.InputHttp = {
  id: "<id>",
  type: "http",
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  port: 1871.53,
  authTokens: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  tls: {
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1.1",
    maxVersion: "TLSv1",
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  authTokensExt: [
    {
      token: "<value>",
      description: "confide bulky gadzooks ugh concerning rightfully justly",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
    },
  ],
  description: "scorn per tentacle but naturally trim",
};
```

### `models.InputSplunk`

```typescript
const value: models.InputSplunk = {
  id: "<id>",
  type: "splunk",
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  port: 3317.72,
  tls: {
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1.1",
    maxVersion: "TLSv1",
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  breakerRulesets: [
    "<value 1>",
  ],
  authTokens: [
    {
      token: "<value>",
      description:
        "impanel makeover parade vulgarise delightfully when sans instead vivaciously upbeat",
    },
  ],
  description: "but psst to pish",
};
```

### `models.InputSplunkSearch`

```typescript
const value: models.InputSplunkSearch = {
  id: "<id>",
  type: "splunk_search",
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  search: "<value>",
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
  encoding: "<value>",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  retryRules: {
    codes: [
      1412.18,
    ],
  },
  breakerRulesets: [
    "<value 1>",
  ],
  description: "after along heartbeat",
  username: "Mitchel.Stamm",
  password: "c4WdcGgMmEYENj1",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://oddball-suitcase.org/",
  secretParamName: "<value>",
  secret: "<value>",
  tokenAttributeName: "<value>",
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
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  port: 817.1,
  authTokens: [
    {
      tokenSecret: "<value>",
      token: "<value>",
      description: "throbbing sting sore",
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
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1.1",
    maxVersion: "TLSv1",
  },
  enableHealthCheck: "<value>",
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
  description: "knottily thoughtfully hm times for midst ick",
};
```

### `models.InputAzureBlob`

```typescript
const value: models.InputAzureBlob = {
  id: "<id>",
  type: "azure_blob",
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  queueName: "<value>",
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
  description: "nocturnal tattered widow hassle avaricious the agitated mid",
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
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  port: 8327.88,
  tls: {
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1.1",
    maxVersion: "TLSv1",
  },
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
    username: "Stan_Connelly",
    password: "5KMRlcpcktj90M0",
    credentialsSecret: "<value>",
    url: "https://scientific-pepper.net",
    removeHeaders: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
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
};
```

### `models.InputConfluentCloud`

```typescript
const value: models.InputConfluentCloud = {
  id: "<id>",
  type: "confluent_cloud",
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  brokers: [
    "<value 1>",
  ],
  tls: {
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
  kafkaSchemaRegistry: {
    auth: {
      credentialsSecret: "<value>",
    },
    tls: {
      servername: "<value>",
      certificateName: "<value>",
      caPath: "<value>",
      privKeyPath: "<value>",
      certPath: "<value>",
      passphrase: "<value>",
      minVersion: "TLSv1",
      maxVersion: "TLSv1.2",
    },
  },
  sasl: {
    username: "Seamus67",
    password: "6PIwQ9BxwvdkIdN",
    credentialsSecret: "<value>",
    keytabLocation: "<value>",
    principal: "<value>",
    brokerServiceClass: "<value>",
    tokenUrl: "https://quiet-airmail.org",
    clientId: "<id>",
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
  autoCommitInterval: 9236.28,
  autoCommitThreshold: 4568.71,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description:
    "blindly aha madly wonderfully despite championship before ironclad emphasise",
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
    minVersion: "TLSv1.1",
    maxVersion: "TLSv1",
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
  id: "<id>",
  type: "loki",
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  port: 6141.25,
  tls: {
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1.1",
    maxVersion: "TLSv1",
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "aha pfft kowtow bowed excepting er grandpa quirkily word",
  username: "Mayra43",
  password: "np8QCsOXGU2LDul",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://submissive-council.net",
  secretParamName: "<value>",
  secret: "<value>",
  tokenAttributeName: "<value>",
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
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  port: 6798.56,
  tls: {
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1.1",
    maxVersion: "TLSv1",
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "atop huzzah cosset yum",
  username: "Rosemarie_Marvin38",
  password: "kiqAEkFnZvKxy5F",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://precious-vol.net",
  secretParamName: "<value>",
  secret: "<value>",
  tokenAttributeName: "<value>",
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
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  dimensionList: [
    "<value 1>",
    "<value 2>",
  ],
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "with proselytise mockingly yum arraign",
  targetList: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  nameList: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  awsApiKey: "<value>",
  awsSecret: "<value>",
  searchFilter: [
    {
      name: "<value>",
      values: [],
    },
  ],
  awsSecretKey: "<value>",
  region: "<value>",
  endpoint: "<value>",
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  username: "Abner.Beahan",
  password: "WRNYKm_4ZcnFhsM",
  credentialsSecret: "<value>",
};
```

### `models.InputEdgePrometheus`

```typescript
const value: models.InputEdgePrometheus = {
  id: "<id>",
  type: "edge_prometheus",
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  dimensionList: [
    "<value 1>",
  ],
  persistence: {},
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "suffocate indolent sticker especially",
  targets: [
    {
      host: "immense-forager.name",
    },
  ],
  nameList: [
    "<value 1>",
    "<value 2>",
  ],
  awsApiKey: "<value>",
  awsSecret: "<value>",
  searchFilter: [
    {
      name: "<value>",
      values: [],
    },
  ],
  awsSecretKey: "<value>",
  region: "<value>",
  endpoint: "<value>",
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  podFilter: [
    {
      filter: "<value>",
      description: "yuck meh petticoat",
    },
  ],
  username: "Foster98",
  password: "GsqPbiOp5J7DY2j",
  credentialsSecret: "<value>",
};
```

### `models.InputOffice365Mgmt`

```typescript
const value: models.InputOffice365Mgmt = {
  id: "<id>",
  type: "office365_mgmt",
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  tenantId: "<id>",
  appId: "<id>",
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
      description: "frenetically fooey mill briefly twin",
      interval: 6466.39,
      logLevel: "error",
      enabled: false,
    },
  ],
  retryRules: {
    codes: [
      3814.72,
      1029.82,
    ],
  },
  description: "as enlist despite however needily regulate likewise upon",
  clientSecret: "<value>",
  textSecret: "<value>",
};
```

### `models.InputOffice365Service`

```typescript
const value: models.InputOffice365Service = {
  id: "<id>",
  type: "office365_service",
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  tenantId: "<id>",
  appId: "<id>",
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
        "dowse boulevard where kindly integer mosh before yahoo consequently yuck",
      interval: 3221.55,
      logLevel: "debug",
      enabled: false,
    },
  ],
  retryRules: {
    codes: [
      3814.72,
      1029.82,
    ],
  },
  description: "sonata consequently potable until ripe",
  clientSecret: "<value>",
  textSecret: "<value>",
};
```

### `models.InputOffice365MsgTrace`

```typescript
const value: models.InputOffice365MsgTrace = {
  id: "<id>",
  type: "office365_msg_trace",
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  startDate: "<value>",
  endDate: "<value>",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  retryRules: {
    codes: [
      3814.72,
      1029.82,
    ],
  },
  description: "towards whereas nor flawed disadvantage upon sup",
  username: "Rahul.Flatley",
  password: "ApxEG0kJtSiFWcx",
  credentialsSecret: "<value>",
  clientSecret: "<value>",
  tenantId: "<id>",
  clientId: "<id>",
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
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  brokers: [
    "<value 1>",
  ],
  topics: [],
  sasl: {
    password: "ZcrxTx4Amn7CtfA",
    textSecret: "<value>",
    clientSecret: "<value>",
    clientTextSecret: "<value>",
    certificateName: "<value>",
    certPath: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    clientId: "<id>",
    tenantId: "<id>",
    scope: "<value>",
  },
  tls: {},
  autoCommitInterval: 5448.32,
  autoCommitThreshold: 5569.57,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description:
    "questionable upward haul preheat nutritious since even so silently",
};
```

### `models.InputExec`

```typescript
const value: models.InputExec = {
  id: "<id>",
  type: "exec",
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  command: "<value>",
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
  ],
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "silk or nougat",
};
```

### `models.InputFirehose`

```typescript
const value: models.InputFirehose = {
  id: "<id>",
  type: "firehose",
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  port: 7517.47,
  authTokens: [
    "<value 1>",
    "<value 2>",
  ],
  tls: {
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1.1",
    maxVersion: "TLSv1",
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "yippee throbbing although valiantly disconnection fiercely in",
};
```

### `models.InputGooglePubsub`

```typescript
const value: models.InputGooglePubsub = {
  id: "<id>",
  type: "google_pubsub",
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  subscriptionName: "<value>",
  region: "<value>",
  serviceAccountCredentials: "<value>",
  secret: "<value>",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "focused consequently tomatillo ridge whoa",
};
```

### `models.InputCribl`

```typescript
const value: models.InputCribl = {
  id: "<id>",
  type: "cribl",
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  filter: "<value>",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "ugh boohoo gladly yuck well bossy what clonk",
};
```

### `models.InputCriblTcp`

```typescript
const value: models.InputCriblTcp = {
  id: "<id>",
  type: "cribl_tcp",
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  port: 4566.33,
  tls: {
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1.1",
    maxVersion: "TLSv1",
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  authTokens: [
    {
      tokenSecret: "<value>",
      description: "augment case without",
    },
  ],
  description:
    "when waterspout ribbon upon joyfully yuck disconnection failing lightly mousse",
};
```

### `models.InputCriblHttp`

```typescript
const value: models.InputCriblHttp = {
  id: "<id>",
  type: "cribl_http",
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  port: 3140.1,
  authTokens: [
    {
      tokenSecret: "<value>",
      description: "augment case without",
    },
  ],
  tls: {
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1.1",
    maxVersion: "TLSv1",
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "wearily weighty bliss language how",
};
```

### `models.InputCriblLakeHttp`

```typescript
const value: models.InputCriblLakeHttp = {
  id: "<id>",
  type: "cribl_lake_http",
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  port: 4386.51,
  authTokens: [
    "<value 1>",
  ],
  tls: {
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1.1",
    maxVersion: "TLSv1",
  },
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
        "after whoever castanet gosh bludgeon fabricate gee incidentally",
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
  description:
    "especially rotating whose towards dental cutover customise upside-down but psst",
};
```

### `models.InputTcpjson`

```typescript
const value: models.InputTcpjson = {
  id: "<id>",
  type: "tcpjson",
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  port: 6709.35,
  tls: {
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1.1",
    maxVersion: "TLSv1",
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description:
    "march eek flickering oh although debut needily reluctantly what",
  textSecret: "<value>",
};
```

### `models.InputSystemMetrics`

```typescript
const value: models.InputSystemMetrics = {
  id: "<id>",
  type: "system_metrics",
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  host: {
    custom: {
      system: {},
      cpu: {},
      memory: {},
      network: {
        devices: [
          "<value 1>",
        ],
      },
      disk: {
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
      },
    },
  },
  process: {
    sets: [
      {
        name: "<value>",
        filter: "<value>",
      },
    ],
  },
  container: {
    dockerSocket: [
      "<value 1>",
      "<value 2>",
    ],
    filters: [
      {
        expr: "<value>",
      },
    ],
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  persistence: {},
  description:
    "per airbus supposing joint while apropos powerfully that instantly",
};
```

### `models.InputSystemState`

```typescript
const value: models.InputSystemState = {
  id: "<id>",
  type: "system_state",
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  collectors: {
    hostsfile: {},
    interfaces: {},
    disk: {},
    metadata: {},
    routes: {},
    dns: {},
    user: {},
    firewall: {},
    services: {},
    ports: {},
    loginUsers: {},
  },
  persistence: {},
  description: "formula an yahoo",
};
```

### `models.InputKubeMetrics`

```typescript
const value: models.InputKubeMetrics = {
  id: "<id>",
  type: "kube_metrics",
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  rules: [
    {
      filter: "<value>",
      description: "boggle catalog chip ew",
    },
  ],
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  persistence: {},
  description:
    "gratefully pish whose till hydrocarbon boo eek next uh-huh signature",
};
```

### `models.InputKubeLogs`

```typescript
const value: models.InputKubeLogs = {
  id: "<id>",
  type: "kube_logs",
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  rules: [
    {
      filter: "<value>",
      description: "zowie because flu boohoo obnoxiously ew sorrowful whose aw",
    },
  ],
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  persistence: {},
  breakerRulesets: [
    "<value 1>",
  ],
  description: "over wafer following ugh strait",
};
```

### `models.InputKubeEvents`

```typescript
const value: models.InputKubeEvents = {
  id: "<id>",
  type: "kube_events",
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  rules: [
    {
      filter: "<value>",
      description: "boggle catalog chip ew",
    },
  ],
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "which incline beautifully",
};
```

### `models.InputWindowsMetrics`

```typescript
const value: models.InputWindowsMetrics = {
  id: "<id>",
  type: "windows_metrics",
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  host: {
    custom: {
      system: {},
      cpu: {},
      memory: {},
      network: {
        devices: [
          "<value 1>",
          "<value 2>",
        ],
      },
      disk: {
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
      },
    ],
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  persistence: {},
  description: "printer toaster forenenst over safe between",
};
```

### `models.InputCrowdstrike`

```typescript
const value: models.InputCrowdstrike = {
  id: "<id>",
  type: "crowdstrike",
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  queueName: "<value>",
  awsAccountId: "<id>",
  awsSecretKey: "<value>",
  region: "<value>",
  endpoint: "<value>",
  breakerRulesets: [
    "<value 1>",
  ],
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  preprocess: {
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
  checkpointing: {},
  encoding: "<value>",
  description: "denitrify after boo duh duh",
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
  id: "<id>",
  type: "datadog_agent",
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  port: 3937.07,
  tls: {
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1.1",
    maxVersion: "TLSv1",
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  proxyMode: {},
  description:
    "humiliating intensely enthusiastically kindheartedly grown content mmm infatuated like",
};
```

### `models.InputDatagen`

```typescript
const value: models.InputDatagen = {
  id: "<id>",
  type: "datagen",
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  samples: [
    {
      sample: "<value>",
    },
  ],
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "ouch towards comparison",
};
```

### `models.InputHttpRaw`

```typescript
const value: models.InputHttpRaw = {
  id: "<id>",
  type: "http_raw",
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  port: 4578.26,
  authTokens: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  tls: {
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1.1",
    maxVersion: "TLSv1",
  },
  breakerRulesets: [
    "<value 1>",
  ],
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
      description: "confide bulky gadzooks ugh concerning rightfully justly",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
    },
  ],
  description: "before upon wee uh-huh robust however cap calmly drat",
};
```

### `models.InputKinesis`

```typescript
const value: models.InputKinesis = {
  id: "<id>",
  type: "kinesis",
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  streamName: "<value>",
  awsSecretKey: "<value>",
  region: "<value>",
  endpoint: "<value>",
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "hamburger partially elegantly quietly whether perfectly",
  awsApiKey: "<value>",
  awsSecret: "<value>",
};
```

### `models.InputCriblmetrics`

```typescript
const value: models.InputCriblmetrics = {
  id: "<id>",
  type: "criblmetrics",
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "playfully growing curl blight cone likely innocently amongst",
};
```

### `models.InputMetrics`

```typescript
const value: models.InputMetrics = {
  id: "<id>",
  type: "metrics",
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  udpPort: 1525.54,
  tcpPort: 6373.18,
  tls: {
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1.1",
    maxVersion: "TLSv1",
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  udpSocketRxBufSize: 1218.28,
  description: "untidy braid yippee readily yahoo gah space",
};
```

### `models.InputS3`

```typescript
const value: models.InputS3 = {
  id: "<id>",
  type: "s3",
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  queueName: "<value>",
  awsAccountId: "<id>",
  awsSecretKey: "<value>",
  region: "<value>",
  endpoint: "<value>",
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
  ],
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  preprocess: {
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
  checkpointing: {},
  encoding: "<value>",
  description:
    "ah exploration discourse ouch fooey down reorganisation unique despite",
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
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  queueName: "<value>",
  awsAccountId: "<id>",
  awsSecretKey: "<value>",
  region: "<value>",
  endpoint: "<value>",
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  preprocess: {
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
  checkpointing: {},
  description: "scarily sans monthly",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  tagAfterProcessing: "false",
  processedTagKey: "<value>",
  processedTagValue: "<value>",
};
```

### `models.InputSnmp`

```typescript
const value: models.InputSnmp = {
  id: "<id>",
  type: "snmp",
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  snmpV3Auth: {
    v3Users: [
      {
        name: "<value>",
        authKey: "<value>",
        privKey: "<value>",
      },
    ],
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  udpSocketRxBufSize: 3956.33,
  description:
    "yuck idolized possible merrily along below geez horse over zowie",
};
```

### `models.InputOpenTelemetry`

```typescript
const value: models.InputOpenTelemetry = {
  id: "<id>",
  type: "open_telemetry",
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  tls: {
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1.1",
    maxVersion: "TLSv1",
  },
  enableProxyHeader: "<value>",
  captureHeaders: "<value>",
  activityLogSampleRate: "<value>",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "deflect er wee",
  username: "Angel42",
  password: "l4T9Z8qy0Rl6tiF",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://rectangular-toaster.name/",
  secretParamName: "<value>",
  secret: "<value>",
  tokenAttributeName: "<value>",
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

### `models.InputModelDrivenTelemetry`

```typescript
const value: models.InputModelDrivenTelemetry = {
  id: "<id>",
  type: "model_driven_telemetry",
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  tls: {
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1.1",
    maxVersion: "TLSv1",
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "boohoo carpool so chunder",
};
```

### `models.InputSqs`

```typescript
const value: models.InputSqs = {
  id: "<id>",
  type: "sqs",
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  queueName: "<value>",
  queueType: "fifo",
  awsAccountId: "<id>",
  awsSecretKey: "<value>",
  region: "<value>",
  endpoint: "<value>",
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description:
    "righteously poetry wherever interviewer cuddly favorable boohoo since",
  awsApiKey: "<value>",
  awsSecret: "<value>",
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
    minVersion: "TLSv1.1",
    maxVersion: "TLSv1",
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
  id: "<id>",
  type: "file",
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  filenames: [
    "<value 1>",
  ],
  minAgeDur: "<value>",
  maxAgeDur: "<value>",
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
  description: "completion viability bleak behind shyly plus finally whoa odd",
  path: "/System",
  depth: 849.91,
};
```

### `models.InputTcp`

```typescript
const value: models.InputTcp = {
  id: "<id>",
  type: "tcp",
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  port: 1733.5,
  tls: {
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1.1",
    maxVersion: "TLSv1",
  },
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
  preprocess: {
    command: "<value>",
    args: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  description: "license abseil zowie er insignificant",
  textSecret: "<value>",
};
```

### `models.InputAppscope`

```typescript
const value: models.InputAppscope = {
  id: "<id>",
  type: "appscope",
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  breakerRulesets: [
    "<value 1>",
  ],
  filter: {
    allow: [
      {
        procname: "<value>",
        arg: "<value>",
        config: "<value>",
      },
    ],
    transportURL: "https://lawful-impact.net",
  },
  persistence: {},
  description: "inspection adventurously gnash if scheme ew wrongly",
  host: "twin-reporter.name",
  port: 3370.32,
  tls: {
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1.1",
    maxVersion: "TLSv1",
  },
  unixSocketPerms: "<value>",
  textSecret: "<value>",
};
```

### `models.InputWef`

```typescript
const value: models.InputWef = {
  id: "<id>",
  type: "wef",
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  tls: {
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1.2",
    maxVersion: "TLSv1.2",
    keytab: "<value>",
    principal: "<value>",
  },
  caFingerprint: "<value>",
  keytab: "<value>",
  principal: "<value>",
  subscriptions: [
    {
      subscriptionName: "<value>",
      version: "<value>",
      targets: [
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
      queries: [
        {
          path: "/boot/defaults",
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
  description: "availability fellow obsess scale decongestant",
};
```

### `models.InputWinEventLogs`

```typescript
const value: models.InputWinEventLogs = {
  id: "<id>",
  type: "win_event_logs",
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  logNames: [
    "<value 1>",
    "<value 2>",
  ],
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "muddy in duh institute",
};
```

### `models.InputRawUdp`

```typescript
const value: models.InputRawUdp = {
  id: "<id>",
  type: "raw_udp",
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  port: 4339.08,
  udpSocketRxBufSize: 7664.5,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "athwart opera sour neglected happy pish widow hmph into",
};
```

### `models.InputJournalFiles`

```typescript
const value: models.InputJournalFiles = {
  id: "<id>",
  type: "journal_files",
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  path: "/private/var",
  journals: [
    "<value 1>",
    "<value 2>",
  ],
  rules: [
    {
      filter: "<value>",
      description: "yahoo uh-huh dirty behind manner",
    },
  ],
  maxAgeDur: "<value>",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "honored given shoulder why cheerful",
};
```

### `models.InputWiz`

```typescript
const value: models.InputWiz = {
  id: "<id>",
  type: "wiz",
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  authUrl: "https://criminal-offset.info/",
  authAudienceOverride: "<value>",
  clientId: "<id>",
  contentConfig: [],
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  retryRules: {
    codes: [
      1412.18,
    ],
  },
  description:
    "masquerade overcook thump pro towards rawhide aha forearm irritably",
  clientSecret: "<value>",
  textSecret: "<value>",
};
```

### `models.InputWizWebhook`

```typescript
const value: models.InputWizWebhook = {
  id: "<id>",
  type: "wiz_webhook",
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  port: 6799.14,
  authTokens: [
    "<value 1>",
    "<value 2>",
  ],
  tls: {
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1.1",
    maxVersion: "TLSv1",
  },
  breakerRulesets: [
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
      description: "confide bulky gadzooks ugh concerning rightfully justly",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
    },
  ],
  description: "frizzy spanish merrily instead reboot gurn sew gosh naturally",
};
```

### `models.InputNetflow`

```typescript
const value: models.InputNetflow = {
  id: "<id>",
  type: "netflow",
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  udpSocketRxBufSize: 2121.68,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "gleefully famously sequester crest zowie divert",
};
```

### `models.InputSecurityLake`

```typescript
const value: models.InputSecurityLake = {
  id: "<id>",
  type: "security_lake",
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  queueName: "<value>",
  awsAccountId: "<id>",
  awsSecretKey: "<value>",
  region: "<value>",
  endpoint: "<value>",
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
  ],
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  preprocess: {
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
  checkpointing: {},
  encoding: "<value>",
  description: "lightly before puppet modulo onto sustenance bus snappy brook",
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
  id: "<id>",
  type: "zscaler_hec",
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  port: 8324.99,
  authTokens: [
    {
      tokenSecret: "<value>",
      token: "<value>",
      description: "hmph hunger geez drug scented beep overproduce scrap",
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
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1.1",
    maxVersion: "TLSv1",
  },
  enableHealthCheck: "<value>",
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
  accessControlAllowOrigin: [
    "<value 1>",
  ],
  accessControlAllowHeaders: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  description: "reword efface hm oof hawk fencing boulevard because",
};
```

### `models.InputCloudflareHec`

```typescript
const value: models.InputCloudflareHec = {
  id: "<id>",
  type: "cloudflare_hec",
  pipeline: "<value>",
  environment: "<value>",
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
    pqControls: {},
  },
  port: 7356,
  authTokens: [
    {
      tokenSecret: "<value>",
      token: "<value>",
      description: "mobilise vamoose woot",
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
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1.1",
    maxVersion: "TLSv1",
  },
  enableHealthCheck: "<value>",
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
  accessControlAllowOrigin: [
    "<value 1>",
  ],
  accessControlAllowHeaders: [
    "<value 1>",
  ],
  description: "murky not boastfully annex warmly",
};
```

