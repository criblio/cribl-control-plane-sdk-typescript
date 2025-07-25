# InputOffice365ServiceContentConfig

## Example Usage

```typescript
import { InputOffice365ServiceContentConfig } from "cribl-control-plane/models/operations";

let value: InputOffice365ServiceContentConfig = {};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                        | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Office 365 Services API Content Type                                                                 |
| `description`                                                                                        | *string*                                                                                             | :heavy_minus_sign:                                                                                   | If interval type is minutes the value entered must evenly divisible by 60 or save will fail          |
| `interval`                                                                                           | *number*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `logLevel`                                                                                           | [operations.InputOffice365ServiceLogLevel](../../models/operations/inputoffice365serviceloglevel.md) | :heavy_minus_sign:                                                                                   | Collector runtime Log Level                                                                          |
| `enabled`                                                                                            | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |