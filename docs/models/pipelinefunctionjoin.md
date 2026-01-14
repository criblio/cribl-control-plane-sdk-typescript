# PipelineFunctionJoin

## Example Usage

```typescript
import { PipelineFunctionJoin } from "cribl-control-plane/models";

let value: PipelineFunctionJoin = {
  filter: "<value>",
  id: "join",
  description: "think atop wherever but circle",
  disabled: true,
  final: true,
  conf: {
    kind: "<value>",
    hints: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    fieldConditions: [
      {
        leftFieldName: "<value>",
        rightFieldName: "<value>",
      },
    ],
    searchJobId: "<id>",
    stageId: "<id>",
  },
  groupId: "<id>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `filter`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | Filter that selects data to be fed through this Function                                     |
| `id`                                                                                         | *"join"*                                                                                     | :heavy_check_mark:                                                                           | Function ID                                                                                  |
| `description`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | Simple description of this step                                                              |
| `disabled`                                                                                   | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | If true, data will not be pushed through this function                                       |
| `final`                                                                                      | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | If enabled, stops the results of this Function from being passed to the downstream Functions |
| `conf`                                                                                       | [models.FunctionConfSchemaJoin](../models/functionconfschemajoin.md)                         | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `groupId`                                                                                    | *string*                                                                                     | :heavy_minus_sign:                                                                           | Group ID                                                                                     |