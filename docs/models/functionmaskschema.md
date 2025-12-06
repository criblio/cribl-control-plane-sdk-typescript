# FunctionMaskSchema

## Example Usage

```typescript
import { FunctionMaskSchema } from "cribl-control-plane/models";

let value: FunctionMaskSchema = {
  rules: [
    {
      matchRegex: "<value>",
    },
  ],
  fields: [
    "<value 1>",
    "<value 2>",
  ],
  flags: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `rules`                                                                                                | [models.FunctionMaskRule](../models/functionmaskrule.md)[]                                             | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `fields`                                                                                               | *string*[]                                                                                             | :heavy_minus_sign:                                                                                     | Fields on which to apply the masking rules. Supports * wildcards, except when used on internal fields. |
| `depth`                                                                                                | *number*                                                                                               | :heavy_minus_sign:                                                                                     | Depth to which the Mask Function will search for fields to mask                                        |
| `flags`                                                                                                | [models.FunctionMaskFlag](../models/functionmaskflag.md)[]                                             | :heavy_minus_sign:                                                                                     | Fields to evaluate if one or more masking rules are matched                                            |