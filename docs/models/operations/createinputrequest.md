# CreateInputRequest

New Source object


## Supported Types

### `models.InputCollection`

```typescript
const value: models.InputCollection = {
  id: "<id>",
};
```

### `operations.InputKafka`

```typescript
const value: operations.InputKafka = {
  id: "<id>",
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
  brokers: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  topics: [
    "<value 1>",
    "<value 2>",
  ],
  region: "<value>",
};
```

### `operations.InputHttp`

```typescript
const value: operations.InputHttp = {
  id: "<id>",
  port: 414.02,
};
```

### `operations.InputSplunk`

```typescript
const value: operations.InputSplunk = {
  id: "<id>",
  port: 3685.58,
};
```

### `operations.InputSplunkSearch`

```typescript
const value: operations.InputSplunkSearch = {
  id: "<id>",
  search: "<value>",
};
```

### `operations.InputSplunkHec`

```typescript
const value: operations.InputSplunkHec = {
  id: "<id>",
  port: 6235.49,
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
  port: 7766.75,
};
```

### `operations.InputConfluentCloud`

```typescript
const value: operations.InputConfluentCloud = {
  id: "<id>",
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

### `operations.InputGrafanaUnion`

```typescript
const value: operations.InputGrafanaUnion = {
  id: "<id>",
  disabled: false,
  sendToRoutes: true,
  pqEnabled: false,
  host: "0.0.0.0",
  port: 7433.63,
  maxActiveReq: 256,
  maxRequestsPerSocket: 0,
  enableProxyHeader: false,
  captureHeaders: false,
  activityLogSampleRate: 100,
  requestTimeout: 0,
  socketTimeout: 0,
  keepAliveTimeout: 5,
  enableHealthCheck: false,
  ipAllowlistRegex: "/.*/",
  ipDenylistRegex: "/^$/",
  prometheusAPI: "/api/prom/push",
  lokiAPI: "/loki/api/v1/push",
};
```

### `operations.InputLoki`

```typescript
const value: operations.InputLoki = {
  id: "<id>",
  port: 7867.19,
};
```

### `operations.InputPrometheusRw`

```typescript
const value: operations.InputPrometheusRw = {
  id: "<id>",
  port: 7076.18,
};
```

### `operations.InputPrometheus`

```typescript
const value: operations.InputPrometheus = {
  id: "<id>",
};
```

### `operations.InputEdgePrometheus`

```typescript
const value: operations.InputEdgePrometheus = {
  id: "<id>",
};
```

### `operations.InputOffice365Mgmt`

```typescript
const value: operations.InputOffice365Mgmt = {
  id: "<id>",
  tenantId: "<id>",
  appId: "<id>",
};
```

### `operations.InputOffice365Service`

```typescript
const value: operations.InputOffice365Service = {
  id: "<id>",
  tenantId: "<id>",
  appId: "<id>",
};
```

### `operations.InputOffice365MsgTrace`

```typescript
const value: operations.InputOffice365MsgTrace = {
  id: "<id>",
};
```

### `operations.InputEventhub`

```typescript
const value: operations.InputEventhub = {
  id: "<id>",
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
  port: 6483.42,
};
```

### `operations.InputGooglePubsub`

```typescript
const value: operations.InputGooglePubsub = {
  id: "<id>",
  topicName: "<value>",
  subscriptionName: "<value>",
};
```

### `models.InputCribl`

```typescript
const value: models.InputCribl = {
  id: "<id>",
  type: "cribl",
};
```

### `operations.InputCriblTcp`

```typescript
const value: operations.InputCriblTcp = {
  id: "<id>",
  port: 374.03,
};
```

### `operations.InputCriblHttp`

```typescript
const value: operations.InputCriblHttp = {
  id: "<id>",
  port: 6394.59,
};
```

### `operations.InputCriblLakeHttp`

```typescript
const value: operations.InputCriblLakeHttp = {
  id: "<id>",
  port: 3212.39,
};
```

### `operations.InputTcpjson`

```typescript
const value: operations.InputTcpjson = {
  id: "<id>",
  port: 2450.84,
};
```

### `models.InputSystemMetrics`

```typescript
const value: models.InputSystemMetrics = {
  id: "<id>",
  type: "system_metrics",
};
```

### `models.InputSystemState`

```typescript
const value: models.InputSystemState = {
  id: "<id>",
  type: "system_state",
};
```

### `models.InputKubeMetrics`

```typescript
const value: models.InputKubeMetrics = {
  id: "<id>",
  type: "kube_metrics",
};
```

### `models.InputKubeLogs`

```typescript
const value: models.InputKubeLogs = {
  id: "<id>",
  type: "kube_logs",
};
```

### `models.InputKubeEvents`

```typescript
const value: models.InputKubeEvents = {
  id: "<id>",
  type: "kube_events",
};
```

### `models.InputWindowsMetrics`

```typescript
const value: models.InputWindowsMetrics = {
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
  port: 1619.41,
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
    },
  ],
};
```

### `operations.InputHttpRaw`

```typescript
const value: operations.InputHttpRaw = {
  id: "<id>",
  port: 4097.53,
};
```

### `operations.InputKinesis`

```typescript
const value: operations.InputKinesis = {
  id: "<id>",
  streamName: "<value>",
  region: "<value>",
};
```

### `models.InputCriblmetrics`

```typescript
const value: models.InputCriblmetrics = {
  id: "<id>",
  type: "criblmetrics",
};
```

### `operations.InputMetrics`

```typescript
const value: operations.InputMetrics = {
  id: "<id>",
  type: "metrics",
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
};
```

### `operations.InputOpenTelemetry`

```typescript
const value: operations.InputOpenTelemetry = {
  id: "<id>",
};
```

### `operations.InputModelDrivenTelemetry`

```typescript
const value: operations.InputModelDrivenTelemetry = {
  id: "<id>",
};
```

### `operations.InputSqs`

```typescript
const value: operations.InputSqs = {
  id: "<id>",
  queueName: "<value>",
};
```

### `operations.InputSyslogUnion`

```typescript
const value: operations.InputSyslogUnion = {
  id: "<id>",
  type: "syslog",
  disabled: false,
  sendToRoutes: true,
  pqEnabled: false,
  host: "0.0.0.0",
  tcpPort: 966.81,
  maxBufferSize: 1000,
  ipWhitelistRegex: "/.*/",
  timestampTimezone: "local",
  singleMsgUdpPackets: false,
  enableProxyHeader: false,
  octetCounting: false,
  inferFraming: true,
  strictlyInferOctetCounting: true,
  allowNonStandardAppName: false,
  maxActiveCxn: 1000,
  socketIdleTimeout: 0,
  socketEndingMaxWait: 30,
  socketMaxLifespan: 0,
  enableLoadBalancing: false,
};
```

### `models.InputFile`

```typescript
const value: models.InputFile = {
  id: "<id>",
  type: "file",
};
```

### `operations.InputTcp`

```typescript
const value: operations.InputTcp = {
  id: "<id>",
  port: 1116.24,
};
```

### `models.InputAppscope`

```typescript
const value: models.InputAppscope = {
  id: "<id>",
  type: "appscope",
};
```

### `operations.InputWef`

```typescript
const value: operations.InputWef = {
  id: "<id>",
  subscriptions: [
    {
      subscriptionName: "<value>",
      targets: [],
    },
  ],
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
  port: 9058.83,
};
```

### `operations.InputJournalFiles`

```typescript
const value: operations.InputJournalFiles = {
  id: "<id>",
  path: "/usr/local/bin",
  journals: [],
};
```

### `operations.InputWiz`

```typescript
const value: operations.InputWiz = {
  id: "<id>",
  authUrl: "https://sturdy-desk.info",
  clientId: "<id>",
  contentConfig: [],
};
```

### `operations.InputNetflow`

```typescript
const value: operations.InputNetflow = {
  id: "<id>",
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
  port: 976.35,
};
```

