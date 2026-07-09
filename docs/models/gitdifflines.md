# GitDiffLines


## Supported Types

### `models.DiffLineDelete`

```typescript
const value: models.DiffLineDelete = {
  type: "delete",
  oldNumber: 281695,
  content: "<value>",
};
```

### `models.DiffLineInsert`

```typescript
const value: models.DiffLineInsert = {
  type: "insert",
  newNumber: 806535,
  content: "<value>",
};
```

### `models.DiffLineContext`

```typescript
const value: models.DiffLineContext = {
  type: "context",
  newNumber: 35568,
  oldNumber: 731123,
  content: "<value>",
};
```

