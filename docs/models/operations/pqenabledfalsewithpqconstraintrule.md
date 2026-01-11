# PqEnabledFalseWithPqConstraintRule

## Example Usage

```typescript
import { PqEnabledFalseWithPqConstraintRule } from "cribl-control-plane/models/operations";

let value: PqEnabledFalseWithPqConstraintRule = {
  filter: "<value>",
  description: "kinase lasting creative barring",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `filter`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | JavaScript expression applied to Journal objects. Return 'true' to include it. |
| `description`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | Optional description of this rule's purpose                                    |