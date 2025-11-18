# RuleKubeEvents

## Example Usage

```typescript
import { RuleKubeEvents } from "cribl-control-plane/models";

let value: RuleKubeEvents = {
  filter: "<value>",
  description:
    "now or blindly than probate crank restfully swat consequently through",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `filter`                                                                          | *string*                                                                          | :heavy_check_mark:                                                                | JavaScript expression applied to Kubernetes objects. Return 'true' to include it. |
| `description`                                                                     | *string*                                                                          | :heavy_minus_sign:                                                                | Optional description of this rule's purpose                                       |