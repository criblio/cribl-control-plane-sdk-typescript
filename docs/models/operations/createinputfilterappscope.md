# CreateInputFilterAppscope

## Example Usage

```typescript
import { CreateInputFilterAppscope } from "cribl-control-plane/models/operations";

let value: CreateInputFilterAppscope = {};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `allow`                                                                                                                                      | [operations.CreateInputAllow](../../models/operations/createinputallow.md)[]                                                                 | :heavy_minus_sign:                                                                                                                           | Specify processes that AppScope should be loaded into, and the config to use.                                                                |
| `transportURL`                                                                                                                               | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | To override the UNIX domain socket or address/port specified in General Settings (while leaving Authentication settings as is), enter a URL. |