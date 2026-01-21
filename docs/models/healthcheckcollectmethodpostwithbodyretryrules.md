# HealthCheckCollectMethodPostWithBodyRetryRules


## Supported Types

### `models.HealthCheckCollectMethodPostWithBodyHealthCheckRetryRulesTypeNone`

```typescript
const value:
  models.HealthCheckCollectMethodPostWithBodyHealthCheckRetryRulesTypeNone = {
    type: "none",
    interval: "<value>",
    limit: "<value>",
    multiplier: "<value>",
    codes: "<value>",
    enableHeader: "<value>",
  };
```

### `models.HealthCheckCollectMethodPostWithBodyHealthCheckRetryRulesTypeStatic`

```typescript
const value:
  models.HealthCheckCollectMethodPostWithBodyHealthCheckRetryRulesTypeStatic = {
    type: "static",
    interval: "<value>",
    limit: "<value>",
    codes: "<value>",
    enableHeader: "<value>",
    multiplier: "<value>",
  };
```

### `models.HealthCheckCollectMethodPostWithBodyHealthCheckRetryRulesTypeBackoff`

```typescript
const value:
  models.HealthCheckCollectMethodPostWithBodyHealthCheckRetryRulesTypeBackoff =
    {
      type: "backoff",
      interval: "<value>",
      limit: "<value>",
      multiplier: "<value>",
      codes: "<value>",
      enableHeader: "<value>",
    };
```

