# PaginationTypeRestDiscoveryDiscoverTypeHttp


## Supported Types

### `models.RestDiscoveryDiscoverTypeHttpPaginationTypeNone`

```typescript
const value: models.RestDiscoveryDiscoverTypeHttpPaginationTypeNone = {
  type: "none",
};
```

### `models.RestDiscoveryDiscoverTypeHttpPaginationTypeResponseBody`

```typescript
const value: models.RestDiscoveryDiscoverTypeHttpPaginationTypeResponseBody = {
  type: "response_body",
  attribute: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  maxPages: 7762.57,
};
```

### `models.RestDiscoveryDiscoverTypeHttpPaginationTypeResponseHeader`

```typescript
const value: models.RestDiscoveryDiscoverTypeHttpPaginationTypeResponseHeader =
  {
    type: "response_header",
    attribute: [
      "<value 1>",
    ],
    maxPages: 6041.21,
  };
```

### `models.RestDiscoveryDiscoverTypeHttpPaginationTypeResponseHeaderLink`

```typescript
const value:
  models.RestDiscoveryDiscoverTypeHttpPaginationTypeResponseHeaderLink = {
    type: "response_header_link",
    nextRelationAttribute: "<value>",
    maxPages: 5039.7,
  };
```

### `models.RestDiscoveryDiscoverTypeHttpPaginationTypeRequestOffset`

```typescript
const value: models.RestDiscoveryDiscoverTypeHttpPaginationTypeRequestOffset = {
  type: "request_offset",
  offsetField: "<value>",
  limitField: "<value>",
  limit: 5946.38,
  maxPages: 4174.3,
  zeroIndexed: false,
};
```

### `models.RestDiscoveryDiscoverTypeHttpPaginationTypeRequestPage`

```typescript
const value: models.RestDiscoveryDiscoverTypeHttpPaginationTypeRequestPage = {
  type: "request_page",
  pageField: "<value>",
  sizeField: "<value>",
  size: 5975.27,
  maxPages: 9177.85,
  zeroIndexed: true,
};
```

