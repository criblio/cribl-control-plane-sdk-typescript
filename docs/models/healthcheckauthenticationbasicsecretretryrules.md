# HealthCheckAuthenticationBasicSecretRetryRules


## Supported Types

### `models.HealthCheckAuthenticationBasicSecretHealthCheckRetryRulesTypeNone`

```typescript
const value:
  models.HealthCheckAuthenticationBasicSecretHealthCheckRetryRulesTypeNone = {
    type: "none",
    interval: "<value>",
    limit: "<value>",
    multiplier: "<value>",
    codes: "<value>",
    enableHeader: "<value>",
  };
```

### `models.HealthCheckAuthenticationBasicSecretHealthCheckRetryRulesTypeStatic`

```typescript
const value:
  models.HealthCheckAuthenticationBasicSecretHealthCheckRetryRulesTypeStatic = {
    type: "static",
    interval: "<value>",
    limit: "<value>",
    codes: "<value>",
    enableHeader: "<value>",
    multiplier: "<value>",
  };
```

### `models.HealthCheckAuthenticationBasicSecretHealthCheckRetryRulesTypeBackoff`

```typescript
const value:
  models.HealthCheckAuthenticationBasicSecretHealthCheckRetryRulesTypeBackoff =
    {
      type: "backoff",
      interval: "<value>",
      limit: "<value>",
      multiplier: "<value>",
      codes: "<value>",
      enableHeader: "<value>",
    };
```

