# InputSplunkHec


## Supported Types

### `operations.InputSplunkHecSendToRoutesTrueConstraint`

```typescript
const value: operations.InputSplunkHecSendToRoutesTrueConstraint = {
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
      authType: "manual",
      tokenSecret: "<value>",
      token: "<value>",
      enabled: true,
      description:
        "between quarterly um maroon drat silk whose hence incidentally after",
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

### `operations.InputSplunkHecSendToRoutesFalseWithConnectionsConstraint`

```typescript
const value:
  operations.InputSplunkHecSendToRoutesFalseWithConnectionsConstraint = {
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
        authType: "manual",
        tokenSecret: "<value>",
        token: "<value>",
        enabled: true,
        description:
          "between quarterly um maroon drat silk whose hence incidentally after",
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

### `operations.InputSplunkHecPqEnabledFalseConstraint`

```typescript
const value: operations.InputSplunkHecPqEnabledFalseConstraint = {
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
      authType: "manual",
      tokenSecret: "<value>",
      token: "<value>",
      enabled: true,
      description:
        "between quarterly um maroon drat silk whose hence incidentally after",
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

### `operations.InputSplunkHecPqEnabledTrueWithPqConstraint`

```typescript
const value: operations.InputSplunkHecPqEnabledTrueWithPqConstraint = {
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
      authType: "manual",
      tokenSecret: "<value>",
      token: "<value>",
      enabled: true,
      description:
        "between quarterly um maroon drat silk whose hence incidentally after",
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
  maxActiveReq: 310.06,
  maxRequestsPerSocket: 943198,
  enableProxyHeader: true,
  captureHeaders: true,
  activityLogSampleRate: 1457.18,
  requestTimeout: 8535.64,
  socketTimeout: 5668.88,
  keepAliveTimeout: 7302.05,
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
  ],
  staleChannelFlushMs: 7396.04,
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
  emitTokenMetrics: false,
  description:
    "below story usefully worriedly blindly ignite traffic moral once below",
};
```

