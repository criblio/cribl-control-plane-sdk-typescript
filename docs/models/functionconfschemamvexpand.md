# FunctionConfSchemaMvExpand

## Example Usage

```typescript
import { FunctionConfSchemaMvExpand } from "cribl-control-plane/models";

let value: FunctionConfSchemaMvExpand = {
  sourceFields: [
    "<value 1>",
    "<value 2>",
  ],
  targetNames: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  rowLimit: 2642.13,
  itemIndexName: "<value>",
  bagExpansionMode: "bag",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `sourceFields`                                                                                               | *string*[]                                                                                                   | :heavy_minus_sign:                                                                                           | Array of property-/field-names to expand                                                                     |
| `targetNames`                                                                                                | *string*[]                                                                                                   | :heavy_minus_sign:                                                                                           | stores the value as new target field name                                                                    |
| `rowLimit`                                                                                                   | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | max. number of rows generated out of every source events                                                     |
| `itemIndexName`                                                                                              | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | name of an optional index property generated into the output                                                 |
| `bagExpansionMode`                                                                                           | [models.FunctionConfSchemaMvExpandBagExpansionMode](../models/functionconfschemamvexpandbagexpansionmode.md) | :heavy_minus_sign:                                                                                           | decides if bag-values are expanded to bags or arrays                                                         |