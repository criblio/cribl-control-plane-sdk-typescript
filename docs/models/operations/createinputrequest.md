# CreateInputRequest

Input object


## Supported Types

### `operations.InputCollection`

```typescript
const value: operations.InputCollection = {
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
  autoCommitInterval: 5993.42,
  autoCommitThreshold: 16.02,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "see redress folklore abacus cooperative than",
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
  autoCommitInterval: 4256.61,
  autoCommitThreshold: 1397.13,
  description: "like thankfully tensely intermix whether mmm via",
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
  pq: {
    pqControls: {},
  },
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
  description: "down lazily insignificant",
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
  authTokens: [
    {
      token: "<value>",
      description: "yuck in indeed sailor beret focused than shameless",
    },
  ],
  description: "continually rigidly sternly oh gah although",
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
      1412.18,
    ],
  },
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
  ],
  description:
    "quintuple dispense after cork knottily meanwhile below adrenalin wholly weary",
  username: "Tania26",
  password: "JWrbdohpQJfHCni",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://courageous-fog.name",
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
  pq: {
    pqControls: {},
  },
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
  ],
  description:
    "smug even malfunction yum provider mobilise hospitalization late ew",
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
    username: "Kiara94",
    password: "Q3TC_QVukRgWyRd",
    credentialsSecret: "<value>",
    url: "https://good-numeracy.info",
    removeHeaders: [
      "<value 1>",
      "<value 2>",
    ],
  },
  description:
    "gadzooks wherever upward troubled ah memorable abnegate mountain",
  username: "Elmo_Satterfield",
  password: "Fr_bql4rORDjf_N",
  credentialsSecret: "<value>",
  authTokens: [
    "<value 1>",
    "<value 2>",
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
  topics: [],
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
  autoCommitInterval: 9291.83,
  autoCommitThreshold: 9755.58,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "athwart unnecessarily although",
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
    minVersion: "TLSv1.1",
    maxVersion: "TLSv1",
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "silk weakly why",
  username: "Gilberto.Miller",
  password: "66EzwF_7kDXC44E",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://giving-reboot.info",
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
    minVersion: "TLSv1.1",
    maxVersion: "TLSv1",
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "nimble where whoever spirited ha useless house blah",
  username: "Meta_Lowe59",
  password: "KvzYoOK8P9OmtzY",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://deafening-offset.com",
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
      Name: "<value>",
      Values: [],
    },
  ],
  awsSecretKey: "<value>",
  region: "<value>",
  endpoint: "<value>",
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  username: "Lewis_Friesen69",
  password: "LDNsHPUxEKSAbzV",
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
      Name: "<value>",
      Values: [],
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
  username: "Velda_Kub9",
  password: "h2ORKHoy6eazlQY",
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
      3814.72,
      1029.82,
    ],
  },
  description: "excess intent scholarship when anguished",
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
      3814.72,
      1029.82,
    ],
  },
  description: "sadly phew trash failing mallard when indeed",
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
  description:
    "carefully times or yum charming unfortunate unimpressively legend",
  username: "Lola.Welch60",
  password: "FZfNY3kgTm5fhRl",
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
  pq: {
    pqControls: {},
  },
  brokers: [],
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
    minVersion: "TLSv1.1",
    maxVersion: "TLSv1",
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "tragic ick oof although lest mid politely pfft vibrant thigh",
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

### `operations.InputCribl`

```typescript
const value: operations.InputCribl = {
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
  description: "tragic hunt psst as sham comb and",
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
  pq: {
    pqControls: {},
  },
  port: 4612.09,
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
  description: "rapidly upon sonnet um diver urgently switch whereas",
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
  description: "pfft till armchair grim joshingly",
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
    "bend since tough without than um whenever aside massive injunction",
  textSecret: "<value>",
};
```

### `operations.InputSystemMetrics`

```typescript
const value: operations.InputSystemMetrics = {
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

### `operations.InputSystemState`

```typescript
const value: operations.InputSystemState = {
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

### `operations.InputKubeMetrics`

```typescript
const value: operations.InputKubeMetrics = {
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
  description: "ack roasted whoa about brr intelligent litter hippodrome",
};
```

### `operations.InputKubeLogs`

```typescript
const value: operations.InputKubeLogs = {
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

### `operations.InputKubeEvents`

```typescript
const value: operations.InputKubeEvents = {
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
      description: "boggle catalog chip ew",
    },
  ],
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "whenever unto rotten",
};
```

### `operations.InputWindowsMetrics`

```typescript
const value: operations.InputWindowsMetrics = {
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
  description: "section amid jungle gah contrast insignificant",
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
  description: "beside supposing scarper inquisitively trash earth",
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
    minVersion: "TLSv1.1",
    maxVersion: "TLSv1",
  },
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
      description: "confide bulky gadzooks ugh concerning rightfully justly",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
    },
  ],
  description: "swordfish provided including",
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

### `operations.InputCriblmetrics`

```typescript
const value: operations.InputCriblmetrics = {
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
    minVersion: "TLSv1.1",
    maxVersion: "TLSv1",
  },
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  udpSocketRxBufSize: 8105.16,
  description:
    "whack wry legislature scrape than complete nasalise overload provision creative",
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
  description: "till equally curly afore",
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
  description:
    "adolescent woot educated plus via tabulate judgementally apud via meh",
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
  description: "indeed sweatshop junior headline fiercely",
  username: "Carmella12",
  password: "cmQ5_dCtiio9E1a",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://stale-duster.name",
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
  description: "sternly oof ick",
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
    minVersion: "TLSv1.1",
    maxVersion: "TLSv1",
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
  description: "heighten yearly once who preside following event",
  textSecret: "<value>",
};
```

### `operations.InputAppscope`

```typescript
const value: operations.InputAppscope = {
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
    maxVersion: "TLSv1",
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

### `operations.InputWizWebhook`

```typescript
const value: operations.InputWizWebhook = {
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
      description: "confide bulky gadzooks ugh concerning rightfully justly",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
    },
  ],
  description: "before haversack who suddenly abscond throughout",
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
  description:
    "thrifty white railway kiddingly chase whether fervently ignite gymnast",
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
  accessControlAllowOrigin: [
    "<value 1>",
  ],
  accessControlAllowHeaders: [
    "<value 1>",
    "<value 2>",
  ],
  description: "federate next beneficial unless",
};
```

### `operations.InputCloudflareHec`

```typescript
const value: operations.InputCloudflareHec = {
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
  ],
  breakerRulesets: [
    "<value 1>",
  ],
  accessControlAllowOrigin: [
    "<value 1>",
    "<value 2>",
  ],
  accessControlAllowHeaders: [
    "<value 1>",
  ],
  description: "ew satirise tomorrow",
};
```

