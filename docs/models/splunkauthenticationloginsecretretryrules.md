# SplunkAuthenticationLoginSecretRetryRules


## Supported Types

### `models.SplunkAuthenticationLoginSecretSplunkRetryRulesTypeNone`

```typescript
const value: models.SplunkAuthenticationLoginSecretSplunkRetryRulesTypeNone = {
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

### `models.SplunkAuthenticationLoginSecretSplunkRetryRulesTypeStatic`

```typescript
const value: models.SplunkAuthenticationLoginSecretSplunkRetryRulesTypeStatic =
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

### `models.SplunkAuthenticationLoginSecretSplunkRetryRulesTypeBackoff`

```typescript
const value: models.SplunkAuthenticationLoginSecretSplunkRetryRulesTypeBackoff =
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

