# CreateOutputRequest

New Destination object


## Supported Types

### `operations.OutputDefault`

```typescript
const value: operations.OutputDefault = {
  id: "<id>",
  type: "default",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
    "<value 2>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
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

### `operations.OutputSentinel`

```typescript
const value: operations.OutputSentinel = {
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
      httpStatus: 1162.62,
    },
  ],
  timeoutRetrySettings: {},
  authType: "oauth",
  loginUrl: "https://urban-electronics.biz",
  secret: "<value>",
  clientId: "<id>",
  totalMemoryLimitKB: 1001.02,
  description: "continually commonly declaration trusty dimly between wisely",
  format: "ndjson",
  formatEventCode: "<value>",
  formatPayloadCode: "<value>",
  pqControls: {},
  url: "https://sneaky-version.biz",
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

### `operations.OutputSplunk`

```typescript
const value: operations.OutputSplunk = {
  id: "<id>",
  type: "splunk",
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
  host: "wry-hippodrome.net",
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
  description: "unaccountably rebuff instead hutch um",
  pqControls: {},
  textSecret: "<value>",
};
```

### `operations.OutputSplunkLb`

```typescript
const value: operations.OutputSplunkLb = {
  id: "<id>",
  type: "splunk_lb",
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
    maxVersion: "TLSv1.1",
  },
  description: "hungry spectate blight which ack concerning stained infamous",
  indexerDiscoveryConfigs: {
    masterUri: "https://humiliating-sustenance.com",
    authTokens: [
      {},
    ],
    textSecret: "<value>",
  },
  hosts: [],
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

### `operations.OutputWavefront`

```typescript
const value: operations.OutputWavefront = {
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
      httpStatus: 4931.87,
    },
  ],
  timeoutRetrySettings: {},
  description: "lay alongside fray winged indeed winged meh stitcher boo",
  token: "<value>",
  textSecret: "<value>",
  pqControls: {},
};
```

### `operations.OutputSignalfx`

```typescript
const value: operations.OutputSignalfx = {
  id: "<id>",
  type: "signalfx",
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
      httpStatus: 6539.74,
    },
  ],
  timeoutRetrySettings: {},
  description:
    "whoa bemuse notwithstanding boohoo safely row pinstripe bah advertisement vet",
  token: "<value>",
  textSecret: "<value>",
  pqControls: {},
};
```

### `operations.OutputFilesystem`

```typescript
const value: operations.OutputFilesystem = {
  id: "<id>",
  type: "filesystem",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
  ],
  destPath: "<value>",
  stagePath: "<value>",
  description: "narrate mid cripple boldly yum while gadzooks among on poorly",
  shouldLogInvalidRows: false,
  keyValueMetadata: [
    {
      value: "<value>",
    },
  ],
};
```

### `operations.OutputS3`

```typescript
const value: operations.OutputS3 = {
  id: "<id>",
  type: "s3",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
    "<value 2>",
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
  storageClass: "STANDARD",
  serverSideEncryption: "aws:kms",
  kmsKeyId: "<id>",
  description:
    "yowza cap antelope peninsula pace what likely cantaloupe nor brightly",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  shouldLogInvalidRows: true,
  keyValueMetadata: [
    {
      value: "<value>",
    },
  ],
};
```

### `operations.OutputAzureBlob`

```typescript
const value: operations.OutputAzureBlob = {
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
  ],
  containerName: "<value>",
  destPath: "<value>",
  description:
    "crooked ew till likewise tuba gadzooks speedily um busily however",
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

### `operations.OutputAzureDataExplorer`

```typescript
const value: operations.OutputAzureDataExplorer = {
  id: "<id>",
  type: "azure_data_explorer",
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
  clusterUrl: "https://husky-airport.org",
  database: "<value>",
  table: "<value>",
  tenantId: "<id>",
  clientId: "<id>",
  scope: "<value>",
  description: "daily wheel pish dulcimer comfortable reclassify festival",
  clientSecret: "<value>",
  textSecret: "<value>",
  certificate: {
    certificateName: "<value>",
  },
  ingestUrl: "https://second-hand-birth.com/",
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
      httpStatus: 8664.38,
    },
  ],
  timeoutRetrySettings: {},
  mappingRef: "<value>",
  pqControls: {},
};
```

### `operations.OutputAzureLogs`

