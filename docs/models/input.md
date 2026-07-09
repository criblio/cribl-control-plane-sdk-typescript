# Input


## Supported Types

### `models.InputCollectionInput`

```typescript
const value: models.InputCollectionInput = {
  type: "collection",
};
```

### `models.InputKafkaInput`

```typescript
const value: models.InputKafkaInput = {
  type: "kafka",
  brokers: [],
  topics: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.InputMskInput`

```typescript
const value: models.InputMskInput = {
  type: "msk",
  brokers: [],
  topics: [],
  awsAuthenticationMethod: "<value>",
  region: "<value>",
};
```

### `models.InputHttpInput`

```typescript
const value: models.InputHttpInput = {
  type: "http",
  host: "basic-experience.net",
  port: 372.97,
};
```

### `models.InputSplunkInput`

```typescript
const value: models.InputSplunkInput = {
  type: "splunk",
  host: "dim-label.name",
  port: 9729.46,
};
```

### `models.InputSplunkSearchInput`

```typescript
const value: models.InputSplunkSearchInput = {
  type: "splunk_search",
  searchHead: "<value>",
  search: "<value>",
  cronSchedule: "<value>",
  endpoint: "<value>",
  outputMode: "json",
  authType: "credentialsSecret",
};
```

### `models.InputSplunkHecInput`

```typescript
const value: models.InputSplunkHecInput = {
  type: "splunk_hec",
  host: "funny-tooth.info",
  port: 9477.17,
  splunkHecAPI: "<value>",
};
```

### `models.InputAzureBlobInput`

```typescript
const value: models.InputAzureBlobInput = {
  type: "azure_blob",
  queueName: "<value>",
};
```

### `models.InputElasticInput`

```typescript
const value: models.InputElasticInput = {
  type: "elastic",
  host: "yummy-platter.net",
  port: 3695.32,
  elasticAPI: "<value>",
};
```

### `models.InputConfluentCloudInput`

```typescript
const value: models.InputConfluentCloudInput = {
  type: "confluent_cloud",
  brokers: [],
  topics: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.InputGrafanaInputUnion`

```typescript
const value: models.InputGrafanaInputUnion = {
  type: "grafana",
  host: "majestic-bakeware.name",
  port: 27.66,
  prometheusAPI: "<value>",
};
```

### `models.InputLokiInput`

```typescript
const value: models.InputLokiInput = {
  type: "loki",
  host: "tender-settler.name",
  port: 4635.9,
  lokiAPI: "<value>",
};
```

### `models.InputPrometheusRwInput`

```typescript
const value: models.InputPrometheusRwInput = {
  type: "prometheus_rw",
  host: "unsightly-exhaust.com",
  port: 4244.47,
  prometheusAPI: "<value>",
};
```

### `models.InputPrometheusInput`

```typescript
const value: models.InputPrometheusInput = {
  type: "prometheus",
  interval: 7038.06,
  logLevel: "info",
};
```

### `models.InputEdgePrometheusInput`

```typescript
const value: models.InputEdgePrometheusInput = {
  type: "edge_prometheus",
  discoveryType: "http_sd",
  interval: 1916.25,
};
```

### `models.InputOffice365MgmtInput`

```typescript
const value: models.InputOffice365MgmtInput = {
  type: "office365_mgmt",
  planType: "dod",
  tenantId: "<id>",
  appId: "<id>",
};
```

### `models.InputOffice365ServiceInput`

```typescript
const value: models.InputOffice365ServiceInput = {
  type: "office365_service",
  tenantId: "<id>",
  appId: "<id>",
};
```

### `models.InputOffice365MsgTraceInput`

```typescript
const value: models.InputOffice365MsgTraceInput = {
  type: "office365_msg_trace",
  url: "https://descriptive-coal.info/",
  interval: 366543,
};
```

### `models.InputMicrosoftGraphInput`

```typescript
const value: models.InputMicrosoftGraphInput = {
  type: "microsoft_graph",
  url: "https://soft-armchair.biz",
  interval: 58773,
};
```

### `models.InputEventhubInput`

