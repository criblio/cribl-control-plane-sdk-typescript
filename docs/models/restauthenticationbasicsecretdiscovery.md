# RestAuthenticationBasicSecretDiscovery


## Supported Types

### `models.RestAuthenticationBasicSecretRestDiscoveryDiscoverTypeHttp`

```typescript
const value: models.RestAuthenticationBasicSecretRestDiscoveryDiscoverTypeHttp =
  {
    discoverMethod: "post",
    discoverType: "list",
    discoverUrl: "https://evil-plain.info",
  };
```

### `models.RestAuthenticationBasicSecretRestDiscoveryDiscoverTypeJson`

```typescript
const value: models.RestAuthenticationBasicSecretRestDiscoveryDiscoverTypeJson =
  {
    discoverType: "json",
    manualDiscoverResult: "<value>",
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

