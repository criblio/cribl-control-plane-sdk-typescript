# RestAuthenticationGoogleOauthPaginationUnion


## Supported Types

### `models.RestAuthenticationGoogleOauthRestPaginationTypeNone`

```typescript
const value: models.RestAuthenticationGoogleOauthRestPaginationTypeNone = {
  type: "none",
};
```

### `models.RestAuthenticationGoogleOauthRestPaginationTypeResponseBody`

```typescript
const value:
  models.RestAuthenticationGoogleOauthRestPaginationTypeResponseBody = {
    type: "response_body",
    attribute: [
      "<value 1>",
      "<value 2>",
    ],
    maxPages: 1074.59,
    lastPageExpr: "<value>",
  };
```

### `models.RestAuthenticationGoogleOauthRestPaginationTypeResponseHeader`

```typescript
const value:
  models.RestAuthenticationGoogleOauthRestPaginationTypeResponseHeader = {
    type: "response_header",
    attribute: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    maxPages: 4711.08,
  };
```

### `models.RestAuthenticationGoogleOauthRestPaginationTypeResponseHeaderLink`

```typescript
const value:
  models.RestAuthenticationGoogleOauthRestPaginationTypeResponseHeaderLink = {
    type: "response_header_link",
    nextRelationAttribute: "<value>",
    curRelationAttribute: "<value>",
    maxPages: 6334.4,
  };
```

### `models.RestAuthenticationGoogleOauthRestPaginationTypeRequestOffset`

```typescript
const value:
  models.RestAuthenticationGoogleOauthRestPaginationTypeRequestOffset = {
    type: "request_offset",
    offsetField: "<value>",
    offset: 3975.57,
    limitField: "<value>",
    limit: 6744.7,
    totalRecordField: "<value>",
    maxPages: 7846.02,
    zeroIndexed: true,
  };
```

### `models.RestAuthenticationGoogleOauthRestPaginationTypeRequestPage`

```typescript
const value: models.RestAuthenticationGoogleOauthRestPaginationTypeRequestPage =
  {
    type: "request_page",
    pageField: "<value>",
    page: 577.97,
    sizeField: "<value>",
    size: 1115.7,
    totalPageField: "<value>",
    totalRecordField: "<value>",
    maxPages: 401.89,
    zeroIndexed: false,
  };
```

