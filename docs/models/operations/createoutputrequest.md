# CreateOutputRequest

New Destination object


## Supported Types

### `operations.OutputDefault`

```typescript
const value: operations.OutputDefault = {
  id: "<id>",
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

### `operations.OutputSentinel`

```typescript
const value: operations.OutputSentinel = {
  id: "<id>",
  loginUrl: "https://inexperienced-hydrolyze.com",
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

### `operations.OutputSplunk`

```typescript
const value: operations.OutputSplunk = {
  id: "<id>",
  host: "shiny-dime.org",
};
```

### `operations.OutputSplunkLb`

```typescript
const value: operations.OutputSplunkLb = {
  id: "<id>",
  type: "splunk_lb",
  hosts: [
    {
      host: "delectable-noon.info",
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

### `operations.OutputWavefront`

```typescript
const value: operations.OutputWavefront = {
  id: "<id>",
  type: "wavefront",
};
```

### `operations.OutputSignalfx`

```typescript
const value: operations.OutputSignalfx = {
  id: "<id>",
  type: "signalfx",
};
```

### `operations.OutputFilesystem`

```typescript
const value: operations.OutputFilesystem = {
  id: "<id>",
  type: "filesystem",
  destPath: "<value>",
};
```

### `operations.OutputS3`

```typescript
const value: operations.OutputS3 = {
  id: "<id>",
  bucket: "<value>",
};
```

### `operations.OutputAzureBlob`

```typescript
const value: operations.OutputAzureBlob = {
  id: "<id>",
  containerName: "<value>",
};
```

### `operations.OutputAzureDataExplorer`

```typescript
const value: operations.OutputAzureDataExplorer = {
  id: "<id>",
  clusterUrl: "https://mad-lamp.info/",
  database: "<value>",
  table: "<value>",
  tenantId: "<id>",
  clientId: "<id>",
  scope: "<value>",
};
```

### `operations.OutputAzureLogs`

```typescript
const value: operations.OutputAzureLogs = {
  id: "<id>",
  type: "azure_logs",
};
```

### `operations.OutputKinesis`

```typescript
const value: operations.OutputKinesis = {
  id: "<id>",
  streamName: "<value>",
  region: "<value>",
};
```

### `operations.OutputHoneycomb`

```typescript
const value: operations.OutputHoneycomb = {
  id: "<id>",
  type: "honeycomb",
  dataset: "<value>",
};
```

### `operations.OutputAzureEventhub`

```typescript
const value: operations.OutputAzureEventhub = {
  id: "<id>",
  brokers: [
    "<value 1>",
    "<value 2>",
  ],
  topic: "<value>",
};
```

### `operations.OutputGoogleChronicle`

```typescript
const value: operations.OutputGoogleChronicle = {
  id: "<id>",
  type: "google_chronicle",
};
```

### `operations.OutputGoogleCloudStorage`

```typescript
const value: operations.OutputGoogleCloudStorage = {
  id: "<id>",
  bucket: "<value>",
  region: "<value>",
};
```

### `operations.OutputGoogleCloudLogging`

```typescript
const value: operations.OutputGoogleCloudLogging = {
  id: "<id>",
  logLocationType: "organization",
  logNameExpression: "<value>",
  logLocationExpression: "<value>",
};
```

### `operations.OutputGooglePubsub`

```typescript
const value: operations.OutputGooglePubsub = {
  id: "<id>",
  type: "google_pubsub",
  topicName: "<value>",
};
```

### `operations.OutputExabeam`

```typescript
const value: operations.OutputExabeam = {
  id: "<id>",
  bucket: "<value>",
  region: "<value>",
  collectorInstanceId: "<id>",
};
```

### `operations.OutputKafka`

```typescript
const value: operations.OutputKafka = {
  id: "<id>",
  brokers: [
    "<value 1>",
  ],
  topic: "<value>",
};
```

### `operations.OutputConfluentCloud`

```typescript
const value: operations.OutputConfluentCloud = {
  id: "<id>",
  brokers: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  topic: "<value>",
};
```

### `operations.OutputMsk`

```typescript
const value: operations.OutputMsk = {
  id: "<id>",
  brokers: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  topic: "<value>",
  region: "<value>",
};
```

### `operations.OutputElastic`

```typescript
const value: operations.OutputElastic = {
  id: "<id>",
  type: "elastic",
  index: "<value>",
};
```

### `operations.OutputElasticCloud`

```typescript
const value: operations.OutputElasticCloud = {
  id: "<id>",
  url: "https://sweet-analogy.name",
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

### `operations.OutputNewrelicEvents`

```typescript
const value: operations.OutputNewrelicEvents = {
  id: "<id>",
  accountId: "<id>",
  eventType: "<value>",
};
```

### `operations.OutputInfluxdb`

```typescript
const value: operations.OutputInfluxdb = {
  id: "<id>",
  type: "influxdb",
  url: "https://noteworthy-sediment.com/",
};
```

### `operations.OutputCloudwatch`

```typescript
const value: operations.OutputCloudwatch = {
  id: "<id>",
  logGroupName: "<value>",
  logStreamName: "<value>",
  region: "<value>",
};
```

### `operations.OutputMinio`

```typescript
const value: operations.OutputMinio = {
  id: "<id>",
  endpoint: "<value>",
  bucket: "<value>",
};
```

### `operations.OutputStatsd`

```typescript
const value: operations.OutputStatsd = {
  id: "<id>",
  host: "near-mentor.org",
};
```

### `operations.OutputStatsdExt`

```typescript
const value: operations.OutputStatsdExt = {
  id: "<id>",
  host: "honorable-kick.org",
};
```

### `operations.OutputGraphite`

```typescript
const value: operations.OutputGraphite = {
  id: "<id>",
  host: "hidden-bidet.biz",
};
```

### `operations.OutputRouter`

```typescript
const value: operations.OutputRouter = {
  id: "<id>",
  type: "router",
  rules: [
    {
      filter: "<value>",
      output: "<value>",
    },
  ],
};
```

### `operations.OutputSns`

```typescript
const value: operations.OutputSns = {
  id: "<id>",
  topicArn: "<value>",
  messageGroupId: "<id>",
};
```

### `operations.OutputSqs`

```typescript
const value: operations.OutputSqs = {
  id: "<id>",
  queueName: "<value>",
};
```

### `operations.OutputSnmp`

```typescript
const value: operations.OutputSnmp = {
  id: "<id>",
  type: "snmp",
  hosts: [
    {
      host: "cool-earth.com",
    },
  ],
};
```

### `operations.OutputSumoLogic`

```typescript
const value: operations.OutputSumoLogic = {
  id: "<id>",
  type: "sumo_logic",
  url: "https://expensive-disconnection.name/",
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

### `operations.OutputLoki`

```typescript
const value: operations.OutputLoki = {
  id: "<id>",
  type: "loki",
  url: "https://deficient-t-shirt.org/",
};
```

### `operations.OutputPrometheus`

```typescript
const value: operations.OutputPrometheus = {
  id: "<id>",
  type: "prometheus",
  url: "https://eminent-colon.name",
};
```

### `models.OutputRing`

```typescript
const value: models.OutputRing = {
  id: "<id>",
  type: "ring",
};
```

### `operations.OutputOpenTelemetry`

```typescript
const value: operations.OutputOpenTelemetry = {
  id: "<id>",
  type: "open_telemetry",
  endpoint: "<value>",
};
```

### `operations.OutputServiceNow`

```typescript
const value: operations.OutputServiceNow = {
  id: "<id>",
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

### `operations.OutputHumioHec`

```typescript
const value: operations.OutputHumioHec = {
  id: "<id>",
};
```

### `operations.OutputCrowdstrikeNextGenSiem`

```typescript
const value: operations.OutputCrowdstrikeNextGenSiem = {
  id: "<id>",
  url: "https://prickly-promise.org/",
};
```

### `operations.OutputDlS3`

```typescript
const value: operations.OutputDlS3 = {
  id: "<id>",
  bucket: "<value>",
};
```

### `operations.OutputSecurityLake`

```typescript
const value: operations.OutputSecurityLake = {
  id: "<id>",
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

### `operations.OutputClickHouse`

```typescript
const value: operations.OutputClickHouse = {
  id: "<id>",
  url: "https://authentic-abacus.info",
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

### `operations.OutputNetflow`

```typescript
const value: operations.OutputNetflow = {
  id: "<id>",
  type: "netflow",
  hosts: [
    {
      host: "taut-provider.org",
    },
  ],
};
```

### `operations.OutputDynatraceHttp`

```typescript
const value: operations.OutputDynatraceHttp = {
  id: "<id>",
};
```

### `operations.OutputDynatraceOtlp`

```typescript
const value: operations.OutputDynatraceOtlp = {
  id: "<id>",
  tokenSecret: "<value>",
};
```

### `operations.OutputSentinelOneAiSiem`

```typescript
const value: operations.OutputSentinelOneAiSiem = {
  id: "<id>",
};
```

