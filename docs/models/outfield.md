# OutField

## Example Usage

```typescript
import { OutField } from "cribl-control-plane/models";

let value: OutField = {
  lookupField: "<value>",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `lookupField`                                                        | *string*                                                             | :heavy_check_mark:                                                   | The field name as it appears in the lookup file                      |
| `eventField`                                                         | *string*                                                             | :heavy_minus_sign:                                                   | Optional: Field name to add to event. Defaults to lookup field name. |
| `defaultValue`                                                       | *string*                                                             | :heavy_minus_sign:                                                   | Optional: Value to assign if lookup entry is not found               |