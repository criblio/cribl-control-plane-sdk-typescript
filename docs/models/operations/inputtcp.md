# InputTcp


## Supported Types

### `operations.InputTcpSendToRoutesTrueConstraint`

```typescript
const value: operations.InputTcpSendToRoutesTrueConstraint = {
  sendToRoutes: false,
  id: "<id>",
  type: "tcp",
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
  host: "competent-partridge.com",
  port: 6993.08,
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
  maxActiveCxn: 9223,
  socketIdleTimeout: 6163.95,
  socketEndingMaxWait: 5132.13,
  socketMaxLifespan: 4548.36,
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
  ],
  staleChannelFlushMs: 1149.95,
  enableHeader: false,
  preprocess: {
    disabled: false,
    command: "<value>",
    args: [
      "<value 1>",
    ],
  },
  description: "inasmuch yearly vaguely into toward",
  authToken: "<value>",
  authType: "manual",
  textSecret: "<value>",
};
```

### `operations.InputTcpSendToRoutesFalseWithConnectionsConstraint`

```typescript
const value: operations.InputTcpSendToRoutesFalseWithConnectionsConstraint = {
  sendToRoutes: false,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "tcp",
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
  host: "red-legend.net",
  port: 473.07,
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
  maxActiveCxn: 4960.85,
  socketIdleTimeout: 1235.28,
  socketEndingMaxWait: 7126.63,
  socketMaxLifespan: 7886.78,
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
  staleChannelFlushMs: 6106.93,
  enableHeader: true,
  preprocess: {
    disabled: false,
    command: "<value>",
    args: [
      "<value 1>",
    ],
  },
  description:
    "deceivingly until meh cricket interchange diver ignorant overload duh vibrant",
  authToken: "<value>",
  authType: "secret",
  textSecret: "<value>",
};
```

### `operations.InputTcpPqEnabledFalseConstraint`

```typescript
const value: operations.InputTcpPqEnabledFalseConstraint = {
  pqEnabled: true,
  id: "<id>",
  type: "tcp",
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
  host: "our-following.net",
  port: 2737.18,
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
  maxActiveCxn: 8978.94,
  socketIdleTimeout: 9506.5,
  socketEndingMaxWait: 3181.93,
  socketMaxLifespan: 4236.02,
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
  ],
  staleChannelFlushMs: 882.5,
  enableHeader: true,
  preprocess: {
    disabled: false,
    command: "<value>",
    args: [
      "<value 1>",
    ],
  },
  description:
    "marksman upon known jealously descendant why precedent outdo infamous",
  authToken: "<value>",
  authType: "secret",
  textSecret: "<value>",
};
```

### `operations.InputTcpPqEnabledTrueWithPqConstraint`

```typescript
const value: operations.InputTcpPqEnabledTrueWithPqConstraint = {
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
  type: "tcp",
  disabled: true,
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
  host: "silent-sediment.biz",
  port: 4433.21,
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
  maxActiveCxn: 4554.19,
  socketIdleTimeout: 94.84,
  socketEndingMaxWait: 8115.53,
  socketMaxLifespan: 795.9,
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
    "<value 3>",
  ],
  staleChannelFlushMs: 6110.39,
  enableHeader: true,
  preprocess: {
    disabled: false,
    command: "<value>",
    args: [
      "<value 1>",
    ],
  },
  description: "where if than whale who within rudely accidentally clear",
  authToken: "<value>",
  authType: "secret",
  textSecret: "<value>",
};
```

