# InputCollectionPart1Type1Rule

## Example Usage

```typescript
import { InputCollectionPart1Type1Rule } from "cribl-control-plane/models/operations";

let value: InputCollectionPart1Type1Rule = {
  filter: "<value>",
  description:
    "interestingly birdcage bug stool sans knuckle pro almost but white",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `filter`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | JavaScript expression applied to Journal objects. Return 'true' to include it. |
| `description`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | Optional description of this rule's purpose                                    |