# ContentConfigOffice365Mgmt

## Example Usage

```typescript
import { ContentConfigOffice365Mgmt } from "cribl-control-plane/models/operations";

let value: ContentConfigOffice365Mgmt = {
  contentType: "<value>",
  description:
    "but ugh yearly furthermore focalise meanwhile yum belabor frankly because",
  interval: 8282.71,
  logLevel: "info",
  enabled: false,
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