# ItemsTypeSerdeTypeGrokPatternList

## Example Usage

```typescript
import { ItemsTypeSerdeTypeGrokPatternList } from "cribl-control-plane/models";

let value: ItemsTypeSerdeTypeGrokPatternList = {
  pattern: "<value>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `pattern`                                                                    | *string*                                                                     | :heavy_check_mark:                                                           | Grok pattern to extract fields. Syntax supported: %{PATTERN_NAME:FIELD_NAME} |