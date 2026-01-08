# FunctionLocalSearchRulesetRunner

## Example Usage

```typescript
import { FunctionLocalSearchRulesetRunner } from "cribl-control-plane/models";

let value: FunctionLocalSearchRulesetRunner = {
  __filename: "example.file",
  asyncTimeout: 9962.28,
  cribl_version: "<value>",
  disabled: true,
  group: "<value>",
  handleSignals: false,
  id: "local_search_ruleset_runner",
  loadTime: 95.2,
  modTime: 7621.53,
  name: "<value>",
  sync: false,
  uischema: {
    "key": "<value>",
  },
  version: "<value>",
  schema: {
    rulesetType: "datatype",
    rulesetId: "<id>",
    ruleset: {},
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `filename`                                                                                                   | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `asyncTimeout`                                                                                               | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `criblVersion`                                                                                               | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `disabled`                                                                                                   | *boolean*                                                                                                    | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `group`                                                                                                      | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `handleSignals`                                                                                              | *boolean*                                                                                                    | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `id`                                                                                                         | *"local_search_ruleset_runner"*                                                                              | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `loadTime`                                                                                                   | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `modTime`                                                                                                    | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `name`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `sync`                                                                                                       | *boolean*                                                                                                    | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `uischema`                                                                                                   | Record<string, *any*>                                                                                        | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `version`                                                                                                    | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `schema`                                                                                                     | [models.FunctionConfSchemaLocalSearchRulesetRunner](../models/functionconfschemalocalsearchrulesetrunner.md) | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |