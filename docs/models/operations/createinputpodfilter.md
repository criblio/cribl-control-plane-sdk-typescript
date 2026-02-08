# CreateInputPodFilter

## Example Usage

```typescript
import { CreateInputPodFilter } from "cribl-control-plane/models/operations";

let value: CreateInputPodFilter = {
  filter: "<value>",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `filter`                                                                    | *string*                                                                    | :heavy_check_mark:                                                          | JavaScript expression applied to pods objects. Return 'true' to include it. |
| `description`                                                               | *string*                                                                    | :heavy_minus_sign:                                                          | Optional description of this rule's purpose                                 |