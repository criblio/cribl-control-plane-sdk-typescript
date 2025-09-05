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
      httpStatus: 5955.24,
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
  totalMemoryLimitKB: 470.04,
  description:
    "corner bookcase fedora cultivated conservation chow alongside if revere demob",
  formatEventCode: "<value>",
  formatPayloadCode: "<value>",
  pqControls: {},
  username: "Myrtie_Smitham",
  password: "oBYKyE0yu0PN6hG",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://deserted-lady.com/",
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
  url: "https://far-flung-status.name/",
  urls: [
    {
      url: "https://delicious-doubter.net",
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
      httpStatus: 5626.04,
    },
  ],
  timeoutRetrySettings: {},
  authType: "oauth",
  loginUrl: "https://perky-nightlife.com",
  secret: "<value>",
  clientId: "<id>",
  totalMemoryLimitKB: 9560.32,
  description: "armoire strident gloss rationalise",
  format: "advanced",
  formatEventCode: "<value>",
  formatPayloadCode: "<value>",
  pqControls: {},
  url: "https://common-analogy.org/",
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
  host: "poor-mozzarella.info",
  port: 6265.46,
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
    minVersion: "TLSv1",
    maxVersion: "TLSv1",
  },
  description: "colon nor tightly pants now devil fooey verbally till",
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
    minVersion: "TLSv1",
    maxVersion: "TLSv1.1",
  },
  description:
    "conversation avow kissingly thankfully role scale happily excluding likewise",
  indexerDiscoveryConfigs: {
    masterUri: "https://striking-ghost.info",
    authTokens: [
      {},
    ],
    textSecret: "<value>",
  },
  hosts: [
    {
      host: "elliptical-e-mail.net",
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
      httpStatus: 33.58,
    },
  ],
  timeoutRetrySettings: {},
  description: "majority wasteful absent demob wilt",
  urls: [
    {},
  ],
  token: "<value>",
  textSecret: "<value>",
  pqControls: {},
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
    minVersion: "TLSv1.3",
    maxVersion: "TLSv1.3",
  },
  description: "wherever physically near mmm times impure adjudge blindly when",
  host: "querulous-nectarine.biz",
  port: 9212.27,
  hosts: [
    {
      host: "raw-sideboard.org",
      port: 8454.44,
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
      httpStatus: 8813.46,
    },
  ],
  timeoutRetrySettings: {},
  description: "huzzah than that neatly frail unblinking wrongly",
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
      httpStatus: 9115.44,
    },
  ],
  timeoutRetrySettings: {},
  description: "about roughly which promise untidy a jovially",
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
  ingestUrl: "https://alienated-contrail.info/",
  extentTags: [
    {
      prefix: "dropBy",
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
      httpStatus: 8928.41,
    },
  ],
  timeoutRetrySettings: {},
  mappingRef: "<value>",
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
      httpStatus: 6609.99,
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
      httpStatus: 7606.51,
    },
  ],
  timeoutRetrySettings: {},
  description: "unique but loudly irresponsible what healthily",
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
  sasl: {},
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
      httpStatus: 1435,
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
  totalMemoryLimitKB: 643.81,
  description: "doubtfully along vacantly pace around behind",
  extraLogTypes: [
    {
      logType: "<value>",
      description: "reapply tusk rebel cooperative even incomplete boohoo soon",
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
      maxVersion: "TLSv1.1",
    },
    defaultKeySchemaId: 8894.16,
    defaultValueSchemaId: 4585.31,
  },
  sasl: {},
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
  description: "disappointment provider bah",
  protobufLibraryId: "<id>",
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
    minVersion: "TLSv1.3",
    maxVersion: "TLSv1.1",
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
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1.3",
    },
    defaultKeySchemaId: 4559.39,
    defaultValueSchemaId: 7875.65,
  },
  sasl: {},
  description: "exacerbate sun overconfidently",
  protobufLibraryId: "<id>",
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
    defaultKeySchemaId: 8697.38,
    defaultValueSchemaId: 537.56,
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
    maxVersion: "TLSv1.3",
  },
  description: "taro across than boo mmm motor",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  protobufLibraryId: "<id>",
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
      httpStatus: 6978.08,
    },
  ],
  timeoutRetrySettings: {},
  extraParams: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  auth: {},
  elasticPipeline: "<value>",
  description: "wing gosh attest catalyze waist eek jaggedly woot",
  url: "https://brisk-marathon.biz",
  urls: [
    {
      url: "https://triangular-vista.net/",
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
  auth: {},
  elasticPipeline: "<value>",
  responseRetrySettings: [
    {
      httpStatus: 4806.39,
    },
  ],
  timeoutRetrySettings: {},
  description: "kookily arrogantly ah phew bah blacken uncomfortable",
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
      httpStatus: 1243.99,
    },
  ],
  timeoutRetrySettings: {},
  totalMemoryLimitKB: 7293.26,
  description: "rapidly fooey now mooch superior sleepily boohoo repeatedly",
  customUrl: "https://dirty-tinderbox.info/",
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
      httpStatus: 1583.7,
    },
  ],
  timeoutRetrySettings: {},
  description:
    "procurement highly alienated well-off woot considering geez optimal offend",
  customUrl: "https://ignorant-solvency.biz",
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
      httpStatus: 4425.56,
    },
  ],
  timeoutRetrySettings: {},
  description: "now whose economise although trolley whoa",
  database: "<value>",
  bucket: "<value>",
  org: "<value>",
  pqControls: {},
  username: "Sylvester_Lehner12",
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
  awsAccountId: "<id>",
  awsSecretKey: "<value>",
  region: "<value>",
  endpoint: "<value>",
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  description: "versus gracefully cornet",
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
      httpStatus: 7298.15,
    },
  ],
  timeoutRetrySettings: {},
  totalMemoryLimitKB: 8659.35,
  description: "pastel mammoth gadzooks key yieldingly that edge how sushi",
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
      httpStatus: 3606.81,
    },
  ],
  timeoutRetrySettings: {},
  totalMemoryLimitKB: 4553.79,
  description: "intently fit engage solder whether neglected ouch bleach",
  customUrl: "https://average-synergy.info",
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
      httpStatus: 6825.33,
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
  responseHonorRetryAfterHeader: false,
  onBackpressure: "block",
  description: "woefully wing whenever overcooked matter how irritably",
  compress: true,
  pqMaxFileSize: "1 MB",
  pqMaxSize: "5GB",
  pqPath: "$CRIBL_HOME/state/queues",
  pqCompress: "none",
  pqOnBackpressure: "block",
  pqMode: "error",
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
      httpStatus: 5801.8,
    },
  ],
  timeoutRetrySettings: {},
  totalMemoryLimitKB: 9131.85,
  description: "as sleepily down carefully",
  token: "<value>",
  textSecret: "<value>",
  username: "John0",
  password: "r5YSF47hEINSgrN",
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
      httpStatus: 6711.09,
    },
  ],
  timeoutRetrySettings: {},
  description:
    "spear jealously along oof ah by secondary amongst symbolise upbeat",
  pqControls: {},
  username: "Irwin_Yundt3",
  password: "mjqyShc60BORjFC",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://direct-smoke.info/",
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
      httpStatus: 6166.72,
    },
  ],
  timeoutRetrySettings: {},
  tls: {
    certificateName: "<value>",
    caPath: "<value>",
    privKeyPath: "<value>",
    certPath: "<value>",
    passphrase: "<value>",
    minVersion: "TLSv1.1",
    maxVersion: "TLSv1.3",
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
      httpStatus: 5528.15,
    },
  ],
  timeoutRetrySettings: {},
  tls: {
    certificateName: "<value>",
    caPath: "<value>",
    privKeyPath: "<value>",
    certPath: "<value>",
    passphrase: "<value>",
    minVersion: "TLSv1.1",
    maxVersion: "TLSv1.2",
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
      httpStatus: 4918.16,
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
  ],
  totalMemoryLimitKB: 7951.25,
  description:
    "infamous reluctantly upon ethyl instead than easily powerfully er so",
  customUrl: "https://formal-railway.net/",
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
    minVersion: "TLSv1",
    maxVersion: "TLSv1.3",
  },
  excludeFields: [
    "<value 1>",
    "<value 2>",
  ],
  description: "zany hydrocarbon government",
  host: "imaginative-amendment.org",
  hosts: [
    {
      host: "musty-meander.org",
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
    minVersion: "TLSv1.1",
    maxVersion: "TLSv1.1",
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
    "<value 3>",
  ],
  responseRetrySettings: [
    {
      httpStatus: 3693.69,
    },
  ],
  timeoutRetrySettings: {},
  description: "unfortunately scrutinise obtrude unethically skyline midst",
  url: "https://biodegradable-elver.com/",
  urls: [
    {
      url: "https://yummy-saloon.name/",
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
      httpStatus: 8921.2,
    },
  ],
  timeoutRetrySettings: {},
  description: "considering midst failing",
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
      httpStatus: 3585.6,
    },
  ],
  timeoutRetrySettings: {},
  description: "cleverly cassava aha providence passport ruddy hmph",
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
    minVersion: "TLSv1.3",
    maxVersion: "TLSv1.1",
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
      httpStatus: 7494.57,
    },
  ],
  timeoutRetrySettings: {},
  description: "without tragic deserted after uh-huh provided",
  username: "Eino.Mante",
  password: "PBWEf8PIjl05JJf",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://profuse-pocket-watch.biz/",
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
      httpStatus: 7784.84,
    },
  ],
  timeoutRetrySettings: {},
  totalMemoryLimitKB: 847.48,
  description: "tattered bony offset vainly blaspheme",
  urls: [
    {
      url: "https://respectful-traffic.net",
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
      httpStatus: 6045.54,
    },
  ],
  timeoutRetrySettings: {},
  totalMemoryLimitKB: 4158.6,
  description: "ew after oh for lieu whether though ick",
  pqControls: {},
  token: "<value>",
  textSecret: "<value>",
  environmentId: "<id>",
  activeGateDomain: "<value>",
  url: "https://drab-humidity.name/",
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
      httpStatus: 9514.43,
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
      httpStatus: 3766.68,
    },
  ],
  timeoutRetrySettings: {},
  description: "which unselfish how raw congregate drat aw",
  token: "<value>",
  textSecret: "<value>",
  pqControls: {},
};
```