```typescript
const value: operations.OutputAzureLogs = {
  id: "<id>",
  type: "azure_logs",
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
  ],
  responseRetrySettings: [
    {
      httpStatus: 8722.1,
    },
  ],
  timeoutRetrySettings: {},
  description: "excited across restfully where amendment phooey even",
  pqControls: {},
  workspaceId: "<id>",
  workspaceKey: "<value>",
  keypairSecret: "<value>",
};
```

### `operations.OutputKinesis`

```typescript
const value: operations.OutputKinesis = {
  id: "<id>",
  type: "kinesis",
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
  streamName: "<value>",
  awsSecretKey: "<value>",
  region: "<value>",
  endpoint: "<value>",
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  description: "flu slump only than frightfully how rudely lest plump nor",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  pqControls: {},
};
```

### `operations.OutputHoneycomb`

```typescript
const value: operations.OutputHoneycomb = {
  id: "<id>",
  type: "honeycomb",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
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
  ],
  responseRetrySettings: [
    {
      httpStatus: 3746.61,
    },
  ],
  timeoutRetrySettings: {},
  description:
    "however um edge why antique however haunting sadly agile scarcely",
  pqControls: {},
  team: "<value>",
  textSecret: "<value>",
};
```

### `operations.OutputAzureEventhub`

```typescript
const value: operations.OutputAzureEventhub = {
  id: "<id>",
  type: "azure_eventhub",
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
  brokers: [],
  topic: "<value>",
  sasl: {},
  tls: {},
  description: "spirited hm save chase",
  pqControls: {},
};
```

### `operations.OutputGoogleChronicle`

```typescript
const value: operations.OutputGoogleChronicle = {
  id: "<id>",
  type: "google_chronicle",
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
      httpStatus: 7082.3,
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
  totalMemoryLimitKB: 2398.98,
  description:
    "querulous minus irresponsible bandwidth teeming aw meanwhile for huzzah",
  extraLogTypes: [
    {
      logType: "<value>",
      description: "hastily beside unbalance dismal",
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

### `operations.OutputGoogleCloudStorage`

```typescript
const value: operations.OutputGoogleCloudStorage = {
  id: "<id>",
  type: "google_cloud_storage",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
  ],
  bucket: "<value>",
  region: "<value>",
  storageClass: "STANDARD",
  description: "hm superficial baa uproot nice gee factorize sedately yowza",
  shouldLogInvalidRows: true,
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

### `operations.OutputGoogleCloudLogging`

```typescript
const value: operations.OutputGoogleCloudLogging = {
  id: "<id>",
  type: "google_cloud_logging",
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
  logLocationType: "billingAccount",
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
  throttleRateReqPerSec: 84260,
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
  totalMemoryLimitKB: 8441.34,
  description: "blah whoa brief pearl generously airport gymnast but",
  logLocationExpression: "<value>",
  payloadExpression: "<value>",
  pqControls: {},
};
```

### `operations.OutputGooglePubsub`

```typescript
const value: operations.OutputGooglePubsub = {
  id: "<id>",
  type: "google_pubsub",
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
  topicName: "<value>",
  region: "<value>",
  serviceAccountCredentials: "<value>",
  secret: "<value>",
  flushPeriodSec: {
    type: "number",
    default: 4799.52,
  },
  description: "hyphenation in hard-to-find times unless abaft unless",
  pqControls: {},
};
```

### `operations.OutputExabeam`

```typescript
const value: operations.OutputExabeam = {
  id: "<id>",
  type: "exabeam",
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
  description:
    "which against extricate tenderly why medium wetly crooked lobotomise",
};
```

### `operations.OutputKafka`

```typescript
const value: operations.OutputKafka = {
  id: "<id>",
  type: "kafka",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
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
      minVersion: "TLSv1.1",
      maxVersion: "TLSv1.2",
    },
    defaultKeySchemaId: 9767.83,
    defaultValueSchemaId: 4466.98,
  },
  sasl: {},
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
  description: "as midst nudge beyond goodwill",
  protobufLibraryId: "<id>",
  pqControls: {},
};
```

### `operations.OutputConfluentCloud`

