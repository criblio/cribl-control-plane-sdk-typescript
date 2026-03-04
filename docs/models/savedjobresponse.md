# SavedJobResponse


## Supported Types

### `models.SavedJobResponseCollection`

```typescript
const value: models.SavedJobResponseCollection = {
  type: "executor",
  collector: {
    type: "cribl_lake",
    conf: {
      dataset: "<value>",
    },
  },
};
```

### `models.SavedJobResponseExecutor`

```typescript
const value: models.SavedJobResponseExecutor = {
  type: "scheduledSearch",
  executor: {
    type: "<value>",
  },
};
```

### `models.SavedJobResponseScheduledSearch`

```typescript
const value: models.SavedJobResponseScheduledSearch = {
  type: "collection",
  savedQueryId: "<id>",
};
```

