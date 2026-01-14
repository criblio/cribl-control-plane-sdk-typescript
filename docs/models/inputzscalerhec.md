# InputZscalerHec


## Supported Types

### `models.InputZscalerHecSendToRoutesTrueConstraint`

```typescript
const value: models.InputZscalerHecSendToRoutesTrueConstraint = {
  sendToRoutes: true,
  id: "<id>",
  type: "zscaler_hec",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
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
  host: "colorful-final.org",
  port: 3974.67,
  authTokens: [
    {
      authType: "secret",
      tokenSecret: "<value>",
      token: "<value>",
      enabled: true,
      description: "switch within furthermore quarrelsomely",
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
  maxActiveReq: 7229.39,
  maxRequestsPerSocket: 771992,
  enableProxyHeader: true,
  captureHeaders: true,
  activityLogSampleRate: 8070.32,
  requestTimeout: 7355.55,
  socketTimeout: 6847.06,
  keepAliveTimeout: 2393.88,
  enableHealthCheck: "<value>",
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  hecAPI: "<value>",
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
  hecAcks: true,
  accessControlAllowOrigin: [
    "<value 1>",
    "<value 2>",
  ],
  accessControlAllowHeaders: [
    "<value 1>",
    "<value 2>",
  ],
  emitTokenMetrics: false,
  description:
    "dispense er desecrate for adventurously whoever teammate what shabby punctuation",
};
```

### `models.InputZscalerHecSendToRoutesFalseWithConnectionsConstraint`

```typescript
const value: models.InputZscalerHecSendToRoutesFalseWithConnectionsConstraint =
  {
    sendToRoutes: true,
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    id: "<id>",
    type: "zscaler_hec",
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
    host: "worst-diversity.com",
    port: 1665.35,
    authTokens: [
      {
        authType: "secret",
        tokenSecret: "<value>",
        token: "<value>",
        enabled: true,
        description: "switch within furthermore quarrelsomely",
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
    maxActiveReq: 9703.02,
    maxRequestsPerSocket: 336750,
    enableProxyHeader: false,
    captureHeaders: false,
    activityLogSampleRate: 7336.31,
    requestTimeout: 824.41,
    socketTimeout: 2281.83,
    keepAliveTimeout: 9998.47,
    enableHealthCheck: "<value>",
    ipAllowlistRegex: "<value>",
    ipDenylistRegex: "<value>",
    hecAPI: "<value>",
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    allowedIndexes: [
      "<value 1>",
      "<value 2>",
    ],
    hecAcks: true,
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
    description: "cleave biodegrade gee",
  };
```

### `models.InputZscalerHecPqEnabledFalseConstraint`

```typescript
const value: models.InputZscalerHecPqEnabledFalseConstraint = {
  pqEnabled: false,
  id: "<id>",
  type: "zscaler_hec",
  disabled: true,
  pipeline: "<value>",
  sendToRoutes: true,
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
  host: "incomplete-steeple.org",
  port: 9335.48,
  authTokens: [
    {
      authType: "secret",
      tokenSecret: "<value>",
      token: "<value>",
      enabled: true,
      description: "switch within furthermore quarrelsomely",
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
  maxActiveReq: 8833.19,
  maxRequestsPerSocket: 878507,
  enableProxyHeader: true,
  captureHeaders: true,
  activityLogSampleRate: 9965.88,
  requestTimeout: 8332.21,
  socketTimeout: 6315.35,
  keepAliveTimeout: 9808,
  enableHealthCheck: "<value>",
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  hecAPI: "<value>",
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
  hecAcks: true,
  accessControlAllowOrigin: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  accessControlAllowHeaders: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  emitTokenMetrics: true,
  description:
    "decisive helpful terribly despite substantial sour wherever confirm indeed",
};
```

### `models.InputZscalerHecPqEnabledTrueWithPqConstraint`

```typescript
const value: models.InputZscalerHecPqEnabledTrueWithPqConstraint = {
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
  type: "zscaler_hec",
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
  host: "valuable-quart.org",
  port: 6151.1,
  authTokens: [
    {
      authType: "secret",
      tokenSecret: "<value>",
      token: "<value>",
      enabled: true,
      description: "switch within furthermore quarrelsomely",
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
  maxActiveReq: 1304.16,
  maxRequestsPerSocket: 441977,
  enableProxyHeader: false,
  captureHeaders: true,
  activityLogSampleRate: 9635.27,
  requestTimeout: 6401.07,
  socketTimeout: 6055.08,
  keepAliveTimeout: 1939.7,
  enableHealthCheck: "<value>",
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  hecAPI: "<value>",
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
  hecAcks: true,
  accessControlAllowOrigin: [
    "<value 1>",
  ],
  accessControlAllowHeaders: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  emitTokenMetrics: true,
  description: "where fast deeply",
};
```

