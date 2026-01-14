# PipelineFunctionLookupConf

## Example Usage

```typescript
import { PipelineFunctionLookupConf } from "cribl-control-plane/models";

let value: PipelineFunctionLookupConf = {
  file: "<value>",
  dbLookup: true,
  matchMode: "<value>",
  matchType: "<value>",
  reloadPeriodSec: "<value>",
  inFields: [
    {
      eventField: "<value>",
      lookupField: "<value>",
    },
  ],
  outFields: [
    {
      lookupField: "<value>",
      eventField: "<value>",
      defaultValue: "<value>",
    },
  ],
  addToEvent: true,
  ignoreCase: "<value>",
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `file`                                                                                                                                       | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | Path to the lookup file. Reference environment variables via $. Example: $HOME/file.csv                                                      |
| `dbLookup`                                                                                                                                   | *boolean*                                                                                                                                    | :heavy_minus_sign:                                                                                                                           | Enable to use a disk-based lookup. This option displays only the settings relevant to disk-based mode and hides those for in-memory lookups. |
| `matchMode`                                                                                                                                  | *any*                                                                                                                                        | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |
| `matchType`                                                                                                                                  | *any*                                                                                                                                        | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |
| `reloadPeriodSec`                                                                                                                            | *any*                                                                                                                                        | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |
| `inFields`                                                                                                                                   | [models.PipelineFunctionLookupInField](../models/pipelinefunctionlookupinfield.md)[]                                                         | :heavy_minus_sign:                                                                                                                           | Fields that should be used to key into the lookup table                                                                                      |
| `outFields`                                                                                                                                  | [models.PipelineFunctionLookupOutField](../models/pipelinefunctionlookupoutfield.md)[]                                                       | :heavy_minus_sign:                                                                                                                           | Fields to add to events after matching lookup. Defaults to all if not specified.                                                             |
| `addToEvent`                                                                                                                                 | *boolean*                                                                                                                                    | :heavy_minus_sign:                                                                                                                           | Add the looked-up values to _raw, as key=value pairs                                                                                         |
| `ignoreCase`                                                                                                                                 | *any*                                                                                                                                        | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |