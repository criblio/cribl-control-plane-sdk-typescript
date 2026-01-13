# PqEnabledTrueWithPqConstraintRule

## Example Usage

```typescript
import { PqEnabledTrueWithPqConstraintRule } from "cribl-control-plane/models/operations";

let value: PqEnabledTrueWithPqConstraintRule = {
  filter: "<value>",
  description:
    "but palatable pfft lost approximate custom perfection newsstand frenetically",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `filter`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | JavaScript expression applied to Journal objects. Return 'true' to include it. |
| `description`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | Optional description of this rule's purpose                                    |