# RestCollectorConf


## Supported Types

### `models.RestAuthenticationNone`

```typescript
const value: models.RestAuthenticationNone = {
  authentication: "none",
  collectUrl: "https://elastic-hawk.org/",
  collectMethod: "get",
};
```

### `models.RestAuthenticationBasic`

```typescript
const value: models.RestAuthenticationBasic = {
  authentication: "basic",
  username: "Tito40",
  password: "4Drf49LK5Hpg6tC",
  collectUrl: "https://courageous-secret.net/",
  collectMethod: "other",
};
```

### `models.RestAuthenticationBasicSecret`

```typescript
const value: models.RestAuthenticationBasicSecret = {
  authentication: "basicSecret",
  credentialsSecret: "<value>",
  collectUrl: "https://precious-metal.name",
  collectMethod: "post",
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
  authHeaderExpr: "<value>",
  collectUrl: "https://empty-plain.net/",
  collectMethod: "post",
};
```

### `models.RestAuthenticationLoginSecret`

```typescript
const value: models.RestAuthenticationLoginSecret = {
  authentication: "loginSecret",
  loginUrl: "https://zesty-e-mail.name/",
  credentialsSecret: "<value>",
  loginBody: "<value>",
  authHeaderExpr: "<value>",
  collectUrl: "https://swift-vestment.name/",
  collectMethod: "post_with_body",
};
```

### `models.RestAuthenticationOauth`

```typescript
const value: models.RestAuthenticationOauth = {
  authentication: "oauth",
  loginUrl: "https://questionable-negotiation.com",
  authHeaderExpr: "<value>",
  clientSecretParamName: "<value>",
  clientSecretParamValue: "<value>",
  collectUrl: "https://talkative-humidity.name",
  collectMethod: "other",
};
```

### `models.RestAuthenticationOauthSecret`

```typescript
const value: models.RestAuthenticationOauthSecret = {
  authentication: "oauthSecret",
  loginUrl: "https://watery-consistency.com",
  authHeaderExpr: "<value>",
  clientSecretParamName: "<value>",
  textSecret: "<value>",
  collectUrl: "https://snarling-scout.name/",
  collectMethod: "post_with_body",
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
  collectUrl: "https://live-labourer.info/",
  collectMethod: "post",
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
  collectUrl: "https://tall-cruelty.biz",
  collectMethod: "get",
};
```

### `models.RestAuthenticationHmac`

```typescript
const value: models.RestAuthenticationHmac = {
  authentication: "hmac",
  hmacFunctionId: "<id>",
  collectUrl: "https://giving-partridge.org/",
  collectMethod: "get",
};
```

