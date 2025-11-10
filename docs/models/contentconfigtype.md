# ContentConfigType

## Example Usage

```typescript
import { ContentConfigType } from "cribl-control-plane/models";

let value: ContentConfigType = {
  contentType: "<value>",
  description: "sport utilization and gadzooks tenant amidst weighty minus",
  interval: 6906.16,
  logLevel: "error",
  enabled: true,
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `contentType`                                                                               | *string*                                                                                    | :heavy_minus_sign:                                                                          | Office 365 Management Activity API Content Type                                             |
| `description`                                                                               | *string*                                                                                    | :heavy_minus_sign:                                                                          | If interval type is minutes the value entered must evenly divisible by 60 or save will fail |
| `interval`                                                                                  | *number*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `logLevel`                                                                                  | [models.ContentConfigTypeLogLevel](../models/contentconfigtypeloglevel.md)                  | :heavy_minus_sign:                                                                          | Collector runtime Log Level                                                                 |
| `enabled`                                                                                   | *boolean*                                                                                   | :heavy_minus_sign:                                                                          | N/A                                                                                         |