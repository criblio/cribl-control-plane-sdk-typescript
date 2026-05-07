# OutputResponse

Destination configuration with optional Notifications and runtime status.


## Supported Types

### `models.OutputResponseOutputDefault`

```typescript
const value: models.OutputResponseOutputDefault = {
  type: "default",
  defaultId: "<id>",
};
```

### `models.OutputResponseOutputWebhookUnion`

```typescript
const value: models.OutputResponseOutputWebhookUnion = {
  type: "webhook",
  url: "https://basic-middle.org",
};
```

### `models.OutputResponseOutputSentinel`

```typescript
const value: models.OutputResponseOutputSentinel = {
  type: "sentinel",
  loginUrl: "https://wordy-futon.org",
  secret: "<value>",
  client_id: "<id>",
  endpointURLConfiguration: "url",
};
```

### `models.OutputResponseOutputDevnull`

```typescript
const value: models.OutputResponseOutputDevnull = {
  type: "devnull",
};
```

### `models.OutputResponseOutputSyslog`

```typescript
const value: models.OutputResponseOutputSyslog = {
  type: "syslog",
};
```

### `models.OutputResponseOutputSplunk`

```typescript
const value: models.OutputResponseOutputSplunk = {
  type: "splunk",
  host: "hoarse-digit.name",
  port: 37.6,
};
```

### `models.OutputResponseOutputSplunkLb`

```typescript
const value: models.OutputResponseOutputSplunkLb = {
  type: "splunk_lb",
  hosts: [],
};
```

### `models.OutputResponseOutputSplunkHec`

```typescript
const value: models.OutputResponseOutputSplunkHec = {
  type: "splunk_hec",
};
```

### `models.OutputResponseOutputWizHec`

```typescript
const value: models.OutputResponseOutputWizHec = {
  type: "wiz_hec",
  wiz_connector_id: "<id>",
  wiz_environment: "<value>",
  data_center: "<value>",
  wiz_sourcetype: "<value>",
};
```

### `models.OutputResponseOutputTcpjson`

```typescript
const value: models.OutputResponseOutputTcpjson = {
  type: "tcpjson",
};
```

### `models.OutputResponseOutputWavefront`

```typescript
const value: models.OutputResponseOutputWavefront = {
  type: "wavefront",
  domain: "finished-season.biz",
};
```

### `models.OutputResponseOutputSignalfx`

```typescript
const value: models.OutputResponseOutputSignalfx = {
  type: "signalfx",
  realm: "<value>",
};
```

### `models.OutputResponseOutputFilesystem`

```typescript
const value: models.OutputResponseOutputFilesystem = {
  type: "filesystem",
  destPath: "<value>",
};
```

### `models.OutputResponseOutputS3`

```typescript
const value: models.OutputResponseOutputS3 = {
  type: "s3",
  bucket: "<value>",
  stagePath: "<value>",
};
```

### `models.OutputResponseOutputAzureBlob`

```typescript
const value: models.OutputResponseOutputAzureBlob = {
  type: "azure_blob",
  containerName: "<value>",
  stagePath: "<value>",
};
```

### `models.OutputResponseOutputAzureDataExplorer`

```typescript
const value: models.OutputResponseOutputAzureDataExplorer = {
  type: "azure_data_explorer",
  clusterUrl: "https://worthless-basket.net/",
  database: "<value>",
  table: "<value>",
  oauthEndpoint: "https://login.microsoftonline.us",
  tenantId: "<id>",
  clientId: "<id>",
  scope: "<value>",
  oauthType: "clientTextSecret",
  compress: "gzip",
};
```

### `models.OutputResponseOutputAzureLogs`

```typescript
const value: models.OutputResponseOutputAzureLogs = {
  type: "azure_logs",
  logType: "<value>",
};
```

### `models.OutputResponseOutputKinesis`

```typescript
const value: models.OutputResponseOutputKinesis = {
  type: "kinesis",
  streamName: "<value>",
  region: "<value>",
};
```

### `models.OutputResponseOutputHoneycomb`

```typescript
const value: models.OutputResponseOutputHoneycomb = {
  type: "honeycomb",
  dataset: "<value>",
};
```

### `models.OutputResponseOutputAzureEventhub`

```typescript
const value: models.OutputResponseOutputAzureEventhub = {
  type: "azure_eventhub",
  brokers: [
    "<value 1>",
    "<value 2>",
  ],
  topic: "<value>",
};
```

