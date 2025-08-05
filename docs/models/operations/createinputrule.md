# CreateInputRule

## Example Usage

```typescript
import { CreateInputRule } from "cribl-control-plane/models/operations";

let value: CreateInputRule = {
  filter: "<value>",
  description:
    "or quick optimistic merry notarize finally gladly whether sadly writhing",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `filter`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | JavaScript expression applied to Journal objects. Return 'true' to include it. |
| `description`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | Optional description of this rule's purpose                                    |