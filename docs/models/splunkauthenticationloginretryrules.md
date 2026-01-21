# SplunkAuthenticationLoginRetryRules


## Supported Types

### `models.SplunkAuthenticationLoginSplunkRetryRulesTypeNone`

```typescript
const value: models.SplunkAuthenticationLoginSplunkRetryRulesTypeNone = {
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

### `models.SplunkAuthenticationLoginSplunkRetryRulesTypeStatic`

```typescript
const value: models.SplunkAuthenticationLoginSplunkRetryRulesTypeStatic = {
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

### `models.SplunkAuthenticationLoginSplunkRetryRulesTypeBackoff`

```typescript
const value: models.SplunkAuthenticationLoginSplunkRetryRulesTypeBackoff = {
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