### `models.OutputResponseOutputGoogleChronicle`

```typescript
const value: models.OutputResponseOutputGoogleChronicle = {
  type: "google_chronicle",
  logFormatType: "unstructured",
};
```

### `models.OutputResponseOutputGoogleCloudStorage`

```typescript
const value: models.OutputResponseOutputGoogleCloudStorage = {
  type: "google_cloud_storage",
  bucket: "<value>",
  region: "<value>",
  endpoint: "<value>",
  stagePath: "<value>",
};
```

### `models.OutputResponseOutputGoogleCloudLogging`

```typescript
const value: models.OutputResponseOutputGoogleCloudLogging = {
  type: "google_cloud_logging",
  logLocationType: "organization",
  logNameExpression: "<value>",
  logLocationExpression: "<value>",
};
```

### `models.OutputResponseOutputGooglePubsub`

```typescript
const value: models.OutputResponseOutputGooglePubsub = {
  type: "google_pubsub",
  topicName: "<value>",
};
```

### `models.OutputResponseOutputExabeam`

```typescript
const value: models.OutputResponseOutputExabeam = {
  type: "exabeam",
  bucket: "<value>",
  region: "<value>",
  stagePath: "<value>",
  endpoint: "<value>",
  collectorInstanceId: "<id>",
};
```

### `models.OutputResponseOutputKafka`

```typescript
const value: models.OutputResponseOutputKafka = {
  type: "kafka",
  brokers: [
    "<value 1>",
    "<value 2>",
  ],
  topic: "<value>",
};
```

### `models.OutputResponseOutputConfluentCloud`

```typescript
const value: models.OutputResponseOutputConfluentCloud = {
  type: "confluent_cloud",
  brokers: [
    "<value 1>",
    "<value 2>",
  ],
  topic: "<value>",
};
```

### `models.OutputResponseOutputMsk`

```typescript
const value: models.OutputResponseOutputMsk = {
  type: "msk",
  brokers: [
    "<value 1>",
  ],
  topic: "<value>",
  awsAuthenticationMethod: "<value>",
  region: "<value>",
};
```

### `models.OutputResponseOutputElastic`

```typescript
const value: models.OutputResponseOutputElastic = {
  type: "elastic",
  index: "<value>",
};
```

### `models.OutputResponseOutputElasticCloud`

```typescript
const value: models.OutputResponseOutputElasticCloud = {
  type: "elastic_cloud",
  url: "https://lavish-cricket.org/",
  index: "<value>",
};
```

### `models.OutputResponseOutputNewrelic`

```typescript
const value: models.OutputResponseOutputNewrelic = {
  type: "newrelic",
};
```

### `models.OutputResponseOutputNewrelicEvents`

```typescript
const value: models.OutputResponseOutputNewrelicEvents = {
  type: "newrelic_events",
  accountId: "<id>",
  eventType: "<value>",
};
```

### `models.OutputResponseOutputInfluxdb`

```typescript
const value: models.OutputResponseOutputInfluxdb = {
  type: "influxdb",
  url: "https://helpful-lift.name/",
};
```

### `models.OutputResponseOutputCloudwatch`

```typescript
const value: models.OutputResponseOutputCloudwatch = {
  type: "cloudwatch",
  logGroupName: "<value>",
  logStreamName: "<value>",
  region: "<value>",
};
```

### `models.OutputResponseOutputMinio`

```typescript
const value: models.OutputResponseOutputMinio = {
  type: "minio",
  bucket: "<value>",
  stagePath: "<value>",
  endpoint: "<value>",
};
```

### `models.OutputResponseOutputStatsd`

```typescript
const value: models.OutputResponseOutputStatsd = {
  type: "statsd",
  protocol: "tcp",
  host: "unwritten-ecliptic.org",
  port: 7903.69,
};
```

### `models.OutputResponseOutputStatsdExt`

```typescript
const value: models.OutputResponseOutputStatsdExt = {
  type: "statsd_ext",
  protocol: "tcp",
  host: "rosy-instructor.net",
  port: 1259.51,
};
```

### `models.OutputResponseOutputGraphite`

```typescript
const value: models.OutputResponseOutputGraphite = {
  type: "graphite",
  protocol: "tcp",
  host: "empty-formation.net",
  port: 6524.48,
};
```