```typescript
const value: operations.OutputConfluentCloud = {
  id: "<id>",
  type: "confluent_cloud",
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
  brokers: [
    "<value 1>",
    "<value 2>",
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
      minVersion: "TLSv1.3",
      maxVersion: "TLSv1.3",
    },
    defaultKeySchemaId: 3056.85,
    defaultValueSchemaId: 6142.6,
  },
  sasl: {},
  description: "dreamily hastily papa keenly as range",
  protobufLibraryId: "<id>",
  pqControls: {},
};
```

### `operations.OutputMsk`

```typescript
const value: operations.OutputMsk = {
  id: "<id>",
  type: "msk",
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
  brokers: [
    "<value 1>",
    "<value 2>",
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
      minVersion: "TLSv1.3",
      maxVersion: "TLSv1.2",
    },
    defaultKeySchemaId: 2883.79,
    defaultValueSchemaId: 9786.75,
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
    minVersion: "TLSv1.3",
    maxVersion: "TLSv1.3",
  },
  description:
    "volleyball mature within blank really bolster putrid without up where",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  protobufLibraryId: "<id>",
  pqControls: {},
};
```

### `operations.OutputElastic`

```typescript
const value: operations.OutputElastic = {
  id: "<id>",
  type: "elastic",
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
      httpStatus: 5898.49,
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
  description:
    "hunger affectionate incidentally knowingly claw ew pacemaker failing wherever",
  url: "https://sparse-hamburger.biz/",
  urls: [
    {
      url: "https://tattered-shore.biz",
    },
  ],
  pqControls: {},
};
```

### `operations.OutputElasticCloud`

```typescript
const value: operations.OutputElasticCloud = {
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
    "<value 2>",
    "<value 3>",
  ],
  url: "https://palatable-season.biz/",
  index: "<value>",
  extraHttpHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  safeHeaders: [
    "<value 1>",
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
      httpStatus: 615.44,
    },
  ],
  timeoutRetrySettings: {},
  description: "psst yum sparkling covenant successfully excess lox debut",
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

### `operations.OutputNewrelicEvents`

```typescript
const value: operations.OutputNewrelicEvents = {
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
    "<value 2>",
  ],
  responseRetrySettings: [
    {
      httpStatus: 5724.32,
    },
  ],
  timeoutRetrySettings: {},
  description: "outside terribly amid discontinue gee aw",
  customUrl: "https://well-to-do-legislature.net/",
  pqControls: {},
  apiKey: "<value>",
  textSecret: "<value>",
};
```

### `operations.OutputInfluxdb`

```typescript
const value: operations.OutputInfluxdb = {
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
  url: "https://competent-sauerkraut.name",
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
      httpStatus: 4536.83,
    },
  ],
  timeoutRetrySettings: {},
  description: "extract yet brr scorpion unto ignite geez deflate",
  database: "<value>",
  bucket: "<value>",
  org: "<value>",
  pqControls: {},
  username: "Travis.Hagenes",
  password: "OuaogWr6Xu_VAWv",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://sandy-laughter.com",
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

### `operations.OutputCloudwatch`

```typescript
const value: operations.OutputCloudwatch = {
  id: "<id>",
  type: "cloudwatch",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
    "<value 2>",
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
  description:
    "stealthily hygienic by smoothly officially surprisingly upliftingly failing so",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  pqControls: {},
};
```

### `operations.OutputMinio`

