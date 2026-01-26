# RestAuthenticationBasicRetryRules


## Supported Types

### `models.RestAuthenticationBasicRestRetryRulesTypeNone`

```typescript
const value: models.RestAuthenticationBasicRestRetryRulesTypeNone = {
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

### `models.RestAuthenticationBasicRestRetryRulesTypeStatic`

```typescript
const value: models.RestAuthenticationBasicRestRetryRulesTypeStatic = {
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

### `models.RestAuthenticationBasicRestRetryRulesTypeBackoff`

```typescript
const value: models.RestAuthenticationBasicRestRetryRulesTypeBackoff = {
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

