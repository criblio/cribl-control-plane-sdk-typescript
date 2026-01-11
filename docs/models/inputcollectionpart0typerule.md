# InputCollectionPart0TypeRule

## Example Usage

```typescript
import { InputCollectionPart0TypeRule } from "cribl-control-plane/models";

let value: InputCollectionPart0TypeRule = {
  filter: "<value>",
  description: "following putrid worth yowza for all times",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `filter`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | JavaScript expression applied to Journal objects. Return 'true' to include it. |
| `description`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | Optional description of this rule's purpose                                    |