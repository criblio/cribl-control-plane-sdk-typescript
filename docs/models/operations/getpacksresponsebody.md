# GetPacksResponseBody

List of Pack objects.


## Supported Types

### `models.CountedPackInfo`

```typescript
const value: models.CountedPackInfo = {
  items: [
    {
      id: "<id>",
      source: "<value>",
      tags: {
        domain: [
          "security",
          "observability",
        ],
        technology: [
          "aws",
          "splunk",
        ],
      },
      version: "1.0.0",
    },
  ],
};
```

### `models.PaginatedPackInfo`

```typescript
const value: models.PaginatedPackInfo = {
  items: [
    {
      id: "<id>",
      source: "<value>",
      tags: {
        domain: [
          "security",
          "observability",
        ],
        technology: [
          "aws",
          "splunk",
        ],
      },
      version: "1.0.0",
    },
  ],
  count: 756532,
  offset: 167078,
  limit: 294685,
};
```

