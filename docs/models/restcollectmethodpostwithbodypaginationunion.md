# RestCollectMethodPostWithBodyPaginationUnion


## Supported Types

### `models.RestCollectMethodPostWithBodyRestPaginationTypeNone`

```typescript
const value: models.RestCollectMethodPostWithBodyRestPaginationTypeNone = {
  type: "none",
};
```

### `models.RestCollectMethodPostWithBodyRestPaginationTypeResponseBody`

```typescript
const value:
  models.RestCollectMethodPostWithBodyRestPaginationTypeResponseBody = {
    type: "response_body",
    attribute: [
      "<value 1>",
    ],
    maxPages: 2296.76,
  };
```

### `models.RestCollectMethodPostWithBodyRestPaginationTypeResponseHeader`

```typescript
const value:
  models.RestCollectMethodPostWithBodyRestPaginationTypeResponseHeader = {
    type: "response_header",
    attribute: [
      "<value 1>",
      "<value 2>",
    ],
    maxPages: 8070.7,
  };
```

### `models.RestCollectMethodPostWithBodyRestPaginationTypeResponseHeaderLink`

```typescript
const value:
  models.RestCollectMethodPostWithBodyRestPaginationTypeResponseHeaderLink = {
    type: "response_header_link",
    nextRelationAttribute: "<value>",
    maxPages: 1524.69,
  };
```

### `models.RestCollectMethodPostWithBodyRestPaginationTypeRequestOffset`

```typescript
const value:
  models.RestCollectMethodPostWithBodyRestPaginationTypeRequestOffset = {
    type: "request_offset",
    offsetField: "<value>",
    limitField: "<value>",
    limit: 3152.54,
    maxPages: 4998.62,
    zeroIndexed: false,
  };
```

### `models.RestCollectMethodPostWithBodyRestPaginationTypeRequestPage`

```typescript
const value: models.RestCollectMethodPostWithBodyRestPaginationTypeRequestPage =
  {
    type: "request_page",
    pageField: "<value>",
    sizeField: "<value>",
    size: 7398.81,
    maxPages: 4916.2,
    zeroIndexed: false,
  };
```

