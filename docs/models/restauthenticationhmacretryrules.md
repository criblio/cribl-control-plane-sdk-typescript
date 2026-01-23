# RestAuthenticationHmacRetryRules


## Supported Types

### `models.RestAuthenticationHmacRestRetryRulesTypeNone`

```typescript
const value: models.RestAuthenticationHmacRestRetryRulesTypeNone = {
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

### `models.RestAuthenticationHmacRestRetryRulesTypeStatic`

```typescript
const value: models.RestAuthenticationHmacRestRetryRulesTypeStatic = {
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

### `models.RestAuthenticationHmacRestRetryRulesTypeBackoff`

```typescript
const value: models.RestAuthenticationHmacRestRetryRulesTypeBackoff = {
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

