# SplunkAuthenticationBasicSecretRetryRules


## Supported Types

### `models.SplunkAuthenticationBasicSecretSplunkRetryRulesTypeNone`

```typescript
const value: models.SplunkAuthenticationBasicSecretSplunkRetryRulesTypeNone = {
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

### `models.SplunkAuthenticationBasicSecretSplunkRetryRulesTypeStatic`

```typescript
const value: models.SplunkAuthenticationBasicSecretSplunkRetryRulesTypeStatic =
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

### `models.SplunkAuthenticationBasicSecretSplunkRetryRulesTypeBackoff`

```typescript
const value: models.SplunkAuthenticationBasicSecretSplunkRetryRulesTypeBackoff =
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

