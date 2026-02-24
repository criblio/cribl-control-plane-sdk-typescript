# CreateInputRequest

Input object


## Supported Types

### `operations.CreateInputInputCollection`

```typescript
const value: operations.CreateInputInputCollection = {
  id: "<id>",
  type: "collection",
};
```

### `operations.CreateInputInputKafka`

```typescript
const value: operations.CreateInputInputKafka = {
  id: "<id>",
  type: "kafka",
  brokers: [
    "<value 1>",
  ],
  topics: [
    "<value 1>",
  ],
};
```

### `operations.CreateInputInputMsk`

```typescript
const value: operations.CreateInputInputMsk = {
  id: "<id>",
  type: "msk",
  brokers: [],
  topics: [
    "<value 1>",
  ],
  awsAuthenticationMethod: "<value>",
  region: "<value>",
};
```

### `operations.CreateInputInputHttp`

```typescript
const value: operations.CreateInputInputHttp = {
  id: "<id>",
  type: "http",
  host: "baggy-requirement.name",
  port: 7359.79,
};
```

### `operations.CreateInputInputSplunk`

```typescript
const value: operations.CreateInputInputSplunk = {
  id: "<id>",
  type: "splunk",
  host: "clear-exasperation.name",
  port: 3779.03,
};
```

### `operations.CreateInputInputSplunkSearch`

```typescript
const value: operations.CreateInputInputSplunkSearch = {
  id: "<id>",
  type: "splunk_search",
  searchHead: "<value>",
  search: "<value>",
  cronSchedule: "<value>",
  endpoint: "<value>",
  outputMode: "json",
};
```

### `operations.CreateInputInputSplunkHec`

```typescript
const value: operations.CreateInputInputSplunkHec = {
  id: "<id>",
  type: "splunk_hec",
  host: "golden-countess.info",
  port: 3109.92,
  splunkHecAPI: "<value>",
};
```

### `operations.CreateInputInputAzureBlob`

```typescript
const value: operations.CreateInputInputAzureBlob = {
  id: "<id>",
  type: "azure_blob",
  queueName: "<value>",
};
```

### `operations.CreateInputInputElastic`

```typescript
const value: operations.CreateInputInputElastic = {
  id: "<id>",
  type: "elastic",
  host: "regular-puritan.biz",
  port: 5153.58,
  elasticAPI: "<value>",
};
```

### `operations.CreateInputInputConfluentCloud`

