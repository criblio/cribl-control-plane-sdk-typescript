# CreateOutputRequest

Output object


## Supported Types

### `operations.CreateOutputOutputDefault`

```typescript
const value: operations.CreateOutputOutputDefault = {
  id: "<id>",
  type: "default",
  defaultId: "<id>",
};
```

### `operations.CreateOutputOutputWebhook`

```typescript
const value: operations.CreateOutputOutputWebhook = {
  id: "<id>",
  type: "webhook",
};
```

### `operations.CreateOutputOutputSentinel`

```typescript
const value: operations.CreateOutputOutputSentinel = {
  id: "<id>",
  type: "sentinel",
  loginUrl: "https://baggy-louse.name",
  secret: "<value>",
  client_id: "<id>",
  endpointURLConfiguration: "ID",
};
```

### `operations.CreateOutputOutputDevnull`

```typescript
const value: operations.CreateOutputOutputDevnull = {
  id: "<id>",
  type: "devnull",
};
```

### `operations.CreateOutputOutputSyslog`

```typescript
const value: operations.CreateOutputOutputSyslog = {
  id: "<id>",
  type: "syslog",
};
```

### `operations.CreateOutputOutputSplunk`

```typescript
const value: operations.CreateOutputOutputSplunk = {
  id: "<id>",
  type: "splunk",
  host: "impartial-airline.name",
  port: 6049.7,
};
```

### `operations.CreateOutputOutputSplunkLb`

```typescript
const value: operations.CreateOutputOutputSplunkLb = {
  id: "<id>",
  type: "splunk_lb",
  hosts: [],
};
```

### `operations.CreateOutputOutputSplunkHec`

```typescript
const value: operations.CreateOutputOutputSplunkHec = {
  id: "<id>",
  type: "splunk_hec",
};
```

### `operations.CreateOutputOutputWizHec`

```typescript
const value: operations.CreateOutputOutputWizHec = {
  id: "<id>",
  type: "wiz_hec",
  wiz_connector_id: "<id>",
  wiz_environment: "<value>",
  data_center: "<value>",
  wiz_sourcetype: "<value>",
};
```

### `operations.CreateOutputOutputTcpjson`

```typescript
const value: operations.CreateOutputOutputTcpjson = {
  id: "<id>",
  type: "tcpjson",
};
```

### `operations.CreateOutputOutputWavefront`

```typescript
const value: operations.CreateOutputOutputWavefront = {
  id: "<id>",
  type: "wavefront",
  domain: "wilted-tusk.info",
};
```

### `operations.CreateOutputOutputSignalfx`

```typescript
const value: operations.CreateOutputOutputSignalfx = {
  id: "<id>",
  type: "signalfx",
  realm: "<value>",
};
```

### `operations.CreateOutputOutputFilesystem`

```typescript
const value: operations.CreateOutputOutputFilesystem = {
  id: "<id>",
  type: "filesystem",
  destPath: "<value>",
};
```

### `operations.CreateOutputOutputS3`

```typescript
const value: operations.CreateOutputOutputS3 = {
  id: "<id>",
  type: "s3",
  bucket: "<value>",
  stagePath: "<value>",
};
```

### `operations.CreateOutputOutputAzureBlob`

```typescript
const value: operations.CreateOutputOutputAzureBlob = {
  id: "<id>",
  type: "azure_blob",
  containerName: "<value>",
  stagePath: "<value>",
};
```

### `operations.CreateOutputOutputAzureDataExplorer`

```typescript
const value: operations.CreateOutputOutputAzureDataExplorer = {
  id: "<id>",
  type: "azure_data_explorer",
  clusterUrl: "https://sinful-grandson.info",
  database: "<value>",
  table: "<value>",
  oauthEndpoint: "https://login.microsoftonline.com",
  tenantId: "<id>",
  clientId: "<id>",
  scope: "<value>",
  oauthType: "clientSecret",
  compress: "none",
};
```

### `operations.CreateOutputOutputAzureLogs`

```typescript
const value: operations.CreateOutputOutputAzureLogs = {
  id: "<id>",
  type: "azure_logs",
  logType: "<value>",
};
```

### `operations.CreateOutputOutputKinesis`

