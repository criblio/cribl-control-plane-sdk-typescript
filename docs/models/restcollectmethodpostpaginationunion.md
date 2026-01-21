# RestCollectMethodPostPaginationUnion


## Supported Types

### `models.RestCollectMethodPostRestPaginationTypeNone`

```typescript
const value: models.RestCollectMethodPostRestPaginationTypeNone = {
  type: "none",
};
```

### `models.RestCollectMethodPostRestPaginationTypeResponseBody`

```typescript
const value: models.RestCollectMethodPostRestPaginationTypeResponseBody = {
  type: "response_body",
  attribute: [
    "<value 1>",
  ],
  maxPages: 919.59,
  lastPageExpr: "<value>",
};
```

### `models.RestCollectMethodPostRestPaginationTypeResponseHeader`

```typescript
const value: models.RestCollectMethodPostRestPaginationTypeResponseHeader = {
  type: "response_header",
  attribute: [
    "<value 1>",
    "<value 2>",
  ],
  maxPages: 4573.66,
};
```

### `models.RestCollectMethodPostRestPaginationTypeResponseHeaderLink`

```typescript
const value: models.RestCollectMethodPostRestPaginationTypeResponseHeaderLink =
  {
    type: "response_header_link",
    nextRelationAttribute: "<value>",
    curRelationAttribute: "<value>",
    maxPages: 5687.87,
  };
```

### `models.RestCollectMethodPostRestPaginationTypeRequestOffset`

```typescript
const value: models.RestCollectMethodPostRestPaginationTypeRequestOffset = {
  type: "request_offset",
  offsetField: "<value>",
  offset: 3879.42,
  limitField: "<value>",
  limit: 3542.08,
  totalRecordField: "<value>",
  maxPages: 7092.84,
  zeroIndexed: true,
};
```

### `models.RestCollectMethodPostRestPaginationTypeRequestPage`

```typescript
const value: models.RestCollectMethodPostRestPaginationTypeRequestPage = {
  type: "request_page",
  pageField: "<value>",
  page: 8836.54,
  sizeField: "<value>",
  size: 9484.68,
  totalPageField: "<value>",
  totalRecordField: "<value>",
  maxPages: 6431.81,
  zeroIndexed: false,
};
```

