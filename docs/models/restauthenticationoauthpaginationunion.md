# RestAuthenticationOauthPaginationUnion


## Supported Types

### `models.RestAuthenticationOauthRestPaginationTypeNone`

```typescript
const value: models.RestAuthenticationOauthRestPaginationTypeNone = {
  type: "none",
};
```

### `models.RestAuthenticationOauthRestPaginationTypeResponseBody`

```typescript
const value: models.RestAuthenticationOauthRestPaginationTypeResponseBody = {
  type: "response_body",
  attribute: [
    "<value 1>",
  ],
  maxPages: 7102.94,
  lastPageExpr: "<value>",
};
```

### `models.RestAuthenticationOauthRestPaginationTypeResponseHeader`

```typescript
const value: models.RestAuthenticationOauthRestPaginationTypeResponseHeader = {
  type: "response_header",
  attribute: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  maxPages: 9123.91,
};
```

### `models.RestAuthenticationOauthRestPaginationTypeResponseHeaderLink`

```typescript
const value:
  models.RestAuthenticationOauthRestPaginationTypeResponseHeaderLink = {
    type: "response_header_link",
    nextRelationAttribute: "<value>",
    curRelationAttribute: "<value>",
    maxPages: 3953.39,
  };
```

### `models.RestAuthenticationOauthRestPaginationTypeRequestOffset`

```typescript
const value: models.RestAuthenticationOauthRestPaginationTypeRequestOffset = {
  type: "request_offset",
  offsetField: "<value>",
  offset: 8252.43,
  limitField: "<value>",
  limit: 6779.68,
  totalRecordField: "<value>",
  maxPages: 3962.29,
  zeroIndexed: false,
};
```

### `models.RestAuthenticationOauthRestPaginationTypeRequestPage`

```typescript
const value: models.RestAuthenticationOauthRestPaginationTypeRequestPage = {
  type: "request_page",
  pageField: "<value>",
  page: 2054.58,
  sizeField: "<value>",
  size: 5161.62,
  totalPageField: "<value>",
  totalRecordField: "<value>",
  maxPages: 5723.12,
  zeroIndexed: false,
};
```

