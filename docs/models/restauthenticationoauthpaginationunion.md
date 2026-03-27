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
    maxPages: 3953.39,
  };
```

### `models.RestAuthenticationOauthRestPaginationTypeRequestOffset`

```typescript
const value: models.RestAuthenticationOauthRestPaginationTypeRequestOffset = {
  type: "request_offset",
  offsetField: "<value>",
  limitField: "<value>",
  limit: 8252.43,
  maxPages: 6779.68,
  zeroIndexed: true,
};
```

### `models.RestAuthenticationOauthRestPaginationTypeRequestPage`

```typescript
const value: models.RestAuthenticationOauthRestPaginationTypeRequestPage = {
  type: "request_page",
  pageField: "<value>",
  sizeField: "<value>",
  size: 2054.58,
  maxPages: 5161.62,
  zeroIndexed: false,
};
```