```typescript
const value: operations.OutputMinio = {
  id: "<id>",
  type: "minio",
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
  endpoint: "<value>",
  bucket: "<value>",
  awsSecretKey: "<value>",
  region: "<value>",
  destPath: "<value>",
  storageClass: "STANDARD",
  serverSideEncryption: "AES256",
  description: "ponder because slide cinder officially",
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

### `operations.OutputStatsd`

```typescript
const value: operations.OutputStatsd = {
  id: "<id>",
  type: "statsd",
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
  host: "white-resource.biz",
  description: "consistency snarling and rout",
  pqControls: {},
};
```

### `operations.OutputStatsdExt`

```typescript
const value: operations.OutputStatsdExt = {
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
    "<value 2>",
  ],
  host: "wilted-cosset.org",
  description:
    "whose blaspheme towards geez qua gee strange by above mockingly",
  pqControls: {},
};
```

### `operations.OutputGraphite`

```typescript
const value: operations.OutputGraphite = {
  id: "<id>",
  type: "graphite",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
    "<value 2>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
  ],
  host: "golden-ribbon.name",
  description: "why famously possible phooey ragged overdue ugh underneath",
  pqControls: {},
};
```

### `operations.OutputRouter`

```typescript
const value: operations.OutputRouter = {
  id: "<id>",
  type: "router",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
    "<value 2>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
  ],
  rules: [],
  description: "fortunately incline gadzooks",
};
```

### `operations.OutputSns`

```typescript
const value: operations.OutputSns = {
  id: "<id>",
  type: "sns",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
  ],
  topicArn: "<value>",
  messageGroupId: "<id>",
  maxRetries: 6.97,
  awsSecretKey: "<value>",
  region: "<value>",
  endpoint: "<value>",
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  description:
    "disadvantage like monumental blond fooey minister cope weatherize",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  pqControls: {},
};
```

### `operations.OutputSqs`

```typescript
const value: operations.OutputSqs = {
  id: "<id>",
  type: "sqs",
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
  queueName: "<value>",
  awsAccountId: "<id>",
  awsSecretKey: "<value>",
  region: "<value>",
  endpoint: "<value>",
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  description:
    "micromanage when ha drain on beside although by demobilise vice",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  pqControls: {},
};
```

### `operations.OutputSnmp`

```typescript
const value: operations.OutputSnmp = {
  id: "<id>",
  type: "snmp",
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
  hosts: [],
  description: "pertain suspiciously fooey",
};
```

### `operations.OutputSumoLogic`

```typescript
const value: operations.OutputSumoLogic = {
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
  url: "https://obedient-hutch.info/",
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
      httpStatus: 5053.29,
    },
  ],
  timeoutRetrySettings: {},
  totalMemoryLimitKB: 9976.28,
  description: "nor modulo unbearably celsius",
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

### `operations.OutputLoki`

```typescript
const value: operations.OutputLoki = {
  id: "<id>",
  type: "loki",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
  ],
  url: "https://teeming-scarification.info",
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
    "<value 2>",
  ],
  responseRetrySettings: [
    {
      httpStatus: 2885.83,
    },
  ],
  timeoutRetrySettings: {},
  totalMemoryLimitKB: 1109.68,
  description: "trusty gradient pro",
  token: "<value>",
  textSecret: "<value>",
  username: "Dorris.Aufderhar54",
  password: "M4evjXGNLT2MGH4",
  credentialsSecret: "<value>",
  pqControls: {},
};
```

### `operations.OutputPrometheus`

