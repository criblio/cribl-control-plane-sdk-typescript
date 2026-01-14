# FunctionConfSchemaLookupInField

## Example Usage

```typescript
import { FunctionConfSchemaLookupInField } from "cribl-control-plane/models";

let value: FunctionConfSchemaLookupInField = {
  eventField: "<value>",
  lookupField: "<value>",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `eventField`                                                                            | *string*                                                                                | :heavy_check_mark:                                                                      | Field name as it appears in events                                                      |
| `lookupField`                                                                           | *string*                                                                                | :heavy_minus_sign:                                                                      | Optional: The field name as it appears in the lookup file. Defaults to event field name |