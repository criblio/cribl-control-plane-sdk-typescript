# RestAuthenticationHmacPaginationUnion


## Supported Types

### `models.RestAuthenticationHmacRestPaginationTypeNone`

```typescript
const value: models.RestAuthenticationHmacRestPaginationTypeNone = {
  type: "none",
};
```

### `models.RestAuthenticationHmacRestPaginationTypeResponseBody`

```typescript
const value: models.RestAuthenticationHmacRestPaginationTypeResponseBody = {
  type: "response_body",
  attribute: [
    "<value 1>",
    "<value 2>",
  ],
  maxPages: 8653.61,
  lastPageExpr: "<value>",
};
```

### `models.RestAuthenticationHmacRestPaginationTypeResponseHeader`

```typescript
const value: models.RestAuthenticationHmacRestPaginationTypeResponseHeader = {
  type: "response_header",
  attribute: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  maxPages: 7703.32,
};
```

### `models.RestAuthenticationHmacRestPaginationTypeResponseHeaderLink`

```typescript
const value: models.RestAuthenticationHmacRestPaginationTypeResponseHeaderLink =
  {
    type: "response_header_link",
    nextRelationAttribute: "<value>",
    curRelationAttribute: "<value>",
    maxPages: 2170.94,
  };
```

### `models.RestAuthenticationHmacRestPaginationTypeRequestOffset`

```typescript
const value: models.RestAuthenticationHmacRestPaginationTypeRequestOffset = {
  type: "request_offset",
  offsetField: "<value>",
  offset: 8482.88,
  limitField: "<value>",
  limit: 447.69,
  totalRecordField: "<value>",
  maxPages: 7692.14,
  zeroIndexed: false,
};
```

### `models.RestAuthenticationHmacRestPaginationTypeRequestPage`

```typescript
const value: models.RestAuthenticationHmacRestPaginationTypeRequestPage = {
  type: "request_page",
  pageField: "<value>",
  page: 1065.23,
  sizeField: "<value>",
  size: 2334.42,
  totalPageField: "<value>",
  totalRecordField: "<value>",
  maxPages: 3750.57,
  zeroIndexed: false,
};
```