```typescript
const value: models.InputEventhubInput = {
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

### `models.InputEventhubAmqpInput`

```typescript
const value: models.InputEventhubAmqpInput = {
  type: "eventhub_amqp",
  consumerGroup: "<value>",
  checkpointing: {
    blobStore: {
      containerName: "<value>",
    },
  },
};
```

### `models.InputExecInput`

```typescript
const value: models.InputExecInput = {
  type: "exec",
  command: "<value>",
};
```

### `models.InputFirehoseInput`

```typescript
const value: models.InputFirehoseInput = {
  type: "firehose",
  host: "instructive-battle.com",
  port: 2100.54,
};
```

### `models.InputGooglePubsubInput`

```typescript
const value: models.InputGooglePubsubInput = {
  type: "google_pubsub",
  topicName: "<value>",
  subscriptionName: "<value>",
};
```

### `models.InputCriblInput`

```typescript
const value: models.InputCriblInput = {
  type: "cribl",
};
```

### `models.InputCriblTcpInput`

```typescript
const value: models.InputCriblTcpInput = {
  type: "cribl_tcp",
  host: "sophisticated-reporter.name",
  port: 4249.56,
};
```

### `models.InputCriblHttpInput`

```typescript
const value: models.InputCriblHttpInput = {
  type: "cribl_http",
  host: "remarkable-brochure.com",
  port: 9025.75,
};
```

### `models.InputCriblLakeHttpInput`

```typescript
const value: models.InputCriblLakeHttpInput = {
  type: "cribl_lake_http",
  host: "sad-beret.info",
  port: 4854.25,
};
```

### `models.InputTcpjsonInput`

```typescript
const value: models.InputTcpjsonInput = {
  type: "tcpjson",
  host: "taut-brush.com",
  port: 8094.05,
};
```

### `models.InputSystemMetricsInput`

```typescript
const value: models.InputSystemMetricsInput = {
  type: "system_metrics",
};
```

### `models.InputSystemStateInput`

```typescript
const value: models.InputSystemStateInput = {
  type: "system_state",
};
```

### `models.InputKubeMetricsInput`

```typescript
const value: models.InputKubeMetricsInput = {
  type: "kube_metrics",
};
```

### `models.InputKubeLogsInput`

```typescript
const value: models.InputKubeLogsInput = {
  type: "kube_logs",
};
```

### `models.InputKubeEventsInput`

```typescript
const value: models.InputKubeEventsInput = {
  type: "kube_events",
};
```

### `models.InputWindowsMetricsInput`

```typescript
const value: models.InputWindowsMetricsInput = {
  type: "windows_metrics",
};
```

### `models.InputCrowdstrikeInput`

```typescript
const value: models.InputCrowdstrikeInput = {
  type: "crowdstrike",
  queueName: "<value>",
};
```

### `models.InputDatadogAgentInput`

```typescript
const value: models.InputDatadogAgentInput = {
  type: "datadog_agent",
  host: "rich-marathon.biz",
  port: 4061.09,
};
```

### `models.InputDatagenInput`

```typescript
const value: models.InputDatagenInput = {
  type: "datagen",
  samples: [],
};
```

### `models.InputHttpRawInput`

```typescript
const value: models.InputHttpRawInput = {
  type: "http_raw",
  host: "reasonable-awareness.com",
  port: 416.19,
};
```

### `models.InputKinesisInput`

```typescript
const value: models.InputKinesisInput = {
  type: "kinesis",
  streamName: "<value>",
  region: "<value>",
};
```

### `models.InputCriblmetricsInput`

```typescript
const value: models.InputCriblmetricsInput = {
  type: "criblmetrics",
};
```

### `models.InputMetricsInput`

```typescript
const value: models.InputMetricsInput = {
  type: "metrics",
  host: "marvelous-toaster.org",
};
```

### `models.InputS3Input`

```typescript
const value: models.InputS3Input = {
  type: "s3",
  queueName: "<value>",
};
```

### `models.InputS3InventoryInput`

```typescript
const value: models.InputS3InventoryInput = {
  type: "s3_inventory",
  queueName: "<value>",
};
```

### `models.InputSnmpInput`

```typescript
const value: models.InputSnmpInput = {
  type: "snmp",
  host: "hot-backbone.info",
  port: 7927.64,
};
```

### `models.InputOpenTelemetryInput`

```typescript
const value: models.InputOpenTelemetryInput = {
  type: "open_telemetry",
  host: "thrifty-perp.org",
  port: 9006.95,
};
```

### `models.InputModelDrivenTelemetryInput`

```typescript
const value: models.InputModelDrivenTelemetryInput = {
  type: "model_driven_telemetry",
  host: "illustrious-catalyst.biz",
  port: 661.76,
};
```

### `models.InputSqsInput`

```typescript
const value: models.InputSqsInput = {
  type: "sqs",
  queueName: "<value>",
  queueType: "standard",
};
```

### `models.InputSyslogInputUnion`

```typescript
const value: models.InputSyslogInputUnion = {
  type: "<value>",
  host: "variable-tackle.net",
  tcpPort: 3569.95,
};
```

### `models.InputFileInput`

```typescript
const value: models.InputFileInput = {
  type: "file",
};
```

### `models.InputTcpInput`

```typescript
const value: models.InputTcpInput = {
  type: "tcp",
  host: "triangular-bob.biz",
  port: 5853.7,
};
```

### `models.InputAppscopeInput`

```typescript
const value: models.InputAppscopeInput = {
  type: "appscope",
};
```

### `models.InputWefInput`

```typescript
const value: models.InputWefInput = {
  type: "wef",
  host: "smug-confusion.net",
  port: 2554.5,
  subscriptions: [
    {
      subscriptionName: "<value>",
      contentFormat: "Raw",
      heartbeatInterval: 8832.01,
      batchTimeout: 7162.12,
      targets: [
        "<value 1>",
      ],
    },
  ],
};
```

### `models.InputWinEventLogsInput`

```typescript
const value: models.InputWinEventLogsInput = {
  type: "win_event_logs",
  logNames: [
    "<value 1>",
  ],
};
```

### `models.InputAppleUnifiedLogsInput`

```typescript
const value: models.InputAppleUnifiedLogsInput = {
  type: "apple_unified_logs",
  predicate: "<value>",
};
```

### `models.InputRawUdpInput`

```typescript
const value: models.InputRawUdpInput = {
  type: "raw_udp",
  host: "fake-phrase.net",
  port: 5050.39,
};
```

### `models.InputJournalFilesInput`

```typescript
const value: models.InputJournalFilesInput = {
  type: "journal_files",
  path: "/var/yp",
  journals: [],
};
```

### `models.InputWizInput`

```typescript
const value: models.InputWizInput = {
  type: "wiz",
  endpoint: "<value>",
  authUrl: "https://impeccable-custom.name",
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

### `models.InputOpenaiInput`

```typescript
const value: models.InputOpenaiInput = {
  type: "openai",
  contentConfig: [],
  textSecret: "<value>",
};
```

### `models.InputWizWebhookInput`

```typescript
const value: models.InputWizWebhookInput = {
  type: "wiz_webhook",
  host: "pleasant-coordination.com",
  port: 9904.19,
};
```

### `models.InputNetflowInput`

```typescript
const value: models.InputNetflowInput = {
  type: "netflow",
  host: "far-flung-curl.org",
  port: 1526.63,
};
```

### `models.InputSecurityLakeInput`

```typescript
const value: models.InputSecurityLakeInput = {
  type: "security_lake",
  queueName: "<value>",
};
```

### `models.InputBedrockS3Input`

```typescript
const value: models.InputBedrockS3Input = {
  type: "bedrock_s3",
  queueName: "<value>",
};
```

### `models.InputServicenowTableInput`

```typescript
const value: models.InputServicenowTableInput = {
  type: "servicenow_table",
  instance: "<value>",
  tableName: "<value>",
  cronSchedule: "<value>",
  earliest: "<value>",
  latest: "<value>",
};
```

### `models.InputZscalerHecInput`

```typescript
const value: models.InputZscalerHecInput = {
  type: "zscaler_hec",
  host: "everlasting-manner.com",
  port: 9350.99,
  hecAPI: "<value>",
};
```

### `models.InputCloudflareHecInput`

```typescript
const value: models.InputCloudflareHecInput = {
  type: "cloudflare_hec",
  host: "limping-resolve.info",
  port: 8947.91,
  hecAPI: "<value>",
};
```

### `models.InputSysdigHecInput`

```typescript
const value: models.InputSysdigHecInput = {
  type: "sysdig_hec",
  host: "rusty-nucleotidase.com",
  port: 6154.42,
  hecAPI: "<value>",
};
```

### `models.InputUpwindHecInput`

```typescript
const value: models.InputUpwindHecInput = {
  type: "upwind_hec",
  host: "shiny-ceramic.info",
  port: 718.92,
  hecAPI: "<value>",
};
```

### `models.InputOpenaiComplianceLogsInput`

```typescript
const value: models.InputOpenaiComplianceLogsInput = {
  type: "openai_compliance_logs",
  textSecret: "<value>",
  accountType: "organization",
  cronSchedule: "<value>",
};
```

### `models.InputAnthropicComplianceInput`

```typescript
const value: models.InputAnthropicComplianceInput = {
  type: "anthropic_compliance",
  textSecret: "<value>",
  contentConfig: [
    {
      contentType: "project_details",
      cronSchedule: "<value>",
    },
  ],
};
```

### `models.InputOktaInput`

```typescript
const value: models.InputOktaInput = {
  type: "okta",
  oktaDomain: "<value>",
  textSecret: "<value>",
};
```

