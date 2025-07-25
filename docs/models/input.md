# Input


## Supported Types

### `models.InputCollection`

```typescript
const value: models.InputCollection = {
  id: "<id>",
};
```

### `models.InputKafka`

```typescript
const value: models.InputKafka = {
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
  brokers: [
    "<value 1>",
  ],
  topics: [
    "<value 1>",
  ],
  region: "<value>",
};
```

### `models.InputHttp`

```typescript
const value: models.InputHttp = {
  port: 5706.87,
};
```

### `models.InputSplunk`

```typescript
const value: models.InputSplunk = {
  port: 7778.34,
};
```

### `models.InputSplunkSearch`

```typescript
const value: models.InputSplunkSearch = {
  search: "<value>",
};
```

### `models.InputSplunkHec`

```typescript
const value: models.InputSplunkHec = {
  port: 6978.57,
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
  port: 4251.06,
};
```

### `models.InputConfluentCloud`

```typescript
const value: models.InputConfluentCloud = {
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
  disabled: false,
  sendToRoutes: true,
  pqEnabled: false,
  host: "0.0.0.0",
  port: 9700.46,
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

### `models.InputLoki`

```typescript
const value: models.InputLoki = {
  port: 1032.46,
};
```

### `models.InputPrometheusRw`

```typescript
const value: models.InputPrometheusRw = {
  port: 253.9,
};
```

### `models.InputPrometheus`

```typescript
const value: models.InputPrometheus = {};
```

### `models.InputEdgePrometheus`

```typescript
const value: models.InputEdgePrometheus = {};
```

### `models.InputOffice365Mgmt`

```typescript
const value: models.InputOffice365Mgmt = {
  tenantId: "<id>",
  appId: "<id>",
};
```

### `models.InputOffice365Service`

```typescript
const value: models.InputOffice365Service = {
  tenantId: "<id>",
  appId: "<id>",
};
```

### `models.InputOffice365MsgTrace`

```typescript
const value: models.InputOffice365MsgTrace = {};
```

### `models.InputEventhub`

```typescript
const value: models.InputEventhub = {
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
  port: 652.18,
};
```

### `models.InputGooglePubsub`

```typescript
const value: models.InputGooglePubsub = {
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

### `models.InputCriblTcp`

```typescript
const value: models.InputCriblTcp = {
  port: 9867.66,
};
```

### `models.InputCriblHttp`

```typescript
const value: models.InputCriblHttp = {
  port: 9559.16,
};
```

### `models.InputCriblLakeHttp`

```typescript
const value: models.InputCriblLakeHttp = {
  port: 3387.19,
};
```

### `models.InputTcpjson`

```typescript
const value: models.InputTcpjson = {
  port: 2999.39,
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
  port: 7967.97,
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
  port: 2333.1,
};
```

### `models.InputKinesis`

```typescript
const value: models.InputKinesis = {
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

### `models.InputMetrics`

```typescript
const value: models.InputMetrics = {
  type: "metrics",
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
const value: models.InputSnmp = {};
```

### `models.InputOpenTelemetry`

```typescript
const value: models.InputOpenTelemetry = {};
```

### `models.InputModelDrivenTelemetry`

```typescript
const value: models.InputModelDrivenTelemetry = {};
```

### `models.InputSqs`

```typescript
const value: models.InputSqs = {
  queueName: "<value>",
};
```

### `models.InputSyslog`

```typescript
const value: models.InputSyslog = {
  type: "syslog",
  disabled: false,
  sendToRoutes: true,
  pqEnabled: false,
  host: "0.0.0.0",
  tcpPort: 9463.57,
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

### `models.InputTcp`

```typescript
const value: models.InputTcp = {
  port: 6759.94,
};
```

### `models.InputAppscope`

```typescript
const value: models.InputAppscope = {
  id: "<id>",
  type: "appscope",
};
```

### `models.InputWef`

```typescript
const value: models.InputWef = {
  subscriptions: [],
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
  port: 5524.24,
};
```

### `models.InputJournalFiles`

```typescript
const value: models.InputJournalFiles = {
  path: "/bin",
  journals: [
    "<value 1>",
  ],
};
```

### `models.InputWiz`

```typescript
const value: models.InputWiz = {
  authUrl: "https://lone-cinder.name/",
  clientId: "<id>",
  contentConfig: [],
};
```

### `models.InputNetflow`

```typescript
const value: models.InputNetflow = {};
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
  port: 4733.79,
};
```

