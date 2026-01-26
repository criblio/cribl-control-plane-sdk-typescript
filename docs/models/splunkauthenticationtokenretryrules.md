# SplunkAuthenticationTokenRetryRules


## Supported Types

### `models.SplunkAuthenticationTokenSplunkRetryRulesTypeNone`

```typescript
const value: models.SplunkAuthenticationTokenSplunkRetryRulesTypeNone = {
  type: "none",
  interval: "<value>",
  limit: "<value>",
  multiplier: "<value>",
  codes: "<value>",
  enableHeader: "<value>",
  retryConnectTimeout: "<value>",
  retryConnectReset: "<value>",
};
```

### `models.SplunkAuthenticationTokenSplunkRetryRulesTypeStatic`

```typescript
const value: models.SplunkAuthenticationTokenSplunkRetryRulesTypeStatic = {
  type: "static",
  interval: "<value>",
  limit: "<value>",
  codes: "<value>",
  enableHeader: "<value>",
  retryConnectTimeout: "<value>",
  retryConnectReset: "<value>",
  multiplier: "<value>",
};
```

### `models.SplunkAuthenticationTokenSplunkRetryRulesTypeBackoff`

```typescript
const value: models.SplunkAuthenticationTokenSplunkRetryRulesTypeBackoff = {
  type: "backoff",
  interval: "<value>",
  limit: "<value>",
  multiplier: "<value>",
  codes: "<value>",
  enableHeader: "<value>",
  retryConnectTimeout: "<value>",
  retryConnectReset: "<value>",
};
```

