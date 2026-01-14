# InputHttpRaw


## Supported Types

### `operations.InputHttpRawSendToRoutesTrueConstraint`

```typescript
const value: operations.InputHttpRawSendToRoutesTrueConstraint = {
  sendToRoutes: false,
  id: "<id>",
  type: "http_raw",
  disabled: true,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
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
  host: "sparkling-marathon.org",
  port: 5514.47,
  authTokens: [
    "<value 1>",
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
  maxActiveReq: 641.8,
  maxRequestsPerSocket: 330845,
  enableProxyHeader: false,
  captureHeaders: false,
  activityLogSampleRate: 7462.31,
  requestTimeout: 6737.19,
  socketTimeout: 5021.6,
  keepAliveTimeout: 8336.51,
  enableHealthCheck: true,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  breakerRulesets: [
    "<value 1>",
  ],
  staleChannelFlushMs: 5005.29,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  allowedPaths: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  allowedMethods: [
    "<value 1>",
    "<value 2>",
  ],
  authTokensExt: [
    {
      token: "<value>",
      description: "positively divine about woot",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
    },
  ],
  description: "babyish baseboard without geez",
};
```

### `operations.InputHttpRawSendToRoutesFalseWithConnectionsConstraint`

```typescript
const value: operations.InputHttpRawSendToRoutesFalseWithConnectionsConstraint =
  {
    sendToRoutes: true,
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    id: "<id>",
    type: "http_raw",
    disabled: true,
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
    host: "variable-rubric.org",
    port: 5021.65,
    authTokens: [
      "<value 1>",
      "<value 2>",
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
    maxActiveReq: 6365.19,
    maxRequestsPerSocket: 608887,
    enableProxyHeader: true,
    captureHeaders: false,
    activityLogSampleRate: 5556.42,
    requestTimeout: 249.66,
    socketTimeout: 3246.47,
    keepAliveTimeout: 7704.1,
    enableHealthCheck: false,
    ipAllowlistRegex: "<value>",
    ipDenylistRegex: "<value>",
    breakerRulesets: [
      "<value 1>",
      "<value 2>",
    ],
    staleChannelFlushMs: 7964.69,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    allowedPaths: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    allowedMethods: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    authTokensExt: [
      {
        token: "<value>",
        description: "positively divine about woot",
        metadata: [
          {
            name: "<value>",
            value: "<value>",
          },
        ],
      },
    ],
    description: "crowded almost arrogantly absentmindedly whether huzzah",
  };
```

### `operations.InputHttpRawPqEnabledFalseConstraint`

```typescript
const value: operations.InputHttpRawPqEnabledFalseConstraint = {
  pqEnabled: true,
  id: "<id>",
  type: "http_raw",
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
  host: "abandoned-anticodon.net",
  port: 3171.04,
  authTokens: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
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
  maxActiveReq: 8522.13,
  maxRequestsPerSocket: 163915,
  enableProxyHeader: true,
  captureHeaders: false,
  activityLogSampleRate: 6922.36,
  requestTimeout: 4889.67,
  socketTimeout: 1401.19,
  keepAliveTimeout: 2790.42,
  enableHealthCheck: true,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  staleChannelFlushMs: 4559.12,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  allowedPaths: [
    "<value 1>",
  ],
  allowedMethods: [
    "<value 1>",
  ],
  authTokensExt: [
    {
      token: "<value>",
      description: "positively divine about woot",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
    },
  ],
  description:
    "wilt correctly soulful hopelessly courageous hospitable schedule",
};
```

### `operations.InputHttpRawPqEnabledTrueWithPqConstraint`

```typescript
const value: operations.InputHttpRawPqEnabledTrueWithPqConstraint = {
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
  type: "http_raw",
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
  host: "elementary-chap.info",
  port: 781.64,
  authTokens: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
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
  maxActiveReq: 4943.9,
  maxRequestsPerSocket: 130532,
  enableProxyHeader: false,
  captureHeaders: false,
  activityLogSampleRate: 2888.75,
  requestTimeout: 7343.15,
  socketTimeout: 1696.72,
  keepAliveTimeout: 3962.94,
  enableHealthCheck: false,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
  ],
  staleChannelFlushMs: 7138.54,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  allowedPaths: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  allowedMethods: [
    "<value 1>",
  ],
  authTokensExt: [
    {
      token: "<value>",
      description: "positively divine about woot",
      metadata: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
    },
  ],
  description: "unethically char vice labourer",
};
```