```typescript
const value: operations.CreateInputInputConfluentCloud = {
  id: "<id>",
  type: "confluent_cloud",
  brokers: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  topics: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `operations.CreateInputInputGrafanaUnion`

```typescript
const value: operations.CreateInputInputGrafanaUnion = {
  id: "<id>",
  type: "grafana",
  host: "supportive-provider.biz",
  port: 9431.22,
  prometheusAPI: "<value>",
};
```

### `operations.CreateInputInputLoki`

```typescript
const value: operations.CreateInputInputLoki = {
  id: "<id>",
  type: "loki",
  host: "webbed-wriggler.com",
  port: 2720.79,
  lokiAPI: "<value>",
};
```

### `operations.CreateInputInputPrometheusRw`

```typescript
const value: operations.CreateInputInputPrometheusRw = {
  id: "<id>",
  type: "prometheus_rw",
  host: "growing-account.info",
  port: 7169.07,
  prometheusAPI: "<value>",
};
```

### `operations.CreateInputInputPrometheus`

```typescript
const value: operations.CreateInputInputPrometheus = {
  id: "<id>",
  type: "prometheus",
  interval: 846.56,
  logLevel: "info",
};
```

### `operations.CreateInputInputEdgePrometheus`

```typescript
const value: operations.CreateInputInputEdgePrometheus = {
  id: "<id>",
  type: "edge_prometheus",
  discoveryType: "k8s-node",
  interval: 9850.99,
};
```

### `operations.CreateInputInputOffice365Mgmt`

```typescript
const value: operations.CreateInputInputOffice365Mgmt = {
  id: "<id>",
  type: "office365_mgmt",
  planType: "gcc",
  tenantId: "<id>",
  appId: "<id>",
};
```

### `operations.CreateInputInputOffice365Service`

```typescript
const value: operations.CreateInputInputOffice365Service = {
  id: "<id>",
  type: "office365_service",
  tenantId: "<id>",
  appId: "<id>",
};
```

### `operations.CreateInputInputOffice365MsgTrace`

```typescript
const value: operations.CreateInputInputOffice365MsgTrace = {
  id: "<id>",
  type: "office365_msg_trace",
  url: "https://substantial-translation.info/",
  interval: 9554.09,
};
```

### `operations.CreateInputInputEventhub`

```typescript
const value: operations.CreateInputInputEventhub = {
  id: "<id>",
  type: "eventhub",
  brokers: [
    "<value 1>",
  ],
  topics: [
    "<value 1>",
  ],
};
```

### `operations.CreateInputInputExec`

```typescript
const value: operations.CreateInputInputExec = {
  id: "<id>",
  type: "exec",
  command: "<value>",
};
```

### `operations.CreateInputInputFirehose`

```typescript
const value: operations.CreateInputInputFirehose = {
  id: "<id>",
  type: "firehose",
  host: "wealthy-encouragement.net",
  port: 6629.33,
};
```

### `operations.CreateInputInputGooglePubsub`

```typescript
const value: operations.CreateInputInputGooglePubsub = {
  id: "<id>",
  type: "google_pubsub",
  topicName: "<value>",
  subscriptionName: "<value>",
};
```

### `operations.CreateInputInputCribl`

```typescript
const value: operations.CreateInputInputCribl = {
  id: "<id>",
  type: "cribl",
};
```

### `operations.CreateInputInputCriblTcp`

```typescript
const value: operations.CreateInputInputCriblTcp = {
  id: "<id>",
  type: "cribl_tcp",
  host: "svelte-duster.org",
  port: 3701.97,
};
```

### `operations.CreateInputInputCriblHttp`

```typescript
const value: operations.CreateInputInputCriblHttp = {
  id: "<id>",
  type: "cribl_http",
  host: "homely-secret.net",
  port: 3169.23,
};
```

### `operations.CreateInputInputCriblLakeHttp`

```typescript
const value: operations.CreateInputInputCriblLakeHttp = {
  id: "<id>",
  type: "cribl_lake_http",
  host: "liquid-impostor.com",
  port: 4281.15,
};
```

### `operations.CreateInputInputTcpjson`

```typescript
const value: operations.CreateInputInputTcpjson = {
  id: "<id>",
  type: "tcpjson",
  host: "superior-pillow.net",
  port: 585.67,
};
```

### `operations.CreateInputInputSystemMetrics`

```typescript
const value: operations.CreateInputInputSystemMetrics = {
  id: "<id>",
  type: "system_metrics",
};
```

### `operations.CreateInputInputSystemState`

```typescript
const value: operations.CreateInputInputSystemState = {
  id: "<id>",
  type: "system_state",
};
```

### `operations.CreateInputInputKubeMetrics`

```typescript
const value: operations.CreateInputInputKubeMetrics = {
  id: "<id>",
  type: "kube_metrics",
};
```

### `operations.CreateInputInputKubeLogs`

```typescript
const value: operations.CreateInputInputKubeLogs = {
  id: "<id>",
  type: "kube_logs",
};
```

### `operations.CreateInputInputKubeEvents`

```typescript
const value: operations.CreateInputInputKubeEvents = {
  id: "<id>",
  type: "kube_events",
};
```

### `operations.CreateInputInputWindowsMetrics`

```typescript
const value: operations.CreateInputInputWindowsMetrics = {
  id: "<id>",
  type: "windows_metrics",
};
```

### `operations.CreateInputInputCrowdstrike`

```typescript
const value: operations.CreateInputInputCrowdstrike = {
  id: "<id>",
  type: "crowdstrike",
  queueName: "<value>",
};
```

### `operations.CreateInputInputDatadogAgent`

```typescript
const value: operations.CreateInputInputDatadogAgent = {
  id: "<id>",
  type: "datadog_agent",
  host: "worse-hope.name",
  port: 2113.87,
};
```

### `operations.CreateInputInputDatagen`

```typescript
const value: operations.CreateInputInputDatagen = {
  id: "<id>",
  type: "datagen",
  samples: [
    {
      sample: "<value>",
      eventsPerSec: 1832.32,
    },
  ],
};
```

### `operations.CreateInputInputHttpRaw`

```typescript
const value: operations.CreateInputInputHttpRaw = {
  id: "<id>",
  type: "http_raw",
  host: "webbed-vol.com",
  port: 250.02,
};
```

### `operations.CreateInputInputKinesis`

```typescript
const value: operations.CreateInputInputKinesis = {
  id: "<id>",
  type: "kinesis",
  streamName: "<value>",
  region: "<value>",
};
```

### `operations.CreateInputInputCriblmetrics`

```typescript
const value: operations.CreateInputInputCriblmetrics = {
  id: "<id>",
  type: "criblmetrics",
};
```

### `operations.CreateInputInputMetrics`

```typescript
const value: operations.CreateInputInputMetrics = {
  id: "<id>",
  type: "metrics",
  host: "zesty-retention.info",
};
```

### `operations.CreateInputInputS3`

```typescript
const value: operations.CreateInputInputS3 = {
  id: "<id>",
  type: "s3",
  queueName: "<value>",
};
```

### `operations.CreateInputInputS3Inventory`

```typescript
const value: operations.CreateInputInputS3Inventory = {
  id: "<id>",
  type: "s3_inventory",
  queueName: "<value>",
};
```

### `operations.CreateInputInputSnmp`

```typescript
const value: operations.CreateInputInputSnmp = {
  id: "<id>",
  type: "snmp",
  host: "stupendous-flint.info",
  port: 4514.07,
};
```

### `operations.CreateInputInputOpenTelemetry`

```typescript
const value: operations.CreateInputInputOpenTelemetry = {
  id: "<id>",
  type: "open_telemetry",
  host: "every-fibre.info",
  port: 2536.14,
};
```

### `operations.CreateInputInputModelDrivenTelemetry`

```typescript
const value: operations.CreateInputInputModelDrivenTelemetry = {
  id: "<id>",
  type: "model_driven_telemetry",
  host: "old-grouper.info",
  port: 829.27,
};
```

### `operations.CreateInputInputSqs`

```typescript
const value: operations.CreateInputInputSqs = {
  id: "<id>",
  type: "sqs",
  queueName: "<value>",
  queueType: "fifo",
};
```

### `operations.CreateInputInputSyslogUnion`

```typescript
const value: operations.CreateInputInputSyslogUnion = {
  id: "<id>",
  type: "syslog",
  host: "kooky-passport.biz",
  udpPort: 1144.97,
};
```

### `operations.CreateInputInputFile`

```typescript
const value: operations.CreateInputInputFile = {
  id: "<id>",
  type: "file",
};
```

### `operations.CreateInputInputTcp`

```typescript
const value: operations.CreateInputInputTcp = {
  id: "<id>",
  type: "tcp",
  host: "murky-amnesty.biz",
  port: 5090.54,
};
```

### `operations.CreateInputInputAppscope`

```typescript
const value: operations.CreateInputInputAppscope = {
  id: "<id>",
  type: "appscope",
};
```

### `operations.CreateInputInputWef`

```typescript
const value: operations.CreateInputInputWef = {
  id: "<id>",
  type: "wef",
  host: "filthy-window.name",
  port: 4834.72,
  subscriptions: [
    {
      subscriptionName: "<value>",
      contentFormat: "Raw",
      heartbeatInterval: 4977.16,
      batchTimeout: 3395.8,
      targets: [
        "<value 1>",
        "<value 2>",
      ],
    },
  ],
};
```

### `operations.CreateInputInputWinEventLogs`

```typescript
const value: operations.CreateInputInputWinEventLogs = {
  id: "<id>",
  type: "win_event_logs",
  logNames: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `operations.CreateInputInputRawUdp`

```typescript
const value: operations.CreateInputInputRawUdp = {
  id: "<id>",
  type: "raw_udp",
  host: "repentant-wheel.org",
  port: 500.5,
};
```

### `operations.CreateInputInputJournalFiles`

```typescript
const value: operations.CreateInputInputJournalFiles = {
  id: "<id>",
  type: "journal_files",
  path: "/etc/defaults",
  journals: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `operations.CreateInputInputWiz`

```typescript
const value: operations.CreateInputInputWiz = {
  id: "<id>",
  type: "wiz",
  endpoint: "<value>",
  authUrl: "https://kaleidoscopic-underneath.net",
  clientId: "<id>",
  contentConfig: [],
};
```

### `operations.CreateInputInputWizWebhook`

```typescript
const value: operations.CreateInputInputWizWebhook = {
  id: "<id>",
  type: "wiz_webhook",
  host: "dim-pillbox.net",
  port: 1491.53,
};
```

### `operations.CreateInputInputNetflow`

```typescript
const value: operations.CreateInputInputNetflow = {
  id: "<id>",
  type: "netflow",
  host: "creative-smoke.name",
  port: 9451.77,
};
```

### `operations.CreateInputInputSecurityLake`

```typescript
const value: operations.CreateInputInputSecurityLake = {
  id: "<id>",
  type: "security_lake",
  queueName: "<value>",
};
```

### `operations.CreateInputInputZscalerHec`

```typescript
const value: operations.CreateInputInputZscalerHec = {
  id: "<id>",
  type: "zscaler_hec",
  host: "filthy-shadowbox.info",
  port: 7901.84,
  hecAPI: "<value>",
};
```

### `operations.CreateInputInputCloudflareHec`

```typescript
const value: operations.CreateInputInputCloudflareHec = {
  id: "<id>",
  type: "cloudflare_hec",
  host: "rural-scaffold.net",
  port: 8504.37,
  hecAPI: "<value>",
};
```

