# LookupDbLookupFalseMatchModeRegexInField

## Example Usage

```typescript
import { LookupDbLookupFalseMatchModeRegexInField } from "cribl-control-plane/models";

let value: LookupDbLookupFalseMatchModeRegexInField = {
  eventField: "<value>",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `eventField`                                                                            | *string*                                                                                | :heavy_check_mark:                                                                      | Field name as it appears in events                                                      |
| `lookupField`                                                                           | *string*                                                                                | :heavy_minus_sign:                                                                      | Optional: The field name as it appears in the lookup file. Defaults to event field name |