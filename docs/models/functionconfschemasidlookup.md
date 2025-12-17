# FunctionConfSchemaSidlookup

## Example Usage

```typescript
import { FunctionConfSchemaSidlookup } from "cribl-control-plane/models";

let value: FunctionConfSchemaSidlookup = {
  fields: [
    {
      name: "<value>",
      expr: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `fields`                                                                                   | [models.FunctionConfSchemaSidlookupField](../models/functionconfschemasidlookupfield.md)[] | :heavy_minus_sign:                                                                         | Set of expressions matched to lookup responses                                             |