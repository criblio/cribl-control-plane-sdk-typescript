# InputSplunkHec


## Supported Types

### `models.InputSplunkHecSendToRoutesTrueConstraint`

```typescript
const value: models.InputSplunkHecSendToRoutesTrueConstraint = {
  sendToRoutes: true,
  id: "<id>",
  type: "splunk_hec",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: true,
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
  host: "skeletal-exterior.com",
  port: 1194.91,
  authTokens: [
    {
      authType: "secret",
      tokenSecret: "<value>",
      token: "<value>",
      enabled: false,
      description: "psst too sniff over although er",
      allowedIndexesAtToken: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
    },
  ],
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
  maxActiveReq: 635.3,
  maxRequestsPerSocket: 271238,
  enableProxyHeader: false,
  captureHeaders: false,
  activityLogSampleRate: 6451.44,
  requestTimeout: 1656.83,
  socketTimeout: 1472.75,
  keepAliveTimeout: 9360.57,
  enableHealthCheck: "<value>",
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  splunkHecAPI: "<value>",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  allowedIndexes: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  splunkHecAcks: false,
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
  ],
  staleChannelFlushMs: 3943.56,
  useFwdTimezone: false,
  dropControlFields: true,
  extractMetrics: false,
  accessControlAllowOrigin: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  accessControlAllowHeaders: [
    "<value 1>",
  ],
  emitTokenMetrics: true,
  description: "qua taut than",
};
```

### `models.InputSplunkHecSendToRoutesFalseWithConnectionsConstraint`

```typescript
const value: models.InputSplunkHecSendToRoutesFalseWithConnectionsConstraint = {
  sendToRoutes: false,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "splunk_hec",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: true,
  streamtags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
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
  host: "impressive-swath.name",
  port: 6823.6,
  authTokens: [
    {
      authType: "secret",
      tokenSecret: "<value>",
      token: "<value>",
      enabled: false,
      description: "psst too sniff over although er",
      allowedIndexesAtToken: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
    },
  ],
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
  maxActiveReq: 2919.8,
  maxRequestsPerSocket: 222249,
  enableProxyHeader: false,
  captureHeaders: false,
  activityLogSampleRate: 184.51,
  requestTimeout: 3948.16,
  socketTimeout: 5418.35,
  keepAliveTimeout: 6044.64,
  enableHealthCheck: "<value>",
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  splunkHecAPI: "<value>",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  allowedIndexes: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  splunkHecAcks: false,
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  staleChannelFlushMs: 2193.18,
  useFwdTimezone: false,
  dropControlFields: true,
  extractMetrics: false,
  accessControlAllowOrigin: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  accessControlAllowHeaders: [
    "<value 1>",
  ],
  emitTokenMetrics: false,
  description: "hmph gah object tomography pike beyond",
};
```

### `models.InputSplunkHecPqEnabledFalseConstraint`

```typescript
const value: models.InputSplunkHecPqEnabledFalseConstraint = {
  pqEnabled: false,
  id: "<id>",
  type: "splunk_hec",
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
  host: "excited-alb.biz",
  port: 8767.28,
  authTokens: [
    {
      authType: "secret",
      tokenSecret: "<value>",
      token: "<value>",
      enabled: false,
      description: "psst too sniff over although er",
      allowedIndexesAtToken: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
    },
  ],
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
  maxActiveReq: 495.23,
  maxRequestsPerSocket: 112283,
  enableProxyHeader: false,
  captureHeaders: false,
  activityLogSampleRate: 6936.18,
  requestTimeout: 3511.56,
  socketTimeout: 8317.16,
  keepAliveTimeout: 5890.84,
  enableHealthCheck: "<value>",
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  splunkHecAPI: "<value>",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  allowedIndexes: [
    "<value 1>",
  ],
  splunkHecAcks: false,
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  staleChannelFlushMs: 4314.41,
  useFwdTimezone: false,
  dropControlFields: false,
  extractMetrics: false,
  accessControlAllowOrigin: [
    "<value 1>",
    "<value 2>",
  ],
  accessControlAllowHeaders: [
    "<value 1>",
  ],
  emitTokenMetrics: true,
  description: "angrily convince jaywalk",
};
```

### `models.InputSplunkHecPqEnabledTrueWithPqConstraint`

```typescript
const value: models.InputSplunkHecPqEnabledTrueWithPqConstraint = {
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
  type: "splunk_hec",
  disabled: false,
  pipeline: "<value>",
  sendToRoutes: true,
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
  host: "writhing-flu.biz",
  port: 8493.06,
  authTokens: [
    {
      authType: "secret",
      tokenSecret: "<value>",
      token: "<value>",
      enabled: false,
      description: "psst too sniff over although er",
      allowedIndexesAtToken: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
    },
  ],
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
  maxActiveReq: 2897.99,
  maxRequestsPerSocket: 242278,
  enableProxyHeader: false,
  captureHeaders: true,
  activityLogSampleRate: 5895.65,
  requestTimeout: 2715.4,
  socketTimeout: 6435.74,
  keepAliveTimeout: 5902.54,
  enableHealthCheck: "<value>",
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  splunkHecAPI: "<value>",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  allowedIndexes: [
    "<value 1>",
  ],
  splunkHecAcks: true,
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
  ],
  staleChannelFlushMs: 8440.69,
  useFwdTimezone: false,
  dropControlFields: false,
  extractMetrics: false,
  accessControlAllowOrigin: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  accessControlAllowHeaders: [
    "<value 1>",
    "<value 2>",
  ],
  emitTokenMetrics: true,
  description: "commandeer advanced unlike uselessly reborn",
};
```

