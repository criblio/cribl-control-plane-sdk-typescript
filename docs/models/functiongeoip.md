# FunctionGeoip

## Example Usage

```typescript
import { FunctionGeoip } from "cribl-control-plane/models";

let value: FunctionGeoip = {
  conf: {
    file: "<value>",
    additionalFields: [
      {
        extraInField: "<value>",
        extraOutField: "<value>",
      },
    ],
    outFieldMappings: {},
  },
  filename: "example.file",
  disabled: false,
  group: "<value>",
  id: "geoip",
  initTime: 3251.53,
  loadTime: 9944.79,
  modTime: 720.66,
  name: "<value>",
  schema: {
    "key": "<value>",
  },
  uischema: {
    "key": "<value>",
  },
  version: "<value>",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `conf`                                                     | [models.FunctionGeoipConf](../models/functiongeoipconf.md) | :heavy_check_mark:                                         | N/A                                                        |
| `filename`                                                 | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `disabled`                                                 | *boolean*                                                  | :heavy_check_mark:                                         | N/A                                                        |
| `group`                                                    | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `id`                                                       | [models.FunctionGeoipId](../models/functiongeoipid.md)     | :heavy_check_mark:                                         | N/A                                                        |
| `initTime`                                                 | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `loadTime`                                                 | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `modTime`                                                  | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `name`                                                     | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `schema`                                                   | Record<string, *any*>                                      | :heavy_check_mark:                                         | JSON Schema Draft-06                                       |
| `uischema`                                                 | Record<string, *any*>                                      | :heavy_check_mark:                                         | N/A                                                        |
| `version`                                                  | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |