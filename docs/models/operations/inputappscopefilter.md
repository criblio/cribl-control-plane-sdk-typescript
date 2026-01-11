# InputAppscopeFilter

## Example Usage

```typescript
import { InputAppscopeFilter } from "cribl-control-plane/models/operations";

let value: InputAppscopeFilter = {
  allow: [
    {
      procname: "<value>",
      arg: "<value>",
      config: "<value>",
    },
  ],
  transportURL: "https://prickly-coliseum.biz/",
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `allow`                                                                                                                                      | [operations.Allow](../../models/operations/allow.md)[]                                                                                       | :heavy_minus_sign:                                                                                                                           | Specify processes that AppScope should be loaded into, and the config to use.                                                                |
| `transportURL`                                                                                                                               | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | To override the UNIX domain socket or address/port specified in General Settings (while leaving Authentication settings as is), enter a URL. |