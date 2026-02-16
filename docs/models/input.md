# Input


## Supported Types

### `models.InputCollection`

```typescript
const value: models.InputCollection = {
  type: "collection",
};
```

### `models.InputKafka`

```typescript
const value: models.InputKafka = {
  type: "kafka",
  brokers: [
    "<value 1>",
    "<value 2>",
  ],
  topics: [
    "<value 1>",
  ],
};
```

### `models.InputMsk`

```typescript
const value: models.InputMsk = {
  type: "msk",
  brokers: [
    "<value 1>",
  ],
  topics: [
    "<value 1>",
  ],
  awsAuthenticationMethod: "<value>",
  region: "<value>",
};
```

### `models.InputHttp`

```typescript
const value: models.InputHttp = {
  type: "http",
  host: "oily-cook.net",
  port: 3082.66,
};
```

### `models.InputSplunk`

```typescript
const value: models.InputSplunk = {
  type: "splunk",
  host: "sour-finding.biz",
  port: 9520.51,
};
```

### `models.InputSplunkSearch`

```typescript
const value: models.InputSplunkSearch = {
  type: "splunk_search",
  searchHead: "<value>",
  search: "<value>",
  cronSchedule: "<value>",
  endpoint: "<value>",
  outputMode: "json",
};
```

### `models.InputSplunkHec`

```typescript
const value: models.InputSplunkHec = {
  type: "splunk_hec",
  host: "ruddy-birdcage.com",
  port: 206.09,
  splunkHecAPI: "<value>",
};
```

### `models.InputAzureBlob`

```typescript
const value: models.InputAzureBlob = {
  type: "azure_blob",
  queueName: "<value>",
};
```

### `models.InputElastic`

```typescript
const value: models.InputElastic = {
  type: "elastic",
  host: "instructive-sonnet.org",
  port: 1950.48,
  elasticAPI: "<value>",
};
```

### `models.InputConfluentCloud`

```typescript
const value: models.InputConfluentCloud = {
  type: "confluent_cloud",
  brokers: [
    "<value 1>",
  ],
  topics: [
    "<value 1>",
  ],
};
```

### `models.InputGrafana`

```typescript
const value: models.InputGrafana = {
  type: "grafana",
  host: "wilted-tributary.com",
  port: 5099.38,
  prometheusAPI: "<value>",
};
```

### `models.InputLoki`

```typescript
const value: models.InputLoki = {
  type: "loki",
  host: "careless-obesity.net",
  port: 1220.18,
  lokiAPI: "<value>",
};
```

### `models.InputPrometheusRw`

```typescript
const value: models.InputPrometheusRw = {
  type: "prometheus_rw",
  host: "all-platter.biz",
  port: 2300.12,
  prometheusAPI: "<value>",
};
```

### `models.InputPrometheus`

```typescript
const value: models.InputPrometheus = {
  type: "prometheus",
  interval: 8895.72,
  logLevel: "info",
};
```

### `models.InputEdgePrometheus`

```typescript
const value: models.InputEdgePrometheus = {
  type: "edge_prometheus",
  discoveryType: "ec2",
  interval: 1632.08,
};
```

### `models.InputOffice365Mgmt`

```typescript
const value: models.InputOffice365Mgmt = {
  type: "office365_mgmt",
  planType: "gcc",
  tenantId: "<id>",
  appId: "<id>",
};
```

### `models.InputOffice365Service`

```typescript
const value: models.InputOffice365Service = {
  type: "office365_service",
  tenantId: "<id>",
  appId: "<id>",
};
```

### `models.InputOffice365MsgTrace`

```typescript
const value: models.InputOffice365MsgTrace = {
  type: "office365_msg_trace",
  url: "https://paltry-obedience.com",
  interval: 2809.28,
};
```

### `models.InputEventhub`

```typescript
const value: models.InputEventhub = {
  type: "eventhub",
  brokers: [
    "<value 1>",
  ],
  topics: [
    "<value 1>",
  ],
};
```

### `models.InputExec`

```typescript
const value: models.InputExec = {
  type: "exec",
  command: "<value>",
};
```

### `models.InputFirehose`

```typescript
const value: models.InputFirehose = {
  type: "firehose",
  host: "big-reservation.info",
  port: 6191.54,
};
```

### `models.InputGooglePubsub`

```typescript
const value: models.InputGooglePubsub = {
  type: "google_pubsub",
  topicName: "<value>",
  subscriptionName: "<value>",
};
```

### `models.InputCribl`

```typescript
const value: models.InputCribl = {
  type: "cribl",
};
```

### `models.InputCriblTcp`

```typescript
const value: models.InputCriblTcp = {
  type: "cribl_tcp",
  host: "wrathful-import.com",
  port: 2820.59,
};
```

### `models.InputCriblHttp`

```typescript
const value: models.InputCriblHttp = {
  type: "cribl_http",
  host: "well-off-exterior.info",
  port: 394.56,
};
```

### `models.InputCriblLakeHttp`

```typescript
const value: models.InputCriblLakeHttp = {
  type: "cribl_lake_http",
  host: "grimy-hundred.com",
  port: 7454.32,
};
```

### `models.InputTcpjson`

```typescript
const value: models.InputTcpjson = {
  type: "tcpjson",
  host: "frilly-pillbox.net",
  port: 8074.93,
};
```

### `models.InputSystemMetrics`

```typescript
const value: models.InputSystemMetrics = {
  type: "system_metrics",
};
```

