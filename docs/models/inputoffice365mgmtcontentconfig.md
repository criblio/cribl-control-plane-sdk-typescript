# InputOffice365MgmtContentConfig

## Example Usage

```typescript
import { InputOffice365MgmtContentConfig } from "cribl-control-plane/models";

let value: InputOffice365MgmtContentConfig = {
  contentType: "<value>",
  description: "intend fussy phew upon",
  interval: 3563.35,
  logLevel: "debug",
  enabled: false,
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `contentType`                                                                               | *string*                                                                                    | :heavy_minus_sign:                                                                          | Office 365 Management Activity API Content Type                                             |
| `description`                                                                               | *string*                                                                                    | :heavy_minus_sign:                                                                          | If interval type is minutes the value entered must evenly divisible by 60 or save will fail |
| `interval`                                                                                  | *number*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `logLevel`                                                                                  | [models.LogLevelOptionsContentConfigItems](../models/logleveloptionscontentconfigitems.md)  | :heavy_minus_sign:                                                                          | Collector runtime Log Level                                                                 |
| `enabled`                                                                                   | *boolean*                                                                                   | :heavy_minus_sign:                                                                          | N/A                                                                                         |