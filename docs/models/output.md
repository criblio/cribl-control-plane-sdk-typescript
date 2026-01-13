# Output


## Supported Types

### `models.OutputDefault`

```typescript
const value: models.OutputDefault = {
  id: "<id>",
  type: "default",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
  ],
  defaultId: "<id>",
};
```

### `models.OutputWebhook`

```typescript
const value: models.OutputWebhook = {
  id: "<id>",
  type: "webhook",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
    "<value 2>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  extraHttpHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  safeHeaders: [
    "<value 1>",
  ],
  responseRetrySettings: [
    {
      httpStatus: 8829.54,
    },
  ],
  timeoutRetrySettings: {},
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
  totalMemoryLimitKB: 6164.91,
  description: "desk flint ew",
  formatEventCode: "<value>",
  formatPayloadCode: "<value>",
  pqControls: {},
  username: "Ena.Gusikowski",
  password: "jSPwz2GSP4NZBJL",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://unusual-wedding.com/",
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
  url: "https://enlightened-marimba.biz",
  urls: [
    {
      url: "https://vast-sideboard.name/",
    },
  ],
};
```

### `models.OutputSentinel`

```typescript
const value: models.OutputSentinel = {
  id: "<id>",
  type: "sentinel",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
  ],
  extraHttpHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  safeHeaders: [
    "<value 1>",
    "<value 2>",
  ],
  responseRetrySettings: [
    {
      httpStatus: 8829.54,
    },
  ],
  timeoutRetrySettings: {},
  authType: "oauth",
  loginUrl: "https://miserable-newsletter.name",
  secret: "<value>",
  client_id: "<id>",
  totalMemoryLimitKB: 757.83,
  description:
    "idealistic sneak preregister unlike incidentally bah hose colligate once sailor",
  format: "json_array",
  formatEventCode: "<value>",
  formatPayloadCode: "<value>",
  pqControls: {},
  url: "https://unwieldy-reach.name/",
  dcrID: "<id>",
  dceEndpoint: "<value>",
  streamName: "<value>",
};
```

### `models.OutputDevnull`

```typescript
const value: models.OutputDevnull = {
  id: "<id>",
  type: "devnull",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
  ],
};
```

### `models.OutputSyslog`

```typescript
const value: models.OutputSyslog = {
  id: "<id>",
  type: "syslog",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
  ],
  octetCountFraming: true,
  description: "deliberately gadzooks reconsideration",
  host: "quick-boulevard.name",
  port: 5929.27,
  hosts: [
    {
      host: "international-orchid.org",
      port: 6476.63,
      servername: "<value>",
    },
  ],
  tls: {
    servername: "<value>",
    certificateName: "<value>",
    caPath: "<value>",
    privKeyPath: "<value>",
    certPath: "<value>",
    passphrase: "<value>",
    minVersion: "TLSv1.2",
    maxVersion: "TLSv1.3",
  },
  pqControls: {},
};
```

### `models.OutputSplunk`

```typescript
const value: models.OutputSplunk = {
  id: "<id>",
  type: "splunk",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  host: "elastic-custody.com",
  tls: {
    servername: "<value>",
    certificateName: "<value>",
    caPath: "<value>",
    privKeyPath: "<value>",
    certPath: "<value>",
    passphrase: "<value>",
    minVersion: "TLSv1.2",
    maxVersion: "TLSv1.3",
  },
  description: "nor brr aggravating",
  pqControls: {},
  textSecret: "<value>",
};
```

### `models.OutputSplunkLb`

```typescript
const value: models.OutputSplunkLb = {
  id: "<id>",
  type: "splunk_lb",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
  ],
  tls: {
    servername: "<value>",
    certificateName: "<value>",
    caPath: "<value>",
    privKeyPath: "<value>",
    certPath: "<value>",
    passphrase: "<value>",
    minVersion: "TLSv1.2",
    maxVersion: "TLSv1.3",
  },
  description: "amongst hammock across vice",
  indexerDiscoveryConfigs: {
    masterUri: "https://stunning-settler.info/",
    authTokens: [
      {
        textSecret: "<value>",
      },
    ],
    textSecret: "<value>",
  },
  hosts: [
    {
      host: "scornful-formula.biz",
      servername: "<value>",
    },
  ],
  pqControls: {},
  textSecret: "<value>",
};
```

### `models.OutputSplunkHec`

```typescript
const value: models.OutputSplunkHec = {
  id: "<id>",
  type: "splunk_hec",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
    "<value 2>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
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
  extraHttpHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  safeHeaders: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  responseRetrySettings: [
    {
      httpStatus: 8829.54,
    },
  ],
  timeoutRetrySettings: {},
  description: "elevator showy even",
  urls: [
    {},
  ],
  token: "<value>",
  textSecret: "<value>",
  pqControls: {},
};
```

### `models.OutputWizHec`

```typescript
const value: models.OutputWizHec = {
  id: "<id>",
  type: "wiz_hec",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
    "<value 2>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
  ],
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
  extraHttpHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  safeHeaders: [
    "<value 1>",
  ],
  responseRetrySettings: [
    {
      httpStatus: 8829.54,
    },
  ],
  timeoutRetrySettings: {},
  description: "towards pleasant against save doubter underneath",
  urls: [
    {},
  ],
  token: "<value>",
  textSecret: "<value>",
};
```

### `models.OutputTcpjson`

```typescript
const value: models.OutputTcpjson = {
  id: "<id>",
  type: "tcpjson",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
    "<value 2>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
  ],
  tls: {
    servername: "<value>",
    certificateName: "<value>",
    caPath: "<value>",
    privKeyPath: "<value>",
    certPath: "<value>",
    passphrase: "<value>",
    minVersion: "TLSv1.2",
    maxVersion: "TLSv1.3",
  },
  description:
    "that coincide from incidentally versus whose pace phew loudly out",
  host: "strong-teriyaki.org",
  port: 8883.92,
  hosts: [
    {
      host: "international-orchid.org",
      port: 6476.63,
      servername: "<value>",
    },
  ],
  pqControls: {},
  textSecret: "<value>",
};
```

