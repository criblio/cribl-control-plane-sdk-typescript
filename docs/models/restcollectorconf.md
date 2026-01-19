# RestCollectorConf


## Supported Types

### `models.RestAuthenticationNone`

```typescript
const value: models.RestAuthenticationNone = {
  authentication: "none",
  discovery: {
    discoverType: "json",
  },
  collectUrl: "https://inexperienced-unblinking.biz/",
  collectMethod: "get",
  collectVerb: "<value>",
  collectRequestParams: "<value>",
  collectBody: "<value>",
  collectRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  pagination: {
    type: "none",
  },
  timeout: 3213.74,
  useRoundRobinDns: false,
  disableTimeFilter: false,
  decodeUrl: false,
  rejectUnauthorized: true,
  captureHeaders: true,
  stopOnEmptyResults: false,
  safeHeaders: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  retryRules: {
    type: "static",
    interval: "<value>",
    limit: "<value>",
    multiplier: "<value>",
    maxIntervalMs: "<value>",
    codes: "<value>",
    enableHeader: "<value>",
    retryConnectTimeout: "<value>",
    retryConnectReset: "<value>",
  },
  __scheduling: {
    stateTracking: {
      enabled: true,
    },
  },
};
```

### `models.RestAuthenticationBasic`

```typescript
const value: models.RestAuthenticationBasic = {
  authentication: "basic",
  username: "Tito40",
  password: "4Drf49LK5Hpg6tC",
  discovery: {
    discoverType: "json",
  },
  collectUrl: "https://stark-sightseeing.org/",
  collectMethod: "other",
  collectVerb: "<value>",
  collectRequestParams: "<value>",
  collectBody: "<value>",
  collectRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  pagination: {
    type: "request_page",
  },
  timeout: 8801.26,
  useRoundRobinDns: false,
  disableTimeFilter: false,
  decodeUrl: true,
  rejectUnauthorized: true,
  captureHeaders: false,
  stopOnEmptyResults: true,
  safeHeaders: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  retryRules: {
    type: "backoff",
    interval: "<value>",
    limit: "<value>",
    multiplier: "<value>",
    maxIntervalMs: "<value>",
    codes: "<value>",
    enableHeader: "<value>",
    retryConnectTimeout: "<value>",
    retryConnectReset: "<value>",
  },
  __scheduling: {
    stateTracking: {
      enabled: false,
    },
  },
};
```

### `models.RestAuthenticationBasicSecret`

```typescript
const value: models.RestAuthenticationBasicSecret = {
  authentication: "basicSecret",
  credentialsSecret: "<value>",
  discovery: {
    discoverType: "list",
  },
  collectUrl: "https://official-mallard.biz",
  collectMethod: "other",
  collectVerb: "<value>",
  collectRequestParams: "<value>",
  collectBody: "<value>",
  collectRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  pagination: {
    type: "request_page",
  },
  timeout: 3619.97,
  useRoundRobinDns: true,
  disableTimeFilter: false,
  decodeUrl: true,
  rejectUnauthorized: true,
  captureHeaders: true,
  stopOnEmptyResults: true,
  safeHeaders: [
    "<value 1>",
  ],
  retryRules: {
    type: "none",
    interval: "<value>",
    limit: "<value>",
    multiplier: "<value>",
    maxIntervalMs: "<value>",
    codes: "<value>",
    enableHeader: "<value>",
    retryConnectTimeout: "<value>",
    retryConnectReset: "<value>",
  },
  __scheduling: {
    stateTracking: {
      enabled: true,
    },
  },
};
```

### `models.RestAuthenticationLogin`

