# FunctionSidlookupConf

## Example Usage

```typescript
import { FunctionSidlookupConf } from "cribl-control-plane/models";

let value: FunctionSidlookupConf = {
  fields: [
    {
      name: "<value>",
      expr: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `fields`                                                               | [models.FunctionSidlookupField](../models/functionsidlookupfield.md)[] | :heavy_minus_sign:                                                     | Set of expressions matched to lookup responses                         |