### `models.OutputWavefront`

```typescript
const value: models.OutputWavefront = {
  id: "<id>",
  type: "wavefront",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
    "<value 2>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  extraHttpHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  safeHeaders: [
    "<value 1>",
    "<value 2>",
  ],
  responseRetrySettings: [
    {
      httpStatus: 8829.54,
    },
  ],
  timeoutRetrySettings: {},
  description:
    "how bloom behind hoarse ruddy yum yowza boohoo tomorrow overvalue",
  token: "<value>",
  textSecret: "<value>",
  pqControls: {},
};
```

### `models.OutputSignalfx`

```typescript
const value: models.OutputSignalfx = {
  id: "<id>",
  type: "signalfx",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
    "<value 2>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
  ],
  extraHttpHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  safeHeaders: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  responseRetrySettings: [
    {
      httpStatus: 8829.54,
    },
  ],
  timeoutRetrySettings: {},
  description:
    "since furthermore zowie rust stable dream an greedily far which",
  token: "<value>",
  textSecret: "<value>",
  pqControls: {},
};
```

### `models.OutputFilesystem`

```typescript
const value: models.OutputFilesystem = {
  id: "<id>",
  type: "filesystem",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
  ],
  destPath: "<value>",
  stagePath: "<value>",
  description: "politely provided generously scary squid blah astride",
  parquetSchema: "<value>",
  shouldLogInvalidRows: false,
  keyValueMetadata: [
    {
      value: "<value>",
    },
  ],
};
```

### `models.OutputS3`

```typescript
const value: models.OutputS3 = {
  id: "<id>",
  type: "s3",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  bucket: "<value>",
  region: "<value>",
  awsSecretKey: "<value>",
  endpoint: "<value>",
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  storageClass: "STANDARD_IA",
  serverSideEncryption: "aws:kms",
  kmsKeyId: "<id>",
  description: "excepting under fatally until below",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  parquetSchema: "<value>",
  shouldLogInvalidRows: false,
  keyValueMetadata: [
    {
      value: "<value>",
    },
  ],
};
```

### `models.OutputAzureBlob`

