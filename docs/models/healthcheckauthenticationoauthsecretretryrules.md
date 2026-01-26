# HealthCheckAuthenticationOauthSecretRetryRules


## Supported Types

### `models.HealthCheckAuthenticationOauthSecretHealthCheckRetryRulesTypeNone`

```typescript
const value:
  models.HealthCheckAuthenticationOauthSecretHealthCheckRetryRulesTypeNone = {
    type: "none",
    interval: "<value>",
    limit: "<value>",
    multiplier: "<value>",
    codes: "<value>",
    enableHeader: "<value>",
  };
```

### `models.HealthCheckAuthenticationOauthSecretHealthCheckRetryRulesTypeStatic`

```typescript
const value:
  models.HealthCheckAuthenticationOauthSecretHealthCheckRetryRulesTypeStatic = {
    type: "static",
    interval: "<value>",
    limit: "<value>",
    codes: "<value>",
    enableHeader: "<value>",
    multiplier: "<value>",
  };
```

### `models.HealthCheckAuthenticationOauthSecretHealthCheckRetryRulesTypeBackoff`

```typescript
const value:
  models.HealthCheckAuthenticationOauthSecretHealthCheckRetryRulesTypeBackoff =
    {
      type: "backoff",
      interval: "<value>",
      limit: "<value>",
      multiplier: "<value>",
      codes: "<value>",
      enableHeader: "<value>",
    };
```