### `models.OutputResponseOutputRouter`

```typescript
const value: models.OutputResponseOutputRouter = {
  type: "router",
  rules: [
    {
      filter: "<value>",
      output: "<value>",
    },
  ],
};
```

### `models.OutputResponseOutputSns`

```typescript
const value: models.OutputResponseOutputSns = {
  type: "sns",
  topicArn: "<value>",
  messageGroupId: "<id>",
};
```

### `models.OutputResponseOutputSqs`

```typescript
const value: models.OutputResponseOutputSqs = {
  type: "sqs",
  queueName: "<value>",
  queueType: "standard",
};
```

### `models.OutputResponseOutputSnmp`

```typescript
const value: models.OutputResponseOutputSnmp = {
  type: "snmp",
  hosts: [
    {
      host: "boiling-thorn.biz",
      port: 5096.19,
    },
  ],
};
```

### `models.OutputResponseOutputSumoLogic`

```typescript
const value: models.OutputResponseOutputSumoLogic = {
  type: "sumo_logic",
  url: "https://silent-freight.com",
};
```

### `models.OutputResponseOutputDatadog`

```typescript
const value: models.OutputResponseOutputDatadog = {
  type: "datadog",
};
```

### `models.OutputResponseOutputGrafanaCloudUnion`

```typescript
const value: models.OutputResponseOutputGrafanaCloudUnion = {
  type: "grafana_cloud",
  prometheusUrl: "https://awesome-stranger.biz/",
};
```

### `models.OutputResponseOutputLoki`

```typescript
const value: models.OutputResponseOutputLoki = {
  type: "loki",
  url: "https://trim-postbox.net",
};
```

### `models.OutputResponseOutputPrometheus`

```typescript
const value: models.OutputResponseOutputPrometheus = {
  type: "prometheus",
  url: "https://celebrated-backbone.biz/",
};
```

### `models.OutputResponseOutputRing`

```typescript
const value: models.OutputResponseOutputRing = {
  type: "ring",
};
```

### `models.OutputResponseOutputOpenTelemetry`

```typescript
const value: models.OutputResponseOutputOpenTelemetry = {
  type: "open_telemetry",
  endpoint: "<value>",
};
```

### `models.OutputResponseOutputServiceNow`

```typescript
const value: models.OutputResponseOutputServiceNow = {
  type: "service_now",
  endpoint: "<value>",
  tokenSecret: "<value>",
  otlpVersion: "1.3.1",
  protocol: "http",
};
```

### `models.OutputResponseOutputDataset`

```typescript
const value: models.OutputResponseOutputDataset = {
  type: "dataset",
};
```

### `models.OutputResponseOutputCriblTcp`

```typescript
const value: models.OutputResponseOutputCriblTcp = {
  type: "cribl_tcp",
};
```

### `models.OutputResponseOutputCriblHttp`

```typescript
const value: models.OutputResponseOutputCriblHttp = {
  type: "cribl_http",
};
```

### `models.OutputResponseOutputCriblSearchEngine`

```typescript
const value: models.OutputResponseOutputCriblSearchEngine = {
  type: "cribl_search_engine",
};
```

### `models.OutputResponseOutputHumioHec`

```typescript
const value: models.OutputResponseOutputHumioHec = {
  type: "humio_hec",
  url: "https://intrepid-requirement.org/",
  format: "JSON",
};
```

### `models.OutputResponseOutputCrowdstrikeNextGenSiem`

```typescript
const value: models.OutputResponseOutputCrowdstrikeNextGenSiem = {
  type: "crowdstrike_next_gen_siem",
  url: "https://gloomy-challenge.net/",
  format: "raw",
};
```

### `models.OutputResponseOutputDlS3`

```typescript
const value: models.OutputResponseOutputDlS3 = {
  type: "dl_s3",
  bucket: "<value>",
  stagePath: "<value>",
};
```

### `models.OutputResponseOutputSecurityLake`

```typescript
const value: models.OutputResponseOutputSecurityLake = {
  type: "security_lake",
  assumeRoleArn: "<value>",
  bucket: "<value>",
  region: "<value>",
  stagePath: "<value>",
  accountId: "<id>",
  customSource: "<value>",
};
```

### `models.OutputResponseOutputCriblLake`

```typescript
const value: models.OutputResponseOutputCriblLake = {
  type: "cribl_lake",
};
```

