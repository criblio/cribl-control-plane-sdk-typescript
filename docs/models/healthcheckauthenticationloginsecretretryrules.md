# HealthCheckAuthenticationLoginSecretRetryRules


## Supported Types

### `models.HealthCheckAuthenticationLoginSecretHealthCheckRetryRulesTypeNone`

```typescript
const value:
  models.HealthCheckAuthenticationLoginSecretHealthCheckRetryRulesTypeNone = {
    type: "none",
    interval: "<value>",
    limit: "<value>",
    multiplier: "<value>",
    codes: "<value>",
    enableHeader: "<value>",
  };
```

### `models.HealthCheckAuthenticationLoginSecretHealthCheckRetryRulesTypeStatic`

```typescript
const value:
  models.HealthCheckAuthenticationLoginSecretHealthCheckRetryRulesTypeStatic = {
    type: "static",
    interval: "<value>",
    limit: "<value>",
    codes: "<value>",
    enableHeader: "<value>",
    multiplier: "<value>",
  };
```

### `models.HealthCheckAuthenticationLoginSecretHealthCheckRetryRulesTypeBackoff`

```typescript
const value:
  models.HealthCheckAuthenticationLoginSecretHealthCheckRetryRulesTypeBackoff =
    {
      type: "backoff",
      interval: "<value>",
      limit: "<value>",
      multiplier: "<value>",
      codes: "<value>",
      enableHeader: "<value>",
    };
```