### `models.InputSystemState`

```typescript
const value: models.InputSystemState = {
  type: "system_state",
};
```

### `models.InputKubeMetrics`

```typescript
const value: models.InputKubeMetrics = {
  type: "kube_metrics",
};
```

### `models.InputKubeLogs`

```typescript
const value: models.InputKubeLogs = {
  type: "kube_logs",
};
```

### `models.InputKubeEvents`

```typescript
const value: models.InputKubeEvents = {
  type: "kube_events",
};
```

### `models.InputWindowsMetrics`

```typescript
const value: models.InputWindowsMetrics = {
  type: "windows_metrics",
};
```

### `models.InputCrowdstrike`

```typescript
const value: models.InputCrowdstrike = {
  type: "crowdstrike",
  queueName: "<value>",
};
```

### `models.InputDatadogAgent`

```typescript
const value: models.InputDatadogAgent = {
  type: "datadog_agent",
  host: "standard-granny.net",
  port: 3507.99,
};
```

### `models.InputDatagen`

```typescript
const value: models.InputDatagen = {
  type: "datagen",
  samples: [],
};
```

### `models.InputHttpRaw`

```typescript
const value: models.InputHttpRaw = {
  type: "http_raw",
  host: "equatorial-importance.org",
  port: 1259.51,
};
```

### `models.InputKinesis`

```typescript
const value: models.InputKinesis = {
  type: "kinesis",
  streamName: "<value>",
  region: "<value>",
};
```

### `models.InputCriblmetrics`

```typescript
const value: models.InputCriblmetrics = {
  type: "criblmetrics",
};
```

### `models.InputMetrics`

```typescript
const value: models.InputMetrics = {
  type: "metrics",
  host: "unfinished-circumference.name",
};
```

### `models.InputS3`

```typescript
const value: models.InputS3 = {
  type: "s3",
  queueName: "<value>",
};
```

### `models.InputS3Inventory`

```typescript
const value: models.InputS3Inventory = {
  type: "s3_inventory",
  queueName: "<value>",
};
```

### `models.InputSnmp`

```typescript
const value: models.InputSnmp = {
  type: "snmp",
  host: "zesty-gray.org",
  port: 3485.4,
};
```

### `models.InputOpenTelemetry`

```typescript
const value: models.InputOpenTelemetry = {
  type: "open_telemetry",
  host: "sorrowful-airbus.com",
  port: 3497.15,
};
```

### `models.InputModelDrivenTelemetry`

```typescript
const value: models.InputModelDrivenTelemetry = {
  type: "model_driven_telemetry",
  host: "partial-compromise.org",
  port: 9132.56,
};
```

### `models.InputSqs`

```typescript
const value: models.InputSqs = {
  type: "sqs",
  queueName: "<value>",
  queueType: "fifo",
};
```

### `models.InputSyslog`

```typescript
const value: models.InputSyslog = {
  type: "syslog",
  host: "webbed-charm.info",
  tcpPort: 5340.53,
};
```

### `models.InputFile`

```typescript
const value: models.InputFile = {
  type: "file",
};
```

### `models.InputTcp`

```typescript
const value: models.InputTcp = {
  type: "tcp",
  host: "regal-comparison.info",
  port: 2587.69,
};
```

### `models.InputAppscope`

```typescript
const value: models.InputAppscope = {
  type: "appscope",
};
```

### `models.InputWef`

```typescript
const value: models.InputWef = {
  type: "wef",
  host: "bad-pearl.net",
  port: 8695.05,
  subscriptions: [
    {
      subscriptionName: "<value>",
      contentFormat: "Raw",
      heartbeatInterval: 2988.37,
      batchTimeout: 1432.95,
      targets: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
    },
  ],
};
```

### `models.InputWinEventLogs`

```typescript
const value: models.InputWinEventLogs = {
  type: "win_event_logs",
  logNames: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.InputRawUdp`

```typescript
const value: models.InputRawUdp = {
  type: "raw_udp",
  host: "next-hovel.net",
  port: 8140.6,
};
```

### `models.InputJournalFiles`

```typescript
const value: models.InputJournalFiles = {
  type: "journal_files",
  path: "/bin",
  journals: [
    "<value 1>",
  ],
};
```

### `models.InputWiz`

```typescript
const value: models.InputWiz = {
  type: "wiz",
  endpoint: "<value>",
  authUrl: "https://lone-cinder.name/",
  clientId: "<id>",
  contentConfig: [],
};
```

### `models.InputWizWebhook`

```typescript
const value: models.InputWizWebhook = {
  type: "wiz_webhook",
  host: "self-reliant-platter.name",
  port: 6921.06,
};
```

### `models.InputNetflow`

```typescript
const value: models.InputNetflow = {
  type: "netflow",
  host: "sorrowful-custody.info",
  port: 9623.36,
};
```

### `models.InputSecurityLake`

```typescript
const value: models.InputSecurityLake = {
  type: "security_lake",
  queueName: "<value>",
};
```

### `models.InputZscalerHec`

```typescript
const value: models.InputZscalerHec = {
  type: "zscaler_hec",
  host: "lined-sonnet.net",
  port: 1183.03,
  hecAPI: "<value>",
};
```

### `models.InputCloudflareHec`

```typescript
const value: models.InputCloudflareHec = {
  type: "cloudflare_hec",
  host: "grizzled-receptor.com",
  port: 5918.65,
  hecAPI: "<value>",
};
```

