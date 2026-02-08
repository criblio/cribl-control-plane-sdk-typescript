# SavedJob


## Supported Types

### `models.SavedJobCollection`

```typescript
const value: models.SavedJobCollection = {
  type: "executor",
  collector: {
    type: "azure_blob",
    conf: {
      authType: "clientSecret",
      storageAccountName: "<value>",
      tenantId: "<id>",
      clientId: "<id>",
      clientTextSecret: "<value>",
      containerName: "<value>",
    },
  },
};
```

### `models.SavedJobExecutor`

```typescript
const value: models.SavedJobExecutor = {
  type: "scheduledSearch",
  executor: {
    type: "<value>",
  },
};
```

### `models.SavedJobScheduledSearch`

```typescript
const value: models.SavedJobScheduledSearch = {
  type: "collection",
  savedQueryId: "<id>",
};
```

