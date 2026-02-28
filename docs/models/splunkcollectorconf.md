# SplunkCollectorConf


## Supported Types

### `models.SplunkAuthenticationNone`

```typescript
const value: models.SplunkAuthenticationNone = {
  authentication: "none",
  searchHead: "<value>",
  search: "<value>",
  endpoint: "<value>",
  outputMode: "json",
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
  endpoint: "<value>",
  outputMode: "json",
};
```

### `models.SplunkAuthenticationBasicSecret`

```typescript
const value: models.SplunkAuthenticationBasicSecret = {
  authentication: "basicSecret",
  credentialsSecret: "<value>",
  searchHead: "<value>",
  search: "<value>",
  endpoint: "<value>",
  outputMode: "csv",
};
```

### `models.SplunkAuthenticationToken`

```typescript
const value: models.SplunkAuthenticationToken = {
  authentication: "token",
  token: "<value>",
  searchHead: "<value>",
  search: "<value>",
  endpoint: "<value>",
  outputMode: "json",
};
```

### `models.SplunkAuthenticationTokenSecret`

```typescript
const value: models.SplunkAuthenticationTokenSecret = {
  authentication: "tokenSecret",
  tokenSecret: "<value>",
  searchHead: "<value>",
  search: "<value>",
  endpoint: "<value>",
  outputMode: "csv",
};
```

