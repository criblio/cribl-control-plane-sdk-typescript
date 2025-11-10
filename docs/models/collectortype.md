# CollectorType

## Example Usage

```typescript
import { CollectorType } from "cribl-control-plane/models";

let value: CollectorType = {
  type: "<value>",
  conf: {},
  encoding: "<value>",
};
```

## Fields

| Field                                                                                                                                                     | Type                                                                                                                                                      | Required                                                                                                                                                  | Description                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                    | *string*                                                                                                                                                  | :heavy_check_mark:                                                                                                                                        | The type of collector to run                                                                                                                              |
| `conf`                                                                                                                                                    | [models.CollectorSpecificSettings](../models/collectorspecificsettings.md)                                                                                | :heavy_check_mark:                                                                                                                                        | N/A                                                                                                                                                       |
| `destructive`                                                                                                                                             | *boolean*                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                        | Delete any files collected (where applicable)                                                                                                             |
| `encoding`                                                                                                                                                | *string*                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                        | Character encoding to use when parsing ingested data. When not set, @{product} will default to UTF-8 but may incorrectly interpret multi-byte characters. |