# InputAppscopeFilter1

## Example Usage

```typescript
import { InputAppscopeFilter1 } from "cribl-control-plane/models";

let value: InputAppscopeFilter1 = {
  allow: [
    {
      procname: "<value>",
      arg: "<value>",
      config: "<value>",
    },
  ],
  transportURL: "https://wasteful-excess.net",
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `allow`                                                                                                                                      | [models.Allow1](../models/allow1.md)[]                                                                                                       | :heavy_minus_sign:                                                                                                                           | Specify processes that AppScope should be loaded into, and the config to use.                                                                |
| `transportURL`                                                                                                                               | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | To override the UNIX domain socket or address/port specified in General Settings (while leaving Authentication settings as is), enter a URL. |