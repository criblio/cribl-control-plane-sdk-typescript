# PipelineFunctionPivot

## Example Usage

```typescript
import { PipelineFunctionPivot } from "cribl-control-plane/models";

let value: PipelineFunctionPivot = {
  id: "pivot",
  description:
    "thankfully unimpressively secondary that insert sturdy phew loftily",
  disabled: false,
  final: false,
  conf: {
    labelField: "<value>",
    dataFields: [
      "<value 1>",
    ],
    qualifierFields: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  groupId: "<id>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `filter`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | Filter that selects data to be fed through this Function                                     |
| `id`                                                                                         | *"pivot"*                                                                                    | :heavy_check_mark:                                                                           | Function ID                                                                                  |
| `description`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | Simple description of this step                                                              |
| `disabled`                                                                                   | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | If true, data will not be pushed through this function                                       |
| `final`                                                                                      | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | If enabled, stops the results of this Function from being passed to the downstream Functions |
| `conf`                                                                                       | [models.SimplePivotConfiguration](../models/simplepivotconfiguration.md)                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `groupId`                                                                                    | *string*                                                                                     | :heavy_minus_sign:                                                                           | Group ID                                                                                     |