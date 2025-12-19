# RuleKubeLogs

## Example Usage

```typescript
import { RuleKubeLogs } from "cribl-control-plane/models/operations";

let value: RuleKubeLogs = {
  filter: "<value>",
  description: "hunger yum darling winding upon sticker as bright makeover",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `filter`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | JavaScript expression applied to Pod objects. Return 'true' to include it. |
| `description`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | Optional description of this rule's purpose                                |