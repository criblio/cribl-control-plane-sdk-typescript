# CreateOutputSystemByPackRequestBody

Output object


## Supported Types

### `operations.CreateOutputSystemByPackOutputDefault`

```typescript
const value: operations.CreateOutputSystemByPackOutputDefault = {
  id: "<id>",
  type: "default",
  defaultId: null,
};
```

### `operations.CreateOutputSystemByPackOutputWebhook`

```typescript
const value: operations.CreateOutputSystemByPackOutputWebhook = {
  id: "<id>",
  type: "webhook",
};
```

### `operations.CreateOutputSystemByPackOutputSentinel`

```typescript
const value: operations.CreateOutputSystemByPackOutputSentinel = {
  id: "<id>",
  type: "sentinel",
  loginUrl: "https://questionable-elevation.name",
  secret: "<value>",
  client_id: "<id>",
  endpointURLConfiguration: "url",
};
```

### `operations.CreateOutputSystemByPackOutputDevnull`

```typescript
const value: operations.CreateOutputSystemByPackOutputDevnull = {
  id: "<id>",
  type: "devnull",
};
```

### `operations.CreateOutputSystemByPackOutputSyslog`

```typescript
const value: operations.CreateOutputSystemByPackOutputSyslog = {
  id: "<id>",
  type: "syslog",
};
```

### `operations.CreateOutputSystemByPackOutputSplunk`

```typescript
const value: operations.CreateOutputSystemByPackOutputSplunk = {
  id: "<id>",
  type: "splunk",
  host: "woeful-sailor.org",
  port: 9881.38,
};
```

### `operations.CreateOutputSystemByPackOutputSplunkLb`

```typescript
const value: operations.CreateOutputSystemByPackOutputSplunkLb = {
  id: "<id>",
  type: "splunk_lb",
  hosts: [],
};
```

### `operations.CreateOutputSystemByPackOutputSplunkHec`

```typescript
const value: operations.CreateOutputSystemByPackOutputSplunkHec = {
  id: "<id>",
  type: "splunk_hec",
};
```

### `operations.CreateOutputSystemByPackOutputWizHec`

```typescript
const value: operations.CreateOutputSystemByPackOutputWizHec = {
  id: "<id>",
  type: "wiz_hec",
  wiz_connector_id: "<id>",
  wiz_environment: "<value>",
  data_center: "<value>",
  wiz_sourcetype: "<value>",
};
```

### `operations.CreateOutputSystemByPackOutputTcpjson`

```typescript
const value: operations.CreateOutputSystemByPackOutputTcpjson = {
  id: "<id>",
  type: "tcpjson",
};
```

### `operations.CreateOutputSystemByPackOutputWavefront`

```typescript
const value: operations.CreateOutputSystemByPackOutputWavefront = {
  id: "<id>",
  type: "wavefront",
  domain: "oily-fellow.com",
};
```

### `operations.CreateOutputSystemByPackOutputSignalfx`

```typescript
const value: operations.CreateOutputSystemByPackOutputSignalfx = {
  id: "<id>",
  type: "signalfx",
  realm: "<value>",
};
```

### `operations.CreateOutputSystemByPackOutputFilesystem`

```typescript
const value: operations.CreateOutputSystemByPackOutputFilesystem = {
  id: "<id>",
  type: "filesystem",
  destPath: "<value>",
};
```

### `operations.CreateOutputSystemByPackOutputS3`

```typescript
const value: operations.CreateOutputSystemByPackOutputS3 = {
  id: "<id>",
  type: "s3",
  bucket: "<value>",
  stagePath: "<value>",
};
```

### `operations.CreateOutputSystemByPackOutputAzureBlob`

```typescript
const value: operations.CreateOutputSystemByPackOutputAzureBlob = {
  id: "<id>",
  type: "azure_blob",
  containerName: "<value>",
  stagePath: "<value>",
};
```

### `operations.CreateOutputSystemByPackOutputAzureDataExplorer`

```typescript
const value: operations.CreateOutputSystemByPackOutputAzureDataExplorer = {
  id: "<id>",
  type: "azure_data_explorer",
  clusterUrl: "https://charming-duster.net",
  database: "<value>",
  table: "<value>",
  oauthEndpoint: "https://login.partner.microsoftonline.cn",
  tenantId: "<id>",
  clientId: "<id>",
  scope: "<value>",
  oauthType: "clientSecret",
  compress: "none",
};
```

### `operations.CreateOutputSystemByPackOutputAzureLogs`

```typescript
const value: operations.CreateOutputSystemByPackOutputAzureLogs = {
  id: "<id>",
  type: "azure_logs",
  logType: "<value>",
};
```

### `operations.CreateOutputSystemByPackOutputKinesis`