```typescript
const value: models.RestAuthenticationLogin = {
  authentication: "login",
  loginUrl: "https://swift-babushka.biz",
  username: "Odell29",
  password: "FLYm6snDntQzyN5",
  loginBody: "<value>",
  getAuthTokenFromHeader: true,
  authHeaderKey: "<value>",
  authHeaderExpr: "<value>",
  authRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  discovery: {
    discoverType: "http",
  },
  collectUrl: "https://sparkling-import.net",
  collectMethod: "get",
  collectVerb: "<value>",
  collectRequestParams: "<value>",
  collectBody: "<value>",
  collectRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  pagination: {
    type: "none",
  },
  timeout: 6945.54,
  useRoundRobinDns: false,
  disableTimeFilter: false,
  decodeUrl: true,
  rejectUnauthorized: false,
  captureHeaders: true,
  stopOnEmptyResults: false,
  safeHeaders: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  retryRules: {
    type: "backoff",
    interval: "<value>",
    limit: "<value>",
    multiplier: "<value>",
    maxIntervalMs: "<value>",
    codes: "<value>",
    enableHeader: "<value>",
    retryConnectTimeout: "<value>",
    retryConnectReset: "<value>",
  },
  __scheduling: {
    stateTracking: {
      enabled: true,
    },
  },
};
```

### `models.RestAuthenticationLoginSecret`

```typescript
const value: models.RestAuthenticationLoginSecret = {
  authentication: "loginSecret",
  loginUrl: "https://zesty-e-mail.name/",
  credentialsSecret: "<value>",
  loginBody: "<value>",
  getAuthTokenFromHeader: true,
  authHeaderKey: "<value>",
  authHeaderExpr: "<value>",
  authRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  discovery: {
    discoverType: "none",
  },
  collectUrl: "https://ornate-priesthood.biz",
  collectMethod: "post_with_body",
  collectVerb: "<value>",
  collectRequestParams: "<value>",
  collectBody: "<value>",
  collectRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  pagination: {
    type: "response_body",
  },
  timeout: 9647.19,
  useRoundRobinDns: false,
  disableTimeFilter: false,
  decodeUrl: true,
  rejectUnauthorized: true,
  captureHeaders: true,
  stopOnEmptyResults: false,
  safeHeaders: [
    "<value 1>",
    "<value 2>",
  ],
  retryRules: {
    type: "static",
    interval: "<value>",
    limit: "<value>",
    multiplier: "<value>",
    maxIntervalMs: "<value>",
    codes: "<value>",
    enableHeader: "<value>",
    retryConnectTimeout: "<value>",
    retryConnectReset: "<value>",
  },
  __scheduling: {
    stateTracking: {
      enabled: false,
    },
  },
};
```

### `models.RestAuthenticationOauth`

```typescript
const value: models.RestAuthenticationOauth = {
  authentication: "oauth",
  loginUrl: "https://questionable-negotiation.com",
  tokenRespAttribute: "<value>",
  authHeaderKey: "<value>",
  authHeaderExpr: "<value>",
  clientSecretParamName: "<value>",
  clientSecretParamValue: "<value>",
  authRequestParams: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  authRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  discovery: {
    discoverType: "none",
  },
  collectUrl: "https://jaunty-morning.org",
  collectMethod: "post_with_body",
  collectVerb: "<value>",
  collectRequestParams: "<value>",
  collectBody: "<value>",
  collectRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  pagination: {
    type: "response_header",
  },
  timeout: 4407.83,
  useRoundRobinDns: false,
  disableTimeFilter: false,
  decodeUrl: true,
  rejectUnauthorized: false,
  captureHeaders: true,
  stopOnEmptyResults: false,
  safeHeaders: [
    "<value 1>",
  ],
  retryRules: {
    type: "backoff",
    interval: "<value>",
    limit: "<value>",
    multiplier: "<value>",
    maxIntervalMs: "<value>",
    codes: "<value>",
    enableHeader: "<value>",
    retryConnectTimeout: "<value>",
    retryConnectReset: "<value>",
  },
  __scheduling: {
    stateTracking: {
      enabled: true,
    },
  },
};
```

### `models.RestAuthenticationOauthSecret`

```typescript
const value: models.RestAuthenticationOauthSecret = {
  authentication: "oauthSecret",
  loginUrl: "https://watery-consistency.com",
  tokenRespAttribute: "<value>",
  authHeaderKey: "<value>",
  authHeaderExpr: "<value>",
  clientSecretParamName: "<value>",
  textSecret: "<value>",
  authRequestParams: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  authRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  discovery: {
    discoverType: "http",
  },
  collectUrl: "https://square-marten.net",
  collectMethod: "other",
  collectVerb: "<value>",
  collectRequestParams: "<value>",
  collectBody: "<value>",
  collectRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  pagination: {
    type: "none",
  },
  timeout: 1538.96,
  useRoundRobinDns: false,
  disableTimeFilter: false,
  decodeUrl: false,
  rejectUnauthorized: true,
  captureHeaders: false,
  stopOnEmptyResults: false,
  safeHeaders: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  retryRules: {
    type: "static",
    interval: "<value>",
    limit: "<value>",
    multiplier: "<value>",
    maxIntervalMs: "<value>",
    codes: "<value>",
    enableHeader: "<value>",
    retryConnectTimeout: "<value>",
    retryConnectReset: "<value>",
  },
  __scheduling: {
    stateTracking: {
      enabled: false,
    },
  },
};
```

