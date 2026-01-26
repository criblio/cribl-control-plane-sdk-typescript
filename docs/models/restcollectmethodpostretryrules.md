# RestCollectMethodPostRetryRules


## Supported Types

### `models.RestCollectMethodPostRestRetryRulesTypeNone`

```typescript
const value: models.RestCollectMethodPostRestRetryRulesTypeNone = {
  type: "none",
  interval: "<value>",
  limit: "<value>",
  multiplier: "<value>",
  maxIntervalMs: "<value>",
  codes: "<value>",
  enableHeader: "<value>",
  retryConnectTimeout: "<value>",
  retryConnectReset: "<value>",
};
```

### `models.RestCollectMethodPostRestRetryRulesTypeStatic`

```typescript
const value: models.RestCollectMethodPostRestRetryRulesTypeStatic = {
  type: "static",
  interval: "<value>",
  limit: "<value>",
  codes: "<value>",
  enableHeader: "<value>",
  retryConnectTimeout: "<value>",
  retryConnectReset: "<value>",
  multiplier: "<value>",
  maxIntervalMs: "<value>",
};
```

### `models.RestCollectMethodPostRestRetryRulesTypeBackoff`

```typescript
const value: models.RestCollectMethodPostRestRetryRulesTypeBackoff = {
  type: "backoff",
  interval: "<value>",
  limit: "<value>",
  multiplier: "<value>",
  maxIntervalMs: "<value>",
  codes: "<value>",
  enableHeader: "<value>",
  retryConnectTimeout: "<value>",
  retryConnectReset: "<value>",
};
```

