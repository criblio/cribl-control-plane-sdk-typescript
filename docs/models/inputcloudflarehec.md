# InputCloudflareHec


## Supported Types

### `models.InputCloudflareHecSendToRoutesTrueConstraint`

```typescript
const value: models.InputCloudflareHecSendToRoutesTrueConstraint = {
  sendToRoutes: false,
  id: "<id>",
  type: "cloudflare_hec",
  disabled: true,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: true,
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
  host: "understated-tabletop.name",
  port: 3372.62,
  authTokens: [
    {
      authType: "manual",
      tokenSecret: "<value>",
      token: "<value>",
      enabled: false,
      description:
        "fall regarding eek vainly carefree ouch zowie messy whereas and",
      allowedIndexesAtToken: [
        "<value 1>",
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
  maxActiveReq: 9714.38,
  maxRequestsPerSocket: 448093,
  enableProxyHeader: true,
  captureHeaders: false,
  activityLogSampleRate: 8778.43,
  requestTimeout: 3509.52,
  socketTimeout: 1689.97,
  keepAliveTimeout: 3505.76,
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
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  staleChannelFlushMs: 9865.68,
  accessControlAllowOrigin: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  accessControlAllowHeaders: [
    "<value 1>",
  ],
  emitTokenMetrics: true,
  description:
    "through softly definitive apropos although cemetery ick sweetly",
};
```

### `models.InputCloudflareHecSendToRoutesFalseWithConnectionsConstraint`

```typescript
const value:
  models.InputCloudflareHecSendToRoutesFalseWithConnectionsConstraint = {
    sendToRoutes: true,
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    id: "<id>",
    type: "cloudflare_hec",
    disabled: false,
    pipeline: "<value>",
    environment: "<value>",
    pqEnabled: false,
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
    host: "clumsy-shark.org",
    port: 3655.19,
    authTokens: [
      {
        authType: "manual",
        tokenSecret: "<value>",
        token: "<value>",
        enabled: false,
        description:
          "fall regarding eek vainly carefree ouch zowie messy whereas and",
        allowedIndexesAtToken: [
          "<value 1>",
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
    maxActiveReq: 2237.05,
    maxRequestsPerSocket: 609670,
    enableProxyHeader: true,
    captureHeaders: false,
    activityLogSampleRate: 429.23,
    requestTimeout: 1424.31,
    socketTimeout: 8850.72,
    keepAliveTimeout: 5117.91,
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
    breakerRulesets: [
      "<value 1>",
    ],
    staleChannelFlushMs: 6702.83,
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
    description: "who bleakly fill forgery starboard when unless",
  };
```

### `models.InputCloudflareHecPqEnabledFalseConstraint`

```typescript
const value: models.InputCloudflareHecPqEnabledFalseConstraint = {
  pqEnabled: false,
  id: "<id>",
  type: "cloudflare_hec",
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
  host: "pricey-minister.name",
  port: 6508.61,
  authTokens: [
    {
      authType: "manual",
      tokenSecret: "<value>",
      token: "<value>",
      enabled: false,
      description:
        "fall regarding eek vainly carefree ouch zowie messy whereas and",
      allowedIndexesAtToken: [
        "<value 1>",
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
  maxActiveReq: 7078.77,
  maxRequestsPerSocket: 232409,
  enableProxyHeader: true,
  captureHeaders: false,
  activityLogSampleRate: 2589.3,
  requestTimeout: 6449.38,
  socketTimeout: 5414.44,
  keepAliveTimeout: 2661.98,
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
  ],
  breakerRulesets: [
    "<value 1>",
  ],
  staleChannelFlushMs: 1254.94,
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
  description: "regularly gratefully blah hastily past amid",
};
```

### `models.InputCloudflareHecPqEnabledTrueWithPqConstraint`

```typescript
const value: models.InputCloudflareHecPqEnabledTrueWithPqConstraint = {
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
  type: "cloudflare_hec",
  disabled: true,
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
  host: "primary-desk.com",
  port: 8111.79,
  authTokens: [
    {
      authType: "manual",
      tokenSecret: "<value>",
      token: "<value>",
      enabled: false,
      description:
        "fall regarding eek vainly carefree ouch zowie messy whereas and",
      allowedIndexesAtToken: [
        "<value 1>",
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
  maxActiveReq: 4005.15,
  maxRequestsPerSocket: 230874,
  enableProxyHeader: false,
  captureHeaders: true,
  activityLogSampleRate: 2730.27,
  requestTimeout: 783.39,
  socketTimeout: 2498.87,
  keepAliveTimeout: 8383.58,
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
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
  ],
  staleChannelFlushMs: 608.19,
  accessControlAllowOrigin: [
    "<value 1>",
  ],
  accessControlAllowHeaders: [
    "<value 1>",
    "<value 2>",
  ],
  emitTokenMetrics: false,
  description: "yowza tabletop describe moisten tarry pity other pulverize",
};
```

