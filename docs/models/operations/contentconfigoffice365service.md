# ContentConfigOffice365Service

## Example Usage

```typescript
import { ContentConfigOffice365Service } from "cribl-control-plane/models/operations";

let value: ContentConfigOffice365Service = {};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `contentType`                                                                               | *string*                                                                                    | :heavy_minus_sign:                                                                          | Office 365 Services API Content Type                                                        |
| `description`                                                                               | *string*                                                                                    | :heavy_minus_sign:                                                                          | If interval type is minutes the value entered must evenly divisible by 60 or save will fail |
| `interval`                                                                                  | *number*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `logLevel`                                                                                  | [operations.LogLevelOffice365Service](../../models/operations/logleveloffice365service.md)  | :heavy_minus_sign:                                                                          | Collector runtime Log Level                                                                 |
| `enabled`                                                                                   | *boolean*                                                                                   | :heavy_minus_sign:                                                                          | N/A                                                                                         |