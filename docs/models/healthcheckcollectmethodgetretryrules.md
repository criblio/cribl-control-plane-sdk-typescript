# HealthCheckCollectMethodGetRetryRules


## Supported Types

### `models.HealthCheckCollectMethodGetHealthCheckRetryRulesTypeNone`

```typescript
const value: models.HealthCheckCollectMethodGetHealthCheckRetryRulesTypeNone = {
  type: "none",
  interval: "<value>",
  limit: "<value>",
  multiplier: "<value>",
  codes: "<value>",
  enableHeader: "<value>",
};
```

### `models.HealthCheckCollectMethodGetHealthCheckRetryRulesTypeStatic`

```typescript
const value: models.HealthCheckCollectMethodGetHealthCheckRetryRulesTypeStatic =
  {
    type: "static",
    interval: "<value>",
    limit: "<value>",
    codes: "<value>",
    enableHeader: "<value>",
    multiplier: "<value>",
  };
```

### `models.HealthCheckCollectMethodGetHealthCheckRetryRulesTypeBackoff`

```typescript
const value:
  models.HealthCheckCollectMethodGetHealthCheckRetryRulesTypeBackoff = {
    type: "backoff",
    interval: "<value>",
    limit: "<value>",
    multiplier: "<value>",
    codes: "<value>",
    enableHeader: "<value>",
  };
```