```typescript
const value: operations.CreateOutputSystemByPackOutputKinesis = {
  id: "<id>",
  type: "kinesis",
  streamName: "<value>",
  region: "<value>",
};
```

### `operations.CreateOutputSystemByPackOutputHoneycomb`

```typescript
const value: operations.CreateOutputSystemByPackOutputHoneycomb = {
  id: "<id>",
  type: "honeycomb",
  dataset: "<value>",
};
```

### `operations.CreateOutputSystemByPackOutputAzureEventhub`

```typescript
const value: operations.CreateOutputSystemByPackOutputAzureEventhub = {
  id: "<id>",
  type: "azure_eventhub",
  brokers: [],
  topic: "<value>",
};
```

### `operations.CreateOutputSystemByPackOutputGoogleChronicle`

```typescript
const value: operations.CreateOutputSystemByPackOutputGoogleChronicle = {
  id: "<id>",
  type: "google_chronicle",
  logFormatType: "udm",
};
```

### `operations.CreateOutputSystemByPackOutputGoogleCloudStorage`

```typescript
const value: operations.CreateOutputSystemByPackOutputGoogleCloudStorage = {
  id: "<id>",
  type: "google_cloud_storage",
  bucket: "<value>",
  region: "<value>",
  endpoint: "<value>",
  stagePath: "<value>",
};
```

### `operations.CreateOutputSystemByPackOutputGoogleCloudLogging`

```typescript
const value: operations.CreateOutputSystemByPackOutputGoogleCloudLogging = {
  id: "<id>",
  type: "google_cloud_logging",
  logLocationType: "billingAccount",
  logNameExpression: "<value>",
  logLocationExpression: "<value>",
};
```

### `operations.CreateOutputSystemByPackOutputGooglePubsub`

```typescript
const value: operations.CreateOutputSystemByPackOutputGooglePubsub = {
  id: "<id>",
  type: "google_pubsub",
  topicName: "<value>",
};
```

### `operations.CreateOutputSystemByPackOutputExabeam`

```typescript
const value: operations.CreateOutputSystemByPackOutputExabeam = {
  id: "<id>",
  type: "exabeam",
  bucket: "<value>",
  region: "<value>",
  stagePath: "<value>",
  endpoint: "<value>",
  collectorInstanceId: "<id>",
};
```

### `operations.CreateOutputSystemByPackOutputKafka`

```typescript
const value: operations.CreateOutputSystemByPackOutputKafka = {
  id: "<id>",
  type: "kafka",
  brokers: [],
  topic: "<value>",
};
```

### `operations.CreateOutputSystemByPackOutputConfluentCloud`

