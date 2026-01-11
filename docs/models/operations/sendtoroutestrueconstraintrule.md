# SendToRoutesTrueConstraintRule

## Example Usage

```typescript
import { SendToRoutesTrueConstraintRule } from "cribl-control-plane/models/operations";

let value: SendToRoutesTrueConstraintRule = {
  filter: "<value>",
  description: "lieu minus confirm dwell without abaft archaeology confound aw",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `filter`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | JavaScript expression applied to Journal objects. Return 'true' to include it. |
| `description`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | Optional description of this rule's purpose                                    |