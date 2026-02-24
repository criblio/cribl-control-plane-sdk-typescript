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
    maxPages: 6334.4,
  };
```

### `models.RestAuthenticationGoogleOauthRestPaginationTypeRequestOffset`

```typescript
const value:
  models.RestAuthenticationGoogleOauthRestPaginationTypeRequestOffset = {
    type: "request_offset",
    offsetField: "<value>",
    limitField: "<value>",
    limit: 3975.57,
    maxPages: 6744.7,
    zeroIndexed: false,
  };
```

### `models.RestAuthenticationGoogleOauthRestPaginationTypeRequestPage`

```typescript
const value: models.RestAuthenticationGoogleOauthRestPaginationTypeRequestPage =
  {
    type: "request_page",
    pageField: "<value>",
    sizeField: "<value>",
    size: 577.97,
    maxPages: 1115.7,
    zeroIndexed: true,
  };
```

