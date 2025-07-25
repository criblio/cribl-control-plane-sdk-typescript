# Output


## Supported Types

### `models.OutputDefault`

```typescript
const value: models.OutputDefault = {
  type: "default",
  defaultId: "<id>",
};
```

### `models.OutputWebhook`

```typescript
const value: models.OutputWebhook = {
  id: "<id>",
  type: "webhook",
};
```

### `models.OutputSentinel`

```typescript
const value: models.OutputSentinel = {
  loginUrl: "https://extra-large-obesity.name",
  secret: "<value>",
  clientId: "<id>",
};
```

### `models.OutputDevnull`

```typescript
const value: models.OutputDevnull = {
  id: "<id>",
  type: "devnull",
};
```

### `models.OutputSyslog`

```typescript
const value: models.OutputSyslog = {
  id: "<id>",
  type: "syslog",
};
```

### `models.OutputSplunk`

```typescript
const value: models.OutputSplunk = {
  host: "blushing-plastic.biz",
};
```

### `models.OutputSplunkLb`

```typescript
const value: models.OutputSplunkLb = {
  type: "splunk_lb",
  hosts: [
    {
      host: "apprehensive-cleaner.info",
    },
  ],
};
```

### `models.OutputSplunkHec`

```typescript
const value: models.OutputSplunkHec = {
  id: "<id>",
  type: "splunk_hec",
};
```

### `models.OutputTcpjson`

```typescript
const value: models.OutputTcpjson = {
  id: "<id>",
  type: "tcpjson",
};
```

### `models.OutputWavefront`

```typescript
const value: models.OutputWavefront = {
  type: "wavefront",
};
```

### `models.OutputSignalfx`

```typescript
const value: models.OutputSignalfx = {
  type: "signalfx",
};
```

### `models.OutputFilesystem`

```typescript
const value: models.OutputFilesystem = {
  type: "filesystem",
  destPath: "<value>",
};
```

### `models.OutputS3`

```typescript
const value: models.OutputS3 = {
  bucket: "<value>",
};
```

### `models.OutputAzureBlob`

```typescript
const value: models.OutputAzureBlob = {
  containerName: "<value>",
};
```

### `models.OutputAzureDataExplorer`

```typescript
const value: models.OutputAzureDataExplorer = {
  clusterUrl: "https://ample-making.net/",
  database: "<value>",
  table: "<value>",
  tenantId: "<id>",
  clientId: "<id>",
  scope: "<value>",
};
```

### `models.OutputAzureLogs`

```typescript
const value: models.OutputAzureLogs = {
  type: "azure_logs",
};
```

### `models.OutputKinesis`

```typescript
const value: models.OutputKinesis = {
  streamName: "<value>",
  region: "<value>",
};
```

### `models.OutputHoneycomb`

```typescript
const value: models.OutputHoneycomb = {
  type: "honeycomb",
  dataset: "<value>",
};
```

### `models.OutputAzureEventhub`

```typescript
const value: models.OutputAzureEventhub = {
  brokers: [
    "<value 1>",
    "<value 2>",
  ],
  topic: "<value>",
};
```

### `models.OutputGoogleChronicle`

```typescript
const value: models.OutputGoogleChronicle = {
  type: "google_chronicle",
};
```

### `models.OutputGoogleCloudStorage`

```typescript
const value: models.OutputGoogleCloudStorage = {
  bucket: "<value>",
  region: "<value>",
};
```

### `models.OutputGoogleCloudLogging`

```typescript
const value: models.OutputGoogleCloudLogging = {
  logLocationType: "folder",
  logNameExpression: "<value>",
  logLocationExpression: "<value>",
};
```

### `models.OutputGooglePubsub`

```typescript
const value: models.OutputGooglePubsub = {
  type: "google_pubsub",
  topicName: "<value>",
};
```

### `models.OutputExabeam`

```typescript
const value: models.OutputExabeam = {
  bucket: "<value>",
  region: "<value>",
  collectorInstanceId: "<id>",
};
```

### `models.OutputKafka`

```typescript
const value: models.OutputKafka = {
  brokers: [
    "<value 1>",
  ],
  topic: "<value>",
};
```

### `models.OutputConfluentCloud`

```typescript
const value: models.OutputConfluentCloud = {
  brokers: [],
  topic: "<value>",
};
```

### `models.OutputMsk`

```typescript
const value: models.OutputMsk = {
  brokers: [],
  topic: "<value>",
  region: "<value>",
};
```

### `models.OutputElastic`

```typescript
const value: models.OutputElastic = {
  type: "elastic",
  index: "<value>",
};
```

### `models.OutputElasticCloud`

```typescript
const value: models.OutputElasticCloud = {
  url: "https://common-case.info",
  index: "<value>",
};
```

### `models.OutputNewrelic`

```typescript
const value: models.OutputNewrelic = {
  id: "<id>",
  type: "newrelic",
};
```

### `models.OutputNewrelicEvents`

```typescript
const value: models.OutputNewrelicEvents = {
  accountId: "<id>",
  eventType: "<value>",
};
```

### `models.OutputInfluxdb`

```typescript
const value: models.OutputInfluxdb = {
  type: "influxdb",
  url: "https://next-strategy.org/",
};
```

### `models.OutputCloudwatch`

```typescript
const value: models.OutputCloudwatch = {
  logGroupName: "<value>",
  logStreamName: "<value>",
  region: "<value>",
};
```

### `models.OutputMinio`

