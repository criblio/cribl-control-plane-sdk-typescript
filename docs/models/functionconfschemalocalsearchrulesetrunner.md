# FunctionConfSchemaLocalSearchRulesetRunner

## Example Usage

```typescript
import { FunctionConfSchemaLocalSearchRulesetRunner } from "cribl-control-plane/models";

let value: FunctionConfSchemaLocalSearchRulesetRunner = {
  rulesetType: "dataset",
  rulesetId: "<id>",
  ruleset: {},
  markAndIncludeDroppedEvents: false,
};
```

## Fields

| Field                                                                                                                                                          | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `rulesetType`                                                                                                                                                  | [models.RulesetType](../models/rulesettype.md)                                                                                                                 | :heavy_minus_sign:                                                                                                                                             | N/A                                                                                                                                                            |
| `rulesetId`                                                                                                                                                    | *string*                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                             | N/A                                                                                                                                                            |
| `ruleset`                                                                                                                                                      | [models.FullRulesetIEForUseWithLiveDataCaptureWhichUsesDraftUnsavedRulesets](../models/fullrulesetieforusewithlivedatacapturewhichusesdraftunsavedrulesets.md) | :heavy_minus_sign:                                                                                                                                             | N/A                                                                                                                                                            |
| `markAndIncludeDroppedEvents`                                                                                                                                  | *boolean*                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                             | Only for use with live data capture. Mark events that were dropped by dataset rules and still include them for capture                                         |