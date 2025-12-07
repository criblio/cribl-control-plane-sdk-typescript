# FunctionRegexFilterSchema

## Example Usage

```typescript
import { FunctionRegexFilterSchema } from "cribl-control-plane/models";

let value: FunctionRegexFilterSchema = {
  regex: "<value>",
  regexList: [
    {
      regex: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `regex`                                                                            | *string*                                                                           | :heavy_minus_sign:                                                                 | Regex to test against                                                              |
| `regexList`                                                                        | [models.FunctionRegexFilterRegexList](../models/functionregexfilterregexlist.md)[] | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `field`                                                                            | *string*                                                                           | :heavy_minus_sign:                                                                 | Name of the field to apply the regex on (defaults to _raw)                         |