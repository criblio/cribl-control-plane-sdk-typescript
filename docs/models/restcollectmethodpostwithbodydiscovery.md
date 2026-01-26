# RestCollectMethodPostWithBodyDiscovery


## Supported Types

### `models.RestCollectMethodPostWithBodyRestDiscoveryDiscoverTypeHttp`

```typescript
const value: models.RestCollectMethodPostWithBodyRestDiscoveryDiscoverTypeHttp =
  {
    discoverMethod: "other",
    discoverVerb: "<value>",
    discoverBody: "<value>",
    discoverRequestParams: "<value>",
    discoverType: "http",
    discoverUrl: "https://reckless-discourse.name/",
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
    enableStrictDiscoverParsing: true,
    discoverResponseFormat: "<value>",
    enableDiscoverCode: true,
  };
```

### `models.RestCollectMethodPostWithBodyRestDiscoveryDiscoverTypeJson`

```typescript
const value: models.RestCollectMethodPostWithBodyRestDiscoveryDiscoverTypeJson =
  {
    discoverType: "json",
    manualDiscoverResult: "<value>",
    discoverDataField: "<value>",
  };
```

### `models.RestCollectMethodPostWithBodyRestDiscoveryDiscoverTypeList`

```typescript
const value: models.RestCollectMethodPostWithBodyRestDiscoveryDiscoverTypeList =
  {
    discoverType: "list",
    itemList: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  };
```

### `models.RestCollectMethodPostWithBodyRestDiscoveryDiscoverTypeNone`

```typescript
const value: models.RestCollectMethodPostWithBodyRestDiscoveryDiscoverTypeNone =
  {
    discoverType: "none",
  };
```