```typescript
const value: operations.CreateOutputOutputKinesis = {
  id: "<id>",
  type: "kinesis",
  streamName: "<value>",
  region: "<value>",
};
```

### `operations.CreateOutputOutputHoneycomb`

```typescript
const value: operations.CreateOutputOutputHoneycomb = {
  id: "<id>",
  type: "honeycomb",
  dataset: "<value>",
};
```

### `operations.CreateOutputOutputAzureEventhub`

```typescript
const value: operations.CreateOutputOutputAzureEventhub = {
  id: "<id>",
  type: "azure_eventhub",
  brokers: [],
  topic: "<value>",
};
```

### `operations.CreateOutputOutputGoogleChronicle`

```typescript
const value: operations.CreateOutputOutputGoogleChronicle = {
  id: "<id>",
  type: "google_chronicle",
  logFormatType: "udm",
};
```

### `operations.CreateOutputOutputGoogleCloudStorage`

```typescript
const value: operations.CreateOutputOutputGoogleCloudStorage = {
  id: "<id>",
  type: "google_cloud_storage",
  bucket: "<value>",
  region: "<value>",
  endpoint: "<value>",
  stagePath: "<value>",
};
```

### `operations.CreateOutputOutputGoogleCloudLogging`

```typescript
const value: operations.CreateOutputOutputGoogleCloudLogging = {
  id: "<id>",
  type: "google_cloud_logging",
  logLocationType: "folder",
  logNameExpression: "<value>",
  logLocationExpression: "<value>",
};
```

### `operations.CreateOutputOutputGooglePubsub`

```typescript
const value: operations.CreateOutputOutputGooglePubsub = {
  id: "<id>",
  type: "google_pubsub",
  topicName: "<value>",
};
```

### `operations.CreateOutputOutputExabeam`

```typescript
const value: operations.CreateOutputOutputExabeam = {
  id: "<id>",
  type: "exabeam",
  bucket: "<value>",
  region: "<value>",
  stagePath: "<value>",
  endpoint: "<value>",
  collectorInstanceId: "<id>",
};
```

### `operations.CreateOutputOutputKafka`

```typescript
const value: operations.CreateOutputOutputKafka = {
  id: "<id>",
  type: "kafka",
  brokers: [],
  topic: "<value>",
};
```

### `operations.CreateOutputOutputConfluentCloud`

```typescript
const value: operations.CreateOutputOutputConfluentCloud = {
  id: "<id>",
  type: "confluent_cloud",
  brokers: [
    "<value 1>",
  ],
  topic: "<value>",
};
```

### `operations.CreateOutputOutputMsk`

```typescript
const value: operations.CreateOutputOutputMsk = {
  id: "<id>",
  type: "msk",
  brokers: [],
  topic: "<value>",
  awsAuthenticationMethod: "<value>",
  region: "<value>",
};
```

### `operations.CreateOutputOutputElastic`

```typescript
const value: operations.CreateOutputOutputElastic = {
  id: "<id>",
  type: "elastic",
  index: "<value>",
};
```

### `operations.CreateOutputOutputElasticCloud`

```typescript
const value: operations.CreateOutputOutputElasticCloud = {
  id: "<id>",
  type: "elastic_cloud",
  url: "https://impractical-courtroom.net/",
  index: "<value>",
};
```

### `operations.CreateOutputOutputNewrelic`

```typescript
const value: operations.CreateOutputOutputNewrelic = {
  id: "<id>",
  type: "newrelic",
};
```

### `operations.CreateOutputOutputNewrelicEvents`

```typescript
const value: operations.CreateOutputOutputNewrelicEvents = {
  id: "<id>",
  type: "newrelic_events",
  accountId: "<id>",
  eventType: "<value>",
};
```

### `operations.CreateOutputOutputInfluxdb`

```typescript
const value: operations.CreateOutputOutputInfluxdb = {
  id: "<id>",
  type: "influxdb",
  url: "https://inborn-fuel.com/",
};
```

### `operations.CreateOutputOutputCloudwatch`

```typescript
const value: operations.CreateOutputOutputCloudwatch = {
  id: "<id>",
  type: "cloudwatch",
  logGroupName: "<value>",
  logStreamName: "<value>",
  region: "<value>",
};
```

