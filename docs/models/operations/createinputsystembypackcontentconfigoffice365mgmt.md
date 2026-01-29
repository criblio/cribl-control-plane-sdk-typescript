# CreateInputSystemByPackContentConfigOffice365Mgmt

## Example Usage

```typescript
import { CreateInputSystemByPackContentConfigOffice365Mgmt } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackContentConfigOffice365Mgmt = {
  contentType: "<value>",
  description: "yowza animated musty famously owlishly scare",
  interval: 7002.87,
  logLevel: "info",
  enabled: true,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `contentType`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Office 365 Management Activity API Content Type                                               |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | If interval type is minutes the value entered must evenly divisible by 60 or save will fail   |
| `interval`                                                                                    | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `logLevel`                                                                                    | [models.LogLevelOptionsContentConfigItems](../../models/logleveloptionscontentconfigitems.md) | :heavy_minus_sign:                                                                            | Collector runtime Log Level                                                                   |
| `enabled`                                                                                     | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |