# RestAuthenticationLoginPaginationUnion


## Supported Types

### `models.RestAuthenticationLoginRestPaginationTypeNone`

```typescript
const value: models.RestAuthenticationLoginRestPaginationTypeNone = {
  type: "none",
};
```

### `models.RestAuthenticationLoginRestPaginationTypeResponseBody`

```typescript
const value: models.RestAuthenticationLoginRestPaginationTypeResponseBody = {
  type: "response_body",
  attribute: [
    "<value 1>",
    "<value 2>",
  ],
  maxPages: 5573.43,
  lastPageExpr: "<value>",
};
```

### `models.RestAuthenticationLoginRestPaginationTypeResponseHeader`

```typescript
const value: models.RestAuthenticationLoginRestPaginationTypeResponseHeader = {
  type: "response_header",
  attribute: [
    "<value 1>",
  ],
  maxPages: 6007.06,
};
```

### `models.RestAuthenticationLoginRestPaginationTypeResponseHeaderLink`

```typescript
const value:
  models.RestAuthenticationLoginRestPaginationTypeResponseHeaderLink = {
    type: "response_header_link",
    nextRelationAttribute: "<value>",
    curRelationAttribute: "<value>",
    maxPages: 3825.18,
  };
```

### `models.RestAuthenticationLoginRestPaginationTypeRequestOffset`

```typescript
const value: models.RestAuthenticationLoginRestPaginationTypeRequestOffset = {
  type: "request_offset",
  offsetField: "<value>",
  offset: 7797.93,
  limitField: "<value>",
  limit: 8338.95,
  totalRecordField: "<value>",
  maxPages: 192.37,
  zeroIndexed: true,
};
```

### `models.RestAuthenticationLoginRestPaginationTypeRequestPage`

```typescript
const value: models.RestAuthenticationLoginRestPaginationTypeRequestPage = {
  type: "request_page",
  pageField: "<value>",
  page: 3133.15,
  sizeField: "<value>",
  size: 9351.64,
  totalPageField: "<value>",
  totalRecordField: "<value>",
  maxPages: 4591.08,
  zeroIndexed: true,
};
```

