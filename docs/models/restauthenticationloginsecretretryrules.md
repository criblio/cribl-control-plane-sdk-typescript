# RestAuthenticationLoginSecretRetryRules


## Supported Types

### `models.RestAuthenticationLoginSecretRestRetryRulesTypeNone`

```typescript
const value: models.RestAuthenticationLoginSecretRestRetryRulesTypeNone = {
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

### `models.RestAuthenticationLoginSecretRestRetryRulesTypeStatic`

```typescript
const value: models.RestAuthenticationLoginSecretRestRetryRulesTypeStatic = {
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

### `models.RestAuthenticationLoginSecretRestRetryRulesTypeBackoff`

```typescript
const value: models.RestAuthenticationLoginSecretRestRetryRulesTypeBackoff = {
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

