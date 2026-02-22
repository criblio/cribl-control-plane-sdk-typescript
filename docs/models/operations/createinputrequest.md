# CreateInputRequest

Input object


## Supported Types

### `operations.InputCollection`

```typescript
const value: operations.InputCollection = {
  id: "<id>",
  type: "collection",
};
```

### `operations.InputKafka`

```typescript
const value: operations.InputKafka = {
  id: "<id>",
  type: "kafka",
  brokers: [],
  topics: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `operations.InputMsk`

```typescript
const value: operations.InputMsk = {
  id: "<id>",
  type: "msk",
  brokers: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  topics: [
    "<value 1>",
    "<value 2>",
  ],
  awsAuthenticationMethod: "<value>",
  region: "<value>",
};
```

### `operations.InputHttp`

```typescript
const value: operations.InputHttp = {
  id: "<id>",
  type: "http",
  host: "arid-costume.info",
  port: 1068.38,
};
```

### `operations.InputSplunk`

```typescript
const value: operations.InputSplunk = {
  id: "<id>",
  type: "splunk",
  host: "hoarse-word.name",
  port: 6274.96,
};
```

### `operations.InputSplunkSearch`

```typescript
const value: operations.InputSplunkSearch = {
  id: "<id>",
  type: "splunk_search",
  searchHead: "<value>",
  search: "<value>",
  cronSchedule: "<value>",
  endpoint: "<value>",
  outputMode: "csv",
};
```

### `operations.InputSplunkHec`

```typescript
const value: operations.InputSplunkHec = {
  id: "<id>",
  type: "splunk_hec",
  host: "posh-nudge.org",
  port: 4312.22,
  splunkHecAPI: "<value>",
};
```

### `operations.InputAzureBlob`

```typescript
const value: operations.InputAzureBlob = {
  id: "<id>",
  type: "azure_blob",
  queueName: "<value>",
};
```

### `operations.InputElastic`

```typescript
const value: operations.InputElastic = {
  id: "<id>",
  type: "elastic",
  host: "soupy-yogurt.name",
  port: 4133.71,
  elasticAPI: "<value>",
};
```

### `operations.InputConfluentCloud`

```typescript
const value: operations.InputConfluentCloud = {
  id: "<id>",
  type: "confluent_cloud",
  brokers: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  topics: [
    "<value 1>",
  ],
};
```

### `operations.InputGrafana`

```typescript
const value: operations.InputGrafana = {
  id: "<id>",
  type: "grafana",
  host: "courteous-godfather.org",
  port: 9732.77,
  prometheusAPI: "<value>",
};
```

### `operations.InputLoki`

```typescript
const value: operations.InputLoki = {
  id: "<id>",
  type: "loki",
  host: "spiteful-complication.com",
  port: 9754.95,
  lokiAPI: "<value>",
};
```

### `operations.InputPrometheusRw`

```typescript
const value: operations.InputPrometheusRw = {
  id: "<id>",
  type: "prometheus_rw",
  host: "sardonic-eyeliner.net",
  port: 8120.51,
  prometheusAPI: "<value>",
};
```

### `operations.InputPrometheus`

```typescript
const value: operations.InputPrometheus = {
  id: "<id>",
  type: "prometheus",
  interval: 4631.13,
  logLevel: "info",
};
```

### `operations.InputEdgePrometheus`

```typescript
const value: operations.InputEdgePrometheus = {
  id: "<id>",
  type: "edge_prometheus",
  discoveryType: "ec2",
  interval: 3631.91,
};
```

### `operations.InputOffice365Mgmt`

```typescript
const value: operations.InputOffice365Mgmt = {
  id: "<id>",
  type: "office365_mgmt",
  planType: "gcc_high",
  tenantId: "<id>",
  appId: "<id>",
};
```

### `operations.InputOffice365Service`

```typescript
const value: operations.InputOffice365Service = {
  id: "<id>",
  type: "office365_service",
  tenantId: "<id>",
  appId: "<id>",
};
```

### `operations.InputOffice365MsgTrace`

```typescript
const value: operations.InputOffice365MsgTrace = {
  id: "<id>",
  type: "office365_msg_trace",
  url: "https://reflecting-importance.net/",
  interval: 4579.88,
};
```

### `operations.InputEventhub`

```typescript
const value: operations.InputEventhub = {
  id: "<id>",
  type: "eventhub",
  brokers: [
    "<value 1>",
    "<value 2>",
  ],
  topics: [],
};
```

### `operations.InputExec`

```typescript
const value: operations.InputExec = {
  id: "<id>",
  type: "exec",
  command: "<value>",
};
```

### `operations.InputFirehose`

```typescript
const value: operations.InputFirehose = {
  id: "<id>",
  type: "firehose",
  host: "purple-flu.name",
  port: 9882.58,
};
```

### `operations.InputGooglePubsub`

```typescript
const value: operations.InputGooglePubsub = {
  id: "<id>",
  type: "google_pubsub",
  topicName: "<value>",
  subscriptionName: "<value>",
};
```

### `operations.InputCribl`

```typescript
const value: operations.InputCribl = {
  id: "<id>",
  type: "cribl",
};
```

### `operations.InputCriblTcp`

```typescript
const value: operations.InputCriblTcp = {
  id: "<id>",
  type: "cribl_tcp",
  host: "any-napkin.name",
  port: 2399.43,
};
```

### `operations.InputCriblHttp`

```typescript
const value: operations.InputCriblHttp = {
  id: "<id>",
  type: "cribl_http",
  host: "productive-independence.net",
  port: 7870.2,
};
```

### `operations.InputCriblLakeHttp`

```typescript
const value: operations.InputCriblLakeHttp = {
  id: "<id>",
  type: "cribl_lake_http",
  host: "gloomy-igloo.name",
  port: 3108.73,
};
```

### `operations.InputTcpjson`

```typescript
const value: operations.InputTcpjson = {
  id: "<id>",
  type: "tcpjson",
  host: "exotic-cop-out.org",
  port: 4340.61,
};
```

### `operations.InputSystemMetrics`

```typescript
const value: operations.InputSystemMetrics = {
  id: "<id>",
  type: "system_metrics",
};
```

### `operations.InputSystemState`

```typescript
const value: operations.InputSystemState = {
  id: "<id>",
  type: "system_state",
};
```

### `operations.InputKubeMetrics`

```typescript
const value: operations.InputKubeMetrics = {
  id: "<id>",
  type: "kube_metrics",
};
```

### `operations.InputKubeLogs`

```typescript
const value: operations.InputKubeLogs = {
  id: "<id>",
  type: "kube_logs",
};
```

### `operations.InputKubeEvents`

```typescript
const value: operations.InputKubeEvents = {
  id: "<id>",
  type: "kube_events",
};
```

### `operations.InputWindowsMetrics`

```typescript
const value: operations.InputWindowsMetrics = {
  id: "<id>",
  type: "windows_metrics",
};
```

### `operations.InputCrowdstrike`

```typescript
const value: operations.InputCrowdstrike = {
  id: "<id>",
  type: "crowdstrike",
  queueName: "<value>",
};
```

### `operations.InputDatadogAgent`

```typescript
const value: operations.InputDatadogAgent = {
  id: "<id>",
  type: "datadog_agent",
  host: "damaged-minion.info",
  port: 452.65,
};
```

### `operations.InputDatagen`

```typescript
const value: operations.InputDatagen = {
  id: "<id>",
  type: "datagen",
  samples: [
    {
      sample: "<value>",
      eventsPerSec: 3632.79,
    },
  ],
};
```

### `operations.InputHttpRaw`

```typescript
const value: operations.InputHttpRaw = {
  id: "<id>",
  type: "http_raw",
  host: "incomparable-skyline.name",
  port: 6075.1,
};
```

### `operations.InputKinesis`

```typescript
const value: operations.InputKinesis = {
  id: "<id>",
  type: "kinesis",
  streamName: "<value>",
  region: "<value>",
};
```

### `operations.InputCriblmetrics`

```typescript
const value: operations.InputCriblmetrics = {
  id: "<id>",
  type: "criblmetrics",
};
```

### `operations.InputMetrics`

```typescript
const value: operations.InputMetrics = {
  id: "<id>",
  type: "metrics",
  host: "clueless-heating.com",
};
```

### `operations.InputS3`

```typescript
const value: operations.InputS3 = {
  id: "<id>",
  type: "s3",
  queueName: "<value>",
};
```

### `operations.InputS3Inventory`

```typescript
const value: operations.InputS3Inventory = {
  id: "<id>",
  type: "s3_inventory",
  queueName: "<value>",
};
```

### `operations.InputSnmp`

```typescript
const value: operations.InputSnmp = {
  id: "<id>",
  type: "snmp",
  host: "knotty-overcoat.com",
  port: 3632.09,
};
```

### `operations.InputOpenTelemetry`

```typescript
const value: operations.InputOpenTelemetry = {
  id: "<id>",
  type: "open_telemetry",
  host: "shocked-dish.org",
  port: 8416.34,
};
```

### `operations.InputModelDrivenTelemetry`

```typescript
const value: operations.InputModelDrivenTelemetry = {
  id: "<id>",
  type: "model_driven_telemetry",
  host: "mixed-ad.org",
  port: 9095.17,
};
```

### `operations.InputSqs`

```typescript
const value: operations.InputSqs = {
  id: "<id>",
  type: "sqs",
  queueName: "<value>",
  queueType: "standard",
};
```

### `operations.InputSyslog`

```typescript
const value: operations.InputSyslog = {
  id: "<id>",
  type: "syslog",
  host: "lone-coal.com",
  udpPort: 1640.72,
};
```

### `operations.InputFile`

```typescript
const value: operations.InputFile = {
  id: "<id>",
  type: "file",
};
```

### `operations.InputTcp`

```typescript
const value: operations.InputTcp = {
  id: "<id>",
  type: "tcp",
  host: "chilly-transparency.info",
  port: 6178.25,
};
```

### `operations.InputAppscope`

```typescript
const value: operations.InputAppscope = {
  id: "<id>",
  type: "appscope",
};
```

### `operations.InputWef`

```typescript
const value: operations.InputWef = {
  id: "<id>",
  type: "wef",
  host: "vivid-aircraft.com",
  port: 1951.59,
  subscriptions: [],
};
```

### `operations.InputWinEventLogs`

```typescript
const value: operations.InputWinEventLogs = {
  id: "<id>",
  type: "win_event_logs",
  logNames: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `operations.InputRawUdp`

```typescript
const value: operations.InputRawUdp = {
  id: "<id>",
  type: "raw_udp",
  host: "untidy-insolence.org",
  port: 3097.17,
};
```

### `operations.InputJournalFiles`

```typescript
const value: operations.InputJournalFiles = {
  id: "<id>",
  type: "journal_files",
  path: "/usr/local/bin",
  journals: [],
};
```

### `operations.InputWiz`

```typescript
const value: operations.InputWiz = {
  id: "<id>",
  type: "wiz",
  endpoint: "<value>",
  authUrl: "https://sturdy-desk.info",
  clientId: "<id>",
  contentConfig: [],
};
```

### `operations.InputWizWebhook`

```typescript
const value: operations.InputWizWebhook = {
  id: "<id>",
  type: "wiz_webhook",
  host: "trusting-spear.name",
  port: 2792.96,
};
```

### `operations.InputNetflow`

```typescript
const value: operations.InputNetflow = {
  id: "<id>",
  type: "netflow",
  host: "supportive-request.net",
  port: 1221.63,
};
```

### `operations.InputSecurityLake`

```typescript
const value: operations.InputSecurityLake = {
  id: "<id>",
  type: "security_lake",
  queueName: "<value>",
};
```

### `operations.InputZscalerHec`

```typescript
const value: operations.InputZscalerHec = {
  id: "<id>",
  type: "zscaler_hec",
  host: "busy-litter.info",
  port: 2058.8,
  hecAPI: "<value>",
};
```

### `operations.InputCloudflareHec`

```typescript
const value: operations.InputCloudflareHec = {
  id: "<id>",
  type: "cloudflare_hec",
  host: "spanish-barge.info",
  port: 7109.41,
  hecAPI: "<value>",
};
```

