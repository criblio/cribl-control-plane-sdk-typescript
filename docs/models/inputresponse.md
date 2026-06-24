# InputResponse

Source configuration with optional Notifications and runtime status.


## Supported Types

### `models.InputResponseInputCollection`

```typescript
const value: models.InputResponseInputCollection = {
  type: "collection",
};
```

### `models.InputResponseInputKafka`

```typescript
const value: models.InputResponseInputKafka = {
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
  type: "http",
  host: "terrible-summer.info",
  port: 9468.05,
};
```

### `models.InputResponseInputSplunk`

```typescript
const value: models.InputResponseInputSplunk = {
  type: "splunk",
  host: "corny-translation.name",
  port: 9821.99,
};
```

### `models.InputResponseInputSplunkSearch`

```typescript
const value: models.InputResponseInputSplunkSearch = {
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
  type: "splunk_hec",
  host: "both-opera.info",
  port: 517.57,
  splunkHecAPI: "<value>",
};
```

### `models.InputResponseInputAzureBlob`

```typescript
const value: models.InputResponseInputAzureBlob = {
  type: "azure_blob",
  queueName: "<value>",
};
```

### `models.InputResponseInputElastic`

```typescript
const value: models.InputResponseInputElastic = {
  type: "elastic",
  host: "incomplete-lashes.net",
  port: 7417.8,
  elasticAPI: "<value>",
};
```

### `models.InputResponseInputConfluentCloud`

```typescript
const value: models.InputResponseInputConfluentCloud = {
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
  type: "grafana",
  host: "crushing-stump.info",
  port: 4014.77,
  lokiAPI: "<value>",
};
```

### `models.InputResponseInputLoki`

```typescript
const value: models.InputResponseInputLoki = {
  type: "loki",
  host: "authentic-viability.biz",
  port: 7309.81,
  lokiAPI: "<value>",
};
```

### `models.InputResponseInputPrometheusRw`

```typescript
const value: models.InputResponseInputPrometheusRw = {
  type: "prometheus_rw",
  host: "quiet-wasabi.org",
  port: 5858.15,
  prometheusAPI: "<value>",
};
```

### `models.InputResponseInputPrometheus`

```typescript
const value: models.InputResponseInputPrometheus = {
  type: "prometheus",
  interval: 7728.91,
  logLevel: "debug",
};
```

### `models.InputResponseInputEdgePrometheus`

```typescript
const value: models.InputResponseInputEdgePrometheus = {
  type: "edge_prometheus",
  discoveryType: "ec2",
  interval: 785.78,
};
```

### `models.InputResponseInputOffice365Mgmt`

```typescript
const value: models.InputResponseInputOffice365Mgmt = {
  type: "office365_mgmt",
  planType: "dod",
  tenantId: "<id>",
  appId: "<id>",
};
```

### `models.InputResponseInputOffice365Service`

```typescript
const value: models.InputResponseInputOffice365Service = {
  type: "office365_service",
  tenantId: "<id>",
  appId: "<id>",
};
```

### `models.InputResponseInputOffice365MsgTrace`

```typescript
const value: models.InputResponseInputOffice365MsgTrace = {
  type: "office365_msg_trace",
  url: "https://vast-comparison.biz",
  interval: 902348,
};
```

### `models.InputResponseInputMicrosoftGraph`

```typescript
const value: models.InputResponseInputMicrosoftGraph = {
  type: "microsoft_graph",
  url: "https://tattered-piglet.net",
  interval: 86198,
};
```

### `models.InputResponseInputEventhub`

```typescript
const value: models.InputResponseInputEventhub = {
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
  type: "eventhub_amqp",
  consumerGroup: "<value>",
  checkpointing: {
    blobStore: {
      containerName: "<value>",
    },
  },
};
```

### `models.InputResponseInputExec`

```typescript
const value: models.InputResponseInputExec = {
  type: "exec",
  command: "<value>",
};
```

### `models.InputResponseInputFirehose`

```typescript
const value: models.InputResponseInputFirehose = {
  type: "firehose",
  host: "clumsy-bookend.com",
  port: 9984.93,
};
```

### `models.InputResponseInputGooglePubsub`

```typescript
const value: models.InputResponseInputGooglePubsub = {
  type: "google_pubsub",
  topicName: "<value>",
  subscriptionName: "<value>",
};
```

### `models.InputResponseInputCribl`

```typescript
const value: models.InputResponseInputCribl = {
  type: "cribl",
};
```

### `models.InputResponseInputCriblTcp`

```typescript
const value: models.InputResponseInputCriblTcp = {
  type: "cribl_tcp",
  host: "lavish-scarification.com",
  port: 386.13,
};
```

### `models.InputResponseInputCriblHttp`

```typescript
const value: models.InputResponseInputCriblHttp = {
  type: "cribl_http",
  host: "respectful-allocation.org",
  port: 6569.6,
};
```

### `models.InputResponseInputCriblLakeHttp`

```typescript
const value: models.InputResponseInputCriblLakeHttp = {
  type: "cribl_lake_http",
  host: "live-grandpa.info",
  port: 2656.06,
};
```

### `models.InputResponseInputTcpjson`

```typescript
const value: models.InputResponseInputTcpjson = {
  type: "tcpjson",
  host: "legal-finer.org",
  port: 2118.91,
};
```

### `models.InputResponseInputSystemMetrics`

```typescript
const value: models.InputResponseInputSystemMetrics = {
  type: "system_metrics",
};
```

### `models.InputResponseInputSystemState`

```typescript
const value: models.InputResponseInputSystemState = {
  type: "system_state",
};
```

