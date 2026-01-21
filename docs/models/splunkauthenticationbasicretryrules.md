# SplunkAuthenticationBasicRetryRules


## Supported Types

### `models.SplunkAuthenticationBasicSplunkRetryRulesTypeNone`

```typescript
const value: models.SplunkAuthenticationBasicSplunkRetryRulesTypeNone = {
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

### `models.SplunkAuthenticationBasicSplunkRetryRulesTypeStatic`

```typescript
const value: models.SplunkAuthenticationBasicSplunkRetryRulesTypeStatic = {
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

### `models.SplunkAuthenticationBasicSplunkRetryRulesTypeBackoff`

```typescript
const value: models.SplunkAuthenticationBasicSplunkRetryRulesTypeBackoff = {
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

