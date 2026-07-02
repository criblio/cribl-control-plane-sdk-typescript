# GetPipelinesResponseBody

List of Pipeline objects.


## Supported Types

### `models.CountedPipeline`

```typescript
const value: models.CountedPipeline = {
  items: [
    {
      id: "<id>",
      conf: {
        functions: [
          {
            id: "eventstats",
            conf: {
              aggregations: [
                "<value 1>",
                "<value 2>",
              ],
            },
          },
        ],
      },
    },
  ],
};
```

### `models.PaginatedPipeline`

```typescript
const value: models.PaginatedPipeline = {
  items: [
    {
      id: "<id>",
      conf: {
        functions: [
          {
            id: "eventstats",
            conf: {
              aggregations: [
                "<value 1>",
                "<value 2>",
              ],
            },
          },
        ],
      },
    },
  ],
  count: 66875,
  offset: 673713,
  limit: 305563,
};
```

