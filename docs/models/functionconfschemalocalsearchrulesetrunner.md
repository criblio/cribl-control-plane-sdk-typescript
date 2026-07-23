# FunctionConfSchemaLocalSearchRulesetRunner

## Example Usage

```typescript
import { FunctionConfSchemaLocalSearchRulesetRunner } from "cribl-control-plane/models";

let value: FunctionConfSchemaLocalSearchRulesetRunner = {};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `rulesetType`                                                                                                          | [models.RulesetType](../models/rulesettype.md)                                                                         | :heavy_minus_sign:                                                                                                     | Type of ruleset to apply: dataset or datatype.                                                                         |
| `rulesetId`                                                                                                            | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | ID of the ruleset to apply.                                                                                            |
| `ruleset`                                                                                                              | [models.FullRuleset](../models/fullruleset.md)                                                                         | :heavy_minus_sign:                                                                                                     | Full ruleset definition, used with live data capture for draft or unsaved rulesets.                                    |
| `markAndIncludeDroppedEvents`                                                                                          | *boolean*                                                                                                              | :heavy_minus_sign:                                                                                                     | Only for use with live data capture. Mark events that were dropped by dataset rules and still include them for capture |