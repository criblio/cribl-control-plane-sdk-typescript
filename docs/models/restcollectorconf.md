# RestCollectorConf


## Supported Types

### `models.RestAuthenticationNone`

```typescript
const value: models.RestAuthenticationNone = {
  authentication: "none",
  discovery: {
    discoverType: "json",
    manualDiscoverResult: "<value>",
    discoverDataField: "<value>",
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

### `models.RestAuthenticationBasic`

```typescript
const value: models.RestAuthenticationBasic = {
  authentication: "basic",
  username: "Tito40",
  password: "4Drf49LK5Hpg6tC",
  discovery: {
    discoverType: "json",
    manualDiscoverResult: "<value>",
    discoverDataField: "<value>",
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
    pageField: "<value>",
    page: 8801.26,
    sizeField: "<value>",
    size: 5432.45,
    totalPageField: "<value>",
    totalRecordField: "<value>",
    maxPages: 9390.45,
    zeroIndexed: true,
  },
  timeout: 2162.73,
  useRoundRobinDns: false,
  disableTimeFilter: true,
  decodeUrl: false,
  rejectUnauthorized: true,
  captureHeaders: true,
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
    itemList: [
      "<value 1>",
      "<value 2>",
    ],
  },
  collectUrl: "https://needy-disclosure.org",
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
    type: "response_header",
    attribute: [
      "<value 1>",
    ],
    maxPages: 7221.57,
  },
  timeout: 1508.43,
  useRoundRobinDns: true,
  disableTimeFilter: true,
  decodeUrl: true,
  rejectUnauthorized: true,
  captureHeaders: true,
  stopOnEmptyResults: false,
  safeHeaders: [
    "<value 1>",
  ],
  retryRules: {
    type: "static",
    interval: "<value>",
    limit: "<value>",
    codes: "<value>",
    enableHeader: "<value>",
    retryConnectTimeout: "<value>",
    retryConnectReset: "<value>",
    multiplier: "<value>",
    maxIntervalMs: "<value>",
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
    discoverType: "none",
  },
  collectUrl: "https://frizzy-overheard.com",
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
    type: "request_page",
    pageField: "<value>",
    page: 4932.66,
    sizeField: "<value>",
    size: 1488.52,
    totalPageField: "<value>",
    totalRecordField: "<value>",
    maxPages: 9258.43,
    zeroIndexed: true,
  },
  timeout: 8520.57,
  useRoundRobinDns: true,
  disableTimeFilter: false,
  decodeUrl: false,
  rejectUnauthorized: true,
  captureHeaders: true,
  stopOnEmptyResults: false,
  safeHeaders: [
    "<value 1>",
    "<value 2>",
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
    attribute: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    maxPages: 9864.56,
    lastPageExpr: "<value>",
  },
  timeout: 7673.72,
  useRoundRobinDns: true,
  disableTimeFilter: true,
  decodeUrl: true,
  rejectUnauthorized: false,
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
    attribute: [
      "<value 1>",
    ],
    maxPages: 7541.99,
  },
  timeout: 9172.17,
  useRoundRobinDns: true,
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
    discoverType: "none",
  },
  collectUrl: "https://shadowy-dead.org",
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
    type: "request_page",
    pageField: "<value>",
    page: 8574.06,
    sizeField: "<value>",
    size: 2833.76,
    totalPageField: "<value>",
    totalRecordField: "<value>",
    maxPages: 2960.97,
    zeroIndexed: true,
  },
  timeout: 3007.96,
  useRoundRobinDns: true,
  disableTimeFilter: true,
  decodeUrl: false,
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
    manualDiscoverResult: "<value>",
    discoverDataField: "<value>",
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
    attribute: [
      "<value 1>",
      "<value 2>",
    ],
    maxPages: 3827.37,
    lastPageExpr: "<value>",
  },
  timeout: 8962.3,
  useRoundRobinDns: false,
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
    itemList: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  collectUrl: "https://fluffy-bug.com/",
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
  timeout: 5022.57,
  useRoundRobinDns: false,
  disableTimeFilter: true,
  decodeUrl: true,
  rejectUnauthorized: false,
  captureHeaders: false,
  stopOnEmptyResults: true,
  safeHeaders: [
    "<value 1>",
    "<value 2>",
  ],
  retryRules: {
    type: "static",
    interval: "<value>",
    limit: "<value>",
    codes: "<value>",
    enableHeader: "<value>",
    retryConnectTimeout: "<value>",
    retryConnectReset: "<value>",
    multiplier: "<value>",
    maxIntervalMs: "<value>",
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
    discoverType: "json",
    manualDiscoverResult: "<value>",
    discoverDataField: "<value>",
  },
  collectUrl: "https://puny-unibody.biz/",
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
    type: "response_header_link",
    nextRelationAttribute: "<value>",
    curRelationAttribute: "<value>",
    maxPages: 6092.87,
  },
  timeout: 6806.28,
  useRoundRobinDns: false,
  disableTimeFilter: true,
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
    type: "static",
    interval: "<value>",
    limit: "<value>",
    codes: "<value>",
    enableHeader: "<value>",
    retryConnectTimeout: "<value>",
    retryConnectReset: "<value>",
    multiplier: "<value>",
    maxIntervalMs: "<value>",
  },
  __scheduling: {
    stateTracking: {
      enabled: true,
    },
  },
};
```

