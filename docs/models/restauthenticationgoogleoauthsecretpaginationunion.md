# RestAuthenticationGoogleOauthSecretPaginationUnion


## Supported Types

### `models.RestAuthenticationGoogleOauthSecretRestPaginationTypeNone`

```typescript
const value: models.RestAuthenticationGoogleOauthSecretRestPaginationTypeNone =
  {
    type: "none",
  };
```

### `models.RestAuthenticationGoogleOauthSecretRestPaginationTypeResponseBody`

```typescript
const value:
  models.RestAuthenticationGoogleOauthSecretRestPaginationTypeResponseBody = {
    type: "response_body",
    attribute: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    maxPages: 3021.47,
    lastPageExpr: "<value>",
  };
```

### `models.RestAuthenticationGoogleOauthSecretRestPaginationTypeResponseHeader`

```typescript
const value:
  models.RestAuthenticationGoogleOauthSecretRestPaginationTypeResponseHeader = {
    type: "response_header",
    attribute: [],
    maxPages: 8001.11,
  };
```

### `models.RestAuthenticationGoogleOauthSecretRestPaginationTypeResponseHeaderLink`

```typescript
const value:
  models.RestAuthenticationGoogleOauthSecretRestPaginationTypeResponseHeaderLink =
    {
      type: "response_header_link",
      nextRelationAttribute: "<value>",
      curRelationAttribute: "<value>",
      maxPages: 8706.47,
    };
```

### `models.RestAuthenticationGoogleOauthSecretRestPaginationTypeRequestOffset`

```typescript
const value:
  models.RestAuthenticationGoogleOauthSecretRestPaginationTypeRequestOffset = {
    type: "request_offset",
    offsetField: "<value>",
    offset: 3299.64,
    limitField: "<value>",
    limit: 1677.11,
    totalRecordField: "<value>",
    maxPages: 4405.08,
    zeroIndexed: true,
  };
```

### `models.RestAuthenticationGoogleOauthSecretRestPaginationTypeRequestPage`

```typescript
const value:
  models.RestAuthenticationGoogleOauthSecretRestPaginationTypeRequestPage = {
    type: "request_page",
    pageField: "<value>",
    page: 5382.91,
    sizeField: "<value>",
    size: 592.12,
    totalPageField: "<value>",
    totalRecordField: "<value>",
    maxPages: 4632.73,
    zeroIndexed: false,
  };
```

