# EventBreakerExistingOrNewNew


## Supported Types

### `models.EventBreakerExistingOrNewNewRuleTypeRegex`

```typescript
const value: models.EventBreakerExistingOrNewNewRuleTypeRegex = {
  ruleType: "regex",
  eventBreakerRegex: "<value>",
  existingOrNew: "new",
};
```

### `models.EventBreakerExistingOrNewNewRuleTypeJson`

```typescript
const value: models.EventBreakerExistingOrNewNewRuleTypeJson = {
  ruleType: "json",
  existingOrNew: "existing",
};
```

### `models.EventBreakerExistingOrNewNewRuleTypeJsonArray`

```typescript
const value: models.EventBreakerExistingOrNewNewRuleTypeJsonArray = {
  existingOrNew: "existing",
};
```

### `models.EventBreakerExistingOrNewNewRuleTypeHeader`

```typescript
const value: models.EventBreakerExistingOrNewNewRuleTypeHeader = {
  ruleType: "header",
  delimiterRegex: "<value>",
  fieldsLineRegex: "<value>",
  headerLineRegex: "<value>",
  existingOrNew: "new",
};
```

### `models.EventBreakerExistingOrNewNewRuleTypeCsv`

```typescript
const value: models.EventBreakerExistingOrNewNewRuleTypeCsv = {
  ruleType: "csv",
  delimiter: "<value>",
  quoteChar: "<value>",
  escapeChar: "<value>",
  existingOrNew: "existing",
};
```

