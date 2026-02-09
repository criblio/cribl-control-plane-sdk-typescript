# RestAuthenticationLoginGetAuthTokenFromHeaderFalseRestDiscoveryDiscoverTypeList

## Example Usage

```typescript
import { RestAuthenticationLoginGetAuthTokenFromHeaderFalseRestDiscoveryDiscoverTypeList } from "cribl-control-plane/models";

let value:
  RestAuthenticationLoginGetAuthTokenFromHeaderFalseRestDiscoveryDiscoverTypeList =
    {
      discoverType: "list",
      itemList: [
        "<value 1>",
        "<value 2>",
      ],
    };
```

## Fields

| Field                                                                                                                                                                                       | Type                                                                                                                                                                                        | Required                                                                                                                                                                                    | Description                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `discoverType`                                                                                                                                                                              | *"list"*                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                          | Defines how task discovery will be performed. Each entry returned by the Discover operation will result in a Collect task.                                                                  |
| `itemList`                                                                                                                                                                                  | *string*[]                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                          | Comma-separated list of items to return from the Discover task. Each item returned generates a Collect task and can be referenced using `${id}` in the Collect URL, headers, or parameters. |