```typescript
const value: operations.CreateOutputSystemByPackOutputConfluentCloud = {
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

### `operations.CreateOutputSystemByPackOutputMsk`

```typescript
const value: operations.CreateOutputSystemByPackOutputMsk = {
  id: "<id>",
  type: "msk",
  brokers: [
    "<value 1>",
    "<value 2>",
  ],
  topic: "<value>",
  awsAuthenticationMethod: "<value>",
  region: "<value>",
};
```

### `operations.CreateOutputSystemByPackOutputElastic`

```typescript
const value: operations.CreateOutputSystemByPackOutputElastic = {
  id: "<id>",
  type: "elastic",
  index: "<value>",
};
```

### `operations.CreateOutputSystemByPackOutputElasticCloud`

```typescript
const value: operations.CreateOutputSystemByPackOutputElasticCloud = {
  id: "<id>",
  type: "elastic_cloud",
  url: "https://little-fraudster.info/",
  index: "<value>",
};
```

### `operations.CreateOutputSystemByPackOutputNewrelic`

```typescript
const value: operations.CreateOutputSystemByPackOutputNewrelic = {
  id: "<id>",
  type: "newrelic",
};
```

### `operations.CreateOutputSystemByPackOutputNewrelicEvents`

```typescript
const value: operations.CreateOutputSystemByPackOutputNewrelicEvents = {
  id: "<id>",
  type: "newrelic_events",
  accountId: "<id>",
  eventType: "<value>",
};
```

### `operations.CreateOutputSystemByPackOutputInfluxdb`

```typescript
const value: operations.CreateOutputSystemByPackOutputInfluxdb = {
  id: "<id>",
  type: "influxdb",
  url: "https://victorious-cutlet.name",
};
```

### `operations.CreateOutputSystemByPackOutputCloudwatch`

```typescript
const value: operations.CreateOutputSystemByPackOutputCloudwatch = {
  id: "<id>",
  type: "cloudwatch",
  logGroupName: "<value>",
  logStreamName: "<value>",
  region: "<value>",
};
```

### `operations.CreateOutputSystemByPackOutputMinio`

```typescript
const value: operations.CreateOutputSystemByPackOutputMinio = {
  id: "<id>",
  type: "minio",
  endpoint: "<value>",
  bucket: "<value>",
  stagePath: "<value>",
};
```

### `operations.CreateOutputSystemByPackOutputStatsd`

```typescript
const value: operations.CreateOutputSystemByPackOutputStatsd = {
  id: "<id>",
  type: "statsd",
  protocol: "udp",
  host: "frizzy-convection.info",
  port: 4212.25,
};
```

### `operations.CreateOutputSystemByPackOutputStatsdExt`

```typescript
const value: operations.CreateOutputSystemByPackOutputStatsdExt = {
  id: "<id>",
  type: "statsd_ext",
  protocol: "udp",
  host: "whispered-napkin.org",
  port: 4692.32,
};
```

### `operations.CreateOutputSystemByPackOutputGraphite`

```typescript
const value: operations.CreateOutputSystemByPackOutputGraphite = {
  id: "<id>",
  type: "graphite",
  protocol: "tcp",
  host: "prime-dime.com",
  port: 7976.34,
};
```

### `operations.CreateOutputSystemByPackOutputRouter`

```typescript
const value: operations.CreateOutputSystemByPackOutputRouter = {
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

### `operations.CreateOutputSystemByPackOutputSns`

```typescript
const value: operations.CreateOutputSystemByPackOutputSns = {
  id: "<id>",
  type: "sns",
  topicArn: "<value>",
  messageGroupId: "<id>",
};
```

### `operations.CreateOutputSystemByPackOutputSqs`

```typescript
const value: operations.CreateOutputSystemByPackOutputSqs = {
  id: "<id>",
  type: "sqs",
  queueName: "<value>",
  queueType: "fifo",
};
```

### `operations.CreateOutputSystemByPackOutputSnmp`

```typescript
const value: operations.CreateOutputSystemByPackOutputSnmp = {
  id: "<id>",
  type: "snmp",
  hosts: [],
};
```

### `operations.CreateOutputSystemByPackOutputSumoLogic`

```typescript
const value: operations.CreateOutputSystemByPackOutputSumoLogic = {
  id: "<id>",
  type: "sumo_logic",
  url: "https://tiny-retention.net",
};
```

### `operations.CreateOutputSystemByPackOutputDatadog`

```typescript
const value: operations.CreateOutputSystemByPackOutputDatadog = {
  id: "<id>",
  type: "datadog",
};
```

### `operations.CreateOutputSystemByPackOutputGrafanaCloudUnion`

```typescript
const value: operations.CreateOutputSystemByPackOutputGrafanaCloudUnion = {
  id: "<id>",
  type: "grafana_cloud",
  lokiUrl: "https://other-roadway.org/",
};
```

### `operations.CreateOutputSystemByPackOutputLoki`

```typescript
const value: operations.CreateOutputSystemByPackOutputLoki = {
  id: "<id>",
  type: "loki",
  url: "https://awful-coil.org/",
};
```

### `operations.CreateOutputSystemByPackOutputPrometheus`

```typescript
const value: operations.CreateOutputSystemByPackOutputPrometheus = {
  id: "<id>",
  type: "prometheus",
  url: "https://unused-morbidity.info",
};
```

### `operations.CreateOutputSystemByPackOutputRing`

```typescript
const value: operations.CreateOutputSystemByPackOutputRing = {
  id: "<id>",
  type: "ring",
};
```

### `operations.CreateOutputSystemByPackOutputOpenTelemetry`

```typescript
const value: operations.CreateOutputSystemByPackOutputOpenTelemetry = {
  id: "<id>",
  type: "open_telemetry",
  endpoint: "<value>",
};
```

### `operations.CreateOutputSystemByPackOutputServiceNow`

```typescript
const value: operations.CreateOutputSystemByPackOutputServiceNow = {
  id: "<id>",
  type: "service_now",
  endpoint: "<value>",
  tokenSecret: "<value>",
  otlpVersion: "1.3.1",
  protocol: "grpc",
};
```

### `operations.CreateOutputSystemByPackOutputDataset`

```typescript
const value: operations.CreateOutputSystemByPackOutputDataset = {
  id: "<id>",
  type: "dataset",
};
```

### `operations.CreateOutputSystemByPackOutputCriblTcp`

```typescript
const value: operations.CreateOutputSystemByPackOutputCriblTcp = {
  id: "<id>",
  type: "cribl_tcp",
};
```

### `operations.CreateOutputSystemByPackOutputCriblHttp`

```typescript
const value: operations.CreateOutputSystemByPackOutputCriblHttp = {
  id: "<id>",
  type: "cribl_http",
};
```

### `operations.CreateOutputSystemByPackOutputCriblSearchEngine`

```typescript
const value: operations.CreateOutputSystemByPackOutputCriblSearchEngine = {
  id: "<id>",
  type: "cribl_search_engine",
};
```

### `operations.CreateOutputSystemByPackOutputHumioHec`

```typescript
const value: operations.CreateOutputSystemByPackOutputHumioHec = {
  id: "<id>",
  type: "humio_hec",
  url: "https://realistic-someplace.info/",
  format: "raw",
};
```

### `operations.CreateOutputSystemByPackOutputCrowdstrikeNextGenSiem`

```typescript
const value: operations.CreateOutputSystemByPackOutputCrowdstrikeNextGenSiem = {
  id: "<id>",
  type: "crowdstrike_next_gen_siem",
  url: "https://cautious-rust.name/",
  format: "raw",
};
```

### `operations.CreateOutputSystemByPackOutputDlS3`

```typescript
const value: operations.CreateOutputSystemByPackOutputDlS3 = {
  id: "<id>",
  type: "dl_s3",
  bucket: "<value>",
  stagePath: "<value>",
};
```

### `operations.CreateOutputSystemByPackOutputSecurityLake`

```typescript
const value: operations.CreateOutputSystemByPackOutputSecurityLake = {
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

### `operations.CreateOutputSystemByPackOutputCriblLake`

```typescript
const value: operations.CreateOutputSystemByPackOutputCriblLake = {
  id: "<id>",
  type: "cribl_lake",
};
```

### `operations.CreateOutputSystemByPackOutputDiskSpool`

```typescript
const value: operations.CreateOutputSystemByPackOutputDiskSpool = {
  id: "<id>",
  type: "disk_spool",
};
```

### `operations.CreateOutputSystemByPackOutputClickHouse`

```typescript
const value: operations.CreateOutputSystemByPackOutputClickHouse = {
  id: "<id>",
  type: "click_house",
  url: "https://grave-skeleton.com/",
  database: "<value>",
  tableName: "<value>",
};
```

### `operations.CreateOutputSystemByPackOutputXsiam`

```typescript
const value: operations.CreateOutputSystemByPackOutputXsiam = {
  id: "<id>",
  type: "xsiam",
};
```

### `operations.CreateOutputSystemByPackOutputNetflow`

```typescript
const value: operations.CreateOutputSystemByPackOutputNetflow = {
  id: "<id>",
  type: "netflow",
  hosts: [
    {
      host: "husky-contractor.name",
      port: 9041.9,
    },
  ],
};
```

### `operations.CreateOutputSystemByPackOutputDynatraceHttp`

```typescript
const value: operations.CreateOutputSystemByPackOutputDynatraceHttp = {
  id: "<id>",
  type: "dynatrace_http",
  format: "plaintext",
  endpoint: "manual",
  telemetryType: "metrics",
};
```

### `operations.CreateOutputSystemByPackOutputDynatraceOtlp`

```typescript
const value: operations.CreateOutputSystemByPackOutputDynatraceOtlp = {
  id: "<id>",
  type: "dynatrace_otlp",
  protocol: "http",
  endpoint: "<value>",
  otlpVersion: "1.3.1",
  endpointType: "ag",
  tokenSecret: "<value>",
};
```

### `operations.CreateOutputSystemByPackOutputSentinelOneAiSiem`

```typescript
const value: operations.CreateOutputSystemByPackOutputSentinelOneAiSiem = {
  id: "<id>",
  type: "sentinel_one_ai_siem",
  region: "US",
  endpoint: "/services/collector/raw",
};
```

### `operations.CreateOutputSystemByPackOutputChronicle`

```typescript
const value: operations.CreateOutputSystemByPackOutputChronicle = {
  id: "<id>",
  type: "chronicle",
  region: "<value>",
  logType: "<value>",
  gcpProjectId: "<id>",
  gcpInstance: "<value>",
};
```

### `operations.CreateOutputSystemByPackOutputDatabricks`

```typescript
const value: operations.CreateOutputSystemByPackOutputDatabricks = {
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

### `operations.CreateOutputSystemByPackOutputMicrosoftFabric`

```typescript
const value: operations.CreateOutputSystemByPackOutputMicrosoftFabric = {
  id: "<id>",
  type: "microsoft_fabric",
  topic: "<value>",
  bootstrap_server: "<value>",
};
```

### `operations.CreateOutputSystemByPackOutputCloudflareR2`

```typescript
const value: operations.CreateOutputSystemByPackOutputCloudflareR2 = {
  id: "<id>",
  type: "cloudflare_r2",
  endpoint: "<value>",
  bucket: "<value>",
  stagePath: "<value>",
};
```

