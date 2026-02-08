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
    maxPages: 6812.67,
  };
```

### `models.RestAuthenticationNoneRestPaginationTypeRequestOffset`

```typescript
const value: models.RestAuthenticationNoneRestPaginationTypeRequestOffset = {
  type: "request_offset",
  offsetField: "<value>",
  limitField: "<value>",
  limit: 9495.4,
  maxPages: 930.55,
  zeroIndexed: true,
};
```

### `models.RestAuthenticationNoneRestPaginationTypeRequestPage`

```typescript
const value: models.RestAuthenticationNoneRestPaginationTypeRequestPage = {
  type: "request_page",
  pageField: "<value>",
  sizeField: "<value>",
  size: 2358.74,
  maxPages: 1013.67,
  zeroIndexed: false,
};
```

