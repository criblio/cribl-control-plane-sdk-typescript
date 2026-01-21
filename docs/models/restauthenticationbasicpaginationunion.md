# RestAuthenticationBasicPaginationUnion


## Supported Types

### `models.RestAuthenticationBasicRestPaginationTypeNone`

```typescript
const value: models.RestAuthenticationBasicRestPaginationTypeNone = {
  type: "none",
};
```

### `models.RestAuthenticationBasicRestPaginationTypeResponseBody`

```typescript
const value: models.RestAuthenticationBasicRestPaginationTypeResponseBody = {
  type: "response_body",
  attribute: [
    "<value 1>",
  ],
  maxPages: 7984.08,
  lastPageExpr: "<value>",
};
```

### `models.RestAuthenticationBasicRestPaginationTypeResponseHeader`

```typescript
const value: models.RestAuthenticationBasicRestPaginationTypeResponseHeader = {
  type: "response_header",
  attribute: [],
  maxPages: 7773.6,
};
```

### `models.RestAuthenticationBasicRestPaginationTypeResponseHeaderLink`

```typescript
const value:
  models.RestAuthenticationBasicRestPaginationTypeResponseHeaderLink = {
    type: "response_header_link",
    nextRelationAttribute: "<value>",
    curRelationAttribute: "<value>",
    maxPages: 5055.26,
  };
```

### `models.RestAuthenticationBasicRestPaginationTypeRequestOffset`

```typescript
const value: models.RestAuthenticationBasicRestPaginationTypeRequestOffset = {
  type: "request_offset",
  offsetField: "<value>",
  offset: 4146.41,
  limitField: "<value>",
  limit: 8360.08,
  totalRecordField: "<value>",
  maxPages: 5466.44,
  zeroIndexed: true,
};
```

### `models.RestAuthenticationBasicRestPaginationTypeRequestPage`

```typescript
const value: models.RestAuthenticationBasicRestPaginationTypeRequestPage = {
  type: "request_page",
  pageField: "<value>",
  page: 9585.16,
  sizeField: "<value>",
  size: 1679.64,
  totalPageField: "<value>",
  totalRecordField: "<value>",
  maxPages: 9647.42,
  zeroIndexed: false,
};
```

