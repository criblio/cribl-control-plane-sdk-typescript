# RestAuthenticationBasicDiscovery


## Supported Types

### `models.RestAuthenticationBasicRestDiscoveryDiscoverTypeHttp`

```typescript
const value: models.RestAuthenticationBasicRestDiscoveryDiscoverTypeHttp = {
  discoverMethod: "post",
  discoverRequestParams: "<value>",
  discoverType: "json",
  discoverUrl: "https://colorful-willow.com",
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

### `models.RestAuthenticationBasicRestDiscoveryDiscoverTypeJson`

```typescript
const value: models.RestAuthenticationBasicRestDiscoveryDiscoverTypeJson = {
  discoverType: "json",
  manualDiscoverResult: "<value>",
  discoverDataField: "<value>",
};
```

### `models.RestAuthenticationBasicRestDiscoveryDiscoverTypeList`

```typescript
const value: models.RestAuthenticationBasicRestDiscoveryDiscoverTypeList = {
  discoverType: "list",
  itemList: [],
};
```

### `models.RestAuthenticationBasicRestDiscoveryDiscoverTypeNone`

```typescript
const value: models.RestAuthenticationBasicRestDiscoveryDiscoverTypeNone = {
  discoverType: "none",
};
```

