# RestAuthenticationLoginDiscovery


## Supported Types

### `models.RestAuthenticationLoginRestDiscoveryDiscoverTypeHttp`

```typescript
const value: models.RestAuthenticationLoginRestDiscoveryDiscoverTypeHttp = {
  discoverMethod: "get",
  discoverRequestParams: "<value>",
  discoverType: "list",
  discoverUrl: "https://salty-translation.info/",
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

### `models.RestAuthenticationLoginRestDiscoveryDiscoverTypeJson`

```typescript
const value: models.RestAuthenticationLoginRestDiscoveryDiscoverTypeJson = {
  discoverType: "json",
  manualDiscoverResult: "<value>",
  discoverDataField: "<value>",
};
```

### `models.RestAuthenticationLoginRestDiscoveryDiscoverTypeList`

```typescript
const value: models.RestAuthenticationLoginRestDiscoveryDiscoverTypeList = {
  discoverType: "list",
  itemList: [],
};
```

### `models.RestAuthenticationLoginRestDiscoveryDiscoverTypeNone`

```typescript
const value: models.RestAuthenticationLoginRestDiscoveryDiscoverTypeNone = {
  discoverType: "none",
};
```