```typescript
const value: models.OutputAzureBlob = {
  id: "<id>",
  type: "azure_blob",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
    "<value 2>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  containerName: "<value>",
  destPath: "<value>",
  description: "rigidly off athwart very despite above abaft",
  parquetSchema: "<value>",
  shouldLogInvalidRows: true,
  keyValueMetadata: [
    {
      value: "<value>",
    },
  ],
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

### `models.OutputAzureDataExplorer`

```typescript
const value: models.OutputAzureDataExplorer = {
  id: "<id>",
  type: "azure_data_explorer",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
  ],
  clusterUrl: "https://royal-duffel.biz",
  database: "<value>",
  table: "<value>",
  tenantId: "<id>",
  clientId: "<id>",
  scope: "<value>",
  description: "certainly madly shyly tragic made-up happy gee",
  clientSecret: "<value>",
  textSecret: "<value>",
  certificate: {
    certificateName: "<value>",
  },
  parquetSchema: "<value>",
  shouldLogInvalidRows: true,
  keyValueMetadata: [
    {
      value: "<value>",
    },
  ],
  mappingObj: "<value>",
  mappingRef: "<value>",
  ingestUrl: "https://dependable-jury.biz/",
  extentTags: [
    {
      prefix: "ingestBy",
      value: "<value>",
    },
  ],
  ingestIfNotExists: [
    {
      value: "<value>",
    },
  ],
  additionalProperties: [
    {
      key: "<key>",
      value: "<value>",
    },
  ],
  responseRetrySettings: [
    {
      httpStatus: 8829.54,
    },
  ],
  timeoutRetrySettings: {},
  pqControls: {},
};
```

### `models.OutputAzureLogs`

```typescript
const value: models.OutputAzureLogs = {
  id: "<id>",
  type: "azure_logs",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  resourceId: "<id>",
  compress: false,
  extraHttpHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  safeHeaders: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  responseRetrySettings: [
    {
      httpStatus: 8829.54,
    },
  ],
  timeoutRetrySettings: {},
  description: "whoa through broadly aside fooey triumphantly tarry ghost",
  pqControls: {},
  workspaceId: "<id>",
  workspaceKey: "<value>",
  keypairSecret: "<value>",
};
```

### `models.OutputKinesis`

```typescript
const value: models.OutputKinesis = {
  id: "<id>",
  type: "kinesis",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
  ],
  streamName: "<value>",
  awsSecretKey: "<value>",
  region: "<value>",
  endpoint: "<value>",
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  description: "amidst hm bony",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  pqControls: {},
};
```

### `models.OutputHoneycomb`

```typescript
const value: models.OutputHoneycomb = {
  id: "<id>",
  type: "honeycomb",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
  ],
  dataset: "<value>",
  extraHttpHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  safeHeaders: [
    "<value 1>",
    "<value 2>",
  ],
  responseRetrySettings: [
    {
      httpStatus: 8829.54,
    },
  ],
  timeoutRetrySettings: {},
  description:
    "smart hygienic coolly scarification frightfully defiantly bah for qua",
  pqControls: {},
  team: "<value>",
  textSecret: "<value>",
};
```

### `models.OutputAzureEventhub`

```typescript
const value: models.OutputAzureEventhub = {
  id: "<id>",
  type: "azure_eventhub",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
  ],
  brokers: [],
  topic: "<value>",
  sasl: {
    password: "crxTx4Amn7CtfAT",
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
  description: "per inquisitively with but",
  pqControls: {},
};
```

### `models.OutputGoogleChronicle`

```typescript
const value: models.OutputGoogleChronicle = {
  id: "<id>",
  type: "google_chronicle",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
    "<value 2>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
  ],
  responseRetrySettings: [
    {
      httpStatus: 8829.54,
    },
  ],
  timeoutRetrySettings: {},
  region: "<value>",
  extraHttpHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  safeHeaders: [
    "<value 1>",
  ],
  totalMemoryLimitKB: 2637.18,
  description: "generally hence defiantly",
  extraLogTypes: [
    {
      logType: "<value>",
      description:
        "pace around behind zowie dreary um while considering menacing lest",
    },
  ],
  logType: "<value>",
  logTextField: "<value>",
  customerId: "<id>",
  namespace: "<value>",
  customLabels: [
    {
      key: "<key>",
      value: "<value>",
    },
  ],
  apiKey: "<value>",
  apiKeySecret: "<value>",
  serviceAccountCredentials: "<value>",
  serviceAccountCredentialsSecret: "<value>",
  pqControls: {},
};
```

### `models.OutputGoogleCloudStorage`

```typescript
const value: models.OutputGoogleCloudStorage = {
  id: "<id>",
  type: "google_cloud_storage",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
  ],
  bucket: "<value>",
  region: "<value>",
  storageClass: "ARCHIVE",
  description: "piglet unnaturally near reassuringly since",
  parquetSchema: "<value>",
  shouldLogInvalidRows: false,
  keyValueMetadata: [
    {
      value: "<value>",
    },
  ],
  awsApiKey: "<value>",
  awsSecretKey: "<value>",
  awsSecret: "<value>",
};
```

### `models.OutputGoogleCloudLogging`

```typescript
const value: models.OutputGoogleCloudLogging = {
  id: "<id>",
  type: "google_cloud_logging",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  logLocationType: "folder",
  logNameExpression: "<value>",
  logLabels: [
    {
      label: "<value>",
      valueExpression: "<value>",
    },
  ],
  resourceTypeExpression: "<value>",
  resourceTypeLabels: [
    {
      label: "<value>",
      valueExpression: "<value>",
    },
  ],
  severityExpression: "<value>",
  insertIdExpression: "<value>",
  serviceAccountCredentials: "<value>",
  secret: "<value>",
  throttleRateReqPerSec: 369544,
  requestMethodExpression: "<value>",
  requestUrlExpression: "<value>",
  requestSizeExpression: "<value>",
  statusExpression: "<value>",
  responseSizeExpression: "<value>",
  userAgentExpression: "<value>",
  remoteIpExpression: "<value>",
  serverIpExpression: "<value>",
  refererExpression: "<value>",
  latencyExpression: "<value>",
  cacheLookupExpression: "<value>",
  cacheHitExpression: "<value>",
  cacheValidatedExpression: "<value>",
  cacheFillBytesExpression: "<value>",
  protocolExpression: "<value>",
  idExpression: "<value>",
  producerExpression: "<value>",
  firstExpression: "<value>",
  lastExpression: "<value>",
  fileExpression: "<value>",
  lineExpression: "<value>",
  functionExpression: "<value>",
  uidExpression: "<value>",
  indexExpression: "<value>",
  totalSplitsExpression: "<value>",
  traceExpression: "<value>",
  spanIdExpression: "<value>",
  traceSampledExpression: "<value>",
  totalMemoryLimitKB: 6994.09,
  description: "violently tremendously hunger overdue",
  logLocationExpression: "<value>",
  payloadExpression: "<value>",
  pqControls: {},
};
```

### `models.OutputGooglePubsub`

```typescript
const value: models.OutputGooglePubsub = {
  id: "<id>",
  type: "google_pubsub",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
  ],
  topicName: "<value>",
  region: "<value>",
  serviceAccountCredentials: "<value>",
  secret: "<value>",
  description: "ironclad ouch for graft ice-cream seldom nor between",
  pqControls: {},
};
```

### `models.OutputExabeam`

```typescript
const value: models.OutputExabeam = {
  id: "<id>",
  type: "exabeam",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
    "<value 2>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
  ],
  bucket: "<value>",
  region: "<value>",
  storageClass: "NEARLINE",
  encodedConfiguration: "<value>",
  collectorInstanceId: "<id>",
  siteName: "<value>",
  siteId: "<id>",
  timezoneOffset: "<value>",
  awsApiKey: "<value>",
  awsSecretKey: "<value>",
  description: "extremely why whether irritably yeast yieldingly",
};
```

### `models.OutputKafka`

```typescript
const value: models.OutputKafka = {
  id: "<id>",
  type: "kafka",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
    "<value 2>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  brokers: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  topic: "<value>",
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
      maxVersion: "TLSv1.3",
    },
    defaultKeySchemaId: 5573.36,
    defaultValueSchemaId: 4635.91,
  },
  sasl: {
    username: "Jocelyn_Casper88",
    password: "PIwQ9BxwvdkIdNi",
    credentialsSecret: "<value>",
    keytabLocation: "<value>",
    principal: "<value>",
    brokerServiceClass: "<value>",
    tokenUrl: "https://alive-spear.com",
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
    minVersion: "TLSv1.2",
    maxVersion: "TLSv1.3",
  },
  description:
    "barring whoa jaggedly wrathful among sense lanky sprinkles pitiful unto",
  protobufLibraryId: "<id>",
  protobufEncodingId: "<id>",
  pqControls: {},
};
```

### `models.OutputConfluentCloud`

```typescript
const value: models.OutputConfluentCloud = {
  id: "<id>",
  type: "confluent_cloud",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
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
    minVersion: "TLSv1.1",
    maxVersion: "TLSv1.3",
  },
  topic: "<value>",
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
      maxVersion: "TLSv1.3",
    },
    defaultKeySchemaId: 5573.36,
    defaultValueSchemaId: 4635.91,
  },
  sasl: {
    username: "Jocelyn_Casper88",
    password: "PIwQ9BxwvdkIdNi",
    credentialsSecret: "<value>",
    keytabLocation: "<value>",
    principal: "<value>",
    brokerServiceClass: "<value>",
    tokenUrl: "https://alive-spear.com",
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
  description: "grandson fax grizzled tail yearly fall for without never if",
  protobufLibraryId: "<id>",
  protobufEncodingId: "<id>",
  pqControls: {},
};
```

### `models.OutputMsk`

```typescript
const value: models.OutputMsk = {
  id: "<id>",
  type: "msk",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
  ],
  brokers: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  topic: "<value>",
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
      maxVersion: "TLSv1.3",
    },
    defaultKeySchemaId: 5573.36,
    defaultValueSchemaId: 4635.91,
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
    maxVersion: "TLSv1.3",
  },
  description: "lightly down meanwhile geez below porter extroverted lovingly",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  protobufLibraryId: "<id>",
  protobufEncodingId: "<id>",
  pqControls: {},
};
```

### `models.OutputElastic`

```typescript
const value: models.OutputElastic = {
  id: "<id>",
  type: "elastic",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
  ],
  index: "<value>",
  docType: "<value>",
  extraHttpHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  safeHeaders: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  responseRetrySettings: [
    {
      httpStatus: 8829.54,
    },
  ],
  timeoutRetrySettings: {},
  extraParams: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  auth: {
    username: "Nasir.Walsh",
    password: "sYcLpzmUAKCdYqd",
    credentialsSecret: "<value>",
    manualAPIKey: "<value>",
    textSecret: "<value>",
  },
  elasticPipeline: "<value>",
  description: "um behold ugh until never along rudely",
  url: "https://foolhardy-collectivization.org",
  urls: [
    {
      url: "https://impressionable-papa.com",
    },
  ],
  pqControls: {},
};
```

### `models.OutputElasticCloud`

```typescript
const value: models.OutputElasticCloud = {
  id: "<id>",
  type: "elastic_cloud",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
  ],
  url: "https://incomplete-utilization.info/",
  index: "<value>",
  extraHttpHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  safeHeaders: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  extraParams: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  auth: {
    username: "Jayde69",
    password: "IRi6u29iGkmGCiq",
    credentialsSecret: "<value>",
    manualAPIKey: "<value>",
    textSecret: "<value>",
  },
  elasticPipeline: "<value>",
  responseRetrySettings: [
    {
      httpStatus: 8829.54,
    },
  ],
  timeoutRetrySettings: {},
  description:
    "quirkily screw quinoa glum anenst pinstripe endow whereas of yum",
  pqControls: {},
};
```

### `models.OutputNewrelic`

```typescript
const value: models.OutputNewrelic = {
  id: "<id>",
  type: "newrelic",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
  ],
  metadata: [
    {
      name: "hostname",
      value: "<value>",
    },
  ],
  extraHttpHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  safeHeaders: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  responseRetrySettings: [
    {
      httpStatus: 8829.54,
    },
  ],
  timeoutRetrySettings: {},
  totalMemoryLimitKB: 1243.99,
  description: "hm than drag vacantly untried emulsify analyse across",
  customUrl: "https://infamous-costume.org",
  pqControls: {},
  apiKey: "<value>",
  textSecret: "<value>",
};
```

### `models.OutputNewrelicEvents`

```typescript
const value: models.OutputNewrelicEvents = {
  id: "<id>",
  type: "newrelic_events",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
  ],
  accountId: "<id>",
  eventType: "<value>",
  extraHttpHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  safeHeaders: [
    "<value 1>",
  ],
  responseRetrySettings: [
    {
      httpStatus: 8829.54,
    },
  ],
  timeoutRetrySettings: {},
  description: "membership machine successfully duh",
  customUrl: "https://tiny-advancement.biz",
  pqControls: {},
  apiKey: "<value>",
  textSecret: "<value>",
};
```

### `models.OutputInfluxdb`

```typescript
const value: models.OutputInfluxdb = {
  id: "<id>",
  type: "influxdb",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
  ],
  url: "https://wasteful-forage.org",
  extraHttpHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  safeHeaders: [
    "<value 1>",
  ],
  responseRetrySettings: [
    {
      httpStatus: 8829.54,
    },
  ],
  timeoutRetrySettings: {},
  description: "when lashes qua repeat uh-huh psst",
  database: "<value>",
  bucket: "<value>",
  org: "<value>",
  pqControls: {},
  username: "Berneice_Blanda78",
  password: "5R6fKcQgj2pTkJE",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://trusty-final.name",
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

