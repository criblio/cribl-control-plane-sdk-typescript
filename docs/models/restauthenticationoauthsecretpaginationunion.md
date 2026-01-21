# RestAuthenticationOauthSecretPaginationUnion


## Supported Types

### `models.RestAuthenticationOauthSecretRestPaginationTypeNone`

```typescript
const value: models.RestAuthenticationOauthSecretRestPaginationTypeNone = {
  type: "none",
};
```

### `models.RestAuthenticationOauthSecretRestPaginationTypeResponseBody`

```typescript
const value:
  models.RestAuthenticationOauthSecretRestPaginationTypeResponseBody = {
    type: "response_body",
    attribute: [],
    maxPages: 2704.2,
    lastPageExpr: "<value>",
  };
```

### `models.RestAuthenticationOauthSecretRestPaginationTypeResponseHeader`

```typescript
const value:
  models.RestAuthenticationOauthSecretRestPaginationTypeResponseHeader = {
    type: "response_header",
    attribute: [],
    maxPages: 1876.21,
  };
```

### `models.RestAuthenticationOauthSecretRestPaginationTypeResponseHeaderLink`

```typescript
const value:
  models.RestAuthenticationOauthSecretRestPaginationTypeResponseHeaderLink = {
    type: "response_header_link",
    nextRelationAttribute: "<value>",
    curRelationAttribute: "<value>",
    maxPages: 740.15,
  };
```

### `models.RestAuthenticationOauthSecretRestPaginationTypeRequestOffset`

```typescript
const value:
  models.RestAuthenticationOauthSecretRestPaginationTypeRequestOffset = {
    type: "request_offset",
    offsetField: "<value>",
    offset: 6770.84,
    limitField: "<value>",
    limit: 8549.63,
    totalRecordField: "<value>",
    maxPages: 3602.12,
    zeroIndexed: true,
  };
```

### `models.RestAuthenticationOauthSecretRestPaginationTypeRequestPage`

```typescript
const value: models.RestAuthenticationOauthSecretRestPaginationTypeRequestPage =
  {
    type: "request_page",
    pageField: "<value>",
    page: 3011.24,
    sizeField: "<value>",
    size: 6791.62,
    totalPageField: "<value>",
    totalRecordField: "<value>",
    maxPages: 9725.5,
    zeroIndexed: false,
  };
```

