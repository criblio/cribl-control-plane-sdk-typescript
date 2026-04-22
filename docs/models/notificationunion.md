# NotificationUnion


## Supported Types

### `models.Notification1`

```typescript
const value: models.Notification1 = {
  mode: "direct",
  templateTargetPairs: [
    {
      templateId: "<id>",
      targetId: "<id>",
    },
  ],
  id: "<id>",
  condition: "<value>",
};
```

### `models.Notification2`

```typescript
const value: models.Notification2 = {
  mode: "policy",
  id: "<id>",
  condition: "<value>",
};
```

### `models.Notification3`

```typescript
const value: models.Notification3 = {
  id: "<id>",
  condition: "<value>",
};
```

