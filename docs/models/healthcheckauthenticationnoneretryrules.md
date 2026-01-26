# HealthCheckAuthenticationNoneRetryRules


## Supported Types

### `models.HealthCheckAuthenticationNoneHealthCheckRetryRulesTypeNone`

```typescript
const value: models.HealthCheckAuthenticationNoneHealthCheckRetryRulesTypeNone =
  {
    type: "none",
    interval: "<value>",
    limit: "<value>",
    multiplier: "<value>",
    codes: "<value>",
    enableHeader: "<value>",
  };
```

### `models.HealthCheckAuthenticationNoneHealthCheckRetryRulesTypeStatic`

```typescript
const value:
  models.HealthCheckAuthenticationNoneHealthCheckRetryRulesTypeStatic = {
    type: "static",
    interval: "<value>",
    limit: "<value>",
    codes: "<value>",
    enableHeader: "<value>",
    multiplier: "<value>",
  };
```

### `models.HealthCheckAuthenticationNoneHealthCheckRetryRulesTypeBackoff`

```typescript
const value:
  models.HealthCheckAuthenticationNoneHealthCheckRetryRulesTypeBackoff = {
    type: "backoff",
    interval: "<value>",
    limit: "<value>",
    multiplier: "<value>",
    codes: "<value>",
    enableHeader: "<value>",
  };
```

