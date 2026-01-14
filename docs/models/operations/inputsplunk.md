# InputSplunk


## Supported Types

### `operations.InputSplunkSendToRoutesTrueConstraint`

```typescript
const value: operations.InputSplunkSendToRoutesTrueConstraint = {
  sendToRoutes: true,
  id: "<id>",
  type: "splunk",
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
  host: "minty-wheel.org",
  port: 9530.57,
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
  ipWhitelistRegex: "<value>",
  maxActiveCxn: 3705.39,
  socketIdleTimeout: 199.46,
  socketEndingMaxWait: 5852.41,
  socketMaxLifespan: 4401.7,
  enableProxyHeader: true,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
  ],
  staleChannelFlushMs: 8187.11,
  authTokens: [
    {
      token: "<value>",
      description:
        "internationalize completion though finally unless smart once braid",
    },
  ],
  maxS2Sversion: "v3",
  description: "afore good jaywalk sometimes while",
  useFwdTimezone: false,
  dropControlFields: false,
  extractMetrics: true,
  compress: "always",
};
```

### `operations.InputSplunkSendToRoutesFalseWithConnectionsConstraint`

```typescript
const value: operations.InputSplunkSendToRoutesFalseWithConnectionsConstraint =
  {
    sendToRoutes: true,
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    id: "<id>",
    type: "splunk",
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
    host: "functional-permafrost.net",
    port: 4576.72,
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
    ipWhitelistRegex: "<value>",
    maxActiveCxn: 1045.96,
    socketIdleTimeout: 3370.37,
    socketEndingMaxWait: 7166.97,
    socketMaxLifespan: 9344.4,
    enableProxyHeader: true,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    breakerRulesets: [
      "<value 1>",
    ],
    staleChannelFlushMs: 5552.27,
    authTokens: [
      {
        token: "<value>",
        description:
          "internationalize completion though finally unless smart once braid",
      },
    ],
    maxS2Sversion: "v3",
    description: "impressive via thump untimely glimmer squirm digestive",
    useFwdTimezone: true,
    dropControlFields: true,
    extractMetrics: false,
    compress: "always",
  };
```

### `operations.InputSplunkPqEnabledFalseConstraint`

```typescript
const value: operations.InputSplunkPqEnabledFalseConstraint = {
  pqEnabled: false,
  id: "<id>",
  type: "splunk",
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
  host: "cumbersome-pronoun.info",
  port: 1843.72,
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
  ipWhitelistRegex: "<value>",
  maxActiveCxn: 340.79,
  socketIdleTimeout: 1730.22,
  socketEndingMaxWait: 4481.78,
  socketMaxLifespan: 215.18,
  enableProxyHeader: true,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  breakerRulesets: [
    "<value 1>",
  ],
  staleChannelFlushMs: 8057.21,
  authTokens: [
    {
      token: "<value>",
      description:
        "internationalize completion though finally unless smart once braid",
    },
  ],
  maxS2Sversion: "v3",
  description: "pfft imaginative scuffle whereas supposing",
  useFwdTimezone: false,
  dropControlFields: false,
  extractMetrics: false,
  compress: "always",
};
```

### `operations.InputSplunkPqEnabledTrueWithPqConstraint`

```typescript
const value: operations.InputSplunkPqEnabledTrueWithPqConstraint = {
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
  type: "splunk",
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
  host: "impossible-giggle.biz",
  port: 9748.95,
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
  ipWhitelistRegex: "<value>",
  maxActiveCxn: 4267.62,
  socketIdleTimeout: 8918.84,
  socketEndingMaxWait: 3082.85,
  socketMaxLifespan: 6562.11,
  enableProxyHeader: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  breakerRulesets: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  staleChannelFlushMs: 842.05,
  authTokens: [
    {
      token: "<value>",
      description:
        "internationalize completion though finally unless smart once braid",
    },
  ],
  maxS2Sversion: "v3",
  description: "ignorance considering duh yahoo punctual",
  useFwdTimezone: false,
  dropControlFields: true,
  extractMetrics: false,
  compress: "always",
};
```

