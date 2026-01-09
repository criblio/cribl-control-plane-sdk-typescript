# FunctionConfSchemaMask

## Example Usage

```typescript
import { FunctionConfSchemaMask } from "cribl-control-plane/models";

let value: FunctionConfSchemaMask = {
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
| `rules`                                                                                                | [models.FunctionConfSchemaMaskRule](../models/functionconfschemamaskrule.md)[]                         | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `fields`                                                                                               | *string*[]                                                                                             | :heavy_minus_sign:                                                                                     | Fields on which to apply the masking rules. Supports * wildcards, except when used on internal fields. |
| `depth`                                                                                                | *number*                                                                                               | :heavy_minus_sign:                                                                                     | Depth to which the Mask Function will search for fields to mask                                        |
| `flags`                                                                                                | [models.ItemsTypeAdd](../models/itemstypeadd.md)[]                                                     | :heavy_minus_sign:                                                                                     | Fields to evaluate if one or more masking rules are matched                                            |