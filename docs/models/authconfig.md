# AuthConfig

## Example Usage

```typescript
import { AuthConfig } from "cribl-control-plane/models";

let value: AuthConfig = {
  fallback: true,
  fallbackBadLogin: true,
  filterType: "<value>",
  host: "gummy-kettledrum.net",
  port: 2339.04,
  ssl: true,
  type: "saml",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `fallback`                                           | *boolean*                                            | :heavy_check_mark:                                   | N/A                                                  |
| `fallbackBadLogin`                                   | *boolean*                                            | :heavy_check_mark:                                   | N/A                                                  |
| `filterType`                                         | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `host`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `port`                                               | *number*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `ssl`                                                | *boolean*                                            | :heavy_check_mark:                                   | N/A                                                  |
| `type`                                               | [models.AuthConfigType](../models/authconfigtype.md) | :heavy_check_mark:                                   | N/A                                                  |
| `additionalProperties`                               | Record<string, *any*>                                | :heavy_minus_sign:                                   | N/A                                                  |