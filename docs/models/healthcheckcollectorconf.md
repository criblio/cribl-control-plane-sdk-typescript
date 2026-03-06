# HealthCheckCollectorConf


## Supported Types

### `models.HealthCheckAuthenticationNone`

```typescript
const value: models.HealthCheckAuthenticationNone = {
  authentication: "none",
  collectUrl: "https://dreary-thigh.name/",
  collectMethod: "post",
};
```

### `models.HealthCheckAuthenticationBasic`

```typescript
const value: models.HealthCheckAuthenticationBasic = {
  authentication: "basic",
  username: "Lyric.Grant",
  password: "j8oqJdqwGmAtefF",
  collectUrl: "https://regal-tooth.net",
  collectMethod: "post_with_body",
};
```

### `models.HealthCheckAuthenticationBasicSecret`

```typescript
const value: models.HealthCheckAuthenticationBasicSecret = {
  authentication: "basicSecret",
  credentialsSecret: "<value>",
  collectUrl: "https://fussy-season.biz/",
  collectMethod: "post_with_body",
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
  authHeaderExpr: "<value>",
  collectUrl: "https://worst-minion.org",
  collectMethod: "get",
};
```

### `models.HealthCheckAuthenticationLoginSecret`

```typescript
const value: models.HealthCheckAuthenticationLoginSecret = {
  authentication: "loginSecret",
  loginUrl: "https://husky-granny.name/",
  credentialsSecret: "<value>",
  loginBody: "<value>",
  authHeaderExpr: "<value>",
  collectUrl: "https://beloved-premier.name",
  collectMethod: "post_with_body",
};
```

### `models.HealthCheckAuthenticationOauth`

```typescript
const value: models.HealthCheckAuthenticationOauth = {
  authentication: "oauth",
  loginUrl: "https://jittery-almighty.com/",
  authHeaderExpr: "<value>",
  clientSecretParamName: "<value>",
  clientSecretParamValue: "<value>",
  collectUrl: "https://incomparable-populist.info/",
  collectMethod: "get",
};
```

### `models.HealthCheckAuthenticationOauthSecret`

```typescript
const value: models.HealthCheckAuthenticationOauthSecret = {
  authentication: "oauthSecret",
  loginUrl: "https://artistic-zen.info",
  authHeaderExpr: "<value>",
  clientSecretParamName: "<value>",
  textSecret: "<value>",
  collectUrl: "https://sticky-dish.com/",
  collectMethod: "post",
};
```

