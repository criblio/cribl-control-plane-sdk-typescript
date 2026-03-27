# LookupDbLookupFalseMatchModeCidrInField

## Example Usage

```typescript
import { LookupDbLookupFalseMatchModeCidrInField } from "cribl-control-plane/models";

let value: LookupDbLookupFalseMatchModeCidrInField = {
  eventField: "<value>",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `eventField`                                                                            | *string*                                                                                | :heavy_check_mark:                                                                      | Field name as it appears in events                                                      |
| `lookupField`                                                                           | *string*                                                                                | :heavy_minus_sign:                                                                      | Optional: The field name as it appears in the lookup file. Defaults to event field name |