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
  type: "webhook",
};
```

### `models.OutputSentinel`

```typescript
const value: models.OutputSentinel = {
  type: "sentinel",
  loginUrl: "https://extra-large-obesity.name",
  secret: "<value>",
  client_id: "<id>",
  endpointURLConfiguration: "ID",
};
```

### `models.OutputDevnull`

```typescript
const value: models.OutputDevnull = {
  type: "devnull",
};
```

### `models.OutputSyslog`

```typescript
const value: models.OutputSyslog = {
  type: "syslog",
};
```

### `models.OutputSplunk`

```typescript
const value: models.OutputSplunk = {
  type: "splunk",
  host: "blushing-plastic.biz",
  port: 2123.37,
};
```

### `models.OutputSplunkLb`

```typescript
const value: models.OutputSplunkLb = {
  type: "splunk_lb",
  hosts: [
    {
      host: "apprehensive-cleaner.info",
      port: 7777.88,
    },
  ],
};
```

### `models.OutputSplunkHec`

```typescript
const value: models.OutputSplunkHec = {
  type: "splunk_hec",
};
```

### `models.OutputWizHec`

```typescript
const value: models.OutputWizHec = {
  type: "wiz_hec",
  wiz_connector_id: "<id>",
  wiz_environment: "<value>",
  data_center: "<value>",
  wiz_sourcetype: "<value>",
};
```

### `models.OutputTcpjson`

```typescript
const value: models.OutputTcpjson = {
  type: "tcpjson",
};
```

### `models.OutputWavefront`

```typescript
const value: models.OutputWavefront = {
  type: "wavefront",
  domain: "polite-scratch.info",
};
```

### `models.OutputSignalfx`

```typescript
const value: models.OutputSignalfx = {
  type: "signalfx",
  realm: "<value>",
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
  type: "s3",
  bucket: "<value>",
  stagePath: "<value>",
};
```

### `models.OutputAzureBlob`

```typescript
const value: models.OutputAzureBlob = {
  type: "azure_blob",
  containerName: "<value>",
  stagePath: "<value>",
};
```

### `models.OutputAzureDataExplorer`

```typescript
const value: models.OutputAzureDataExplorer = {
  type: "azure_data_explorer",
  clusterUrl: "https://ample-making.net/",
  database: "<value>",
  table: "<value>",
  oauthEndpoint: "https://login.microsoftonline.com",
  tenantId: "<id>",
  clientId: "<id>",
  scope: "<value>",
  oauthType: "clientSecret",
  compress: "gzip",
};
```

### `models.OutputAzureLogs`

```typescript
const value: models.OutputAzureLogs = {
  type: "azure_logs",
  logType: "<value>",
};
```

### `models.OutputKinesis`

```typescript
const value: models.OutputKinesis = {
  type: "kinesis",
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
  type: "azure_eventhub",
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
  logFormatType: "unstructured",
};
```

### `models.OutputGoogleCloudStorage`

```typescript
const value: models.OutputGoogleCloudStorage = {
  type: "google_cloud_storage",
  bucket: "<value>",
  region: "<value>",
  endpoint: "<value>",
  stagePath: "<value>",
};
```

### `models.OutputGoogleCloudLogging`

```typescript
const value: models.OutputGoogleCloudLogging = {
  type: "google_cloud_logging",
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
  type: "exabeam",
  bucket: "<value>",
  region: "<value>",
  stagePath: "<value>",
  endpoint: "<value>",
  collectorInstanceId: "<id>",
};
```

### `models.OutputKafka`

```typescript
const value: models.OutputKafka = {
  type: "kafka",
  brokers: [
    "<value 1>",
  ],
  topic: "<value>",
};
```

### `models.OutputConfluentCloud`

```typescript
const value: models.OutputConfluentCloud = {
  type: "confluent_cloud",
  brokers: [],
  topic: "<value>",
};
```

### `models.OutputMsk`

```typescript
const value: models.OutputMsk = {
  type: "msk",
  brokers: [],
  topic: "<value>",
  awsAuthenticationMethod: "<value>",
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
  type: "elastic_cloud",
  url: "https://common-case.info",
  index: "<value>",
};
```

### `models.OutputNewrelic`

```typescript
const value: models.OutputNewrelic = {
  type: "newrelic",
};
```

### `models.OutputNewrelicEvents`

```typescript
const value: models.OutputNewrelicEvents = {
  type: "newrelic_events",
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
  type: "cloudwatch",
  logGroupName: "<value>",
  logStreamName: "<value>",
  region: "<value>",
};
```

### `models.OutputMinio`

```typescript
const value: models.OutputMinio = {
  type: "minio",
  endpoint: "<value>",
  bucket: "<value>",
  stagePath: "<value>",
};
```

### `models.OutputStatsd`

```typescript
const value: models.OutputStatsd = {
  type: "statsd",
  protocol: "udp",
  host: "boiling-stitcher.com",
  port: 7232.95,
};
```

### `models.OutputStatsdExt`

```typescript
const value: models.OutputStatsdExt = {
  type: "statsd_ext",
  protocol: "udp",
  host: "familiar-switch.info",
  port: 5203.95,
};
```

### `models.OutputGraphite`

```typescript
const value: models.OutputGraphite = {
  type: "graphite",
  protocol: "tcp",
  host: "tempting-drug.net",
  port: 3348.62,
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
  type: "sns",
  topicArn: "<value>",
  messageGroupId: "<id>",
};
```

### `models.OutputSqs`

```typescript
const value: models.OutputSqs = {
  type: "sqs",
  queueName: "<value>",
  queueType: "fifo",
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
  type: "datadog",
};
```

### `models.OutputGrafanaCloud`

```typescript
const value: models.OutputGrafanaCloud = {
  type: "grafana_cloud",
  prometheusUrl: "https://pitiful-cap.com/",
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
  type: "service_now",
  endpoint: "<value>",
  tokenSecret: "<value>",
  otlpVersion: "1.3.1",
  protocol: "http",
};
```

### `models.OutputDataset`

```typescript
const value: models.OutputDataset = {
  type: "dataset",
};
```

### `models.OutputCriblTcp`

```typescript
const value: models.OutputCriblTcp = {
  type: "cribl_tcp",
};
```

### `models.OutputCriblHttp`

```typescript
const value: models.OutputCriblHttp = {
  type: "cribl_http",
};
```

### `models.OutputCriblSearchEngine`

```typescript
const value: models.OutputCriblSearchEngine = {
  type: "cribl_search_engine",
};
```

### `models.OutputHumioHec`

```typescript
const value: models.OutputHumioHec = {
  type: "humio_hec",
  url: "https://happy-object.org/",
  format: "JSON",
};
```

### `models.OutputCrowdstrikeNextGenSiem`

```typescript
const value: models.OutputCrowdstrikeNextGenSiem = {
  type: "crowdstrike_next_gen_siem",
  url: "https://shabby-hornet.biz/",
  format: "raw",
};
```

### `models.OutputDlS3`

```typescript
const value: models.OutputDlS3 = {
  type: "dl_s3",
  bucket: "<value>",
  stagePath: "<value>",
};
```

### `models.OutputSecurityLake`

```typescript
const value: models.OutputSecurityLake = {
  type: "security_lake",
  bucket: "<value>",
  region: "<value>",
  assumeRoleArn: "<value>",
  stagePath: "<value>",
  accountId: "<id>",
  customSource: "<value>",
};
```

### `models.OutputCriblLake`

```typescript
const value: models.OutputCriblLake = {
  type: "cribl_lake",
};
```

### `models.OutputDiskSpool`

```typescript
const value: models.OutputDiskSpool = {
  type: "disk_spool",
};
```

### `models.OutputClickHouse`

```typescript
const value: models.OutputClickHouse = {
  type: "click_house",
  url: "https://lucky-ignorance.name/",
  database: "<value>",
  tableName: "<value>",
};
```

### `models.OutputXsiam`

```typescript
const value: models.OutputXsiam = {
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
      port: 1071.21,
    },
  ],
};
```

### `models.OutputDynatraceHttp`

```typescript
const value: models.OutputDynatraceHttp = {
  type: "dynatrace_http",
  format: "plaintext",
  endpoint: "manual",
  telemetryType: "metrics",
};
```

### `models.OutputDynatraceOtlp`

```typescript
const value: models.OutputDynatraceOtlp = {
  type: "dynatrace_otlp",
  protocol: "http",
  endpoint: "<value>",
  otlpVersion: "1.3.1",
  endpointType: "saas",
  tokenSecret: "<value>",
};
```

### `models.OutputSentinelOneAiSiem`

```typescript
const value: models.OutputSentinelOneAiSiem = {
  type: "sentinel_one_ai_siem",
  region: "AP",
  endpoint: "/services/collector/raw",
};
```

### `models.OutputChronicle`

```typescript
const value: models.OutputChronicle = {
  type: "chronicle",
  region: "<value>",
  logType: "<value>",
  gcpProjectId: "<id>",
  gcpInstance: "<value>",
};
```

### `models.OutputDatabricks`

```typescript
const value: models.OutputDatabricks = {
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

### `models.OutputMicrosoftFabric`

```typescript
const value: models.OutputMicrosoftFabric = {
  type: "microsoft_fabric",
  topic: "<value>",
  bootstrap_server: "<value>",
};
```

### `models.OutputCloudflareR2`

```typescript
const value: models.OutputCloudflareR2 = {
  type: "cloudflare_r2",
  endpoint: "<value>",
  bucket: "<value>",
  stagePath: "<value>",
};
```