### `models.OutputResponseOutputDiskSpool`

```typescript
const value: models.OutputResponseOutputDiskSpool = {
  type: "disk_spool",
};
```

### `models.OutputResponseOutputClickHouse`

```typescript
const value: models.OutputResponseOutputClickHouse = {
  type: "click_house",
  url: "https://free-confusion.info/",
  database: "<value>",
  tableName: "<value>",
};
```

### `models.OutputResponseOutputLocalSearchStorage`

```typescript
const value: models.OutputResponseOutputLocalSearchStorage = {
  type: "local_search_storage",
  url: "https://unknown-rim.biz",
  database: "<value>",
  tableName: "<value>",
};
```

### `models.OutputResponseOutputXsiam`

```typescript
const value: models.OutputResponseOutputXsiam = {
  type: "xsiam",
};
```

### `models.OutputResponseOutputNetflow`

```typescript
const value: models.OutputResponseOutputNetflow = {
  type: "netflow",
  hosts: [
    {
      host: "good-natured-shipper.com",
      port: 6418.48,
    },
  ],
};
```

### `models.OutputResponseOutputDynatraceHttp`

```typescript
const value: models.OutputResponseOutputDynatraceHttp = {
  type: "dynatrace_http",
  format: "json_array",
  endpoint: "manual",
  telemetryType: "metrics",
};
```

### `models.OutputResponseOutputDynatraceOtlp`

```typescript
const value: models.OutputResponseOutputDynatraceOtlp = {
  type: "dynatrace_otlp",
  protocol: "http",
  endpoint: "<value>",
  otlpVersion: "1.3.1",
  endpointType: "ag",
  tokenSecret: "<value>",
};
```

### `models.OutputResponseOutputSentinelOneAiSiem`

```typescript
const value: models.OutputResponseOutputSentinelOneAiSiem = {
  type: "sentinel_one_ai_siem",
  region: "CA",
  endpoint: "/services/collector/event",
};
```

### `models.OutputResponseOutputChronicle`

```typescript
const value: models.OutputResponseOutputChronicle = {
  type: "chronicle",
  region: "<value>",
  logType: "<value>",
  gcpProjectId: "<id>",
  gcpInstance: "<value>",
};
```

### `models.OutputResponseOutputDatabricks`

```typescript
const value: models.OutputResponseOutputDatabricks = {
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

### `models.OutputResponseOutputMicrosoftFabric`

```typescript
const value: models.OutputResponseOutputMicrosoftFabric = {
  type: "microsoft_fabric",
  topic: "<value>",
  bootstrap_server: "<value>",
};
```

### `models.OutputResponseOutputCloudflareR2`

```typescript
const value: models.OutputResponseOutputCloudflareR2 = {
  type: "cloudflare_r2",
  bucket: "<value>",
  stagePath: "<value>",
  endpoint: "<value>",
};
```

### `models.OutputResponseOutputNutanixObjects`

```typescript
const value: models.OutputResponseOutputNutanixObjects = {
  type: "nutanix_objects",
  bucket: "<value>",
  stagePath: "<value>",
  endpoint: "<value>",
};
```

### `models.OutputResponseOutputStorjS3`

```typescript
const value: models.OutputResponseOutputStorjS3 = {
  type: "storj_s3",
  bucket: "<value>",
  stagePath: "<value>",
  endpoint: "<value>",
};
```

### `models.OutputResponseOutputAlphasocS3`

```typescript
const value: models.OutputResponseOutputAlphasocS3 = {
  type: "alphasoc_s3",
  bucket: "<value>",
  stagePath: "<value>",
};
```

### `models.OutputResponseOutputDellS3`

```typescript
const value: models.OutputResponseOutputDellS3 = {
  type: "dell_s3",
  bucket: "<value>",
  stagePath: "<value>",
  endpoint: "<value>",
};
```

### `models.OutputResponseOutputCloudianS3`

```typescript
const value: models.OutputResponseOutputCloudianS3 = {
  type: "cloudian_s3",
  endpoint: "<value>",
  bucket: "<value>",
  stagePath: "<value>",
};
```

### `models.OutputResponseOutputScalityS3`

```typescript
const value: models.OutputResponseOutputScalityS3 = {
  type: "scality_s3",
  bucket: "<value>",
  stagePath: "<value>",
  endpoint: "<value>",
};
```

