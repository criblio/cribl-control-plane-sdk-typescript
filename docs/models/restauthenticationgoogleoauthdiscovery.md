# RestAuthenticationGoogleOauthDiscovery


## Supported Types

### `models.RestAuthenticationGoogleOauthRestDiscoveryDiscoverTypeHttp`

```typescript
const value: models.RestAuthenticationGoogleOauthRestDiscoveryDiscoverTypeHttp =
  {
    discoverMethod: "post_with_body",
    discoverBody: "<value>",
    discoverType: "http",
    discoverUrl: "https://official-meatloaf.name/",
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
    enableDiscoverCode: true,
  };
```

### `models.RestAuthenticationGoogleOauthRestDiscoveryDiscoverTypeJson`

```typescript
const value: models.RestAuthenticationGoogleOauthRestDiscoveryDiscoverTypeJson =
  {
    discoverType: "json",
    manualDiscoverResult: "<value>",
    discoverDataField: "<value>",
  };
```

### `models.RestAuthenticationGoogleOauthRestDiscoveryDiscoverTypeList`

```typescript
const value: models.RestAuthenticationGoogleOauthRestDiscoveryDiscoverTypeList =
  {
    discoverType: "list",
    itemList: [
      "<value 1>",
    ],
  };
```

### `models.RestAuthenticationGoogleOauthRestDiscoveryDiscoverTypeNone`

```typescript
const value: models.RestAuthenticationGoogleOauthRestDiscoveryDiscoverTypeNone =
  {
    discoverType: "none",
  };
```

