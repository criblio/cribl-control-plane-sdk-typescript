# InputKubeLogsRule

## Example Usage

```typescript
import { InputKubeLogsRule } from "cribl-control-plane/models/operations";

let value: InputKubeLogsRule = {
  filter: "<value>",
  description: "now bah upon parsnip yippee consequently",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `filter`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | JavaScript expression applied to Pod objects. Return 'true' to include it. |
| `description`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | Optional description of this rule's purpose                                |