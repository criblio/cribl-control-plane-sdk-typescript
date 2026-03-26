# RedisDeploymentTypeSentinel


## Supported Types

### `models.RedisDeploymentTypeSentinelTlsTrue`

```typescript
const value: models.RedisDeploymentTypeSentinelTlsTrue = {
  masterName: "<value>",
  commands: [],
};
```

### `models.RedisDeploymentTypeSentinelTlsFalse`

```typescript
const value: models.RedisDeploymentTypeSentinelTlsFalse = {
  masterName: "<value>",
  commands: [
    {
      command: "<value>",
      keyExpr: "<value>",
    },
  ],
};
```

