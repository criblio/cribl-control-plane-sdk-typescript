# PipelineFunctionSerdeConf


## Supported Types

### `models.SerdeTypeKvp`

```typescript
const value: models.SerdeTypeKvp = {
  type: "kvp",
  mode: "reserialize",
};
```

### `models.SerdeTypeDelim`

```typescript
const value: models.SerdeTypeDelim = {
  type: "delim",
  mode: "reserialize",
};
```

### `models.SerdeTypeCsv`

```typescript
const value: models.SerdeTypeCsv = {
  type: "csv",
  mode: "reserialize",
};
```

### `models.SerdeTypeJson`

```typescript
const value: models.SerdeTypeJson = {
  type: "json",
  mode: "reserialize",
};
```

### `models.SerdeTypeRegex`

```typescript
const value: models.SerdeTypeRegex = {
  type: "regex",
  regex: "<value>",
  mode: "extract",
};
```

### `models.SerdeTypeGrok`

```typescript
const value: models.SerdeTypeGrok = {
  type: "grok",
  pattern: "<value>",
  mode: "extract",
};
```

