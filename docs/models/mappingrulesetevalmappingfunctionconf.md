# MappingRulesetEvalMappingFunctionConf

## Example Usage

```typescript
import { MappingRulesetEvalMappingFunctionConf } from "cribl-control-plane/models";

let value: MappingRulesetEvalMappingFunctionConf = {
  add: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `add`                                          | [models.Add](../models/add.md)[]               | :heavy_minus_sign:                             | Set of key-value pairs to evaluate and add/set |