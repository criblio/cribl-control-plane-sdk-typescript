# FunctionLocalSearchRulesetRunner

## Example Usage

```typescript
import { FunctionLocalSearchRulesetRunner } from "cribl-control-plane/models";

let value: FunctionLocalSearchRulesetRunner = {
  __filename: "example.file",
  group: "<value>",
  id: "local_search_ruleset_runner",
  loadTime: 9962.28,
  modTime: 3956.82,
  name: "<value>",
  uischema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  version: "<value>",
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `filename`                      | *string*                        | :heavy_check_mark:              | N/A                             |
| `asyncTimeout`                  | *number*                        | :heavy_minus_sign:              | N/A                             |
| `criblVersion`                  | *string*                        | :heavy_minus_sign:              | N/A                             |
| `disabled`                      | *boolean*                       | :heavy_minus_sign:              | N/A                             |
| `group`                         | *string*                        | :heavy_check_mark:              | N/A                             |
| `handleSignals`                 | *boolean*                       | :heavy_minus_sign:              | N/A                             |
| `id`                            | *"local_search_ruleset_runner"* | :heavy_check_mark:              | N/A                             |
| `loadTime`                      | *number*                        | :heavy_check_mark:              | N/A                             |
| `modTime`                       | *number*                        | :heavy_check_mark:              | N/A                             |
| `name`                          | *string*                        | :heavy_check_mark:              | N/A                             |
| `sync`                          | *boolean*                       | :heavy_minus_sign:              | N/A                             |
| `uischema`                      | Record<string, *any*>           | :heavy_check_mark:              | N/A                             |
| `version`                       | *string*                        | :heavy_check_mark:              | N/A                             |
| `schema`                        | Record<string, *any*>           | :heavy_minus_sign:              | N/A                             |