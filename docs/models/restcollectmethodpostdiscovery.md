# RestCollectMethodPostDiscovery


## Supported Types

### `models.RestCollectMethodPostRestDiscoveryDiscoverTypeHttp`

```typescript
const value: models.RestCollectMethodPostRestDiscoveryDiscoverTypeHttp = {
  discoverMethod: "get",
  discoverRequestParams: "<value>",
  discoverType: "http",
  discoverUrl: "https://utter-roadway.biz/",
  discoverVerb: "<value>",
  discoverBody: "<value>",
  discoverRequestHeaders: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  pagination: {
    type: "<value>",
  },
  discoverDataField: "<value>",
  enableStrictDiscoverParsing: false,
  discoverResponseFormat: "<value>",
  enableDiscoverCode: false,
};
```

### `models.RestCollectMethodPostRestDiscoveryDiscoverTypeJson`

```typescript
const value: models.RestCollectMethodPostRestDiscoveryDiscoverTypeJson = {
  discoverType: "json",
  manualDiscoverResult: "<value>",
  discoverDataField: "<value>",
};
```

### `models.RestCollectMethodPostRestDiscoveryDiscoverTypeList`

```typescript
const value: models.RestCollectMethodPostRestDiscoveryDiscoverTypeList = {
  discoverType: "list",
  itemList: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.RestCollectMethodPostRestDiscoveryDiscoverTypeNone`

```typescript
const value: models.RestCollectMethodPostRestDiscoveryDiscoverTypeNone = {
  discoverType: "none",
};
```

