# GetProductsSummaryByProductResponseBody

List of DistributedSummary objects.


## Supported Types

### `models.CountedDistributedSummary`

```typescript
const value: models.CountedDistributedSummary = {};
```

### `models.PaginatedDistributedSummary`

```typescript
const value: models.PaginatedDistributedSummary = {
  items: [
    {
      groups: {
        count: 388538,
        destinations: 754661,
        packs: 332881,
        pipelines: 427163,
        quickConnects: 948628,
        routes: 563689,
        sources: 260108,
      },
    },
  ],
  count: 499085,
  offset: 558860,
  limit: 883700,
};
```

