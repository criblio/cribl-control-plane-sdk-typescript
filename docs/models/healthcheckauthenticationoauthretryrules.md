# HealthCheckAuthenticationOauthRetryRules


## Supported Types

### `models.HealthCheckAuthenticationOauthHealthCheckRetryRulesTypeNone`

```typescript
const value:
  models.HealthCheckAuthenticationOauthHealthCheckRetryRulesTypeNone = {
    type: "none",
    interval: "<value>",
    limit: "<value>",
    multiplier: "<value>",
    codes: "<value>",
    enableHeader: "<value>",
  };
```

### `models.HealthCheckAuthenticationOauthHealthCheckRetryRulesTypeStatic`

```typescript
const value:
  models.HealthCheckAuthenticationOauthHealthCheckRetryRulesTypeStatic = {
    type: "static",
    interval: "<value>",
    limit: "<value>",
    codes: "<value>",
    enableHeader: "<value>",
    multiplier: "<value>",
  };
```

### `models.HealthCheckAuthenticationOauthHealthCheckRetryRulesTypeBackoff`

```typescript
const value:
  models.HealthCheckAuthenticationOauthHealthCheckRetryRulesTypeBackoff = {
    type: "backoff",
    interval: "<value>",
    limit: "<value>",
    multiplier: "<value>",
    codes: "<value>",
    enableHeader: "<value>",
  };
```

