# CreateInputSystemByPackPodFilter

## Example Usage

```typescript
import { CreateInputSystemByPackPodFilter } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackPodFilter = {
  filter: "<value>",
  description:
    "disconnection meh while coin repeat necklace gosh warped notwithstanding",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `filter`                                                                    | *string*                                                                    | :heavy_check_mark:                                                          | JavaScript expression applied to pods objects. Return 'true' to include it. |
| `description`                                                               | *string*                                                                    | :heavy_minus_sign:                                                          | Optional description of this rule's purpose                                 |