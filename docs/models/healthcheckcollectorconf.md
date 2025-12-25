# HealthCheckCollectorConf


## Supported Types

### `models.HealthCheckAuthenticationNone`

```typescript
const value: models.HealthCheckAuthenticationNone = {
  authentication: "none",
  discovery: {},
  collectUrl: "https://dreary-thigh.name/",
  collectRequestParams: "<value>",
  collectBody: "<value>",
  collectRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  defaultBreakers: "Cribl",
  safeHeaders: [
    "<value 1>",
    "<value 2>",
  ],
  retryRules: {
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
  discovery: {},
  collectUrl: "https://regal-tooth.net",
  collectRequestParams: "<value>",
  collectBody: "<value>",
  collectRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  defaultBreakers: "Cribl",
  safeHeaders: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  retryRules: {
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
  discovery: {},
  collectUrl: "https://fussy-season.biz/",
  collectRequestParams: "<value>",
  collectBody: "<value>",
  collectRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  defaultBreakers: "Cribl",
  safeHeaders: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  retryRules: {
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
  username: "Maci79",
  password: "N01Pm9peETaxfHL",
  tokenRespAttribute: "<value>",
  authRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  discovery: {},
  collectUrl: "https://classic-papa.org",
  collectRequestParams: "<value>",
  collectBody: "<value>",
  collectRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  defaultBreakers: "Cribl",
  safeHeaders: [
    "<value 1>",
    "<value 2>",
  ],
  retryRules: {
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
  credentialsSecret: "<value>",
  tokenRespAttribute: "<value>",
  authRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  discovery: {},
  collectUrl: "https://husky-granny.name/",
  collectRequestParams: "<value>",
  collectBody: "<value>",
  collectRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  defaultBreakers: "Cribl",
  safeHeaders: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  retryRules: {
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
  tokenRespAttribute: "<value>",
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
  discovery: {},
  collectUrl: "https://jittery-almighty.com/",
  collectRequestParams: "<value>",
  collectBody: "<value>",
  collectRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  defaultBreakers: "Cribl",
  safeHeaders: [
    "<value 1>",
  ],
  retryRules: {
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
  tokenRespAttribute: "<value>",
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
  discovery: {},
  collectUrl: "https://artistic-zen.info",
  collectRequestParams: "<value>",
  collectBody: "<value>",
  collectRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  defaultBreakers: "Cribl",
  safeHeaders: [
    "<value 1>",
  ],
  retryRules: {
    interval: "<value>",
    limit: "<value>",
    multiplier: "<value>",
    codes: "<value>",
    enableHeader: "<value>",
  },
};
```

