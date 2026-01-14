# RestAuthenticationLogin


## Supported Types

### `models.RestAuthenticationLoginGetAuthTokenFromHeaderFalse`

```typescript
const value: models.RestAuthenticationLoginGetAuthTokenFromHeaderFalse = {
  getAuthTokenFromHeader: false,
  tokenRespAttribute: "<value>",
  authentication: "login",
  loginUrl: "https://grizzled-lamp.org/",
  username: "Yadira.Metz72",
  password: "q2sc5pYeEMoG9wa",
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
    discoverType: "json",
  },
  collectUrl: "https://juicy-premium.org/",
  collectMethod: "post",
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
  timeout: 4538.44,
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

### `models.RestAuthenticationLoginGetAuthTokenFromHeaderTrue`

```typescript
const value: models.RestAuthenticationLoginGetAuthTokenFromHeaderTrue = {
  getAuthTokenFromHeader: true,
  authentication: "oauthSecret",
  loginUrl: "https://compassionate-adult.net/",
  username: "Lempi73",
  password: "N1QH05qB2yyVeQN",
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
    discoverType: "list",
  },
  collectUrl: "https://rosy-fit.name",
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
  timeout: 3866.08,
  useRoundRobinDns: true,
  disableTimeFilter: true,
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

