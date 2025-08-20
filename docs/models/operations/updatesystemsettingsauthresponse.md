# UpdateSystemSettingsAuthResponse

a list of AuthConfig objects

## Example Usage

```typescript
import { UpdateSystemSettingsAuthResponse } from "cribl-control-plane/models/operations";

let value: UpdateSystemSettingsAuthResponse = {
  count: 193836,
  items: [
    {
      fallback: true,
      fallbackBadLogin: true,
      filterType: "<value>",
      host: "buttery-hamburger.biz",
      port: 8015.3,
      ssl: false,
      type: "ldap",
    },
  ],
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `count`                                           | *number*                                          | :heavy_minus_sign:                                | number of items present in the items array        |
| `items`                                           | [models.AuthConfig](../../models/authconfig.md)[] | :heavy_minus_sign:                                | N/A                                               |