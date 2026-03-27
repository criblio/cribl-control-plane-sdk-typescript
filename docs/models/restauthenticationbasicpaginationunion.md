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
    maxPages: 5055.26,
  };
```

### `models.RestAuthenticationBasicRestPaginationTypeRequestOffset`

```typescript
const value: models.RestAuthenticationBasicRestPaginationTypeRequestOffset = {
  type: "request_offset",
  offsetField: "<value>",
  limitField: "<value>",
  limit: 4146.41,
  maxPages: 8360.08,
  zeroIndexed: false,
};
```

### `models.RestAuthenticationBasicRestPaginationTypeRequestPage`

```typescript
const value: models.RestAuthenticationBasicRestPaginationTypeRequestPage = {
  type: "request_page",
  pageField: "<value>",
  sizeField: "<value>",
  size: 9585.16,
  maxPages: 1679.64,
  zeroIndexed: false,
};
```

