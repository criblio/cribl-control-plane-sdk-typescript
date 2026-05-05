# InputResponse

Source configuration with optional notifications and runtime status.


## Supported Types

### `models.InputResponseInputCollection`

```typescript
const value: models.InputResponseInputCollection = {
  id: "<id>",
  type: "collection",
};
```

### `models.InputResponseInputKafka`

```typescript
const value: models.InputResponseInputKafka = {
  id: "<id>",
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

### `models.InputResponseInputMsk`

```typescript
const value: models.InputResponseInputMsk = {
  id: "<id>",
  type: "msk",
  brokers: [
    "<value 1>",
  ],
  topics: [],
  awsAuthenticationMethod: "<value>",
  region: "<value>",
};
```

### `models.InputResponseInputHttp`

```typescript
const value: models.InputResponseInputHttp = {
  id: "<id>",
  type: "http",
  host: "terrible-summer.info",
  port: 9468.05,
};
```

### `models.InputResponseInputSplunk`

```typescript
const value: models.InputResponseInputSplunk = {
  id: "<id>",
  type: "splunk",
  host: "corny-translation.name",
  port: 9821.99,
};
```

### `models.InputResponseInputSplunkSearch`

```typescript
const value: models.InputResponseInputSplunkSearch = {
  id: "<id>",
  type: "splunk_search",
  searchHead: "<value>",
  search: "<value>",
  cronSchedule: "<value>",
  endpoint: "<value>",
  outputMode: "csv",
  authType: "basic",
};
```

### `models.InputResponseInputSplunkHec`

```typescript
const value: models.InputResponseInputSplunkHec = {
  id: "<id>",
  type: "splunk_hec",
  host: "both-opera.info",
  port: 517.57,
  splunkHecAPI: "<value>",
};
```

### `models.InputResponseInputAzureBlob`

```typescript
const value: models.InputResponseInputAzureBlob = {
  id: "<id>",
  type: "azure_blob",
  queueName: "<value>",
};
```

### `models.InputResponseInputElastic`

```typescript
const value: models.InputResponseInputElastic = {
  id: "<id>",
  type: "elastic",
  host: "incomplete-lashes.net",
  port: 7417.8,
  elasticAPI: "<value>",
};
```

### `models.InputResponseInputConfluentCloud`

```typescript
const value: models.InputResponseInputConfluentCloud = {
  id: "<id>",
  type: "confluent_cloud",
  brokers: [
    "<value 1>",
    "<value 2>",
  ],
  topics: [],
};
```

### `models.InputResponseInputGrafanaUnion`

```typescript
const value: models.InputResponseInputGrafanaUnion = {
  id: "<id>",
  type: "<value>",
  host: "crushing-stump.info",
  port: 4014.77,
  lokiAPI: "<value>",
};
```

### `models.InputResponseInputLoki`

```typescript
const value: models.InputResponseInputLoki = {
  id: "<id>",
  type: "loki",
  host: "authentic-viability.biz",
  port: 7309.81,
  lokiAPI: "<value>",
};
```

### `models.InputResponseInputPrometheusRw`

```typescript
const value: models.InputResponseInputPrometheusRw = {
  id: "<id>",
  type: "prometheus_rw",
  host: "quiet-wasabi.org",
  port: 5858.15,
  prometheusAPI: "<value>",
};
```

### `models.InputResponseInputPrometheus`

```typescript
const value: models.InputResponseInputPrometheus = {
  id: "<id>",
  type: "prometheus",
  interval: 7728.91,
  logLevel: "debug",
};
```

### `models.InputResponseInputEdgePrometheus`

```typescript
const value: models.InputResponseInputEdgePrometheus = {
  id: "<id>",
  type: "edge_prometheus",
  discoveryType: "dns",
  interval: 785.78,
};
```

### `models.InputResponseInputOffice365Mgmt`

```typescript
const value: models.InputResponseInputOffice365Mgmt = {
  id: "<id>",
  type: "office365_mgmt",
  planType: "dod",
  tenantId: "<id>",
  appId: "<id>",
};
```

### `models.InputResponseInputOffice365Service`

```typescript
const value: models.InputResponseInputOffice365Service = {
  id: "<id>",
  type: "office365_service",
  tenantId: "<id>",
  appId: "<id>",
};
```

### `models.InputResponseInputOffice365MsgTrace`

```typescript
const value: models.InputResponseInputOffice365MsgTrace = {
  id: "<id>",
  type: "office365_msg_trace",
  url: "https://vast-comparison.biz",
  interval: 902348,
};
```

### `models.InputResponseInputMicrosoftGraph`

```typescript
const value: models.InputResponseInputMicrosoftGraph = {
  id: "<id>",
  type: "microsoft_graph",
  url: "https://tattered-piglet.net",
  interval: 86198,
};
```

### `models.InputResponseInputEventhub`

```typescript
const value: models.InputResponseInputEventhub = {
  id: "<id>",
  type: "eventhub",
  brokers: [
    "<value 1>",
    "<value 2>",
  ],
  topics: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.InputResponseInputEventhubAmqp`

```typescript
const value: models.InputResponseInputEventhubAmqp = {
  id: "<id>",
  type: "eventhub_amqp",
  consumerGroup: "<value>",
};
```

### `models.InputResponseInputExec`

```typescript
const value: models.InputResponseInputExec = {
  id: "<id>",
  type: "exec",
  command: "<value>",
};
```

### `models.InputResponseInputFirehose`

```typescript
const value: models.InputResponseInputFirehose = {
  id: "<id>",
  type: "firehose",
  host: "clumsy-bookend.com",
  port: 9984.93,
};
```

### `models.InputResponseInputGooglePubsub`

```typescript
const value: models.InputResponseInputGooglePubsub = {
  id: "<id>",
  type: "google_pubsub",
  topicName: "<value>",
  subscriptionName: "<value>",
};
```

### `models.InputResponseInputCribl`

```typescript
const value: models.InputResponseInputCribl = {
  id: "<id>",
  type: "cribl",
};
```

### `models.InputResponseInputCriblTcp`

```typescript
const value: models.InputResponseInputCriblTcp = {
  id: "<id>",
  type: "cribl_tcp",
  host: "lavish-scarification.com",
  port: 386.13,
};
```

### `models.InputResponseInputCriblHttp`

```typescript
const value: models.InputResponseInputCriblHttp = {
  id: "<id>",
  type: "cribl_http",
  host: "respectful-allocation.org",
  port: 6569.6,
};
```

### `models.InputResponseInputCriblLakeHttp`

```typescript
const value: models.InputResponseInputCriblLakeHttp = {
  id: "<id>",
  type: "cribl_lake_http",
  host: "live-grandpa.info",
  port: 2656.06,
};
```

### `models.InputResponseInputTcpjson`

```typescript
const value: models.InputResponseInputTcpjson = {
  id: "<id>",
  type: "tcpjson",
  host: "legal-finer.org",
  port: 2118.91,
};
```

### `models.InputResponseInputSystemMetrics`

```typescript
const value: models.InputResponseInputSystemMetrics = {
  id: "<id>",
  type: "system_metrics",
};
```

### `models.InputResponseInputSystemState`

```typescript
const value: models.InputResponseInputSystemState = {
  id: "<id>",
  type: "system_state",
};
```

### `models.InputResponseInputKubeMetrics`

```typescript
const value: models.InputResponseInputKubeMetrics = {
  id: "<id>",
  type: "kube_metrics",
};
```

### `models.InputResponseInputKubeLogs`

```typescript
const value: models.InputResponseInputKubeLogs = {
  id: "<id>",
  type: "kube_logs",
};
```

### `models.InputResponseInputKubeEvents`

```typescript
const value: models.InputResponseInputKubeEvents = {
  id: "<id>",
  type: "kube_events",
};
```

### `models.InputResponseInputWindowsMetrics`

```typescript
const value: models.InputResponseInputWindowsMetrics = {
  id: "<id>",
  type: "windows_metrics",
};
```

### `models.InputResponseInputCrowdstrike`

```typescript
const value: models.InputResponseInputCrowdstrike = {
  id: "<id>",
  type: "crowdstrike",
  queueName: "<value>",
};
```

### `models.InputResponseInputDatadogAgent`

```typescript
const value: models.InputResponseInputDatadogAgent = {
  id: "<id>",
  type: "datadog_agent",
  host: "memorable-trolley.com",
  port: 2342.44,
};
```

### `models.InputResponseInputDatagen`

```typescript
const value: models.InputResponseInputDatagen = {
  id: "<id>",
  type: "datagen",
  samples: [
    {
      sample: "<value>",
      eventsPerSec: 7619.91,
    },
  ],
};
```

### `models.InputResponseInputHttpRaw`

```typescript
const value: models.InputResponseInputHttpRaw = {
  id: "<id>",
  type: "http_raw",
  host: "suburban-brace.info",
  port: 5515.13,
};
```

### `models.InputResponseInputKinesis`

```typescript
const value: models.InputResponseInputKinesis = {
  id: "<id>",
  type: "kinesis",
  streamName: "<value>",
  region: "<value>",
};
```

### `models.InputResponseInputCriblmetrics`

```typescript
const value: models.InputResponseInputCriblmetrics = {
  id: "<id>",
  type: "criblmetrics",
};
```

### `models.InputResponseInputMetrics`

```typescript
const value: models.InputResponseInputMetrics = {
  id: "<id>",
  type: "metrics",
  host: "shady-litter.org",
};
```

### `models.InputResponseInputS3`

```typescript
const value: models.InputResponseInputS3 = {
  id: "<id>",
  type: "s3",
  queueName: "<value>",
};
```

### `models.InputResponseInputS3Inventory`

```typescript
const value: models.InputResponseInputS3Inventory = {
  id: "<id>",
  type: "s3_inventory",
  queueName: "<value>",
};
```

### `models.InputResponseInputSnmp`

```typescript
const value: models.InputResponseInputSnmp = {
  id: "<id>",
  type: "snmp",
  host: "alert-omelet.org",
  port: 5731.02,
};
```

### `models.InputResponseInputOpenTelemetry`

```typescript
const value: models.InputResponseInputOpenTelemetry = {
  id: "<id>",
  type: "open_telemetry",
  host: "rosy-kielbasa.name",
  port: 1173.04,
};
```

### `models.InputResponseInputModelDrivenTelemetry`

```typescript
const value: models.InputResponseInputModelDrivenTelemetry = {
  id: "<id>",
  type: "model_driven_telemetry",
  host: "ecstatic-hunt.com",
  port: 6805.26,
};
```

### `models.InputResponseInputSqs`

```typescript
const value: models.InputResponseInputSqs = {
  id: "<id>",
  type: "sqs",
  queueName: "<value>",
  queueType: "fifo",
};
```

### `models.InputResponseInputSyslogUnion`

```typescript
const value: models.InputResponseInputSyslogUnion = {
  id: "<id>",
  type: "<value>",
  host: "brisk-bend.com",
  udpPort: 3478.24,
};
```

### `models.InputResponseInputFile`

```typescript
const value: models.InputResponseInputFile = {
  id: "<id>",
  type: "file",
};
```

### `models.InputResponseInputTcp`

```typescript
const value: models.InputResponseInputTcp = {
  id: "<id>",
  type: "tcp",
  host: "impolite-doubter.name",
  port: 9015.14,
};
```

### `models.InputResponseInputAppscope`

```typescript
const value: models.InputResponseInputAppscope = {
  id: "<id>",
  type: "appscope",
};
```

### `models.InputResponseInputWef`

```typescript
const value: models.InputResponseInputWef = {
  id: "<id>",
  type: "wef",
  host: "impractical-alliance.net",
  port: 1644.84,
  subscriptions: [
    {
      subscriptionName: "<value>",
      contentFormat: "RenderedText",
      heartbeatInterval: 2930.43,
      batchTimeout: 687.65,
      targets: [
        "<value 1>",
      ],
    },
  ],
};
```

### `models.InputResponseInputWinEventLogs`

```typescript
const value: models.InputResponseInputWinEventLogs = {
  id: "<id>",
  type: "win_event_logs",
  logNames: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.InputResponseInputAppleUnifiedLogs`

```typescript
const value: models.InputResponseInputAppleUnifiedLogs = {
  id: "<id>",
  type: "apple_unified_logs",
  predicate: "<value>",
};
```

### `models.InputResponseInputRawUdp`

```typescript
const value: models.InputResponseInputRawUdp = {
  id: "<id>",
  type: "raw_udp",
  host: "silent-taxicab.org",
  port: 8462.47,
};
```

### `models.InputResponseInputJournalFiles`

```typescript
const value: models.InputResponseInputJournalFiles = {
  id: "<id>",
  type: "journal_files",
  path: "/Users",
  journals: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.InputResponseInputWiz`

```typescript
const value: models.InputResponseInputWiz = {
  id: "<id>",
  type: "wiz",
  endpoint: "<value>",
  authUrl: "https://mindless-hammock.com",
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

### `models.InputResponseInputOpenai`

```typescript
const value: models.InputResponseInputOpenai = {
  id: "<id>",
  type: "openai",
  contentConfig: [
    {
      contentType: "<value>",
      collectPath: "<value>",
      requestParams: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      paginationType: "response_header_link",
      cronSchedule: "<value>",
      earliest: "<value>",
      latest: "<value>",
    },
  ],
  textSecret: "<value>",
};
```

### `models.InputResponseInputWizWebhook`

```typescript
const value: models.InputResponseInputWizWebhook = {
  id: "<id>",
  type: "wiz_webhook",
  host: "strange-honesty.com",
  port: 6148.46,
};
```

### `models.InputResponseInputNetflow`

```typescript
const value: models.InputResponseInputNetflow = {
  id: "<id>",
  type: "netflow",
  host: "sentimental-starboard.biz",
  port: 7805.65,
};
```

### `models.InputResponseInputSecurityLake`

```typescript
const value: models.InputResponseInputSecurityLake = {
  id: "<id>",
  type: "security_lake",
  queueName: "<value>",
};
```

### `models.InputResponseInputServicenowTable`

```typescript
const value: models.InputResponseInputServicenowTable = {
  id: "<id>",
  type: "servicenow_table",
  instance: "<value>",
  tableName: "<value>",
  cronSchedule: "<value>",
  earliest: "<value>",
  latest: "<value>",
};
```

### `models.InputResponseInputZscalerHec`

```typescript
const value: models.InputResponseInputZscalerHec = {
  id: "<id>",
  type: "zscaler_hec",
  host: "rundown-skyscraper.name",
  port: 1140.44,
  hecAPI: "<value>",
};
```

### `models.InputResponseInputCloudflareHec`

```typescript
const value: models.InputResponseInputCloudflareHec = {
  id: "<id>",
  type: "cloudflare_hec",
  host: "parched-venom.net",
  port: 396.4,
  hecAPI: "<value>",
};
```

### `models.InputResponseInputOpenaiComplianceLogs`

```typescript
const value: models.InputResponseInputOpenaiComplianceLogs = {
  id: "<id>",
  type: "openai_compliance_logs",
  textSecret: "<value>",
  accountType: "organization",
  cronSchedule: "<value>",
};
```

### `models.InputResponseInputAnthropicCompliance`

```typescript
const value: models.InputResponseInputAnthropicCompliance = {
  id: "<id>",
  type: "anthropic_compliance",
  textSecret: "<value>",
  contentConfig: [
    {
      contentType: "<value>",
      cronSchedule: "<value>",
      earliest: "<value>",
      latest: "<value>",
    },
  ],
};
```

### `models.InputResponseInputOkta`

```typescript
const value: models.InputResponseInputOkta = {
  id: "<id>",
  type: "okta",
  oktaDomain: "<value>",
  textSecret: "<value>",
};
```

