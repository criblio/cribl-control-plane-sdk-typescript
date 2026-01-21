# RestAuthenticationBasicSecretPaginationUnion


## Supported Types

### `models.RestAuthenticationBasicSecretRestPaginationTypeNone`

```typescript
const value: models.RestAuthenticationBasicSecretRestPaginationTypeNone = {
  type: "none",
};
```

### `models.RestAuthenticationBasicSecretRestPaginationTypeResponseBody`

```typescript
const value:
  models.RestAuthenticationBasicSecretRestPaginationTypeResponseBody = {
    type: "response_body",
    attribute: [
      "<value 1>",
    ],
    maxPages: 1772.28,
    lastPageExpr: "<value>",
  };
```

### `models.RestAuthenticationBasicSecretRestPaginationTypeResponseHeader`

```typescript
const value:
  models.RestAuthenticationBasicSecretRestPaginationTypeResponseHeader = {
    type: "response_header",
    attribute: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    maxPages: 1068.32,
  };
```

### `models.RestAuthenticationBasicSecretRestPaginationTypeResponseHeaderLink`

```typescript
const value:
  models.RestAuthenticationBasicSecretRestPaginationTypeResponseHeaderLink = {
    type: "response_header_link",
    nextRelationAttribute: "<value>",
    curRelationAttribute: "<value>",
    maxPages: 3441.21,
  };
```

### `models.RestAuthenticationBasicSecretRestPaginationTypeRequestOffset`

```typescript
const value:
  models.RestAuthenticationBasicSecretRestPaginationTypeRequestOffset = {
    type: "request_offset",
    offsetField: "<value>",
    offset: 9351.5,
    limitField: "<value>",
    limit: 2268.72,
    totalRecordField: "<value>",
    maxPages: 9809.39,
    zeroIndexed: true,
  };
```

### `models.RestAuthenticationBasicSecretRestPaginationTypeRequestPage`

```typescript
const value: models.RestAuthenticationBasicSecretRestPaginationTypeRequestPage =
  {
    type: "request_page",
    pageField: "<value>",
    page: 6213.27,
    sizeField: "<value>",
    size: 8227.42,
    totalPageField: "<value>",
    totalRecordField: "<value>",
    maxPages: 6562.67,
    zeroIndexed: false,
  };
```

