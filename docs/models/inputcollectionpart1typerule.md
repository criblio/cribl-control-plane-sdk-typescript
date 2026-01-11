# InputCollectionPart1TypeRule

## Example Usage

```typescript
import { InputCollectionPart1TypeRule } from "cribl-control-plane/models";

let value: InputCollectionPart1TypeRule = {
  filter: "<value>",
  description: "icy while than following knowingly seal frozen",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `filter`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | JavaScript expression applied to Journal objects. Return 'true' to include it. |
| `description`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | Optional description of this rule's purpose                                    |