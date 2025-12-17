# PipelineFunctionGrokConf

## Example Usage

```typescript
import { PipelineFunctionGrokConf } from "cribl-control-plane/models";

let value: PipelineFunctionGrokConf = {
  pattern: "<value>",
  patternList: [
    {
      pattern: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `pattern`                                                                                | *string*                                                                                 | :heavy_check_mark:                                                                       | Grok pattern to extract fields. Syntax supported: %{PATTERN_NAME:FIELD_NAME}             |
| `patternList`                                                                            | [models.PipelineFunctionGrokPatternList](../models/pipelinefunctiongrokpatternlist.md)[] | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `source`                                                                                 | *string*                                                                                 | :heavy_minus_sign:                                                                       | Field on which to perform Grok extractions                                               |