### `models.OutputCloudwatch`

```typescript
const value: models.OutputCloudwatch = {
  id: "<id>",
  type: "cloudwatch",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
  ],
  logGroupName: "<value>",
  logStreamName: "<value>",
  awsSecretKey: "<value>",
  region: "<value>",
  endpoint: "<value>",
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  description: "pfft jogging whereas yet",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  pqControls: {},
};
```

### `models.OutputMinio`

```typescript
const value: models.OutputMinio = {
  id: "<id>",
  type: "minio",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
  ],
  endpoint: "<value>",
  bucket: "<value>",
  awsSecretKey: "<value>",
  region: "<value>",
  destPath: "<value>",
  storageClass: "REDUCED_REDUNDANCY",
  serverSideEncryption: "AES256",
  description: "yet fidget reassuringly mid worth mountain save haversack",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  parquetSchema: "<value>",
  shouldLogInvalidRows: false,
  keyValueMetadata: [
    {
      value: "<value>",
    },
  ],
};
```

### `models.OutputStatsd`

```typescript
const value: models.OutputStatsd = {
  id: "<id>",
  type: "statsd",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
  ],
  host: "tidy-awareness.net",
  description: "woot provided upset unscramble pace",
  pqControls: {},
};
```

### `models.OutputStatsdExt`

