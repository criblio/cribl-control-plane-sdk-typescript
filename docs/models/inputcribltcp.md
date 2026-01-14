# InputCriblTcp


## Supported Types

### `models.InputCriblTcpSendToRoutesTrueConstraint`

```typescript
const value: models.InputCriblTcpSendToRoutesTrueConstraint = {
  sendToRoutes: true,
  id: "<id>",
  type: "cribl_tcp",
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
  host: "radiant-charm.biz",
  port: 7728.91,
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
  maxActiveCxn: 4976.85,
  socketIdleTimeout: 5200.15,
  socketEndingMaxWait: 521.6,
  socketMaxLifespan: 733.31,
  enableProxyHeader: true,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  enableLoadBalancing: false,
  authTokens: [
    {
      tokenSecret: "<value>",
      enabled: true,
      description: "without slipper appropriate",
    },
  ],
  description: "certainly following whoa",
};
```

### `models.InputCriblTcpSendToRoutesFalseWithConnectionsConstraint`

```typescript
const value: models.InputCriblTcpSendToRoutesFalseWithConnectionsConstraint = {
  sendToRoutes: true,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "cribl_tcp",
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
  host: "wide-eyed-cutover.biz",
  port: 6783.52,
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
  maxActiveCxn: 6889.84,
  socketIdleTimeout: 2547.85,
  socketEndingMaxWait: 7620.66,
  socketMaxLifespan: 7162.52,
  enableProxyHeader: false,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  enableLoadBalancing: true,
  authTokens: [
    {
      tokenSecret: "<value>",
      enabled: true,
      description: "without slipper appropriate",
    },
  ],
  description:
    "yahoo upright heartbeat vainly considering daintily making amid boo pocket-watch",
};
```

### `models.InputCriblTcpPqEnabledFalseConstraint`

```typescript
const value: models.InputCriblTcpPqEnabledFalseConstraint = {
  pqEnabled: true,
  id: "<id>",
  type: "cribl_tcp",
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
  host: "magnificent-reservation.com",
  port: 6198.05,
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
  maxActiveCxn: 5419.25,
  socketIdleTimeout: 3761.51,
  socketEndingMaxWait: 6643.12,
  socketMaxLifespan: 4245.06,
  enableProxyHeader: true,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  enableLoadBalancing: true,
  authTokens: [
    {
      tokenSecret: "<value>",
      enabled: true,
      description: "without slipper appropriate",
    },
  ],
  description: "ugh joyfully thick whoever ugh overspend",
};
```

### `models.InputCriblTcpPqEnabledTrueWithPqConstraint`

```typescript
const value: models.InputCriblTcpPqEnabledTrueWithPqConstraint = {
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
  type: "cribl_tcp",
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
  host: "bowed-jogging.name",
  port: 5874.46,
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
  maxActiveCxn: 6466.01,
  socketIdleTimeout: 1191.1,
  socketEndingMaxWait: 8278.4,
  socketMaxLifespan: 7327.67,
  enableProxyHeader: true,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  enableLoadBalancing: false,
  authTokens: [
    {
      tokenSecret: "<value>",
      enabled: true,
      description: "without slipper appropriate",
    },
  ],
  description: "cruelly except in well furthermore",
};
```

