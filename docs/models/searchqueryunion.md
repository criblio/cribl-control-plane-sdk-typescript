# SearchQueryUnion


## Supported Types

### `models.SearchQuery1`

```typescript
const value: models.SearchQuery1 = {
  query: "<value>",
  queryId: "<id>",
  runMode: "newSearch",
  type: "saved",
};
```

### `models.SearchQuery2`

```typescript
const value: models.SearchQuery2 = {
  earliest: "<value>",
  expectedOutputType: "instant",
  latest: 8656.52,
  parentSearchId: "<id>",
  query: "<value>",
  sampleRate: 6193.6,
  timezone: "Pacific/Rarotonga",
  type: "inline",
};
```

### `models.SearchQuery3`

```typescript
const value: models.SearchQuery3 = {
  type: "values",
  values: [
    "<value 1>",
  ],
};
```

### `models.SearchQuery4`

```typescript
const value: models.SearchQuery4 = {
  type: "empty",
};
```

### `models.SearchQuery5`

```typescript
const value: models.SearchQuery5 = {
  earliest: "<value>",
  expectedOutputType: "instant",
  latest: 4747.7,
  queries: [
    {
      alias: "<value>",
      localId: "<id>",
      query: "<value>",
    },
  ],
  timezone: "Africa/Freetown",
  type: "metric",
};
```

