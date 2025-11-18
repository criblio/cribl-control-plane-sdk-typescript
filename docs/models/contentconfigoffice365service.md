# ContentConfigOffice365Service

## Example Usage

```typescript
import { ContentConfigOffice365Service } from "cribl-control-plane/models";

let value: ContentConfigOffice365Service = {
  contentType: "<value>",
  description: "far disbar enchanting stint",
  interval: 4257.52,
  logLevel: "error",
  enabled: true,
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `contentType`                                                                               | *string*                                                                                    | :heavy_minus_sign:                                                                          | Office 365 Services API Content Type                                                        |
| `description`                                                                               | *string*                                                                                    | :heavy_minus_sign:                                                                          | If interval type is minutes the value entered must evenly divisible by 60 or save will fail |
| `interval`                                                                                  | *number*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `logLevel`                                                                                  | [models.LogLevelOffice365Service](../models/logleveloffice365service.md)                    | :heavy_minus_sign:                                                                          | Collector runtime Log Level                                                                 |
| `enabled`                                                                                   | *boolean*                                                                                   | :heavy_minus_sign:                                                                          | N/A                                                                                         |