# RestAuthenticationBasicSecretDiscovery


## Supported Types

### `models.RestAuthenticationBasicSecretRestDiscoveryDiscoverTypeHttp`

```typescript
const value: models.RestAuthenticationBasicSecretRestDiscoveryDiscoverTypeHttp =
  {
    discoverMethod: "post",
    discoverRequestParams: "<value>",
    discoverType: "list",
    discoverUrl: "https://evil-plain.info",
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
    enableStrictDiscoverParsing: true,
    discoverResponseFormat: "<value>",
    enableDiscoverCode: true,
  };
```

### `models.RestAuthenticationBasicSecretRestDiscoveryDiscoverTypeJson`

```typescript
const value: models.RestAuthenticationBasicSecretRestDiscoveryDiscoverTypeJson =
  {
    discoverType: "json",
    manualDiscoverResult: "<value>",
    discoverDataField: "<value>",
  };
```

### `models.RestAuthenticationBasicSecretRestDiscoveryDiscoverTypeList`

```typescript
const value: models.RestAuthenticationBasicSecretRestDiscoveryDiscoverTypeList =
  {
    discoverType: "list",
    itemList: [
      "<value 1>",
      "<value 2>",
    ],
  };
```

### `models.RestAuthenticationBasicSecretRestDiscoveryDiscoverTypeNone`

```typescript
const value: models.RestAuthenticationBasicSecretRestDiscoveryDiscoverTypeNone =
  {
    discoverType: "none",
  };
```

