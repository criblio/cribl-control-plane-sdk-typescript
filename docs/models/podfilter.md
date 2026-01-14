# PodFilter

## Example Usage

```typescript
import { PodFilter } from "cribl-control-plane/models";

let value: PodFilter = {
  filter: "<value>",
  description: "woefully newsletter fathom ack who than productive edge bah",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `filter`                                                                    | *string*                                                                    | :heavy_check_mark:                                                          | JavaScript expression applied to pods objects. Return 'true' to include it. |
| `description`                                                               | *string*                                                                    | :heavy_minus_sign:                                                          | Optional description of this rule's purpose                                 |