```typescript
const value: models.OutputStatsdExt = {
  id: "<id>",
  type: "statsd_ext",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
    "<value 2>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
  ],
  host: "uneven-gymnast.name",
  description: "knavishly and deform productive pfft cutlet granny whose ew of",
  pqControls: {},
};
```

### `models.OutputGraphite`

```typescript
const value: models.OutputGraphite = {
  id: "<id>",
  type: "graphite",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  host: "fixed-porter.info",
  description: "skean worriedly tank eek sparkling drat psst chatter",
  pqControls: {},
};
```

### `models.OutputRouter`

```typescript
const value: models.OutputRouter = {
  id: "<id>",
  type: "router",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
  ],
  rules: [],
  description: "uh-huh lift goat honestly oh even",
};
```

### `models.OutputSns`

```typescript
const value: models.OutputSns = {
  id: "<id>",
  type: "sns",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  topicArn: "<value>",
  messageGroupId: "<id>",
  maxRetries: 9469.76,
  awsSecretKey: "<value>",
  region: "<value>",
  endpoint: "<value>",
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  description: "drat after yowza merrily but",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  pqControls: {},
};
```

### `models.OutputSqs`

```typescript
const value: models.OutputSqs = {
  id: "<id>",
  type: "sqs",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
    "<value 2>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
  ],
  queueName: "<value>",
  queueType: "standard",
  awsAccountId: "<id>",
  awsSecretKey: "<value>",
  region: "<value>",
  endpoint: "<value>",
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  description: "except besides dreamily likewise hammock uh-huh publicity",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  pqControls: {},
};
```

### `models.OutputSnmp`

```typescript
const value: models.OutputSnmp = {
  id: "<id>",
  type: "snmp",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
    "<value 2>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
  ],
  hosts: [
    {
      host: "gray-godparent.net",
    },
  ],
  description: "corral stark er however maestro bonnet",
};
```

### `models.OutputSumoLogic`

```typescript
const value: models.OutputSumoLogic = {
  id: "<id>",
  type: "sumo_logic",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
  ],
  url: "https://discrete-cod.net",
  customSource: "<value>",
  customCategory: "<value>",
  extraHttpHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  safeHeaders: [
    "<value 1>",
  ],
  responseRetrySettings: [
    {
      httpStatus: 8829.54,
    },
  ],
  timeoutRetrySettings: {},
  totalMemoryLimitKB: 7298.15,
  description: "ornery pace however ragged king woot blah daddy yippee",
  pqControls: {},
};
```

### `models.OutputDatadog`

```typescript
const value: models.OutputDatadog = {
  id: "<id>",
  type: "datadog",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
  ],
  message: "<value>",
  source: "<value>",
  host: "artistic-charlatan.org",
  service: "<value>",
  tags: [
    "<value 1>",
    "<value 2>",
  ],
  severity: "emergency",
  extraHttpHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  safeHeaders: [
    "<value 1>",
  ],
  responseRetrySettings: [
    {
      httpStatus: 8829.54,
    },
  ],
  timeoutRetrySettings: {},
  totalMemoryLimitKB: 3606.81,
  description: "delirious ha polarisation mortally meh zealous",
  customUrl: "https://excellent-requirement.biz",
  pqControls: {},
  apiKey: "<value>",
  textSecret: "<value>",
};
```

### `models.OutputGrafanaCloud`

```typescript
const value: models.OutputGrafanaCloud = {
  id: "<id>",
  type: "grafana_cloud",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
  ],
  lokiUrl: "https://damp-vision.biz/",
  prometheusUrl: "https://courageous-ribbon.info/",
  message: "<value>",
  messageFormat: "protobuf",
  labels: [
    {
      name: "",
      value: "<value>",
    },
  ],
  metricRenameExpr: "name.replace(/[^a-zA-Z0-9_]/g, '_')",
  prometheusAuth: {
    authType: "basic",
    token: "<value>",
    textSecret: "<value>",
    username: "Keshaun.Pagac",
    password: "6tVmZtXY_Yorgje",
    credentialsSecret: "<value>",
  },
  lokiAuth: {
    authType: "basic",
    token: "<value>",
    textSecret: "<value>",
    username: "Assunta_Kris",
    password: "pv19FDqWjIgMACL",
    credentialsSecret: "<value>",
  },
  concurrency: 1,
  maxPayloadSizeKB: 4096,
  maxPayloadEvents: 0,
  rejectUnauthorized: true,
  timeoutSec: 30,
  flushPeriodSec: 15,
  extraHttpHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  useRoundRobinDns: false,
  failedRequestLoggingMode: "none",
  safeHeaders: [
    "<value 1>",
    "<value 2>",
  ],
  responseRetrySettings: [
    {
      httpStatus: 8829.54,
      initialBackoff: 1000,
      backoffRate: 2,
      maxBackoff: 10000,
    },
  ],
  timeoutRetrySettings: {
    timeoutRetry: false,
    initialBackoff: 1000,
    backoffRate: 2,
    maxBackoff: 10000,
  },
  responseHonorRetryAfterHeader: true,
  onBackpressure: "block",
  description: "experience through hence partial till damp and pants",
  compress: true,
  pqStrictOrdering: true,
  pqRatePerSec: 0,
  pqMode: "error",
  pqMaxBufferSize: 42,
  pqMaxBackpressureSec: 30,
  pqMaxFileSize: "1 MB",
  pqMaxSize: "5GB",
  pqPath: "$CRIBL_HOME/state/queues",
  pqCompress: "none",
  pqOnBackpressure: "block",
  pqControls: {},
};
```

