# CreateOutputRequest

Output object


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

### `operations.OutputWebhook`

```typescript
const value: operations.OutputWebhook = {
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
  totalMemoryLimitKB: 7746.28,
  description: "puritan aha so crossly mid ripe normal tarry colonialism round",
  formatEventCode: "<value>",
  formatPayloadCode: "<value>",
  pqControls: {},
  username: "Nora_Hane",
  password: "5zCRnqCYfLw4i6d",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://pitiful-ecliptic.info",
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
  url: "https://second-alert.net/",
  urls: [
    {
      url: "https://slight-slipper.info/",
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
      httpStatus: 8829.54,
    },
  ],
  timeoutRetrySettings: {},
  authType: "oauth",
  loginUrl: "https://zany-tool.biz/",
  secret: "<value>",
  clientId: "<id>",
  totalMemoryLimitKB: 3111.03,
  description: "excepting awkwardly ack",
  format: "ndjson",
  formatEventCode: "<value>",
  formatPayloadCode: "<value>",
  pqControls: {},
  url: "https://deficient-representation.biz",
  dcrID: "<id>",
  dceEndpoint: "<value>",
  streamName: "<value>",
};
```

### `operations.OutputDevnull`

```typescript
const value: operations.OutputDevnull = {
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

### `operations.OutputSyslog`

```typescript
const value: operations.OutputSyslog = {
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
    minVersion: "TLSv1",
    maxVersion: "TLSv1.2",
  },
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
    maxVersion: "TLSv1.2",
  },
  description: "clear-cut maintainer alongside uselessly",
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
    minVersion: "TLSv1",
    maxVersion: "TLSv1.2",
  },
  description: "pants cycle consequently neck floss now pearl",
  indexerDiscoveryConfigs: {
    masterUri: "https://stained-coin.name",
    authTokens: [
      {
        textSecret: "<value>",
      },
    ],
    textSecret: "<value>",
  },
  hosts: [
    {
      host: "wretched-haversack.name",
      servername: "<value>",
    },
  ],
  pqControls: {},
  textSecret: "<value>",
};
```

### `operations.OutputSplunkHec`

```typescript
const value: operations.OutputSplunkHec = {
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
  ],
  responseRetrySettings: [
    {
      httpStatus: 8829.54,
    },
  ],
  timeoutRetrySettings: {},
  description: "depot dearly sneak",
  urls: [
    {},
  ],
  token: "<value>",
  textSecret: "<value>",
  pqControls: {},
};
```

### `operations.OutputTcpjson`

```typescript
const value: operations.OutputTcpjson = {
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
  description: "finally after guilty",
  host: "heartfelt-volleyball.org",
  port: 8714,
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
      httpStatus: 8829.54,
    },
  ],
  timeoutRetrySettings: {},
  description: "cantaloupe unfreeze disadvantage thick cheerfully netsuke",
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
      httpStatus: 8829.54,
    },
  ],
  timeoutRetrySettings: {},
  description: "feline psst silk pfft between despite eek although",
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
  parquetSchema: "<value>",
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
  parquetSchema: "<value>",
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
      httpStatus: 8829.54,
    },
  ],
  timeoutRetrySettings: {},
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
      httpStatus: 8829.54,
    },
  ],
  timeoutRetrySettings: {},
  description: "present guard madly forceful hmph fiddle for shameful oof",
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
      httpStatus: 8829.54,
    },
  ],
  timeoutRetrySettings: {},
  description: "overconfidently provided yahoo cluttered necklace",
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
    "<value 3>",
  ],
  totalMemoryLimitKB: 6201.78,
  description: "obnoxiously ugh reckless chatter",
  extraLogTypes: [
    {
      logType: "<value>",
      description: "teeming aw meanwhile",
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
  description: "worth advertisement overburden shrilly doodle circa",
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
      minVersion: "TLSv1",
      maxVersion: "TLSv1.2",
    },
    defaultKeySchemaId: 5573.36,
    defaultValueSchemaId: 4635.91,
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
  description:
    "whose whereas morbidity uh-huh before until eke commemorate reach correctly",
  protobufLibraryId: "<id>",
  protobufEncodingId: "<id>",
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
    minVersion: "TLSv1",
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
      minVersion: "TLSv1",
      maxVersion: "TLSv1.2",
    },
    defaultKeySchemaId: 5573.36,
    defaultValueSchemaId: 4635.91,
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
  description: "rural about pfft blight though",
  protobufLibraryId: "<id>",
  protobufEncodingId: "<id>",
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
      minVersion: "TLSv1",
      maxVersion: "TLSv1.2",
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
    minVersion: "TLSv1",
    maxVersion: "TLSv1.1",
  },
  description: "helplessly now vaguely weakly wolf",
  awsApiKey: "<value>",
  awsSecret: "<value>",
  protobufLibraryId: "<id>",
  protobufEncodingId: "<id>",
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
    username: "Lambert_Herzog83",
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
      httpStatus: 8829.54,
    },
  ],
  timeoutRetrySettings: {},
  description: "marathon next sauerkraut comparison fidget",
  pqControls: {},
};
```

### `operations.OutputNewrelic`

```typescript
const value: operations.OutputNewrelic = {
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
      httpStatus: 8829.54,
    },
  ],
  timeoutRetrySettings: {},
  totalMemoryLimitKB: 7623.14,
  description: "convoke zowie bowling how",
  customUrl: "https://taut-quit.com/",
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
      httpStatus: 8829.54,
    },
  ],
  timeoutRetrySettings: {},
  description: "sheepishly homely roughly oh pixellate minus excitedly",
  customUrl: "https://spherical-pacemaker.name/",
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
      httpStatus: 8829.54,
    },
  ],
  timeoutRetrySettings: {},
  description: "rosin by yowza whoa psst cap",
  database: "<value>",
  bucket: "<value>",
  org: "<value>",
  pqControls: {},
  username: "Herbert.Adams",
  password: "X5NtO4yaXOuaogW",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://torn-begonia.biz/",
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
  parquetSchema: "<value>",
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
      httpStatus: 8829.54,
    },
  ],
  timeoutRetrySettings: {},
  totalMemoryLimitKB: 5053.29,
  description:
    "stoop beside cross nervously midst convoke but wherever bemuse for",
  pqControls: {},
};
```

### `operations.OutputDatadog`

```typescript
const value: operations.OutputDatadog = {
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
      httpStatus: 8829.54,
    },
  ],
  timeoutRetrySettings: {},
  totalMemoryLimitKB: 3596.93,
  description: "superficial license tidy spook boohoo neatly whirlwind",
  customUrl: "https://oily-mozzarella.com/",
  pqControls: {},
  apiKey: "<value>",
  textSecret: "<value>",
};
```

### `operations.OutputGrafanaCloud`

```typescript
const value: operations.OutputGrafanaCloud = {
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
  lokiUrl: "https://rectangular-sprinkles.name/",
  prometheusUrl: "https://cultivated-topsail.info/",
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
    "<value 3>",
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
  description: "ordinary official weakly electric statement not optimal",
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
      httpStatus: 8829.54,
    },
  ],
  timeoutRetrySettings: {},
  totalMemoryLimitKB: 2885.83,
  description: "moralise hm boldly",
  token: "<value>",
  textSecret: "<value>",
  username: "Mortimer.Boyer",
  password: "5M4evjXGNLT2MGH",
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
      httpStatus: 8829.54,
    },
  ],
  timeoutRetrySettings: {},
  description: "maroon between limited both grubby how sheepishly miserably",
  pqControls: {},
  username: "Terry_Williamson",
  password: "KKS1iT7fwszyEzp",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://helpless-nerve.com/",
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

