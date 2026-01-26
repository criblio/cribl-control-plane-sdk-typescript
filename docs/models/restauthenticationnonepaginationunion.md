# RestAuthenticationNonePaginationUnion


## Supported Types

### `models.RestAuthenticationNoneRestPaginationTypeNone`

```typescript
const value: models.RestAuthenticationNoneRestPaginationTypeNone = {
  type: "none",
};
```

### `models.RestAuthenticationNoneRestPaginationTypeResponseBody`

```typescript
const value: models.RestAuthenticationNoneRestPaginationTypeResponseBody = {
  type: "response_body",
  attribute: [
    "<value 1>",
  ],
  maxPages: 1732.02,
  lastPageExpr: "<value>",
};
```

### `models.RestAuthenticationNoneRestPaginationTypeResponseHeader`

```typescript
const value: models.RestAuthenticationNoneRestPaginationTypeResponseHeader = {
  type: "response_header",
  attribute: [],
  maxPages: 6571.14,
};
```

### `models.RestAuthenticationNoneRestPaginationTypeResponseHeaderLink`

```typescript
const value: models.RestAuthenticationNoneRestPaginationTypeResponseHeaderLink =
  {
    type: "response_header_link",
    nextRelationAttribute: "<value>",
    curRelationAttribute: "<value>",
    maxPages: 6812.67,
  };
```

### `models.RestAuthenticationNoneRestPaginationTypeRequestOffset`

```typescript
const value: models.RestAuthenticationNoneRestPaginationTypeRequestOffset = {
  type: "request_offset",
  offsetField: "<value>",
  offset: 9495.4,
  limitField: "<value>",
  limit: 930.55,
  totalRecordField: "<value>",
  maxPages: 1270.42,
  zeroIndexed: false,
};
```

### `models.RestAuthenticationNoneRestPaginationTypeRequestPage`

```typescript
const value: models.RestAuthenticationNoneRestPaginationTypeRequestPage = {
  type: "request_page",
  pageField: "<value>",
  page: 2358.74,
  sizeField: "<value>",
  size: 1013.67,
  totalPageField: "<value>",
  totalRecordField: "<value>",
  maxPages: 8758.77,
  zeroIndexed: true,
};
```

