# RestAuthenticationOauthDiscovery


## Supported Types

### `models.RestAuthenticationOauthRestDiscoveryDiscoverTypeHttp`

```typescript
const value: models.RestAuthenticationOauthRestDiscoveryDiscoverTypeHttp = {
  discoverMethod: "post_with_body",
  discoverBody: "<value>",
  discoverType: "http",
  discoverUrl: "https://wordy-deck.net",
  discoverVerb: "<value>",
  discoverRequestParams: "<value>",
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

### `models.RestAuthenticationOauthRestDiscoveryDiscoverTypeJson`

```typescript
const value: models.RestAuthenticationOauthRestDiscoveryDiscoverTypeJson = {
  discoverType: "json",
  manualDiscoverResult: "<value>",
  discoverDataField: "<value>",
};
```

### `models.RestAuthenticationOauthRestDiscoveryDiscoverTypeList`

```typescript
const value: models.RestAuthenticationOauthRestDiscoveryDiscoverTypeList = {
  discoverType: "list",
  itemList: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `models.RestAuthenticationOauthRestDiscoveryDiscoverTypeNone`

```typescript
const value: models.RestAuthenticationOauthRestDiscoveryDiscoverTypeNone = {
  discoverType: "none",
};
```

