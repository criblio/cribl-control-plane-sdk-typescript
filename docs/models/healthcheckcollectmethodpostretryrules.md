# HealthCheckCollectMethodPostRetryRules


## Supported Types

### `models.HealthCheckCollectMethodPostHealthCheckRetryRulesTypeNone`

```typescript
const value: models.HealthCheckCollectMethodPostHealthCheckRetryRulesTypeNone =
  {
    type: "none",
    interval: "<value>",
    limit: "<value>",
    multiplier: "<value>",
    codes: "<value>",
    enableHeader: "<value>",
  };
```

### `models.HealthCheckCollectMethodPostHealthCheckRetryRulesTypeStatic`

```typescript
const value:
  models.HealthCheckCollectMethodPostHealthCheckRetryRulesTypeStatic = {
    type: "static",
    interval: "<value>",
    limit: "<value>",
    codes: "<value>",
    enableHeader: "<value>",
    multiplier: "<value>",
  };
```

### `models.HealthCheckCollectMethodPostHealthCheckRetryRulesTypeBackoff`

```typescript
const value:
  models.HealthCheckCollectMethodPostHealthCheckRetryRulesTypeBackoff = {
    type: "backoff",
    interval: "<value>",
    limit: "<value>",
    multiplier: "<value>",
    codes: "<value>",
    enableHeader: "<value>",
  };
```

