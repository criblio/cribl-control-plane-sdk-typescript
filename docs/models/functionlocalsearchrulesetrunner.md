# FunctionLocalSearchRulesetRunner

## Example Usage

```typescript
import { FunctionLocalSearchRulesetRunner } from "cribl-control-plane/models";

let value: FunctionLocalSearchRulesetRunner = {
  conf: {
    rulesetType: "datatype",
    rulesetId: "<id>",
  },
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "local_search_ruleset_runner",
  initTime: 8924.58,
  loadTime: 95.2,
  modTime: 7621.53,
  name: "<value>",
  schema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  uischema: {
    "key": "<value>",
  },
  version: "<value>",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `conf`                                                                                           | [models.FunctionLocalSearchRulesetRunnerConf](../models/functionlocalsearchrulesetrunnerconf.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `filename`                                                                                       | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `disabled`                                                                                       | *boolean*                                                                                        | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `group`                                                                                          | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `id`                                                                                             | [models.FunctionLocalSearchRulesetRunnerId](../models/functionlocalsearchrulesetrunnerid.md)     | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `initTime`                                                                                       | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `loadTime`                                                                                       | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `modTime`                                                                                        | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `name`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `schema`                                                                                         | Record<string, *any*>                                                                            | :heavy_check_mark:                                                                               | JSON Schema Draft-06                                                                             |
| `uischema`                                                                                       | Record<string, *any*>                                                                            | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `version`                                                                                        | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |