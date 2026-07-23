# PipelineFunctionGrokConf

Configuration specific to the Pipeline Function.

## Example Usage

```typescript
import { PipelineFunctionGrokConf } from "cribl-control-plane/models";

let value: PipelineFunctionGrokConf = {
  pattern: "<value>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `pattern`                                                                          | *string*                                                                           | :heavy_check_mark:                                                                 | Grok pattern to extract fields. Syntax supported: %{PATTERN_NAME:FIELD_NAME}       |
| `patternList`                                                                      | [models.PatternListConfSerdeTypeGrok](../models/patternlistconfserdetypegrok.md)[] | :heavy_minus_sign:                                                                 | Additional Grok patterns to apply to the source field.                             |
| `source`                                                                           | *string*                                                                           | :heavy_minus_sign:                                                                 | Field on which to perform Grok extractions                                         |