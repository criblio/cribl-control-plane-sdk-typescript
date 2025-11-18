# FilterAppscope

## Example Usage

```typescript
import { FilterAppscope } from "cribl-control-plane/models";

let value: FilterAppscope = {
  allow: [
    {
      procname: "<value>",
      arg: "<value>",
      config: "<value>",
    },
  ],
  transportURL: "https://sad-aircraft.biz",
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `allow`                                                                                                                                      | [models.Allow](../models/allow.md)[]                                                                                                         | :heavy_minus_sign:                                                                                                                           | Specify processes that AppScope should be loaded into, and the config to use.                                                                |
| `transportURL`                                                                                                                               | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | To override the UNIX domain socket or address/port specified in General Settings (while leaving Authentication settings as is), enter a URL. |