### `operations.CreateOutputOutputMinio`

```typescript
const value: operations.CreateOutputOutputMinio = {
  id: "<id>",
  type: "minio",
  endpoint: "<value>",
  bucket: "<value>",
  stagePath: "<value>",
};
```

### `operations.CreateOutputOutputStatsd`

```typescript
const value: operations.CreateOutputOutputStatsd = {
  id: "<id>",
  type: "statsd",
  protocol: "udp",
  host: "scornful-heartache.biz",
  port: 2050.73,
};
```

### `operations.CreateOutputOutputStatsdExt`

```typescript
const value: operations.CreateOutputOutputStatsdExt = {
  id: "<id>",
  type: "statsd_ext",
  protocol: "udp",
  host: "pessimistic-charlatan.org",
  port: 4732.2,
};
```

### `operations.CreateOutputOutputGraphite`

```typescript
const value: operations.CreateOutputOutputGraphite = {
  id: "<id>",
  type: "graphite",
  protocol: "tcp",
  host: "fantastic-quinoa.name",
  port: 2135.91,
};
```

### `operations.CreateOutputOutputRouter`

```typescript
const value: operations.CreateOutputOutputRouter = {
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

### `operations.CreateOutputOutputSns`

```typescript
const value: operations.CreateOutputOutputSns = {
  id: "<id>",
  type: "sns",
  topicArn: "<value>",
  messageGroupId: "<id>",
};
```

### `operations.CreateOutputOutputSqs`

```typescript
const value: operations.CreateOutputOutputSqs = {
  id: "<id>",
  type: "sqs",
  queueName: "<value>",
  queueType: "fifo",
};
```

### `operations.CreateOutputOutputSnmp`

```typescript
const value: operations.CreateOutputOutputSnmp = {
  id: "<id>",
  type: "snmp",
  hosts: [],
};
```

### `operations.CreateOutputOutputSumoLogic`

```typescript
const value: operations.CreateOutputOutputSumoLogic = {
  id: "<id>",
  type: "sumo_logic",
  url: "https://querulous-vol.name",
};
```

### `operations.CreateOutputOutputDatadog`

```typescript
const value: operations.CreateOutputOutputDatadog = {
  id: "<id>",
  type: "datadog",
};
```

### `operations.CreateOutputOutputGrafanaCloudUnion`

```typescript
const value: operations.CreateOutputOutputGrafanaCloudUnion = {
  id: "<id>",
  type: "grafana_cloud",
  prometheusUrl: "https://silver-granny.biz/",
};
```

### `operations.CreateOutputOutputLoki`

```typescript
const value: operations.CreateOutputOutputLoki = {
  id: "<id>",
  type: "loki",
  url: "https://outstanding-feather.net/",
};
```

### `operations.CreateOutputOutputPrometheus`

```typescript
const value: operations.CreateOutputOutputPrometheus = {
  id: "<id>",
  type: "prometheus",
  url: "https://silent-ravioli.org",
};
```

### `operations.CreateOutputOutputRing`

```typescript
const value: operations.CreateOutputOutputRing = {
  id: "<id>",
  type: "ring",
};
```

### `operations.CreateOutputOutputOpenTelemetry`

```typescript
const value: operations.CreateOutputOutputOpenTelemetry = {
  id: "<id>",
  type: "open_telemetry",
  endpoint: "<value>",
};
```

### `operations.CreateOutputOutputServiceNow`

```typescript
const value: operations.CreateOutputOutputServiceNow = {
  id: "<id>",
  type: "service_now",
  endpoint: "<value>",
  tokenSecret: "<value>",
  otlpVersion: "1.3.1",
  protocol: "grpc",
};
```

### `operations.CreateOutputOutputDataset`

```typescript
const value: operations.CreateOutputOutputDataset = {
  id: "<id>",
  type: "dataset",
};
```

### `operations.CreateOutputOutputCriblTcp`

```typescript
const value: operations.CreateOutputOutputCriblTcp = {
  id: "<id>",
  type: "cribl_tcp",
};
```

### `operations.CreateOutputOutputCriblHttp`

```typescript
const value: operations.CreateOutputOutputCriblHttp = {
  id: "<id>",
  type: "cribl_http",
};
```

### `operations.CreateOutputOutputCriblSearchEngine`

```typescript
const value: operations.CreateOutputOutputCriblSearchEngine = {
  id: "<id>",
  type: "cribl_search_engine",
};
```

### `operations.CreateOutputOutputHumioHec`

```typescript
const value: operations.CreateOutputOutputHumioHec = {
  id: "<id>",
  type: "humio_hec",
  url: "https://standard-tenant.net/",
  format: "raw",
};
```

### `operations.CreateOutputOutputCrowdstrikeNextGenSiem`

```typescript
const value: operations.CreateOutputOutputCrowdstrikeNextGenSiem = {
  id: "<id>",
  type: "crowdstrike_next_gen_siem",
  url: "https://windy-catalyst.info/",
  format: "raw",
};
```

### `operations.CreateOutputOutputDlS3`

```typescript
const value: operations.CreateOutputOutputDlS3 = {
  id: "<id>",
  type: "dl_s3",
  bucket: "<value>",
  stagePath: "<value>",
};
```

### `operations.CreateOutputOutputSecurityLake`

```typescript
const value: operations.CreateOutputOutputSecurityLake = {
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

### `operations.CreateOutputOutputCriblLake`

```typescript
const value: operations.CreateOutputOutputCriblLake = {
  id: "<id>",
  type: "cribl_lake",
};
```

### `operations.CreateOutputOutputDiskSpool`

```typescript
const value: operations.CreateOutputOutputDiskSpool = {
  id: "<id>",
  type: "disk_spool",
};
```

### `operations.CreateOutputOutputClickHouse`

```typescript
const value: operations.CreateOutputOutputClickHouse = {
  id: "<id>",
  type: "click_house",
  url: "https://everlasting-hierarchy.net",
  database: "<value>",
  tableName: "<value>",
};
```

### `operations.CreateOutputOutputXsiam`

```typescript
const value: operations.CreateOutputOutputXsiam = {
  id: "<id>",
  type: "xsiam",
};
```

### `operations.CreateOutputOutputNetflow`

```typescript
const value: operations.CreateOutputOutputNetflow = {
  id: "<id>",
  type: "netflow",
  hosts: [
    {
      host: "creative-plumber.com",
      port: 9037.53,
    },
  ],
};
```

### `operations.CreateOutputOutputDynatraceHttp`

```typescript
const value: operations.CreateOutputOutputDynatraceHttp = {
  id: "<id>",
  type: "dynatrace_http",
  format: "json_array",
  endpoint: "cloud",
  telemetryType: "metrics",
};
```

### `operations.CreateOutputOutputDynatraceOtlp`

```typescript
const value: operations.CreateOutputOutputDynatraceOtlp = {
  id: "<id>",
  type: "dynatrace_otlp",
  protocol: "http",
  endpoint: "<value>",
  otlpVersion: "1.3.1",
  endpointType: "ag",
  tokenSecret: "<value>",
};
```

### `operations.CreateOutputOutputSentinelOneAiSiem`

```typescript
const value: operations.CreateOutputOutputSentinelOneAiSiem = {
  id: "<id>",
  type: "sentinel_one_ai_siem",
  region: "CA",
  endpoint: "/services/collector/event",
};
```

### `operations.CreateOutputOutputChronicle`

```typescript
const value: operations.CreateOutputOutputChronicle = {
  id: "<id>",
  type: "chronicle",
  region: "<value>",
  logType: "<value>",
  gcpProjectId: "<id>",
  gcpInstance: "<value>",
};
```

### `operations.CreateOutputOutputDatabricks`

```typescript
const value: operations.CreateOutputOutputDatabricks = {
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

### `operations.CreateOutputOutputMicrosoftFabric`

```typescript
const value: operations.CreateOutputOutputMicrosoftFabric = {
  id: "<id>",
  type: "microsoft_fabric",
  topic: "<value>",
  bootstrap_server: "<value>",
};
```

### `operations.CreateOutputOutputCloudflareR2`

```typescript
const value: operations.CreateOutputOutputCloudflareR2 = {
  id: "<id>",
  type: "cloudflare_r2",
  endpoint: "<value>",
  bucket: "<value>",
  stagePath: "<value>",
};
```

