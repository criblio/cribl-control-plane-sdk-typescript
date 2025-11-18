# RuleKubeMetrics

## Example Usage

```typescript
import { RuleKubeMetrics } from "cribl-control-plane/models";

let value: RuleKubeMetrics = {
  filter: "<value>",
  description: "for apud monthly",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `filter`                                                                          | *string*                                                                          | :heavy_check_mark:                                                                | JavaScript expression applied to Kubernetes objects. Return 'true' to include it. |
| `description`                                                                     | *string*                                                                          | :heavy_minus_sign:                                                                | Optional description of this rule's purpose                                       |