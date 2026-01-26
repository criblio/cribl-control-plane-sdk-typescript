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
    lastPageExpr: "<value>",
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
    curRelationAttribute: "<value>",
    maxPages: 1524.69,
  };
```

### `models.RestCollectMethodPostWithBodyRestPaginationTypeRequestOffset`

```typescript
const value:
  models.RestCollectMethodPostWithBodyRestPaginationTypeRequestOffset = {
    type: "request_offset",
    offsetField: "<value>",
    offset: 3152.54,
    limitField: "<value>",
    limit: 4998.62,
    totalRecordField: "<value>",
    maxPages: 6131.76,
    zeroIndexed: false,
  };
```

### `models.RestCollectMethodPostWithBodyRestPaginationTypeRequestPage`

```typescript
const value: models.RestCollectMethodPostWithBodyRestPaginationTypeRequestPage =
  {
    type: "request_page",
    pageField: "<value>",
    page: 7398.81,
    sizeField: "<value>",
    size: 4916.2,
    totalPageField: "<value>",
    totalRecordField: "<value>",
    maxPages: 9315.33,
    zeroIndexed: true,
  };
```

