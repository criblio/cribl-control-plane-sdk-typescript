# FunctionConfSchemaRegexFilter

## Example Usage

```typescript
import { FunctionConfSchemaRegexFilter } from "cribl-control-plane/models";

let value: FunctionConfSchemaRegexFilter = {};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `regex`                                                    | *string*                                                   | :heavy_minus_sign:                                         | Regex to test against                                      |
| `regexList`                                                | [models.RegexList](../models/regexlist.md)[]               | :heavy_minus_sign:                                         | N/A                                                        |
| `field`                                                    | *string*                                                   | :heavy_minus_sign:                                         | Name of the field to apply the regex on (defaults to _raw) |