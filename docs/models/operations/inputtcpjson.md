# InputTcpjson


## Supported Types

### `operations.InputTcpjsonSendToRoutesTrueConstraint`

```typescript
const value: operations.InputTcpjsonSendToRoutesTrueConstraint = {
  sendToRoutes: false,
  id: "<id>",
  type: "tcpjson",
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
  host: "affectionate-slipper.org",
  port: 2567.69,
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
  maxActiveCxn: 911.91,
  socketIdleTimeout: 4895.14,
  socketEndingMaxWait: 4976.69,
  socketMaxLifespan: 2979.93,
  enableProxyHeader: true,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  enableLoadBalancing: false,
  authType: "manual",
  description:
    "following browse video geez midwife except recovery caption celebrated",
  authToken: "<value>",
  textSecret: "<value>",
};
```

### `operations.InputTcpjsonSendToRoutesFalseWithConnectionsConstraint`

```typescript
const value: operations.InputTcpjsonSendToRoutesFalseWithConnectionsConstraint =
  {
    sendToRoutes: false,
    connections: [
      {
        pipeline: "<value>",
        output: "<value>",
      },
    ],
    id: "<id>",
    type: "tcpjson",
    disabled: true,
    pipeline: "<value>",
    environment: "<value>",
    pqEnabled: false,
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
    host: "sticky-fog.com",
    port: 6819.91,
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
    maxActiveCxn: 3979.96,
    socketIdleTimeout: 9580.6,
    socketEndingMaxWait: 4565.81,
    socketMaxLifespan: 1196.27,
    enableProxyHeader: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    enableLoadBalancing: false,
    authType: "secret",
    description: "gosh concerning majestically annually",
    authToken: "<value>",
    textSecret: "<value>",
  };
```

### `operations.InputTcpjsonPqEnabledFalseConstraint`

```typescript
const value: operations.InputTcpjsonPqEnabledFalseConstraint = {
  pqEnabled: false,
  id: "<id>",
  type: "tcpjson",
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
  host: "political-derby.info",
  port: 4700.93,
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
  maxActiveCxn: 2196.35,
  socketIdleTimeout: 810.35,
  socketEndingMaxWait: 8246.17,
  socketMaxLifespan: 4125.42,
  enableProxyHeader: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  enableLoadBalancing: true,
  authType: "secret",
  description: "ashamed from atop",
  authToken: "<value>",
  textSecret: "<value>",
};
```

### `operations.InputTcpjsonPqEnabledTrueWithPqConstraint`

```typescript
const value: operations.InputTcpjsonPqEnabledTrueWithPqConstraint = {
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
  type: "tcpjson",
  disabled: true,
  pipeline: "<value>",
  sendToRoutes: false,
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
  host: "tiny-kick.com",
  port: 4214.35,
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
  maxActiveCxn: 1058.16,
  socketIdleTimeout: 9292.1,
  socketEndingMaxWait: 1366.11,
  socketMaxLifespan: 8765.6,
  enableProxyHeader: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  enableLoadBalancing: true,
  authType: "secret",
  description: "joint yahoo if furthermore silently because bitterly",
  authToken: "<value>",
  textSecret: "<value>",
};
```