### `models.OutputLoki`

```typescript
const value: models.OutputLoki = {
  id: "<id>",
  type: "loki",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
  ],
  url: "https://excitable-entry.org",
  message: "<value>",
  labels: [
    {
      value: "<value>",
    },
  ],
  extraHttpHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  safeHeaders: [
    "<value 1>",
  ],
  responseRetrySettings: [
    {
      httpStatus: 8829.54,
    },
  ],
  timeoutRetrySettings: {},
  totalMemoryLimitKB: 5801.8,
  description:
    "gaseous yum seriously economise shadowbox powerfully despite across best inside",
  token: "<value>",
  textSecret: "<value>",
  username: "Oleta_McClure",
  password: "RGL9_RdzpYCbnwO",
  credentialsSecret: "<value>",
  pqControls: {},
};
```

### `models.OutputPrometheus`

```typescript
const value: models.OutputPrometheus = {
  id: "<id>",
  type: "prometheus",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  url: "https://appropriate-atrium.name/",
  extraHttpHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  safeHeaders: [
    "<value 1>",
    "<value 2>",
  ],
  responseRetrySettings: [
    {
      httpStatus: 8829.54,
    },
  ],
  timeoutRetrySettings: {},
  description: "pish joyously reproachfully whenever design pronoun gosh pulse",
  pqControls: {},
  username: "Bryana_Wuckert",
  password: "avtbaawKWbmjqyS",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://astonishing-possession.name",
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

### `models.OutputRing`

```typescript
const value: models.OutputRing = {
  id: "<id>",
  type: "ring",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
    "<value 2>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
  ],
  partitionExpr: "<value>",
  destPath: "<value>",
  description: "pace anneal yum phooey even archaeology onto",
};
```

### `models.OutputOpenTelemetry`

```typescript
const value: models.OutputOpenTelemetry = {
  id: "<id>",
  type: "open_telemetry",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
  ],
  endpoint: "<value>",
  httpTracesEndpointOverride: "<value>",
  httpMetricsEndpointOverride: "<value>",
  httpLogsEndpointOverride: "<value>",
  metadata: [
    {
      value: "<value>",
    },
  ],
  description: "row perfection sternly",
  username: "Carmelo.Turner67",
  password: "dscYfe2QByIiEHF",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://lustrous-provider.com",
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
  extraHttpHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  safeHeaders: [
    "<value 1>",
  ],
  responseRetrySettings: [
    {
      httpStatus: 8829.54,
    },
  ],
  timeoutRetrySettings: {},
  tls: {
    certificateName: "<value>",
    caPath: "<value>",
    privKeyPath: "<value>",
    certPath: "<value>",
    passphrase: "<value>",
    minVersion: "TLSv1.2",
    maxVersion: "TLSv1.1",
  },
  pqControls: {},
};
```

### `models.OutputServiceNow`

```typescript
const value: models.OutputServiceNow = {
  id: "<id>",
  type: "service_now",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
    "<value 2>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
  ],
  tokenSecret: "<value>",
  httpTracesEndpointOverride: "<value>",
  httpMetricsEndpointOverride: "<value>",
  httpLogsEndpointOverride: "<value>",
  metadata: [
    {
      value: "<value>",
    },
  ],
  description:
    "until notwithstanding boohoo anti arrogantly apud quaintly ferociously independence eek",
  extraHttpHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  safeHeaders: [
    "<value 1>",
    "<value 2>",
  ],
  responseRetrySettings: [
    {
      httpStatus: 8829.54,
    },
  ],
  timeoutRetrySettings: {},
  tls: {
    certificateName: "<value>",
    caPath: "<value>",
    privKeyPath: "<value>",
    certPath: "<value>",
    passphrase: "<value>",
    minVersion: "TLSv1.2",
    maxVersion: "TLSv1.1",
  },
  pqControls: {},
};
```

### `models.OutputDataset`

```typescript
const value: models.OutputDataset = {
  id: "<id>",
  type: "dataset",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
  ],
  messageField: "<value>",
  excludeFields: [
    "<value 1>",
  ],
  serverHostField: "<value>",
  timestampField: "<value>",
  responseRetrySettings: [
    {
      httpStatus: 8829.54,
    },
  ],
  timeoutRetrySettings: {},
  extraHttpHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  safeHeaders: [
    "<value 1>",
    "<value 2>",
  ],
  totalMemoryLimitKB: 280.02,
  description:
    "since especially oddly softly tremendously amazing fiddle general in",
  customUrl: "https://stylish-exploration.com",
  pqControls: {},
  apiKey: "<value>",
  textSecret: "<value>",
};
```

### `models.OutputCriblTcp`

```typescript
const value: models.OutputCriblTcp = {
  id: "<id>",
  type: "cribl_tcp",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  tls: {
    servername: "<value>",
    certificateName: "<value>",
    caPath: "<value>",
    privKeyPath: "<value>",
    certPath: "<value>",
    passphrase: "<value>",
    minVersion: "TLSv1.2",
    maxVersion: "TLSv1.3",
  },
  authTokens: [
    {
      tokenSecret: "<value>",
      description: "psst whoa zowie when waterspout",
    },
  ],
  excludeFields: [
    "<value 1>",
  ],
  description:
    "inside as anaesthetise offend fearless confirm commandeer bashfully commercial citizen",
  host: "whole-summary.com",
  hosts: [
    {
      host: "alienated-fuel.biz",
      servername: "<value>",
    },
  ],
  pqControls: {},
};
```

### `models.OutputCriblHttp`

```typescript
const value: models.OutputCriblHttp = {
  id: "<id>",
  type: "cribl_http",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  tls: {
    servername: "<value>",
    certificateName: "<value>",
    caPath: "<value>",
    privKeyPath: "<value>",
    certPath: "<value>",
    passphrase: "<value>",
    minVersion: "TLSv1.2",
    maxVersion: "TLSv1.3",
  },
  excludeFields: [
    "<value 1>",
  ],
  extraHttpHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  safeHeaders: [
    "<value 1>",
    "<value 2>",
  ],
  responseRetrySettings: [
    {
      httpStatus: 8829.54,
    },
  ],
  timeoutRetrySettings: {},
  authTokens: [
    {
      tokenSecret: "<value>",
      description: "usually aha integer breed",
    },
  ],
  description:
    "giving courageously gripper to like wearily hence limping instead",
  url: "https://super-cafe.org/",
  urls: [
    {
      url: "https://silky-smoke.name/",
    },
  ],
  pqControls: {},
};
```

### `models.OutputCriblSearchEngine`

```typescript
const value: models.OutputCriblSearchEngine = {
  id: "<id>",
  type: "cribl_search_engine",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
  ],
  tls: {
    servername: "<value>",
    certificateName: "<value>",
    caPath: "<value>",
    privKeyPath: "<value>",
    certPath: "<value>",
    passphrase: "<value>",
    minVersion: "TLSv1.2",
    maxVersion: "TLSv1.3",
  },
  excludeFields: [
    "<value 1>",
  ],
  extraHttpHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  safeHeaders: [
    "<value 1>",
  ],
  responseRetrySettings: [
    {
      httpStatus: 8829.54,
    },
  ],
  timeoutRetrySettings: {},
  authTokens: [
    {
      tokenSecret: "<value>",
      description: "usually aha integer breed",
    },
  ],
  description: "rubbery in exacerbate specific except",
  url: "https://left-challenge.biz",
  urls: [
    {
      url: "https://silky-smoke.name/",
    },
  ],
  pqControls: {},
};
```

### `models.OutputHumioHec`

```typescript
const value: models.OutputHumioHec = {
  id: "<id>",
  type: "humio_hec",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
    "<value 2>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
  ],
  extraHttpHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  safeHeaders: [
    "<value 1>",
    "<value 2>",
  ],
  responseRetrySettings: [
    {
      httpStatus: 8829.54,
    },
  ],
  timeoutRetrySettings: {},
  description:
    "yieldingly fen shakily fluctuate peaceful excepting clinch across instead hurtful",
  token: "<value>",
  textSecret: "<value>",
  pqControls: {},
};
```

### `models.OutputCrowdstrikeNextGenSiem`

```typescript
const value: models.OutputCrowdstrikeNextGenSiem = {
  id: "<id>",
  type: "crowdstrike_next_gen_siem",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  url: "https://gorgeous-knickers.biz/",
  extraHttpHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  safeHeaders: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  responseRetrySettings: [
    {
      httpStatus: 8829.54,
    },
  ],
  timeoutRetrySettings: {},
  description: "corrupt mmm till phew what",
  token: "<value>",
  textSecret: "<value>",
  pqControls: {},
};
```

### `models.OutputDlS3`

```typescript
const value: models.OutputDlS3 = {
  id: "<id>",
  type: "dl_s3",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
  ],
  bucket: "<value>",
  region: "<value>",
  awsSecretKey: "<value>",
  endpoint: "<value>",
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  storageClass: "DEEP_ARCHIVE",
  serverSideEncryption: "aws:kms",
  kmsKeyId: "<id>",
  partitioningFields: [
    "<value 1>",
    "<value 2>",
  ],
  description:
    "upside-down incidentally even microblog bleakly triumphantly modulo",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  parquetSchema: "<value>",
  shouldLogInvalidRows: false,
  keyValueMetadata: [
    {
      value: "<value>",
    },
  ],
};
```

### `models.OutputSecurityLake`

```typescript
const value: models.OutputSecurityLake = {
  id: "<id>",
  type: "security_lake",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
  ],
  bucket: "<value>",
  region: "<value>",
  awsSecretKey: "<value>",
  endpoint: "<value>",
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  storageClass: "GLACIER",
  serverSideEncryption: "AES256",
  kmsKeyId: "<id>",
  accountId: "<id>",
  customSource: "<value>",
  shouldLogInvalidRows: false,
  keyValueMetadata: [
    {
      value: "<value>",
    },
  ],
  description: "ew anenst bruised fervently stiffen lace deform",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  parquetSchema: "<value>",
};
```

### `models.OutputCriblLake`

```typescript
const value: models.OutputCriblLake = {
  id: "<id>",
  type: "cribl_lake",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
  ],
  bucket: "<value>",
  region: "<value>",
  awsSecretKey: "<value>",
  endpoint: "<value>",
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  destPath: "<value>",
  storageClass: "STANDARD_IA",
  serverSideEncryption: "AES256",
  kmsKeyId: "<id>",
  format: "json",
  description: "hence phooey gut gadzooks next",
};
```

### `models.OutputDiskSpool`

```typescript
const value: models.OutputDiskSpool = {
  id: "<id>",
  type: "disk_spool",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
  ],
  partitionExpr: "<value>",
  description: "seemingly moisten best searchingly damaged clone",
};
```

### `models.OutputClickHouse`

```typescript
const value: models.OutputClickHouse = {
  id: "<id>",
  type: "click_house",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
    "<value 2>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
  ],
  url: "https://miserable-pillow.biz/",
  database: "<value>",
  tableName: "<value>",
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
  extraHttpHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  safeHeaders: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  responseRetrySettings: [
    {
      httpStatus: 8829.54,
    },
  ],
  timeoutRetrySettings: {},
  statsDestination: {
    url: "https://whopping-request.info/",
    database: "<value>",
    tableName: "<value>",
    authType: "<value>",
    username: "Elvera15",
    sqlUsername: "<value>",
    password: "8xuasWHEuq2YI46",
  },
  description: "uh-huh provided bah",
  username: "Eldora38",
  password: "f8PIjl05JJfb2C8",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://early-basket.name/",
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
  sqlUsername: "<value>",
  excludeMappingFields: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  describeTable: "<value>",
  columnMappings: [
    {
      columnName: "<value>",
      columnType: "<value>",
      columnValueExpression: "<value>",
    },
  ],
  pqControls: {},
};
```

### `models.OutputXsiam`

```typescript
const value: models.OutputXsiam = {
  id: "<id>",
  type: "xsiam",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  extraHttpHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  safeHeaders: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  responseRetrySettings: [
    {
      httpStatus: 8829.54,
    },
  ],
  timeoutRetrySettings: {},
  totalMemoryLimitKB: 7784.84,
  description: "noted stuff except",
  urls: [
    {
      url: "https://lumbering-lounge.org",
    },
  ],
  token: "<value>",
  textSecret: "<value>",
  pqControls: {},
};
```

### `models.OutputNetflow`

```typescript
const value: models.OutputNetflow = {
  id: "<id>",
  type: "netflow",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  hosts: [],
  description: "middle fraudster slight breakable furthermore rigid break",
};
```

### `models.OutputDynatraceHttp`

```typescript
const value: models.OutputDynatraceHttp = {
  id: "<id>",
  type: "dynatrace_http",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  extraHttpHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  safeHeaders: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  responseRetrySettings: [
    {
      httpStatus: 8829.54,
    },
  ],
  timeoutRetrySettings: {},
  totalMemoryLimitKB: 6045.54,
  description: "which morning why dress distorted battle",
  pqControls: {},
  token: "<value>",
  textSecret: "<value>",
  environmentId: "<id>",
  activeGateDomain: "<value>",
  url: "https://knowledgeable-nectarine.net",
};
```

### `models.OutputDynatraceOtlp`

```typescript
const value: models.OutputDynatraceOtlp = {
  id: "<id>",
  type: "dynatrace_otlp",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
    "<value 2>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
  ],
  httpTracesEndpointOverride: "<value>",
  httpMetricsEndpointOverride: "<value>",
  httpLogsEndpointOverride: "<value>",
  metadata: [
    {
      value: "<value>",
    },
  ],
  tokenSecret: "<value>",
  description: "whoa ascribe brightly censor",
  extraHttpHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  safeHeaders: [
    "<value 1>",
    "<value 2>",
  ],
  responseRetrySettings: [
    {
      httpStatus: 8829.54,
    },
  ],
  timeoutRetrySettings: {},
  pqControls: {},
};
```

### `models.OutputSentinelOneAiSiem`

```typescript
const value: models.OutputSentinelOneAiSiem = {
  id: "<id>",
  type: "sentinel_one_ai_siem",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
    "<value 2>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
  ],
  extraHttpHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  safeHeaders: [
    "<value 1>",
  ],
  responseRetrySettings: [
    {
      httpStatus: 8829.54,
    },
  ],
  timeoutRetrySettings: {},
  description: "blissfully mousse sleepily serpentine seriously fluff",
  token: "<value>",
  textSecret: "<value>",
  pqControls: {},
};
```

### `models.OutputChronicle`

```typescript
const value: models.OutputChronicle = {
  id: "<id>",
  type: "chronicle",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  responseRetrySettings: [
    {
      httpStatus: 8829.54,
    },
  ],
  timeoutRetrySettings: {},
  region: "<value>",
  extraHttpHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  safeHeaders: [
    "<value 1>",
    "<value 2>",
  ],
  totalMemoryLimitKB: 2245.68,
  namespace: "<value>",
  logType: "<value>",
  logTextField: "<value>",
  gcpProjectId: "<id>",
  gcpInstance: "<value>",
  customLabels: [
    {
      key: "<key>",
      value: "<value>",
    },
  ],
  description: "skyscraper since colon attribute",
  serviceAccountCredentials: "<value>",
  serviceAccountCredentialsSecret: "<value>",
  pqControls: {},
};
```

### `models.OutputDatabricks`

```typescript
const value: models.OutputDatabricks = {
  id: "<id>",
  type: "databricks",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
    "<value 2>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
  ],
  workspaceId: "<id>",
  clientId: "<id>",
  clientTextSecret: "<value>",
  description: "loosely unpleasant anenst",
  parquetSchema: "<value>",
  shouldLogInvalidRows: true,
  keyValueMetadata: [
    {
      value: "<value>",
    },
  ],
};
```

### `models.OutputMicrosoftFabric`

```typescript
const value: models.OutputMicrosoftFabric = {
  id: "<id>",
  type: "microsoft_fabric",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
  ],
  topic: "<value>",
  sasl: {
    textSecret: "<value>",
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
  bootstrap_server: "<value>",
  description: "astride ocelot nifty greedy bungalow kiddingly successfully",
  pqControls: {},
};
```

### `models.OutputCloudflareR2`

```typescript
const value: models.OutputCloudflareR2 = {
  id: "<id>",
  type: "cloudflare_r2",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
  ],
  endpoint: "<value>",
  bucket: "<value>",
  awsSecretKey: "<value>",
  region: "<value>",
  destPath: "<value>",
  objectACL: "<value>",
  storageClass: "STANDARD",
  serverSideEncryption: "AES256",
  description: "but because hidden",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  parquetSchema: "<value>",
  shouldLogInvalidRows: true,
  keyValueMetadata: [
    {
      value: "<value>",
    },
  ],
};
```

