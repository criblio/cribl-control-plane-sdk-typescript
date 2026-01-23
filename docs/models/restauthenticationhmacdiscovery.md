# RestAuthenticationHmacDiscovery


## Supported Types

### `models.RestAuthenticationHmacRestDiscoveryDiscoverTypeHttp`

```typescript
const value: models.RestAuthenticationHmacRestDiscoveryDiscoverTypeHttp = {
  discoverMethod: "other",
  discoverVerb: "<value>",
  discoverBody: "<value>",
  discoverRequestParams: "<value>",
  discoverType: "none",
  discoverUrl: "https://tangible-acquaintance.net",
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

### `models.RestAuthenticationHmacRestDiscoveryDiscoverTypeJson`

```typescript
const value: models.RestAuthenticationHmacRestDiscoveryDiscoverTypeJson = {
  discoverType: "json",
  manualDiscoverResult: "<value>",
  discoverDataField: "<value>",
};
```

### `models.RestAuthenticationHmacRestDiscoveryDiscoverTypeList`

```typescript
const value: models.RestAuthenticationHmacRestDiscoveryDiscoverTypeList = {
  discoverType: "list",
  itemList: [
    "<value 1>",
  ],
};
```

### `models.RestAuthenticationHmacRestDiscoveryDiscoverTypeNone`

```typescript
const value: models.RestAuthenticationHmacRestDiscoveryDiscoverTypeNone = {
  discoverType: "none",
};
```

