# LookupDbLookupFalseMatchModeExactInField

## Example Usage

```typescript
import { LookupDbLookupFalseMatchModeExactInField } from "cribl-control-plane/models";

let value: LookupDbLookupFalseMatchModeExactInField = {
  eventField: "<value>",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `eventField`                                                                            | *string*                                                                                | :heavy_check_mark:                                                                      | Field name as it appears in events                                                      |
| `lookupField`                                                                           | *string*                                                                                | :heavy_minus_sign:                                                                      | Optional: The field name as it appears in the lookup file. Defaults to event field name |