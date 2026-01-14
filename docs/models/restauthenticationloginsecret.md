# RestAuthenticationLoginSecret


## Supported Types

### `models.RestAuthenticationLoginSecretGetAuthTokenFromHeaderFalse`

```typescript
const value: models.RestAuthenticationLoginSecretGetAuthTokenFromHeaderFalse = {
  getAuthTokenFromHeader: false,
  tokenRespAttribute: "<value>",
  authentication: "login",
  loginUrl: "https://worse-hippodrome.net",
  credentialsSecret: "<value>",
  loginBody: "<value>",
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
  collectUrl: "https://overcooked-whack.net/",
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
  },
  timeout: 4042.13,
  useRoundRobinDns: false,
  disableTimeFilter: false,
  decodeUrl: false,
  rejectUnauthorized: false,
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

### `models.RestAuthenticationLoginSecretGetAuthTokenFromHeaderTrue`

```typescript
const value: models.RestAuthenticationLoginSecretGetAuthTokenFromHeaderTrue = {
  getAuthTokenFromHeader: false,
  authentication: "login",
  loginUrl: "https://winding-alligator.com",
  credentialsSecret: "<value>",
  loginBody: "<value>",
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
  collectUrl: "https://gleaming-dividend.info",
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
  },
  timeout: 1021.95,
  useRoundRobinDns: true,
  disableTimeFilter: false,
  decodeUrl: false,
  rejectUnauthorized: true,
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

