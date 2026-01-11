# PodFilter

## Example Usage

```typescript
import { PodFilter } from "cribl-control-plane/models/operations";

let value: PodFilter = {
  filter: "<value>",
  description:
    "spectate round overproduce though psst commodity except across yum",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `filter`                                                                    | *string*                                                                    | :heavy_check_mark:                                                          | JavaScript expression applied to pods objects. Return 'true' to include it. |
| `description`                                                               | *string*                                                                    | :heavy_minus_sign:                                                          | Optional description of this rule's purpose                                 |