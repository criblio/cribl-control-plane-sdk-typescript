# TlsSettingsClientSideType

## Example Usage

```typescript
import { TlsSettingsClientSideType } from "cribl-control-plane/models";

let value: TlsSettingsClientSideType = {
  disabled: false,
  rejectUnauthorized: true,
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `disabled`                                                                                                                      | *boolean*                                                                                                                       | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `rejectUnauthorized`                                                                                                            | *boolean*                                                                                                                       | :heavy_minus_sign:                                                                                                              | Reject certificates that are not authorized by a CA in the CA certificate path, or by another trusted CA (such as the system's) |