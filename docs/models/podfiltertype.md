# PodFilterType

## Example Usage

```typescript
import { PodFilterType } from "cribl-control-plane/models";

let value: PodFilterType = {
  filter: "<value>",
  description: "midst excepting quickly if",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `filter`                                                                    | *string*                                                                    | :heavy_check_mark:                                                          | JavaScript expression applied to pods objects. Return 'true' to include it. |
| `description`                                                               | *string*                                                                    | :heavy_minus_sign:                                                          | Optional description of this rule's purpose                                 |