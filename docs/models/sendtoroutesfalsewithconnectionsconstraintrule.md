# SendToRoutesFalseWithConnectionsConstraintRule

## Example Usage

```typescript
import { SendToRoutesFalseWithConnectionsConstraintRule } from "cribl-control-plane/models";

let value: SendToRoutesFalseWithConnectionsConstraintRule = {
  filter: "<value>",
  description: "buck exactly account doubtfully individual yuck derby",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `filter`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | JavaScript expression applied to Journal objects. Return 'true' to include it. |
| `description`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | Optional description of this rule's purpose                                    |