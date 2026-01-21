# HealthCheckAuthenticationBasicRetryRules


## Supported Types

### `models.HealthCheckAuthenticationBasicHealthCheckRetryRulesTypeNone`

```typescript
const value:
  models.HealthCheckAuthenticationBasicHealthCheckRetryRulesTypeNone = {
    type: "none",
    interval: "<value>",
    limit: "<value>",
    multiplier: "<value>",
    codes: "<value>",
    enableHeader: "<value>",
  };
```

### `models.HealthCheckAuthenticationBasicHealthCheckRetryRulesTypeStatic`

```typescript
const value:
  models.HealthCheckAuthenticationBasicHealthCheckRetryRulesTypeStatic = {
    type: "static",
    interval: "<value>",
    limit: "<value>",
    codes: "<value>",
    enableHeader: "<value>",
    multiplier: "<value>",
  };
```

### `models.HealthCheckAuthenticationBasicHealthCheckRetryRulesTypeBackoff`

```typescript
const value:
  models.HealthCheckAuthenticationBasicHealthCheckRetryRulesTypeBackoff = {
    type: "backoff",
    interval: "<value>",
    limit: "<value>",
    multiplier: "<value>",
    codes: "<value>",
    enableHeader: "<value>",
  };
```

