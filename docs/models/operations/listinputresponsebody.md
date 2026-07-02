# ListInputResponseBody

List of Source objects.


## Supported Types

### `models.CountedInputResponse`

```typescript
const value: models.CountedInputResponse = {};
```

### `models.PaginatedInputResponse`

```typescript
const value: models.PaginatedInputResponse = {
  items: [
    {
      type: "servicenow_table",
      instance: "<value>",
      tableName: "<value>",
      cronSchedule: "<value>",
      earliest: "<value>",
      latest: "<value>",
    },
  ],
  count: 971174,
  offset: 295015,
  limit: 207365,
};
```