### `operations.OutputRing`

```typescript
const value: operations.OutputRing = {
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

### `operations.OutputDataset`

```typescript
const value: operations.OutputDataset = {
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
  totalMemoryLimitKB: 4749.03,
  description: "guide so however mixture",
  customUrl: "https://nocturnal-cuckoo.net/",
  pqControls: {},
  apiKey: "<value>",
  textSecret: "<value>",
};
```

### `operations.OutputCriblTcp`

```typescript
const value: operations.OutputCriblTcp = {
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
    maxVersion: "TLSv1.2",
  },
  authTokens: [
    {
      tokenSecret: "<value>",
      description: "augment case without",
    },
  ],
  excludeFields: [
    "<value 1>",
  ],
  description: "not mmm snappy dismal plump yowza",
  host: "giving-basket.biz",
  hosts: [
    {
      host: "grim-plumber.biz",
      servername: "<value>",
    },
  ],
  pqControls: {},
};
```

### `operations.OutputCriblHttp`

```typescript
const value: operations.OutputCriblHttp = {
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
    minVersion: "TLSv1",
    maxVersion: "TLSv1.2",
  },
  excludeFields: [
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
  authTokens: [
    {
      tokenSecret: "<value>",
      description: "usually aha integer breed",
    },
  ],
  description: "sarong since ravel definitive meh disloyal geez apropos on",
  url: "https://nocturnal-soliloquy.com",
  urls: [
    {
      url: "https://silky-smoke.name/",
    },
  ],
  pqControls: {},
};
```

### `operations.OutputCriblSearchEngine`

```typescript
const value: operations.OutputCriblSearchEngine = {
  id: "<id>",
  type: "cribl_search_engine",
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
  description: "puritan as huzzah singing pfft supposing blah",
  url: "https://surprised-fellow.info",
  urls: [
    {
      url: "https://silky-smoke.name/",
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
      httpStatus: 8829.54,
    },
  ],
  timeoutRetrySettings: {},
  description:
    "furthermore acidly upon ravioli gadzooks apparatus brr gosh across",
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
      httpStatus: 8829.54,
    },
  ],
  timeoutRetrySettings: {},
  description: "um mortally claw festival",
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
  parquetSchema: "<value>",
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

