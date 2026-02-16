# CreateOutputRequest

Output object


## Supported Types

### `operations.OutputDefault`

```typescript
const value: operations.OutputDefault = {
  id: "<id>",
  type: "default",
  defaultId: "<id>",
};
```

### `operations.OutputWebhook`

```typescript
const value: operations.OutputWebhook = {
  id: "<id>",
  type: "webhook",
};
```

### `operations.OutputSentinel`

```typescript
const value: operations.OutputSentinel = {
  id: "<id>",
  type: "sentinel",
  loginUrl: "https://inexperienced-hydrolyze.com",
  secret: "<value>",
  client_id: "<id>",
  endpointURLConfiguration: "ID",
};
```

### `operations.OutputDevnull`

```typescript
const value: operations.OutputDevnull = {
  id: "<id>",
  type: "devnull",
};
```

### `operations.OutputSyslog`

```typescript
const value: operations.OutputSyslog = {
  id: "<id>",
  type: "syslog",
};
```

### `operations.OutputSplunk`

```typescript
const value: operations.OutputSplunk = {
  id: "<id>",
  type: "splunk",
  host: "shiny-dime.org",
  port: 4244.22,
};
```

### `operations.OutputSplunkLb`

```typescript
const value: operations.OutputSplunkLb = {
  id: "<id>",
  type: "splunk_lb",
  hosts: [
    {
      host: "apprehensive-cleaner.info",
      port: 7777.88,
    },
  ],
};
```

### `operations.OutputSplunkHec`

```typescript
const value: operations.OutputSplunkHec = {
  id: "<id>",
  type: "splunk_hec",
};
```

### `operations.OutputWizHec`

```typescript
const value: operations.OutputWizHec = {
  id: "<id>",
  type: "wiz_hec",
  wiz_connector_id: "<id>",
  wiz_environment: "<value>",
  data_center: "<value>",
  wiz_sourcetype: "<value>",
};
```

### `operations.OutputTcpjson`

```typescript
const value: operations.OutputTcpjson = {
  id: "<id>",
  type: "tcpjson",
};
```

### `operations.OutputWavefront`

```typescript
const value: operations.OutputWavefront = {
  id: "<id>",
  type: "wavefront",
  domain: "immense-descent.org",
};
```

### `operations.OutputSignalfx`

```typescript
const value: operations.OutputSignalfx = {
  id: "<id>",
  type: "signalfx",
  realm: "<value>",
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
  type: "s3",
  bucket: "<value>",
  stagePath: "<value>",
};
```

### `operations.OutputAzureBlob`

```typescript
const value: operations.OutputAzureBlob = {
  id: "<id>",
  type: "azure_blob",
  containerName: "<value>",
  stagePath: "<value>",
};
```

### `operations.OutputAzureDataExplorer`

```typescript
const value: operations.OutputAzureDataExplorer = {
  id: "<id>",
  type: "azure_data_explorer",
  clusterUrl: "https://mad-lamp.info/",
  database: "<value>",
  table: "<value>",
  oauthEndpoint: "https://login.microsoftonline.com",
  tenantId: "<id>",
  clientId: "<id>",
  scope: "<value>",
  oauthType: "certificate",
  compress: "gzip",
};
```

### `operations.OutputAzureLogs`

```typescript
const value: operations.OutputAzureLogs = {
  id: "<id>",
  type: "azure_logs",
  logType: "<value>",
};
```

### `operations.OutputKinesis`

```typescript
const value: operations.OutputKinesis = {
  id: "<id>",
  type: "kinesis",
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
  type: "azure_eventhub",
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
  logFormatType: "unstructured",
};
```

### `operations.OutputGoogleCloudStorage`

```typescript
const value: operations.OutputGoogleCloudStorage = {
  id: "<id>",
  type: "google_cloud_storage",
  bucket: "<value>",
  region: "<value>",
  endpoint: "<value>",
  stagePath: "<value>",
};
```

### `operations.OutputGoogleCloudLogging`

```typescript
const value: operations.OutputGoogleCloudLogging = {
  id: "<id>",
  type: "google_cloud_logging",
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
  type: "exabeam",
  bucket: "<value>",
  region: "<value>",
  stagePath: "<value>",
  endpoint: "<value>",
  collectorInstanceId: "<id>",
};
```

### `operations.OutputKafka`

```typescript
const value: operations.OutputKafka = {
  id: "<id>",
  type: "kafka",
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
  type: "confluent_cloud",
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
  type: "msk",
  brokers: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  topic: "<value>",
  awsAuthenticationMethod: "<value>",
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
  type: "elastic_cloud",
  url: "https://sweet-analogy.name",
  index: "<value>",
};
```

### `operations.OutputNewrelic`

```typescript
const value: operations.OutputNewrelic = {
  id: "<id>",
  type: "newrelic",
};
```

### `operations.OutputNewrelicEvents`

```typescript
const value: operations.OutputNewrelicEvents = {
  id: "<id>",
  type: "newrelic_events",
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
  type: "cloudwatch",
  logGroupName: "<value>",
  logStreamName: "<value>",
  region: "<value>",
};
```

### `operations.OutputMinio`

```typescript
const value: operations.OutputMinio = {
  id: "<id>",
  type: "minio",
  endpoint: "<value>",
  bucket: "<value>",
  stagePath: "<value>",
};
```

### `operations.OutputStatsd`

```typescript
const value: operations.OutputStatsd = {
  id: "<id>",
  type: "statsd",
  protocol: "tcp",
  host: "obvious-vestment.net",
  port: 3067.34,
};
```

### `operations.OutputStatsdExt`

