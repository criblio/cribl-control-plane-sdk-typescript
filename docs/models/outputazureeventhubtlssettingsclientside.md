# OutputAzureEventhubTLSSettingsClientSide

## Example Usage

```typescript
import { OutputAzureEventhubTLSSettingsClientSide } from "cribl-control-plane/models";

let value: OutputAzureEventhubTLSSettingsClientSide = {};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `disabled`                                                                                                                      | *boolean*                                                                                                                       | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |
| `rejectUnauthorized`                                                                                                            | *boolean*                                                                                                                       | :heavy_minus_sign:                                                                                                              | Reject certificates that are not authorized by a CA in the CA certificate path, or by another trusted CA (such as the system's) |