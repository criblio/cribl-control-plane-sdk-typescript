# InputOffice365ServiceContentConfig

## Example Usage

```typescript
import { InputOffice365ServiceContentConfig } from "cribl-control-plane/models";

let value: InputOffice365ServiceContentConfig = {
  contentType: "<value>",
  description:
    "before yippee forenenst fuss hence tightly too meh than reproachfully",
  interval: 8674.66,
  logLevel: "info",
  enabled: true,
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `contentType`                                                                               | *string*                                                                                    | :heavy_minus_sign:                                                                          | Office 365 Services API Content Type                                                        |
| `description`                                                                               | *string*                                                                                    | :heavy_minus_sign:                                                                          | If interval type is minutes the value entered must evenly divisible by 60 or save will fail |
| `interval`                                                                                  | *number*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `logLevel`                                                                                  | [models.InputOffice365ServiceLogLevel](../models/inputoffice365serviceloglevel.md)          | :heavy_minus_sign:                                                                          | Collector runtime Log Level                                                                 |
| `enabled`                                                                                   | *boolean*                                                                                   | :heavy_minus_sign:                                                                          | N/A                                                                                         |