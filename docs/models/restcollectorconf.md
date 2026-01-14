# RestCollectorConf


## Supported Types

### `models.RestAuthenticationNone`

```typescript
const value: models.RestAuthenticationNone = {
  authentication: "none",
  discovery: {},
  collectUrl: "https://elastic-hawk.org/",
  collectVerb: "<value>",
  collectRequestParams: "<value>",
  collectBody: "<value>",
  collectRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  pagination: {},
  safeHeaders: [
    "<value 1>",
  ],
  retryRules: {
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
  discovery: {},
  collectUrl: "https://courageous-secret.net/",
  collectVerb: "<value>",
  collectRequestParams: "<value>",
  collectBody: "<value>",
  collectRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  pagination: {},
  safeHeaders: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  retryRules: {
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
  discovery: {},
  collectUrl: "https://precious-metal.name",
  collectVerb: "<value>",
  collectRequestParams: "<value>",
  collectBody: "<value>",
  collectRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  pagination: {},
  safeHeaders: [
    "<value 1>",
  ],
  retryRules: {
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
  username: "Sandrine76",
  password: "L6eFLYm6snDntQz",
  authRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  discovery: {},
  collectUrl: "https://vibrant-interior.biz/",
  collectVerb: "<value>",
  collectRequestParams: "<value>",
  collectBody: "<value>",
  collectRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  pagination: {},
  safeHeaders: [
    "<value 1>",
  ],
  retryRules: {
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
  credentialsSecret: "<value>",
  authRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  discovery: {},
  collectUrl: "https://zesty-e-mail.name/",
  collectVerb: "<value>",
  collectRequestParams: "<value>",
  collectBody: "<value>",
  collectRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  pagination: {},
  safeHeaders: [
    "<value 1>",
    "<value 2>",
  ],
  retryRules: {
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
  collectUrl: "https://questionable-negotiation.com",
  collectVerb: "<value>",
  collectRequestParams: "<value>",
  collectBody: "<value>",
  collectRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  pagination: {},
  safeHeaders: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  retryRules: {
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
  collectUrl: "https://watery-consistency.com",
  collectVerb: "<value>",
  collectRequestParams: "<value>",
  collectBody: "<value>",
  collectRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  pagination: {},
  safeHeaders: [
    "<value 1>",
  ],
  retryRules: {
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
  discovery: {},
  collectUrl: "https://live-labourer.info/",
  collectVerb: "<value>",
  collectRequestParams: "<value>",
  collectBody: "<value>",
  collectRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  pagination: {},
  safeHeaders: [
    "<value 1>",
    "<value 2>",
  ],
  retryRules: {
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
  discovery: {},
  collectUrl: "https://tall-cruelty.biz",
  collectVerb: "<value>",
  collectRequestParams: "<value>",
  collectBody: "<value>",
  collectRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  pagination: {},
  safeHeaders: [
    "<value 1>",
  ],
  retryRules: {
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
  discovery: {},
  collectUrl: "https://giving-partridge.org/",
  collectVerb: "<value>",
  collectRequestParams: "<value>",
  collectBody: "<value>",
  collectRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  pagination: {},
  safeHeaders: [
    "<value 1>",
  ],
  retryRules: {
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

