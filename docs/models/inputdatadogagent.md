# InputDatadogAgent


## Supported Types

### `models.InputDatadogAgentSendToRoutesTrueConstraint`

```typescript
const value: models.InputDatadogAgentSendToRoutesTrueConstraint = {
  sendToRoutes: true,
  id: "<id>",
  type: "datadog_agent",
  disabled: true,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: true,
  streamtags: [
    "<value 1>",
  ],
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  pq: {
    mode: "smart",
    maxBufferSize: 1717.96,
    commitFrequency: 1412.18,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/opt/include",
    compress: "none",
    pqControls: {},
  },
  host: "instructive-spring.net",
  port: 4933.98,
  tls: {
    disabled: true,
    requestCert: true,
    rejectUnauthorized: true,
    commonNameRegex: "<value>",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1.1",
  },
  maxActiveReq: 4423.76,
  maxRequestsPerSocket: 683951,
  enableProxyHeader: false,
  captureHeaders: false,
  activityLogSampleRate: 9188.56,
  requestTimeout: 492.82,
  socketTimeout: 3773.77,
  keepAliveTimeout: 905.25,
  enableHealthCheck: false,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  extractMetrics: true,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  proxyMode: {
    enabled: false,
    rejectUnauthorized: false,
  },
  description: "beside jagged insecure sit crumble",
};
```

### `models.InputDatadogAgentSendToRoutesFalseWithConnectionsConstraint`

```typescript
const value:
  models.InputDatadogAgentSendToRoutesFalseWithConnectionsConstraint = {
    sendToRoutes: true,
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    id: "<id>",
    type: "datadog_agent",
    disabled: false,
    pipeline: "<value>",
    environment: "<value>",
    pqEnabled: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    pq: {
      mode: "smart",
      maxBufferSize: 1717.96,
      commitFrequency: 1412.18,
      maxFileSize: "<value>",
      maxSize: "<value>",
      path: "/opt/include",
      compress: "none",
      pqControls: {},
    },
    host: "soggy-suitcase.name",
    port: 8725.91,
    tls: {
      disabled: true,
      requestCert: true,
      rejectUnauthorized: true,
      commonNameRegex: "<value>",
      certificateName: "<value>",
      privKeyPath: "<value>",
      passphrase: "<value>",
      certPath: "<value>",
      caPath: "<value>",
      minVersion: "TLSv1",
      maxVersion: "TLSv1.1",
    },
    maxActiveReq: 6943.93,
    maxRequestsPerSocket: 213831,
    enableProxyHeader: true,
    captureHeaders: true,
    activityLogSampleRate: 8876.02,
    requestTimeout: 2176.94,
    socketTimeout: 7421.72,
    keepAliveTimeout: 6738.16,
    enableHealthCheck: false,
    ipAllowlistRegex: "<value>",
    ipDenylistRegex: "<value>",
    extractMetrics: true,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    proxyMode: {
      enabled: false,
      rejectUnauthorized: false,
    },
    description: "why gently vastly shakily settler ferociously",
  };
```

### `models.InputDatadogAgentPqEnabledFalseConstraint`

```typescript
const value: models.InputDatadogAgentPqEnabledFalseConstraint = {
  pqEnabled: false,
  id: "<id>",
  type: "datadog_agent",
  disabled: true,
  pipeline: "<value>",
  sendToRoutes: false,
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
  ],
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  pq: {
    mode: "smart",
    maxBufferSize: 1717.96,
    commitFrequency: 1412.18,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/opt/include",
    compress: "none",
    pqControls: {},
  },
  host: "shocked-intent.org",
  port: 9321.76,
  tls: {
    disabled: true,
    requestCert: true,
    rejectUnauthorized: true,
    commonNameRegex: "<value>",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1.1",
  },
  maxActiveReq: 675.46,
  maxRequestsPerSocket: 669947,
  enableProxyHeader: false,
  captureHeaders: true,
  activityLogSampleRate: 151.78,
  requestTimeout: 9305.14,
  socketTimeout: 5782.79,
  keepAliveTimeout: 8013,
  enableHealthCheck: false,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  extractMetrics: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  proxyMode: {
    enabled: false,
    rejectUnauthorized: false,
  },
  description: "pfft repeatedly doubtfully gulp notwithstanding",
};
```

### `models.InputDatadogAgentPqEnabledTrueWithPqConstraint`

```typescript
const value: models.InputDatadogAgentPqEnabledTrueWithPqConstraint = {
  pqEnabled: true,
  pq: {
    mode: "smart",
    maxBufferSize: 1717.96,
    commitFrequency: 1412.18,
    maxFileSize: "<value>",
    maxSize: "<value>",
    path: "/opt/include",
    compress: "none",
    pqControls: {},
  },
  id: "<id>",
  type: "datadog_agent",
  disabled: false,
  pipeline: "<value>",
  sendToRoutes: false,
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
  ],
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  host: "formal-puppet.name",
  port: 3500.57,
  tls: {
    disabled: true,
    requestCert: true,
    rejectUnauthorized: true,
    commonNameRegex: "<value>",
    certificateName: "<value>",
    privKeyPath: "<value>",
    passphrase: "<value>",
    certPath: "<value>",
    caPath: "<value>",
    minVersion: "TLSv1",
    maxVersion: "TLSv1.1",
  },
  maxActiveReq: 5992.32,
  maxRequestsPerSocket: 384131,
  enableProxyHeader: true,
  captureHeaders: false,
  activityLogSampleRate: 464.03,
  requestTimeout: 6021.61,
  socketTimeout: 8179.22,
  keepAliveTimeout: 1859.7,
  enableHealthCheck: false,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  extractMetrics: true,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  proxyMode: {
    enabled: false,
    rejectUnauthorized: false,
  },
  description: "outrank incidentally great our smooth shovel unsteady",
};
```

