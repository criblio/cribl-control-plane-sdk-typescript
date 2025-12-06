# FunctionGenStats

## Example Usage

```typescript
import { FunctionGenStats } from "cribl-control-plane/models";

let value: FunctionGenStats = {
  filename: "example.file",
  asyncTimeout: 3025.75,
  criblVersion: "<value>",
  disabled: false,
  group: "<value>",
  handleSignals: true,
  id: "gen_stats",
  loadTime: 1067.22,
  modTime: 9199.44,
  name: "<value>",
  sync: false,
  uischema: {
    "key": "<value>",
  },
  version: "<value>",
  schema: {
    fields: [
      "<value 1>",
      "<value 2>",
    ],
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `filename`                                                         | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `asyncTimeout`                                                     | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `criblVersion`                                                     | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `disabled`                                                         | *boolean*                                                          | :heavy_check_mark:                                                 | N/A                                                                |
| `group`                                                            | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `handleSignals`                                                    | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |
| `id`                                                               | [models.FunctionGenStatsId](../models/functiongenstatsid.md)       | :heavy_check_mark:                                                 | N/A                                                                |
| `loadTime`                                                         | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `modTime`                                                          | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `name`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `sync`                                                             | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |
| `uischema`                                                         | Record<string, *any*>                                              | :heavy_check_mark:                                                 | N/A                                                                |
| `version`                                                          | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `schema`                                                           | [models.GenStatsConfiguration](../models/genstatsconfiguration.md) | :heavy_minus_sign:                                                 | N/A                                                                |