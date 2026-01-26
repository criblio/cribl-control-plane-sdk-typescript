# RestAuthenticationOauthSecretDiscovery


## Supported Types

### `models.RestAuthenticationOauthSecretRestDiscoveryDiscoverTypeHttp`

```typescript
const value: models.RestAuthenticationOauthSecretRestDiscoveryDiscoverTypeHttp =
  {
    discoverMethod: "post",
    discoverRequestParams: "<value>",
    discoverType: "http",
    discoverUrl: "https://defensive-scale.org/",
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

### `models.RestAuthenticationOauthSecretRestDiscoveryDiscoverTypeJson`

```typescript
const value: models.RestAuthenticationOauthSecretRestDiscoveryDiscoverTypeJson =
  {
    discoverType: "json",
    manualDiscoverResult: "<value>",
    discoverDataField: "<value>",
  };
```

### `models.RestAuthenticationOauthSecretRestDiscoveryDiscoverTypeList`

```typescript
const value: models.RestAuthenticationOauthSecretRestDiscoveryDiscoverTypeList =
  {
    discoverType: "list",
    itemList: [
      "<value 1>",
    ],
  };
```

### `models.RestAuthenticationOauthSecretRestDiscoveryDiscoverTypeNone`

```typescript
const value: models.RestAuthenticationOauthSecretRestDiscoveryDiscoverTypeNone =
  {
    discoverType: "none",
  };
```

