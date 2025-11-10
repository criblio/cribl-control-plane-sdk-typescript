# InputAppscopeFilter8

## Example Usage

```typescript
import { InputAppscopeFilter8 } from "cribl-control-plane/models";

let value: InputAppscopeFilter8 = {
  allow: [
    {
      procname: "<value>",
      arg: "<value>",
      config: "<value>",
    },
  ],
  transportURL: "https://square-curl.biz",
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `allow`                                                                                                                                      | [models.Allow8](../models/allow8.md)[]                                                                                                       | :heavy_minus_sign:                                                                                                                           | Specify processes that AppScope should be loaded into, and the config to use.                                                                |
| `transportURL`                                                                                                                               | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | To override the UNIX domain socket or address/port specified in General Settings (while leaving Authentication settings as is), enter a URL. |