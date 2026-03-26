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
    maxPages: 2170.94,
  };
```

### `models.RestAuthenticationHmacRestPaginationTypeRequestOffset`

```typescript
const value: models.RestAuthenticationHmacRestPaginationTypeRequestOffset = {
  type: "request_offset",
  offsetField: "<value>",
  limitField: "<value>",
  limit: 8482.88,
  maxPages: 447.69,
  zeroIndexed: false,
};
```

### `models.RestAuthenticationHmacRestPaginationTypeRequestPage`

```typescript
const value: models.RestAuthenticationHmacRestPaginationTypeRequestPage = {
  type: "request_page",
  pageField: "<value>",
  sizeField: "<value>",
  size: 1065.23,
  maxPages: 2334.42,
  zeroIndexed: true,
};
```

