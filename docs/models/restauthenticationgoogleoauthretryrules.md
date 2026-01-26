# RestAuthenticationGoogleOauthRetryRules


## Supported Types

### `models.RestAuthenticationGoogleOauthRestRetryRulesTypeNone`

```typescript
const value: models.RestAuthenticationGoogleOauthRestRetryRulesTypeNone = {
  type: "none",
  interval: "<value>",
  limit: "<value>",
  multiplier: "<value>",
  maxIntervalMs: "<value>",
  codes: "<value>",
  enableHeader: "<value>",
  retryConnectTimeout: "<value>",
  retryConnectReset: "<value>",
};
```

### `models.RestAuthenticationGoogleOauthRestRetryRulesTypeStatic`

```typescript
const value: models.RestAuthenticationGoogleOauthRestRetryRulesTypeStatic = {
  type: "static",
  interval: "<value>",
  limit: "<value>",
  codes: "<value>",
  enableHeader: "<value>",
  retryConnectTimeout: "<value>",
  retryConnectReset: "<value>",
  multiplier: "<value>",
  maxIntervalMs: "<value>",
};
```

### `models.RestAuthenticationGoogleOauthRestRetryRulesTypeBackoff`

```typescript
const value: models.RestAuthenticationGoogleOauthRestRetryRulesTypeBackoff = {
  type: "backoff",
  interval: "<value>",
  limit: "<value>",
  multiplier: "<value>",
  maxIntervalMs: "<value>",
  codes: "<value>",
  enableHeader: "<value>",
  retryConnectTimeout: "<value>",
  retryConnectReset: "<value>",
};
```

