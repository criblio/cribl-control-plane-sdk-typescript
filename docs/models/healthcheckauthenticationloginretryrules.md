# HealthCheckAuthenticationLoginRetryRules


## Supported Types

### `models.HealthCheckAuthenticationLoginHealthCheckRetryRulesTypeNone`

```typescript
const value:
  models.HealthCheckAuthenticationLoginHealthCheckRetryRulesTypeNone = {
    type: "none",
    interval: "<value>",
    limit: "<value>",
    multiplier: "<value>",
    codes: "<value>",
    enableHeader: "<value>",
  };
```

### `models.HealthCheckAuthenticationLoginHealthCheckRetryRulesTypeStatic`

```typescript
const value:
  models.HealthCheckAuthenticationLoginHealthCheckRetryRulesTypeStatic = {
    type: "static",
    interval: "<value>",
    limit: "<value>",
    codes: "<value>",
    enableHeader: "<value>",
    multiplier: "<value>",
  };
```

### `models.HealthCheckAuthenticationLoginHealthCheckRetryRulesTypeBackoff`

```typescript
const value:
  models.HealthCheckAuthenticationLoginHealthCheckRetryRulesTypeBackoff = {
    type: "backoff",
    interval: "<value>",
    limit: "<value>",
    multiplier: "<value>",
    codes: "<value>",
    enableHeader: "<value>",
  };
```

