# RunnableJob


## Supported Types

### `models.RunnableJobCollection`

```typescript
const value: models.RunnableJobCollection = {
  collector: {
    type: "rest",
    conf: {
      authentication: "basicSecret",
      credentialsSecret: "<value>",
      collectUrl: "https://worse-chapel.name",
      collectMethod: "post_with_body",
    },
  },
  run: {
    mode: "run",
  },
};
```

### `models.RunnableJobExecutor`

```typescript
const value: models.RunnableJobExecutor = {
  executor: {
    type: "<value>",
  },
  run: {},
};
```

### `models.RunnableJobScheduledSearch`

```typescript
const value: models.RunnableJobScheduledSearch = {
  type: "collection",
  savedQueryId: "<id>",
};
```

