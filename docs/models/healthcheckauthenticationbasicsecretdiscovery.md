# HealthCheckAuthenticationBasicSecretDiscovery


## Supported Types

### `models.HealthCheckAuthenticationBasicSecretHealthCheckDiscoveryDiscoverTypeHttp`

```typescript
const value:
  models.HealthCheckAuthenticationBasicSecretHealthCheckDiscoveryDiscoverTypeHttp =
    {
      discoverMethod: "post_with_body",
      discoverBody: "<value>",
      discoverType: "none",
      discoverUrl: "https://well-lit-goodwill.info/",
      discoverRequestParams: "<value>",
      discoverRequestHeaders: [
        {
          name: "<value>",
          value: "<value>",
        },
      ],
      discoverDataField: "<value>",
    };
```

### `models.HealthCheckAuthenticationBasicSecretHealthCheckDiscoveryDiscoverTypeJson`

```typescript
const value:
  models.HealthCheckAuthenticationBasicSecretHealthCheckDiscoveryDiscoverTypeJson =
    {
      discoverType: "json",
      manualDiscoverResult: "<value>",
      discoverDataField: "<value>",
    };
```

### `models.HealthCheckAuthenticationBasicSecretHealthCheckDiscoveryDiscoverTypeList`

```typescript
const value:
  models.HealthCheckAuthenticationBasicSecretHealthCheckDiscoveryDiscoverTypeList =
    {
      discoverType: "list",
      itemList: [
        "<value 1>",
        "<value 2>",
      ],
    };
```

### `models.HealthCheckAuthenticationBasicSecretHealthCheckDiscoveryDiscoverTypeNone`

```typescript
const value:
  models.HealthCheckAuthenticationBasicSecretHealthCheckDiscoveryDiscoverTypeNone =
    {
      discoverType: "none",
    };
```

