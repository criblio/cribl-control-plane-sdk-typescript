# PatternListConfSerdeTypeGrok

## Example Usage

```typescript
import { PatternListConfSerdeTypeGrok } from "cribl-control-plane/models";

let value: PatternListConfSerdeTypeGrok = {
  pattern: "<value>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `pattern`                                                                    | *string*                                                                     | :heavy_check_mark:                                                           | Grok pattern to extract fields. Syntax supported: %{PATTERN_NAME:FIELD_NAME} |