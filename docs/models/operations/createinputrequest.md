# CreateInputRequest

New Source object


## Supported Types

### `models.InputCollection`

```typescript
const value: models.InputCollection = {
  id: "<id>",
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
  pq: {},
  breakerRulesets: [
    "<value 1>",
  ],
  preprocess: {
    command: "<value>",
    args: [
      "<value 1>",
      "<value 2>",
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

### `operations.InputKafka`

```typescript
const value: operations.InputKafka = {
  id: "<id>",
  type: "kafka",
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
  pq: {},
  brokers: [
    "<value 1>",
    "<value 2>",
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
      minVersion: "TLSv1.3",
      maxVersion: "TLSv1.2",
    },
  },
  sasl: {},
  tls: {
    servername: "<value>",
    certificateName: "<value>",
    caPath: "<value>",
    privKeyPath: "<value>",
    certPath: "<value>",
    passphrase: "<value>",
    minVersion: "TLSv1.2",
    maxVersion: "TLSv1",
  },
  autoCommitInterval: 4876.37,
  autoCommitThreshold: 2845.27,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description:
    "lively mousse edible gradient sheepishly amnesty whereas even newsprint french",
};
```

### `operations.InputMsk`

```typescript
const value: operations.InputMsk = {
  id: "<id>",
  type: "msk",
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
  pq: {},
  brokers: [
    "<value 1>",
    "<value 2>",
  ],
  topics: [],
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
      maxVersion: "TLSv1.1",
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
    minVersion: "TLSv1.1",
    maxVersion: "TLSv1",
  },
  autoCommitInterval: 5919.43,
  autoCommitThreshold: 6602.75,
  description: "puzzled kettledrum goat",
  awsApiKey: "<value>",
  awsSecret: "<value>",
};
```

### `operations.InputHttp`

```typescript
const value: operations.InputHttp = {
  id: "<id>",
  type: "http",
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
  pq: {},
  port: 1963.07,
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
    rejectUnauthorized: "<value>",
    commonNameRegex: "<value>",
    minVersion: "TLSv1",
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
      description: "round defrag preregister oddly atomize why more hygienic",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
    },
  ],
  description: "federate gadzooks duh",
};
```

### `operations.InputSplunk`

```typescript
const value: operations.InputSplunk = {
  id: "<id>",
  type: "splunk",
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
  pq: {},
  port: 9904.57,
  tls: {
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    rejectUnauthorized: "<value>",
    commonNameRegex: "<value>",
    minVersion: "TLSv1.2",
    maxVersion: "TLSv1.2",
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
    "<value 3>",
  ],
  authTokens: [
    {
      token: "<value>",
      description: "dwell earnest inspection little overspend generally",
    },
  ],
  description: "teeming prestigious though",
};
```

### `operations.InputSplunkSearch`

```typescript
const value: operations.InputSplunkSearch = {
  id: "<id>",
  type: "splunk_search",
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
  pq: {},
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
  logLevel: "warn",
  encoding: "<value>",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  retryRules: {
    codes: [
      9296.25,
      8411.56,
    ],
  },
  breakerRulesets: [
    "<value 1>",
  ],
  description: "behind aboard keenly",
  username: "Hettie.Dooley11",
  password: "p27HSB4JAXr1In_",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://frank-joy.com/",
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

### `operations.InputSplunkHec`

```typescript
const value: operations.InputSplunkHec = {
  id: "<id>",
  type: "splunk_hec",
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
  pq: {},
  port: 6090.96,
  authTokens: [
    {
      tokenSecret: "<value>",
      token: "<value>",
      description:
        "gullible lazily outdo hence oof chatter in ah loyalty urgently",
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
    rejectUnauthorized: "<value>",
    commonNameRegex: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1.1",
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
    "<value 2>",
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
  description: "flowery amnesty round huzzah",
};
```

### `operations.InputAzureBlob`

```typescript
const value: operations.InputAzureBlob = {
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
  pq: {},
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
    "<value 3>",
  ],
  description: "geez offensively yearly and pfft",
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
  pq: {},
  port: 9974.96,
  tls: {
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    rejectUnauthorized: "<value>",
    commonNameRegex: "<value>",
    minVersion: "TLSv1.2",
    maxVersion: "TLSv1.1",
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
    url: "https://lustrous-understanding.org/",
    removeHeaders: [
      "<value 1>",
      "<value 2>",
    ],
  },
  description: "spotless scaly parallel before",
  username: "Devonte23",
  password: "hV3t_QfeysWG4cX",
  credentialsSecret: "<value>",
  authTokens: [
    "<value 1>",
  ],
};
```

### `operations.InputConfluentCloud`

```typescript
const value: operations.InputConfluentCloud = {
  id: "<id>",
  type: "confluent_cloud",
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
  pq: {},
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
    maxVersion: "TLSv1.3",
  },
  topics: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
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
      maxVersion: "TLSv1",
    },
  },
  sasl: {},
  autoCommitInterval: 787.57,
  autoCommitThreshold: 4231.91,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "intensely without per atop teriyaki considering strong",
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
  },
  host: "0.0.0.0",
  port: 3829.93,
  tls: {
    disabled: true,
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    requestCert: false,
    rejectUnauthorized: "<value>",
    commonNameRegex: "<value>",
    minVersion: "TLSv1.2",
    maxVersion: "TLSv1.3",
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
    username: "Antonietta.Stehr19",
    password: "MqrKhTNCXTRzTJ4",
    token: "<value>",
    credentialsSecret: "<value>",
    textSecret: "<value>",
    loginUrl: "https://annual-rosemary.net/",
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
    username: "Kamille_Spinka14",
    password: "j2wLP5YnNQJeNfb",
    token: "<value>",
    credentialsSecret: "<value>",
    textSecret: "<value>",
    loginUrl: "https://smug-linseed.net/",
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
  id: "<id>",
  type: "loki",
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
  pq: {},
  port: 1755.24,
  tls: {
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    rejectUnauthorized: "<value>",
    commonNameRegex: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1.3",
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "solution putrid emphasize joshingly",
  username: "Tyrique_Gottlieb",
  password: "7kDXC44EtfZP4F8",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://our-reservation.biz",
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

### `operations.InputPrometheusRw`

```typescript
const value: operations.InputPrometheusRw = {
  id: "<id>",
  type: "prometheus_rw",
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
  pq: {},
  port: 3167.27,
  tls: {
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    rejectUnauthorized: "<value>",
    commonNameRegex: "<value>",
    minVersion: "TLSv1.2",
    maxVersion: "TLSv1.3",
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "ragged ew sightseeing wavy except keenly wide",
  username: "Cara6",
  password: "lUYYKvzYoOK8P9O",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://proper-experience.net",
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

### `operations.InputPrometheus`

```typescript
const value: operations.InputPrometheus = {
  id: "<id>",
  type: "prometheus",
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
  pq: {},
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
  description: "rule annual corner when toward front and refute hmph times",
  targetList: [
    "<value 1>",
  ],
  nameList: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  searchFilter: [
    {
      name: "<value>",
      values: [
        "<value 1>",
        "<value 2>",
      ],
    },
  ],
  awsSecretKey: "<value>",
  region: "<value>",
  endpoint: "<value>",
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  username: "Orion_Senger",
  password: "DNsHPUxEKSAbzVy",
  credentialsSecret: "<value>",
};
```

### `operations.InputEdgePrometheus`

```typescript
const value: operations.InputEdgePrometheus = {
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
  pq: {},
  dimensionList: [
    "<value 1>",
    "<value 2>",
  ],
  persistence: {},
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "pish jut yum hm swat what",
  targets: [
    {
      host: "another-valley.org",
    },
  ],
  nameList: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  searchFilter: [
    {
      name: "<value>",
      values: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
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
      description: "um which tune cease formamide whose aha general",
    },
  ],
  username: "Philip15",
  password: "2ORKHoy6eazlQYr",
  credentialsSecret: "<value>",
};
```

### `operations.InputOffice365Mgmt`

```typescript
const value: operations.InputOffice365Mgmt = {
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
  pq: {},
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
      description: "frantically ugh pish muddy that huzzah intently rosemary",
      interval: 1108.98,
      logLevel: "info",
      enabled: true,
    },
  ],
  retryRules: {
    codes: [
      9712.62,
    ],
  },
  description: "upright wide quarterly diligently sympathetically hunt",
  clientSecret: "<value>",
  textSecret: "<value>",
};
```

### `operations.InputOffice365Service`

```typescript
const value: operations.InputOffice365Service = {
  id: "<id>",
  type: "office365_service",
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
  pq: {},
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
      description: "ultimate brave highly rosy sesame yippee pip list",
      interval: 1222.84,
      logLevel: "error",
      enabled: true,
    },
  ],
  retryRules: {
    codes: [
      3418.23,
      6836.7,
    ],
  },
  description: "fedora free overreact mesh afore buzzing",
  clientSecret: "<value>",
  textSecret: "<value>",
};
```

### `operations.InputOffice365MsgTrace`

```typescript
const value: operations.InputOffice365MsgTrace = {
  id: "<id>",
  type: "office365_msg_trace",
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
  pq: {},
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
      4575.54,
      6824.2,
      4579.88,
    ],
  },
  description:
    "opposite crystallize blissfully unto until consequently seriously jagged forenenst qua",
  username: "Kamron.Wolf72",
  password: "hRl1wgzkZUnsJd7",
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

### `operations.InputEventhub`

```typescript
const value: operations.InputEventhub = {
  id: "<id>",
  type: "eventhub",
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
  pq: {},
  brokers: [],
  topics: [],
  sasl: {},
  tls: {},
  autoCommitInterval: 2006.82,
  autoCommitThreshold: 6349.74,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "so rich coincide even geez like",
};
```

### `operations.InputExec`

```typescript
const value: operations.InputExec = {
  id: "<id>",
  type: "exec",
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
  pq: {},
  command: "<value>",
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
  description: "as amidst stupendous since",
};
```

### `operations.InputFirehose`

```typescript
const value: operations.InputFirehose = {
  id: "<id>",
  type: "firehose",
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
  pq: {},
  port: 3448.68,
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
    rejectUnauthorized: "<value>",
    commonNameRegex: "<value>",
    minVersion: "TLSv1.3",
    maxVersion: "TLSv1.3",
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "knowledgeably interviewer dampen rot",
};
```

### `operations.InputGooglePubsub`

```typescript
const value: operations.InputGooglePubsub = {
  id: "<id>",
  type: "google_pubsub",
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
  pq: {},
  topicName: "<value>",
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
  description: "ruddy whether whole yuck fooey valiantly sun",
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
  pq: {},
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

### `operations.InputCriblTcp`

```typescript
const value: operations.InputCriblTcp = {
  id: "<id>",
  type: "cribl_tcp",
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
  pq: {},
  port: 5951.43,
  tls: {
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    rejectUnauthorized: "<value>",
    commonNameRegex: "<value>",
    minVersion: "TLSv1.2",
    maxVersion: "TLSv1",
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "limply instead at hmph slow as whose",
};
```

### `operations.InputCriblHttp`

```typescript
const value: operations.InputCriblHttp = {
  id: "<id>",
  type: "cribl_http",
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
  pq: {},
  port: 4612.09,
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
    rejectUnauthorized: "<value>",
    commonNameRegex: "<value>",
    minVersion: "TLSv1.3",
    maxVersion: "TLSv1",
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description:
    "forearm proud defrag punctually steel unless treasure doubtfully where but",
};
```

### `operations.InputCriblLakeHttp`

```typescript
const value: operations.InputCriblLakeHttp = {
  id: "<id>",
  type: "cribl_lake_http",
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
  pq: {},
  port: 4524.65,
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
    rejectUnauthorized: "<value>",
    commonNameRegex: "<value>",
    minVersion: "TLSv1.1",
    maxVersion: "TLSv1.3",
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "actually dreamily if acceptable",
};
```

### `operations.InputTcpjson`

```typescript
const value: operations.InputTcpjson = {
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
  pq: {},
  port: 1891.29,
  tls: {
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    rejectUnauthorized: "<value>",
    commonNameRegex: "<value>",
    minVersion: "TLSv1.3",
    maxVersion: "TLSv1.1",
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "since legend cheerfully unwieldy an blah pry likewise",
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
  pq: {},
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
  pq: {},
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
  pq: {},
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
  pq: {},
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
  pq: {},
  rules: [
    {
      filter: "<value>",
      description: "which incline beautifully",
    },
  ],
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "convection any mmm whereas major so regularly",
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
  pq: {},
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

### `operations.InputCrowdstrike`

```typescript
const value: operations.InputCrowdstrike = {
  id: "<id>",
  type: "crowdstrike",
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
  pq: {},
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
  description: "finally frightfully upwardly",
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
  pq: {},
  port: 5741.93,
  tls: {
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    rejectUnauthorized: "<value>",
    commonNameRegex: "<value>",
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
  description: "nearly hmph noteworthy",
};
```

### `operations.InputDatagen`

```typescript
const value: operations.InputDatagen = {
  id: "<id>",
  type: "datagen",
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
  pq: {},
  samples: [],
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "reorient down but toward sore incidentally fond",
};
```

### `operations.InputHttpRaw`

```typescript
const value: operations.InputHttpRaw = {
  id: "<id>",
  type: "http_raw",
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
  pq: {},
  port: 8183.22,
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
    rejectUnauthorized: "<value>",
    commonNameRegex: "<value>",
    minVersion: "TLSv1.2",
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
  ],
  allowedMethods: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  authTokensExt: [
    {
      token: "<value>",
      description: "uh-huh rotten orientate",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
    },
  ],
  description: "questionably junior crafty",
};
```

### `operations.InputKinesis`

```typescript
const value: operations.InputKinesis = {
  id: "<id>",
  type: "kinesis",
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
  pq: {},
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
  description:
    "incidentally sin jovially obediently certainly besmirch amidst leading costume",
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
  pq: {},
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "playfully growing curl blight cone likely innocently amongst",
};
```

### `operations.InputMetrics`

```typescript
const value: operations.InputMetrics = {
  id: "<id>",
  type: "metrics",
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
  pq: {},
  udpPort: 4174.17,
  tcpPort: 1396.61,
  tls: {
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    rejectUnauthorized: "<value>",
    commonNameRegex: "<value>",
    minVersion: "TLSv1.3",
    maxVersion: "TLSv1.3",
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  udpSocketRxBufSize: 4811.96,
  description:
    "beyond kindheartedly lest viciously unfortunate miserably whether contrail convection",
};
```

### `operations.InputS3`

```typescript
const value: operations.InputS3 = {
  id: "<id>",
  type: "s3",
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
  pq: {},
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
  description: "march train tentacle besmirch zowie adaptation sate",
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
  pq: {},
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
  description: "attraction rival as mobilize through",
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
  id: "<id>",
  type: "snmp",
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
  pq: {},
  snmpV3Auth: {
    v3Users: [
      {
        name: "<value>",
        authKey: "<value>",
      },
    ],
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  udpSocketRxBufSize: 6334.83,
  description: "navigate draft fooey",
};
```

### `operations.InputOpenTelemetry`

```typescript
const value: operations.InputOpenTelemetry = {
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
  pq: {},
  tls: {
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    rejectUnauthorized: "<value>",
    commonNameRegex: "<value>",
    minVersion: "TLSv1.1",
    maxVersion: "TLSv1.3",
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
  description:
    "jet yippee until since inquisitively where baritone frivolous yahoo",
  username: "Ceasar14",
  password: "lQsmyV5PHv6hDzL",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://unlawful-overcoat.name",
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

### `operations.InputModelDrivenTelemetry`

```typescript
const value: operations.InputModelDrivenTelemetry = {
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
  pq: {},
  tls: {
    certificateName: "<value>",
    privKeyPath: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    rejectUnauthorized: "<value>",
    commonNameRegex: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1.3",
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description:
    "complete insert connect metabolise flight reconstitute converse following fumigate anenst",
};
```

### `operations.InputSqs`

```typescript
const value: operations.InputSqs = {
  id: "<id>",
  type: "sqs",
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
  pq: {},
  queueName: "<value>",
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
  description: "um given armchair of indeed",
  awsApiKey: "<value>",
  awsSecret: "<value>",
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
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    requestCert: false,
    rejectUnauthorized: "<value>",
    commonNameRegex: "<value>",
    minVersion: "TLSv1.2",
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
  pq: {},
  filenames: [
    "<value 1>",
  ],
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

### `operations.InputTcp`

```typescript
const value: operations.InputTcp = {
  id: "<id>",
  type: "tcp",
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
  pq: {},
  port: 9276.01,
  tls: {
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    rejectUnauthorized: "<value>",
    commonNameRegex: "<value>",
    minVersion: "TLSv1.1",
    maxVersion: "TLSv1.2",
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
  preprocess: {
    command: "<value>",
    args: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  description: "handle fork because neatly kiddingly nervous upbeat indeed yum",
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
  pq: {},
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
    rejectUnauthorized: "<value>",
    commonNameRegex: "<value>",
    minVersion: "TLSv1.2",
    maxVersion: "TLSv1.3",
  },
  unixSocketPerms: "<value>",
  textSecret: "<value>",
};
```

### `operations.InputWef`

```typescript
const value: operations.InputWef = {
  id: "<id>",
  type: "wef",
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
  pq: {},
  tls: {
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1",
    keytab: "<value>",
    principal: "<value>",
  },
  caFingerprint: "<value>",
  keytab: "<value>",
  principal: "<value>",
  subscriptions: [],
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "per absent fill weighty firsthand wing",
};
```

### `operations.InputWinEventLogs`

```typescript
const value: operations.InputWinEventLogs = {
  id: "<id>",
  type: "win_event_logs",
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
  pq: {},
  logNames: [
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
  description: "oh forsaken far",
};
```

### `operations.InputRawUdp`

```typescript
const value: operations.InputRawUdp = {
  id: "<id>",
  type: "raw_udp",
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
  pq: {},
  port: 4663.95,
  udpSocketRxBufSize: 8690.82,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "of revoke descriptive down accountability",
};
```

### `operations.InputJournalFiles`

```typescript
const value: operations.InputJournalFiles = {
  id: "<id>",
  type: "journal_files",
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
  pq: {},
  path: "/etc/namedb",
  journals: [
    "<value 1>",
    "<value 2>",
  ],
  rules: [
    {
      filter: "<value>",
      description:
        "rigidly exactly outside questioningly around aw gleaming boo as oof",
    },
  ],
  maxAgeDur: "<value>",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "eek syringe impeccable whenever extent",
};
```

### `operations.InputWiz`

```typescript
const value: operations.InputWiz = {
  id: "<id>",
  type: "wiz",
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
  pq: {},
  authUrl: "https://excellent-hubris.info",
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
      3197.12,
      9347.83,
      4274.91,
    ],
  },
  description:
    "ravage indeed self-reliant abnormally miscalculate hm in quaintly inborn separately",
  clientSecret: "<value>",
  textSecret: "<value>",
};
```

### `operations.InputNetflow`

```typescript
const value: operations.InputNetflow = {
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
  pq: {},
  udpSocketRxBufSize: 7496.42,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "wherever amnesty apud underpants why blah viciously geez",
};
```

### `operations.InputSecurityLake`

```typescript
const value: operations.InputSecurityLake = {
  id: "<id>",
  type: "security_lake",
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
  pq: {},
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
  description: "deafening stormy absent knowingly unfortunately eek",
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
  pq: {},
  port: 5282.2,
  authTokens: [
    {
      tokenSecret: "<value>",
      token: "<value>",
      description:
        "free delightfully sometimes closely crystallize frantically",
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
    rejectUnauthorized: "<value>",
    commonNameRegex: "<value>",
    minVersion: "TLSv1.2",
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
  ],
  description: "sternly during when configuration tackle",
};
```

