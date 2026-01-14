# SplunkCollectorConf


## Supported Types

### `models.SplunkAuthenticationNone`

```typescript
const value: models.SplunkAuthenticationNone = {
  authentication: "token",
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
  timeout: 5597.31,
  useRoundRobinDns: false,
  disableTimeFilter: false,
  rejectUnauthorized: false,
  handleEscapedChars: false,
  retryRules: {
    type: "static",
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
  authentication: "tokenSecret",
  username: "Mabelle41",
  password: "qh2mRqngRWb8Dmd",
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
  timeout: 5391.84,
  useRoundRobinDns: false,
  disableTimeFilter: true,
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

### `models.SplunkAuthenticationBasicSecret`

```typescript
const value: models.SplunkAuthenticationBasicSecret = {
  authentication: "basic",
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
  timeout: 2885.42,
  useRoundRobinDns: false,
  disableTimeFilter: true,
  rejectUnauthorized: false,
  handleEscapedChars: true,
  retryRules: {
    type: "static",
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
  authentication: "basicSecret",
  token: "<value>",
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
  timeout: 1952.7,
  useRoundRobinDns: false,
  disableTimeFilter: true,
  rejectUnauthorized: false,
  handleEscapedChars: true,
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

### `models.SplunkAuthenticationTokenSecret`

```typescript
const value: models.SplunkAuthenticationTokenSecret = {
  authentication: "basic",
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
  timeout: 8572.39,
  useRoundRobinDns: true,
  disableTimeFilter: true,
  rejectUnauthorized: false,
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

### `models.SplunkAuthenticationLogin`

```typescript
const value: models.SplunkAuthenticationLogin = {
  authentication: "basic",
  loginUrl: "https://plump-handover.com/",
  username: "Columbus_Gorczany",
  password: "UnhU5e52mz0OGva",
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
  timeout: 1971.24,
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

### `models.SplunkAuthenticationLoginSecret`

```typescript
const value: models.SplunkAuthenticationLoginSecret = {
  authentication: "basicSecret",
  loginUrl: "https://outlying-obligation.name/",
  credentialsSecret: "<value>",
  loginBody: "<value>",
  tokenRespAttribute: "<value>",
  authHeaderExpr: "<value>",
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
  timeout: 10.25,
  useRoundRobinDns: true,
  disableTimeFilter: true,
  rejectUnauthorized: false,
  handleEscapedChars: false,
  retryRules: {
    type: "static",
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

