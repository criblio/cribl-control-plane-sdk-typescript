# InputAppscopeFilter4

## Example Usage

```typescript
import { InputAppscopeFilter4 } from "cribl-control-plane/models";

let value: InputAppscopeFilter4 = {
  allow: [
    {
      procname: "<value>",
      arg: "<value>",
      config: "<value>",
    },
  ],
  transportURL: "https://spherical-dash.net/",
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `allow`                                                                                                                                      | [models.Allow4](../models/allow4.md)[]                                                                                                       | :heavy_minus_sign:                                                                                                                           | Specify processes that AppScope should be loaded into, and the config to use.                                                                |
| `transportURL`                                                                                                                               | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | To override the UNIX domain socket or address/port specified in General Settings (while leaving Authentication settings as is), enter a URL. |