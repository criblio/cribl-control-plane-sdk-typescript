# SplunkAuthenticationTokenSecretRetryRules


## Supported Types

### `models.SplunkAuthenticationTokenSecretSplunkRetryRulesTypeNone`

```typescript
const value: models.SplunkAuthenticationTokenSecretSplunkRetryRulesTypeNone = {
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

### `models.SplunkAuthenticationTokenSecretSplunkRetryRulesTypeStatic`

```typescript
const value: models.SplunkAuthenticationTokenSecretSplunkRetryRulesTypeStatic =
  {
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

### `models.SplunkAuthenticationTokenSecretSplunkRetryRulesTypeBackoff`

```typescript
const value: models.SplunkAuthenticationTokenSecretSplunkRetryRulesTypeBackoff =
  {
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

