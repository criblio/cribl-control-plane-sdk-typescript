# RestAuthenticationNoneDiscovery


## Supported Types

### `models.RestAuthenticationNoneRestDiscoveryDiscoverTypeHttp`

```typescript
const value: models.RestAuthenticationNoneRestDiscoveryDiscoverTypeHttp = {
  discoverMethod: "other",
  discoverVerb: "<value>",
  discoverBody: "<value>",
  discoverRequestParams: "<value>",
  discoverType: "http",
  discoverUrl: "https://aged-government.biz",
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
  enableDiscoverCode: false,
};
```

### `models.RestAuthenticationNoneRestDiscoveryDiscoverTypeJson`

```typescript
const value: models.RestAuthenticationNoneRestDiscoveryDiscoverTypeJson = {
  discoverType: "json",
  manualDiscoverResult: "<value>",
  discoverDataField: "<value>",
};
```

### `models.RestAuthenticationNoneRestDiscoveryDiscoverTypeList`

```typescript
const value: models.RestAuthenticationNoneRestDiscoveryDiscoverTypeList = {
  discoverType: "list",
  itemList: [],
};
```

### `models.RestAuthenticationNoneRestDiscoveryDiscoverTypeNone`

```typescript
const value: models.RestAuthenticationNoneRestDiscoveryDiscoverTypeNone = {
  discoverType: "none",
};
```

