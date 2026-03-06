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
    maxPages: 3441.21,
  };
```

### `models.RestAuthenticationBasicSecretRestPaginationTypeRequestOffset`

```typescript
const value:
  models.RestAuthenticationBasicSecretRestPaginationTypeRequestOffset = {
    type: "request_offset",
    offsetField: "<value>",
    limitField: "<value>",
    limit: 9351.5,
    maxPages: 2268.72,
    zeroIndexed: false,
  };
```

### `models.RestAuthenticationBasicSecretRestPaginationTypeRequestPage`

```typescript
const value: models.RestAuthenticationBasicSecretRestPaginationTypeRequestPage =
  {
    type: "request_page",
    pageField: "<value>",
    sizeField: "<value>",
    size: 6213.27,
    maxPages: 8227.42,
    zeroIndexed: false,
  };
```

