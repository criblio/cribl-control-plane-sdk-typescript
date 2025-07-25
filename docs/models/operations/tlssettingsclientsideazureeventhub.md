# TLSSettingsClientSideAzureEventhub

## Example Usage

```typescript
import { TLSSettingsClientSideAzureEventhub } from "cribl-control-plane/models/operations";

let value: TLSSettingsClientSideAzureEventhub = {};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `disabled`                                                                                                                      | *boolean*                                                                                                                       | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |
| `rejectUnauthorized`                                                                                                            | *boolean*                                                                                                                       | :heavy_minus_sign:                                                                                                              | Reject certificates that are not authorized by a CA in the CA certificate path, or by another trusted CA (such as the system's) |