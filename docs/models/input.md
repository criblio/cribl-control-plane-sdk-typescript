# Input


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
      minVersion: "TLSv1",
      maxVersion: "TLSv1.1",
    },
  },
  sasl: {
    username: "Lawrence94",
    password: "hbkNKV3cY3UdBi5",
    credentialsSecret: "<value>",
    keytabLocation: "<value>",
    principal: "<value>",
    brokerServiceClass: "<value>",
    tokenUrl: "https://trustworthy-grandson.name/",
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
    maxVersion: "TLSv1.1",
  },
  autoCommitInterval: 3898.19,
  autoCommitThreshold: 8460.24,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "pfft solicit coexist mousse for qua onto inside mask",
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
      minVersion: "TLSv1.2",
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
  port: 9904.57,
  tls: {
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
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

### `models.InputSplunkSearch`

```typescript
const value: models.InputSplunkSearch = {
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

### `models.InputInputSplunkHec`

```typescript
const value: models.InputInputSplunkHec = {
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
  port: 103.02,
  authTokens: [
    {
      tokenSecret: "<value>",
      token: "<value>",
      description: "after drum inside frank deflect fork snoop oddly",
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
    minVersion: "TLSv1.3",
    maxVersion: "TLSv1.2",
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
  ],
  accessControlAllowHeaders: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  description:
    "greedily miserly stall carelessly loaf doodle boldly consequently",
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
  port: 9974.96,
  tls: {
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
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
    username: "Carroll_White51",
    password: "TC_QVukRgWyRdNa",
    credentialsSecret: "<value>",
    url: "https://devoted-entry.info",
    removeHeaders: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  description: "develop boohoo variable",
  username: "Santino11",
  password: "XEkWKQg0SbWANXk",
  credentialsSecret: "<value>",
  authTokens: [
    "<value 1>",
    "<value 2>",
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
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1.3",
    },
  },
  sasl: {
    username: "Ariel.McGlynn",
    password: "8Csb_DykduoMG9A",
    credentialsSecret: "<value>",
    keytabLocation: "<value>",
    principal: "<value>",
    brokerServiceClass: "<value>",
    tokenUrl: "https://pure-pile.name/",
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
  autoCommitInterval: 2943.57,
  autoCommitThreshold: 9032.08,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "engender early phooey wholly reproachfully",
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
  description: "below whose roundabout gladly",
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
  port: 1755.24,
  tls: {
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
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

### `models.InputPrometheusRw`

```typescript
const value: models.InputPrometheusRw = {
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
  pq: {
    pqControls: {},
  },
  port: 3167.27,
  tls: {
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
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
  description: "rule annual corner when toward front and refute hmph times",
  targetList: [
    "<value 1>",
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
  awsApiKey: "<value>",
  awsSecret: "<value>",
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

### `models.InputOffice365MsgTrace`

```typescript
const value: models.InputOffice365MsgTrace = {
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

### `models.InputEventhub`

```typescript
const value: models.InputEventhub = {
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
  pq: {
    pqControls: {},
  },
  brokers: [],
  topics: [],
  sasl: {
    password: "4Mq7chYWUjkaysM",
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
  autoCommitInterval: 9617.27,
  autoCommitThreshold: 8316.28,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "even geez like after",
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

### `models.InputFirehose`

```typescript
const value: models.InputFirehose = {
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
  pq: {
    pqControls: {},
  },
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

### `models.InputGooglePubsub`

```typescript
const value: models.InputGooglePubsub = {
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
  description: "zowie which father bakeware forenenst crackle",
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
  port: 5951.43,
  tls: {
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1.2",
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
      description: "limply instead at hmph slow as whose",
    },
  ],
  description: "underneath stabilise by popularity roadway whereas",
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
  port: 4612.09,
  authTokens: [
    {
      tokenSecret: "<value>",
      description: "rapidly upon sonnet um diver urgently switch whereas",
    },
  ],
  tls: {
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1.3",
    maxVersion: "TLSv1",
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "where but failing frizzy",
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
    minVersion: "TLSv1.1",
    maxVersion: "TLSv1.3",
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
      description: "actually dreamily if acceptable",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      splunkHecMetadata: {
        enabled: false,
      },
      elasticsearchMetadata: {
        enabled: true,
      },
    },
  ],
  description: "baa circa unto pigsty instead duh",
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
  port: 1891.29,
  tls: {
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
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
  container: {
    dockerSocket: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
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
  description: "far obnoxiously vainly record phew if which",
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
  description: "or hmph whoa minister that defiantly",
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
  rules: [
    {
      filter: "<value>",
      description: "ack roasted whoa about brr intelligent litter hippodrome",
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
    "cauliflower black after pigpen shakily caption silently reproachfully",
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
  rules: [
    {
      filter: "<value>",
      description: "until roger ceramics free parched",
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
    "<value 2>",
  ],
  description: "appropriate enormously neatly aw upliftingly now while bah er",
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
      description: "whenever unto rotten",
    },
  ],
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "dally mask around oh maul cake musty eyeliner",
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
          "<value 2>",
        ],
      },
      disk: {
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
  description: "furiously apropos nephew",
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

### `models.InputDatadogAgent`

```typescript
const value: models.InputDatadogAgent = {
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
  pq: {
    pqControls: {},
  },
  port: 5741.93,
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
  description: "nearly hmph noteworthy",
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

### `models.InputHttpRaw`

```typescript
const value: models.InputHttpRaw = {
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
  pq: {
    pqControls: {},
  },
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
  pq: {
    pqControls: {},
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "legend devil mismatch until than long",
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
  udpPort: 4174.17,
  tcpPort: 1396.61,
  tls: {
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
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

### `models.InputS3`

```typescript
const value: models.InputS3 = {
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
  description: "attraction rival as mobilize through",
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

### `models.InputSqs`

```typescript
const value: models.InputSqs = {
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
  pq: {
    pqControls: {},
  },
  queueName: "<value>",
  queueType: "standard",
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
  description: "bowling afterwards yippee accessorise",
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
    minVersion: "TLSv1",
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
  ],
  description:
    "stable barring degrease what rapidly incidentally since adaptation",
  path: "/mnt",
  depth: 5325.33,
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
  port: 9276.01,
  tls: {
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
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
    transportURL: "https://lucky-fork.org",
  },
  persistence: {},
  description: "as blindly as whose versus incline rebound sedately",
  host: "lined-integer.com",
  port: 50.46,
  tls: {
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1.1",
    maxVersion: "TLSv1.2",
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

### `models.InputJournalFiles`

```typescript
const value: models.InputJournalFiles = {
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
  pq: {
    pqControls: {},
  },
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

### `models.InputWiz`

```typescript
const value: models.InputWiz = {
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
  pq: {
    pqControls: {},
  },
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
      1412.18,
    ],
  },
  description: "approach sorrowful when clueless hmph after derby represent",
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
  port: 8361.5,
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
      description:
        "acidly silver metallic devoted behind weakly phrase what mosh faithfully",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
    },
  ],
  description: "rigidly meanwhile convince",
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
  description: "deafening stormy absent knowingly unfortunately eek",
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
  port: 623.37,
  authTokens: [
    {
      tokenSecret: "<value>",
      token: "<value>",
      description: "unaccountably yahoo incidentally verify gee once",
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
    minVersion: "TLSv1",
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
  ],
  breakerRulesets: [
    "<value 1>",
  ],
  accessControlAllowOrigin: [
    "<value 1>",
  ],
  accessControlAllowHeaders: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  description: "interviewer accept gosh weakly whether plugin in machine",
};
```

