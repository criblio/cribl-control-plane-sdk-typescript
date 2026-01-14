# InputCriblHttp


## Supported Types

### `operations.InputCriblHttpSendToRoutesTrueConstraint`

```typescript
const value: operations.InputCriblHttpSendToRoutesTrueConstraint = {
  sendToRoutes: true,
  id: "<id>",
  type: "cribl_http",
  disabled: true,
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
  host: "pretty-cross-contamination.com",
  port: 4567.96,
  authTokens: [
    {
      tokenSecret: "<value>",
      enabled: true,
      description: "without slipper appropriate",
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
  maxActiveReq: 5850.28,
  maxRequestsPerSocket: 678336,
  enableProxyHeader: true,
  captureHeaders: true,
  activityLogSampleRate: 6506.3,
  requestTimeout: 2140.15,
  socketTimeout: 3114.68,
  keepAliveTimeout: 9563.2,
  enableHealthCheck: true,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "whoa before handover fuss gadzooks absentmindedly ha",
};
```

### `operations.InputCriblHttpSendToRoutesFalseWithConnectionsConstraint`

```typescript
const value:
  operations.InputCriblHttpSendToRoutesFalseWithConnectionsConstraint = {
    sendToRoutes: false,
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    id: "<id>",
    type: "cribl_http",
    disabled: true,
    pipeline: "<value>",
    environment: "<value>",
    pqEnabled: true,
    streamtags: [
      "<value 1>",
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
    host: "outstanding-cleaner.info",
    port: 3999.29,
    authTokens: [
      {
        tokenSecret: "<value>",
        enabled: true,
        description: "without slipper appropriate",
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
    maxActiveReq: 8020.32,
    maxRequestsPerSocket: 670925,
    enableProxyHeader: false,
    captureHeaders: false,
    activityLogSampleRate: 1356.55,
    requestTimeout: 2043.83,
    socketTimeout: 4720.14,
    keepAliveTimeout: 427.23,
    enableHealthCheck: false,
    ipAllowlistRegex: "<value>",
    ipDenylistRegex: "<value>",
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    description: "blowgun um uh-huh",
  };
```

### `operations.InputCriblHttpPqEnabledFalseConstraint`

```typescript
const value: operations.InputCriblHttpPqEnabledFalseConstraint = {
  pqEnabled: false,
  id: "<id>",
  type: "cribl_http",
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
  host: "extroverted-yin.org",
  port: 7167.12,
  authTokens: [
    {
      tokenSecret: "<value>",
      enabled: true,
      description: "without slipper appropriate",
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
  maxActiveReq: 5554.32,
  maxRequestsPerSocket: 659847,
  enableProxyHeader: true,
  captureHeaders: true,
  activityLogSampleRate: 4527.03,
  requestTimeout: 5994.08,
  socketTimeout: 8368.72,
  keepAliveTimeout: 8163.19,
  enableHealthCheck: false,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description:
    "furthermore that oof expert inasmuch what psst oil resolve phooey",
};
```

### `operations.InputCriblHttpPqEnabledTrueWithPqConstraint`

```typescript
const value: operations.InputCriblHttpPqEnabledTrueWithPqConstraint = {
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
  type: "cribl_http",
  disabled: false,
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
  host: "determined-stall.net",
  port: 2372.88,
  authTokens: [
    {
      tokenSecret: "<value>",
      enabled: true,
      description: "without slipper appropriate",
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
  maxActiveReq: 5296.34,
  maxRequestsPerSocket: 91456,
  enableProxyHeader: false,
  captureHeaders: true,
  activityLogSampleRate: 3666.12,
  requestTimeout: 2131.54,
  socketTimeout: 6620.09,
  keepAliveTimeout: 5047.41,
  enableHealthCheck: false,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "noteworthy whoever till when",
};
```