```typescript
const value: models.OutputMinio = {
  endpoint: "<value>",
  bucket: "<value>",
};
```

### `models.OutputStatsd`

```typescript
const value: models.OutputStatsd = {
  host: "caring-bidet.org",
};
```

### `models.OutputStatsdExt`

```typescript
const value: models.OutputStatsdExt = {
  host: "immense-disconnection.org",
};
```

### `models.OutputGraphite`

```typescript
const value: models.OutputGraphite = {
  host: "tall-sprinkles.biz",
};
```

### `models.OutputRouter`

```typescript
const value: models.OutputRouter = {
  type: "router",
  rules: [
    {
      filter: "<value>",
      output: "<value>",
    },
  ],
};
```

### `models.OutputSns`

```typescript
const value: models.OutputSns = {
  topicArn: "<value>",
  messageGroupId: "<id>",
};
```

### `models.OutputSqs`

```typescript
const value: models.OutputSqs = {
  queueName: "<value>",
};
```

### `models.OutputSnmp`

```typescript
const value: models.OutputSnmp = {
  type: "snmp",
  hosts: [],
};
```

### `models.OutputSumoLogic`

```typescript
const value: models.OutputSumoLogic = {
  type: "sumo_logic",
  url: "https://dazzling-swing.biz/",
};
```

### `models.OutputDatadog`

```typescript
const value: models.OutputDatadog = {
  id: "<id>",
  type: "datadog",
};
```

### `models.OutputGrafanaCloud`

```typescript
const value: models.OutputGrafanaCloud = {
  id: "<id>",
  type: "grafana_cloud",
  prometheusUrl: "https://pitiful-cap.com/",
  messageFormat: "protobuf",
  metricRenameExpr: "name.replace(/[^a-zA-Z0-9_]/g, '_')",
  concurrency: 1,
  maxPayloadSizeKB: 4096,
  maxPayloadEvents: 0,
  rejectUnauthorized: true,
  timeoutSec: 30,
  flushPeriodSec: 15,
  useRoundRobinDns: false,
  failedRequestLoggingMode: "none",
  responseHonorRetryAfterHeader: false,
  onBackpressure: "block",
  compress: true,
  pqMaxFileSize: "1 MB",
  pqMaxSize: "5GB",
  pqPath: "$CRIBL_HOME/state/queues",
  pqCompress: "none",
  pqOnBackpressure: "block",
  pqMode: "error",
};
```

### `models.OutputLoki`

```typescript
const value: models.OutputLoki = {
  type: "loki",
  url: "https://pushy-spring.biz/",
};
```

### `models.OutputPrometheus`

```typescript
const value: models.OutputPrometheus = {
  type: "prometheus",
  url: "https://regal-expense.com/",
};
```

### `models.OutputRing`

```typescript
const value: models.OutputRing = {
  id: "<id>",
  type: "ring",
};
```

### `models.OutputOpenTelemetry`

```typescript
const value: models.OutputOpenTelemetry = {
  type: "open_telemetry",
  endpoint: "<value>",
};
```

### `models.OutputServiceNow`

```typescript
const value: models.OutputServiceNow = {
  tokenSecret: "<value>",
};
```

### `models.OutputDataset`

```typescript
const value: models.OutputDataset = {
  id: "<id>",
  type: "dataset",
};
```

### `models.OutputCriblTcp`

```typescript
const value: models.OutputCriblTcp = {
  id: "<id>",
  type: "cribl_tcp",
};
```

### `models.OutputCriblHttp`

```typescript
const value: models.OutputCriblHttp = {
  id: "<id>",
  type: "cribl_http",
};
```

### `models.OutputHumioHec`

```typescript
const value: models.OutputHumioHec = {};
```

### `models.OutputCrowdstrikeNextGenSiem`

```typescript
const value: models.OutputCrowdstrikeNextGenSiem = {
  url: "https://shabby-hornet.biz/",
};
```

### `models.OutputDlS3`

```typescript
const value: models.OutputDlS3 = {
  bucket: "<value>",
};
```

### `models.OutputSecurityLake`

```typescript
const value: models.OutputSecurityLake = {
  bucket: "<value>",
  region: "<value>",
  assumeRoleArn: "<value>",
  accountId: "<id>",
  customSource: "<value>",
};
```

### `models.OutputCriblLake`

```typescript
const value: models.OutputCriblLake = {
  id: "<id>",
  type: "cribl_lake",
};
```

### `models.OutputDiskSpool`

```typescript
const value: models.OutputDiskSpool = {
  id: "<id>",
  type: "disk_spool",
};
```

### `models.OutputClickHouse`

```typescript
const value: models.OutputClickHouse = {
  url: "https://lucky-ignorance.name/",
  database: "<value>",
  tableName: "<value>",
};
```

### `models.OutputXsiam`

```typescript
const value: models.OutputXsiam = {
  id: "<id>",
  type: "xsiam",
};
```

### `models.OutputNetflow`

```typescript
const value: models.OutputNetflow = {
  type: "netflow",
  hosts: [
    {
      host: "well-worn-conservative.name",
    },
  ],
};
```

### `models.OutputDynatraceHttp`

```typescript
const value: models.OutputDynatraceHttp = {};
```

### `models.OutputDynatraceOtlp`

```typescript
const value: models.OutputDynatraceOtlp = {
  tokenSecret: "<value>",
};
```

### `models.OutputSentinelOneAiSiem`

```typescript
const value: models.OutputSentinelOneAiSiem = {};
```