### `models.InputResponseInputKubeMetrics`

```typescript
const value: models.InputResponseInputKubeMetrics = {
  type: "kube_metrics",
};
```

### `models.InputResponseInputKubeLogs`

```typescript
const value: models.InputResponseInputKubeLogs = {
  type: "kube_logs",
};
```

### `models.InputResponseInputKubeEvents`

```typescript
const value: models.InputResponseInputKubeEvents = {
  type: "kube_events",
};
```

### `models.InputResponseInputWindowsMetrics`

```typescript
const value: models.InputResponseInputWindowsMetrics = {
  type: "windows_metrics",
};
```

### `models.InputResponseInputCrowdstrike`

```typescript
const value: models.InputResponseInputCrowdstrike = {
  type: "crowdstrike",
  queueName: "<value>",
};
```

### `models.InputResponseInputDatadogAgent`

```typescript
const value: models.InputResponseInputDatadogAgent = {
  type: "datadog_agent",
  host: "memorable-trolley.com",
  port: 2342.44,
};
```

### `models.InputResponseInputDatagen`

```typescript
const value: models.InputResponseInputDatagen = {
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
  type: "http_raw",
  host: "suburban-brace.info",
  port: 5515.13,
};
```

### `models.InputResponseInputKinesis`

```typescript
const value: models.InputResponseInputKinesis = {
  type: "kinesis",
  streamName: "<value>",
  region: "<value>",
};
```

### `models.InputResponseInputCriblmetrics`

```typescript
const value: models.InputResponseInputCriblmetrics = {
  type: "criblmetrics",
};
```

### `models.InputResponseInputMetrics`

```typescript
const value: models.InputResponseInputMetrics = {
  type: "metrics",
  host: "shady-litter.org",
};
```

### `models.InputResponseInputS3`

```typescript
const value: models.InputResponseInputS3 = {
  type: "s3",
  queueName: "<value>",
};
```

### `models.InputResponseInputS3Inventory`

```typescript
const value: models.InputResponseInputS3Inventory = {
  type: "s3_inventory",
  queueName: "<value>",
};
```

### `models.InputResponseInputSnmp`

```typescript
const value: models.InputResponseInputSnmp = {
  type: "snmp",
  host: "alert-omelet.org",
  port: 5731.02,
};
```

### `models.InputResponseInputOpenTelemetry`

```typescript
const value: models.InputResponseInputOpenTelemetry = {
  type: "open_telemetry",
  host: "rosy-kielbasa.name",
  port: 1173.04,
};
```

### `models.InputResponseInputModelDrivenTelemetry`

```typescript
const value: models.InputResponseInputModelDrivenTelemetry = {
  type: "model_driven_telemetry",
  host: "ecstatic-hunt.com",
  port: 6805.26,
};
```

### `models.InputResponseInputSqs`

```typescript
const value: models.InputResponseInputSqs = {
  type: "sqs",
  queueName: "<value>",
  queueType: "fifo",
};
```

### `models.InputResponseInputSyslogUnion`

```typescript
const value: models.InputResponseInputSyslogUnion = {
  type: "syslog",
  host: "brisk-bend.com",
  udpPort: 3478.24,
};
```

### `models.InputResponseInputFile`

```typescript
const value: models.InputResponseInputFile = {
  type: "file",
};
```

### `models.InputResponseInputTcp`

```typescript
const value: models.InputResponseInputTcp = {
  type: "tcp",
  host: "impolite-doubter.name",
  port: 9015.14,
};
```

### `models.InputResponseInputAppscope`

```typescript
const value: models.InputResponseInputAppscope = {
  type: "appscope",
};
```

### `models.InputResponseInputWef`

```typescript
const value: models.InputResponseInputWef = {
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
  type: "apple_unified_logs",
  predicate: "<value>",
};
```

### `models.InputResponseInputRawUdp`

```typescript
const value: models.InputResponseInputRawUdp = {
  type: "raw_udp",
  host: "silent-taxicab.org",
  port: 8462.47,
};
```

### `models.InputResponseInputJournalFiles`

```typescript
const value: models.InputResponseInputJournalFiles = {
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
  type: "wiz_webhook",
  host: "strange-honesty.com",
  port: 6148.46,
};
```

### `models.InputResponseInputNetflow`

```typescript
const value: models.InputResponseInputNetflow = {
  type: "netflow",
  host: "sentimental-starboard.biz",
  port: 7805.65,
};
```

### `models.InputResponseInputSecurityLake`

```typescript
const value: models.InputResponseInputSecurityLake = {
  type: "security_lake",
  queueName: "<value>",
};
```

### `models.InputResponseInputServicenowTable`

```typescript
const value: models.InputResponseInputServicenowTable = {
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
  type: "zscaler_hec",
  host: "rundown-skyscraper.name",
  port: 1140.44,
  hecAPI: "<value>",
};
```

### `models.InputResponseInputCloudflareHec`

```typescript
const value: models.InputResponseInputCloudflareHec = {
  type: "cloudflare_hec",
  host: "parched-venom.net",
  port: 396.4,
  hecAPI: "<value>",
};
```

### `models.InputResponseInputOpenaiComplianceLogs`

```typescript
const value: models.InputResponseInputOpenaiComplianceLogs = {
  type: "openai_compliance_logs",
  textSecret: "<value>",
  accountType: "organization",
  cronSchedule: "<value>",
};
```

### `models.InputResponseInputAnthropicCompliance`

```typescript
const value: models.InputResponseInputAnthropicCompliance = {
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
  type: "okta",
  oktaDomain: "<value>",
  textSecret: "<value>",
};
```

