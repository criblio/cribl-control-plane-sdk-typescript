# PipelineFunctionRedisConf


## Supported Types

### `models.RedisAuthTypeNone`

```typescript
const value: models.RedisAuthTypeNone = {
  authType: "none",
  commands: [],
};
```

### `models.RedisAuthTypeManual`

```typescript
const value: models.RedisAuthTypeManual = {
  authType: "manual",
  password: "3yrVDu__XtLZOVP",
  commands: [],
};
```

### `models.RedisAuthTypeCredentialsSecret`

```typescript
const value: models.RedisAuthTypeCredentialsSecret = {
  authType: "credentialsSecret",
  credentialsSecret: "<value>",
  commands: [],
};
```

### `models.RedisAuthTypeTextSecret`

```typescript
const value: models.RedisAuthTypeTextSecret = {
  authType: "textSecret",
  textSecret: "<value>",
  commands: [
    {
      command: "<value>",
      keyExpr: "<value>",
    },
  ],
};
```

