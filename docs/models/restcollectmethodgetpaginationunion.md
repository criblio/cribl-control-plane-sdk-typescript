# RestCollectMethodGetPaginationUnion


## Supported Types

### `models.RestCollectMethodGetRestPaginationTypeNone`

```typescript
const value: models.RestCollectMethodGetRestPaginationTypeNone = {
  type: "none",
};
```

### `models.RestCollectMethodGetRestPaginationTypeResponseBody`

```typescript
const value: models.RestCollectMethodGetRestPaginationTypeResponseBody = {
  type: "response_body",
  attribute: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  maxPages: 8083.82,
  lastPageExpr: "<value>",
};
```

### `models.RestCollectMethodGetRestPaginationTypeResponseHeader`

```typescript
const value: models.RestCollectMethodGetRestPaginationTypeResponseHeader = {
  type: "response_header",
  attribute: [],
  maxPages: 2221.22,
};
```

### `models.RestCollectMethodGetRestPaginationTypeResponseHeaderLink`

```typescript
const value: models.RestCollectMethodGetRestPaginationTypeResponseHeaderLink = {
  type: "response_header_link",
  nextRelationAttribute: "<value>",
  curRelationAttribute: "<value>",
  maxPages: 7747.32,
};
```

### `models.RestCollectMethodGetRestPaginationTypeRequestOffset`

```typescript
const value: models.RestCollectMethodGetRestPaginationTypeRequestOffset = {
  type: "request_offset",
  offsetField: "<value>",
  offset: 5575.06,
  limitField: "<value>",
  limit: 1.3,
  totalRecordField: "<value>",
  maxPages: 4380.8,
  zeroIndexed: false,
};
```

### `models.RestCollectMethodGetRestPaginationTypeRequestPage`

```typescript
const value: models.RestCollectMethodGetRestPaginationTypeRequestPage = {
  type: "request_page",
  pageField: "<value>",
  page: 5057.76,
  sizeField: "<value>",
  size: 9029.71,
  totalPageField: "<value>",
  totalRecordField: "<value>",
  maxPages: 2240.38,
  zeroIndexed: true,
};
```

