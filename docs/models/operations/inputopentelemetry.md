# InputOpenTelemetry


## Supported Types

### `operations.InputOpenTelemetrySendToRoutesTrueConstraint`

```typescript
const value: operations.InputOpenTelemetrySendToRoutesTrueConstraint = {
  sendToRoutes: true,
  id: "<id>",
  type: "open_telemetry",
  disabled: false,
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
  host: "grandiose-futon.net",
  port: 1848.71,
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
  maxActiveReq: 5502.97,
  maxRequestsPerSocket: 329298,
  enableProxyHeader: "<value>",
  captureHeaders: "<value>",
  activityLogSampleRate: "<value>",
  requestTimeout: 2308,
  socketTimeout: 7485.77,
  keepAliveTimeout: 1924.47,
  enableHealthCheck: false,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  protocol: "http",
  extractSpans: true,
  extractMetrics: false,
  otlpVersion: "1.3.1",
  authType: "basic",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  maxActiveCxn: 1729.38,
  description: "fast by content pfft guide",
  username: "Sanford_Kris-Franecki",
  password: "FJMKBcXW8dmyF3e",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://uniform-hydrocarbon.net",
  secretParamName: "<value>",
  secret: "<value>",
  tokenAttributeName: "<value>",
  authHeaderExpr: "<value>",
  tokenTimeoutSecs: 2090.25,
  oauthParams: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  oauthHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  extractLogs: false,
};
```

### `operations.InputOpenTelemetrySendToRoutesFalseWithConnectionsConstraint`

```typescript
const value:
  operations.InputOpenTelemetrySendToRoutesFalseWithConnectionsConstraint = {
    sendToRoutes: true,
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    id: "<id>",
    type: "open_telemetry",
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
    host: "mad-midwife.name",
    port: 4663.04,
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
    maxActiveReq: 9477.23,
    maxRequestsPerSocket: 853444,
    enableProxyHeader: "<value>",
    captureHeaders: "<value>",
    activityLogSampleRate: "<value>",
    requestTimeout: 5477.62,
    socketTimeout: 3628.55,
    keepAliveTimeout: 8505.11,
    enableHealthCheck: true,
    ipAllowlistRegex: "<value>",
    ipDenylistRegex: "<value>",
    protocol: "http",
    extractSpans: true,
    extractMetrics: true,
    otlpVersion: "0.10.0",
    authType: "basic",
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    maxActiveCxn: 2801.18,
    description: "amongst partial gallery",
    username: "Ines_Thiel",
    password: "cuW5Ei35kPAvVpV",
    token: "<value>",
    credentialsSecret: "<value>",
    textSecret: "<value>",
    loginUrl: "https://frugal-dress.biz",
    secretParamName: "<value>",
    secret: "<value>",
    tokenAttributeName: "<value>",
    authHeaderExpr: "<value>",
    tokenTimeoutSecs: 1013.1,
    oauthParams: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    oauthHeaders: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    extractLogs: true,
  };
```

### `operations.InputOpenTelemetryPqEnabledFalseConstraint`

```typescript
const value: operations.InputOpenTelemetryPqEnabledFalseConstraint = {
  pqEnabled: false,
  id: "<id>",
  type: "open_telemetry",
  disabled: false,
  pipeline: "<value>",
  sendToRoutes: false,
  environment: "<value>",
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
  host: "exhausted-typewriter.org",
  port: 2320.08,
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
  maxActiveReq: 6708.43,
  maxRequestsPerSocket: 780638,
  enableProxyHeader: "<value>",
  captureHeaders: "<value>",
  activityLogSampleRate: "<value>",
  requestTimeout: 1251.8,
  socketTimeout: 6935.04,
  keepAliveTimeout: 4012.29,
  enableHealthCheck: true,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  protocol: "http",
  extractSpans: false,
  extractMetrics: true,
  otlpVersion: "0.10.0",
  authType: "basic",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  maxActiveCxn: 8330.5,
  description: "instead dearly whoever",
  username: "Steve98",
  password: "bWZ_QC6nAMb8ZFk",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://proud-stay.net",
  secretParamName: "<value>",
  secret: "<value>",
  tokenAttributeName: "<value>",
  authHeaderExpr: "<value>",
  tokenTimeoutSecs: 8619.27,
  oauthParams: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  oauthHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  extractLogs: true,
};
```

### `operations.InputOpenTelemetryPqEnabledTrueWithPqConstraint`

```typescript
const value: operations.InputOpenTelemetryPqEnabledTrueWithPqConstraint = {
  pqEnabled: false,
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
  type: "open_telemetry",
  disabled: true,
  pipeline: "<value>",
  sendToRoutes: true,
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  host: "triangular-diver.net",
  port: 9004.89,
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
  maxActiveReq: 6473.6,
  maxRequestsPerSocket: 533694,
  enableProxyHeader: "<value>",
  captureHeaders: "<value>",
  activityLogSampleRate: "<value>",
  requestTimeout: 3709.93,
  socketTimeout: 260.36,
  keepAliveTimeout: 644.34,
  enableHealthCheck: true,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  protocol: "grpc",
  extractSpans: true,
  extractMetrics: true,
  otlpVersion: "1.3.1",
  authType: "none",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  maxActiveCxn: 1876.06,
  description: "conservative muscat however familiarize uh-huh tenderly fondly",
  username: "Larissa_Torp",
  password: "qMub7KGLixeUvRu",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://untrue-desk.com/",
  secretParamName: "<value>",
  secret: "<value>",
  tokenAttributeName: "<value>",
  authHeaderExpr: "<value>",
  tokenTimeoutSecs: 3446.85,
  oauthParams: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  oauthHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  extractLogs: true,
};
```

