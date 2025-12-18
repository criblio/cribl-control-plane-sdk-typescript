# PipelineFunctionGrokPatternList

## Example Usage

```typescript
import { PipelineFunctionGrokPatternList } from "cribl-control-plane/models";

let value: PipelineFunctionGrokPatternList = {
  pattern: "<value>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `pattern`                                                                    | *string*                                                                     | :heavy_check_mark:                                                           | Grok pattern to extract fields. Syntax supported: %{PATTERN_NAME:FIELD_NAME} |