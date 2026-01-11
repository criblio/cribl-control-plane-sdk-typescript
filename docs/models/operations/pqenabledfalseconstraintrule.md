# PqEnabledFalseConstraintRule

## Example Usage

```typescript
import { PqEnabledFalseConstraintRule } from "cribl-control-plane/models/operations";

let value: PqEnabledFalseConstraintRule = {
  filter: "<value>",
  description: "yuck when a begonia puff ample from really within",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `filter`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | JavaScript expression applied to Journal objects. Return 'true' to include it. |
| `description`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | Optional description of this rule's purpose                                    |