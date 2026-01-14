# HealthCheckCollectorConf


## Supported Types

### `models.HealthCheckAuthenticationNone`

```typescript
const value: models.HealthCheckAuthenticationNone = {
  authentication: "none",
  discovery: {
    discoverType: "json",
  },
  collectUrl: "https://untried-marketplace.info/",
  collectMethod: "post",
  collectRequestParams: "<value>",
  collectBody: "<value>",
  collectRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  authenticateCollect: false,
  timeout: 4834.21,
  rejectUnauthorized: false,
  defaultBreakers: "Cribl",
  safeHeaders: [
    "<value 1>",
    "<value 2>",
  ],
  retryRules: {
    type: "none",
    interval: "<value>",
    limit: "<value>",
    multiplier: "<value>",
    codes: "<value>",
    enableHeader: "<value>",
  },
};
```

### `models.HealthCheckAuthenticationBasic`

```typescript
const value: models.HealthCheckAuthenticationBasic = {
  authentication: "basic",
  username: "Lyric.Grant",
  password: "j8oqJdqwGmAtefF",
  discovery: {
    discoverType: "list",
  },
  collectUrl: "https://usable-replacement.net",
  collectMethod: "get",
  collectRequestParams: "<value>",
  collectBody: "<value>",
  collectRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  authenticateCollect: false,
  timeout: 7651.76,
  rejectUnauthorized: true,
  defaultBreakers: "Cribl",
  safeHeaders: [
    "<value 1>",
    "<value 2>",
  ],
  retryRules: {
    type: "none",
    interval: "<value>",
    limit: "<value>",
    multiplier: "<value>",
    codes: "<value>",
    enableHeader: "<value>",
  },
};
```

### `models.HealthCheckAuthenticationBasicSecret`

```typescript
const value: models.HealthCheckAuthenticationBasicSecret = {
  authentication: "basicSecret",
  credentialsSecret: "<value>",
  discovery: {
    discoverType: "http",
  },
  collectUrl: "https://stale-deck.org/",
  collectMethod: "post",
  collectRequestParams: "<value>",
  collectBody: "<value>",
  collectRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  authenticateCollect: false,
  timeout: 172.59,
  rejectUnauthorized: true,
  defaultBreakers: "Cribl",
  safeHeaders: [
    "<value 1>",
  ],
  retryRules: {
    type: "backoff",
    interval: "<value>",
    limit: "<value>",
    multiplier: "<value>",
    codes: "<value>",
    enableHeader: "<value>",
  },
};
```

### `models.HealthCheckAuthenticationLogin`

```typescript
const value: models.HealthCheckAuthenticationLogin = {
  authentication: "login",
  loginUrl: "https://definitive-provision.net",
  username: "Pink.Kris17",
  password: "Pm9peETaxfHLEYC",
  loginBody: "<value>",
  tokenRespAttribute: "<value>",
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
  collectUrl: "https://worst-minion.org",
  collectMethod: "get",
  collectRequestParams: "<value>",
  collectBody: "<value>",
  collectRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  authenticateCollect: true,
  timeout: 3710.02,
  rejectUnauthorized: true,
  defaultBreakers: "Cribl",
  safeHeaders: [
    "<value 1>",
  ],
  retryRules: {
    type: "static",
    interval: "<value>",
    limit: "<value>",
    multiplier: "<value>",
    codes: "<value>",
    enableHeader: "<value>",
  },
};
```

### `models.HealthCheckAuthenticationLoginSecret`

```typescript
const value: models.HealthCheckAuthenticationLoginSecret = {
  authentication: "loginSecret",
  loginUrl: "https://husky-granny.name/",
  credentialsSecret: "<value>",
  loginBody: "<value>",
  tokenRespAttribute: "<value>",
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
  collectUrl: "https://rural-lady.net/",
  collectMethod: "get",
  collectRequestParams: "<value>",
  collectBody: "<value>",
  collectRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  authenticateCollect: true,
  timeout: 7385.66,
  rejectUnauthorized: false,
  defaultBreakers: "Cribl",
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
    codes: "<value>",
    enableHeader: "<value>",
  },
};
```

### `models.HealthCheckAuthenticationOauth`

```typescript
const value: models.HealthCheckAuthenticationOauth = {
  authentication: "oauth",
  loginUrl: "https://jittery-almighty.com/",
  tokenRespAttribute: "<value>",
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
  collectUrl: "https://incomparable-populist.info/",
  collectMethod: "get",
  collectRequestParams: "<value>",
  collectBody: "<value>",
  collectRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  authenticateCollect: true,
  timeout: 122.25,
  rejectUnauthorized: false,
  defaultBreakers: "Cribl",
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
    codes: "<value>",
    enableHeader: "<value>",
  },
};
```

### `models.HealthCheckAuthenticationOauthSecret`

```typescript
const value: models.HealthCheckAuthenticationOauthSecret = {
  authentication: "oauthSecret",
  loginUrl: "https://artistic-zen.info",
  tokenRespAttribute: "<value>",
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
  collectUrl: "https://far-coal.info",
  collectMethod: "post",
  collectRequestParams: "<value>",
  collectBody: "<value>",
  collectRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  authenticateCollect: true,
  timeout: 1898.29,
  rejectUnauthorized: false,
  defaultBreakers: "Cribl",
  safeHeaders: [
    "<value 1>",
    "<value 2>",
  ],
  retryRules: {
    type: "backoff",
    interval: "<value>",
    limit: "<value>",
    multiplier: "<value>",
    codes: "<value>",
    enableHeader: "<value>",
  },
};
```

