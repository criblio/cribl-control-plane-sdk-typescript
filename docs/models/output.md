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
      httpStatus: 7746.28,
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
    minVersion: "TLSv1.3",
    maxVersion: "TLSv1.2",
  },
  totalMemoryLimitKB: 5803.85,
  description: "gah respectful spice till",
  formatEventCode: "<value>",
  formatPayloadCode: "<value>",
  pqControls: {},
  username: "Lilliana_Beier",
  password: "OqjbS8MrLgVap0G",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://troubled-thongs.com/",
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
  url: "https://gleaming-premier.net/",
  urls: [
    {
      url: "https://deadly-completion.info/",
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
    "<value 2>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
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
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  octetCountFraming: true,
  description: "wearily yowza aha",
  host: "strange-meadow.org",
  port: 5740.22,
  hosts: [
    {
      host: "sad-perfection.org",
      port: 702.95,
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
    minVersion: "TLSv1.1",
    maxVersion: "TLSv1",
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

### `models.OutputSplunkLb`

```typescript
const value: models.OutputSplunkLb = {
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
  ],
  environment: "<value>",
  streamtags: [
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
    maxVersion: "TLSv1",
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
      httpStatus: 3414.97,
    },
  ],
  timeoutRetrySettings: {},
  description: "who till scram ruin how unibody",
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
    minVersion: "TLSv1",
    maxVersion: "TLSv1.2",
  },
  description: "yippee enfold why jaunty",
  host: "flawed-pop.net",
  port: 5035.71,
  hosts: [
    {
      host: "dismal-expense.info",
      port: 847.98,
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

### `models.OutputSignalfx`

```typescript
const value: models.OutputSignalfx = {
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

### `models.OutputFilesystem`

```typescript
const value: models.OutputFilesystem = {
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
  parquetSchema: "<value>",
  shouldLogInvalidRows: true,
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
  ],
  containerName: "<value>",
  destPath: "<value>",
  description:
    "crooked ew till likewise tuba gadzooks speedily um busily however",
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
  parquetSchema: "<value>",
  shouldLogInvalidRows: true,
  keyValueMetadata: [
    {
      value: "<value>",
    },
  ],
  mappingObj: "<value>",
  mappingRef: "<value>",
  ingestUrl: "https://both-affect.com",
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
      httpStatus: 5371.81,
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

### `models.OutputHoneycomb`

```typescript
const value: models.OutputHoneycomb = {
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

### `models.OutputAzureEventhub`

```typescript
const value: models.OutputAzureEventhub = {
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
  sasl: {
    password: "O27OpkhmRBMZ1Sl",
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
  description:
    "chase internalize sonnet victoriously beneath up which unless loudly",
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

### `models.OutputGoogleCloudStorage`

```typescript
const value: models.OutputGoogleCloudStorage = {
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
  parquetSchema: "<value>",
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

### `models.OutputGoogleCloudLogging`

```typescript
const value: models.OutputGoogleCloudLogging = {
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

### `models.OutputGooglePubsub`

```typescript
const value: models.OutputGooglePubsub = {
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
  description: "worth advertisement overburden shrilly doodle circa",
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

### `models.OutputKafka`

```typescript
const value: models.OutputKafka = {
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
      minVersion: "TLSv1",
      maxVersion: "TLSv1",
    },
    defaultKeySchemaId: 9767.83,
    defaultValueSchemaId: 4466.98,
  },
  sasl: {
    username: "Clifton7",
    password: "esx41QoFy8V1XJ8",
    credentialsSecret: "<value>",
    keytabLocation: "<value>",
    principal: "<value>",
    brokerServiceClass: "<value>",
    tokenUrl: "https://jittery-grouper.net",
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
  description:
    "sense excellent yum bonnet useless lest proselytise limply decide",
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
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.3",
    },
    defaultKeySchemaId: 3056.85,
    defaultValueSchemaId: 6142.6,
  },
  sasl: {
    username: "Jazmin_Mertz50",
    password: "2kgF29yfjeDGO1_",
    credentialsSecret: "<value>",
    keytabLocation: "<value>",
    principal: "<value>",
    brokerServiceClass: "<value>",
    tokenUrl: "https://prime-effector.com",
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
  description:
    "anenst rosemary zowie another crooked bravely unlawful down curly fond",
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
      minVersion: "TLSv1",
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
  auth: {
    username: "Rudy_Pouros13",
    password: "cHrtzYRyPmzBOoy",
    credentialsSecret: "<value>",
    manualAPIKey: "<value>",
    textSecret: "<value>",
  },
  elasticPipeline: "<value>",
  description: "minority forenenst even",
  url: "https://watery-quinoa.org",
  urls: [
    {
      url: "https://separate-validity.biz",
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
  auth: {
    username: "Angelina.Heathcote52",
    password: "BvRrWL3SahoxkSY",
    credentialsSecret: "<value>",
    manualAPIKey: "<value>",
    textSecret: "<value>",
  },
  elasticPipeline: "<value>",
  responseRetrySettings: [
    {
      httpStatus: 2998.02,
    },
  ],
  timeoutRetrySettings: {},
  description:
    "giving hm trial by furthermore when shinny before microblog cripple",
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
    "<value 2>",
    "<value 3>",
  ],
  metadata: [
    {
      name: "timestamp",
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
      httpStatus: 7623.14,
    },
  ],
  timeoutRetrySettings: {},
  totalMemoryLimitKB: 1724.2,
  description: "zowie spew now brr hmph",
  customUrl: "https://great-seafood.info/",
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

### `models.OutputCloudwatch`

```typescript
const value: models.OutputCloudwatch = {
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

### `models.OutputMinio`

```typescript
const value: models.OutputMinio = {
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
    "<value 2>",
  ],
  host: "wilted-cosset.org",
  description:
    "whose blaspheme towards geez qua gee strange by above mockingly",
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

### `models.OutputRouter`

```typescript
const value: models.OutputRouter = {
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

### `models.OutputSqs`

```typescript
const value: models.OutputSqs = {
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
  queueType: "fifo",
  awsAccountId: "<id>",
  awsSecretKey: "<value>",
  region: "<value>",
  endpoint: "<value>",
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  description: "which pulverize scout safely though oh",
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
    "<value 2>",
    "<value 3>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
  ],
  message: "<value>",
  source: "<value>",
  host: "dapper-understanding.net",
  service: "<value>",
  tags: [
    "<value 1>",
  ],
  severity: "alert",
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
      httpStatus: 3596.93,
    },
  ],
  timeoutRetrySettings: {},
  totalMemoryLimitKB: 6145.58,
  description:
    "unhealthy till cooperative grown cake tribe internal underneath accompany",
  customUrl: "https://queasy-shark.net/",
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
    username: "Tracy6",
    password: "vuFdCqosqDsV4Tz",
    credentialsSecret: "<value>",
  },
  lokiAuth: {
    authType: "basic",
    token: "<value>",
    textSecret: "<value>",
    username: "Jerald_Nitzsche6",
    password: "Cxl1R1HURssSQw7",
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
      httpStatus: 5792.69,
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
  description:
    "upright supposing soft glow judgementally frizzy noxious woefully wing whenever",
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

### `models.OutputPrometheus`

```typescript
const value: models.OutputPrometheus = {
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
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  partitionExpr: "<value>",
  destPath: "<value>",
  description: "shoulder via willfully hence quaintly hmph incidentally that",
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

### `models.OutputServiceNow`

```typescript
const value: models.OutputServiceNow = {
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
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  messageField: "<value>",
  excludeFields: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  serverHostField: "<value>",
  timestampField: "<value>",
  responseRetrySettings: [
    {
      httpStatus: 3352.33,
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
  totalMemoryLimitKB: 1914.11,
  description: "chunter winding pish however or anenst skean",
  customUrl: "https://speedy-vein.net",
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
    minVersion: "TLSv1",
    maxVersion: "TLSv1.1",
  },
  authTokens: [
    {
      tokenSecret: "<value>",
      description: "whoever mobility rusty sensitize vengeful hastily",
    },
  ],
  excludeFields: [
    "<value 1>",
  ],
  description: "coagulate so brr account",
  host: "calculating-pendant.info",
  hosts: [
    {
      host: "decent-translation.name",
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
      httpStatus: 6298.35,
    },
  ],
  timeoutRetrySettings: {},
  authTokens: [
    {
      tokenSecret: "<value>",
      description: "before wombat major kindly",
    },
  ],
  description: "noteworthy yowza after blah",
  url: "https://ripe-pants.org",
  urls: [
    {
      url: "https://supportive-almighty.org",
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

### `models.OutputCrowdstrikeNextGenSiem`

```typescript
const value: models.OutputCrowdstrikeNextGenSiem = {
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
  serverSideEncryption: "AES256",
  kmsKeyId: "<id>",
  partitioningFields: [
    "<value 1>",
  ],
  description: "sparse narrowcast yesterday into shabby economise",
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
    "<value 2>",
    "<value 3>",
  ],
  bucket: "<value>",
  region: "<value>",
  awsSecretKey: "<value>",
  endpoint: "<value>",
  assumeRoleArn: "<value>",
  assumeRoleExternalId: "<id>",
  destPath: "<value>",
  storageClass: "INTELLIGENT_TIERING",
  serverSideEncryption: "AES256",
  kmsKeyId: "<id>",
  format: "parquet",
  description: "prickly politely quaintly intently eek excluding nor joyously",
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
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
  ],
  partitionExpr: "<value>",
  description: "modulo legal until frilly mothball",
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
    "<value 3>",
  ],
  responseRetrySettings: [
    {
      httpStatus: 4570.48,
    },
  ],
  timeoutRetrySettings: {},
  totalMemoryLimitKB: 3551.27,
  description: "bonnet suburban reward",
  urls: [
    {
      url: "https://definitive-ad.net/",
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

### `models.OutputDynatraceOtlp`

```typescript
const value: models.OutputDynatraceOtlp = {
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

### `models.OutputSentinelOneAiSiem`

```typescript
const value: models.OutputSentinelOneAiSiem = {
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
      httpStatus: 8829.54,
    },
  ],
  timeoutRetrySettings: {},
  description: "floss incidentally ouch usually readies geez spirited",
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
    "<value 2>",
    "<value 3>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
  ],
  responseRetrySettings: [
    {
      httpStatus: 2508.74,
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
  totalMemoryLimitKB: 1693.31,
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
  description:
    "casket supposing apropos starch coaxingly gloom whose saloon eventually ugh",
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
  ],
  workspaceId: "<id>",
  clientId: "<id>",
  clientTextSecret: "<value>",
  description:
    "under better including skeleton pastel focalise responsibility gadzooks",
  parquetSchema: "<value>",
  shouldLogInvalidRows: false,
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
    "<value 2>",
    "<value 3>",
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
  bootstrapServer: "<value>",
  description: "tensely ick left lift by version",
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
  objectACL: "<value>",
  storageClass: "REDUCED_REDUNDANCY",
  serverSideEncryption: "AES256",
  description:
    "jovially ack vamoose inasmuch yowza foretell yippee trash zowie",
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

