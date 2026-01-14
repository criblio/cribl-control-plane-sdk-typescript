# InputLoki


## Supported Types

### `models.InputLokiSendToRoutesTrueConstraint`

```typescript
const value: models.InputLokiSendToRoutesTrueConstraint = {
  sendToRoutes: false,
  id: "<id>",
  type: "loki",
  disabled: false,
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
  host: "ultimate-toaster.name",
  port: 2566,
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
  maxActiveReq: 130.24,
  maxRequestsPerSocket: 264099,
  enableProxyHeader: true,
  captureHeaders: true,
  activityLogSampleRate: 5004.22,
  requestTimeout: 5639.95,
  socketTimeout: 5079.53,
  keepAliveTimeout: 9907.78,
  enableHealthCheck: true,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  lokiAPI: "<value>",
  authType: "basic",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "oxygenate modulo smoke tray blah clear-cut",
  username: "Samantha.Hilpert7",
  password: "qHf9vcHYM6xMjLH",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://nice-charlatan.net/",
  secretParamName: "<value>",
  secret: "<value>",
  tokenAttributeName: "<value>",
  authHeaderExpr: "<value>",
  tokenTimeoutSecs: 5166.78,
  oauthParams: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  oauthHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
};
```

### `models.InputLokiSendToRoutesFalseWithConnectionsConstraint`

```typescript
const value: models.InputLokiSendToRoutesFalseWithConnectionsConstraint = {
  sendToRoutes: true,
  connections: [
    {
      pipeline: "<value>",
      output: "<value>",
    },
  ],
  id: "<id>",
  type: "loki",
  disabled: false,
  pipeline: "<value>",
  environment: "<value>",
  pqEnabled: false,
  streamtags: [
    "<value 1>",
    "<value 2>",
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
  host: "subtle-plumber.info",
  port: 1262.71,
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
  maxActiveReq: 4693.43,
  maxRequestsPerSocket: 902702,
  enableProxyHeader: false,
  captureHeaders: false,
  activityLogSampleRate: 6621.26,
  requestTimeout: 2454.63,
  socketTimeout: 6834.53,
  keepAliveTimeout: 3935.44,
  enableHealthCheck: true,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  lokiAPI: "<value>",
  authType: "oauth",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description:
    "though quadruple knit of besides thoroughly barring black-and-white",
  username: "Branson.Bergnaum",
  password: "q0yxtQHJgIu6lqy",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://brave-safe.biz/",
  secretParamName: "<value>",
  secret: "<value>",
  tokenAttributeName: "<value>",
  authHeaderExpr: "<value>",
  tokenTimeoutSecs: 3948.98,
  oauthParams: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  oauthHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
};
```

### `models.InputLokiPqEnabledFalseConstraint`

```typescript
const value: models.InputLokiPqEnabledFalseConstraint = {
  pqEnabled: true,
  id: "<id>",
  type: "loki",
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
  host: "boring-jazz.net",
  port: 4552.67,
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
  maxActiveReq: 1447.05,
  maxRequestsPerSocket: 427999,
  enableProxyHeader: true,
  captureHeaders: true,
  activityLogSampleRate: 9731.07,
  requestTimeout: 1050.87,
  socketTimeout: 4185.31,
  keepAliveTimeout: 9713.14,
  enableHealthCheck: true,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  lokiAPI: "<value>",
  authType: "none",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "ick numeric impossible immediate disarm following unless loose",
  username: "Betty75",
  password: "lJcubNM5ZHdnFYI",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://nippy-lawmaker.info/",
  secretParamName: "<value>",
  secret: "<value>",
  tokenAttributeName: "<value>",
  authHeaderExpr: "<value>",
  tokenTimeoutSecs: 6328.32,
  oauthParams: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  oauthHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
};
```

### `models.InputLokiPqEnabledTrueWithPqConstraint`

```typescript
const value: models.InputLokiPqEnabledTrueWithPqConstraint = {
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
  type: "loki",
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
  host: "avaricious-mozzarella.info",
  port: 7527.16,
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
  maxActiveReq: 6796.13,
  maxRequestsPerSocket: 936687,
  enableProxyHeader: false,
  captureHeaders: false,
  activityLogSampleRate: 6312.29,
  requestTimeout: 4114.58,
  socketTimeout: 718.47,
  keepAliveTimeout: 2062.35,
  enableHealthCheck: false,
  ipAllowlistRegex: "<value>",
  ipDenylistRegex: "<value>",
  lokiAPI: "<value>",
  authType: "basic",
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  description: "never urgently kettledrum outside video until since",
  username: "Katelynn93",
  password: "vWvQ6Vs_slar0Ca",
  token: "<value>",
  credentialsSecret: "<value>",
  textSecret: "<value>",
  loginUrl: "https://homely-subsidy.info",
  secretParamName: "<value>",
  secret: "<value>",
  tokenAttributeName: "<value>",
  authHeaderExpr: "<value>",
  tokenTimeoutSecs: 362.89,
  oauthParams: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  oauthHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
};
```

