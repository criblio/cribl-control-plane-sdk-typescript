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
    maxPages: 3825.18,
  };
```

### `models.RestAuthenticationLoginRestPaginationTypeRequestOffset`

```typescript
const value: models.RestAuthenticationLoginRestPaginationTypeRequestOffset = {
  type: "request_offset",
  offsetField: "<value>",
  limitField: "<value>",
  limit: 7797.93,
  maxPages: 8338.95,
  zeroIndexed: true,
};
```

### `models.RestAuthenticationLoginRestPaginationTypeRequestPage`

```typescript
const value: models.RestAuthenticationLoginRestPaginationTypeRequestPage = {
  type: "request_page",
  pageField: "<value>",
  sizeField: "<value>",
  size: 3133.15,
  maxPages: 9351.64,
  zeroIndexed: true,
};
```