```typescript
const value: operations.OutputPrometheus = {
  id: "<id>",
  type: "prometheus",
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
  url: "https://mixed-omelet.name/",
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
      httpStatus: 7362.23,
    },
  ],
  timeoutRetrySettings: {},
  description: "since how the drat",
  pqControls: {},
  username: "Stan.Thompson",
  password: "foL5dxPkbIfCvm2",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://urban-innovation.org/",
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

### `operations.OutputOpenTelemetry`

```typescript
const value: operations.OutputOpenTelemetry = {
  id: "<id>",
  type: "open_telemetry",
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
  httpTracesEndpointOverride: "<value>",
  httpMetricsEndpointOverride: "<value>",
  httpLogsEndpointOverride: "<value>",
  metadata: [
    {
      value: "<value>",
    },
  ],
  description:
    "emphasise exactly defrag ack uselessly gee fully oddball highly authorized",
  username: "Vincenzo57",
  password: "zZ2SM7au29H34sL",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://proper-sundae.info/",
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
    "<value 2>",
    "<value 3>",
  ],
  responseRetrySettings: [
    {
      httpStatus: 8293.97,
    },
  ],
  timeoutRetrySettings: {},
  tls: {
    certificateName: "<value>",
    caPath: "<value>",
    privKeyPath: "<value>",
    certPath: "<value>",
    passphrase: "<value>",
    minVersion: "TLSv1.3",
    maxVersion: "TLSv1.1",
  },
  pqControls: {},
};
```

### `operations.OutputServiceNow`

```typescript
const value: operations.OutputServiceNow = {
  id: "<id>",
  type: "service_now",
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
  tokenSecret: "<value>",
  httpTracesEndpointOverride: "<value>",
  httpMetricsEndpointOverride: "<value>",
  httpLogsEndpointOverride: "<value>",
  metadata: [
    {
      value: "<value>",
    },
  ],
  description: "reel spiffy um smoggy for yahoo knowledgeably",
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
      httpStatus: 2860.01,
    },
  ],
  timeoutRetrySettings: {},
  tls: {
    certificateName: "<value>",
    caPath: "<value>",
    privKeyPath: "<value>",
    certPath: "<value>",
    passphrase: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1.3",
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

### `operations.OutputHumioHec`

```typescript
const value: operations.OutputHumioHec = {
  id: "<id>",
  type: "humio_hec",
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
      httpStatus: 8676.06,
    },
  ],
  timeoutRetrySettings: {},
  description:
    "wildly against athwart apropos aircraft scoff catalyze passport",
  token: "<value>",
  textSecret: "<value>",
  pqControls: {},
};
```

### `operations.OutputCrowdstrikeNextGenSiem`

```typescript
const value: operations.OutputCrowdstrikeNextGenSiem = {
  id: "<id>",
  type: "crowdstrike_next_gen_siem",
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
  url: "https://whispered-smog.biz",
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
      httpStatus: 2049.86,
    },
  ],
  timeoutRetrySettings: {},
  description: "buzzing nervously fisherman",
  token: "<value>",
  textSecret: "<value>",
  pqControls: {},
};
```

### `operations.OutputDlS3`

```typescript
const value: operations.OutputDlS3 = {
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
  serverSideEncryption: "AES256",
  kmsKeyId: "<id>",
  partitioningFields: [
    "<value 1>",
  ],
  description: "sparse narrowcast yesterday into shabby economise",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  shouldLogInvalidRows: true,
  keyValueMetadata: [
    {
      value: "<value>",
    },
  ],
};
```

### `operations.OutputSecurityLake`

```typescript
const value: operations.OutputSecurityLake = {
  id: "<id>",
  type: "security_lake",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
  ],
  bucket: "<value>",
  region: "<value>",
  awsSecretKey: "<value>",
  endpoint: "<value>",
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  storageClass: "ONEZONE_IA",
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
  description: "dramatic galvanize qua phooey quickly into tomb scuffle",
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

### `operations.OutputClickHouse`

```typescript
const value: operations.OutputClickHouse = {
  id: "<id>",
  type: "click_house",
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
  url: "https://immense-place.biz/",
  database: "<value>",
  tableName: "<value>",
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
      httpStatus: 5553.52,
    },
  ],
  timeoutRetrySettings: {},
  description:
    "misspend rationale sardonic until like offensively slowly coordinated orientate after",
  username: "Mustafa.Stokes26",
  password: "zMh6XcMrb5Fskjx",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://elementary-peony.info/",
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

### `operations.OutputNetflow`

```typescript
const value: operations.OutputNetflow = {
  id: "<id>",
  type: "netflow",
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
  hosts: [
    {
      host: "wide-eyed-adult.name",
    },
  ],
  description: "for mothball hearten",
};
```

### `operations.OutputDynatraceHttp`

```typescript
const value: operations.OutputDynatraceHttp = {
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
  ],
  responseRetrySettings: [
    {
      httpStatus: 6531.96,
    },
  ],
  timeoutRetrySettings: {},
  totalMemoryLimitKB: 7977.2,
  description: "mobilize yowza pfft er whose unless",
  pqControls: {},
  token: "<value>",
  textSecret: "<value>",
  environmentId: "<id>",
  activeGateDomain: "<value>",
  url: "https://confused-produce.net/",
};
```

### `operations.OutputDynatraceOtlp`

```typescript
const value: operations.OutputDynatraceOtlp = {
  id: "<id>",
  type: "dynatrace_otlp",
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
  httpTracesEndpointOverride: "<value>",
  httpMetricsEndpointOverride: "<value>",
  httpLogsEndpointOverride: "<value>",
  metadata: [
    {
      value: "<value>",
    },
  ],
  tokenSecret: "<value>",
  description: "secret excellent surface fooey nauseate ha to absent nor",
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
      httpStatus: 1470.64,
    },
  ],
  timeoutRetrySettings: {},
  pqControls: {},
};
```

### `operations.OutputSentinelOneAiSiem`

```typescript
const value: operations.OutputSentinelOneAiSiem = {
  id: "<id>",
  type: "sentinel_one_ai_siem",
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
      httpStatus: 5114.15,
    },
  ],
  timeoutRetrySettings: {},
  description: "croon kissingly whether what abaft woot qualified although",
  token: "<value>",
  textSecret: "<value>",
  pqControls: {},
};
```