```typescript
const value: operations.OutputStatsdExt = {
  id: "<id>",
  type: "statsd_ext",
  protocol: "udp",
  host: "majestic-vision.biz",
  port: 9803.43,
};
```

### `operations.OutputGraphite`

```typescript
const value: operations.OutputGraphite = {
  id: "<id>",
  type: "graphite",
  protocol: "udp",
  host: "boiling-fencing.net",
  port: 5977.34,
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
  type: "sns",
  topicArn: "<value>",
  messageGroupId: "<id>",
};
```

### `operations.OutputSqs`

```typescript
const value: operations.OutputSqs = {
  id: "<id>",
  type: "sqs",
  queueName: "<value>",
  queueType: "standard",
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
      port: 2969.25,
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

### `operations.OutputDatadog`

```typescript
const value: operations.OutputDatadog = {
  id: "<id>",
  type: "datadog",
};
```

### `operations.OutputGrafanaCloud`

```typescript
const value: operations.OutputGrafanaCloud = {
  id: "<id>",
  type: "grafana_cloud",
  lokiUrl: "https://noted-jacket.net/",
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

### `operations.OutputRing`

```typescript
const value: operations.OutputRing = {
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
  type: "service_now",
  endpoint: "<value>",
  tokenSecret: "<value>",
  otlpVersion: "1.3.1",
  protocol: "http",
};
```

### `operations.OutputDataset`

```typescript
const value: operations.OutputDataset = {
  id: "<id>",
  type: "dataset",
};
```

### `operations.OutputCriblTcp`

```typescript
const value: operations.OutputCriblTcp = {
  id: "<id>",
  type: "cribl_tcp",
};
```

### `operations.OutputCriblHttp`

```typescript
const value: operations.OutputCriblHttp = {
  id: "<id>",
  type: "cribl_http",
};
```

### `operations.OutputCriblSearchEngine`

```typescript
const value: operations.OutputCriblSearchEngine = {
  id: "<id>",
  type: "cribl_search_engine",
};
```

### `operations.OutputHumioHec`

```typescript
const value: operations.OutputHumioHec = {
  id: "<id>",
  type: "humio_hec",
  url: "https://potable-pilot.org",
  format: "raw",
};
```

### `operations.OutputCrowdstrikeNextGenSiem`

```typescript
const value: operations.OutputCrowdstrikeNextGenSiem = {
  id: "<id>",
  type: "crowdstrike_next_gen_siem",
  url: "https://prickly-promise.org/",
  format: "raw",
};
```

### `operations.OutputDlS3`

```typescript
const value: operations.OutputDlS3 = {
  id: "<id>",
  type: "dl_s3",
  bucket: "<value>",
  stagePath: "<value>",
};
```

### `operations.OutputSecurityLake`

```typescript
const value: operations.OutputSecurityLake = {
  id: "<id>",
  type: "security_lake",
  bucket: "<value>",
  region: "<value>",
  assumeRoleArn: "<value>",
  stagePath: "<value>",
  accountId: "<id>",
  customSource: "<value>",
};
```

### `operations.OutputCriblLake`

```typescript
const value: operations.OutputCriblLake = {
  id: "<id>",
  type: "cribl_lake",
};
```

### `operations.OutputDiskSpool`

```typescript
const value: operations.OutputDiskSpool = {
  id: "<id>",
  type: "disk_spool",
};
```

### `operations.OutputClickHouse`

```typescript
const value: operations.OutputClickHouse = {
  id: "<id>",
  type: "click_house",
  url: "https://authentic-abacus.info",
  database: "<value>",
  tableName: "<value>",
};
```

### `operations.OutputXsiam`

```typescript
const value: operations.OutputXsiam = {
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
      port: 130.89,
    },
  ],
};
```

### `operations.OutputDynatraceHttp`

```typescript
const value: operations.OutputDynatraceHttp = {
  id: "<id>",
  type: "dynatrace_http",
  format: "plaintext",
  endpoint: "manual",
  telemetryType: "logs",
};
```

### `operations.OutputDynatraceOtlp`

```typescript
const value: operations.OutputDynatraceOtlp = {
  id: "<id>",
  type: "dynatrace_otlp",
  protocol: "http",
  endpoint: "<value>",
  otlpVersion: "1.3.1",
  endpointType: "ag",
  tokenSecret: "<value>",
};
```

### `operations.OutputSentinelOneAiSiem`

```typescript
const value: operations.OutputSentinelOneAiSiem = {
  id: "<id>",
  type: "sentinel_one_ai_siem",
  region: "Custom",
  endpoint: "/services/collector/raw",
};
```

### `operations.OutputChronicle`

```typescript
const value: operations.OutputChronicle = {
  id: "<id>",
  type: "chronicle",
  region: "<value>",
  logType: "<value>",
  gcpProjectId: "<id>",
  gcpInstance: "<value>",
};
```

### `operations.OutputDatabricks`

```typescript
const value: operations.OutputDatabricks = {
  id: "<id>",
  type: "databricks",
  workspaceId: "<id>",
  scope: "<value>",
  clientId: "<id>",
  catalog: "<value>",
  schema: "<value>",
  eventsVolumeName: "<value>",
  clientTextSecret: "<value>",
};
```

### `operations.OutputMicrosoftFabric`

```typescript
const value: operations.OutputMicrosoftFabric = {
  id: "<id>",
  type: "microsoft_fabric",
  topic: "<value>",
  bootstrap_server: "<value>",
};
```

### `operations.OutputCloudflareR2`

```typescript
const value: operations.OutputCloudflareR2 = {
  id: "<id>",
  type: "cloudflare_r2",
  endpoint: "<value>",
  bucket: "<value>",
  stagePath: "<value>",
};
```

