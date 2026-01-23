# RestAuthenticationGoogleOauthSecretRetryRules


## Supported Types

### `models.RestAuthenticationGoogleOauthSecretRestRetryRulesTypeNone`

```typescript
const value: models.RestAuthenticationGoogleOauthSecretRestRetryRulesTypeNone =
  {
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

### `models.RestAuthenticationGoogleOauthSecretRestRetryRulesTypeStatic`

```typescript
const value:
  models.RestAuthenticationGoogleOauthSecretRestRetryRulesTypeStatic = {
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

### `models.RestAuthenticationGoogleOauthSecretRestRetryRulesTypeBackoff`

```typescript
const value:
  models.RestAuthenticationGoogleOauthSecretRestRetryRulesTypeBackoff = {
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

