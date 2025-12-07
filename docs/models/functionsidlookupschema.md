# FunctionSidlookupSchema

## Example Usage

```typescript
import { FunctionSidlookupSchema } from "cribl-control-plane/models";

let value: FunctionSidlookupSchema = {
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