### `models.RestAuthenticationGoogleOauth`

```typescript
const value: models.RestAuthenticationGoogleOauth = {
  authentication: "google_oauth",
  scopes: [
    "<value 1>",
  ],
  serviceAccountCredentials: "<value>",
  subject: "<value>",
  discovery: {
    discoverType: "json",
  },
  collectUrl: "https://measly-humor.info/",
  collectMethod: "post_with_body",
  collectVerb: "<value>",
  collectRequestParams: "<value>",
  collectBody: "<value>",
  collectRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  pagination: {
    type: "response_body",
  },
  timeout: 6063.11,
  useRoundRobinDns: true,
  disableTimeFilter: false,
  decodeUrl: false,
  rejectUnauthorized: false,
  captureHeaders: false,
  stopOnEmptyResults: false,
  safeHeaders: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  retryRules: {
    type: "static",
    interval: "<value>",
    limit: "<value>",
    multiplier: "<value>",
    maxIntervalMs: "<value>",
    codes: "<value>",
    enableHeader: "<value>",
    retryConnectTimeout: "<value>",
    retryConnectReset: "<value>",
  },
  __scheduling: {
    stateTracking: {
      enabled: false,
    },
  },
};
```

### `models.RestAuthenticationGoogleOauthSecret`

```typescript
const value: models.RestAuthenticationGoogleOauthSecret = {
  authentication: "google_oauthSecret",
  scopes: [
    "<value 1>",
    "<value 2>",
  ],
  textSecret: "<value>",
  subject: "<value>",
  discovery: {
    discoverType: "list",
  },
  collectUrl: "https://dull-earth.com",
  collectMethod: "get",
  collectVerb: "<value>",
  collectRequestParams: "<value>",
  collectBody: "<value>",
  collectRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  pagination: {
    type: "none",
  },
  timeout: 1050.08,
  useRoundRobinDns: false,
  disableTimeFilter: false,
  decodeUrl: true,
  rejectUnauthorized: true,
  captureHeaders: false,
  stopOnEmptyResults: false,
  safeHeaders: [
    "<value 1>",
  ],
  retryRules: {
    type: "backoff",
    interval: "<value>",
    limit: "<value>",
    multiplier: "<value>",
    maxIntervalMs: "<value>",
    codes: "<value>",
    enableHeader: "<value>",
    retryConnectTimeout: "<value>",
    retryConnectReset: "<value>",
  },
  __scheduling: {
    stateTracking: {
      enabled: false,
    },
  },
};
```

### `models.RestAuthenticationHmac`

```typescript
const value: models.RestAuthenticationHmac = {
  authentication: "hmac",
  hmacFunctionId: "<id>",
  discovery: {
    discoverType: "http",
  },
  collectUrl: "https://giving-partridge.org/",
  collectMethod: "get",
  collectVerb: "<value>",
  collectRequestParams: "<value>",
  collectBody: "<value>",
  collectRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  pagination: {
    type: "response_header",
  },
  timeout: 1068.68,
  useRoundRobinDns: false,
  disableTimeFilter: false,
  decodeUrl: false,
  rejectUnauthorized: false,
  captureHeaders: true,
  stopOnEmptyResults: true,
  safeHeaders: [
    "<value 1>",
  ],
  retryRules: {
    type: "none",
    interval: "<value>",
    limit: "<value>",
    multiplier: "<value>",
    maxIntervalMs: "<value>",
    codes: "<value>",
    enableHeader: "<value>",
    retryConnectTimeout: "<value>",
    retryConnectReset: "<value>",
  },
  __scheduling: {
    stateTracking: {
      enabled: false,
    },
  },
};
```

