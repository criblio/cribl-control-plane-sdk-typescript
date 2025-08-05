# InputKubeMetricsRule

## Example Usage

```typescript
import { InputKubeMetricsRule } from "cribl-control-plane/models";

let value: InputKubeMetricsRule = {
  filter: "<value>",
  description: "inveigle afore excitedly overspend train gah gee yawningly",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `filter`                                                                          | *string*                                                                          | :heavy_check_mark:                                                                | JavaScript expression applied to Kubernetes objects. Return 'true' to include it. |
| `description`                                                                     | *string*                                                                          | :heavy_minus_sign:                                                                | Optional description of this rule's purpose                                       |