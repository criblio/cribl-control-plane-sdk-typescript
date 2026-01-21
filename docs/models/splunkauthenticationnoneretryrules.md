# SplunkAuthenticationNoneRetryRules


## Supported Types

### `models.SplunkAuthenticationNoneSplunkRetryRulesTypeNone`

```typescript
const value: models.SplunkAuthenticationNoneSplunkRetryRulesTypeNone = {
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

### `models.SplunkAuthenticationNoneSplunkRetryRulesTypeStatic`

```typescript
const value: models.SplunkAuthenticationNoneSplunkRetryRulesTypeStatic = {
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

### `models.SplunkAuthenticationNoneSplunkRetryRulesTypeBackoff`

```typescript
const value: models.SplunkAuthenticationNoneSplunkRetryRulesTypeBackoff = {
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