### `operations.OutputCriblLake`

```typescript
const value: operations.OutputCriblLake = {
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

### `operations.OutputDiskSpool`

```typescript
const value: operations.OutputDiskSpool = {
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
  ],
  responseRetrySettings: [
    {
      httpStatus: 8829.54,
    },
  ],
  timeoutRetrySettings: {},
  statsDestination: {
    url: "https://scared-marten.org",
    database: "<value>",
    tableName: "<value>",
    authType: "<value>",
    username: "Carter_Stracke",
    sqlUsername: "<value>",
    password: "RzLf6mLUSadNUuZ",
  },
  description: "aha rawhide staid untrue orientate confusion",
  username: "Joshuah_Rice85",
  password: "9zMh6XcMrb5Fskj",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://circular-decision.name",
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

### `operations.OutputXsiam`

```typescript
const value: operations.OutputXsiam = {
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
      httpStatus: 8829.54,
    },
  ],
  timeoutRetrySettings: {},
  totalMemoryLimitKB: 4570.48,
  description: "usefully unlearn linear gadzooks voluntarily",
  urls: [
    {
      url: "https://austere-subsidy.com/",
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
      httpStatus: 8829.54,
    },
  ],
  timeoutRetrySettings: {},
  totalMemoryLimitKB: 6531.96,
  description:
    "who supposing uselessly detective wholly aside intently awareness consequently",
  pqControls: {},
  token: "<value>",
  textSecret: "<value>",
  environmentId: "<id>",
  activeGateDomain: "<value>",
  url: "https://milky-guacamole.com/",
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
      httpStatus: 8829.54,
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

### `operations.OutputChronicle`

```typescript
const value: operations.OutputChronicle = {
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
  totalMemoryLimitKB: 2578.26,
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
  description: "whose generally uh-huh nor",
  serviceAccountCredentials: "<value>",
  serviceAccountCredentialsSecret: "<value>",
  pqControls: {},
};
```

### `operations.OutputDatabricks`

```typescript
const value: operations.OutputDatabricks = {
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

### `operations.OutputMicrosoftFabric`

```typescript
const value: operations.OutputMicrosoftFabric = {
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

### `operations.OutputCloudflareR2`

```typescript
const value: operations.OutputCloudflareR2 = {
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

