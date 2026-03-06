# ItemsTypeRules

## Example Usage

```typescript
import { ItemsTypeRules } from "cribl-control-plane/models";

let value: ItemsTypeRules = {
  filter: "<value>",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `filter`                                                                          | *string*                                                                          | :heavy_check_mark:                                                                | JavaScript expression applied to Kubernetes objects. Return 'true' to include it. |
| `description`                                                                     | *string*                                                                          | :heavy_minus_sign:                                                                | Optional description of this rule's purpose                                       |