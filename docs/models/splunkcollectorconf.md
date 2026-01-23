# SplunkCollectorConf


## Supported Types

### `models.SplunkAuthenticationNone`

```typescript
const value: models.SplunkAuthenticationNone = {
  authentication: "none",
  searchHead: "<value>",
  search: "<value>",
  earliest: "<value>",
  latest: "<value>",
  endpoint: "<value>",
  outputMode: "json",
  collectRequestParams: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  collectRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  timeout: 5419.69,
  useRoundRobinDns: false,
  disableTimeFilter: false,
  rejectUnauthorized: false,
  handleEscapedChars: false,
  retryRules: {
    type: "backoff",
    interval: "<value>",
    limit: "<value>",
    multiplier: "<value>",
    codes: "<value>",
    enableHeader: "<value>",
    retryConnectTimeout: "<value>",
    retryConnectReset: "<value>",
  },
};
```

### `models.SplunkAuthenticationBasic`

```typescript
const value: models.SplunkAuthenticationBasic = {
  authentication: "basic",
  username: "Rosalyn_Wisoky",
  password: "Hwqh2mRqngRWb8D",
  searchHead: "<value>",
  search: "<value>",
  earliest: "<value>",
  latest: "<value>",
  endpoint: "<value>",
  outputMode: "json",
  collectRequestParams: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  collectRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  timeout: 7103.1,
  useRoundRobinDns: true,
  disableTimeFilter: false,
  rejectUnauthorized: false,
  handleEscapedChars: true,
  retryRules: {
    type: "none",
    interval: "<value>",
    limit: "<value>",
    multiplier: "<value>",
    codes: "<value>",
    enableHeader: "<value>",
    retryConnectTimeout: "<value>",
    retryConnectReset: "<value>",
  },
};
```

### `models.SplunkAuthenticationBasicSecret`

```typescript
const value: models.SplunkAuthenticationBasicSecret = {
  authentication: "basicSecret",
  credentialsSecret: "<value>",
  searchHead: "<value>",
  search: "<value>",
  earliest: "<value>",
  latest: "<value>",
  endpoint: "<value>",
  outputMode: "csv",
  collectRequestParams: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  collectRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  timeout: 723.75,
  useRoundRobinDns: true,
  disableTimeFilter: false,
  rejectUnauthorized: true,
  handleEscapedChars: false,
  retryRules: {
    type: "none",
    interval: "<value>",
    limit: "<value>",
    multiplier: "<value>",
    codes: "<value>",
    enableHeader: "<value>",
    retryConnectTimeout: "<value>",
    retryConnectReset: "<value>",
  },
};
```

### `models.SplunkAuthenticationToken`

```typescript
const value: models.SplunkAuthenticationToken = {
  authentication: "token",
  token: "<value>",
  searchHead: "<value>",
  search: "<value>",
  earliest: "<value>",
  latest: "<value>",
  endpoint: "<value>",
  outputMode: "json",
  collectRequestParams: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  collectRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  timeout: 2075.62,
  useRoundRobinDns: true,
  disableTimeFilter: false,
  rejectUnauthorized: true,
  handleEscapedChars: false,
  retryRules: {
    type: "none",
    interval: "<value>",
    limit: "<value>",
    multiplier: "<value>",
    codes: "<value>",
    enableHeader: "<value>",
    retryConnectTimeout: "<value>",
    retryConnectReset: "<value>",
  },
};
```

### `models.SplunkAuthenticationTokenSecret`

```typescript
const value: models.SplunkAuthenticationTokenSecret = {
  authentication: "tokenSecret",
  tokenSecret: "<value>",
  searchHead: "<value>",
  search: "<value>",
  earliest: "<value>",
  latest: "<value>",
  endpoint: "<value>",
  outputMode: "csv",
  collectRequestParams: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  collectRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  timeout: 2514.26,
  useRoundRobinDns: false,
  disableTimeFilter: true,
  rejectUnauthorized: true,
  handleEscapedChars: false,
  retryRules: {
    type: "backoff",
    interval: "<value>",
    limit: "<value>",
    multiplier: "<value>",
    codes: "<value>",
    enableHeader: "<value>",
    retryConnectTimeout: "<value>",
    retryConnectReset: "<value>",
  },
};
```

### `models.SplunkAuthenticationLogin`

```typescript
const value: models.SplunkAuthenticationLogin = {
  authentication: "login",
  loginUrl: "https://incomplete-object.info/",
  username: "Augustus.Kuvalis",
  password: "UUnhU5e52mz0OGv",
  loginBody: "<value>",
  tokenRespAttribute: "<value>",
  authHeaderExpr: "<value>",
  searchHead: "<value>",
  search: "<value>",
  earliest: "<value>",
  latest: "<value>",
  endpoint: "<value>",
  outputMode: "json",
  collectRequestParams: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  collectRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  timeout: 5625.55,
  useRoundRobinDns: true,
  disableTimeFilter: false,
  rejectUnauthorized: true,
  handleEscapedChars: true,
  retryRules: {
    type: "static",
    interval: "<value>",
    limit: "<value>",
    codes: "<value>",
    enableHeader: "<value>",
    retryConnectTimeout: "<value>",
    retryConnectReset: "<value>",
    multiplier: "<value>",
  },
};
```

### `models.SplunkAuthenticationLoginSecret`

```typescript
const value: models.SplunkAuthenticationLoginSecret = {
  authentication: "loginSecret",
  loginUrl: "https://cruel-monster.name/",
  credentialsSecret: "<value>",
  loginBody: "<value>",
  tokenRespAttribute: "<value>",
  authHeaderExpr: "<value>",
  searchHead: "<value>",
  search: "<value>",
  earliest: "<value>",
  latest: "<value>",
  endpoint: "<value>",
  outputMode: "json",
  collectRequestParams: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  collectRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  timeout: 4231.82,
  useRoundRobinDns: true,
  disableTimeFilter: true,
  rejectUnauthorized: true,
  handleEscapedChars: false,
  retryRules: {
    type: "backoff",
    interval: "<value>",
    limit: "<value>",
    multiplier: "<value>",
    codes: "<value>",
    enableHeader: "<value>",
    retryConnectTimeout: "<value>",
    retryConnectReset: "<value>",
  },
};
```

