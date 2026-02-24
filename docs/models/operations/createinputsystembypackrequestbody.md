# CreateInputSystemByPackRequestBody

Input object


## Supported Types

### `operations.CreateInputSystemByPackInputCollection`

```typescript
const value: operations.CreateInputSystemByPackInputCollection = {
  id: "<id>",
  type: "collection",
};
```

### `operations.CreateInputSystemByPackInputKafka`

```typescript
const value: operations.CreateInputSystemByPackInputKafka = {
  id: "<id>",
  type: "kafka",
  brokers: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  topics: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `operations.CreateInputSystemByPackInputMsk`

```typescript
const value: operations.CreateInputSystemByPackInputMsk = {
  id: "<id>",
  type: "msk",
  brokers: [
    "<value 1>",
  ],
  topics: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  awsAuthenticationMethod: "<value>",
  region: "<value>",
};
```

### `operations.CreateInputSystemByPackInputHttp`

```typescript
const value: operations.CreateInputSystemByPackInputHttp = {
  id: "<id>",
  type: "http",
  host: "breakable-grandson.biz",
  port: 5375.96,
};
```

### `operations.CreateInputSystemByPackInputSplunk`

```typescript
const value: operations.CreateInputSystemByPackInputSplunk = {
  id: "<id>",
  type: "splunk",
  host: "clueless-blight.net",
  port: 7481.32,
};
```

### `operations.CreateInputSystemByPackInputSplunkSearch`

```typescript
const value: operations.CreateInputSystemByPackInputSplunkSearch = {
  id: "<id>",
  type: "splunk_search",
  searchHead: "<value>",
  search: "<value>",
  cronSchedule: "<value>",
  endpoint: "<value>",
  outputMode: "csv",
};
```

### `operations.CreateInputSystemByPackInputSplunkHec`

```typescript
const value: operations.CreateInputSystemByPackInputSplunkHec = {
  id: "<id>",
  type: "splunk_hec",
  host: "white-phrase.com",
  port: 8552.35,
  splunkHecAPI: "<value>",
};
```

### `operations.CreateInputSystemByPackInputAzureBlob`

```typescript
const value: operations.CreateInputSystemByPackInputAzureBlob = {
  id: "<id>",
  type: "azure_blob",
  queueName: "<value>",
};
```

### `operations.CreateInputSystemByPackInputElastic`

```typescript
const value: operations.CreateInputSystemByPackInputElastic = {
  id: "<id>",
  type: "elastic",
  host: "alienated-comparison.org",
  port: 8095.95,
  elasticAPI: "<value>",
};
```

### `operations.CreateInputSystemByPackInputConfluentCloud`

```typescript
const value: operations.CreateInputSystemByPackInputConfluentCloud = {
  id: "<id>",
  type: "confluent_cloud",
  brokers: [],
  topics: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `operations.CreateInputSystemByPackInputGrafanaUnion`

```typescript
const value: operations.CreateInputSystemByPackInputGrafanaUnion = {
  id: "<id>",
  type: "grafana",
  host: "snarling-lobster.com",
  port: 5913.46,
  prometheusAPI: "<value>",
};
```

### `operations.CreateInputSystemByPackInputLoki`

```typescript
const value: operations.CreateInputSystemByPackInputLoki = {
  id: "<id>",
  type: "loki",
  host: "unhealthy-meadow.name",
  port: 7476.67,
  lokiAPI: "<value>",
};
```

### `operations.CreateInputSystemByPackInputPrometheusRw`

```typescript
const value: operations.CreateInputSystemByPackInputPrometheusRw = {
  id: "<id>",
  type: "prometheus_rw",
  host: "quick-witted-haircut.info",
  port: 2920.38,
  prometheusAPI: "<value>",
};
```

### `operations.CreateInputSystemByPackInputPrometheus`

```typescript
const value: operations.CreateInputSystemByPackInputPrometheus = {
  id: "<id>",
  type: "prometheus",
  interval: 5073.37,
  logLevel: "debug",
};
```

### `operations.CreateInputSystemByPackInputEdgePrometheus`

```typescript
const value: operations.CreateInputSystemByPackInputEdgePrometheus = {
  id: "<id>",
  type: "edge_prometheus",
  discoveryType: "static",
  interval: 2391.39,
};
```

### `operations.CreateInputSystemByPackInputOffice365Mgmt`

```typescript
const value: operations.CreateInputSystemByPackInputOffice365Mgmt = {
  id: "<id>",
  type: "office365_mgmt",
  planType: "dod",
  tenantId: "<id>",
  appId: "<id>",
};
```

### `operations.CreateInputSystemByPackInputOffice365Service`

```typescript
const value: operations.CreateInputSystemByPackInputOffice365Service = {
  id: "<id>",
  type: "office365_service",
  tenantId: "<id>",
  appId: "<id>",
};
```

### `operations.CreateInputSystemByPackInputOffice365MsgTrace`

```typescript
const value: operations.CreateInputSystemByPackInputOffice365MsgTrace = {
  id: "<id>",
  type: "office365_msg_trace",
  url: "https://close-grouper.com",
  interval: 6837.57,
};
```

### `operations.CreateInputSystemByPackInputEventhub`

```typescript
const value: operations.CreateInputSystemByPackInputEventhub = {
  id: "<id>",
  type: "eventhub",
  brokers: [
    "<value 1>",
  ],
  topics: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `operations.CreateInputSystemByPackInputExec`

```typescript
const value: operations.CreateInputSystemByPackInputExec = {
  id: "<id>",
  type: "exec",
  command: "<value>",
};
```

### `operations.CreateInputSystemByPackInputFirehose`

```typescript
const value: operations.CreateInputSystemByPackInputFirehose = {
  id: "<id>",
  type: "firehose",
  host: "enlightened-resolve.biz",
  port: 6296.91,
};
```

### `operations.CreateInputSystemByPackInputGooglePubsub`

```typescript
const value: operations.CreateInputSystemByPackInputGooglePubsub = {
  id: "<id>",
  type: "google_pubsub",
  topicName: "<value>",
  subscriptionName: "<value>",
};
```

### `operations.CreateInputSystemByPackInputCribl`

```typescript
const value: operations.CreateInputSystemByPackInputCribl = {
  id: "<id>",
  type: "cribl",
};
```

### `operations.CreateInputSystemByPackInputCriblTcp`

```typescript
const value: operations.CreateInputSystemByPackInputCriblTcp = {
  id: "<id>",
  type: "cribl_tcp",
  host: "brisk-embarrassment.net",
  port: 1008.96,
};
```

### `operations.CreateInputSystemByPackInputCriblHttp`

```typescript
const value: operations.CreateInputSystemByPackInputCriblHttp = {
  id: "<id>",
  type: "cribl_http",
  host: "submissive-encouragement.name",
  port: 8802.38,
};
```

### `operations.CreateInputSystemByPackInputCriblLakeHttp`

```typescript
const value: operations.CreateInputSystemByPackInputCriblLakeHttp = {
  id: "<id>",
  type: "cribl_lake_http",
  host: "functional-median.name",
  port: 9429.61,
};
```

### `operations.CreateInputSystemByPackInputTcpjson`

```typescript
const value: operations.CreateInputSystemByPackInputTcpjson = {
  id: "<id>",
  type: "tcpjson",
  host: "every-newsprint.name",
  port: 696.57,
};
```

### `operations.CreateInputSystemByPackInputSystemMetrics`

```typescript
const value: operations.CreateInputSystemByPackInputSystemMetrics = {
  id: "<id>",
  type: "system_metrics",
};
```

### `operations.CreateInputSystemByPackInputSystemState`

```typescript
const value: operations.CreateInputSystemByPackInputSystemState = {
  id: "<id>",
  type: "system_state",
};
```

### `operations.CreateInputSystemByPackInputKubeMetrics`

```typescript
const value: operations.CreateInputSystemByPackInputKubeMetrics = {
  id: "<id>",
  type: "kube_metrics",
};
```

### `operations.CreateInputSystemByPackInputKubeLogs`

```typescript
const value: operations.CreateInputSystemByPackInputKubeLogs = {
  id: "<id>",
  type: "kube_logs",
};
```

### `operations.CreateInputSystemByPackInputKubeEvents`

```typescript
const value: operations.CreateInputSystemByPackInputKubeEvents = {
  id: "<id>",
  type: "kube_events",
};
```

### `operations.CreateInputSystemByPackInputWindowsMetrics`

```typescript
const value: operations.CreateInputSystemByPackInputWindowsMetrics = {
  id: "<id>",
  type: "windows_metrics",
};
```

### `operations.CreateInputSystemByPackInputCrowdstrike`

```typescript
const value: operations.CreateInputSystemByPackInputCrowdstrike = {
  id: "<id>",
  type: "crowdstrike",
  queueName: "<value>",
};
```

### `operations.CreateInputSystemByPackInputDatadogAgent`

```typescript
const value: operations.CreateInputSystemByPackInputDatadogAgent = {
  id: "<id>",
  type: "datadog_agent",
  host: "emotional-babushka.org",
  port: 3599.74,
};
```

### `operations.CreateInputSystemByPackInputDatagen`

```typescript
const value: operations.CreateInputSystemByPackInputDatagen = {
  id: "<id>",
  type: "datagen",
  samples: [
    {
      sample: "<value>",
      eventsPerSec: 4731.51,
    },
  ],
};
```

### `operations.CreateInputSystemByPackInputHttpRaw`

```typescript
const value: operations.CreateInputSystemByPackInputHttpRaw = {
  id: "<id>",
  type: "http_raw",
  host: "perky-impact.net",
  port: 247.61,
};
```

### `operations.CreateInputSystemByPackInputKinesis`

```typescript
const value: operations.CreateInputSystemByPackInputKinesis = {
  id: "<id>",
  type: "kinesis",
  streamName: "<value>",
  region: "<value>",
};
```

### `operations.CreateInputSystemByPackInputCriblmetrics`

```typescript
const value: operations.CreateInputSystemByPackInputCriblmetrics = {
  id: "<id>",
  type: "criblmetrics",
};
```

### `operations.CreateInputSystemByPackInputMetrics`

```typescript
const value: operations.CreateInputSystemByPackInputMetrics = {
  id: "<id>",
  type: "metrics",
  host: "shoddy-adviser.net",
};
```

### `operations.CreateInputSystemByPackInputS3`

```typescript
const value: operations.CreateInputSystemByPackInputS3 = {
  id: "<id>",
  type: "s3",
  queueName: "<value>",
};
```

### `operations.CreateInputSystemByPackInputS3Inventory`

```typescript
const value: operations.CreateInputSystemByPackInputS3Inventory = {
  id: "<id>",
  type: "s3_inventory",
  queueName: "<value>",
};
```

### `operations.CreateInputSystemByPackInputSnmp`

```typescript
const value: operations.CreateInputSystemByPackInputSnmp = {
  id: "<id>",
  type: "snmp",
  host: "official-guide.info",
  port: 9751.55,
};
```

### `operations.CreateInputSystemByPackInputOpenTelemetry`

```typescript
const value: operations.CreateInputSystemByPackInputOpenTelemetry = {
  id: "<id>",
  type: "open_telemetry",
  host: "insistent-swath.net",
  port: 1367.05,
};
```

### `operations.CreateInputSystemByPackInputModelDrivenTelemetry`

```typescript
const value: operations.CreateInputSystemByPackInputModelDrivenTelemetry = {
  id: "<id>",
  type: "model_driven_telemetry",
  host: "aged-fax.net",
  port: 7179.56,
};
```

### `operations.CreateInputSystemByPackInputSqs`

```typescript
const value: operations.CreateInputSystemByPackInputSqs = {
  id: "<id>",
  type: "sqs",
  queueName: "<value>",
  queueType: "fifo",
};
```

### `operations.CreateInputSystemByPackInputSyslogUnion`

```typescript
const value: operations.CreateInputSystemByPackInputSyslogUnion = {
  id: "<id>",
  type: "syslog",
  host: "untried-dulcimer.name",
  udpPort: 7106.65,
};
```

### `operations.CreateInputSystemByPackInputFile`

```typescript
const value: operations.CreateInputSystemByPackInputFile = {
  id: "<id>",
  type: "file",
};
```

### `operations.CreateInputSystemByPackInputTcp`

```typescript
const value: operations.CreateInputSystemByPackInputTcp = {
  id: "<id>",
  type: "tcp",
  host: "ugly-championship.info",
  port: 2480.1,
};
```

### `operations.CreateInputSystemByPackInputAppscope`

```typescript
const value: operations.CreateInputSystemByPackInputAppscope = {
  id: "<id>",
  type: "appscope",
};
```

### `operations.CreateInputSystemByPackInputWef`

```typescript
const value: operations.CreateInputSystemByPackInputWef = {
  id: "<id>",
  type: "wef",
  host: "likable-negotiation.com",
  port: 687.5,
  subscriptions: [
    {
      subscriptionName: "<value>",
      contentFormat: "RenderedText",
      heartbeatInterval: 4316.38,
      batchTimeout: 276.44,
      targets: [
        "<value 1>",
      ],
    },
  ],
};
```

### `operations.CreateInputSystemByPackInputWinEventLogs`

```typescript
const value: operations.CreateInputSystemByPackInputWinEventLogs = {
  id: "<id>",
  type: "win_event_logs",
  logNames: [],
};
```

### `operations.CreateInputSystemByPackInputRawUdp`

```typescript
const value: operations.CreateInputSystemByPackInputRawUdp = {
  id: "<id>",
  type: "raw_udp",
  host: "worldly-paintwork.com",
  port: 3995.05,
};
```

### `operations.CreateInputSystemByPackInputJournalFiles`

```typescript
const value: operations.CreateInputSystemByPackInputJournalFiles = {
  id: "<id>",
  type: "journal_files",
  path: "/opt",
  journals: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `operations.CreateInputSystemByPackInputWiz`

```typescript
const value: operations.CreateInputSystemByPackInputWiz = {
  id: "<id>",
  type: "wiz",
  endpoint: "<value>",
  authUrl: "https://babyish-peninsula.info",
  clientId: "<id>",
  contentConfig: [
    {
      contentType: "<value>",
      contentQuery: "<value>",
      cronSchedule: "<value>",
      earliest: "<value>",
      latest: "<value>",
    },
  ],
};
```

### `operations.CreateInputSystemByPackInputWizWebhook`

```typescript
const value: operations.CreateInputSystemByPackInputWizWebhook = {
  id: "<id>",
  type: "wiz_webhook",
  host: "pushy-sediment.info",
  port: 9177.06,
};
```

### `operations.CreateInputSystemByPackInputNetflow`

```typescript
const value: operations.CreateInputSystemByPackInputNetflow = {
  id: "<id>",
  type: "netflow",
  host: "bustling-summer.org",
  port: 9790.23,
};
```

### `operations.CreateInputSystemByPackInputSecurityLake`

```typescript
const value: operations.CreateInputSystemByPackInputSecurityLake = {
  id: "<id>",
  type: "security_lake",
  queueName: "<value>",
};
```

### `operations.CreateInputSystemByPackInputZscalerHec`

```typescript
const value: operations.CreateInputSystemByPackInputZscalerHec = {
  id: "<id>",
  type: "zscaler_hec",
  host: "greedy-soybean.net",
  port: 8100.64,
  hecAPI: "<value>",
};
```

### `operations.CreateInputSystemByPackInputCloudflareHec`

```typescript
const value: operations.CreateInputSystemByPackInputCloudflareHec = {
  id: "<id>",
  type: "cloudflare_hec",
  host: "back-marimba.com",
  port: 3576.72,
  hecAPI: "<value>",
};
```

