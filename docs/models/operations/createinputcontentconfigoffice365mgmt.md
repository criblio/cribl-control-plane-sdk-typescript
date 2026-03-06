# CreateInputContentConfigOffice365Mgmt

## Example Usage

```typescript
import { CreateInputContentConfigOffice365Mgmt } from "cribl-control-plane/models/operations";

let value: CreateInputContentConfigOffice365Mgmt = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `contentType`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Office 365 Management Activity API Content Type                                               |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | If interval type is minutes the value entered must evenly divisible by 60 or save will fail   |
| `interval`                                                                                    | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `logLevel`                                                                                    | [models.LogLevelOptionsContentConfigItems](../../models/logleveloptionscontentconfigitems.md) | :heavy_minus_sign:                                                                            | Collector runtime Log Level                                                                   |
| `enabled`                                                                                     | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |