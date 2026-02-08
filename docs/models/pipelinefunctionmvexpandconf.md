# PipelineFunctionMvExpandConf

## Example Usage

```typescript
import { PipelineFunctionMvExpandConf } from "cribl-control-plane/models";

let value: PipelineFunctionMvExpandConf = {
  sourceFields: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `sourceFields`                                               | *string*[]                                                   | :heavy_check_mark:                                           | Array of property-/field-names to expand                     |
| `targetNames`                                                | *string*[]                                                   | :heavy_minus_sign:                                           | stores the value as new target field name                    |
| `rowLimit`                                                   | *number*                                                     | :heavy_minus_sign:                                           | max. number of rows generated out of every source events     |
| `itemIndexName`                                              | *string*                                                     | :heavy_minus_sign:                                           | name of an optional index property generated into the output |
| `bagExpansionMode`                                           | [models.BagExpansionMode](../models/bagexpansionmode.md)     | :heavy_minus_sign:                                           | decides if bag-values are expanded to bags or arrays         |