# RestAuthenticationLoginSecretPaginationUnion


## Supported Types

### `models.RestAuthenticationLoginSecretRestPaginationTypeNone`

```typescript
const value: models.RestAuthenticationLoginSecretRestPaginationTypeNone = {
  type: "none",
};
```

### `models.RestAuthenticationLoginSecretRestPaginationTypeResponseBody`

```typescript
const value:
  models.RestAuthenticationLoginSecretRestPaginationTypeResponseBody = {
    type: "response_body",
    attribute: [],
    maxPages: 6535.76,
  };
```

### `models.RestAuthenticationLoginSecretRestPaginationTypeResponseHeader`

```typescript
const value:
  models.RestAuthenticationLoginSecretRestPaginationTypeResponseHeader = {
    type: "response_header",
    attribute: [
      "<value 1>",
    ],
    maxPages: 5265.43,
  };
```

### `models.RestAuthenticationLoginSecretRestPaginationTypeResponseHeaderLink`

```typescript
const value:
  models.RestAuthenticationLoginSecretRestPaginationTypeResponseHeaderLink = {
    type: "response_header_link",
    nextRelationAttribute: "<value>",
    maxPages: 4824.37,
  };
```

### `models.RestAuthenticationLoginSecretRestPaginationTypeRequestOffset`

```typescript
const value:
  models.RestAuthenticationLoginSecretRestPaginationTypeRequestOffset = {
    type: "request_offset",
    offsetField: "<value>",
    limitField: "<value>",
    limit: 1976.13,
    maxPages: 1598.7,
    zeroIndexed: true,
  };
```

### `models.RestAuthenticationLoginSecretRestPaginationTypeRequestPage`

```typescript
const value: models.RestAuthenticationLoginSecretRestPaginationTypeRequestPage =
  {
    type: "request_page",
    pageField: "<value>",
    sizeField: "<value>",
    size: 7536.6,
    maxPages: 6086.92,
    zeroIndexed: false,
  };
```

