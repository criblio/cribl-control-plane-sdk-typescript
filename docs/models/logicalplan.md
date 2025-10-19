# LogicalPlan

## Example Usage

```typescript
import { LogicalPlan } from "cribl-control-plane/models";

let value: LogicalPlan = {
  isPreviewableOperation: false,
  type: "extract",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `isPreviewableOperation`                                       | *boolean*                                                      | :heavy_minus_sign:                                             | N/A                                                            |
| `type`                                                         | [models.LogicalPlanNodeType](../models/logicalplannodetype.md) | :heavy_check_mark:                                             | N/A                                                            |