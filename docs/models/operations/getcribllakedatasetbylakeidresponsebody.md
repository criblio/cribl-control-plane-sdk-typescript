# GetCriblLakeDatasetByLakeIdResponseBody

List of CriblLakeDataset objects.


## Supported Types

### `models.CountedCriblLakeDataset`

```typescript
const value: models.CountedCriblLakeDataset = {
  items: [
    {
      id: "<id>",
      searchConfig: {
        metadata: {
          earliest: "-30d",
          enableAcceleration: true,
          fieldList: [
            "<value 1>",
          ],
          scanMode: "detailed",
        },
      },
    },
  ],
};
```

### `models.PaginatedCriblLakeDataset`

```typescript
const value: models.PaginatedCriblLakeDataset = {
  items: [
    {
      id: "<id>",
      searchConfig: {
        metadata: {
          earliest: "-30d",
          enableAcceleration: true,
          fieldList: [
            "<value 1>",
          ],
          scanMode: "detailed",
        },
      },
    },
  ],
  count: 133133,
  offset: 966149,
  limit: 404372,
};
```

